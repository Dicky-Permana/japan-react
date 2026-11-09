const SECTIONS = [
  { id: 'aksara', title: 'Tiga aksara + romaji' },
  { id: 'vokal', title: 'Lima vokal' },
  { id: 'konsonan', title: 'Konsonan yang perlu perhatian' },
  { id: 'panjang', title: 'Vokal panjang' },
  { id: 'ganda', title: 'Konsonan ganda (っ)' },
  { id: 'n', title: 'Bunyi ん' },
  { id: 'yoon', title: 'Yōon (ゃ ゅ ょ kecil)' },
  { id: 'tenten', title: 'Dakuten dan handakuten' },
  { id: 'partikel', title: 'Partikel は, へ, を' },
  { id: 'ketukan', title: 'Ketukan (mora) dan nada' },
];

function Ja({ children }) {
  return (
    <span lang="ja" className="ja">
      {children}
    </span>
  );
}

export default function Romaji() {
  return (
    <div className="page">
      <header className="page-head">
        <h1>Romaji dan pelafalan dasar</h1>
        <p>
          Romaji adalah penulisan bahasa Jepang dengan huruf Latin. Aplikasi ini memakai sistem Hepburn, yang paling
          dekat dengan cara orang Indonesia membaca. Pakai romaji sebagai alat bantu, lalu tinggalkan pelan-pelan
          setelah kana terbaca lancar.
        </p>
      </header>

      <div className="guide-layout">
        <nav className="guide-toc" aria-label="Isi panduan">
          <ol>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="guide">
          <section id="aksara">
            <h2>Tiga aksara + romaji</h2>
            <table className="guide-table">
              <thead>
                <tr>
                  <th scope="col">Aksara</th>
                  <th scope="col">Dipakai untuk</th>
                  <th scope="col">Contoh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hiragana</td>
                  <td>Kata asli Jepang, partikel, akhiran kata kerja/sifat</td>
                  <td>
                    <Ja>たべる</Ja>
                  </td>
                </tr>
                <tr>
                  <td>Katakana</td>
                  <td>Kata serapan, nama asing, bunyi tiruan</td>
                  <td>
                    <Ja>テレビ</Ja>
                  </td>
                </tr>
                <tr>
                  <td>Kanji</td>
                  <td>Inti makna kata: kata benda, akar kata kerja</td>
                  <td>
                    <Ja>食</Ja>
                  </td>
                </tr>
                <tr>
                  <td>Romaji</td>
                  <td>Alat bantu baca, papan nama, papan ketik</td>
                  <td>taberu</td>
                </tr>
              </tbody>
            </table>
            <p>
              Satu kalimat biasanya mencampur ketiganya: <Ja>私はコーヒーを飲みます。</Ja> (watashi wa koohii o nomimasu,
              “saya minum kopi”).
            </p>
          </section>

          <section id="vokal">
            <h2>Lima vokal</h2>
            <p>
              Vokal Jepang hanya lima: <strong>a, i, u, e, o</strong>, urutannya <Ja>あ い う え お</Ja>. Bunyinya
              hampir sama dengan vokal bahasa Indonesia, pendek dan bersih.
            </p>
            <ul>
              <li>
                <strong>u</strong> diucapkan dengan bibir agak rata, tidak dimonyongkan.
              </li>
              <li>
                <strong>e</strong> selalu seperti “e” pada “enak”, bukan “e” pada “emas”.
              </li>
              <li>
                <strong>i</strong> dan <strong>u</strong> sering melemah di antara konsonan tak bersuara atau di akhir
                kata: <Ja>です</Ja> desu terdengar “des”, <Ja>した</Ja> shita terdengar “shta”.
              </li>
            </ul>
          </section>

          <section id="konsonan">
            <h2>Konsonan yang perlu perhatian</h2>
            <table className="guide-table">
              <thead>
                <tr>
                  <th scope="col">Romaji</th>
                  <th scope="col">Kana</th>
                  <th scope="col">Cara baca</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>shi</td>
                  <td>
                    <Ja>し</Ja>
                  </td>
                  <td>“syi”, bukan “si”</td>
                </tr>
                <tr>
                  <td>chi</td>
                  <td>
                    <Ja>ち</Ja>
                  </td>
                  <td>“ci” seperti pada “cium”</td>
                </tr>
                <tr>
                  <td>tsu</td>
                  <td>
                    <Ja>つ</Ja>
                  </td>
                  <td>“ts” seperti akhir kata Inggris “cats”, lalu u</td>
                </tr>
                <tr>
                  <td>fu</td>
                  <td>
                    <Ja>ふ</Ja>
                  </td>
                  <td>Antara f dan h; tiupkan udara lewat bibir tanpa menyentuh gigi</td>
                </tr>
                <tr>
                  <td>j</td>
                  <td>
                    <Ja>じ</Ja>
                  </td>
                  <td>Seperti “j” pada “jari”</td>
                </tr>
                <tr>
                  <td>r</td>
                  <td>
                    <Ja>ら り る れ ろ</Ja>
                  </td>
                  <td>Satu ketukan lidah ringan, di antara r dan l; tidak digetarkan</td>
                </tr>
                <tr>
                  <td>g</td>
                  <td>
                    <Ja>が</Ja>
                  </td>
                  <td>Selalu “g” keras seperti “gula”</td>
                </tr>
                <tr>
                  <td>y, w</td>
                  <td>
                    <Ja>や わ</Ja>
                  </td>
                  <td>Sama dengan bahasa Indonesia</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="panjang">
            <h2>Vokal panjang</h2>
            <p>
              Vokal panjang diucapkan dua ketukan. Dalam romaji Hepburn ditulis dengan huruf ganda (aa, ii, uu, ee, ou)
              atau garis atas (ā, ī, ū, ē, ō). Di katakana, tanda <Ja>ー</Ja> memanjangkan vokal.
            </p>
            <table className="guide-table">
              <thead>
                <tr>
                  <th scope="col">Kana</th>
                  <th scope="col">Romaji</th>
                  <th scope="col">Arti</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Ja>おかあさん</Ja>
                  </td>
                  <td>okaasan</td>
                  <td>ibu</td>
                </tr>
                <tr>
                  <td>
                    <Ja>おにいさん</Ja>
                  </td>
                  <td>oniisan</td>
                  <td>kakak laki-laki</td>
                </tr>
                <tr>
                  <td>
                    <Ja>くうき</Ja>
                  </td>
                  <td>kuuki</td>
                  <td>udara</td>
                </tr>
                <tr>
                  <td>
                    <Ja>せんせい</Ja>
                  </td>
                  <td>sensei (dibaca sensē)</td>
                  <td>guru</td>
                </tr>
                <tr>
                  <td>
                    <Ja>がっこう</Ja>
                  </td>
                  <td>gakkou (dibaca gakkō)</td>
                  <td>sekolah</td>
                </tr>
                <tr>
                  <td>
                    <Ja>コーヒー</Ja>
                  </td>
                  <td>koohii</td>
                  <td>kopi</td>
                </tr>
              </tbody>
            </table>
            <p className="callout">
              Panjang vokal mengubah arti: <Ja>おばさん</Ja> obasan (bibi) dan <Ja>おばあさん</Ja> obaasan (nenek);{' '}
              <Ja>ゆき</Ja> yuki (salju) dan <Ja>ゆうき</Ja> yuuki (keberanian).
            </p>
          </section>

          <section id="ganda">
            <h2>Konsonan ganda (っ)</h2>
            <p>
              <Ja>っ</Ja> kecil (katakana <Ja>ッ</Ja>) tidak dibaca “tsu”. Ia menandakan jeda satu ketukan sebelum
              konsonan berikutnya, dan dalam romaji ditulis dengan menggandakan konsonan itu.
            </p>
            <ul>
              <li>
                <Ja>きって</Ja> kitte (perangko) berbeda dengan <Ja>きて</Ja> kite (datanglah).
              </li>
              <li>
                <Ja>ざっし</Ja> zasshi (majalah), <Ja>ベッド</Ja> beddo (tempat tidur).
              </li>
              <li>
                Sebelum ch, ditulis tch: <Ja>まっちゃ</Ja> matcha.
              </li>
            </ul>
          </section>

          <section id="n">
            <h2>Bunyi ん</h2>
            <p>
              <Ja>ん</Ja> adalah satu ketukan penuh. Bunyinya menyesuaikan huruf sesudahnya: menjadi “m” sebelum b, m,
              p (<Ja>しんぶん</Ja> shinbun terdengar “shimbun”), “ng” sebelum k dan g (<Ja>りんご</Ja> ringo), dan “n”
              biasa di tempat lain.
            </p>
            <p>
              Jika ん diikuti vokal atau y, romaji memakai apostrof agar tidak salah baca: <Ja>きんえん</Ja> kin'en
              (dilarang merokok) berbeda dengan <Ja>きねん</Ja> kinen (peringatan).
            </p>
          </section>

          <section id="yoon">
            <h2>Yōon (ゃ ゅ ょ kecil)</h2>
            <p>
              Kana baris i (ki, shi, chi, ni, hi, mi, ri, dan versi dakutennya) digabung dengan <Ja>ゃ ゅ ょ</Ja> kecil
              menjadi satu suku kata.
            </p>
            <ul>
              <li>
                <Ja>きゃ</Ja> kya (satu ketukan) berbeda dengan <Ja>きや</Ja> ki-ya (dua ketukan).
              </li>
              <li>
                <Ja>びょういん</Ja> byouin (rumah sakit) berbeda dengan <Ja>びよういん</Ja> biyouin (salon kecantikan).
              </li>
            </ul>
          </section>

          <section id="tenten">
            <h2>Dakuten dan handakuten</h2>
            <table className="guide-table">
              <thead>
                <tr>
                  <th scope="col">Tanda</th>
                  <th scope="col">Perubahan</th>
                  <th scope="col">Contoh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Ja>゛</Ja> dakuten
                  </td>
                  <td>k→g, s→z, t→d, h→b</td>
                  <td>
                    <Ja>か→が</Ja>, <Ja>さ→ざ</Ja>, <Ja>た→だ</Ja>, <Ja>は→ば</Ja>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Ja>゜</Ja> handakuten
                  </td>
                  <td>h→p</td>
                  <td>
                    <Ja>は→ぱ</Ja>, <Ja>ひ→ぴ</Ja>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              <Ja>ぢ</Ja> dan <Ja>づ</Ja> dibaca sama dengan <Ja>じ</Ja> dan <Ja>ず</Ja>. Keduanya hanya muncul di kata
              tertentu, misalnya <Ja>はなぢ</Ja> hanaji (mimisan).
            </p>
          </section>

          <section id="partikel">
            <h2>Partikel は, へ, を</h2>
            <p>Tiga kana ini dibaca berbeda saat berfungsi sebagai partikel:</p>
            <table className="guide-table">
              <thead>
                <tr>
                  <th scope="col">Partikel</th>
                  <th scope="col">Dibaca</th>
                  <th scope="col">Contoh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Ja>は</Ja> (topik)
                  </td>
                  <td>wa</td>
                  <td>
                    <Ja>わたしは</Ja> watashi wa
                  </td>
                </tr>
                <tr>
                  <td>
                    <Ja>へ</Ja> (arah)
                  </td>
                  <td>e</td>
                  <td>
                    <Ja>がっこうへ</Ja> gakkou e
                  </td>
                </tr>
                <tr>
                  <td>
                    <Ja>を</Ja> (objek)
                  </td>
                  <td>o</td>
                  <td>
                    <Ja>ほんを</Ja> hon o
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="ketukan">
            <h2>Ketukan (mora) dan nada</h2>
            <p>
              Bahasa Jepang dihitung per ketukan (mora), bukan per suku kata. Setiap kana biasa, <Ja>ん</Ja>,{' '}
              <Ja>っ</Ja>, dan vokal panjang masing-masing bernilai satu ketukan. <Ja>にっぽん</Ja> = に・っ・ぽ・ん =
              empat ketukan.
            </p>
            <p>
              Bahasa Jepang memakai tinggi-rendah nada, bukan tekanan keras. <Ja>はし</Ja> bisa berarti sumpit (nada
              tinggi lalu rendah) atau jembatan (rendah lalu tinggi). Untuk pemula, cukup ucapkan setiap ketukan dengan
              panjang yang sama dan tanpa penekanan.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
