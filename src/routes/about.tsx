import { createFileRoute } from "@tanstack/react-router";
import speakerAsset from "@/assets/speaker.png.asset.json";
import logoAsset from "@/assets/eddys-logo.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Eddys AI Lab" },
      {
        name: "description",
        content:
          "Eddys is a strategic AI advisor with a foundation in journalism and PR. He helps leaders use AI with clarity, ethics, and sharp communication.",
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
      {/* NAV */}
      <header className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-8 flex items-center justify-between">
        <a href="/" className="logo-text font-semibold tracking-tight flex items-center gap-3 leading-none">
          <img src={logoAsset.url} alt="Eddys AI Lab" className="h-10 w-auto block" />
          <span className="text-2xl leading-none">eddys ai lab</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          <a className="nav-link text-base hover:opacity-70 transition" href="/#works">Works</a>
          <a className="nav-link text-base hover:opacity-70 transition" href="/#services">Services</a>
          <a className="nav-link text-base hover:opacity-70 transition" href="/about">About</a>
          <a className="nav-link text-base hover:opacity-70 transition" href="/#faq">FAQ</a>
          <a className="nav-link text-base hover:opacity-70 transition" href="/#contact">Contact</a>
        </nav>
      </header>

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
            alt="Eddys speaking on stage to a business audience"
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
            <h2 className="capability-headline">From newsrooms and press desks to AI strategy rooms.</h2>
            <p className="about-body">
              The work started in journalism. Years spent reporting, interviewing leaders, and
              writing under deadline taught one thing better than any framework: the truth has
              to be earned, sourced, and framed before it is useful. That discipline carried into
              public relations, where the question stopped being "what is the story" and became
              "how does this story move a market, a policy, a reputation."
            </p>
            <p className="about-body">
              Strategic communication is a craft. It demands research, narrative, ethics, and a
              clear sense of audience. Those are exactly the muscles AI work needs now. Models
              are powerful, but most leaders are drowning in output without strategy. The
              bottleneck is no longer access to AI. It is judgment.
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
              A journalism background changes how AI gets deployed. Sourcing matters. Verification
              matters. Bias is named, not waved away. Every workflow we ship comes with a clear
              data map, a privacy posture, and a human review step where it counts.
            </p>
            <p className="about-body">
              A PR background changes how AI gets communicated. Internal narrative, executive
              positioning, and stakeholder messaging are built into the rollout, not bolted on
              after launch. The result is AI that leaders can actually stand behind, in
              boardrooms, in press, and in front of their teams.
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
              { n: "01", t: "Clarity over hype", d: "We ship plain language, not buzzwords. If a leader cannot explain the system to their board, it is not done." },
              { n: "02", t: "Ethics as default", d: "Privacy, sourcing, and human review are designed in from day one, not patched in after a problem." },
              { n: "03", t: "Narrative-led", d: "Every AI rollout has a story. We write it before we build, so adoption follows the work." },
              { n: "04", t: "Outcomes, measured", d: "Time saved, decisions sharpened, output improved. We baseline at the start and track every engagement." },
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
            Book Call
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
