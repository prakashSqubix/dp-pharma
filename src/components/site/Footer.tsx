import { BRAND } from "@/data/site";
import { Star } from "lucide-react";

const quickLinks = [
  { href: "#pharmacy", label: "Pharmacy" },
  { href: "#clinic", label: "Clinic Services" },
  { href: "#doctors", label: "Specialists" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="pt-16 pb-10 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-9 rounded-xl bg-brand text-white grid place-items-center font-display font-extrabold shadow-md shadow-brand/30">
                DP
              </div>
              <span className="font-display font-extrabold tracking-tight text-brand-secondary">
                {BRAND.name}
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              {BRAND.tagline}. Integrated pharmacy and multispeciality clinic serving
              Phulnakhara and Bhubaneswar.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold">
              <Star className="size-3.5 fill-current" /> {BRAND.rating} Google Rating
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-slate-700 hover:text-brand transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              {BRAND.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:+91${p}`} className="hover:text-brand transition-colors">
                    +91 {p}
                  </a>
                </li>
              ))}
              <li className="text-slate-500 pt-2 leading-relaxed">
                {BRAND.address.line1}, {BRAND.address.line3}, {BRAND.address.city},{" "}
                {BRAND.address.state}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Designed with ❤️ in Bhubaneswar.</p>
        </div>
      </div>
    </footer>
  );
}