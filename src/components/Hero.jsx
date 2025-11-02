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
    <section className="relative" aria-labelledby="hero-heading" id="hero">
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
                className={`group relative inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition ${
                  cta.variant === "primary"
                    ? "border-indigo-400 bg-indigo-500 text-slate-950 hover:bg-indigo-400 hover:border-indigo-300"
                    : "border-slate-700 bg-slate-900/60 text-slate-200 hover:border-slate-500"
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
              className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4 backdrop-blur-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-100">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex items-center gap-3 text-slate-400">
          <span className="h-[1px] w-16 bg-slate-700" />
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
              className="block h-2 w-2 rounded-full bg-indigo-400"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
