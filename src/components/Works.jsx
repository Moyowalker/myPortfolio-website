import { useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  const openCaseStudy = useCallback((slug) => {
    if (!slug) return;
    window.dispatchEvent(
      new CustomEvent("open-case-study", {
        detail: { slug },
        bubbles: true,
      })
    );
    const el = document.getElementById("case-studies");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
      <motion.div variants={textVariant()} className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
          Portfolio
        </p>
        <h2 className="text-pretty text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Selected product builds and platforms.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.15, 1)}
        className="mt-6 max-w-3xl text-sm text-slate-300 sm:text-base"
      >
        A snapshot of AI-powered products, automation engines, and user-centric experiences I have led from discovery to launch. Each project combines product strategy, technical architecture, and measurable outcomes.
      </motion.p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 backdrop-blur-xl transition-all hover:border-indigo-500/60"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-transparent to-emerald-400/10 opacity-80 transition group-hover:opacity-100" />
            <div className="relative flex flex-col gap-5">
              <header className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {project.summary}
                </p>
              </header>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-indigo-500/30 bg-slate-950/60 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-indigo-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.35em]">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200 transition hover:border-indigo-500 hover:text-white"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    Live
                  </a>
                )}
                {project.links.caseStudy && (
                  <button
                    type="button"
                    onClick={() => openCaseStudy(project.links.caseStudy)}
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-2 text-indigo-100 transition hover:border-indigo-500 hover:bg-indigo-500/20"
                  >
                    <DocumentMagnifyingGlassIcon className="h-4 w-4" />
                    Case Study
                  </button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
