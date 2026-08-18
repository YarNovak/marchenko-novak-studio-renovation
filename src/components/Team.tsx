import { founders } from '@/content';

export default function Team() {
  return (
    <section id="team" className="py-32 md:py-48 px-6 lg:px-12 bg-paper-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="reveal">
          <span className="font-sans text-xs tracking-ultra-wide font-light text-ink-400 uppercase">
            Team
          </span>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 lg:gap-20">
          {founders.map((founder, i) => (
            <div key={founder.name} className={`reveal reveal-delay-${i + 1}`}>
              <div className="gallery-item aspect-[4/5] bg-paper-300">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover image-grayscale"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 border-t border-ink-200 pt-6">
                <h3 className="font-serif text-xl md:text-2xl font-medium text-ink-900">
                  {founder.name}
                </h3>
                <p className="mt-3 font-sans text-xs tracking-wide-sm font-light text-ink-400 uppercase">
                  {founder.role}
                </p>
                <p className="mt-5 max-w-xl font-sans text-sm font-light text-ink-500 leading-[1.65]">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
