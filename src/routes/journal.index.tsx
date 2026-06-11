import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/lib/journal-posts";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Journal — Eddys AI Lab" },
      {
        name: "description",
        content:
          "Field notes on AI strategy, adoption, training, and the workflows reshaping how teams ship.",
      },
      { property: "og:title", content: "Journal — Eddys AI Lab" },
      {
        property: "og:description",
        content: "Essays, playbooks, and lessons from the field on AI for leaders and teams.",
      },
    ],
  }),
  component: JournalPage,
});



function JournalPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      <SiteHeader />


      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-32 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-bg-tea mb-8">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--lime-glow)" }} />
              <span className="tag-label">Discover</span>
            </div>
            <h1 className="about-hero-title">Our journal</h1>
            <p className="about-lead mt-6 max-w-md">
              Fresh thinking on AI strategy, adoption, and leadership — straight to your inbox.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full lg:w-auto items-center gap-3"
          >
            <input
              type="email"
              required
              placeholder="name@email.com"
              className="flex-1 lg:w-72 h-12 px-5 rounded-full border border-accent bg-background text-base focus:outline-none focus:ring-2 focus:ring-[var(--lime-glow)]"
              style={{ color: "var(--emerald-pine)" }}
            />
            <button
              type="submit"
              className="btn-primary rounded-full h-12 px-7 text-base font-medium shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 lg:gap-x-10 lg:gap-y-20">
          {posts.map((p) => (
            <a key={p.title} href={`/journal/${p.slug}`} className="group block">
              <div className="overflow-hidden rounded-2xl bg-[var(--green-tea)] aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  width={768}
                  height={576}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5">
                <div className="text-sm opacity-60 mb-2" style={{ color: "var(--emerald-pine)" }}>
                  {p.read}
                </div>
                <h3
                  className="text-2xl md:text-[26px] leading-tight font-semibold"
                  style={{
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    color: "var(--emerald-pine)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <div className="mt-3 h-px w-10 bg-[var(--emerald-pine)] opacity-40" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <FinalCTA
        eyebrow="Strategy advisory"
        title={<>Let&apos;s map your AI strategy.</>}
        body="Subscribe to the journal, or book a private call to scope your AI sprint."
      />

      <SiteFooter />
    </div>
  );
}
