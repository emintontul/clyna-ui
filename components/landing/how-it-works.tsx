import { ReactNode } from "react";

interface Step {
  title: string;
  description: string;
  icon: ReactNode;
}

interface HowItWorksSectionProps {
  steps: Step[];
}

export default function HowItWorksSection({ steps }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="space-y-8">
      <div>
        <h2 className="section-heading">How it works</h2>
        <p className="section-subtext">
          Plan every step of your medical journey with confidence, from researching accredited clinics to post-treatment travel support.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.title}
            className="group flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
              {step.icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
