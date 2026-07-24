import { motion } from "framer-motion";
import {
  Pill,
  ShoppingBag,
  Leaf,
  Baby,
  Sparkles,
  Droplet,
  Scissors,
  Activity,
  HeartPulse,
} from "lucide-react";
import { SectionHeader } from "./WhyChoose";

const services = [
  { icon: Pill, label: "Prescription Medicines" },
  { icon: ShoppingBag, label: "OTC Medicines" },
  { icon: Leaf, label: "Health Supplements" },
  { icon: Baby, label: "Baby Care" },
  { icon: Sparkles, label: "Personal Care" },
  { icon: Droplet, label: "Diabetic Care" },
  { icon: Scissors, label: "Surgical Items" },
  { icon: Activity, label: "Medical Equipment" },
  { icon: HeartPulse, label: "Health Essentials" },
];

export function PharmacyServices() {
  return (
    <section id="pharmacy" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Pharmacy"
          title="Every medicine you need, always in stock."
          subtitle="A full-service retail pharmacy stocking prescription drugs, wellness essentials and specialist supplies."
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-brand-tint/60 p-8 border border-slate-100 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all"
            >
              <div className="absolute -top-16 -right-16 size-40 rounded-full bg-brand/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative size-14 rounded-2xl bg-white grid place-items-center text-brand shadow-md shadow-brand/10 mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="size-6" />
              </div>
              <h3 className="relative font-display font-bold text-lg text-slate-900">
                {s.label}
              </h3>
              <p className="relative mt-1 text-sm text-slate-500">
                Available at the counter
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}