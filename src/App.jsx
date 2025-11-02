import {
  About,
  CaseStudies,
  Contact,
  Experience,
  Feedbacks,
  Footer,
  Hero,
  Navbar,
  InsightsBot,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(13,148,136,0.18),_transparent_60%)]" />
      <Navbar />
      <main className="flex flex-col gap-32 pb-24">
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <CaseStudies />
        <Feedbacks />
        <InsightsBot />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
