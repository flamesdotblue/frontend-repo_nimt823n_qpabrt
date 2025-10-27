import { Wallet, Shield, CreditCard, Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 text-white grid place-items-center shadow-lg shadow-cyan-500/30">
            <Wallet className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight">
            GlassWallet
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition-colors flex items-center gap-2">
            <Shield className="h-4 w-4" /> Security
          </a>
          <a href="#features" className="hover:text-slate-900 transition-colors flex items-center gap-2">
            <CreditCard className="h-4 w-4" /> Cards
          </a>
          <a href="#cta" className="hover:text-slate-900 transition-colors flex items-center gap-2">
            <Rocket className="h-4 w-4" /> Get Started
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-white">
            Sign in
          </button>
          <button className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
            Create account
          </button>
        </div>
      </div>
    </header>
  );
}
