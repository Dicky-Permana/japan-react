import KanaPage from '../components/KanaPage.jsx';
import { katakana } from '../data/katakana.js';

export default function Katakana() {
  return (
    <KanaPage
      deck="katakana"
      title="Katakana"
      intro="Bunyinya sama dengan hiragana, bentuknya lebih bersudut. Dipakai untuk kata serapan seperti コーヒー (kopi) dan nama asing."
      data={katakana}
    />
  );
}
