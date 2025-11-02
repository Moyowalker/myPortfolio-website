import { motion } from "framer-motion";

import { heroContent } from "../constants";
import { styles } from "../styles";

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const highlightVariants = (index) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + index * 0.1, duration: 0.6, ease: "easeOut" },
  },
});

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
      id="hero"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-cyan-400/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400/30 via-teal-500/30 to-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-96 w-96 rounded-full bg-gradient-to-tr from-fuchsia-500/25 via-purple-500/20 to-indigo-500/25 blur-3xl" />
      </div>

      <div
        className={`${styles.paddingX} mx-auto flex w-full max-w-6xl flex-col gap-14 pt-36 text-slate-100`}
      >
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-400/50 bg-indigo-500/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-indigo-200">
            Product & AI Innovation
          </span>

          <h1
            id="hero-heading"
            className="font-display text-balance text-4xl font-black leading-tight tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl"
          >
            {heroContent.headline}
          </h1>

          <p className="max-w-3xl text-lg text-slate-300 sm:text-xl">
            {heroContent.subhead}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            {heroContent.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`group relative inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition ${
                  cta.variant === "primary"
                    ? "bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 text-slate-950 shadow-[0_0_35px_rgba(59,130,246,0.35)]"
                    : "border border-slate-700 bg-slate-900/60 text-slate-200 hover:border-slate-500"
                }`}
              >
                {cta.label}
                <span className="inline-flex h-2 w-2 rounded-full bg-current" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.5 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {heroContent.highlights.map((item, index) => (
            <motion.div
              key={item}
              variants={highlightVariants(index)}
              className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-slate-900/60 p-4 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-teal-400/10 opacity-70" />
              <p className="relative text-sm font-semibold uppercase tracking-[0.35em] text-indigo-100">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex items-center gap-3 text-slate-400">
          <span className="h-[1px] w-16 bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
          <p className="text-xs uppercase tracking-[0.4em]">
            Scroll for impact
          </p>
        </div>

        <div className="flex justify-center pb-4">
          <a
            href="#about"
            className="relative inline-flex h-16 w-10 items-center justify-center rounded-full border border-slate-600/50 bg-slate-900/70"
            aria-label="Scroll to About section"
          >
            <motion.span
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatType: "loop" }}
              className="block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
