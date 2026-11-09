import { useProgress } from '../context/ProgressContext.jsx';

export default function KanaTable({ deck, section, selectedKana, onSelect }) {
  const { isHafal } = useProgress();

  return (
    <table className={`kana-table cols-${section.columns.length}`}>
      <caption className="sr-only">{section.caption}</caption>
      <thead>
        <tr>
          <th scope="col" className="row-head">
            <span className="sr-only">Baris</span>
          </th>
          {section.columns.map((col) => (
            <th scope="col" key={col}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {section.rows.map((row, r) => (
          <tr key={`${row.label}-${r}`}>
            <th scope="row" className="row-head">
              {row.label}
            </th>
            {row.cells.map((cell, i) =>
              cell ? (
                <td key={cell.kana}>
                  <button
                    type="button"
                    className={`kana-cell${isHafal(`${deck}:${cell.kana}`) ? ' is-done' : ''}`}
                    aria-pressed={selectedKana === cell.kana}
                    onClick={() => onSelect(cell)}
                  >
                    <span className="cell-kana" lang="ja">
                      {cell.kana}
                    </span>
                    <span className="cell-romaji">{cell.romaji}</span>
                  </button>
                </td>
              ) : (
                <td key={`gap-${i}`} className="gap" aria-hidden="true" />
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
