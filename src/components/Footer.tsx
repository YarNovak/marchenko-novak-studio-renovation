export default function Footer() {
  return (
    <footer className="pt-12 md:pt-16 pb-6 md:pb-8 px-6 bg-[#EFEFEF]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-start">
          <div className="md:col-span-7 reveal">
         
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@marchenkonovak.com"
                
                className="font-sans text-sm md:text-[15px] tracking-wide font-light text-ink-900 hover:text-ink-500 transition-colors duration-300 w-fit"
              >
                hello@marchenkonovak.com
              </a>

              <a
                href="tel:+380975133585"
                className="font-sans text-xs md:text-[13px] font-light text-ink-500 hover:text-ink-900 transition-colors w-fit"
              >
                +380975133585
              </a>

              <p className="font-sans text-xs md:text-[13px] font-light text-ink-500 leading-relaxed">
                Sichovykh Striltsiv St, 23A,
                <br />
                Kyiv, 04053, Ukraine
              </p>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-10 flex flex-col items-start md:items-end gap-3 reveal mt-2 md:mt-0">
            {[
              { name: "Instagram", url: "#" },
              { name: "Behance", url: "#" },
              { name: "Vimeo", url: "#" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="group flex items-center gap-3 text-[11px] tracking-[0.15em] uppercase text-ink-600 hover:text-ink-900 transition-colors"
              >
                <span>{social.name}</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-ink-400 group-hover:text-ink-900">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex justify-center">
          <p className="font-sans text-[10px] tracking-widest text-ink-400 uppercase text-center">
            © 2019 - 2026 Marchenko Novak Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
