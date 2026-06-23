import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Free Book Visibility Audit | Alex Morgan" },
      { name: "description", content: "Discover why your book isn't reaching more readers. Get a personalized visibility audit covering positioning, keywords, and review health." },
      { property: "og:title", content: "Free Book Visibility Audit — Alex Morgan" },
      { property: "og:url", content: "/audit" },
    ],
    links: [{ rel: "canonical", href: "/audit" }],
  }),
  component: AuditPage,
});

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(200),
  bookTitle: z.string().trim().min(1, "Required").max(200),
  authorName: z.string().trim().min(1, "Required").max(120),
  amazonLink: z.string().trim().url("Please paste a valid URL").max(500),
  genre: z.string().trim().min(1, "Required").max(80),
  challenge: z.string().min(1, "Please choose one"),
});

function AuditPage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrs[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => navigate({ to: "/thank-you" }), 400);
  };

  return (
    <SiteShell>
      <section className="bg-navy-gradient text-primary-foreground">
        <div className="container-narrow grid gap-12 py-20 md:grid-cols-[1fr_1.05fr] md:py-28">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Sparkles className="h-3.5 w-3.5" /> Free Visibility Audit
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              Discover Why Your Book Is Not Reaching <span className="text-gradient-gold">More Readers</span>.
            </h1>
            <p className="mt-5 text-base text-white/75 md:text-lg">
              Get a personalized visibility analysis and uncover the specific growth opportunities
              holding your book back — positioning, keywords, description, and review health.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Amazon discoverability & category fit review",
                "Keyword and metadata opportunity scan",
                "Description conversion notes",
                "Review velocity & social-proof check",
                "Prioritized next-step recommendations",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2 text-white/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {i}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/55">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> 100% confidential</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> Reply within 48 hours</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur" style={{ boxShadow: "var(--shadow-elegant)" }} noValidate>
            <div className="grid gap-5">
              <Field name="fullName" label="Full Name" error={errors.fullName} />
              <Field name="email" label="Email Address" type="email" error={errors.email} />
              <Field name="bookTitle" label="Book Title" error={errors.bookTitle} />
              <Field name="authorName" label="Author Name" error={errors.authorName} />
              <Field name="amazonLink" label="Amazon Book Link" type="url" placeholder="https://amazon.com/dp/..." error={errors.amazonLink} />
              <Field name="genre" label="Genre" placeholder="e.g. Historical Fiction" error={errors.genre} />

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Current Challenge</label>
                <select name="challenge" defaultValue="" className="mt-2 w-full rounded-md border border-white/15 bg-navy-deep/40 px-4 py-3 text-sm text-white outline-none focus:border-gold">
                  <option value="" disabled>Select a challenge</option>
                  <option value="low-sales">Low Sales</option>
                  <option value="low-reviews">Low Reviews</option>
                  <option value="poor-visibility">Poor Visibility</option>
                  <option value="poor-ranking">Poor Ranking</option>
                  <option value="launch-support">Launch Support</option>
                  <option value="other">Other</option>
                </select>
                {errors.challenge && <p className="mt-1.5 text-xs text-destructive">{errors.challenge}</p>}
              </div>

              <button type="submit" disabled={submitting} className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60" style={{ boxShadow: "var(--shadow-gold)" }}>
                {submitting ? "Submitting…" : "Analyze My Book"}
              </button>
              <p className="text-center text-[11px] text-white/50">We never share your details. No spam, ever.</p>
            </div>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ name, label, type = "text", placeholder, error }: { name: string; label: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{label}</label>
      <input name={name} type={type} placeholder={placeholder} className="mt-2 w-full rounded-md border border-white/15 bg-navy-deep/40 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-gold" />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
