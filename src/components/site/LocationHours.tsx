import { motion } from "framer-motion";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";
import { BRAND, openingHours } from "@/data/site";
import { SectionHeader } from "./WhyChoose";

export function LocationHours() {
  const today = new Date().getDay();
  return (
    <section id="location" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Visit us"
          title="Located near SUM Hospital Campus-II."
        />
        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white"
          >
            <iframe
              title="D P Pharma location map"
              src={BRAND.mapsEmbed}
              className="w-full h-[420px] lg:h-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info + Hours */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative overflow-hidden rounded-3xl bg-brand-secondary text-white p-8"
            >
              <div className="absolute inset-0 opacity-20 shimmer-anim" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-xl bg-white/15 grid place-items-center">
                    <MapPin className="size-5" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                    Address
                  </p>
                </div>
                <p className="font-display font-bold text-xl leading-snug">
                  {BRAND.name}
                </p>
                <p className="mt-2 text-white/85 text-sm leading-relaxed">
                  {BRAND.address.line1}
                  <br />
                  {BRAND.address.line2}
                  <br />
                  {BRAND.address.line3}
                  <br />
                  {BRAND.address.city}, {BRAND.address.state}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href={BRAND.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-brand-secondary text-sm font-bold hover:scale-[1.03] transition-transform"
                  >
                    <Navigation className="size-4" /> Google Maps
                  </a>
                  <a
                    href={`tel:+91${BRAND.phones[0]}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand text-white text-sm font-bold hover:scale-[1.03] transition-transform"
                  >
                    <Phone className="size-4" /> Call Now
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl bg-white border border-slate-100 shadow-sm p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-brand/10 grid place-items-center text-brand">
                  <Clock className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Opening Hours
                  </p>
                  <p className="text-[11px] text-brand font-semibold flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-brand animate-pulse" />
                    Open today
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {openingHours.map((row) => {
                  const active = row.index === today;
                  return (
                    <li
                      key={row.day}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${active
                          ? "bg-brand/10 text-brand-secondary font-bold"
                          : "text-slate-600"
                        }`}
                    >
                      <span>{row.day}</span>
                      <span className="font-mono text-xs md:text-sm">{row.hours}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}