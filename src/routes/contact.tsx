import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Clock, Twitter, Linkedin, Instagram, ChevronDown } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Alex Morgan | Book Growth Studio" },
      { name: "description", content: "Get in touch with Alex Morgan to discuss your book's growth strategy. Response within 24 hours." },
      { property: "og:title", content: "Contact — Alex Morgan" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(200),
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(10, "Please share a bit more detail").max(2000),
});

const faqs = [
  { q: "How does book visibility work?", a: "Visibility is the combination of category placement, keyword indexing, conversion rate, and review signals. We diagnose each lever, then prioritize the ones with the biggest gap between current and potential performance." },
  { q: "How long does improvement take?", a: "Most authors see measurable changes in keyword indexing within 2–4 weeks and meaningful ranking shifts within 60–90 days. Review velocity typically compounds over several months." },
  { q: "Do you work with fiction and nonfiction?", a: "Yes. The studio works across fiction (literary, romance, thriller, historical) and nonfiction (memoir, business, self-help). Strategy is always tuned to your genre." },
  { q: "What is included in the audit?", a: "A discoverability and category review, a keyword opportunity scan, a description conversion read, a review health check, and a prioritized list of next steps." },
  { q: "How do I get started?", a: "Request the free Book Visibility Audit. We'll review your book and reply within 48 hours with our findings and a suggested next step." },
];

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      for (const i of res.error.issues) errs[i.path[0] as string] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`[Website Contact] ${data.subject}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
    );
    window.location.href = `mailto:alexauthorgrowthhub@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <SiteShell>
      <PageHero
        eyebrow="Get in Touch"
        title={<>Let's Talk About <span className="text-gradient-gold">Your Book</span></>}
        subtitle="Whether you're launching, relaunching, or rescuing a stalled title — we'd love to hear about it."
      />

      <section className="py-24">
        <div className="container-narrow grid gap-12 md:grid-cols-[1.1fr_1fr]">
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }} noValidate>
            {sent && (
              <div className="mb-6 rounded-md border border-gold/40 bg-gold-soft/40 px-4 py-3 text-sm text-navy">
                Message sent. We'll reply within 24 hours.
              </div>
            )}
            <div className="grid gap-5">
              <Field name="name" label="Name" error={errors.name} />
              <Field name="email" label="Email" type="email" error={errors.email} />
              <Field name="subject" label="Subject" error={errors.subject} />
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Message</label>
                <textarea name="message" rows={6} className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
                {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-navy-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground ring-1 ring-gold/30 hover:-translate-y-0.5 transition-transform" style={{ boxShadow: "var(--shadow-elegant)" }}>
                Send Message
              </button>
            </div>
          </form>

          <aside className="space-y-6">
            <InfoCard icon={Mail} label="Business Email" value="alexauthorgrowthhub@gmail.com" href="mailto:alexauthorgrowthhub@gmail.com" />
            <InfoCard icon={Clock} label="Response Time" value="Within 24 hours, Mon–Fri" />
            <div className="rounded-2xl border border-border bg-card p-7" style={{ boxShadow: "var(--shadow-card)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Follow</p>
              <div className="mt-4 flex gap-3">
                {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground hover:border-gold hover:text-gold">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">Common Questions</h2>
          </div>
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-foreground">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-gold transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input name={name} type={type} className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const Wrap: React.ElementType = href ? "a" : "div";
  const wrapProps = href ? { href } : {};
  return (
    <Wrap {...wrapProps} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gold/50" style={{ boxShadow: "var(--shadow-card)" }}>
      <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-gradient text-gold ring-1 ring-gold/30">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
        <p className="mt-1 text-base font-medium text-foreground break-all">{value}</p>
      </div>
    </Wrap>
  );
}
