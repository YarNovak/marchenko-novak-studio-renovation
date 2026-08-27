import Navbar from "../components/Navbar";
import Animation from "../components/Animation";
import Footer from "../components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AnimationPage() {
  useScrollReveal();

  return (
    <div className="relative w-full min-h-screen bg-[#F7F7F7] flex flex-col justify-between">
      <Navbar />
      <main className="pt-[100px] md:pt-[140px] pb-24 md:pb-40 px-6 lg:px-12 flex-grow">
        <Animation />
      </main>
      <Footer />
    </div>
  );
}
