import { useEffect, useState } from "react";
import { navLinks } from "@/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ["studio", "gallery", "animation", "team", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    setMobileOpen(false);
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
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
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          // ТУТ МАГІЯ: Тепер класи кольору і часу анімації (duration-500) ідеально збігаються з пунктами меню!
          className={`transition-colors duration-500 ${
            scrolled
              ? "text-ink-700 hover:text-ink-900"
              : "text-paper-200 hover:text-paper-50"
          }`}
        >
          <a href="/" className="flex items-center gap-2">
            <svg
              viewBox="0 0 120 60"
              // ЗМЕНШЕНО РОЗМІР: замість h-8 md:h-10 тепер h-4 md:h-5
              // Це зробить логотип ідеально сумірним із дрібним шрифтом text-xs
              className="h-7 md:h-8 w-auto fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Georgia, Times New Roman, serif"
                fontSize="65"
                letterSpacing="-3"
              >
                mm
              </text>
            </svg>
          </a>
        </button>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleNavClick(link.target)}
              className={`nav-link text-xs tracking-wide-sm font-light transition-colors duration-500 ${
                scrolled
                  ? "text-ink-700 hover:text-ink-900"
                  : "text-paper-200 hover:text-paper-50"
              } ${activeSection === link.target ? "active" : ""}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className={`md:hidden transition-colors duration-500 ${
            scrolled ? "text-ink-900" : "text-paper-100"
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
