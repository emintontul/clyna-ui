import Link from "next/link";

const languages = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "ar", label: "AR" },
  { code: "tr", label: "TR" },
];

const navigation = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms" },
];

const socials = [
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 rounded-3xl border border-slate-100 bg-white p-10 text-sm text-slate-600">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-base font-semibold text-slate-900">Clyna</p>
          <p className="text-sm text-slate-500">
            Trusted medical tourism bookings across Europe, the Middle East, and beyond.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-6 border-t border-slate-100 pt-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Languages</span>
          <div className="flex items-center gap-2">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  language.code === "en"
                    ? "border-transparent bg-brand text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
                aria-pressed={language.code === "en"}
              >
                {language.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
            >
              <span className="sr-only">{social.label}</span>
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
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      <p className="text-xs text-slate-400">© {new Date().getFullYear()} Clyna. All rights reserved.</p>
    </footer>
  );
}
