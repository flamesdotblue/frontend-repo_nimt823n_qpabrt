import { ShieldCheck, CreditCard, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Bank‑grade security",
    desc: "Multi‑factor auth, encryption at rest and in transit, with continuous fraud monitoring.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: CreditCard,
    title: "Smart cards",
    desc: "Create virtual cards, set spend limits, and freeze instantly — all in one place.",
    color: "from-indigo-500 to-sky-500",
  },
  {
    icon: Globe,
    title: "Global by default",
    desc: "Send and receive across borders with great FX rates and zero hidden fees.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Delightful experience",
    desc: "A crisp, glass‑morphic interface with buttery‑smooth animations in 3D.",
    color: "from-amber-500 to-orange-500",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Everything you need in a modern wallet
          </h2>
          <p className="mt-3 text-slate-600">
            Built for individuals and teams who move fast.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative rounded-2xl border border-slate-200 bg-white/60 backdrop-blur p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`h-11 w-11 rounded-xl bg-gradient-to-br ${f.color} text-white grid place-items-center shadow-lg`}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
