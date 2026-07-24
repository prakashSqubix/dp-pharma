import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { BRAND, reviews } from "@/data/site";
import { SectionHeader } from "./WhyChoose";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);
  const r = reviews[i];
  return (
    <section className="py-20 md:py-28 bg-brand-tint/40">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="Testimonials" title="Loved by families across Phulnakhara." />

        <div className="mt-14 relative">
          <div className="glass-card rounded-[2.5rem] p-8 md:p-12 shadow-xl min-h-[280px] overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="size-5 fill-current" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-display font-extrabold text-2xl text-slate-900">
                  {BRAND.rating}
                </span>
                <span className="text-slate-500 ml-2">Google Rating</span>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-display text-2xl md:text-3xl text-slate-800 leading-snug">
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="mt-6 text-sm font-bold text-slate-600">— {r.name}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((_, k) => (
              <button
                key={k}
                aria-label={`Show review ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-2 rounded-full transition-all ${
                  k === i ? "w-8 bg-brand" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}