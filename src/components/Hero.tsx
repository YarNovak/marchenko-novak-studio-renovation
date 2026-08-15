export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* 
        Фонове відео з оригінального сайту (1080p).
        Використовуємо стандартний тег video, який ідеально розтягується через object-cover.
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://video.wixstatic.com/video/092b46_3137d6b5b986466eb620b4dea9bcbe12/1080p/mp4/file.mp4"
          type="video/mp4"
        />
        Ваш браузер не підтримує відтворення відео.
      </video>

      {/* Оверлей затемнення (щоб текст читався) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Контент поверх відео */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 opacity-80">
          Architectural Visualization Studio
        </p>

        <h1 className="text-6xl md:text-8xl font-serif tracking-widest text-center">
          Marchenko Novak
        </h1>
      </div>
    </div>
  );
}
