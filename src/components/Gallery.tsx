import { useState } from "react";
import { galleryImages } from "@/content";
import ImageModal from "./ImageModal";

const layouts = [
  { span: "md:col-span-8" },
  { span: "md:col-span-4" },
  { span: "md:col-span-4" },
  { span: "md:col-span-4" },
  { span: "md:col-span-4" },
  { span: "md:col-span-12" },
  { span: "md:col-span-6" },
  { span: "md:col-span-6" },
  { span: "md:col-span-5" },
  { span: "md:col-span-7" },
];

export default function Gallery() {
  // ТЕПЕР ЗБЕРІГАЄМО ІНДЕКС (номер) фотографії замість її лінка
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Функції для перемикання вперед/назад по колу
  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section
      id="gallery"
      className="pt-32 md:pt-40 pb-24 md:pb-40 px-6 lg:px-12 bg-transparent"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="reveal mb-12 md:mb-16">
          <span className="font-sans text-[10px] tracking-[0.2em] font-medium text-ink-400 uppercase">
            Selected Works
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-10 gap-x-6 md:gap-x-10 items-start">
          {galleryImages.map((src, index) => {
            const layout = layouts[index % layouts.length];

            return (
              <div
                key={index}
                // Передаємо ІНДЕКС при кліку
                onClick={() => setSelectedIndex(index)}
                className={`${layout.span} reveal relative group cursor-pointer overflow-hidden bg-paper-200`}
                style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
              >
                <img
                  src={src}
                  alt={`Project ${index + 1}`}
                  className="block w-full h-auto transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-between items-end">
                    <h3 className="font-sans text-white text-[15px] md:text-[18px] font-medium tracking-wide">
                      Project {index + 1}
                    </h3>
                    <p className="font-sans text-white/90 text-[9px] md:text-[10px] tracking-widest uppercase">
                      2024—2026
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 
        ПЕРЕДАЄМО ДАНІ В МОДАЛКУ
        Якщо вибрано номер, передаємо саму картинку з масиву та функції перемикання
      */}
      {selectedIndex !== null && (
        <ImageModal
          imageSrc={galleryImages[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
