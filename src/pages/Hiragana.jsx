import KanaPage from '../components/KanaPage.jsx';
import { hiragana } from '../data/hiragana.js';

export default function Hiragana() {
  return (
    <KanaPage
      deck="hiragana"
      title="Hiragana"
      intro="Aksara dasar untuk kata asli Jepang, partikel, dan akhiran kata kerja. Pelajari baris demi baris, mulai dari vokal."
      data={hiragana}
    />
  );
}
