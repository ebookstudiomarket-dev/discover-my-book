import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, Star, ArrowRight } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Author Testimonials & Success Stories | Alex Morgan" },
      { name: "description", content: "Read what authors of fiction, nonfiction, and memoir say about working with Alex Morgan to grow their book's visibility." },
      { property: "og:title", content: "Testimonials — Alex Morgan" },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

const testimonials = [
  { name: "Sarah Whitfield", genre: "Historical Fiction", quote: "My debut had been quietly dying. Within two months, my book was ranking in three categories and reviews started coming in weekly." },
  { name: "Daniel Hart", genre: "Business & Leadership", quote: "I'd spent thousands on ads with nothing to show. Alex rebuilt my positioning and copy — sales tripled without a single dollar of new spend." },
  { name: "Maya Rosen", genre: "Romance", quote: "The audit alone was worth it. Clear, specific, and grounded in how Amazon actually works. No vague advice, just a real plan." },
  { name: "James O'Connor", genre: "Memoir", quote: "I felt invisible. Now I have a system that's bringing in honest reviews every single week. It's changed how I think about being an author." },
  { name: "Priya Anand", genre: "Self-Help", quote: "The keyword research alone moved my book into the top 20 in two categories I didn't even know existed." },
  { name: "Marcus Lee", genre: "Thriller", quote: "Alex doesn't sell hype. She sells a plan. That's exactly what I needed after two failed launches." },
];

const stories = [
  { genre: "Literary Fiction", metric: "+312%", label: "Keyword impressions in 60 days", body: "Repositioned a stalled debut into three more accurate categories. New keyword strategy lifted impressions by 312% and held steady for the following quarter." },
  { genre: "Self-Help", metric: "4.2×", label: "Monthly review velocity", body: "Implemented a reader-to-reviewer funnel that scaled honest reviews from 3/month to 13/month within 90 days." },
  { genre: "Memoir", metric: "Top 5", label: "Category rank held for 90 days", body: "Rewrote sales copy and refreshed metadata. The book entered the top 5 of its category and stayed there for a full quarter." },
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
          <p className="mt-8 text-center text-xs text-muted-foreground">Sample data shown until real client results are added.</p>
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
