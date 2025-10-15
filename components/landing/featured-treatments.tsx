interface Treatment {
  title: string;
  description: string;
  image: string;
}

interface FeaturedTreatmentsSectionProps {
  treatments: Treatment[];
}

export default function FeaturedTreatmentsSection({
  treatments,
}: FeaturedTreatmentsSectionProps) {
  return (
    <section id="clinics" className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="section-heading">Featured treatments</h2>
          <p className="section-subtext">
            Explore curated treatment packages trusted by thousands of international patients.
          </p>
        </div>
        <a href="#partner" className="btn-secondary self-start">
          List your clinic
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {treatments.map((treatment) => (
          <article
            key={treatment.title}
            className="group relative overflow-hidden rounded-2xl bg-slate-900 text-white shadow-lg"
            style={{
              backgroundImage: treatment.image,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent transition group-hover:via-slate-950/40" />
            <div className="relative flex h-full flex-col justify-end gap-3 p-6">
              <h3 className="text-xl font-semibold">{treatment.title}</h3>
              <p className="text-sm text-slate-200">{treatment.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
