const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#14110f]/82">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-xs uppercase tracking-[0.35em] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-stone-300">© {new Date().getFullYear()} Moyosore Ajayi. Built for moyosore.me.</p>
        <div className="flex flex-wrap items-center gap-4 text-stone-400">
          <span>React · Vite · TailwindCSS</span>
          <span>Deployed on Vercel</span>
          <a
            href="mailto:dev@moyosore.me"
            className="text-[#e8d7bb] transition hover:text-white"
          >
            dev@moyosore.me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
