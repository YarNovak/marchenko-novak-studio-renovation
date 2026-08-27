import { useState } from "react";
import { galleryImages } from "@/content";
import ImageModal from "./ImageModal";

// ДОДАНО: Тепер ми контролюємо не тільки ширину (span), а й висоту (height)
// кожного блоку. Це створює ідеальний журнальний ритм без жодних порожніх дірок.
const layouts = [
  // Ряд 1: Велике фото (акцент) + Вертикальне
  { span: "md:col-span-8", height: "h-[350px] md:h-[600px]" },
  { span: "md:col-span-4", height: "h-[350px] md:h-[600px]" },

  // Ряд 2: Три однакових (майже квадратних) фото
  { span: "md:col-span-4", height: "h-[350px] md:h-[450px]" },
  { span: "md:col-span-4", height: "h-[350px] md:h-[450px]" },
  { span: "md:col-span-4", height: "h-[350px] md:h-[450px]" },

  // Ряд 3: Одна величезна кінематографічна панорама
  { span: "md:col-span-12", height: "h-[350px] md:h-[700px]" },

  // Ряд 4: Два широких фото порівну
  { span: "md:col-span-6", height: "h-[350px] md:h-[550px]" },
  { span: "md:col-span-6", height: "h-[350px] md:h-[550px]" },

  // Ряд 5: Асиметрія для динаміки
  { span: "md:col-span-5", height: "h-[350px] md:h-[500px]" },
  { span: "md:col-span-7", height: "h-[350px] md:h-[500px]" },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
      // Вирівняно верхній відступ (pt), щоб збігався з Animation
      className="pt-[100px] md:pt-[140px] pb-24 md:pb-40 px-6 lg:px-12 bg-transparent"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* НАДЗАГОЛОВОК */}
        <div className="reveal mb-12 md:mb-16">
          <span className="font-sans text-[10px] tracking-[0.2em] font-medium text-ink-400 uppercase">
            Selected Works
          </span>
        </div>

        {/* 
          СІТКА: 
          Змінено gap на gap-6 md:gap-8 (трохи щільніше для преміального вигляду).
          Прибрано items-start, щоб блоки ідеально заповнювали висоту.
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {galleryImages.map((src, index) => {
            const layout = layouts[index % layouts.length];

            return (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                // Додано клас висоти з конфігу (layout.height)
                className={`${layout.span} ${layout.height} reveal relative group cursor-pointer overflow-hidden bg-[#e8e8e8]`}
                style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
              >
                {/* 
                  ЗМІНЕНО: h-full та object-cover. 
                  Тепер картинка ідеально заповнює відведений їй прямокутник, як у дорогому журналі!
                */}
                <img
                  src={src}
                  alt={`Project ${index + 1}`}
                  className="block w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
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
