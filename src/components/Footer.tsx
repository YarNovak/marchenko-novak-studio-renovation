export default function Footer() {
  return (
    <footer className="py-12 md:py-16 px-6 bg-[#EFEFEF] border-t border-black/5">
      <div className="max-w-[1400px] mx-auto">
        {/* Слово CONTACT повністю прибрано */}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-start">
          <div className="md:col-span-7 reveal">
            {/* Пошта стала акуратнішою: text-2xl md:text-4xl */}
            <a
              href="mailto:hello@marchenkonovak.com"
              className="font-serif text-1xl md:text-2xl text-ink-900 hover:text-ink-500 transition-colors duration-300"
            >
              hello@marchenkonovak.com
            </a>

            {/* Відступи між поштою і телефоном також зменшено */}
            <div className="mt-6 flex flex-col gap-2 font-sans text-xs md:text-[13px] font-light text-ink-500 leading-relaxed">
              <a
                href="tel:+380975133585"
                className="hover:text-ink-900 transition-colors w-fit"
              >
                +380975133585
              </a>
              <p>
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

        {/* Відступ до копірайту значно скорочено (mt-16) */}
        <div className="mt-12 md:mt-16 pt-6 border-t border-ink-200/60 reveal flex flex-col md:flex-row justify-between items-start gap-4">
          <p className="font-sans text-[10px] tracking-widest text-ink-400 uppercase">
            © 2019 - 2026 Marchenko Novak Studio
          </p>
          <p className="font-sans text-[10px] tracking-widest text-ink-400 uppercase">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
