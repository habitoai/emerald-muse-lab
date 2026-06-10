import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Eddys AI Lab" },
      {
        name: "description",
        content:
          "Get in touch with Eddys AI Lab. Tell us about your business and where you'd like AI to make a difference — we reply within one business day.",
      },
      { property: "og:title", content: "Contact — Eddys AI Lab" },
      {
        property: "og:description",
        content:
          "Reach out for AI strategy advisory, team training, workflow systems, or speaking. Based in Nairobi, working globally.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      <SiteHeader active="contact" />

      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-40 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-bg-tea mb-8">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--lime-glow)" }}
          />
          <span className="tag-label">Contact</span>
        </div>
        <h1 className="about-hero-title max-w-5xl">
          Let&apos;s map your next AI move.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-80">
          Tell us a little about your business and where you&apos;d like AI to make a
          difference. We&apos;ll reply within one business day.
        </p>
      </section>

      <ContactForm />

      <SiteFooter />
    </div>
  );
}
