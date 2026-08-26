import { animationProjects } from '@/content';

export default function Animation() {
  return (
    <section id="animation" className="py-32 md:py-48 px-6 lg:px-12 bg-ink-900">
      <div className="max-w-[1400px] mx-auto">
        <div className="reveal">
          <span className="font-sans text-xs tracking-ultra-wide font-light text-ink-200 uppercase">
            Animation
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl font-light text-paper-50">
            Motion & Film
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-12">
          {animationProjects.map((project, i) => (
            <div key={project} className={`reveal reveal-delay-${i + 1}`}>
              <div className="group cursor-pointer">
                <div className="gallery-item aspect-[4/3] bg-ink-800">
                  <div className="w-full h-full flex items-center justify-center bg-ink-800">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      className="text-paper-300/40 group-hover:text-paper-100 transition-colors duration-500"
                    >
                      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1" />
                      <path d="M19 16L32 24L19 32V16Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="mt-5 border-t border-ink-600 pt-4">
                  <h3 className="font-serif text-lg md:text-xl font-light text-paper-200">
                    {project}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
