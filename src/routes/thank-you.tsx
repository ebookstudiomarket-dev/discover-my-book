import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Audit Request Received" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <SiteShell>
      <section className="bg-navy-gradient text-primary-foreground">
        <div className="container-narrow py-28 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold/15 ring-1 ring-gold/40">
            <CheckCircle2 className="h-8 w-8 text-gold" />
          </div>
          <h1 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Your Book Audit Request Has Been <span className="text-gradient-gold">Received</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/75 md:text-lg">
            Our team is reviewing your book and identifying opportunities to improve
            discoverability, visibility, positioning, and reader engagement. You'll hear back
            within 48 hours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground hover:-translate-y-0.5 transition-transform" style={{ boxShadow: "var(--shadow-gold)" }}>
              <Calendar className="h-4 w-4" /> Schedule a Consultation
            </Link>
            <Link to="/" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
              Back to Home <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
