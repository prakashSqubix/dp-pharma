import { motion } from "framer-motion";
import {
  Stethoscope,
  Baby,
  Brain,
  HeartPulse,
  Ear,
  Bone,
  UserRound,
  Droplets,
  FlaskConical,
  Radiation,
  Wind,
  Sparkles,
  Ribbon,
  Activity,
} from "lucide-react";
import { SectionHeader } from "./WhyChoose";

const specialties = [
  { icon: Stethoscope, name: "General Consultation" },
  { icon: Ribbon, name: "Women's Health" },
  { icon: Baby, name: "Child Care" },
  { icon: Brain, name: "Neurology" },
  { icon: Sparkles, name: "Skin Care" },
  { icon: HeartPulse, name: "Cardiology" },
  { icon: Ear, name: "ENT" },
  { icon: Bone, name: "Orthopaedics" },
  { icon: UserRound, name: "Geriatrics" },
  { icon: Droplets, name: "Urology" },
  { icon: Activity, name: "Psychiatry" },
  { icon: FlaskConical, name: "Nephrology" },
  { icon: Wind, name: "Endocrinology" },
  { icon: Radiation, name: "Radiology" },
];

export function ClinicServices() {
  return (
    <section id="clinic" className="py-20 md:py-28 bg-brand-tint/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Clinic"
          title="14 specialties. One trusted address."
          subtitle="Consult experienced consultants at D P Pharma's integrated multispeciality clinic."
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {specialties.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group relative rounded-3xl p-[1.5px] bg-gradient-to-br from-slate-200 via-slate-200 to-slate-200 hover:from-brand hover:via-brand-secondary hover:to-brand transition-colors"
            >
              <div className="h-full bg-white rounded-[calc(1.5rem-1.5px)] p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform">
                <div className="size-11 rounded-xl bg-brand/10 grid place-items-center text-brand">
                  <s.icon className="size-5" />
                </div>
                <h3 className="font-display font-bold text-base text-slate-900">{s.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Consultation available by walk-in or appointment.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}