# Aplikasi Belajar Bahasa Jepang (React)

Prompt perancangan untuk membangun aplikasi web pembelajaran bahasa Jepang interaktif berbasis React, dengan routing per materi, tema warna khusus, layout responsif, serta deployment otomatis lewat GitHub dan Vercel.

Dokumen ini dipakai sebagai acuan (brief) untuk AI maupun developer. Bagian terakhir berisi panduan agar hasil akhir tidak terlihat seperti antarmuka buatan AI.

---

## 1. Role

Anda adalah **Senior Full-Stack Web Developer dan UI/UX Designer** yang ahli dalam:

- ekosistem React dan desain antarmuka responsif
- integrasi CI/CD Git/GitHub
- deployment otomatis di Vercel

Prioritas utama: arsitektur kode frontend yang **modular, bersih, berperforma tinggi, dan mudah dipelihara** untuk aplikasi edukasi interaktif.

## 2. Task

Rancang dan buat kode lengkap aplikasi web pembelajaran bahasa Jepang berbasis React dengan:

- sistem routing per materi (Hiragana, Katakana, Kanji, Romaji, contoh kata, dan arti)
- styling tema khusus
- antarmuka responsif: **horizontal untuk desktop/PC**, **vertikal untuk seluler/HP**
- panduan commit ke GitHub
- konfigurasi deployment ke Vercel

## 3. Context

### Kerangka kerja

React (Vite / Create React App / Next.js) dengan **React Router** untuk navigasi antarhalaman.

### Skema warna utama

| Elemen | Kode |
| --- | --- |
| Background | `#8ACFF8` |
| Kartu materi (Card) | `#98E8DE` |

### Halaman dan konten materi

| Halaman | Isi |
| --- | --- |
| Hiragana | Daftar karakter lengkap, romaji, pelafalan audio (opsional), contoh kata, dan arti |
| Katakana | Daftar karakter lengkap, romaji, contoh kata serapan, dan arti |
| Kanji | Kanji dasar N5/N4, onyomi/kunyomi, contoh kosakata, dan arti |
| Romaji / Panduan Dasar | Penjelasan aturan penulisan dan pelafalan |

### Responsivitas dan layout

- **Desktop/PC:** card/grid melebar secara horizontal
- **Mobile/HP:** tata letak vertikal memanjang, nyaman discroll dengan satu tangan

### Referensi proyek

Struktur UI dan alur interaksi terinspirasi dari repositori [BacaKana](https://github.com/Dicky-Permana/BacaKana).

### Deployment dan version control

- Git commit dan push ke repositori GitHub pribadi
- Deployment otomatis terintegrasi dengan Vercel

## 4. Reasoning

Memisahkan materi bahasa Jepang ke halaman-halaman modular dan menyajikan antarmuka adaptif berbasis kartu interaktif dengan palet warna konsisten membantu pengguna belajar bertahap tanpa kelelahan visual (*cognitive overload*), baik di layar ponsel maupun komputer.

## 5. Stop Conditions

Tugas dianggap selesai apabila:

1. Struktur folder dan file konfigurasi React terdefinisi dengan jelas.
2. Seluruh halaman utama (Hiragana, Katakana, Kanji, Romaji) beserta dataset contoh kata dan arti sudah diimplementasikan lengkap, **tanpa placeholder terpotong**.
3. Kode CSS/Tailwind mencerminkan warna `#8ACFF8` (background) dan `#98E8DE` (card) serta layout responsif (horizontal di desktop, vertikal di mobile).
4. Tersedia instruksi terminal langkah demi langkah untuk inisialisasi Git, push ke GitHub, dan konfigurasi Vercel hingga web aktif (live).

## 6. Output

Sajikan keluaran dalam format:

- **Ringkasan arsitektur** file/folder proyek
- **Potongan kode inti** yang siap salin dan jalankan: komponen layout, routing, halaman materi, styling, dan mock data
- **Panduan CLI** untuk instalasi package, build, commit Git, dan deployment ke Vercel

---

## 7. Tambahan: Jangan Seperti Tampilan AI

Hasil akhir harus terasa dirancang manusia, bukan template generik. Ikuti aturan berikut.

### Hindari (ciri khas tampilan AI)

- Gradient ungu-biru atau gradient pelangi di hero, tombol, atau teks
- Hero section raksasa dengan headline klise seperti "Belajar Bahasa Jepang dengan Mudah"
- Emoji berlebihan di judul, tombol, dan daftar fitur
- Card seragam dengan `rounded-2xl`, bayangan lembut, dan ikon di atas, diulang tanpa variasi
- Glassmorphism, efek glow, dan blob/orb dekoratif tanpa fungsi
- Teks marketing kosong: "powerful", "seamless", "revolusioner", "all-in-one"
- Footer dan section palsu (testimoni, harga, statistik karangan) yang tidak relevan untuk aplikasi belajar
- Animasi masuk (fade-up) di semua elemen
- Ikon dari satu library di setiap baris tanpa alasan

### Terapkan

- **Warna tetap terkendali.** Pakai `#8ACFF8` dan `#98E8DE` sebagai dasar, tambahkan satu warna teks gelap (misalnya biru tua atau abu kebiruan) dan satu warna aksen hangat secukupnya untuk penanda penting. Jangan menambah palet baru.
- **Tipografi berkarakter.** Gunakan font yang mendukung aksara Jepang dengan baik (misalnya Noto Sans JP atau Zen Maru Gothic) untuk karakter, dan satu font sans yang bersih untuk teks antarmuka. Karakter kana/kanji tampil besar dan jelas, itu bintang halamannya.
- **Konten sebagai pusat desain.** Karakter Jepang adalah elemen visual utama, bukan ilustrasi atau dekorasi. Tata letak mengikuti kebutuhan belajar: tabel gojūon yang rapi, baris dan kolom sesuai urutan pelajaran.
- **Variasi ukuran dan ritme.** Jangan semua card sama. Pembeda antara karakter, romaji, contoh kata, dan arti harus jelas lewat ukuran dan bobot huruf, bukan lewat banyak kotak.
- **Border dan bayangan yang tegas dan hemat.** Gunakan border tipis atau bayangan datar (offset, tanpa blur berlebihan) agar card terasa seperti kartu belajar fisik.
- **Teks antarmuka singkat dan apa adanya.** Label seperti "Hiragana", "Mulai latihan", "Acak" lebih baik daripada kalimat promosi.
- **Interaksi fungsional.** Balik card untuk melihat arti, tombol putar audio, penanda "sudah hafal". Setiap animasi harus punya tujuan, misalnya transisi balik card, bukan hiasan.
- **Spasi dan grid yang konsisten.** Pakai skala jarak tetap (4/8px), lebar baca yang nyaman, dan jangan memadati layar.
- **Mobile dirancang sungguhan.** Navigasi bawah atau menu ringkas yang terjangkau ibu jari, target sentuh minimal 44px, tanpa scroll horizontal.
- **Aksesibilitas.** Kontras teks terhadap `#98E8DE` dan `#8ACFF8` harus memadai (gunakan teks gelap), fokus keyboard terlihat, dan atribut `lang="ja"` pada teks Jepang.

### Daftar periksa sebelum dianggap selesai

- [ ] Tidak ada gradient ungu atau efek glow
- [ ] Tidak ada emoji dekoratif di judul dan tombol
- [ ] Tidak ada teks marketing atau section palsu
- [ ] Hanya dua warna tema utama ditambah warna teks dan satu aksen
- [ ] Karakter Jepang menjadi elemen visual terbesar di setiap card
- [ ] Setiap animasi punya fungsi
- [ ] Tampilan HP dan desktop sama-sama dicek di ukuran nyata
- [ ] Teks antarmuka ringkas dan tidak berbau promosi

---

## Cara Memakai Dokumen Ini

1. Salin bagian 1 sampai 7 sebagai prompt ke AI pilihan Anda.
2. Minta AI mengerjakan bertahap: struktur folder, lalu routing dan layout, lalu tiap halaman materi, lalu panduan Git dan Vercel.
3. Periksa hasilnya dengan daftar periksa di bagian 7 sebelum commit.

## Lisensi

Bebas dipakai dan dimodifikasi untuk keperluan pribadi dan pembelajaran.
