import { useReveal } from '@/hooks/useReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Studio from '@/components/Studio';
import GalleryPreview from '@/components/GalleryPreview';
import GalleryFull from '@/components/GalleryFull';
import Animation from '@/components/Animation';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import ScrollProgress from '@/components/ScrollProgress';

function App() {
  const containerRef = useReveal<HTMLDivElement>();

  return (
    <div ref={containerRef} className="min-h-screen bg-paper-100">
      <Navbar />
      <ScrollProgress />
      <Hero />
      <Studio />
      <GalleryPreview />
      <GalleryFull />
      <Animation />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
