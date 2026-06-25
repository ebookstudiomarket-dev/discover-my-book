import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Compass, Shield, TrendingUp } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import portrait from "@/assets/alex-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Book Growth Strategist" },
      { name: "description", content: "A trusted book growth strategist helping authors transform underperforming books into discoverable, reviewed, and ranked assets." },
      { property: "og:title", content: "About" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Compass, title: "Author-First", desc: "Every recommendation is built around your book, your genre, and your readers — never recycled templates." },
  { icon: Shield, title: "Ethical Growth", desc: "No paid reviews, no black-hat tactics, no shortcuts that put your account at risk." },
  { icon: TrendingUp, title: "Long-Term Equity", desc: "We build the kind of visibility that compounds across launches, not one-off bumps." },
  { icon: Heart, title: "Transparent Process", desc: "Clear deliverables, honest timelines, and direct conversations about what's working." },
];

function AboutPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="About" title={<>The Studio Behind <span className="text-gradient-gold">Better Book Outcomes</span></>} />

      <section className="py-24">
        <div className="container-narrow grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gold/15 blur-2xl" />
            <img src={portrait} alt="Book growth strategist" width={1024} height={1280} loading="lazy" className="relative w-full rounded-2xl object-cover ring-1 ring-border" style={{ boxShadow: "var(--shadow-elegant)" }} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Mission</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">
              Helping serious authors get the readership their work deserves.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>We are a book growth studio for authors who care deeply about their craft — and feel frustrated when the world doesn't seem to notice. Too many great books quietly fade into the algorithm because no one ever taught their authors how discoverability actually works.</p>
              <p>We exist to close that gap. Every engagement is rooted in the mechanics of how Amazon, Goodreads, and modern readers actually find new books — not folklore, not guesswork, and not generic marketing advice.</p>
              <p>Whether you're launching your first novel or rescuing a backlist title, the goal is the same: turn an invisible book into a discoverable, reviewed, and ranked one.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">What We Believe</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">Our Values</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-7" style={{ boxShadow: "var(--shadow-card)" }}>
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-gradient text-gold ring-1 ring-gold/30">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">Ready to see what's holding your book back?</h2>
          <Link to="/audit" className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy-gradient px-7 py-4 text-sm font-semibold text-primary-foreground ring-1 ring-gold/30 hover:-translate-y-0.5 transition-transform" style={{ boxShadow: "var(--shadow-elegant)" }}>
            Request Your Free Audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
