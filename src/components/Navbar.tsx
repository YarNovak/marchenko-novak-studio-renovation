import { useEffect, useState, useRef } from "react";
// 1. Імпортуємо хуки для роботи з маршрутизацією
import { useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "@/content";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredTarget, setHoveredTarget] = useState<string | null>(null);

  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // 2. Ініціалізуємо хуки роутера
  const location = useLocation();
  const navigate = useNavigate();

  // Перевіряємо, чи ми зараз на сторінці Галереї
  const isGalleryPage = location.pathname === "/gallery";

  // ТЕКСТ МАЄ БУТИ ТЕМНИМ, якщо ми проскролили ВАБО якщо ми на сторінці Галереї
  // (бо там немає чорного відео на фоні)
  const isDarkText = scrolled || isGalleryPage;

  useEffect(() => {
    const handleScroll = () => {
      // На Галереї фон меню стає білим одразу після 50px скролу.
      // На Головній - чекаємо, поки проскролиться 45% відео.
      const scrollThreshold = isGalleryPage ? 50 : window.innerHeight * 0.45;
      const isScrolled = window.scrollY > scrollThreshold;

      setScrolled(isScrolled);

      // Якщо ми на сторінці Галереї, лінія завжди має підкреслювати слово "Gallery"
      if (isGalleryPage) {
        setActiveSection("gallery");
        return;
      }

      // Якщо ми на головній і на самому верху (на відео) - ховаємо лінію
      if (!isScrolled) {
        setActiveSection("");
        return;
      }

      // Визначаємо активну секцію під час скролу (тільки для Головної сторінки)
      const sections = ["studio", "animation", "team", "contact"];
      let currentSection = "";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isGalleryPage]); // Додали isGalleryPage в залежності

  // РОЗРАХУНОК РУХУ ЛІНІЇ
  useEffect(() => {
    const currentTarget = hoveredTarget || activeSection;

    if (currentTarget && navRefs.current[currentTarget]) {
      const el = navRefs.current[currentTarget]!;
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1,
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredTarget, activeSection, isGalleryPage]);

  // 3. НОВА ЛОГІКА КЛІКУ ПО МЕНЮ
  const handleNavClick = (target: string) => {
    setMobileOpen(false);

    if (target === "gallery") {
      // Якщо клікнули на Gallery - переходимо на сторінку Галереї
      navigate("/gallery");
    } else {
      // Якщо клікнули на щось інше (наприклад, Studio)...
      if (isGalleryPage) {
        // ...але ми зараз в Галереї: спочатку йдемо на Головну, а потім скролимо!
        navigate("/");
        setTimeout(() => {
          document
            .getElementById(target)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // ...ми вже на Головній: просто скролимо
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-paper-100/95 backdrop-blur-md py-4 shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* ЛОГОТИП */}
        <button
          onClick={() => {
            navigate("/"); // Повертаємо на головну при кліку на лого
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          // ВИКОРИСТОВУЄМО isDarkText замість scrolled для кольорів тексту
          className={`transition-colors duration-500 ${
            isDarkText
              ? "text-ink-700 hover:text-ink-900"
              : "text-paper-200 hover:text-paper-50"
          }`}
        >
          <a
            href="/"
            className="flex items-center gap-2"
            onClick={(e) => e.preventDefault()}
          >
            <Logo className="h-8 md:h-9 w-auto" />
          </a>
        </button>

        {/* ДЕСКТОПНЕ МЕНЮ */}
        <div
          className="hidden md:flex items-center gap-10 relative"
          onMouseLeave={() => setHoveredTarget(null)}
        >
          {/* МАГІЧНА ЛІНІЯ */}
          <div
            className={`absolute bottom-[-4px] h-[1px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isDarkText ? "bg-ink-900" : "bg-paper-50"
            }`}
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              opacity: indicatorStyle.opacity,
            }}
          />

          {navLinks.map((link) => (
            <button
              key={link.target}
              ref={(el) => (navRefs.current[link.target] = el)}
              onMouseEnter={() => setHoveredTarget(link.target)}
              onClick={() => handleNavClick(link.target)}
              // ВИКОРИСТОВУЄМО isDarkText
              className={`text-xs tracking-wide-sm font-light transition-colors duration-500 ${
                isDarkText
                  ? "text-ink-700 hover:text-ink-900"
                  : "text-paper-200 hover:text-paper-50"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* МОБІЛЬНА КНОПКА (БУРГЕР) */}
        <button
          className={`md:hidden transition-colors duration-500 ${
            isDarkText ? "text-ink-900" : "text-paper-100"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* ВИПАДАЮЧЕ МЕНЮ ДЛЯ МОБІЛОК */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 bg-paper-100 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleNavClick(link.target)}
              className="text-left text-sm tracking-wide-sm font-light text-ink-700 hover:text-ink-900 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
