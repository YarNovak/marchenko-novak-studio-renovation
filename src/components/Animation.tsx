import { useState, useEffect } from "react";
import { animationProjects } from "@/content";

const HERO_VIDEO =
  "https://video.wixstatic.com/video/092b46_3137d6b5b986466eb620b4dea9bcbe12/1080p/mp4/file.mp4";

const GRID_VIDEOS = [
  {
    poster:
      "https://static.wixstatic.com/media/092b46_83c1f658d56d4b7bb207e50d24acc009~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/092b46_83c1f658d56d4b7bb207e50d24acc009~mv2.jpg",
    videoPreview:
      "https://video.wixstatic.com/video/092b46_3137d6b5b986466eb620b4dea9bcbe12/1080p/mp4/file.mp4",
  },
  {
    poster:
      "https://static.wixstatic.com/media/092b46_7dcdda295f804730b8a7bf79daf7501e~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/092b46_7dcdda295f804730b8a7bf79daf7501e~mv2.jpg",
    videoPreview:
      "https://video.wixstatic.com/video/092b46_3137d6b5b986466eb620b4dea9bcbe12/1080p/mp4/file.mp4",
  },
  {
    poster:
      "https://static.wixstatic.com/media/092b46_0ec8142be1804fc3b27170a18c235b7a~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/092b46_0ec8142be1804fc3b27170a18c235b7a~mv2.jpg",
    videoPreview:
      "https://video.wixstatic.com/video/092b46_3137d6b5b986466eb620b4dea9bcbe12/1080p/mp4/file.mp4",
  },
];

export default function Animation() {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector("video");
    if (video) video.play().catch(() => {});
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeVideoIndex !== null) {
      setActiveVideoIndex((prev) => (prev! + 1) % animationProjects.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeVideoIndex !== null) {
      setActiveVideoIndex(
        (prev) =>
          (prev! - 1 + animationProjects.length) % animationProjects.length
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeVideoIndex === null) return;
      if (e.key === "Escape") setActiveVideoIndex(null);
      if (e.key === "ArrowRight") handleNext(e as any);
      if (e.key === "ArrowLeft") handlePrev(e as any);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeVideoIndex]);

  return (
    <>
      <div className="w-full max-w-[1200px] mx-auto flex flex-col">
        {/* === 1. VISUAL STATEMENT === */}
        {/* Прибрали порожній div, тепер заголовок підтягнуто вверх і він гармоніює з Gallery */}
        <div className="reveal flex flex-col mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-4">
            <h1 className="font-['WixHelveticaLight'] text-[24px] md:text-[32px] lg:text-[32px] tracking-[0.12em] font-normal text-black leading-[1.3em] lg:max-w-3xl antialiased">
              Architectural films
              <br />
              that capture space.
            </h1>
            <p className="font-['WixHelveticaLight'] text-[14px] text-black leading-[1.5em] lg:max-w-[280px] lg:pb-2 antialiased">
              We create cinematic visualizations that bring architecture to life
              through light, material and atmosphere.
            </p>
          </div>
        </div>

        {/* === 2. ГОЛОВНЕ ВІДЕО === */}
        <div className="reveal w-full aspect-video md:aspect-[21/9] bg-[#e8e8e8] relative overflow-hidden mb-20 md:mb-32">
          <video
            src={HERO_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>

        {/* === 3. SELECTED WORK === */}
        <div className="reveal flex justify-between items-end border-b border-ink-900/20 pb-4 mb-10">
          <span className="font-sans text-[10px] tracking-[0.2em] font-medium text-black uppercase">
            Selected Work
          </span>
        </div>

        {/* === 4. СІТКА ПРОЄКТІВ === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {animationProjects.map((project, index) => {
            const dotIndex = project.indexOf(".");
            const title = project.substring(0, dotIndex + 1);
            const category = project.substring(dotIndex + 1);
            const media = GRID_VIDEOS[index] || GRID_VIDEOS[0];
            const year = 2025 - index;

            return (
              <div
                key={index}
                className="flex flex-col w-full group cursor-pointer reveal"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setActiveVideoIndex(index)}
              >
                <div className="w-full aspect-video bg-[#e8e8e8] relative overflow-hidden mb-4">
                  <video
                    src={media.videoPreview}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  <img
                    src={media.poster}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/20 pointer-events-none">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 48 48"
                      fill="none"
                      className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 opacity-0 group-hover:opacity-100"
                    >
                      <circle
                        cx="24"
                        cy="24"
                        r="23.5"
                        stroke="white"
                        strokeWidth="1"
                      />
                      <polygon
                        points="21,16 31,24 21,32"
                        stroke="white"
                        strokeWidth="1"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="w-full h-px bg-ink-900/10 mb-3"></div>

                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-['WixHelveticaBold'] text-[14px] font-normal text-black antialiased">
                    {title}
                  </span>
                  <span className="font-['WixHelveticaLight'] text-[12px] font-normal text-ink-400 antialiased">
                    {year}
                  </span>
                </div>
                <span className="font-['WixHelveticaLight'] text-[13px] font-normal text-ink-600 antialiased pt-[2px]">
                  {category.trim()}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* === ПОП-АП === */}
      <div
        className={`fixed inset-0 z-[100] bg-[#111111] flex items-center justify-center transition-all duration-500 ${
          activeVideoIndex !== null
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setActiveVideoIndex(null)}
      >
        <button
          onClick={() => setActiveVideoIndex(null)}
          className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors p-2 z-50"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-4 z-50 hidden md:block"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div
          className="w-full max-w-[1400px] px-4 md:px-24 aspect-video outline-none relative"
          onClick={(e) => e.stopPropagation()}
        >
          {activeVideoIndex !== null && (
            <video
              key={activeVideoIndex}
              src={GRID_VIDEOS[activeVideoIndex]?.videoPreview}
              controls
              autoPlay
              playsInline
              className="w-full h-full bg-black shadow-2xl"
            />
          )}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-4 z-50 hidden md:block"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </>
  );
}
