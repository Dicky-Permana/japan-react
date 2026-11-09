// Dataset kanji dasar JLPT N5 dan sebagian N4.
// on = onyomi (bacaan Tionghoa, ditulis katakana), kun = kunyomi (bacaan Jepang, hiragana).
// Bagian dalam kurung pada kunyomi adalah okurigana.

const k = (kanji, level, meaning, on, kun, examples) => ({
  kanji,
  level,
  meaning,
  on,
  kun,
  examples: examples.map(([word, reading, arti]) => ({ word, reading, meaning: arti })),
});

export const kanji = [
  // ---------- N5: angka dan uang ----------
  k('一', 'N5', 'satu', ['イチ', 'イツ'], ['ひと(つ)'], [['一つ', 'ひとつ', 'satu buah'], ['一月', 'いちがつ', 'Januari']]),
  k('二', 'N5', 'dua', ['ニ'], ['ふた(つ)'], [['二人', 'ふたり', 'dua orang'], ['二月', 'にがつ', 'Februari']]),
  k('三', 'N5', 'tiga', ['サン'], ['み(っつ)'], [['三つ', 'みっつ', 'tiga buah'], ['三月', 'さんがつ', 'Maret']]),
  k('四', 'N5', 'empat', ['シ'], ['よ', 'よん', 'よ(っつ)'], [['四つ', 'よっつ', 'empat buah'], ['四月', 'しがつ', 'April']]),
  k('五', 'N5', 'lima', ['ゴ'], ['いつ(つ)'], [['五つ', 'いつつ', 'lima buah'], ['五月', 'ごがつ', 'Mei']]),
  k('六', 'N5', 'enam', ['ロク'], ['む(っつ)'], [['六つ', 'むっつ', 'enam buah'], ['六月', 'ろくがつ', 'Juni']]),
  k('七', 'N5', 'tujuh', ['シチ'], ['なな(つ)'], [['七つ', 'ななつ', 'tujuh buah'], ['七月', 'しちがつ', 'Juli']]),
  k('八', 'N5', 'delapan', ['ハチ'], ['や(っつ)'], [['八つ', 'やっつ', 'delapan buah'], ['八月', 'はちがつ', 'Agustus']]),
  k('九', 'N5', 'sembilan', ['キュウ', 'ク'], ['ここの(つ)'], [['九つ', 'ここのつ', 'sembilan buah'], ['九月', 'くがつ', 'September']]),
  k('十', 'N5', 'sepuluh', ['ジュウ'], ['とお'], [['十日', 'とおか', 'tanggal sepuluh'], ['十月', 'じゅうがつ', 'Oktober']]),
  k('百', 'N5', 'seratus', ['ヒャク'], [], [['百円', 'ひゃくえん', 'seratus yen'], ['三百', 'さんびゃく', 'tiga ratus']]),
  k('千', 'N5', 'seribu', ['セン'], ['ち'], [['千円', 'せんえん', 'seribu yen'], ['三千', 'さんぜん', 'tiga ribu']]),
  k('万', 'N5', 'sepuluh ribu', ['マン', 'バン'], [], [['一万円', 'いちまんえん', 'sepuluh ribu yen'], ['万年筆', 'まんねんひつ', 'pulpen tinta']]),
  k('円', 'N5', 'yen; lingkaran', ['エン'], ['まる(い)'], [['百円', 'ひゃくえん', 'seratus yen'], ['円い', 'まるい', 'bundar']]),

  // ---------- N5: hari dan alam ----------
  k('日', 'N5', 'hari; matahari', ['ニチ', 'ジツ'], ['ひ', 'か'], [['日本', 'にほん', 'Jepang'], ['毎日', 'まいにち', 'setiap hari']]),
  k('月', 'N5', 'bulan', ['ゲツ', 'ガツ'], ['つき'], [['月曜日', 'げつようび', 'Senin'], ['月', 'つき', 'bulan (di langit)']]),
  k('火', 'N5', 'api', ['カ'], ['ひ'], [['火曜日', 'かようび', 'Selasa'], ['花火', 'はなび', 'kembang api']]),
  k('水', 'N5', 'air', ['スイ'], ['みず'], [['水曜日', 'すいようび', 'Rabu'], ['水', 'みず', 'air']]),
  k('木', 'N5', 'pohon; kayu', ['モク', 'ボク'], ['き'], [['木曜日', 'もくようび', 'Kamis'], ['木', 'き', 'pohon']]),
  k('金', 'N5', 'emas; uang', ['キン', 'コン'], ['かね'], [['金曜日', 'きんようび', 'Jumat'], ['お金', 'おかね', 'uang']]),
  k('土', 'N5', 'tanah', ['ド', 'ト'], ['つち'], [['土曜日', 'どようび', 'Sabtu'], ['土', 'つち', 'tanah']]),
  k('山', 'N5', 'gunung', ['サン'], ['やま'], [['山', 'やま', 'gunung'], ['富士山', 'ふじさん', 'Gunung Fuji']]),
  k('川', 'N5', 'sungai', ['セン'], ['かわ'], [['川', 'かわ', 'sungai'], ['小川', 'おがわ', 'anak sungai']]),
  k('田', 'N5', 'sawah', ['デン'], ['た'], [['田んぼ', 'たんぼ', 'sawah'], ['水田', 'すいでん', 'sawah berair']]),
  k('天', 'N5', 'langit; surga', ['テン'], ['あま', 'あめ'], [['天気', 'てんき', 'cuaca'], ['天ぷら', 'てんぷら', 'tempura']]),
  k('気', 'N5', 'semangat; udara', ['キ', 'ケ'], [], [['元気', 'げんき', 'sehat, bersemangat'], ['天気', 'てんき', 'cuaca']]),
  k('雨', 'N5', 'hujan', ['ウ'], ['あめ'], [['雨', 'あめ', 'hujan'], ['大雨', 'おおあめ', 'hujan lebat']]),
  k('花', 'N5', 'bunga', ['カ'], ['はな'], [['花', 'はな', 'bunga'], ['花火', 'はなび', 'kembang api']]),

  // ---------- N5: orang ----------
  k('人', 'N5', 'orang', ['ジン', 'ニン'], ['ひと'], [['日本人', 'にほんじん', 'orang Jepang'], ['三人', 'さんにん', 'tiga orang']]),
  k('子', 'N5', 'anak', ['シ', 'ス'], ['こ'], [['子ども', 'こども', 'anak-anak'], ['女の子', 'おんなのこ', 'anak perempuan']]),
  k('女', 'N5', 'perempuan', ['ジョ', 'ニョ'], ['おんな'], [['女性', 'じょせい', 'wanita'], ['女の人', 'おんなのひと', 'perempuan']]),
  k('男', 'N5', 'laki-laki', ['ダン', 'ナン'], ['おとこ'], [['男性', 'だんせい', 'pria'], ['男の子', 'おとこのこ', 'anak laki-laki']]),
  k('父', 'N5', 'ayah', ['フ'], ['ちち'], [['父', 'ちち', 'ayah (sendiri)'], ['お父さん', 'おとうさん', 'ayah (sopan)']]),
  k('母', 'N5', 'ibu', ['ボ'], ['はは'], [['母', 'はは', 'ibu (sendiri)'], ['お母さん', 'おかあさん', 'ibu (sopan)']]),
  k('友', 'N5', 'teman', ['ユウ'], ['とも'], [['友だち', 'ともだち', 'teman'], ['友人', 'ゆうじん', 'sahabat']]),
  k('先', 'N5', 'lebih dulu; ujung', ['セン'], ['さき'], [['先生', 'せんせい', 'guru'], ['先週', 'せんしゅう', 'minggu lalu']]),
  k('生', 'N5', 'hidup; lahir', ['セイ', 'ショウ'], ['い(きる)', 'う(まれる)'], [['学生', 'がくせい', 'pelajar'], ['生まれる', 'うまれる', 'dilahirkan']]),
  k('学', 'N5', 'belajar', ['ガク'], ['まな(ぶ)'], [['学校', 'がっこう', 'sekolah'], ['大学', 'だいがく', 'universitas']]),
  k('校', 'N5', 'sekolah', ['コウ'], [], [['学校', 'がっこう', 'sekolah'], ['高校', 'こうこう', 'SMA']]),

  // ---------- N5: waktu ----------
  k('年', 'N5', 'tahun', ['ネン'], ['とし'], [['今年', 'ことし', 'tahun ini'], ['来年', 'らいねん', 'tahun depan']]),
  k('時', 'N5', 'waktu; jam', ['ジ'], ['とき'], [['時間', 'じかん', 'waktu'], ['時計', 'とけい', 'jam']]),
  k('分', 'N5', 'menit; bagian; mengerti', ['ブン', 'フン'], ['わ(かる)'], [['五分', 'ごふん', 'lima menit'], ['分かる', 'わかる', 'mengerti']]),
  k('半', 'N5', 'setengah', ['ハン'], ['なか(ば)'], [['半分', 'はんぶん', 'separuh'], ['三時半', 'さんじはん', 'pukul setengah empat']]),
  k('今', 'N5', 'sekarang', ['コン'], ['いま'], [['今', 'いま', 'sekarang'], ['今日', 'きょう', 'hari ini']]),
  k('午', 'N5', 'tengah hari', ['ゴ'], [], [['午前', 'ごぜん', 'pagi (a.m.)'], ['午後', 'ごご', 'siang/sore (p.m.)']]),
  k('前', 'N5', 'depan; sebelum', ['ゼン'], ['まえ'], [['名前', 'なまえ', 'nama'], ['午前', 'ごぜん', 'pagi (a.m.)']]),
  k('後', 'N5', 'belakang; sesudah', ['ゴ', 'コウ'], ['うし(ろ)', 'あと'], [['後ろ', 'うしろ', 'belakang'], ['午後', 'ごご', 'siang/sore (p.m.)']]),
  k('何', 'N5', 'apa', ['カ'], ['なに', 'なん'], [['何', 'なに', 'apa'], ['何時', 'なんじ', 'jam berapa']]),

  // ---------- N5: arah dan posisi ----------
  k('上', 'N5', 'atas', ['ジョウ'], ['うえ', 'あ(がる)'], [['上', 'うえ', 'atas'], ['上手', 'じょうず', 'pandai']]),
  k('下', 'N5', 'bawah', ['カ', 'ゲ'], ['した', 'さ(がる)'], [['下', 'した', 'bawah'], ['地下鉄', 'ちかてつ', 'kereta bawah tanah']]),
  k('中', 'N5', 'tengah; dalam', ['チュウ'], ['なか'], [['中', 'なか', 'dalam'], ['中国', 'ちゅうごく', 'Tiongkok']]),
  k('外', 'N5', 'luar', ['ガイ'], ['そと'], [['外', 'そと', 'luar'], ['外国', 'がいこく', 'luar negeri']]),
  k('左', 'N5', 'kiri', ['サ'], ['ひだり'], [['左', 'ひだり', 'kiri'], ['左手', 'ひだりて', 'tangan kiri']]),
  k('右', 'N5', 'kanan', ['ウ', 'ユウ'], ['みぎ'], [['右', 'みぎ', 'kanan'], ['右手', 'みぎて', 'tangan kanan']]),
  k('東', 'N5', 'timur', ['トウ'], ['ひがし'], [['東', 'ひがし', 'timur'], ['東京', 'とうきょう', 'Tokyo']]),
  k('西', 'N5', 'barat', ['セイ', 'サイ'], ['にし'], [['西', 'にし', 'barat'], ['関西', 'かんさい', 'wilayah Kansai']]),
  k('南', 'N5', 'selatan', ['ナン'], ['みなみ'], [['南', 'みなみ', 'selatan'], ['南口', 'みなみぐち', 'pintu selatan']]),
  k('北', 'N5', 'utara', ['ホク'], ['きた'], [['北', 'きた', 'utara'], ['北海道', 'ほっかいどう', 'Hokkaido']]),

  // ---------- N5: sifat ----------
  k('大', 'N5', 'besar', ['ダイ', 'タイ'], ['おお(きい)'], [['大きい', 'おおきい', 'besar'], ['大学', 'だいがく', 'universitas']]),
  k('小', 'N5', 'kecil', ['ショウ'], ['ちい(さい)', 'こ'], [['小さい', 'ちいさい', 'kecil'], ['小学校', 'しょうがっこう', 'sekolah dasar']]),
  k('高', 'N5', 'tinggi; mahal', ['コウ'], ['たか(い)'], [['高い', 'たかい', 'tinggi, mahal'], ['高校', 'こうこう', 'SMA']]),
  k('安', 'N5', 'murah; tenang', ['アン'], ['やす(い)'], [['安い', 'やすい', 'murah'], ['安心', 'あんしん', 'lega, tenang']]),
  k('長', 'N5', 'panjang; kepala', ['チョウ'], ['なが(い)'], [['長い', 'ながい', 'panjang'], ['社長', 'しゃちょう', 'direktur perusahaan']]),
  k('新', 'N5', 'baru', ['シン'], ['あたら(しい)'], [['新しい', 'あたらしい', 'baru'], ['新聞', 'しんぶん', 'koran']]),
  k('古', 'N5', 'lama, tua', ['コ'], ['ふる(い)'], [['古い', 'ふるい', 'lama, kuno'], ['中古', 'ちゅうこ', 'barang bekas']]),
  k('白', 'N5', 'putih', ['ハク'], ['しろ', 'しろ(い)'], [['白い', 'しろい', 'putih'], ['白鳥', 'はくちょう', 'angsa']]),

  // ---------- N5: benda dan tempat ----------
  k('本', 'N5', 'buku; asal', ['ホン'], ['もと'], [['本', 'ほん', 'buku'], ['日本', 'にほん', 'Jepang']]),
  k('名', 'N5', 'nama', ['メイ', 'ミョウ'], ['な'], [['名前', 'なまえ', 'nama'], ['有名', 'ゆうめい', 'terkenal']]),
  k('語', 'N5', 'bahasa; kata', ['ゴ'], ['かた(る)'], [['日本語', 'にほんご', 'bahasa Jepang'], ['英語', 'えいご', 'bahasa Inggris']]),
  k('国', 'N5', 'negara', ['コク'], ['くに'], [['国', 'くに', 'negara'], ['外国', 'がいこく', 'luar negeri']]),
  k('車', 'N5', 'kendaraan', ['シャ'], ['くるま'], [['車', 'くるま', 'mobil'], ['電車', 'でんしゃ', 'kereta listrik']]),
  k('電', 'N5', 'listrik', ['デン'], [], [['電車', 'でんしゃ', 'kereta listrik'], ['電話', 'でんわ', 'telepon']]),
  k('会', 'N5', 'bertemu; perkumpulan', ['カイ'], ['あ(う)'], [['会う', 'あう', 'bertemu'], ['会社', 'かいしゃ', 'perusahaan']]),
  k('社', 'N5', 'perusahaan; kuil', ['シャ'], ['やしろ'], [['会社', 'かいしゃ', 'perusahaan'], ['神社', 'じんじゃ', 'kuil Shinto']]),
  k('店', 'N5', 'toko', ['テン'], ['みせ'], [['店', 'みせ', 'toko'], ['書店', 'しょてん', 'toko buku']]),
  k('駅', 'N5', 'stasiun', ['エキ'], [], [['駅', 'えき', 'stasiun'], ['駅前', 'えきまえ', 'depan stasiun']]),
  k('道', 'N5', 'jalan', ['ドウ'], ['みち'], [['道', 'みち', 'jalan'], ['北海道', 'ほっかいどう', 'Hokkaido']]),

  // ---------- N5: tubuh ----------
  k('口', 'N5', 'mulut; pintu masuk', ['コウ'], ['くち'], [['口', 'くち', 'mulut'], ['入口', 'いりぐち', 'pintu masuk']]),
  k('目', 'N5', 'mata', ['モク'], ['め'], [['目', 'め', 'mata'], ['目的', 'もくてき', 'tujuan']]),
  k('耳', 'N5', 'telinga', ['ジ'], ['みみ'], [['耳', 'みみ', 'telinga'], ['耳鼻科', 'じびか', 'klinik THT']]),
  k('手', 'N5', 'tangan', ['シュ'], ['て'], [['手', 'て', 'tangan'], ['歌手', 'かしゅ', 'penyanyi']]),
  k('足', 'N5', 'kaki; cukup', ['ソク'], ['あし', 'た(りる)'], [['足', 'あし', 'kaki'], ['足りる', 'たりる', 'cukup']]),

  // ---------- N5: kata kerja ----------
  k('食', 'N5', 'makan', ['ショク'], ['た(べる)'], [['食べる', 'たべる', 'makan'], ['食堂', 'しょくどう', 'kantin']]),
  k('飲', 'N5', 'minum', ['イン'], ['の(む)'], [['飲む', 'のむ', 'minum'], ['飲み物', 'のみもの', 'minuman']]),
  k('見', 'N5', 'melihat', ['ケン'], ['み(る)'], [['見る', 'みる', 'melihat'], ['見物', 'けんぶつ', 'bertamasya']]),
  k('聞', 'N5', 'mendengar; bertanya', ['ブン'], ['き(く)'], [['聞く', 'きく', 'mendengar'], ['新聞', 'しんぶん', 'koran']]),
  k('読', 'N5', 'membaca', ['ドク'], ['よ(む)'], [['読む', 'よむ', 'membaca'], ['読書', 'どくしょ', 'kegiatan membaca']]),
  k('書', 'N5', 'menulis', ['ショ'], ['か(く)'], [['書く', 'かく', 'menulis'], ['辞書', 'じしょ', 'kamus']]),
  k('話', 'N5', 'bicara; cerita', ['ワ'], ['はな(す)', 'はなし'], [['話す', 'はなす', 'berbicara'], ['電話', 'でんわ', 'telepon']]),
  k('言', 'N5', 'berkata', ['ゲン', 'ゴン'], ['い(う)', 'こと'], [['言う', 'いう', 'berkata'], ['言葉', 'ことば', 'kata, bahasa']]),
  k('行', 'N5', 'pergi', ['コウ', 'ギョウ'], ['い(く)'], [['行く', 'いく', 'pergi'], ['銀行', 'ぎんこう', 'bank']]),
  k('来', 'N5', 'datang', ['ライ'], ['く(る)'], [['来る', 'くる', 'datang'], ['来週', 'らいしゅう', 'minggu depan']]),
  k('出', 'N5', 'keluar', ['シュツ'], ['で(る)', 'だ(す)'], [['出る', 'でる', 'keluar'], ['出口', 'でぐち', 'pintu keluar']]),
  k('入', 'N5', 'masuk', ['ニュウ'], ['はい(る)', 'い(れる)'], [['入る', 'はいる', 'masuk'], ['入口', 'いりぐち', 'pintu masuk']]),
  k('休', 'N5', 'istirahat', ['キュウ'], ['やす(む)'], [['休む', 'やすむ', 'beristirahat'], ['休日', 'きゅうじつ', 'hari libur']]),
  k('立', 'N5', 'berdiri', ['リツ'], ['た(つ)'], [['立つ', 'たつ', 'berdiri'], ['国立', 'こくりつ', 'negeri (milik negara)']]),

  // ---------- N4: musim dan waktu ----------
  k('春', 'N4', 'musim semi', ['シュン'], ['はる'], [['春', 'はる', 'musim semi'], ['春分', 'しゅんぶん', 'ekuinoks musim semi']]),
  k('夏', 'N4', 'musim panas', ['カ'], ['なつ'], [['夏', 'なつ', 'musim panas'], ['夏休み', 'なつやすみ', 'libur musim panas']]),
  k('秋', 'N4', 'musim gugur', ['シュウ'], ['あき'], [['秋', 'あき', 'musim gugur'], ['秋分', 'しゅうぶん', 'ekuinoks musim gugur']]),
  k('冬', 'N4', 'musim dingin', ['トウ'], ['ふゆ'], [['冬', 'ふゆ', 'musim dingin'], ['冬休み', 'ふゆやすみ', 'libur musim dingin']]),
  k('朝', 'N4', 'pagi', ['チョウ'], ['あさ'], [['朝', 'あさ', 'pagi'], ['朝食', 'ちょうしょく', 'sarapan']]),
  k('昼', 'N4', 'siang', ['チュウ'], ['ひる'], [['昼ご飯', 'ひるごはん', 'makan siang'], ['昼食', 'ちゅうしょく', 'makan siang (formal)']]),
  k('夜', 'N4', 'malam', ['ヤ'], ['よる', 'よ'], [['夜', 'よる', 'malam'], ['今夜', 'こんや', 'malam ini']]),
  k('早', 'N4', 'cepat; awal', ['ソウ'], ['はや(い)'], [['早い', 'はやい', 'awal, cepat'], ['早朝', 'そうちょう', 'dini hari']]),

  // ---------- N4: keluarga ----------
  k('家', 'N4', 'rumah', ['カ', 'ケ'], ['いえ', 'や'], [['家', 'いえ', 'rumah'], ['家族', 'かぞく', 'keluarga']]),
  k('族', 'N4', 'suku; keluarga', ['ゾク'], [], [['家族', 'かぞく', 'keluarga'], ['民族', 'みんぞく', 'bangsa']]),
  k('兄', 'N4', 'kakak laki-laki', ['キョウ', 'ケイ'], ['あに'], [['兄', 'あに', 'kakak laki-laki'], ['兄弟', 'きょうだい', 'saudara kandung']]),
  k('弟', 'N4', 'adik laki-laki', ['ダイ', 'テイ'], ['おとうと'], [['弟', 'おとうと', 'adik laki-laki'], ['兄弟', 'きょうだい', 'saudara kandung']]),
  k('姉', 'N4', 'kakak perempuan', ['シ'], ['あね'], [['姉', 'あね', 'kakak perempuan'], ['姉妹', 'しまい', 'saudara perempuan']]),
  k('妹', 'N4', 'adik perempuan', ['マイ'], ['いもうと'], [['妹', 'いもうと', 'adik perempuan'], ['姉妹', 'しまい', 'saudara perempuan']]),
  k('自', 'N4', 'diri sendiri', ['ジ', 'シ'], ['みずか(ら)'], [['自分', 'じぶん', 'diri sendiri'], ['自転車', 'じてんしゃ', 'sepeda']]),
  k('私', 'N4', 'saya; pribadi', ['シ'], ['わたし'], [['私', 'わたし', 'saya'], ['私立', 'しりつ', 'swasta']]),

  // ---------- N4: belajar ----------
  k('思', 'N4', 'berpikir', ['シ'], ['おも(う)'], [['思う', 'おもう', 'berpikir, merasa'], ['思い出', 'おもいで', 'kenangan']]),
  k('知', 'N4', 'tahu', ['チ'], ['し(る)'], [['知る', 'しる', 'mengetahui'], ['知人', 'ちじん', 'kenalan']]),
  k('教', 'N4', 'mengajar', ['キョウ'], ['おし(える)'], [['教える', 'おしえる', 'mengajar'], ['教室', 'きょうしつ', 'ruang kelas']]),
  k('室', 'N4', 'ruangan', ['シツ'], [], [['教室', 'きょうしつ', 'ruang kelas'], ['会議室', 'かいぎしつ', 'ruang rapat']]),
  k('習', 'N4', 'mempelajari', ['シュウ'], ['なら(う)'], [['習う', 'ならう', 'belajar (dari seseorang)'], ['練習', 'れんしゅう', 'latihan']]),
  k('勉', 'N4', 'usaha keras', ['ベン'], [], [['勉強', 'べんきょう', 'belajar'], ['勤勉', 'きんべん', 'rajin']]),
  k('強', 'N4', 'kuat', ['キョウ'], ['つよ(い)'], [['強い', 'つよい', 'kuat'], ['勉強', 'べんきょう', 'belajar']]),

  // ---------- N4: kata kerja ----------
  k('作', 'N4', 'membuat', ['サク', 'サ'], ['つく(る)'], [['作る', 'つくる', 'membuat'], ['作文', 'さくぶん', 'karangan']]),
  k('使', 'N4', 'memakai', ['シ'], ['つか(う)'], [['使う', 'つかう', 'memakai'], ['大使館', 'たいしかん', 'kedutaan besar']]),
  k('持', 'N4', 'memegang; membawa', ['ジ'], ['も(つ)'], [['持つ', 'もつ', 'memegang, membawa'], ['気持ち', 'きもち', 'perasaan']]),
  k('待', 'N4', 'menunggu', ['タイ'], ['ま(つ)'], [['待つ', 'まつ', 'menunggu'], ['招待', 'しょうたい', 'undangan']]),
  k('送', 'N4', 'mengirim', ['ソウ'], ['おく(る)'], [['送る', 'おくる', 'mengirim'], ['放送', 'ほうそう', 'siaran']]),
  k('売', 'N4', 'menjual', ['バイ'], ['う(る)'], [['売る', 'うる', 'menjual'], ['売店', 'ばいてん', 'kios']]),
  k('買', 'N4', 'membeli', ['バイ'], ['か(う)'], [['買う', 'かう', 'membeli'], ['買い物', 'かいもの', 'belanja']]),

  // ---------- N4: lain-lain ----------
  k('料', 'N4', 'bahan; biaya', ['リョウ'], [], [['料理', 'りょうり', 'masakan'], ['料金', 'りょうきん', 'tarif']]),
  k('理', 'N4', 'logika; alasan', ['リ'], [], [['料理', 'りょうり', 'masakan'], ['理由', 'りゆう', 'alasan']]),
  k('近', 'N4', 'dekat', ['キン'], ['ちか(い)'], [['近い', 'ちかい', 'dekat'], ['近所', 'きんじょ', 'lingkungan sekitar rumah']]),
  k('遠', 'N4', 'jauh', ['エン'], ['とお(い)'], [['遠い', 'とおい', 'jauh'], ['遠足', 'えんそく', 'darmawisata']]),
  k('病', 'N4', 'sakit', ['ビョウ'], ['やまい'], [['病気', 'びょうき', 'penyakit'], ['病院', 'びょういん', 'rumah sakit']]),
  k('院', 'N4', 'lembaga; gedung', ['イン'], [], [['病院', 'びょういん', 'rumah sakit'], ['大学院', 'だいがくいん', 'pascasarjana']]),
];
