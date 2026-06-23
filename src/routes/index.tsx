import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Search,
  Tag,
  Star,
  FileText,
  Users,
  Rocket,
  Target,
  TrendingUp,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import heroBook from "@/assets/hero-book.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Morgan — Turn Invisible Books Into Discoverable Titles" },
      {
        name: "description",
        content:
          "Premium book marketing and author growth consultancy. Improve Amazon visibility, keyword ranking, reviews, and reader discoverability.",
      },
      { property: "og:title", content: "Alex Morgan — Book Growth Studio" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const pains = [
  { icon: Search, title: "Poor Amazon Discoverability", desc: "Your book is buried beneath thousands of competing titles in its category." },
  { icon: Tag, title: "Weak Keyword Positioning", desc: "Readers searching for books like yours can't find you in Amazon search." },
  { icon: Star, title: "Low Review Count", desc: "Without social proof, browsers hesitate and click away to other titles." },
  { icon: FileText, title: "Ineffective Book Description", desc: "Your sales copy isn't converting page visits into purchases." },
  { icon: Users, title: "Lack of Reader Engagement", desc: "No system to turn readers into reviewers, advocates, and repeat buyers." },
  { icon: Rocket, title: "Lost Launch Momentum", desc: "Your launch peaked, then sales quietly slipped into the algorithm void." },
];

const solutions = [
  { icon: Target, title: "Visibility Optimization", desc: "Reposition your book so it appears where the right readers actually look." },
  { icon: TrendingUp, title: "Amazon Positioning", desc: "Category, keyword, and metadata strategy aligned to genuine ranking opportunities." },
  { icon: MessageSquare, title: "Review Growth Systems", desc: "Repeatable funnels that turn happy readers into honest, sustained reviews." },
  { icon: FileText, title: "Description Conversion", desc: "Sales copy engineered to convert browsers into buyers in seconds." },
  { icon: Sparkles, title: "Reader Discovery Strategy", desc: "Build long-term author equity, not one-off launch spikes." },
];

const services = [
  { title: "Book Visibility Optimization", desc: "Improve discoverability through positioning and category optimization." },
  { title: "Amazon Keyword Research", desc: "Identify reader search behavior and ranking opportunities." },
  { title: "Book Description Enhancement", desc: "Convert browsers into buyers with compelling sales copy." },
  { title: "Review Growth Strategy", desc: "Build stronger social proof and reader trust." },
  { title: "Author Brand Growth", desc: "Create long-term visibility beyond a single book launch." },
];

const steps = [
  { n: "01", title: "Submit Your Book", desc: "Share your title, link, and current challenges in a short form." },
  { n: "02", title: "Receive Visibility Analysis", desc: "We audit discoverability, positioning, copy, and review health." },
  { n: "03", title: "Implement Growth Strategy", desc: "Roll out a prioritized plan tailored to your book and genre." },
  { n: "04", title: "Track Improvement", desc: "Measure ranking, review velocity, and discoverability over time." },
];

const caseStudies = [
  { genre: "Literary Fiction", metric: "+312%", label: "Keyword impressions in 60 days" },
  { genre: "Self-Help Nonfiction", metric: "4.2×", label: "Monthly review velocity" },
  { genre: "Memoir", metric: "Top 5", label: "Category rank held for 90 days" },
];

const testimonials = [
  { name: "Sarah Whitfield", genre: "Historical Fiction", quote: "My debut had been quietly dying. Within two months of working with Alex, my book was ranking in three categories and reviews started coming in weekly." },
  { name: "Daniel Hart", genre: "Business & Leadership", quote: "I'd spent thousands on ads with nothing to show. Alex rebuilt my positioning and copy — sales tripled without a single dollar of new spend." },
  { name: "Maya Rosen", genre: "Romance", quote: "The audit alone was worth it. Clear, specific, and grounded in how Amazon actually works. No vague advice, just a real plan." },
];

function HomePage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-navy-gradient text-primary-foreground">
        <div className="container-narrow grid items-center gap-12 py-20 md:grid-cols-[1.05fr_1fr] md:py-28">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Sparkles className="h-3.5 w-3.5" /> Book Growth Studio
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
              Turn Your Invisible Book Into a{" "}
              <span className="text-gradient-gold">Discoverable, Reviewed, and Ranked</span> Title.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Publishing your book is only the beginning. Alex Morgan helps authors improve
              discoverability, visibility, reader engagement, and review momentum through proven
              book growth systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/audit" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5" style={{ boxShadow: "var(--shadow-gold)" }}>
                Get Free Book Visibility Audit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
                View Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">
              {["Fiction & Nonfiction", "Amazon KDP focus", "Trusted by 200+ authors"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold" /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl opacity-60 blur-3xl" style={{ background: "radial-gradient(circle at 60% 40%, var(--gold) 0%, transparent 60%)" }} />
            <img src={heroBook} alt="Open hardcover book on a navy desk with warm gold light" width={1536} height={1024} className="relative w-full rounded-2xl ring-1 ring-white/10" style={{ boxShadow: "var(--shadow-elegant)" }} />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">The Problem</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">Why Great Books Often Remain Invisible</h2>
            <div className="mx-auto mt-5 gold-divider" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pains.map((p) => (
              <div key={p.title} className="group rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1" style={{ boxShadow: "var(--shadow-card)" }}>
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-gradient text-gold ring-1 ring-gold/30">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">The Approach</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">How Alex Morgan Helps Authors Grow</h2>
            <div className="mx-auto mt-5 gold-divider" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {solutions.map((s, i) => (
              <div key={s.title} className={`rounded-xl border border-border bg-card p-6 ${i === 0 ? "lg:col-span-2" : ""}`} style={{ boxShadow: "var(--shadow-card)" }}>
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-navy">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Services</p>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">
                Built for Authors Who Want Their Book to <em className="text-gradient-gold not-italic">Actually Reach Readers</em>.
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-gold">
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.title} className="group relative overflow-hidden rounded-xl border border-border bg-card p-7" style={{ boxShadow: "var(--shadow-card)" }}>
                <span className="font-display text-5xl font-semibold text-gold-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-gold">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-gradient py-24 text-primary-foreground">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Process</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">Simple. Strategic. Results-Focused.</h2>
            <div className="mx-auto mt-5 gold-divider" />
          </div>
          <div className="relative mt-16 grid gap-8 md:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />
            {steps.map((s) => (
              <div key={s.n} className="relative text-center">
                <div className="mx-auto grid h-18 w-18 place-items-center rounded-full border border-gold/40 bg-navy-deep p-4 font-display text-lg font-semibold text-gold">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Outcomes</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">Author Growth Success Stories</h2>
            <p className="mt-4 text-sm text-muted-foreground">Sample data shown until real client results are published.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {caseStudies.map((c) => (
              <div key={c.genre} className="rounded-xl border border-border bg-card p-8 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{c.genre}</p>
                <p className="mt-4 font-display text-5xl font-semibold text-gradient-gold">{c.metric}</p>
                <p className="mt-3 text-sm text-muted-foreground">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Authors</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">What Authors Are Saying</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-xl border border-border bg-card p-7" style={{ boxShadow: "var(--shadow-card)" }}>
                <Quote className="h-7 w-7 text-gold" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-base font-semibold">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{t.genre}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow">
          <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-10 text-center text-primary-foreground md:p-16" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }} />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Free • No Obligation</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-5xl">Get Your Free Book Visibility Audit</h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/75">Receive a professional review of your book's discoverability, positioning, visibility opportunities, and growth potential.</p>
            <Link to="/audit" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-7 py-4 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5" style={{ boxShadow: "var(--shadow-gold)" }}>
              Request My Free Audit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
