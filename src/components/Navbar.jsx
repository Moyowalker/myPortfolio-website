import { useEffect, useState } from "react";

import BrandMark from "./BrandMark";
import { styles } from "../styles";
import { navLinks } from "../constants";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-55% 0px -30%" }
    );

    sections.forEach((section) => observer.observe(section));

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActive(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    setToggle(false);
    setActive(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav className={`${styles.paddingX} fixed top-0 z-50 w-full`}>
      <div
        className={`mx-auto mt-4 flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#16130f]/88 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <button
          type="button"
          onClick={() => handleNavClick("hero")}
          className="flex items-center gap-3 text-left"
        >
          <BrandMark className="h-10 w-10" withRing={false} />
          <div className="hidden sm:block">
            <span className="text-[10px] uppercase tracking-[0.32em] text-stone-500">
              Moyosore Ajayi
            </span>
            <p className="mt-0.5 text-xs font-medium text-stone-300">
              moyosore.me
            </p>
          </div>
        </button>

        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <ul className="flex flex-row gap-7">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.id ? "text-stone-100" : "text-stone-400"
                } relative cursor-pointer text-xs font-medium uppercase tracking-[0.24em] transition hover:text-white`}
                onClick={() => handleNavClick(nav.id)}
              >
                <span>{nav.title}</span>
                {active === nav.id && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-[#d9b272]" />
                )}
              </li>
            ))}
          </ul>

          <a
            href="mailto:dev@moyosore.me"
            className="inline-flex items-center rounded-full border border-[#d9b272]/30 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-200 transition hover:border-[#d9b272] hover:text-white"
          >
            dev@moyosore.me
          </a>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-20 right-6 z-40 w-60 flex-col gap-5 rounded-[1.6rem] border border-white/10 bg-[#16130f]/95 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl`}
          >
            <ul className="flex flex-col gap-4 text-sm uppercase tracking-[0.25em]">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer font-medium ${
                    active === nav.id ? "text-white" : "text-stone-400"
                  }`}
                  onClick={() => handleNavClick(nav.id)}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
            <a
              href="mailto:dev@moyosore.me"
              className="inline-flex items-center rounded-full border border-[#d9b272]/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-200"
            >
              dev@moyosore.me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
