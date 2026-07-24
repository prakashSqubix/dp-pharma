import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Phone, Stethoscope, Pill } from "lucide-react";
import { BRAND } from "@/data/site";
import heroImg from "@/assets/hero-pharmacy.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-8%] size-[520px] rounded-full bg-brand/20 blur-3xl blob-anim" />
        <div className="absolute bottom-[-20%] left-[-10%] size-[420px] rounded-full bg-brand-secondary/15 blur-3xl blob-anim [animation-delay:-6s]" />
      </div>

      {/* floating capsules */}
      <FloatingPill className="absolute top-40 left-[6%] rotate-[-18deg] text-brand [animation-delay:-2s]" />
      <FloatingPill className="absolute top-[55%] left-[3%] rotate-12 text-brand-secondary [animation-delay:-4s]" />
      <FloatingPill className="absolute top-24 right-[42%] rotate-[24deg] text-brand hidden md:block" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 text-brand text-[11px] font-bold uppercase tracking-widest mb-6"
            >
              <span className="size-1.5 rounded-full bg-brand animate-pulse" />
              SUM Hospital Campus-II, Bhubaneswar
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-slate-900"
            >
              Integrated{" "}
              <span className="bg-gradient-to-r from-brand to-brand-secondary bg-clip-text text-transparent">
                Pharmacy
              </span>{" "}
              & Multispeciality Clinic
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed"
            >
              Serving the community with quality medicines and expert medical consultations
              under one roof. {BRAND.tagline}.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#pharmacy"
                className="inline-flex items-center gap-2 px-6 md:px-7 py-3.5 rounded-2xl bg-brand text-white font-bold shadow-xl shadow-brand/30 hover:scale-[1.03] transition-transform"
              >
                <Pill className="size-4" /> Visit Pharmacy
              </a>
              <a
                href="#doctors"
                className="inline-flex items-center gap-2 px-6 md:px-7 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold shadow-sm hover:bg-slate-50 transition-colors"
              >
                <Stethoscope className="size-4" /> View Specialists
              </a>
              <a
                href={`tel:+91${BRAND.phones[0]}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl glass-card font-bold text-slate-700 hover:bg-white transition-colors"
              >
                <Phone className="size-4" /> Call Now
              </a>
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl glass-card font-bold text-slate-700 hover:bg-white transition-colors"
              >
                <MapPin className="size-4" /> Directions
              </a>
            </motion.div>

            {/* heartbeat line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 max-w-md"
            >
              <svg viewBox="0 0 400 60" className="w-full h-10">
                <path
                  d="M0 30 L80 30 L100 30 L110 10 L125 50 L140 20 L155 40 L170 30 L400 30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brand heartbeat-anim"
                />
              </svg>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-secondary/20 ring-1 ring-black/5">
              <img
                src={heroImg}
                alt="Modern D P Pharma interior at SUM Hospital Campus-II"
                width={1200}
                height={1400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/30 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-4 md:-left-8 glass-card p-4 md:p-5 rounded-2xl shadow-xl flex items-center gap-4 max-w-[280px]"
            >
              <div className="size-11 rounded-full bg-brand/15 grid place-items-center text-brand shrink-0">
                <ShieldCheck className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="font-display font-extrabold text-slate-900">100% Genuine</p>
                <p className="text-xs text-slate-500 truncate">Certified medical supply</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -right-2 md:-right-6 glass-card px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="text-brand-secondary font-display font-extrabold text-2xl leading-none">
                {BRAND.rating}
              </div>
              <div className="text-[11px] font-semibold text-slate-500 leading-tight">
                Google
                <br />★★★★★
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingPill({ className = "" }: { className?: string }) {
  return (
    <div className={`float-anim opacity-70 ${className}`} aria-hidden>
      <svg width="64" height="24" viewBox="0 0 64 24" fill="none">
        <rect x="1" y="1" width="62" height="22" rx="11" fill="currentColor" opacity="0.15" />
        <rect x="1" y="1" width="31" height="22" rx="11" fill="currentColor" opacity="0.35" />
        <rect x="1" y="1" width="62" height="22" rx="11" stroke="currentColor" strokeOpacity="0.4" />
      </svg>
    </div>
  );
}