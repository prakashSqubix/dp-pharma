import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { value: 15, suffix: "+", label: "Years of Service" },
  { value: 10000, suffix: "+", label: "Genuine Medicines", format: (v: number) => `${(v / 1000).toFixed(0)}k` },
  { value: 22, suffix: "+", label: "Expert Specialists" },
  { value: 50000, suffix: "+", label: "Patients Served", format: (v: number) => `${(v / 1000).toFixed(0)}k` },
];

export function Counters() {
  return (
    <section className="py-14 md:py-20 border-y border-slate-100 bg-brand-tint/40">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
  format,
}: {
  value: number;
  suffix: string;
  label: string;
  format?: (v: number) => string;
}) {
  const { value: v, ref } = useCountUp(value);
  const display = format ? format(v) : v.toLocaleString("en-IN");
  return (
    <div className="text-center">
      <div className="font-display font-extrabold text-4xl md:text-5xl bg-gradient-to-b from-brand-secondary to-brand bg-clip-text text-transparent">
        <span ref={ref}>{display}</span>
        {suffix}
      </div>
      <div className="mt-2 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
        {label}
      </div>
    </div>
  );
}