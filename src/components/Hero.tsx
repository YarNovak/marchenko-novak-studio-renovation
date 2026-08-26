import { galleryImages } from '@/content';

export default function Hero() {
  const heroImage = galleryImages[4];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink-900">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-70 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/30 to-ink-900/80" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="hero-text-mask">
          <span className="hero-text-inner hero-text-delay-1 font-sans text-xs tracking-ultra-wide font-light text-paper-300 uppercase">
            Architectural Visualization Studio
          </span>
        </div>

        <div className="mt-8 hero-text-mask">
          <h1 className="hero-text-inner hero-text-delay-2 font-serif text-5xl md:text-7xl lg:text-8xl font-light text-paper-50 tracking-wide-sm text-center leading-[1.1]">
            Marchenko Novak
          </h1>
        </div>

        <div className="mt-4 hero-text-mask">
          <p className="hero-text-inner hero-text-delay-3 font-serif text-2xl md:text-3xl font-light italic text-paper-200 tracking-wide-sm">
            Studio
          </p>
        </div>

        <div className="mt-12 hero-text-mask max-w-xl">
          <p className="hero-text-inner hero-text-delay-4 font-sans text-sm md:text-base font-light text-paper-300 leading-relaxed text-center">
            Based in Kiev — Ukraine
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="scroll-indicator flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-paper-300/40" />
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-paper-300">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
