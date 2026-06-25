import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, TrendingUp, MessageSquare, Search } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";

import wexley from "@/assets/books/The_Wexley_Inn.jpg.asset.json";
import runaway from "@/assets/books/The_Runaway.jpg.asset.json";
import sandpiper from "@/assets/books/Sandpiper_Shore.jpg.asset.json";
import sunshine from "@/assets/books/Summer_on_Sunshine_Bay.jpg.asset.json";
import lostBook from "@/assets/books/The_Lost_Book_of_First_Loves.jpg.asset.json";
import beachy from "@/assets/books/Just_Beachy.jpg.asset.json";
import moyes from "@/assets/books/Me_Before_You_After_You_and_Still_Me.jpg.asset.json";
import italy from "@/assets/books/Meet_Me_in_Italy.jpg.asset.json";
import famous from "@/assets/books/Famous_in_a_Small_Town.jpg.asset.json";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Author & Book Campaigns" },
      { name: "description", content: "Selected book growth campaigns Book Growth Studio has supported across women's fiction, contemporary romance, and bestselling author brands." },
      { property: "og:title", content: "Portfolio — Book Growth Studio" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

type Book = {
  cover: string;
  title: string;
  author: string;
  genre: string;
  scope: string;
  result: string;
  resultLabel: string;
  blurb: string;
};

const books: Book[] = [
  {
    cover: wexley.url,
    title: "The Wexley Inn",
    author: "Rachel Hanna",
    genre: "Southern Women's Fiction",
    scope: "Series Positioning · Keyword Research · Description Refresh",
    result: "Top 50",
    resultLabel: "Amazon Women's Fiction (US)",
    blurb: "Repositioned a Lowcountry Ladies Club novel with refined category targeting and a tighter back-cover hook, lifting series read-through across the box set.",
  },
  {
    cover: runaway.url,
    title: "The Runaway (Shipwreck Key Book 2)",
    author: "Stephanie Taylor",
    genre: "Beach Read · Contemporary",
    scope: "Launch Strategy · Review Funnel · A+ Copy",
    result: "+218%",
    resultLabel: "Launch-week page reads vs Book 1",
    blurb: "Sequenced a clean Book 2 launch with ARC team segmentation, newsletter swap stack, and conversion-tuned description.",
  },
  {
    cover: sandpiper.url,
    title: "Sandpiper Shore",
    author: "Debbie Mason",
    genre: "Contemporary Romance",
    scope: "Backlist Revival · Keyword Audit",
    result: "4.1×",
    resultLabel: "Monthly organic reviews",
    blurb: "Rebuilt a 7-search-term metadata stack and triggered a review-velocity flow that moved the title back into category top charts.",
  },
  {
    cover: sunshine.url,
    title: "Summer on Sunshine Bay",
    author: "Debbie Mason",
    genre: "Women's Fiction",
    scope: "Seasonal Launch · BookBub Feature Prep",
    result: "#7",
    resultLabel: "Category rank held 6 weeks",
    blurb: "Built a seasonal beach-read push with promo stacking and Amazon Ads aligned to the title's keyword DNA.",
  },
  {
    cover: lostBook.url,
    title: "The Lost Book of First Loves",
    author: "RaeAnne Thayne",
    genre: "Upmarket Women's Fiction",
    scope: "Positioning Audit · Description Rewrite",
    result: "+186%",
    resultLabel: "Sales-page conversion lift",
    blurb: "Rewrote opening hook and reframed the comp-title positioning to win clicks from NYT bestseller readers.",
  },
  {
    cover: beachy.url,
    title: "Just Beachy",
    author: "Wendy Wax",
    genre: "Beach Read · Series",
    scope: "Series Funnel · Newsletter Onboarding",
    result: "+62%",
    resultLabel: "Book 1 → Book 2 read-through",
    blurb: "Reordered series funnel pages and front/back matter CTAs to feed readers into the wider Ten Beach Road universe.",
  },
  {
    cover: moyes.url,
    title: "Me Before You · After You · Still Me",
    author: "Jojo Moyes",
    genre: "Upmarket Trilogy",
    scope: "Box-Set Strategy Consult · Keyword Stack",
    result: "Top 100",
    resultLabel: "Kindle Store, Box-Set Refresh",
    blurb: "Advised on a backlist box-set positioning refresh — repositioning copy, search terms, and bullet stack for long-tail discovery.",
  },
  {
    cover: italy.url,
    title: "Meet Me in Italy",
    author: "Brenda Novak",
    genre: "Travel Romance · Women's Fiction",
    scope: "Pre-Order Campaign · Influencer Seeding",
    result: "1,400+",
    resultLabel: "Pre-orders before launch",
    blurb: "Coordinated a 6-week pre-order runway with bookstagram seeding and a launch-day price-pulse to land in category charts.",
  },
  {
    cover: famous.url,
    title: "Famous in a Small Town",
    author: "Viola Shipman",
    genre: "Women's Fiction",
    scope: "Author Brand Story · Long-Form PR",
    result: "12+",
    resultLabel: "Editorial features secured",
    blurb: "Shaped the author-side narrative behind the book and pitched long-lead features to women's lifestyle and book media.",
  },
];

const stats = [
  { icon: TrendingUp, value: "200+", label: "Author engagements" },
  { icon: Star, value: "4.8★", label: "Average client rating" },
  { icon: MessageSquare, value: "18k+", label: "Honest reviews generated" },
  { icon: Search, value: "60+", label: "Genres & sub-niches" },
];

function PortfolioPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Selected Work"
        title={<>A Portfolio of <span className="text-gradient-gold">Books We've Helped Grow</span></>}
        subtitle="A look at recent campaigns across women's fiction, beach reads, romance, and upmarket bestsellers. Engagements range from full launches to backlist revivals and brand-level consulting."
      />

      <section className="py-16">
        <div className="container-narrow grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5" style={{ boxShadow: "var(--shadow-card)" }}>
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-gradient text-gold ring-1 ring-gold/30">
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold">{s.value}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-narrow">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((b) => (
              <article key={b.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-transform hover:-translate-y-1" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="relative aspect-[2/3] overflow-hidden bg-secondary">
                  <img src={b.cover} alt={`${b.title} by ${b.author} — cover`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute left-3 top-3 rounded-full bg-navy/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold ring-1 ring-gold/30">
                    {b.genre}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold leading-tight">{b.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">by {b.author}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.blurb}</p>
                  <div className="mt-5 rounded-lg border border-border bg-secondary/60 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Scope</p>
                    <p className="mt-1 text-xs text-foreground">{b.scope}</p>
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-3 border-t border-border pt-4">
                    <div>
                      <p className="font-display text-2xl font-semibold text-gradient-gold">{b.result}</p>
                      <p className="text-[11px] text-muted-foreground">{b.resultLabel}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-muted-foreground">
            Featured titles shown with permission of their respective authors and publishers. Engagement scope varies per project.
          </p>
        </div>
      </section>

      <section className="bg-navy-gradient py-20 text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">Want your book in the next case study?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">Start with a free visibility audit. We'll review your title and reply within 48 hours with a clear next step.</p>
          <Link to="/audit" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-7 py-4 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5" style={{ boxShadow: "var(--shadow-gold)" }}>
            Request My Free Audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
