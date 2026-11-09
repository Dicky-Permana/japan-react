import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import KanaTable from './KanaTable.jsx';
import KanaDetail from './KanaDetail.jsx';
import { useProgress } from '../context/ProgressContext.jsx';
import { countSection, flattenKana } from '../lib/kana.js';

const TABS = ['gojuon', 'dakuten', 'youon'];

/** Halaman generik untuk hiragana dan katakana. */
export default function KanaPage({ deck, title, intro, data }) {
  const [tab, setTab] = useState('gojuon');
  const [selected, setSelected] = useState(null);
  const { countDeck } = useProgress();
  const total = flattenKana(data).length;
  const section = data[tab];

  const close = useCallback(() => setSelected(null), []);

  const changeTab = (id) => {
    setTab(id);
    setSelected(null);
  };

  return (
    <div className="page">
      <header className="page-head page-head-split">
        <div>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <div className="page-head-side">
          <span className="stat">
            <strong>{countDeck(deck)}</strong> / {total} hafal
          </span>
          <Link to={`/latihan?deck=${deck}`} className="btn btn-primary">
            Mulai latihan
          </Link>
        </div>
      </header>

      <div className="tabs" role="group" aria-label="Kelompok karakter">
        {TABS.map((id) => (
          <button
            key={id}
            type="button"
            className="tab"
            aria-pressed={tab === id}
            onClick={() => changeTab(id)}
          >
            {data[id].label}
            <span className="tab-count">{countSection(data[id])}</span>
          </button>
        ))}
      </div>

      <div className="kana-layout">
        <div className="kana-main">
          <KanaTable deck={deck} section={section} selectedKana={selected?.kana} onSelect={setSelected} />
          <p className="table-note">{section.note}</p>
        </div>
        <KanaDetail deck={deck} item={selected} onClose={close} />
      </div>
    </div>
  );
}
