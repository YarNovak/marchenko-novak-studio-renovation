import { galleryImages } from '@/content';

export default function GalleryPreview() {
  const featured = galleryImages.slice(0, 4);

  return (
    <section id="gallery" className="py-32 md:py-48 px-6 lg:px-12 bg-paper-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div className="reveal">
            <span className="font-sans text-xs tracking-ultra-wide font-light text-ink-400 uppercase">
              Gallery
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl font-light text-ink-900">
              Selected Work
            </h2>
          </div>
          <div className="hidden md:block reveal reveal-delay-1">
            <button
              onClick={() => document.getElementById('gallery-full')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-line font-sans text-xs tracking-wide-sm font-light text-ink-700 uppercase"
            >
              View All
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-8 reveal-scale">
            <div className="gallery-item aspect-[16/10]">
              <img src={featured[0]} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 reveal-scale reveal-delay-1">
            <div className="gallery-item aspect-[3/4]">
              <img src={featured[1]} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 reveal-scale reveal-delay-2">
            <div className="gallery-item aspect-[4/3]">
              <img src={featured[2]} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 reveal-scale reveal-delay-3">
            <div className="gallery-item aspect-[16/9]">
              <img src={featured[3]} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="mt-12 md:hidden">
          <button
            onClick={() => document.getElementById('gallery-full')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-line font-sans text-xs tracking-wide-sm font-light text-ink-700 uppercase"
          >
            View All
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
