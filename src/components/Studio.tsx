import { studioText, services } from "@/content";

export default function Studio() {
  return (
    <section id="studio" className="py-32 md:py-40 px-6 lg:px-12 bg-paper-100">
      
      <div className="max-w-[824px] mx-auto">
        <div className="reveal">
          <span className="font-sans text-[10px] tracking-[0.2em] font-medium text-ink-400 uppercase">
            Studio
          </span>
        </div>

   
        <div className="mt-8 grid md:grid-cols-12 gap-10 md:gap-6">
        
          <div className="md:col-span-7 reveal reveal-delay-1">
            <p className="font-sans text-[20px] md:text-[22px] font-light tracking-[-0.015em] text-ink-800 leading-[1.4]">
              {studioText.about}
            </p>
          </div>

   
          <div className="md:col-span-4 md:col-start-9 md:pt-2 reveal reveal-delay-2">
            <p className="font-sans text-xs md:text-[12px] font-light text-ink-500 leading-[1.6]">
              {studioText.approach}
            </p>
          </div>
        </div>

      
        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-10 md:gap-12">
          {services.map((service, i) => (
            <div key={service.title} className={`reveal reveal-delay-${i + 1}`}>
              <div className="border-t border-ink-300 pt-5">
                <h3 className="font-sans text-xs md:text-[13px] font-medium text-ink-900 mb-4">
                  {service.title}
                </h3>
                <p className="font-sans text-xs md:text-[12px] font-light text-ink-500 leading-[1.6]">
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
