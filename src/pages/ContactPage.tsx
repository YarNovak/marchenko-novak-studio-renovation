import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactPage() {
  useScrollReveal();

  return (
    <div className="relative w-full min-h-screen bg-[#F7F7F7] flex flex-col justify-between">
      <Navbar />

      {/* 
        Відступ ідентичний сторінкам Gallery, Animation та Team.
        Це гарантує, що контент не стрибатиме при переході по меню.
      */}
      <main className="pt-[100px] md:pt-[140px] pb-24 md:pb-40 px-6 lg:px-12 flex-grow">
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
