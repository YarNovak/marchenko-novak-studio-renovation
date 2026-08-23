import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    
    window.addEventListener("scroll", handleScroll, { passive: true });

    
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const textScale = 1 - scrollY * 0.00009;


  const textOpacity = Math.max(0, 1 - scrollY / 600);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
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


      <div className="absolute inset-0 bg-black/40"></div>

     
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white origin-center"
        style={{
          transform: `scale(${textScale})`,
          opacity: textOpacity,
        }}
      >
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
