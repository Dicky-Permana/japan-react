// Dataset katakana: gojūon, dakuten/handakuten, dan yōon.
// Contoh kata diambil dari kata serapan (gairaigo) yang umum dipakai.
// null = posisi kosong di tabel gojūon.

const c = (kana, romaji, word, reading, meaning, note) => ({ kana, romaji, word, reading, meaning, note });

export const katakana = {
  gojuon: {
    label: 'Gojūon',
    caption: 'Tabel gojūon katakana: 46 karakter dasar',
    columns: ['a', 'i', 'u', 'e', 'o'],
    note: 'Katakana dipakai untuk kata serapan, nama asing, dan penekanan. Tanda ー memanjangkan vokal sebelumnya.',
    rows: [
      { label: '–', cells: [c('ア', 'a', 'アイス', 'aisu', 'es krim'), c('イ', 'i', 'インク', 'inku', 'tinta'), c('ウ', 'u', 'ウイルス', 'uirusu', 'virus'), c('エ', 'e', 'エアコン', 'eakon', 'AC (pendingin ruangan)'), c('オ', 'o', 'オレンジ', 'orenji', 'jeruk')] },
      { label: 'k', cells: [c('カ', 'ka', 'カメラ', 'kamera', 'kamera'), c('キ', 'ki', 'キロ', 'kiro', 'kilo'), c('ク', 'ku', 'クラス', 'kurasu', 'kelas'), c('ケ', 'ke', 'ケーキ', 'keeki', 'kue'), c('コ', 'ko', 'コーヒー', 'koohii', 'kopi')] },
      { label: 's', cells: [c('サ', 'sa', 'サラダ', 'sarada', 'salad'), c('シ', 'shi', 'システム', 'shisutemu', 'sistem'), c('ス', 'su', 'スープ', 'suupu', 'sup'), c('セ', 'se', 'セーター', 'seetaa', 'sweter'), c('ソ', 'so', 'ソース', 'soosu', 'saus')] },
      { label: 't', cells: [c('タ', 'ta', 'タクシー', 'takushii', 'taksi'), c('チ', 'chi', 'チーズ', 'chiizu', 'keju'), c('ツ', 'tsu', 'ツアー', 'tsuaa', 'tur'), c('テ', 'te', 'テレビ', 'terebi', 'televisi'), c('ト', 'to', 'トマト', 'tomato', 'tomat')] },
      { label: 'n', cells: [c('ナ', 'na', 'ナイフ', 'naifu', 'pisau'), c('ニ', 'ni', 'ニット', 'nitto', 'pakaian rajut'), c('ヌ', 'nu', 'ヌードル', 'nuudoru', 'mi'), c('ネ', 'ne', 'ネクタイ', 'nekutai', 'dasi'), c('ノ', 'no', 'ノート', 'nooto', 'buku catatan')] },
      { label: 'h', cells: [c('ハ', 'ha', 'ハンバーガー', 'hanbaagaa', 'hamburger'), c('ヒ', 'hi', 'ヒーター', 'hiitaa', 'pemanas ruangan'), c('フ', 'fu', 'フォーク', 'fooku', 'garpu'), c('ヘ', 'he', 'ヘリコプター', 'herikoputaa', 'helikopter'), c('ホ', 'ho', 'ホテル', 'hoteru', 'hotel')] },
      { label: 'm', cells: [c('マ', 'ma', 'マスク', 'masuku', 'masker'), c('ミ', 'mi', 'ミルク', 'miruku', 'susu'), c('ム', 'mu', 'ムード', 'muudo', 'suasana'), c('メ', 'me', 'メール', 'meeru', 'surel'), c('モ', 'mo', 'モデル', 'moderu', 'model')] },
      { label: 'y', cells: [c('ヤ', 'ya', 'ヤード', 'yaado', 'yard (satuan panjang)'), null, c('ユ', 'yu', 'ユニフォーム', 'yunifoomu', 'seragam'), null, c('ヨ', 'yo', 'ヨーグルト', 'yooguruto', 'yoghurt')] },
      { label: 'r', cells: [c('ラ', 'ra', 'ラジオ', 'rajio', 'radio'), c('リ', 'ri', 'リボン', 'ribon', 'pita'), c('ル', 'ru', 'ルール', 'ruuru', 'aturan'), c('レ', 're', 'レモン', 'remon', 'lemon'), c('ロ', 'ro', 'ロボット', 'robotto', 'robot')] },
      { label: 'w', cells: [c('ワ', 'wa', 'ワイン', 'wain', 'anggur (minuman)'), null, null, null, c('ヲ', 'wo', null, null, null, 'Hampir tidak pernah dipakai. Partikel objek selalu ditulis dengan hiragana を.')] },
      { label: 'ン', cells: [c('ン', 'n', 'パン', 'pan', 'roti', 'Seperti ん, tidak pernah muncul di awal kata.'), null, null, null, null] },
    ],
  },

  dakuten: {
    label: 'Dakuten',
    caption: 'Katakana dengan dakuten (゛) dan handakuten (゜)',
    columns: ['a', 'i', 'u', 'e', 'o'],
    note: 'Aturannya sama dengan hiragana: ゛ untuk bunyi bersuara (g, z, d, b), ゜ untuk bunyi p.',
    rows: [
      { label: 'g', cells: [c('ガ', 'ga', 'ガラス', 'garasu', 'kaca'), c('ギ', 'gi', 'ギター', 'gitaa', 'gitar'), c('グ', 'gu', 'グラス', 'gurasu', 'gelas'), c('ゲ', 'ge', 'ゲーム', 'geemu', 'permainan'), c('ゴ', 'go', 'ゴルフ', 'gorufu', 'golf')] },
      { label: 'z', cells: [c('ザ', 'za', 'ピザ', 'piza', 'pizza'), c('ジ', 'ji', 'ジーンズ', 'jiinzu', 'celana jin'), c('ズ', 'zu', 'ズボン', 'zubon', 'celana panjang'), c('ゼ', 'ze', 'ゼロ', 'zero', 'nol'), c('ゾ', 'zo', 'ゾーン', 'zoon', 'zona')] },
      { label: 'd', cells: [c('ダ', 'da', 'ダンス', 'dansu', 'dansa'), c('ヂ', 'ji', null, null, null, 'Praktis tidak dipakai; bunyi "ji" ditulis ジ.'), c('ヅ', 'zu', null, null, null, 'Praktis tidak dipakai; bunyi "zu" ditulis ズ.'), c('デ', 'de', 'デパート', 'depaato', 'pusat perbelanjaan'), c('ド', 'do', 'ドア', 'doa', 'pintu')] },
      { label: 'b', cells: [c('バ', 'ba', 'バス', 'basu', 'bus'), c('ビ', 'bi', 'ビル', 'biru', 'gedung'), c('ブ', 'bu', 'ブラシ', 'burashi', 'sikat'), c('ベ', 'be', 'ベッド', 'beddo', 'tempat tidur'), c('ボ', 'bo', 'ボール', 'booru', 'bola')] },
      { label: 'p', cells: [c('パ', 'pa', 'パソコン', 'pasokon', 'komputer pribadi'), c('ピ', 'pi', 'ピアノ', 'piano', 'piano'), c('プ', 'pu', 'プール', 'puuru', 'kolam renang'), c('ペ', 'pe', 'ペン', 'pen', 'pena'), c('ポ', 'po', 'ポスト', 'posuto', 'kotak pos')] },
    ],
  },

  youon: {
    label: 'Yōon',
    caption: 'Katakana yōon: gabungan kana baris i dengan ャ, ュ, ョ kecil',
    columns: ['ya', 'yu', 'yo'],
    note: 'Beberapa kombinasi jarang ditemukan dalam kata serapan; contoh kata hanya diberikan untuk yang umum.',
    rows: [
      { label: 'k', cells: [c('キャ', 'kya', 'キャベツ', 'kyabetsu', 'kubis'), c('キュ', 'kyu', 'キューブ', 'kyuubu', 'kubus'), c('キョ', 'kyo', null, null, null, 'Jarang dalam kata serapan; bunyi kyo umumnya ditulis dengan hiragana/kanji.')] },
      { label: 's', cells: [c('シャ', 'sha', 'シャツ', 'shatsu', 'kemeja'), c('シュ', 'shu', 'シューズ', 'shuuzu', 'sepatu'), c('ショ', 'sho', 'ショップ', 'shoppu', 'toko')] },
      { label: 'c', cells: [c('チャ', 'cha', 'チャンス', 'chansu', 'kesempatan'), c('チュ', 'chu', 'チューブ', 'chuubu', 'tabung, selang'), c('チョ', 'cho', 'チョコレート', 'chokoreeto', 'cokelat')] },
      { label: 'n', cells: [c('ニャ', 'nya', 'ニャー', 'nyaa', 'meong (suara kucing)'), c('ニュ', 'nyu', 'ニュース', 'nyuusu', 'berita'), c('ニョ', 'nyo', null, null, null, 'Jarang dalam kata serapan.')] },
      { label: 'h', cells: [c('ヒャ', 'hya', null, null, null, 'Jarang dalam kata serapan.'), c('ヒュ', 'hyu', 'ヒューズ', 'hyuuzu', 'sekering'), c('ヒョ', 'hyo', null, null, null, 'Jarang dalam kata serapan.')] },
      { label: 'm', cells: [c('ミャ', 'mya', 'ミャンマー', 'myanmaa', 'Myanmar'), c('ミュ', 'myu', 'ミュージック', 'myuujikku', 'musik'), c('ミョ', 'myo', null, null, null, 'Jarang dalam kata serapan.')] },
      { label: 'r', cells: [c('リャ', 'rya', null, null, null, 'Jarang dalam kata serapan.'), c('リュ', 'ryu', 'リュック', 'ryukku', 'ransel'), c('リョ', 'ryo', null, null, null, 'Jarang dalam kata serapan.')] },
      { label: 'g', cells: [c('ギャ', 'gya', 'ギャラリー', 'gyararii', 'galeri'), c('ギュ', 'gyu', null, null, null, 'Jarang dalam kata serapan.'), c('ギョ', 'gyo', null, null, null, 'Jarang dalam kata serapan.')] },
      { label: 'j', cells: [c('ジャ', 'ja', 'ジャム', 'jamu', 'selai'), c('ジュ', 'ju', 'ジュース', 'juusu', 'jus'), c('ジョ', 'jo', 'ジョギング', 'jogingu', 'joging')] },
      { label: 'b', cells: [c('ビャ', 'bya', null, null, null, 'Jarang dalam kata serapan.'), c('ビュ', 'byu', 'ビュッフェ', 'byuffe', 'prasmanan'), c('ビョ', 'byo', null, null, null, 'Jarang dalam kata serapan.')] },
      { label: 'p', cells: [c('ピャ', 'pya', null, null, null, 'Jarang dalam kata serapan.'), c('ピュ', 'pyu', 'コンピューター', 'konpyuutaa', 'komputer'), c('ピョ', 'pyo', null, null, null, 'Jarang dalam kata serapan.')] },
    ],
  },
};
