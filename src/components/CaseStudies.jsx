import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MDXProvider } from "@mdx-js/react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const caseStudyModules = import.meta.glob("../../content/case-studies/*.mdx", {
  eager: true,
});

const mdxComponents = {
  h2: (props) => (
    <h2
      {...props}
      className="mt-8 text-2xl font-semibold text-white first:mt-0"
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className="mt-6 text-xl font-semibold text-indigo-200 first:mt-0"
    />
  ),
  p: (props) => (
    <p
      {...props}
      className="mt-4 text-sm leading-relaxed text-slate-200 first:mt-0"
    />
  ),
  ul: (props) => (
    <ul
      {...props}
      className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-200"
    />
  ),
  ol: (props) => (
    <ol
      {...props}
      className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-200"
    />
  ),
  li: (props) => <li {...props} className="leading-relaxed" />,
  a: (props) => (
    <a
      {...props}
      className="text-indigo-300 underline decoration-dotted underline-offset-4 transition hover:text-indigo-200"
    />
  ),
  strong: (props) => (
    <strong {...props} className="font-semibold text-white" />
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="mt-6 border-l-4 border-indigo-500/60 pl-4 italic text-slate-100"
    />
  ),
};

const CaseStudies = () => {
  const studies = useMemo(() => {
    return Object.entries(caseStudyModules)
      .map(([path, mod]) => {
        const slug = path.split("/").pop()?.replace(".mdx", "");
        const module = mod;
        const meta = module.meta || module.frontmatter || {};

        return {
          slug,
          meta,
          Component: module.default,
        };
      })
      .filter((item) => item.slug && item.meta?.title)
      .sort((a, b) => {
        const aOrder = a.meta?.order ?? 99;
        const bOrder = b.meta?.order ?? 99;
        return aOrder - bOrder;
      });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [activeStudy, setActiveStudy] = useState(null);

  const openStudy = useCallback(
    (slug) => {
      const match = studies.find((study) => study.slug === slug);
      if (!match) return;
      setActiveStudy(match);
      setIsOpen(true);
      window.history.replaceState(null, "", `#case-studies?slug=${slug}`);
      window.dispatchEvent(
        new CustomEvent("insightsbot:ask", {
          detail: {
            question: `What were the biggest lessons from the ${match.meta?.title} case study?`,
          },
        })
      );
    },
    [studies]
  );

  const closeStudy = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => setActiveStudy(null), 200);
    window.history.replaceState(null, "", "#case-studies");
  }, []);

  useEffect(() => {
    const handler = (event) => {
      if (event.detail?.slug) {
        openStudy(event.detail.slug);
      }
    };
    window.addEventListener("open-case-study", handler);
    return () => window.removeEventListener("open-case-study", handler);
  }, [openStudy]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash.startsWith("#case-studies")) return;
    const params = new URLSearchParams(hash.split("?")[1]);
    const slug = params.get("slug");
    if (slug) {
      openStudy(slug);
    }
  }, [openStudy]);

  return (
    <div aria-labelledby="case-studies-heading">
      <motion.div variants={textVariant()} className="max-w-4xl">
        <p className={styles.sectionSubText}>Deeper Dives</p>
        <h2 className={styles.sectionHeadText} id="case-studies-heading">
          Case studies & operating playbooks.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.15, 1)}
        className="mt-6 max-w-3xl text-sm text-slate-300 sm:text-base"
      >
        Explore the product patterns, architectural decisions, and outcomes
        behind each build. These breakdowns outline discovery insights, system
        diagrams, and measurable impact across AI, automation, and user
        experience layers.
      </motion.p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {studies.map((study, index) => (
          <motion.article
            key={study.slug}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="group h-full rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 backdrop-blur-xl transition-all hover:border-indigo-500/60"
          >
            <div className="flex h-full flex-col gap-4">
              <header className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.35em] text-indigo-200">
                  {study.meta.category || "Case Study"}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {study.meta.title}
                </h3>
                {study.meta.timeline && (
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                    {study.meta.timeline}
                  </p>
                )}
              </header>
              <p className="text-sm leading-relaxed text-slate-300">
                {study.meta.summary}
              </p>
              {Array.isArray(study.meta.tags) && (
                <div className="mt-auto flex flex-wrap gap-2">
                  {study.meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-indigo-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => openStudy(study.slug)}
                  className="inline-flex items-center gap-2 rounded-full border border-indigo-500/50 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-100 transition hover:border-indigo-400 hover:bg-indigo-500/20"
                >
                  Read Playbook
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={closeStudy} className="relative z-[999]">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-950/70 backdrop-blur" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto px-4 py-10 sm:px-10">
            <div className="mx-auto flex min-h-full max-w-4xl items-start justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/95 shadow-2xl">
            <div className="relative flex flex-col gap-6 p-6 sm:p-10">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <Dialog.Title className="text-2xl font-semibold text-white">
                          {activeStudy?.meta?.title}
                        </Dialog.Title>
                        {activeStudy?.meta?.summary && (
                          <p className="mt-2 max-w-2xl text-sm text-slate-300">
                            {activeStudy.meta.summary}
                          </p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={closeStudy}
                        className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200 transition hover:border-indigo-500 hover:text-white"
                      >
                        Close
                      </button>
                    </div>
                    {Array.isArray(activeStudy?.meta?.highlights) && (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {activeStudy.meta.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-100"
                          >
                            {highlight}
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="prose prose-invert max-w-none prose-headings:tracking-tight prose-h3:text-indigo-200 prose-p:text-slate-200 prose-strong:text-white">
                      {activeStudy?.Component && (
                        <MDXProvider components={mdxComponents}>
                          <activeStudy.Component />
                        </MDXProvider>
                      )}
                    </div>
                    {activeStudy?.meta?.links?.length ? (
                      <div className="flex flex-wrap gap-3 pt-4">
                        {activeStudy.meta.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-100 transition hover:border-indigo-500 hover:bg-indigo-500/20"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SectionWrapper(CaseStudies, "case-studies");
