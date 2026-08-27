import { founders } from "@/content";

export default function Team() {
  return (
    <div className="w-full max-w-[980px] mx-auto flex flex-col">
      {/* ДОДАНО: Єдиний стиль надзаголовка для гармонії з іншими сторінками */}
      <div className="reveal mb-12 md:mb-16">
        <span className="font-sans text-[10px] tracking-[0.2em] font-medium text-ink-400 uppercase">
          Founders
        </span>
      </div>

      <div className="flex flex-col gap-[100px] md:gap-[140px]">
        {founders.map((founder) => (
          <div
            key={founder.name}
            className="flex flex-col md:flex-row md:justify-between items-start w-full reveal"
          >
            {/* ФОТОГРАФІЯ */}
            <div className="w-full md:w-[330px] md:h-[420px] shrink-0 bg-[#e8e8e8] mb-6 md:mb-0">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover object-top grayscale"
              />
            </div>

            {/* ТЕКСТОВИЙ БЛОК */}
            <div className="w-full md:w-[607px] shrink-0 flex flex-col pt-1">
              <h3 className="font-['WixHelveticaBold'] text-[14px] font-normal text-black leading-[1.3em] antialiased">
                {founder.name}
              </h3>

              <p className="font-['WixHelveticaLight'] text-[14px] font-normal text-black leading-[1.3em] antialiased">
                {founder.role}
              </p>

              <div className="mb-[36px]"></div>

              {/* ЗМІНЕНО: leading-[1.5em] замість 1.3em, щоб текст легше читався і гармоніював з Animation */}
              <p className="font-['WixHelveticaLight'] text-[14px] font-normal text-black leading-[1.5em] text-justify antialiased">
                {founder.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
