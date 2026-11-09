import { useState } from 'react';
import { useProgress } from '../context/ProgressContext.jsx';
import { canSpeak, speak } from '../lib/speech.js';
import HafalButton from './HafalButton.jsx';

/** Kartu kanji yang bisa dibalik: depan = kanji, belakang = arti, bacaan, dan kosakata. */
export default function KanjiCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  const { isHafal, toggle } = useProgress();
  const id = `kanji:${item.kanji}`;
  const done = isHafal(id);

  return (
    <article className={`kanji-card${flipped ? ' is-flipped' : ''}${done ? ' is-done' : ''}`}>
      <div className="flip-inner">
        <button
          type="button"
          className="flip-face kanji-front"
          onClick={() => setFlipped(true)}
          inert={flipped}
          aria-label={`${item.kanji}. Balik untuk melihat arti`}
        >
          <span className="kanji-level">{item.level}</span>
          <span className="kanji-char" lang="ja">
            {item.kanji}
          </span>
          <span className="kanji-hint">Ketuk untuk balik</span>
        </button>

        <div className="flip-face kanji-back" inert={!flipped}>
          <div className="kanji-back-head">
            <span className="kanji-char-sm" lang="ja">
              {item.kanji}
            </span>
            <span className="kanji-meaning">{item.meaning}</span>
          </div>

          <dl className="readings">
            <dt>On</dt>
            <dd lang="ja">{item.on.length ? item.on.join('、') : '—'}</dd>
            <dt>Kun</dt>
            <dd lang="ja">{item.kun.length ? item.kun.join('、') : '—'}</dd>
          </dl>

          <ul className="vocab">
            {item.examples.map((ex) => (
              <li key={ex.word}>
                <span className="vocab-word" lang="ja">
                  {ex.word}
                </span>
                <span className="vocab-reading" lang="ja">
                  {ex.reading}
                </span>
                <span className="vocab-meaning">{ex.meaning}</span>
              </li>
            ))}
          </ul>

          <div className="kanji-actions">
            <button type="button" className="btn btn-small" onClick={() => setFlipped(false)}>
              Balik
            </button>
            {canSpeak && (
              <button
                type="button"
                className="btn btn-small btn-ghost"
                onClick={() => speak(item.examples[0].reading)}
                aria-label={`Putar ${item.examples[0].word}`}
              >
                Putar
              </button>
            )}
            <HafalButton small done={done} onToggle={() => toggle(id)} />
          </div>
        </div>
      </div>
    </article>
  );
}
