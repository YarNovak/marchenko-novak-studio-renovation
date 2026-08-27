import { useEffect, useState, useRef } from "react";
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

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";
  const isDarkText = scrolled || !isHomePage || mobileOpen;

  useEffect(() => {
    const handleScrollClose = () => {
      if (mobileOpen) setMobileOpen(false);
    };
    if (mobileOpen) {
      window.addEventListener("scroll", handleScrollClose, { passive: true });
    }
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = !isHomePage ? 50 : window.innerHeight * 0.45;
      const isScrolled = window.scrollY > scrollThreshold;

      setScrolled(isScrolled);

      if (location.pathname === "/gallery") {
        setActiveSection("gallery");
        return;
      }
      if (location.pathname === "/team") {
        setActiveSection("team");
        return;
      }
      if (location.pathname === "/animation") {
        setActiveSection("animation");
        return;
      }
      if (location.pathname === "/contact") {
        setActiveSection("contact");
        return;
      }

      if (!isScrolled) {
        setActiveSection("");
        return;
      }

      const sections = ["studio"];
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
  }, [location.pathname, isHomePage]);

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
  }, [hoveredTarget, activeSection, location.pathname]);

  const handleNavClick = (target: string) => {
    setMobileOpen(false);

    if (target === "gallery") {
      navigate("/gallery");
    } else if (target === "team") {
      navigate("/team");
    } else if (target === "animation") {
      navigate("/animation");
    } else if (target === "contact") {
      navigate("/contact");
    } else {
      if (!isHomePage) {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById(target)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled || mobileOpen
          ? "bg-paper-100/95 backdrop-blur-md py-4 shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-transparent py-6"
      }`}
    >
      {/* 
        ІДЕАЛЬНА СТРУКТУРА КОНТЕЙНЕРА:
        Зовнішній div тримає відступи екрану, внутрішній — ліміт у 1400px.
        Тепер вирівнювання з Галереєю буде піксель-в-піксель.
      */}
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <button
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
              if (isHomePage) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                navigate("/");
              }
            }}
            className={`transition-colors duration-500 relative z-50 ${
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

          <div
            className="hidden md:flex items-center gap-10 relative"
            onMouseLeave={() => setHoveredTarget(null)}
          >
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

          <button
            className={`md:hidden relative z-50 p-2 -mr-2 transition-colors duration-500 ${
              isDarkText ? "text-ink-900" : "text-paper-100"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <div className="relative w-5 h-3.5 flex flex-col justify-between">
              <span
                className={`absolute left-0 w-full h-px bg-current transition-all duration-300 ease-in-out ${
                  mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-px bg-current transition-all duration-200 top-1/2 -translate-y-1/2 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 w-full h-px bg-current transition-all duration-300 ease-in-out ${
                  mobileOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "bottom-0"
                }`}
              />
            </div>
          </button>
        </div>
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
