import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Trajectory</p>
        <h2 className={styles.sectionHeadText}>Experience & leadership.</h2>
      </motion.div>

      <div className="relative mt-14">
        <span className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-indigo-500 via-slate-700 to-transparent" />
        <div className="flex flex-col gap-10">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.title}`}
              variants={fadeIn("", "spring", index * 0.12, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="relative ml-12 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 backdrop-blur-xl"
            >
              <div className="absolute left-[-46px] top-6 flex h-10 w-10 items-center justify-center rounded-full border border-indigo-500/40 bg-slate-900 text-sm font-semibold text-indigo-200 shadow-[0_0_18px_rgba(99,102,241,0.35)]">
                {index + 1}
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {experience.title}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                    {experience.company}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">
                    {experience.date}
                  </p>
                </div>
                <ul className="flex list-disc flex-col gap-2 pl-5 text-sm text-slate-300">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
