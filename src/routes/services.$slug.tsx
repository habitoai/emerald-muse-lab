import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FinalCTA } from "@/components/site/FinalCTA";

const services: Record<string, { title: string; body: string; intro: string }> = {
  "ai-strategy-advisory": {
    title: "AI Strategy Advisory",
    intro: "Clarity before tooling.",
    body: "For founders, executives, and creators who need a clear AI direction, roadmap, and execution plan.",
  },
  "executive-ai-training": {
    title: "Executive AI Training",
    intro: "Private training, no theory filler.",
    body: "Private training for business leaders and professionals who want to understand how to use AI in real work, not just theory.",
  },
  "ai-workflow-systems": {
    title: "AI Workflow Systems",
    intro: "Systems that compound.",
    body: "Design and implementation of AI systems for research, content, operations, client delivery, and decision-making.",
  },
  "creator-personal-brand-ai": {
    title: "Creator & Personal Brand AI Systems",
    intro: "Scale your thinking, not your hours.",
    body: "For high-performing individuals who want to use AI to scale content, thinking, offers, and digital products.",
  },
};

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = services[params.slug];
    const title = s ? `${s.title} - Eddys AI Lab` : "Service - Eddys AI Lab";
    const description = s?.body ?? "Eddys AI Lab service.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="section-title">Service not found</h1>
      <Link to="/" className="nav-link underline mt-6 inline-block">
        Back home
      </Link>
    </div>
  ),
  errorComponent: ServiceErrorComponent,
  component: ServicePage,
});

function ServiceErrorComponent({ reset }: { reset: () => void }) {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="section-title">Something went wrong</h1>
      <button
        onClick={() => {
          reset();
          router.invalidate();
        }}
        className="btn-primary rounded-full px-6 py-3 mt-6"
      >
        Try again
      </button>
    </div>
  );
}

function ServicePage() {
  const { slug } = Route.useParams();
  const service = services[slug];

  if (!service) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="section-title">Service not found</h1>
        <Link to="/" className="nav-link underline mt-6 inline-block">
          Back home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-bg-tea mb-8">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--lime-glow)" }} />
          <span className="tag-label">Service</span>
        </div>
        <h1 className="section-title text-balance">{service.title}</h1>
        <p className="section-description mt-6 text-balance">{service.intro}</p>
        <p className="section-description mt-4 text-balance">{service.body}</p>

        <div className="mt-12 flex items-center gap-4">
          <a href="mailto:edwin@eddysailab.com" className="btn-primary rounded-full px-7 py-4 inline-flex items-center gap-3 text-base">
            Book a private call
            <i className="fa-solid fa-arrow-right text-sm" style={{ color: "var(--lime-glow)" }} />
          </a>
          <Link to="/" className="nav-link text-base hover:opacity-70 transition">
            <i className="fa-solid fa-arrow-left mr-2" />
            Back home
          </Link>
        </div>
      </section>

      <FinalCTA />

      <SiteFooter />
    </div>
  );
}
