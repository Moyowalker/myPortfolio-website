import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, quote, name, role, company }) => (
  <motion.figure
    variants={fadeIn("", "spring", index * 0.1, 0.75)}
    className="flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 backdrop-blur-xl"
  >
    <blockquote className="text-sm leading-relaxed text-slate-200 sm:text-base">
      “{quote}”
    </blockquote>
    <figcaption className="flex flex-col text-xs uppercase tracking-[0.35em] text-slate-400">
      <span className="text-sm font-semibold tracking-[0.2em] text-white">
        {name}
      </span>
      <span>
        {role} · {company}
      </span>
    </figcaption>
  </motion.figure>
);

const Feedbacks = () => {
  return (
    <div className="relative" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 rounded-3xl bg-slate-900/40 blur-3xl" />
  <div className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/80 p-10 shadow-xl shadow-slate-900/40">
        <motion.div variants={textVariant()} className="max-w-3xl">
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText} id="testimonials-heading">
            Signal from partners and collaborators.
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
