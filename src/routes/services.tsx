import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Book Marketing & Author Growth | Alex Morgan" },
      { name: "description", content: "Visibility optimization, Amazon keyword research, description enhancement, review growth, and long-term author brand strategy." },
      { property: "og:title", content: "Services — Alex Morgan" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { title: "Book Visibility Optimization", problem: "Your book is buried beneath thousands of competing titles and the right readers never find it.", solution: "We reposition your book in the categories, keywords, and metadata where genuine ranking opportunities exist.", benefits: ["Higher organic impressions", "Better category placement", "Long-tail discoverability"], deliverables: ["Discoverability audit", "Category & metadata plan", "Implementation roadmap"] },
  { title: "Amazon Keyword Research", problem: "You're optimizing for keywords readers don't actually search — or that are too competitive to rank for.", solution: "Data-driven keyword research grounded in real reader search behavior and competitive openings.", benefits: ["Higher search visibility", "Lower competition placement", "Targeted reader matches"], deliverables: ["Primary & secondary keyword set", "Backend keyword strategy", "Search ranking benchmarks"] },
  { title: "Book Description Enhancement", problem: "Browsers reach your page but don't buy — your description isn't doing its job.", solution: "Sales copy rewritten with conversion psychology: hook, stakes, proof, and clear emotional payoff.", benefits: ["Higher conversion rate", "Stronger hook within 3 seconds", "Genre-fluent voice"], deliverables: ["Rewritten Amazon description", "A/B variant", "Editorial review pass"] },
  { title: "Review Growth Strategy", problem: "Your review count stalled and new readers hesitate without social proof.", solution: "A repeatable, ToS-safe review funnel that turns readers into reviewers — without paid review schemes.", benefits: ["Sustained review velocity", "Stronger conversion rate", "Compounding social proof"], deliverables: ["Reader-to-reviewer funnel", "Email & insert templates", "ARC program setup"] },
  { title: "Author Growth Strategy", problem: "You launched. Sales dropped. There's no system for the next book or the next reader.", solution: "A long-term author equity plan — backlist, list-building, and brand positioning beyond one launch.", benefits: ["Cross-book sales lift", "Owned reader audience", "Compounding launch power"], deliverables: ["12-month author plan", "List growth blueprint", "Launch playbook"] },
];

function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="What We Do"
        title={<>Strategy Built Around <span className="text-gradient-gold">Your Book</span></>}
        subtitle="Each engagement is tailored to your genre, your readers, and the specific bottleneck holding your book back."
      />
      <section className="py-24">
        <div className="container-narrow flex flex-col gap-10">
          {services.map((s, i) => (
            <article key={s.title} className="grid gap-8 rounded-2xl border border-border bg-card p-8 md:grid-cols-[auto_1fr] md:p-12" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="font-display text-6xl font-semibold text-gold-soft md:text-7xl">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold md:text-3xl">{s.title}</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <Block label="Problem" body={s.problem} />
                  <Block label="Solution" body={s.solution} />
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <List label="Benefits" items={s.benefits} />
                  <List label="Deliverables" items={s.deliverables} />
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/audit" className="inline-flex items-center gap-2 rounded-md bg-navy-gradient px-5 py-3 text-sm font-semibold text-primary-foreground ring-1 ring-gold/30 hover:-translate-y-0.5 transition-transform">
                    Start with a free audit <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
                    Talk to Alex
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function List({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{label}</p>
      <ul className="mt-3 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
