import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Hiragana from './pages/Hiragana.jsx';
import Katakana from './pages/Katakana.jsx';
import Kanji from './pages/Kanji.jsx';
import Romaji from './pages/Romaji.jsx';
import Latihan from './pages/Latihan.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="hiragana" element={<Hiragana />} />
        <Route path="katakana" element={<Katakana />} />
        <Route path="kanji" element={<Kanji />} />
        <Route path="romaji" element={<Romaji />} />
        <Route path="latihan" element={<Latihan />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
