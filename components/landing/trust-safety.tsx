import TestimonialSlider from "./testimonial-slider";

type Badge = {
  title: string;
  description: string;
};

type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

interface TrustSafetySectionProps {
  badges: Badge[];
  testimonials: Testimonial[];
}

export default function TrustSafetySection({
  badges,
  testimonials,
}: TrustSafetySectionProps) {
  return (
    <section id="trust" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div className="space-y-8">
        <div>
          <h2 className="section-heading">Trust &amp; safety</h2>
          <p className="section-subtext">
            Every clinic on Clyna is thoroughly verified, price-transparent, and supported by our global care team.
          </p>
        </div>

        <dl className="grid gap-6 sm:grid-cols-3">
          {badges.map((badge) => (
            <div key={badge.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">{badge.title}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-slate-600">{badge.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="space-y-6 rounded-3xl border border-slate-100 bg-slate-50/60 p-8 shadow-inner">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Patient stories</p>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
}
