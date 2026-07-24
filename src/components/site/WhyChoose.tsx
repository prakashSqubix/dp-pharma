import { motion } from "framer-motion";
import {
  BadgeCheck,
  Stethoscope,
  IndianRupee,
  MapPin,
  Users,
  Zap,
  FileHeart,
  MessageCircleHeart,
} from "lucide-react";

const reasons = [
  { icon: BadgeCheck, title: "Genuine Medicines", text: "Sourced only from licensed distributors." },
  { icon: Stethoscope, title: "Experienced Doctors", text: "Consultants across 14+ specialties." },
  { icon: IndianRupee, title: "Affordable Care", text: "Honest pricing, no hidden charges." },
  { icon: MapPin, title: "Convenient Location", text: "Near SUM Campus-II, Phulnakhara." },
  { icon: Users, title: "Friendly Staff", text: "Warm, patient, and attentive team." },
  { icon: Zap, title: "Fast Service", text: "Quick counters and short waiting times." },
  { icon: FileHeart, title: "Prescription Support", text: "Guidance on dosage and refills." },
  { icon: MessageCircleHeart, title: "Health Consultation", text: "Talk to our in-house pharmacist." },
];

export function WhyChoose() {
  return (
    <section className="py-20 md:py-28 bg-brand-tint/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why choose us"
          title="Care you can feel the moment you walk in."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-white p-6 rounded-3xl border border-slate-100 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all"
            >
              <div className="size-12 rounded-2xl bg-brand/10 grid place-items-center text-brand mb-5 group-hover:scale-110 transition-transform">
                <r.icon className="size-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand">{eyebrow}</span>
      <h2 className="mt-3 font-display font-extrabold text-4xl md:text-5xl tracking-tight text-slate-900 leading-[1.05]">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-slate-500 text-lg leading-relaxed">{subtitle}</p>}
      <div
        className={`mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-brand to-brand-secondary ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}