import { studioText, services } from "@/content";

export default function Studio() {
  return (
    <section id="studio" className="py-32 md:py-40 px-6 lg:px-12 bg-[#F7F7F7]">
      <div className="max-w-[1200px] mx-auto">
        {/* НАДЗАГОЛОВОК (Єдиний стиль для всіх сторінок) */}
        <div className="reveal">
          <span className="font-sans text-[10px] tracking-[0.2em] font-medium text-ink-400 uppercase">
            Studio
          </span>
        </div>

        <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-10 md:gap-6">
          {/* ГОЛОВНИЙ ТЕКСТ */}
          <div className="md:col-span-7 reveal reveal-delay-1">
            <p className="font-['WixHelveticaLight'] text-[20px] md:text-[24px] text-black leading-[1.4em] antialiased">
              {studioText.about}
            </p>
          </div>

          {/* ДРУГОРЯДНИЙ ТЕКСТ */}
          <div className="md:col-span-4 md:col-start-9 md:pt-2 reveal reveal-delay-2">
            <p className="font-['WixHelveticaLight'] text-[14px] text-black leading-[1.5em] antialiased text-justify">
              {studioText.approach}
            </p>
          </div>
        </div>

        {/* СЕРВІСИ */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-10 md:gap-12">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="border-t border-ink-900/20 pt-5">
                <h3 className="font-['WixHelveticaBold'] text-[14px] font-normal text-black mb-3 antialiased">
                  {service.title}
                </h3>
                <p className="font-['WixHelveticaLight'] text-[13px] text-ink-600 leading-[1.5em] antialiased">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
