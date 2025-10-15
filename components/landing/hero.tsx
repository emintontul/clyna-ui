import Link from "next/link";

type HeroStat = {
  label: string;
  value: string;
};

interface HeroSectionProps {
  stats: HeroStat[];
}

export default function HeroSection({ stats }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 pb-16 pt-14 text-white shadow-card"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(13,123,234,0.2),_rgba(13,123,234,0))] blur-3xl" />
      <div className="pointer-events-none absolute right-6 top-6 hidden h-32 w-32 rounded-full border border-white/20 md:block" />
      <div className="pointer-events-none absolute bottom-6 left-12 hidden h-16 w-16 rounded-full border border-white/10 md:block" />

      <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M9 19c-4.5-1.5-7-3.8-7-6.5C2 6.8 8.3 3 12 3s10 3.8 10 9.5c0 2.7-2.5 5-7 6.5l-3 2-3-2Z" />
              <path d="M9 10h.01" />
              <path d="M15 10h.01" />
              <path d="M12 14c1.7 0 3-.6 3-1.5" />
            </svg>
            Premium Care Abroad
          </span>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Trusted Medical Tourism, Made Simple
          </h1>

          <p className="max-w-xl text-lg text-slate-200">
            Compare verified clinics, book treatments, and travel with confidence. Clyna brings hospital-grade transparency to medical travel.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="#clinics" className="btn-primary">
              Find Clinics
            </Link>
            <Link href="#partner" className="btn-secondary">
              For Clinics
            </Link>
          </div>

          <dl className="flex flex-wrap gap-8 pt-4 text-sm text-slate-300">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-semibold text-white">{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden overflow-hidden rounded-2xl bg-white/5 p-8 backdrop-blur md:flex md:h-full md:flex-col md:justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 shadow-inner">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/20 text-brand">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
                  <path d="m9 10 2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/70">Next available</p>
                <p className="text-lg font-semibold">Hair Transplant Packages</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 shadow-inner">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/70">Concierge support</p>
                <p className="text-lg font-semibold">Visa & travel arrangements</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-white/70">Why Clyna?</p>
            <p className="mt-3 text-base font-medium text-white">
              Accredited clinics, transparent packages, multilingual care coordinators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
