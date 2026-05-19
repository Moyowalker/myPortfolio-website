import { motion } from "framer-motion";

import { techStack } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-400">
          Stack
        </p>
        <h2 className="text-pretty text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Tooling that powers my build-measure-learn loops.
        </h2>
      </motion.div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {(Array.isArray(techStack) ? techStack : Object.entries(techStack).map(([key, items]) => ({ label: key, items }))).map((entry, index) => {
          const label = entry.label;
          const items = entry.items || [];
          return (
            <motion.article
            key={label}
            variants={fadeIn("", "spring", index * 0.1, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-2xl border border-stone-800/70 bg-stone-900/60 p-8 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-200">
                {label}
              </h3>
              {entry.blurb && (
                <p className="text-xs text-stone-400 leading-relaxed">{entry.blurb}</p>
              )}
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-amber-100"
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
