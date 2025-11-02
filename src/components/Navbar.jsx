import { useEffect, useState } from "react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

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
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-slate-950/80 border-b border-slate-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <button
          type="button"
          onClick={() => handleNavClick("about")}
          className="flex items-center gap-3 rounded-full bg-slate-900/50 px-4 py-2 text-left shadow-[0_0_25px_rgba(79,70,229,0.35)] backdrop-blur-md transition hover:bg-slate-900/70"
        >
          <img src={logo} alt="Moyosore Ajayi" className="h-9 w-9 rounded-full object-contain" />
          <div className="hidden sm:block">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Moyosore Ajayi
            </span>
            <p className="text-sm font-semibold text-slate-100">
              Product & AI Innovation
            </p>
          </div>
        </button>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-slate-400"
              } relative text-sm font-medium uppercase tracking-[0.2em] transition hover:text-white`}
              onClick={() => handleNavClick(nav.id)}
            >
              <span>{nav.title}</span>
              {active === nav.id && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400" />
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-20 right-4 z-40 w-56 flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl backdrop-blur-xl`}
          >
            <ul className="flex flex-col gap-4 text-sm uppercase tracking-[0.25em]">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer font-medium ${
                    active === nav.id ? "text-white" : "text-slate-400"
                  }`}
                  onClick={() => handleNavClick(nav.id)}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
