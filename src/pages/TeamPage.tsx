import Navbar from "../components/Navbar";
import Team from "../components/Team";
import Footer from "../components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function TeamPage() {
  useScrollReveal();

  return (
    <div className="relative w-full min-h-screen bg-[#F7F7F7] flex flex-col justify-between">
      <Navbar />

      {/* 
        ЗМІНЕНО: Вирівняли відступ з Animation та Gallery (md:pt-[140px]).
        Тепер всі внутрішні сторінки починаються з однієї лінії!
      */}
      <main className="pt-[100px] md:pt-[140px] pb-24 md:pb-40 px-6 lg:px-12 flex-grow">
        <Team />
      </main>

      <Footer />
    </div>
  );
}
