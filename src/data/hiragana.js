// Dataset hiragana: gojūon, dakuten/handakuten, dan yōon.
// Setiap sel: kana, romaji (Hepburn), contoh kata, bacaan romaji, dan arti.
// null = posisi kosong di tabel gojūon.

const c = (kana, romaji, word, reading, meaning, note) => ({ kana, romaji, word, reading, meaning, note });

export const hiragana = {
  gojuon: {
    label: 'Gojūon',
    caption: 'Tabel gojūon hiragana: 46 karakter dasar',
    columns: ['a', 'i', 'u', 'e', 'o'],
    note: 'Urutan gojūon dibaca per baris dari kiri ke kanan: a, ka, sa, ta, na, ha, ma, ya, ra, wa, lalu n.',
    rows: [
      { label: '–', cells: [c('あ', 'a', 'あめ', 'ame', 'hujan'), c('い', 'i', 'いぬ', 'inu', 'anjing'), c('う', 'u', 'うみ', 'umi', 'laut'), c('え', 'e', 'えき', 'eki', 'stasiun'), c('お', 'o', 'おちゃ', 'ocha', 'teh hijau')] },
      { label: 'k', cells: [c('か', 'ka', 'かさ', 'kasa', 'payung'), c('き', 'ki', 'きつね', 'kitsune', 'rubah'), c('く', 'ku', 'くるま', 'kuruma', 'mobil'), c('け', 'ke', 'けむり', 'kemuri', 'asap'), c('こ', 'ko', 'こども', 'kodomo', 'anak-anak')] },
      { label: 's', cells: [c('さ', 'sa', 'さかな', 'sakana', 'ikan'), c('し', 'shi', 'しお', 'shio', 'garam'), c('す', 'su', 'すし', 'sushi', 'sushi'), c('せ', 'se', 'せんせい', 'sensei', 'guru'), c('そ', 'so', 'そら', 'sora', 'langit')] },
      { label: 't', cells: [c('た', 'ta', 'たまご', 'tamago', 'telur'), c('ち', 'chi', 'ちず', 'chizu', 'peta'), c('つ', 'tsu', 'つき', 'tsuki', 'bulan'), c('て', 'te', 'てがみ', 'tegami', 'surat'), c('と', 'to', 'とけい', 'tokei', 'jam')] },
      { label: 'n', cells: [c('な', 'na', 'なつ', 'natsu', 'musim panas'), c('に', 'ni', 'にく', 'niku', 'daging'), c('ぬ', 'nu', 'ぬの', 'nuno', 'kain'), c('ね', 'ne', 'ねこ', 'neko', 'kucing'), c('の', 'no', 'のり', 'nori', 'rumput laut kering')] },
      { label: 'h', cells: [c('は', 'ha', 'はな', 'hana', 'bunga', 'Sebagai partikel topik, は dibaca "wa".'), c('ひ', 'hi', 'ひと', 'hito', 'orang'), c('ふ', 'fu', 'ふね', 'fune', 'kapal'), c('へ', 'he', 'へや', 'heya', 'kamar', 'Sebagai partikel arah, へ dibaca "e".'), c('ほ', 'ho', 'ほし', 'hoshi', 'bintang')] },
      { label: 'm', cells: [c('ま', 'ma', 'まど', 'mado', 'jendela'), c('み', 'mi', 'みず', 'mizu', 'air'), c('む', 'mu', 'むし', 'mushi', 'serangga'), c('め', 'me', 'め', 'me', 'mata'), c('も', 'mo', 'もり', 'mori', 'hutan')] },
      { label: 'y', cells: [c('や', 'ya', 'やま', 'yama', 'gunung'), null, c('ゆ', 'yu', 'ゆき', 'yuki', 'salju'), null, c('よ', 'yo', 'よる', 'yoru', 'malam')] },
      { label: 'r', cells: [c('ら', 'ra', 'らいねん', 'rainen', 'tahun depan'), c('り', 'ri', 'りんご', 'ringo', 'apel'), c('る', 'ru', 'るす', 'rusu', 'sedang tidak di rumah'), c('れ', 're', 'れきし', 'rekishi', 'sejarah'), c('ろ', 'ro', 'ろうそく', 'rousoku', 'lilin')] },
      { label: 'w', cells: [c('わ', 'wa', 'わたし', 'watashi', 'saya'), null, null, null, c('を', 'wo', 'ほんをよむ', 'hon o yomu', 'membaca buku', 'Hanya dipakai sebagai partikel objek dan dibaca "o".')] },
      { label: 'ん', cells: [c('ん', 'n', 'ほん', 'hon', 'buku', 'Satu-satunya kana tanpa vokal. Tidak pernah muncul di awal kata.'), null, null, null, null] },
    ],
  },

  dakuten: {
    label: 'Dakuten',
    caption: 'Hiragana dengan dakuten (゛) dan handakuten (゜)',
    columns: ['a', 'i', 'u', 'e', 'o'],
    note: 'Dakuten (゛) membuat bunyi bersuara: k→g, s→z, t→d, h→b. Handakuten (゜) mengubah h→p.',
    rows: [
      { label: 'g', cells: [c('が', 'ga', 'がっこう', 'gakkou', 'sekolah'), c('ぎ', 'gi', 'ぎんこう', 'ginkou', 'bank'), c('ぐ', 'gu', 'かぐ', 'kagu', 'perabot'), c('げ', 'ge', 'げんき', 'genki', 'sehat, bersemangat'), c('ご', 'go', 'ごはん', 'gohan', 'nasi')] },
      { label: 'z', cells: [c('ざ', 'za', 'ざっし', 'zasshi', 'majalah'), c('じ', 'ji', 'じかん', 'jikan', 'waktu'), c('ず', 'zu', 'ずつう', 'zutsuu', 'sakit kepala'), c('ぜ', 'ze', 'かぜ', 'kaze', 'angin'), c('ぞ', 'zo', 'ぞう', 'zou', 'gajah')] },
      { label: 'd', cells: [c('だ', 'da', 'だいがく', 'daigaku', 'universitas'), c('ぢ', 'ji', 'はなぢ', 'hanaji', 'mimisan', 'Bunyinya sama dengan じ; dipakai di kata tertentu saja.'), c('づ', 'zu', 'こづつみ', 'kozutsumi', 'paket kiriman', 'Bunyinya sama dengan ず; dipakai di kata tertentu saja.'), c('で', 'de', 'でんわ', 'denwa', 'telepon'), c('ど', 'do', 'どうぶつ', 'doubutsu', 'hewan')] },
      { label: 'b', cells: [c('ば', 'ba', 'ばら', 'bara', 'mawar'), c('び', 'bi', 'えび', 'ebi', 'udang'), c('ぶ', 'bu', 'ぶた', 'buta', 'babi'), c('べ', 'be', 'べんとう', 'bentou', 'bekal makan'), c('ぼ', 'bo', 'ぼうし', 'boushi', 'topi')] },
      { label: 'p', cells: [c('ぱ', 'pa', 'かんぱい', 'kanpai', 'bersulang'), c('ぴ', 'pi', 'えんぴつ', 'enpitsu', 'pensil'), c('ぷ', 'pu', 'てんぷら', 'tenpura', 'tempura'), c('ぺ', 'pe', 'ぺこぺこ', 'pekopeko', 'sangat lapar'), c('ぽ', 'po', 'さんぽ', 'sanpo', 'jalan-jalan')] },
    ],
  },

  youon: {
    label: 'Yōon',
    caption: 'Hiragana yōon: gabungan kana baris i dengan ゃ, ゅ, ょ kecil',
    columns: ['ya', 'yu', 'yo'],
    note: 'Yōon ditulis dengan ゃ ゅ ょ berukuran kecil dan dibaca satu ketukan: きゃ = kya, bukan ki-ya.',
    rows: [
      { label: 'k', cells: [c('きゃ', 'kya', 'きゃく', 'kyaku', 'tamu'), c('きゅ', 'kyu', 'きゅうり', 'kyuuri', 'mentimun'), c('きょ', 'kyo', 'きょう', 'kyou', 'hari ini')] },
      { label: 's', cells: [c('しゃ', 'sha', 'しゃしん', 'shashin', 'foto'), c('しゅ', 'shu', 'しゅくだい', 'shukudai', 'pekerjaan rumah'), c('しょ', 'sho', 'としょかん', 'toshokan', 'perpustakaan')] },
      { label: 'c', cells: [c('ちゃ', 'cha', 'おちゃ', 'ocha', 'teh'), c('ちゅ', 'chu', 'ちゅうい', 'chuui', 'perhatian, hati-hati'), c('ちょ', 'cho', 'ちょっと', 'chotto', 'sedikit, sebentar')] },
      { label: 'n', cells: [c('にゃ', 'nya', 'こんにゃく', 'konnyaku', 'konyaku (umbi iles-iles)'), c('にゅ', 'nyu', 'ぎゅうにゅう', 'gyuunyuu', 'susu sapi'), c('にょ', 'nyo', 'にょろにょろ', 'nyoronyoro', 'meliuk-liuk (seperti ular)')] },
      { label: 'h', cells: [c('ひゃ', 'hya', 'ひゃく', 'hyaku', 'seratus'), c('ひゅ', 'hyu', 'ひゅうひゅう', 'hyuuhyuu', 'bunyi angin bertiup'), c('ひょ', 'hyo', 'ひょう', 'hyou', 'macan tutul')] },
      { label: 'm', cells: [c('みゃ', 'mya', 'みゃく', 'myaku', 'denyut nadi'), c('みゅ', 'myu', null, null, null, 'Sangat jarang dalam kata asli Jepang; lebih sering muncul sebagai ミュ di katakana.'), c('みょ', 'myo', 'みょうじ', 'myouji', 'nama keluarga')] },
      { label: 'r', cells: [c('りゃ', 'rya', 'りゃくご', 'ryakugo', 'singkatan'), c('りゅ', 'ryu', 'りゅう', 'ryuu', 'naga'), c('りょ', 'ryo', 'りょこう', 'ryokou', 'perjalanan wisata')] },
      { label: 'g', cells: [c('ぎゃ', 'gya', 'ぎゃく', 'gyaku', 'kebalikan'), c('ぎゅ', 'gyu', 'ぎゅうにく', 'gyuuniku', 'daging sapi'), c('ぎょ', 'gyo', 'きんぎょ', 'kingyo', 'ikan mas koki')] },
      { label: 'j', cells: [c('じゃ', 'ja', 'じゃま', 'jama', 'gangguan'), c('じゅ', 'ju', 'じゅぎょう', 'jugyou', 'pelajaran di kelas'), c('じょ', 'jo', 'じょうず', 'jouzu', 'pandai, mahir')] },
      { label: 'b', cells: [c('びゃ', 'bya', 'さんびゃく', 'sanbyaku', 'tiga ratus'), c('びゅ', 'byu', null, null, null, 'Hampir tidak dipakai dalam kata asli Jepang; muncul sebagai ビュ di kata serapan.'), c('びょ', 'byo', 'びょういん', 'byouin', 'rumah sakit')] },
      { label: 'p', cells: [c('ぴゃ', 'pya', 'はっぴゃく', 'happyaku', 'delapan ratus'), c('ぴゅ', 'pyu', null, null, null, 'Hampir tidak dipakai dalam kata asli Jepang; muncul sebagai ピュ di kata serapan.'), c('ぴょ', 'pyo', 'ぴょんぴょん', 'pyonpyon', 'melompat-lompat')] },
    ],
  },
};
