import { createFileRoute } from "@tanstack/react-router";
import speakerAsset from "@/assets/speaker.png.asset.json";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Eddys AI Lab" },
      {
        name: "description",
        content:
          "Edwin Rogoi is a strategic AI advisor with a foundation in journalism and PR. He helps leaders use AI with clarity, ethics, and sharp communication.",
      },
      { property: "og:title", content: "About — Eddys AI Lab" },
      {
        property: "og:description",
        content:
          "A strategic advisor for leaders. Background in journalism and PR, focused on AI strategy, ethics, and communication.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      <SiteHeader active="about" />


      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-40 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-bg-tea mb-8">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--lime-glow)" }} />
          <span className="tag-label">About</span>
        </div>
        <h1 className="about-hero-title max-w-5xl">
          We are your strategic advisors
          <br />for the AI shift.
        </h1>
        <p className="about-lead mt-10 max-w-2xl">
          We are not tech people who picked up AI. We come from journalism and PR, and we help you
          use AI with clarity, taste, and ethics, not noise.
        </p>
      </section>

      {/* PORTRAIT */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-16">
        <div className="rounded-3xl overflow-hidden">
          <img
            src={speakerAsset.url}
            alt="Edwin Rogoi speaking on stage to a business audience"
            className="w-full h-auto object-cover"
            width={1600}
            height={1000}
          />
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-20 border-t border-accent">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20">
          <p className="about-section-label">The background</p>
          <div className="max-w-3xl space-y-6">
            <h2 className="capability-headline">From newsrooms and press desks to your AI strategy room.</h2>
            <p className="about-body">
              We started in journalism. Years of reporting, interviewing leaders, and writing under
              deadline taught us one thing better than any framework: the truth has to be earned,
              sourced, and framed before it is useful. That discipline carried into our PR work,
              where the question stopped being "what is the story" and became "how does this story
              move a market, a policy, a reputation."
            </p>
            <p className="about-body">
              Strategic communication is a craft. It needs research, narrative, ethics, and a
              clear sense of audience. Those are the same muscles AI work needs now. Models are
              powerful, but most leaders are drowning in output without strategy. The bottleneck
              is not access to AI anymore. It is judgment, and that is what we bring.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-20 border-t border-accent">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20">
          <p className="about-section-label">The approach</p>
          <div className="max-w-3xl space-y-6">
            <h2 className="capability-headline">Strategy first. Tools second. Ethics throughout.</h2>
            <p className="about-body">
              Our journalism background changes how we deploy AI. Sourcing matters. Verification
              matters. We name bias instead of waving it away. Every workflow we ship comes with
              a clear data map, a privacy posture, and a human review step where it counts.
            </p>
            <p className="about-body">
              Our PR background changes how we communicate AI inside your business. We build the
              internal narrative, executive positioning, and stakeholder messaging into the rollout,
              not bolted on after launch. The result is AI you can stand behind, in your boardroom,
              in the press, and in front of your team.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-20 border-t border-accent">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20">
          <p className="about-section-label">Principles</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {[
              { n: "Reason 01", t: "Strategy before tools", d: "We do not start by recommending random AI apps. We identify your goals, bottlenecks, workflows, and opportunities first — then design the right AI approach around them." },
              { n: "Reason 02", t: "Built around your work", d: "Your AI system is not generic. It is shaped around your role, business model, content, clients, habits, and level of technical confidence." },
              { n: "Reason 03", t: "Education plus execution", d: "You do not just get theory. You learn how to think with AI, then apply it through prompts, workflows, automations, playbooks, and practical systems." },
              { n: "Reason 04", t: "Creator-led and field-tested", d: "Eddys AI Lab is built from daily AI research, experimentation, content creation, and real-world application — not recycled corporate AI theory." },
            ].map((p) => (
              <div key={p.n}>
                <div className="stat-number" style={{ fontSize: 36, lineHeight: "42px" }}>{p.n}</div>
                <h3 className="mt-3 text-xl font-semibold" style={{ color: "var(--emerald-pine)" }}>{p.t}</h3>
                <p className="about-body mt-2">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-24">
        <div
          className="rounded-3xl px-8 lg:px-16 py-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
          style={{ backgroundColor: "var(--emerald-pine)" }}
        >
          <h2 className="cohort-banner-title">Let&apos;s map your AI strategy.</h2>
          <button className="btn-primary rounded-full px-7 py-4 flex items-center gap-3 text-base shrink-0">
            Book a private call
            <i className="fa-solid fa-arrow-right text-sm" style={{ color: "var(--lime-glow)" }} />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-accent">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="logo-text text-2xl font-semibold flex items-center gap-3">
            <img src={logoAsset.url} alt="Eddys AI Lab" className="h-8 w-auto" />
            eddys ai lab
          </a>
          <p className="stat-description">© {new Date().getFullYear()} Eddys AI Lab. All rights reserved.</p>
          <div className="flex items-center gap-5 accent-text-emerald">
            <a href="#" aria-label="Twitter" className="hover:opacity-70"><i className="fa-brands fa-x-twitter" /></a>
            <a href="#" aria-label="Instagram" className="hover:opacity-70"><i className="fa-brands fa-instagram" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70"><i className="fa-brands fa-linkedin-in" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
