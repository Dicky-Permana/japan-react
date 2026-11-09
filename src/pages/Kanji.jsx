import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import KanjiCard from '../components/KanjiCard.jsx';
import { kanji } from '../data/kanji.js';
import { useProgress } from '../context/ProgressContext.jsx';

const LEVELS = ['Semua', 'N5', 'N4'];

function matches(item, q) {
  if (!q) return true;
  const hay = [
    item.kanji,
    item.meaning,
    ...item.on,
    ...item.kun,
    ...item.examples.flatMap((ex) => [ex.word, ex.reading, ex.meaning]),
  ]
    .join(' ')
    .toLowerCase();
  return hay.includes(q);
}

export default function Kanji() {
  const [level, setLevel] = useState('Semua');
  const [query, setQuery] = useState('');
  const [hideDone, setHideDone] = useState(false);
  const { isHafal, countDeck } = useProgress();

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return kanji.filter(
      (item) =>
        (level === 'Semua' || item.level === level) &&
        matches(item, q) &&
        (!hideDone || !isHafal(`kanji:${item.kanji}`)),
    );
  }, [level, query, hideDone, isHafal]);

  return (
    <div className="page">
      <header className="page-head page-head-split">
        <div>
          <h1>Kanji</h1>
          <p>
            Kanji dasar JLPT N5 dan N4. Onyomi ditulis dengan katakana, kunyomi dengan hiragana. Ketuk kartu untuk
            melihat arti dan contoh kosakata.
          </p>
        </div>
        <div className="page-head-side">
          <span className="stat">
            <strong>{countDeck('kanji')}</strong> / {kanji.length} hafal
          </span>
          <Link to="/latihan?deck=kanji" className="btn btn-primary">
            Mulai latihan
          </Link>
        </div>
      </header>

      <div className="toolbar">
        <div className="tabs" role="group" aria-label="Level JLPT">
          {LEVELS.map((lv) => (
            <button key={lv} type="button" className="tab" aria-pressed={level === lv} onClick={() => setLevel(lv)}>
              {lv}
            </button>
          ))}
        </div>
        <label className="search">
          <span className="sr-only">Cari kanji</span>
          <input
            type="search"
            placeholder="Cari arti atau bacaan, mis. air, みず"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <label className="check">
          <input type="checkbox" checked={hideDone} onChange={(e) => setHideDone(e.target.checked)} />
          Sembunyikan yang sudah hafal
        </label>
      </div>

      <p className="result-count" aria-live="polite">
        {list.length} kanji
      </p>

      {list.length ? (
        <div className="kanji-grid">
          {list.map((item) => (
            <KanjiCard key={item.kanji} item={item} />
          ))}
        </div>
      ) : (
        <p className="empty">Tidak ada kanji yang cocok. Coba kata kunci lain.</p>
      )}
    </div>
  );
}
