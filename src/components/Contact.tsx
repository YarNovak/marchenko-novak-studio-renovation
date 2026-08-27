export default function Contact() {
  return (
    <div className="w-full max-w-[980px] mx-auto flex flex-col">
      {/* Надзаголовок (Тримаємо єдиний стиль із Team та Gallery) */}
      <div className="reveal mb-12 md:mb-16">
        <span className="font-sans text-[10px] tracking-[0.2em] font-medium text-ink-400 uppercase">
          Contact
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-start w-full">
        {/* === ЛІВА ЧАСТИНА: Заголовок + Лінія + Текст (Ідеальні 330px) === */}
        <div className="w-full md:w-[330px] shrink-0 mb-16 md:mb-0 reveal">
          {/* Головний заголовок із засічками */}
          <h1 className="font-serif text-[44px] md:text-[52px] lg:text-[56px] text-black leading-[1.05] antialiased">
            Let's work
            <br />
            together.
          </h1>

          {/* Елегантна роздільна лінія */}
          <div className="w-12 h-px bg-ink-900/20 mt-8 mb-8"></div>

          {/* Новий, більш преміальний та професійний текст */}
          <p className="font-['WixHelveticaLight'] text-[14px] text-ink-600 leading-[1.6em] antialiased">
            We collaborate with architects, developers, and designers to craft
            compelling visual narratives. Share your vision with us.
          </p>
        </div>

        {/* === ПРАВА ЧАСТИНА: Форма (Ідеальні 607px) === */}
        <div
          className="w-full md:w-[607px] shrink-0 reveal"
          style={{ transitionDelay: "0.1s" }}
        >
          {/* pt-2 вирівнює поля форми рівно по верхній межі великого тексту зліва */}
          <form
            className="flex flex-col gap-10 md:gap-12 pt-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
              {/* Name */}
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Name*"
                  className="w-full bg-transparent border-b border-ink-900/20 pb-3 font-['WixHelveticaLight'] text-[14px] text-black placeholder:text-ink-400 focus:outline-none focus:border-black transition-colors rounded-none"
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Email address*"
                  className="w-full bg-transparent border-b border-ink-900/20 pb-3 font-['WixHelveticaLight'] text-[14px] text-black placeholder:text-ink-400 focus:outline-none focus:border-black transition-colors rounded-none"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="relative group">
              <input
                type="text"
                id="subject"
                placeholder="Subject*"
                required
                className="w-full bg-transparent border-b border-ink-900/20 pb-3 font-['WixHelveticaLight'] text-[14px] text-black placeholder:text-ink-400 focus:outline-none focus:border-black transition-colors rounded-none"
              />
            </div>

            {/* Message */}
            <div className="relative group">
              <textarea
                id="message"
                rows={1}
                required
                placeholder="Message*"
                className="w-full bg-transparent border-b border-ink-900/20 pb-3 font-['WixHelveticaLight'] text-[14px] text-black placeholder:text-ink-400 focus:outline-none focus:border-black transition-colors resize-y rounded-none"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-2">
              <button
                type="submit"
                className="bg-black text-white font-sans text-[10px] tracking-[0.2em] font-medium uppercase py-4 px-10 hover:bg-black/80 transition-colors w-fit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
