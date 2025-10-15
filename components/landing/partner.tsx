import Link from "next/link";

export default function PartnerSection() {
  return (
    <section
      id="partner"
      className="overflow-hidden rounded-3xl border border-slate-100 bg-white p-10 shadow-card"
    >
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6">
          <h2 className="section-heading">
            Grow your international patient base with Clyna
          </h2>
          <p className="section-subtext">
            Join as a verified partner clinic to unlock premium placement, marketing support, and guaranteed leads from our global audience.
          </p>
          <Link href="/partner" className="btn-primary w-fit">
            Partner with us
          </Link>
        </div>
        <div className="relative h-full rounded-2xl bg-brand/5 p-6 text-sm text-slate-600">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="m9 11 3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Verified onboarding</p>
                <p className="text-sm leading-relaxed text-slate-600">
                  Accreditation review, documentation checks, and multilingual patient success playbooks.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
                  <path d="m2 12 5 5 5-5 5 5 5-5" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Global marketing</p>
                <p className="text-sm leading-relaxed text-slate-600">
                  Showcase packages to high-intent patients from Europe, the Middle East, and beyond.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Guaranteed leads</p>
                <p className="text-sm leading-relaxed text-slate-600">
                  Dedicated success managers ensure patients convert with concierge follow-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
