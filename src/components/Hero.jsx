import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 pt-12 pb-24 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-slate-900 text-white">
              New
              <span className="text-white/80">Glass-morphic 3D wallet</span>
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
              The modern, secure wallet for a borderless economy
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Manage cards, move money, and pay anywhere. Built with
              bank‑grade security and a delightful 3D experience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#cta"
                className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-slate-900 text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800"
              >
                Get started free
              </a>
              <a
                href="#features"
                className="inline-flex justify-center items-center px-5 py-3 rounded-lg border border-slate-300 text-slate-800 hover:bg-white"
              >
                See how it works
              </a>
            </div>
          </motion.div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
