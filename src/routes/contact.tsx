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
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-10">
        <h1
          className="font-semibold tracking-tight max-w-4xl"
          style={{
            color: "var(--emerald-pine)",
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Got plans? Let&apos;s turn
          <br />
          them into something real.
        </h1>

        <p
          className="mt-6 text-lg opacity-70"
          style={{ color: "var(--emerald-pine)" }}
        >
          Tell us what&apos;s on your mind.
        </p>

        <div
          className="mt-14 h-px w-full"
          style={{ backgroundColor: "var(--green-tea)" }}
        />
      </section>

      <ContactForm />

      <SiteFooter />
    </div>
  );
}
