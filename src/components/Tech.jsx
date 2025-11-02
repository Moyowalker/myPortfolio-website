import { motion } from "framer-motion";

import { techStack } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
          Stack
        </p>
        <h2 className="text-pretty text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Tooling that powers my build-measure-learn loops.
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {Object.entries(techStack).map(([key, value], index) => {
          const label = key
            .split(/[-_]/)
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join(" ");
          return (
            <motion.article
            key={key}
            variants={fadeIn("", "spring", index * 0.1, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-transparent to-emerald-400/10" />
            <div className="relative flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200">
                {label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {value.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-indigo-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            </motion.article>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
