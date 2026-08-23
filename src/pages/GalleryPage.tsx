import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
// Імпортуємо наш хук!
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function GalleryPage() {
  // АКТИВУЄМО анімації появи (.reveal) на цій сторінці
  useScrollReveal();

  useEffect(() => {
    // При переході на сторінку завжди скролимо на самий верх
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#F7F7F7]">
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
}
