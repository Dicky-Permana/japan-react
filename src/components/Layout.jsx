import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const NAV_ITEMS = [
  { to: '/hiragana', label: 'Hiragana', glyph: 'あ' },
  { to: '/katakana', label: 'Katakana', glyph: 'ア' },
  { to: '/kanji', label: 'Kanji', glyph: '字' },
  { to: '/romaji', label: 'Romaji', glyph: 'Aa', latin: true },
  { to: '/latihan', label: 'Latihan', glyph: '練' },
];

function NavItems() {
  return NAV_ITEMS.map((item) => (
    <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
      <span className="nav-glyph" lang={item.latin ? undefined : 'ja'} aria-hidden="true">
        {item.glyph}
      </span>
      <span>{item.label}</span>
    </NavLink>
  ));
}

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#konten">
        Lewati ke konten
      </a>
      <header className="site-header">
        <div className="site-header-inner">
          <Link to="/" className="brand">
            <span className="brand-mark" lang="ja" aria-hidden="true">
              かな
            </span>
            <span>Kana &amp; Kanji</span>
          </Link>
          <nav className="top-nav" aria-label="Materi">
            <NavItems />
          </nav>
        </div>
      </header>

      <main id="konten" className="site-main">
        <Outlet />
      </main>

      <nav className="bottom-nav" aria-label="Materi">
        <NavItems />
      </nav>
    </>
  );
}
