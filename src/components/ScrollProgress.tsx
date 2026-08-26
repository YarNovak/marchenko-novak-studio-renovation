import { useEffect, useState } from 'react';

const sections = ['studio', 'gallery', 'animation', 'team', 'contact'];

export default function ScrollProgress() {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      if (window.scrollY < heroHeight * 0.5) {
        setActiveIndex(-1);
        return;
      }

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            setActiveIndex(i);
            return;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (index: number) => {
    document.getElementById(sections[index])?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-5">
      {sections.map((_, i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          className="group flex items-center justify-end gap-3"
          aria-label={`Go to ${sections[i]}`}
        >
          <span
          className={`progress-dot block w-px transition-all duration-500 ${
              activeIndex === i
                ? 'h-10 bg-ink-900'
                : 'h-4 bg-ink-300 group-hover:bg-ink-500 group-hover:h-6'
            }`}
          />
        </button>
      ))}
    </div>
  );
}
