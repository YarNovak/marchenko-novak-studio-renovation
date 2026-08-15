import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Studio from "./components/Studio";
import GalleryPreview from "./components/GalleryPreview";
import Footer from "./components/Footer";
import { useReveal } from "@/hooks/useReveal";
import GalleryFull from "@/components/GalleryFull";
import Animation from "@/components/Animation";
import Team from "@/components/Team";
import Contact from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function App() {
  const containerRef = useReveal<HTMLDivElement>();

  // Додаємо стан для відстеження скролу
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    // Слухаємо скрол. passive: true робить його супер плавним
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-black">
      {/* Навігація */}
      <Navbar />

      {/* 
        РАМКА ВІДЕО: залишається прилиплою (sticky) до верху
      */}
      <div className="sticky top-0 h-screen w-full z-0 overflow-hidden">
        {/* 
          САМЕ ВІДЕО: Їде вгору зі швидкістю 40% (0.4) від швидкості скролу! 
          Це і є той самий Parallax ефект, який дає "життя" і глибину.
        */}
        <div
          className="w-full h-full"
          style={{ transform: `translateY(-${offsetY * 0.35}px)` }}
        >
          <Hero />
        </div>
      </div>

      {/* 
        Світлий блок має z-10 (вище за відео).
        Тут стоїть bg-[#F7F7F7], який перекриває відео, коли ти скролиш.
      */}
      <div className="relative z-10 bg-[#F7F7F7] shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
        <Studio />

        <Footer />
      </div>
    </div>
  );
}
