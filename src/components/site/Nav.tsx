import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { BRAND } from "@/data/site";

const links = [
  { href: "#pharmacy", label: "Pharmacy" },
  { href: "#clinic", label: "Clinic" },
  { href: "#doctors", label: "Specialists" },
  { href: "#location", label: "Location" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 glass-card border-b border-white/40"
    >
      <div className="mx-auto max-w-7xl px-6 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <div className="size-9 rounded-xl bg-brand text-white grid place-items-center font-display font-extrabold shadow-md shadow-brand/30">
            DP
          </div>
          <span className="font-display font-extrabold tracking-tight text-brand-secondary hidden sm:block">
            PHARMA
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-brand transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={`tel:+91${BRAND.phones[0]}`}
          className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-brand-secondary text-white text-xs md:text-sm font-bold shadow-lg shadow-brand-secondary/25 hover:scale-[1.03] transition-transform"
        >
          <Phone className="size-4" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </div>
    </motion.nav>
  );
}