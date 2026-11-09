import { useEffect } from 'react';
import { useProgress } from '../context/ProgressContext.jsx';
import { canSpeak, speak } from '../lib/speech.js';
import HafalButton from './HafalButton.jsx';

/**
 * Panel detail karakter. Di desktop tampil sebagai kolom kanan yang menempel;
 * di HP menjadi lembar bawah (bottom sheet) yang muncul saat karakter dipilih.
 */
export default function KanaDetail({ deck, item, onClose }) {
  const { isHafal, toggle } = useProgress();

  useEffect(() => {
    if (!item) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [item, onClose]);

  if (!item) {
    return (
      <aside className="detail" aria-label="Detail karakter">
        <p className="detail-empty">Pilih satu karakter di tabel untuk melihat contoh kata dan artinya.</p>
      </aside>
    );
  }

  const id = `${deck}:${item.kana}`;

  return (
    <aside className="detail open" aria-label={`Detail ${item.romaji}`}>
      <button type="button" className="detail-close" onClick={onClose}>
        Tutup
      </button>

      <div className="detail-top">
        <span className="detail-char" lang="ja">
          {item.kana}
        </span>
        <div className="detail-id">
          <span className="detail-romaji">{item.romaji}</span>
          {canSpeak && (
            <button type="button" className="btn btn-small" onClick={() => speak(item.kana)}>
              Putar
            </button>
          )}
        </div>
      </div>

      {item.word ? (
        <div className="example">
          <span className="label">Contoh kata</span>
          <div className="example-row">
            <span className="example-word" lang="ja">
              {item.word}
            </span>
            {canSpeak && (
              <button
                type="button"
                className="btn btn-small btn-ghost"
                onClick={() => speak(item.word)}
                aria-label={`Putar ${item.word}`}
              >
                Putar
              </button>
            )}
          </div>
          <span className="example-reading">{item.reading}</span>
          <span className="example-meaning">{item.meaning}</span>
        </div>
      ) : null}

      {item.note && <p className="detail-note">{item.note}</p>}

      <HafalButton done={isHafal(id)} onToggle={() => toggle(id)} />
    </aside>
  );
}
