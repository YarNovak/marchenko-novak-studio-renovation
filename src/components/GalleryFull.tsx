import { galleryImages } from '@/content';

export default function GalleryFull() {
  const columns: number[][] = [[], [], [], []];
  galleryImages.forEach((_, i) => {
    columns[i % 4].push(i);
  });

  return (
    <section id="gallery-full" className="py-32 md:py-48 px-6 lg:px-12 bg-paper-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 reveal">
          <span className="font-sans text-xs tracking-ultra-wide font-light text-ink-400 uppercase">
            Full Gallery
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {columns.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-4 md:gap-6">
              {col.map((idx, ri) => (
                <div key={idx} className="gallery-item reveal-scale" style={{ transitionDelay: `${(ri % 2) * 0.15}s` }}>
                  <img
                    src={galleryImages[idx]}
                    alt=""
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
