import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-12">
          <div className="absolute -inset-1 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400 via-indigo-500 to-purple-600 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Ready to upgrade your wallet?
              </h3>
              <p className="mt-3 text-white/80">
                Join the waitlist to get early access and exclusive launch perks.
              </p>
            </div>
            <form onSubmit={submit} className="w-full flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="Enter your email"
                className="flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-white/90"
              >
                Join waitlist <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
