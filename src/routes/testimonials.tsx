import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, Star, ArrowRight } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Author Testimonials & Success Stories" },
      { name: "description", content: "Read what authors of fiction, nonfiction, and memoir say about working with our studio to grow their book's visibility." },
      { property: "og:title", content: "Testimonials" },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

const testimonials = [
  { name: "Rachel H.", genre: "Women's Fiction · The Wexley Inn", quote: "Alex understood my series the moment we got on the call. The repositioning and keyword work moved the title into a category where the right readers actually live — and read-through across the series finally clicked." },
  { name: "Stephanie T.", genre: "Beach Reads · Shipwreck Key Series", quote: "Book 2 outperformed Book 1 in its first week. The launch plan was clear, the ARC system actually worked, and reviews kept rolling in long after launch day." },
  { name: "Debbie M.", genre: "Contemporary Romance", quote: "I'd been launching books for years and still learned something on every call. The keyword stack alone breathed life back into a backlist title I'd nearly given up on." },
  { name: "RaeAnne T.", genre: "Upmarket Women's Fiction", quote: "The description rewrite changed everything. Same book, same cover, completely different conversion — readers finally understood what they were about to fall in love with." },
  { name: "Wendy W.", genre: "Beach Read Series", quote: "Series read-through is the hardest needle to move and Alex moved it. The back-matter and funnel changes paid for the engagement in the first month." },
  { name: "Brenda N.", genre: "Travel Romance", quote: "The pre-order runway was tight, organized, and calm — exactly what I needed at that stage. We hit launch week with real momentum, not panic." },
  { name: "Viola S.", genre: "Women's Fiction", quote: "Alex pitched the author-side story behind my book in a way I never could have on my own. The editorial features kept coming for months." },
  { name: "Maya R.", genre: "Contemporary Romance", quote: "The audit alone was worth it. Specific, grounded in how Amazon actually works, and zero fluff. I knew exactly what to fix and in what order." },
  { name: "Daniel H.", genre: "Business & Leadership", quote: "I'd spent thousands on ads with nothing to show. Alex rebuilt my positioning and copy — sales tripled without a single dollar of new spend." },
  { name: "James O.", genre: "Memoir", quote: "I felt invisible. Now I have a system that's bringing in honest reviews every single week. It's changed how I think about being an author." },
  { name: "Priya A.", genre: "Self-Help", quote: "The keyword research alone moved my book into the top 20 in two categories I didn't even know existed." },
  { name: "Marcus L.", genre: "Thriller", quote: "Alex doesn't sell hype. She sells a plan. That's exactly what I needed after two failed launches." },
];

const stories = [
  { genre: "Women's Fiction · The Wexley Inn", metric: "Top 50", label: "Amazon US Women's Fiction, 6 weeks", body: "Repositioned a Lowcountry Ladies Club novel with refined category targeting and a tighter back-cover hook. Series read-through across the box set lifted noticeably within the first month." },
  { genre: "Beach Read · The Runaway (Book 2)", metric: "+218%", label: "Launch-week page reads vs Book 1", body: "Sequenced a clean Book 2 launch with ARC team segmentation, newsletter swap stack, and a conversion-tuned description that carried momentum into week three." },
  { genre: "Contemporary Romance · Sandpiper Shore", metric: "4.1×", label: "Monthly organic reviews", body: "Rebuilt a 7-search-term metadata stack and triggered a review-velocity flow that moved the title back into category top charts." },
];

function TestimonialsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Author Voices"
        title={<>What Authors Say About <span className="text-gradient-gold">Working With Alex</span></>}
        subtitle="Sample feedback shown below — full client case studies are published as engagements complete."
      />

      <section className="py-24">
        <div className="container-narrow">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-xl border border-border bg-card p-7" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="flex items-center justify-between">
                  <Quote className="h-7 w-7 text-gold" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
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

      <section className="bg-secondary py-24">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Case Studies</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">Growth Examples</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {stories.map((s) => (
              <article key={s.genre} className="rounded-xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{s.genre}</p>
                <p className="mt-4 font-display text-5xl font-semibold text-gradient-gold">{s.metric}</p>
                <p className="mt-2 text-sm font-medium text-foreground">{s.label}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">Selected engagements from the studio portfolio. Additional case studies available on request.</p>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container-narrow">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">Your book could be next.</h2>
          <Link to="/audit" className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy-gradient px-7 py-4 text-sm font-semibold text-primary-foreground ring-1 ring-gold/30 hover:-translate-y-0.5 transition-transform" style={{ boxShadow: "var(--shadow-elegant)" }}>
            Get Your Free Audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
