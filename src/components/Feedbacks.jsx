import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, quote, name, role, company }) => (
  <motion.figure
    variants={fadeIn("", "spring", index * 0.1, 0.75)}
    className="flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-stone-800/60 bg-stone-900/60 p-10 backdrop-blur-xl"
  >
    <blockquote className="text-sm leading-relaxed text-stone-200 sm:text-base">
      “{quote}”
    </blockquote>
    <figcaption className="flex flex-col text-xs uppercase tracking-[0.35em] text-stone-400">
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
      <div className="absolute inset-0 rounded-3xl bg-stone-900/40 blur-3xl" />
  <div className="relative overflow-hidden rounded-3xl border border-stone-800/70 bg-stone-950/80 p-10 shadow-xl shadow-stone-900/40">
        <motion.div variants={textVariant()} className="max-w-3xl">
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText} id="testimonials-heading">
            Signal from partners and collaborators.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
