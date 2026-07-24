import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-shelves.jpg";

const points = [
  "Certified genuine medicines",
  "Board-certified specialist doctors",
  "Patient-first approach across every visit",
  "Convenient location near SUM Campus-II",
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={aboutImg}
            loading="lazy"
            width={1200}
            height={900}
            alt="Neatly organized pharmacy shelves at D P Pharma"
            className="w-full rounded-[2rem] shadow-xl shadow-slate-900/5 ring-1 ring-black/5"
          />
          <div className="absolute -bottom-6 -right-6 glass-card p-5 rounded-2xl shadow-xl max-w-[220px]">
            <p className="text-xs font-bold uppercase tracking-widest text-brand mb-1">
              Since day one
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Making healthcare accessible, affordable and trustworthy for every family.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
            About D P Pharma
          </span>
          <h2 className="mt-3 font-display font-extrabold text-4xl md:text-5xl tracking-tight text-slate-900 leading-[1.05]">
            Comprehensive care under one roof.
          </h2>
          <p className="mt-6 text-slate-500 text-lg leading-relaxed max-w-xl">
            We provide quality medicines, healthcare essentials and specialist consultations
            in one convenient location. Our mission is to make healthcare simple, honest and
            close to home for the families of Phulnakhara and Bhubaneswar.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                <span className="font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}