import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function GalleryPage() {
  useScrollReveal();

  return (
    <div className="relative w-full min-h-screen bg-[#F7F7F7]">
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
}
