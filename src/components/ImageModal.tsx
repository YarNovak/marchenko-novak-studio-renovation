import { useEffect, useState } from "react";

interface ImageModalProps {
  imageSrc: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageModal({
  imageSrc,
  onClose,
  onNext,
  onPrev,
}: ImageModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [currentImg, setCurrentImg] = useState(imageSrc);
  const [prevImg, setPrevImg] = useState<string | null>(null);

  // Плавне відкриття
  useEffect(() => {
    requestAnimationFrame(() => setIsMounted(true));
  }, []);

  // Перемикання фотографій (Тепер швидше - 400мс)
  useEffect(() => {
    if (imageSrc !== currentImg) {
      setPrevImg(currentImg);
      setCurrentImg(imageSrc);

      // Синхронізуємо таймаут з новим часом анімації (400мс)
      const timeout = setTimeout(() => setPrevImg(null), 400);
      return () => clearTimeout(timeout);
    }
  }, [imageSrc, currentImg]);

  // Плавне закриття (Тепер швидше - 400мс)
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 400);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      // Зменшив duration до 400ms для фону, щоб він з'являвся і зникав жвавіше
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#F7F7F7]/90 backdrop-blur-2xl p-4 md:p-12 transition-opacity duration-400 ease-out ${
        isMounted && !isClosing ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <style>{`
        /* 
          БІЛЬШ НІЖНИЙ ТА ШВИДКИЙ CROSSFADE 
          Час: 0.4s (замість 0.6s)
          Масштаб: 1.01 (замість 1.02) - дуже делікатний рух
        */
        @keyframes crossfadeIn {
          from { opacity: 0; transform: scale(1.01); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-crossfade-in {
          animation: crossfadeIn 0.4s ease-out forwards;
        }

        @keyframes crossfadeOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.99); }
        }
        .animate-crossfade-out {
          animation: crossfadeOut 0.4s ease-out forwards;
        }
      `}</style>

      {/* Кнопка ЗАКРИТИ */}
      <button
        className="absolute top-6 right-6 md:top-8 md:right-10 text-ink-900/40 hover:text-ink-900 transition-colors p-2 z-50"
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Кнопка НАЗАД */}
      <button
        className="absolute left-2 md:left-8 text-ink-900/30 hover:text-ink-900 transition-colors p-4 z-50"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Кнопка ВПЕРЕД */}
      <button
        className="absolute right-2 md:right-8 text-ink-900/30 hover:text-ink-900 transition-colors p-4 z-50"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* КОНТЕЙНЕР ДЛЯ ФОТОГРАФІЙ */}
      <div
        className="relative w-full h-full flex items-center justify-center cursor-default"
        // ПРИБРАЛИ звідси onClick={(e) => e.stopPropagation()}
      >
        {prevImg && (
          <img
            key={`prev-${prevImg}`}
            src={prevImg}
            alt="Previous view"
            // ДОДАЛИ блокування кліку сюди
            onClick={(e) => e.stopPropagation()}
            className="absolute max-w-full max-h-full object-contain shadow-xl animate-crossfade-out"
          />
        )}

        <img
          key={`curr-${currentImg}`}
          src={currentImg}
          alt="Current view"
          // ДОДАЛИ блокування кліку сюди
          onClick={(e) => e.stopPropagation()}
          className="absolute max-w-full max-h-full object-contain shadow-xl animate-crossfade-in"
        />
      </div>
    </div>
  );
}
