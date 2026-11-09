import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext.jsx';
import { hiragana } from '../data/hiragana.js';
import { katakana } from '../data/katakana.js';
import { kanji } from '../data/kanji.js';
import { flattenKana } from '../lib/kana.js';

const DECKS = [
  {
    id: 'hiragana',
    glyph: 'あ',
    title: 'Hiragana',
    desc: 'Mulai di sini. Gojūon, dakuten, dan yōon.',
    total: flattenKana(hiragana).length,
  },
  {
    id: 'katakana',
    glyph: 'ア',
    title: 'Katakana',
    desc: 'Untuk kata serapan dan nama asing.',
    total: flattenKana(katakana).length,
  },
  {
    id: 'kanji',
    glyph: '日',
    title: 'Kanji',
    desc: 'Kanji dasar N5 dan N4 dengan onyomi dan kunyomi.',
    total: kanji.length,
  },
];

export default function Home() {
  const { countDeck } = useProgress();

  return (
    <div className="page home">
      <section className="home-intro">
        <h1>Kana &amp; Kanji</h1>
        <p>
          Urutan yang disarankan: hiragana, katakana, lalu kanji. Baca dulu{' '}
          <Link to="/romaji">panduan romaji</Link> kalau belum terbiasa dengan pelafalan Jepang. Tandai karakter yang
          sudah hafal; progres disimpan di perangkat ini.
        </p>
      </section>

      <ol className="deck-list">
        {DECKS.map((deck, i) => {
          const done = countDeck(deck.id);
          const pct = Math.round((done / deck.total) * 100);
          return (
            <li key={deck.id} className={`deck-row${i === 0 ? ' deck-row-first' : ''}`}>
              <span className="deck-glyph" lang="ja" aria-hidden="true">
                {deck.glyph}
              </span>
              <div className="deck-body">
                <span className="deck-step">Langkah {i + 1}</span>
                <h2>
                  <Link to={`/${deck.id}`}>{deck.title}</Link>
                </h2>
                <p className="deck-desc">{deck.desc}</p>
                <div className="progress" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`Progres ${deck.title}`}>
                  <span style={{ width: `${pct}%` }} />
                </div>
                <p className="deck-meta">
                  {done} dari {deck.total} hafal
                </p>
              </div>
              <div className="deck-links">
                <Link to={`/${deck.id}`} className="btn">
                  Buka tabel
                </Link>
                <Link to={`/latihan?deck=${deck.id}`} className="btn btn-primary">
                  Latihan
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
