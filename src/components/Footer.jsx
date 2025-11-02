const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-800/60 bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-xs uppercase tracking-[0.35em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-slate-400">© {new Date().getFullYear()} Moyosore Ajayi. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4 text-slate-400">
          <span>Built with React · Vite · TailwindCSS</span>
          <span>Deployed on Vercel</span>
          <a
            href="https://plausible.io"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-200 transition hover:text-indigo-100"
          >
            Plausible Analytics
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
