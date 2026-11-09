/** Mengambil semua sel kana (tanpa celah kosong) dari satu dataset. */
export function flattenKana(data) {
  return Object.values(data).flatMap((section) => section.rows.flatMap((row) => row.cells.filter(Boolean)));
}

export function countSection(section) {
  return section.rows.reduce((n, row) => n + row.cells.filter(Boolean).length, 0);
}

/** Fisher–Yates shuffle, mengembalikan array baru. */
export function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
