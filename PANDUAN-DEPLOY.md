# Panduan Menjalankan, Commit, dan Deploy

Panduan langkah demi langkah dari folder proyek lokal sampai web aktif di Vercel.

## Struktur proyek

```text
JapanReact/
├─ index.html              # HTML utama, font Zen Maru Gothic + IBM Plex Sans
├─ package.json
├─ vite.config.js
├─ vercel.json             # rewrite SPA agar /kanji dll. tidak 404 saat di-refresh
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ main.jsx             # BrowserRouter + ProgressProvider
   ├─ App.jsx              # definisi route
   ├─ context/
   │  └─ ProgressContext.jsx   # status "sudah hafal" (localStorage)
   ├─ lib/
   │  ├─ kana.js           # flatten, hitung, acak
   │  └─ speech.js         # audio pelafalan (Web Speech API, ja-JP)
   ├─ data/
   │  ├─ hiragana.js       # 46 gojūon + 25 dakuten + 33 yōon
   │  ├─ katakana.js       # 46 gojūon + 25 dakuten + 33 yōon
   │  └─ kanji.js          # kanji N5 + N4, onyomi/kunyomi, 2 kosakata per kanji
   ├─ components/
   │  ├─ Layout.jsx        # header + nav atas (desktop) + nav bawah (HP)
   │  ├─ KanaPage.jsx      # halaman generik hiragana/katakana
   │  ├─ KanaTable.jsx     # tabel gojūon
   │  ├─ KanaDetail.jsx    # panel kanan (desktop) / lembar bawah (HP)
   │  ├─ KanjiCard.jsx     # kartu balik kanji
   │  └─ HafalButton.jsx
   ├─ pages/
   │  ├─ Home.jsx  Hiragana.jsx  Katakana.jsx  Kanji.jsx
   │  ├─ Romaji.jsx        # panduan pelafalan & aturan Hepburn
   │  ├─ Latihan.jsx       # flashcard: balik, acak, tandai hafal
   │  └─ NotFound.jsx
   └─ styles/
      └─ global.css        # tema #8ACFF8 / #98E8DE, layout responsif
```

| Route | Halaman |
| --- | --- |
| `/` | Beranda dan progres |
| `/hiragana` | Tabel hiragana |
| `/katakana` | Tabel katakana |
| `/kanji` | Kartu kanji N5/N4 |
| `/romaji` | Panduan romaji dan pelafalan |
| `/latihan?deck=hiragana\|katakana\|kanji` | Flashcard |

## 1. Menjalankan secara lokal

Butuh Node.js 20 atau lebih baru.

```bash
npm install
npm run dev        # buka http://localhost:5173
npm run build      # hasil di folder dist/
npm run preview    # cek hasil build
```

## 2. Inisialisasi Git dan commit pertama

```bash
git init
git branch -M main
git add .
git commit -m "Aplikasi belajar kana dan kanji: routing, data, layout responsif"
```

## 3. Push ke GitHub

Buat repositori kosong di https://github.com/new (misalnya `japan-react`), **tanpa** README/.gitignore agar tidak bentrok. Lalu:

```bash
git remote add origin https://github.com/<username>/japan-react.git
git push -u origin main
```

Alternatif dengan GitHub CLI:

```bash
gh auth login
gh repo create japan-react --private --source=. --remote=origin --push
```

## 4. Deploy ke Vercel

### Cara A: lewat dashboard (deploy otomatis setiap push)

1. Masuk ke https://vercel.com dengan akun GitHub.
2. **Add New → Project**, pilih repositori `japan-react`, klik **Import**.
3. Vercel mendeteksi Vite. Pastikan:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Klik **Deploy**. Setelah selesai, web aktif di `https://japan-react-<acak>.vercel.app`.

Setiap `git push` ke `main` memicu deploy produksi baru; push ke branch lain menghasilkan Preview URL.

### Cara B: lewat Vercel CLI

```bash
npm i -g vercel
vercel login
vercel          # deploy preview pertama, jawab pertanyaan setup (default sudah benar)
vercel --prod   # deploy produksi
```

Untuk menghubungkan proyek CLI dengan repositori GitHub agar deploy otomatis:

```bash
vercel git connect
```

## 5. Alur kerja harian

```bash
git checkout -b tambah-kanji-n4
# ...ubah src/data/kanji.js...
npm run build
git add src/data/kanji.js
git commit -m "Tambah kanji N4: musim dan keluarga"
git push -u origin tambah-kanji-n4   # Vercel membuat Preview URL
# buka Pull Request di GitHub, merge ke main → deploy produksi
```

## Catatan

- `vercel.json` berisi rewrite ke `index.html`. Tanpa ini, membuka `/kanji` langsung atau me-refresh halaman akan 404 karena routing ditangani React Router di sisi klien.
- Audio memakai suara Jepang bawaan sistem (Web Speech API). Jika perangkat tidak punya suara `ja-JP`, tombol **Putar** tetap tampil tetapi pelafalan memakai suara default. Di Windows, tambahkan lewat Settings → Time & language → Speech → Add voices → Japanese.
- Progres "sudah hafal" disimpan di `localStorage` peramban, per perangkat.
