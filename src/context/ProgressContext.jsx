import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'kana-kanji-hafal-v1';
const ProgressContext = createContext(null);

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

/**
 * Menyimpan daftar karakter yang sudah ditandai "hafal".
 * ID berbentuk "<deck>:<karakter>", misalnya "hiragana:あ" atau "kanji:日".
 */
export function ProgressProvider({ children }) {
  const [hafal, setHafal] = useState(loadInitial);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...hafal]));
    } catch {
      /* penyimpanan penuh atau diblokir: progres hanya bertahan di sesi ini */
    }
  }, [hafal]);

  const toggle = useCallback((id) => {
    setHafal((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const isHafal = useCallback((id) => hafal.has(id), [hafal]);

  const countDeck = useCallback(
    (deck) => {
      let n = 0;
      for (const id of hafal) if (id.startsWith(`${deck}:`)) n += 1;
      return n;
    },
    [hafal],
  );

  const value = useMemo(() => ({ hafal, toggle, isHafal, countDeck }), [hafal, toggle, isHafal, countDeck]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress harus dipakai di dalam <ProgressProvider>');
  return ctx;
}
