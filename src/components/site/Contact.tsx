import { motion } from "framer-motion";
import { Phone, MessageCircle, Navigation } from "lucide-react";
import { BRAND } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-tint/40">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-secondary via-brand-secondary to-brand text-white p-10 md:p-16 shadow-2xl shadow-brand-secondary/25"
        >
          <div className="absolute -top-24 -right-24 size-80 rounded-full bg-white/10 blur-3xl blob-anim" />
          <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-brand/30 blur-3xl blob-anim [animation-delay:-8s]" />
          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
              Get in touch
            </span>
            <h2 className="mt-3 font-display font-extrabold text-4xl md:text-5xl leading-[1.05]">
              We're here whenever you need us.
            </h2>
            <p className="mt-4 text-white/80 max-w-xl">
              Call, WhatsApp or visit us directly at D P Pharma inside SUM Hospital Campus-II,
              Phulnakhara.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {BRAND.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:+91${p}`}
                  className="glass-card !bg-white/15 !border-white/25 rounded-2xl p-4 flex items-center gap-3 hover:!bg-white/25 transition-colors"
                >
                  <div className="size-10 rounded-xl bg-white/20 grid place-items-center shrink-0">
                    <Phone className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-white/70">Call</p>
                    <p className="font-display font-bold text-lg tracking-tight">+91 {p}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-brand-secondary font-bold hover:scale-[1.03] transition-transform"
              >
                <MessageCircle className="size-4" /> WhatsApp Us
              </a>
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand text-white font-bold hover:scale-[1.03] transition-transform"
              >
                <Navigation className="size-4" /> Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}