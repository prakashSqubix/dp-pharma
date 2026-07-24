import { motion } from "framer-motion";
import { doctors } from "@/data/site";
import { SectionHeader } from "./WhyChoose";

export function Doctors() {
  return (
    <section id="doctors" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Specialists"
          title="Meet our board of doctors."
          subtitle="Renowned consultants across 14+ departments — all under one roof at D P Pharma."
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctors.map((d, i) => (
            <motion.div
              key={d.name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-brand/40 via-brand-secondary/40 to-brand/40 opacity-0 blur-xl group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-brand/40 shadow-sm hover:shadow-2xl hover:shadow-brand/10 transition-all group-hover:-translate-y-1.5">
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={d.avatar}
                    loading="lazy"
                    width={512}
                    height={512}
                    alt={`${d.name} — ${d.department}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest mb-2">
                    {d.department}
                  </span>
                  <h3 className="font-display font-extrabold text-slate-900 leading-tight text-[15px]">
                    {d.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">Consultant Specialist</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}