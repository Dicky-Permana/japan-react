import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext.jsx';
import { hiragana } from '../data/hiragana.js';
import { katakana } from '../data/katakana.js';
import { kanji } from '../data/kanji.js';
import { flattenKana, shuffle } from '../lib/kana.js';
import { canSpeak, speak } from '../lib/speech.js';
import HafalButton from '../components/HafalButton.jsx';

const kanaItems = (deck, data) =>
  flattenKana(data).map((c) => ({
    id: `${deck}:${c.kana}`,
    front: c.kana,
    answer: c.romaji,
    word: c.word,
    reading: c.reading,
    meaning: c.meaning,
    speakText: c.kana,
  }));

const DECKS = {
  hiragana: { label: 'Hiragana', items: kanaItems('hiragana', hiragana) },
  katakana: { label: 'Katakana', items: kanaItems('katakana', katakana) },
  kanji: {
    label: 'Kanji',
    items: kanji.map((k) => ({
      id: `kanji:${k.kanji}`,
      front: k.kanji,
      answer: k.meaning,
      readings: [k.on.join('、'), k.kun.join('、')].filter(Boolean).join(' ・ '),
      word: k.examples[0].word,
      reading: k.examples[0].reading,
      meaning: k.examples[0].meaning,
      speakText: k.examples[0].reading,
    })),
  },
};

export default function Latihan() {
  const [params, setParams] = useSearchParams();
  const fromUrl = params.get('deck');
  const initialDeck = DECKS[fromUrl] ? fromUrl : 'hiragana';

  const { hafal, isHafal, toggle } = useProgress();
  const [deckId, setDeckId] = useState(initialDeck);
  const [hideDone, setHideDone] = useState(false);
  const [shuffled, setShuffled] = useState(false);

  const build = (id, hide, shuf) => {
    let list = DECKS[id].items;
    if (hide) list = list.filter((it) => !hafal.has(it.id));
    return shuf ? shuffle(list) : list;
  };

  const [queue, setQueue] = useState(() => build(initialDeck, false, false));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const current = queue[pos];
  const finished = queue.length > 0 && pos >= queue.length;

  const restart = ({ id = deckId, hide = hideDone, shuf = shuffled } = {}) => {
    setQueue(build(id, hide, shuf));
    setPos(0);
    setFlipped(false);
  };

  const chooseDeck = (id) => {
    setDeckId(id);
    setParams({ deck: id }, { replace: true });
    restart({ id });
  };

  const next = () => {
    setFlipped(false);
    setPos((p) => Math.min(p + 1, queue.length));
  };
  const prev = () => {
    setFlipped(false);
    setPos((p) => Math.max(p - 1, 0));
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest('input, select, textarea')) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setFlipped(false);
        setPos((p) => Math.min(p + 1, queue.length));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setFlipped(false);
        setPos((p) => Math.max(p - 1, 0));
      } else if ((e.key === ' ' || e.key === 'Enter') && !e.target.closest('button, a')) {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.key.toLowerCase() === 'h' && current) {
        toggle(current.id);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current, toggle, queue.length]);

  const deck = DECKS[deckId];

  return (
    <div className="page">
      <header className="page-head">
        <h1>Latihan</h1>
        <p>Lihat karakternya, coba ingat bacaan atau artinya, lalu balik kartu untuk mengecek.</p>
      </header>

      <div className="practice">
        <aside className="practice-panel">
          <div className="field">
            <span className="label" id="deck-label">
              Materi
            </span>
            <div className="tabs tabs-stack" role="group" aria-labelledby="deck-label">
              {Object.entries(DECKS).map(([id, d]) => (
                <button key={id} type="button" className="tab" aria-pressed={deckId === id} onClick={() => chooseDeck(id)}>
                  {d.label}
                  <span className="tab-count">{d.items.length}</span>
                </button>
              ))}
            </div>
          </div>

          <label className="check">
            <input
              type="checkbox"
              checked={hideDone}
              onChange={(e) => {
                setHideDone(e.target.checked);
                restart({ hide: e.target.checked });
              }}
            />
            Lewati yang sudah hafal
          </label>

          <div className="panel-row">
            <button
              type="button"
              className="btn"
              onClick={() => {
                setShuffled(true);
                restart({ shuf: true });
              }}
            >
              Acak
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setShuffled(false);
                restart({ shuf: false });
              }}
            >
              Urutan tabel
            </button>
          </div>

          <dl className="kbd-help">
            <dt>
              <kbd>Spasi</kbd>
            </dt>
            <dd>balik kartu</dd>
            <dt>
              <kbd>←</kbd> <kbd>→</kbd>
            </dt>
            <dd>kartu sebelum / berikutnya</dd>
            <dt>
              <kbd>H</kbd>
            </dt>
            <dd>tandai hafal</dd>
          </dl>
        </aside>

        <section className="practice-stage" aria-label={`Kartu ${deck.label}`}>
          {queue.length === 0 ? (
            <div className="stage-message">
              <p>Semua kartu {deck.label.toLowerCase()} sudah ditandai hafal.</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setHideDone(false);
                  restart({ hide: false });
                }}
              >
                Tampilkan semua
              </button>
            </div>
          ) : finished ? (
            <div className="stage-message">
              <p>
                Satu putaran selesai: {queue.length} kartu. Yang sudah hafal kini{' '}
                {queue.filter((it) => hafal.has(it.id)).length}.
              </p>
              <div className="panel-row">
                <button type="button" className="btn btn-primary" onClick={() => restart()}>
                  Ulangi
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    setHideDone(true);
                    restart({ hide: true, shuf: true });
                  }}
                >
                  Ulangi yang belum hafal
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="stage-count">
                Kartu {pos + 1} / {queue.length}
              </p>

              <div
                key={current.id}
                className={`flash${flipped ? ' is-flipped' : ''}${isHafal(current.id) ? ' is-done' : ''}`}
              >
                <div className="flip-inner">
                  <button
                    type="button"
                    className="flip-face flash-front"
                    onClick={() => setFlipped(true)}
                    inert={flipped}
                    aria-label={`${current.front}. Balik kartu`}
                  >
                    <span className="flash-char" lang="ja">
                      {current.front}
                    </span>
                    <span className="flash-hint">Ketuk untuk balik</span>
                  </button>

                  <div className="flip-face flash-back" inert={!flipped} aria-live="polite">
                    <span className="flash-char-sm" lang="ja">
                      {current.front}
                    </span>
                    <span className="flash-answer">{current.answer}</span>
                    {current.readings && (
                      <span className="flash-readings" lang="ja">
                        {current.readings}
                      </span>
                    )}
                    {current.word && (
                      <div className="flash-example">
                        <span className="example-word" lang="ja">
                          {current.word}
                        </span>
                        <span className="example-reading">{current.reading}</span>
                        <span className="example-meaning">{current.meaning}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flash-nav">
                <button type="button" className="btn" onClick={prev} disabled={pos === 0}>
                  Sebelumnya
                </button>
                <button type="button" className="btn" onClick={() => setFlipped((f) => !f)}>
                  Balik
                </button>
                <button type="button" className="btn btn-primary" onClick={next}>
                  Berikutnya
                </button>
              </div>
              <div className="flash-extra">
                {canSpeak && (
                  <button type="button" className="btn btn-ghost" onClick={() => speak(current.speakText)}>
                    Putar
                  </button>
                )}
                <HafalButton done={isHafal(current.id)} onToggle={() => toggle(current.id)} />
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
