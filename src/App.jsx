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
