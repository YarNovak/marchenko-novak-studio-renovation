import { useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import TeamPage from "./pages/TeamPage";
import AnimationPage from "./pages/AnimationPage";
import ContactPage from "./pages/ContactPage";

// Куленепробивний компонент для миттєвого скидання скролу
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // 1. Тимчасово вбиваємо плавний скрол на рівні всього HTML
    document.documentElement.style.scrollBehavior = "auto";

    // 2. Жорстко і миттєво кидаємо сторінку на самий верх
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 3. Повертаємо плавний скрол для інших елементів (якщо він був)
    const timeout = setTimeout(() => {
      document.documentElement.style.scrollBehavior = "";
    }, 10);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      {/* Стежить за URL і вбиває баг зі скролом */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/animation" element={<AnimationPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
