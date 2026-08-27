import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Запускаємо епічну анімацію появи одразу після рендеру
    requestAnimationFrame(() => {
      setIsMounted(true);
    });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Логіка для розчинення та зменшення тексту ПРИ СКРОЛІ
  const textScale = 1 - scrollY * 0.00009;
  const textOpacity = Math.max(0, 1 - scrollY / 600);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#111111]">
      {/* 
        ВІДЕО
        Жодних мілиць із постерами. Воно просто плавно і красиво 
        виринає з темряви за 2 секунди після завантаження сторінки.
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-[2s] ease-in-out ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <source
          src="https://video.wixstatic.com/video/092b46_3137d6b5b986466eb620b4dea9bcbe12/1080p/mp4/file.mp4"
          type="video/mp4"
        />
        Ваш браузер не підтримує відтворення відео.
      </video>

      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* 
        КОНТЕЙНЕР СКРОЛУ
        Цей div відповідає тільки за те, щоб текст зникав, коли ти крутиш коліщатко вниз.
      */}
      <div
        className="relative z-20 flex flex-col items-center justify-center h-full text-white origin-center"
        style={{
          transform: `scale(${textScale})`,
          opacity: textOpacity,
        }}
      >
        {/* 
          КОНТЕЙНЕР ЕПІЧНОЇ ПОЯВИ
          Цей div відповідає за те, щоб текст красиво випливав знизу при завантаженні сайту.
        */}
        <div
          className={`flex flex-col items-center transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMounted
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 opacity-80">
            Architectural Visualization Studio
          </p>

          <h1 className="text-6xl md:text-8xl font-serif tracking-widest text-center">
            Marchenko Novak
          </h1>
        </div>
      </div>
    </div>
  );
}
