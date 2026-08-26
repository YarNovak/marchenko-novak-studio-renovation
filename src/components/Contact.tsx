import { contactInfo, footerText } from '@/content';

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 lg:px-12 bg-paper-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="reveal">
          <span className="font-sans text-xs tracking-ultra-wide font-light text-ink-400 uppercase">
            Contact
          </span>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-16 lg:gap-24">
          <div className="reveal reveal-delay-1">
            <a
              href={`mailto:${contactInfo.email}`}
              className="font-serif text-3xl md:text-5xl font-light text-ink-900 hover:text-ink-600 transition-colors duration-500"
            >
              {contactInfo.email}
            </a>
            <p className="mt-8 font-sans text-base font-light text-ink-500">
              {contactInfo.phone}
            </p>
            <div className="mt-4 font-sans text-sm font-light text-ink-400 leading-[1.8]">
              {contactInfo.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2 md:pt-4">
            <div className="flex flex-col gap-4">
              {contactInfo.social.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-line font-sans text-sm tracking-wide-sm font-light text-ink-700 uppercase self-start"
                >
                  {social.label}
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-ink-200 reveal">
          <p className="font-sans text-xs tracking-wide-sm font-light text-ink-300">
            {footerText}
          </p>
        </div>
      </div>
    </section>
  );
}
