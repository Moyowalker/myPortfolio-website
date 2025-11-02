import { motion } from "framer-motion";

import { styles } from "../styles";
import {
  aboutSummary,
  knowledgeHighlights,
  pillars,
} from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="max-w-5xl">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Operating at the edge of product, AI, and delivery.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.15, 1)}
        className="mt-6 max-w-4xl text-base text-slate-300 sm:text-lg"
      >
        {aboutSummary}
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.25, 1)}
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {pillars.map((pillar, index) => (
          <motion.article
            key={pillar.title}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 backdrop-blur-xl"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${pillar.accent} opacity-20`}
            />
            <div className="relative flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.35, 1)}
        className="mt-16 grid gap-6 lg:grid-cols-2"
      >
        {knowledgeHighlights.map((item) => (
          <div
            key={item.topic}
            className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/50 p-6 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-500/10 to-cyan-400/10 opacity-75 transition group-hover:opacity-90" />
            <div className="relative flex flex-col gap-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200">
                {item.topic}
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-slate-300">
                {item.points.map((point) => (
                  <li key={point} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
