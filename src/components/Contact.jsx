import { motion } from "framer-motion";
import {
  ArrowUpRightIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import { styles } from "../styles";
import { contactChannels } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const channelIcons = {
  email: EnvelopeIcon,
  whatsapp: DevicePhoneMobileIcon,
};

const Contact = () => {
  return (
    <div className="relative" aria-labelledby="contact-heading">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/15 via-transparent to-emerald-400/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/80 p-10">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText} id="contact-heading">
            Let's build the next milestone.
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.15, 1)}
          className="mt-6 max-w-3xl text-sm text-slate-300 sm:text-base"
        >
          Whether you are refining an AI roadmap, unlocking automation inside the enterprise, or launching a new product bet, I would love to partner on strategy and delivery. Reach out directly or drop a note via your preferred channel.
        </motion.p>

        <motion.div
          variants={fadeIn("", "", 0.25, 1)}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {contactChannels.map((channel) => {
            const key = channel.label.toLowerCase();
            const Icon = channelIcons[key] ?? ArrowUpRightIcon;
            return (
              <a
                key={channel.label}
                href={channel.href}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 backdrop-blur-xl transition hover:border-indigo-500/60"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-400/10 opacity-80 transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-3">
                  <Icon className="h-8 w-8 text-indigo-300" />
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200">
                    {channel.label}
                  </span>
                  <p className="text-sm font-medium text-white">
                    {channel.value}
                  </p>
                </div>
              </a>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.35, 1)}
          className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-100"
        >
          <ArrowUpRightIcon className="h-5 w-5" />
          <span>
            Preferred collaboration models: product discovery sprints, AI automation design, and embedded product leadership.
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
