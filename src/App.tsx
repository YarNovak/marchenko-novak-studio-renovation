import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Коли користувач на головній сторінці ( / ) - показуємо Home */}
        <Route path="/" element={<Home />} />

        {/* Коли переходить на ( /gallery ) - показуємо Галерею */}
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}
