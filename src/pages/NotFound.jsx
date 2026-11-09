import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page">
      <header className="page-head">
        <h1>Halaman tidak ditemukan</h1>
        <p>
          Alamat ini tidak ada. Kembali ke <Link to="/">beranda</Link>.
        </p>
      </header>
    </div>
  );
}
