import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import CTASection from "./components/CTASection";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <CTASection />
      </main>
      <footer className="border-t border-black/5 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} GlassWallet Inc. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-800">Privacy</a>
            <a href="#" className="hover:text-slate-800">Terms</a>
            <a href="#" className="hover:text-slate-800">Support</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
