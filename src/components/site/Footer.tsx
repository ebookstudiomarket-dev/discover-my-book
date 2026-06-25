import { Link } from "@tanstack/react-router";
import { BookOpen, Mail, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-gradient text-primary-foreground">
      <div className="container-narrow grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-white/5 text-gold ring-1 ring-gold/30">
              <BookOpen className="h-4.5 w-4.5" />
            </span>
            <span className="font-display text-lg font-semibold">Book Growth Studio</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            A book growth studio helping authors turn invisible books into discoverable,
            reviewed, and ranked titles.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Linkedin, Instagram, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-md border border-white/15 text-white/70 transition-colors hover:border-gold/50 hover:text-gold"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {[
              ["/", "Home"],
              ["/services", "Services"],
              ["/portfolio", "Portfolio"],
              ["/audit", "Free Audit"],
              ["/about", "About"],
              ["/testimonials", "Testimonials"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <a href="mailto:alexauthorgrowthhub@gmail.com" className="hover:text-gold break-all">
                alexauthorgrowthhub@gmail.com
              </a>
            </li>
            <li>Response within 24 hours</li>
            <li>Mon–Fri, 9–6 EST</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-narrow flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 md:flex-row">
          <p>© {new Date().getFullYear()} Book Growth Studio. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
