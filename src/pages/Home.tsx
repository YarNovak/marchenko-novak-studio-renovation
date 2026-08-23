import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Studio from "../components/Studio";
import Footer from "../components/Footer";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  const containerRef = useReveal<HTMLDivElement>();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-black">
      <Navbar />

      {/* Hero з Відео */}
      <div className="sticky top-0 h-screen w-full z-0 overflow-hidden">
        <div
          className="w-full h-full"
          style={{ transform: `translateY(-${offsetY * 0.35}px)` }}
        >
          <Hero />
        </div>
      </div>

      <div className="relative z-10 bg-[#F7F7F7] shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
        {/* МАГІЯ ТУТ: Просто викликаємо компоненти без scrollY */}
        <Studio />
        <Footer />
      </div>
    </div>
  );
}
