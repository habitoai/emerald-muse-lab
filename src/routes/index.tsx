import { createFileRoute } from "@tanstack/react-router";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import serviceAdvisory from "@/assets/service-advisory.jpg";
import serviceTraining from "@/assets/service-training.jpg";
import serviceSystems from "@/assets/service-systems.jpg";
import serviceCreator from "@/assets/service-creator.jpg";
import speakerAsset from "@/assets/speaker.png.asset.json";
import logoAsset from "@/assets/eddys-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orchid — Creative Agency" },
      { name: "description", content: "Agency of ideas and impact. We turn sharp strategy into brands and experiences people remember." },
      { property: "og:title", content: "Orchid — Creative Agency" },
      { property: "og:description", content: "Agency of ideas and impact." },
    ],
  }),
  component: Index,
});

const gallery = [
  { src: gallery1, alt: "Sculptural green forms" },
  { src: gallery2, alt: "Editorial product still life" },
  { src: gallery3, alt: "Typographic poster" },
  { src: gallery4, alt: "Floating spheres" },
  { src: gallery5, alt: "Interior with plants" },
  { src: gallery6, alt: "Botanical macro" },
];

const brands = [
  { name: "logoipsum", icon: "fa-solid fa-asterisk" },
  { name: "waterline", icon: "fa-solid fa-water" },
  { name: "blooms®", icon: "fa-solid fa-seedling" },
  { name: "arch+", icon: "fa-solid fa-archway" },
  { name: "scientific", icon: "fa-solid fa-atom" },
  { name: "log...", icon: "fa-solid fa-circle-nodes" },
];

function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      {/* NAV */}
      <header className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-8 flex items-center justify-between">
        <a href="/" className="logo-text font-semibold tracking-tight flex items-center gap-3 leading-none">
          <img src={logoAsset.url} alt="Eddys AI Lab" className="h-10 w-auto block" />
          <span className="text-2xl leading-none">eddys ai lab</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          <a className="nav-link text-base hover:opacity-70 transition" href="#works">Works</a>
          <a className="nav-link text-base hover:opacity-70 transition" href="#journal">Journal</a>
          <a className="nav-link text-base hover:opacity-70 transition" href="/about">About</a>
          <a className="nav-link text-base hover:opacity-70 transition" href="#faq">FAQ</a>
          <a className="nav-link text-base hover:opacity-70 transition" href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-56 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h1 className="hero-title max-w-4xl">
            We help business leaders
            <br />
            put AI to work.
          </h1>
          <button className="btn-primary rounded-full px-7 py-4 flex items-center gap-3 text-base self-start md:self-end shrink-0">
            Book Call
            <i className="fa-solid fa-arrow-right text-sm" style={{ color: "var(--lime-glow)" }} />
          </button>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-8">
        <div className="rounded-3xl overflow-hidden">
          <img
            src={speakerAsset.url}
            alt="AI consultancy keynote speaker addressing a business audience"
            width={1600}
            height={1000}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>



      {/* BRANDS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-12 border-t border-accent mt-6">
        <p className="section-description text-center mb-10">
          We have shaped AI strategy for teams at brands like
        </p>
        {/* Desktop */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {brands.map((b) => (
            <div key={b.name} className="brand-logo">
              <i className={b.icon} />
              <span>{b.name}</span>
            </div>
          ))}
        </div>
        {/* Mobile marquee */}
        <div className="md:hidden brand-marquee">
          <div className="brand-marquee-track">
            {[...brands, ...brands].map((b, i) => (
              <div key={i} className="brand-logo brand-marquee-item">
                <i className={b.icon} />
                <span>{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-bg-tea mb-8">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--lime-glow)" }} />
            <span className="tag-label">What we do</span>
          </div>

          <h2 className="section-title max-w-3xl">
            We help you get more from AI,
            <br />
            with less friction.
          </h2>

          <p className="section-description mt-8 max-w-md text-balance">
            We work with leaders who do not want more AI noise. You want strategy,
            training, systems, and execution that make your work sharper. That is what we build.
          </p>
        </div>
      </section>

      {/* COHORT BANNER */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden cohort-banner">
          <div className="relative cohort-banner-image">
            <img
              src={gallery5}
              alt="Cohort learning session"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div
            className="cohort-banner-panel flex flex-col justify-between"
            style={{ backgroundColor: "var(--emerald-pine)" }}
          >
            <div>
              <h3 className="cohort-banner-title">
                AI Clarity
                <br />
                Cohort 2026
              </h3>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mt-10">
              <p className="max-w-sm cohort-banner-body" style={{ color: "rgba(255,255,255,0.75)" }}>
                Our six-week program for leaders who want to use AI with strategy,
                taste, and real execution. We keep seats limited so you get our attention.
              </p>
              <button
                className="btn-primary rounded-full px-7 py-4 flex items-center gap-3 text-base shrink-0"
              >
                Reserve a seat
                <i className="fa-solid fa-arrow-right text-sm" style={{ color: "var(--lime-glow)" }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { n: "3,500+", d: "People we have trained across 10 countries, hands on, not theory" },
            { n: "500K", d: "Kenyans we are working to give free AI literacy training to" },
            { n: "10+", d: "Countries where we have run cohorts, workshops, and advisory sprints" },
            { n: "6 wk", d: "Average time we need to ship a working AI system inside your team" },
          ].map((s) => (
            <div key={s.n}>
              <div className="stat-number">{s.n}</div>
              <p className="stat-description mt-3 max-w-[220px]">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="services" className="max-w-[1600px] mx-auto px-6 lg:px-10 py-24 border-t border-accent">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <p className="capability-eyebrow">A look at how we help leaders put AI to work with clarity</p>
          <h2 className="capability-headline">Our services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {[
            { slug: "ai-strategy-advisory", image: serviceAdvisory, title: "AI Strategy Advisory", body: "For founders, executives, and creators who need a clear AI direction, roadmap, and execution plan." },
            { slug: "executive-ai-training", image: serviceTraining, title: "Executive AI Training", body: "Private training for business leaders and professionals who want to understand how to use AI in real work, not just theory." },
            { slug: "ai-workflow-systems", image: serviceSystems, title: "AI Workflow Systems", body: "Design and implementation of AI systems for research, content, operations, client delivery, and decision-making." },
            { slug: "creator-personal-brand-ai", image: serviceCreator, title: "Creator & Personal Brand AI", body: "For high-performing individuals who want to use AI to scale content, thinking, offers, and digital products." },
          ].map((c) => (
            <a key={c.slug} href={`/services/${c.slug}`} className="capability-visual-card group">
              <div className="capability-visual-image">
                <img src={c.image} alt={c.title} loading="lazy" />
              </div>
              <h3 className="capability-visual-title">{c.title}</h3>
              <p className="capability-visual-body">{c.body}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium" style={{ color: "var(--emerald-pine)" }}>
                Learn more
                <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1" style={{ color: "var(--lime-glow)" }} />
              </span>
            </a>
          ))}
        </div>

      </section>


      {/* GALLERY */}
      <section id="works" className="pb-24">
        <div className="gallery-container flex gap-6 px-6 lg:px-10 pb-4">
          {gallery.map((g, i) => (
            <div key={i} className="image-card shadow-sm">
              <span className="plus-icon"><i className="fa-solid fa-plus" /></span>
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={768}
                height={960}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="max-w-[1600px] mx-auto px-6 lg:px-10 py-24 border-t border-accent">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-bg-tea mb-8">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--lime-glow)" }} />
              <span className="tag-label">FAQ</span>
            </div>
            <h2 className="capability-headline mb-6">Answers before you book a call</h2>
          </div>

          <div className="faq-list">
            {[
              {
                q: "Do you offer custom training for corporate teams?",
                a: "Yes. Every executive training engagement is shaped around the team's industry, current AI maturity, and the workflows they actually run. We build private cohorts for leadership teams, marketing teams, operations, and specialist groups, with live sessions, recorded modules, and follow-up office hours.",
              },
              {
                q: "How do you handle data privacy and security in your AI workflows?",
                a: "All systems are designed with a privacy-first posture. We default to enterprise-tier models with no-training agreements, isolate client data per workspace, use redaction patterns for sensitive inputs, and document a clear data map for every workflow. NDAs and DPAs are signed before any client material enters a system.",
              },
              {
                q: "What is the expected ROI for my team after the AI Clarity cohort?",
                a: "Past participants typically reclaim 6 to 12 hours per person per week within 60 days through workflow automation, faster research, and better decision drafts. We measure ROI through three lenses: time saved, decision speed, and quality of output, and you leave the cohort with a documented baseline and target for each.",
              },
              {
                q: "How long does a typical engagement run?",
                a: "Strategy advisory runs as a focused 4 to 6 week sprint. Executive training is 3 to 6 weeks depending on cohort size. Workflow systems are scoped per deliverable and usually ship in 2 to 8 weeks. We keep engagements tight on purpose, so you see live results inside a quarter.",
              },
              {
                q: "Will the systems still work if model providers change?",
                a: "Yes. Workflows are built on a model-agnostic layer so we can swap providers (OpenAI, Anthropic, Google, open-weights) without rewriting your processes. Prompts, evaluations, and governance live in your workspace, not locked inside a vendor.",
              },
              {
                q: "What if my team has very little AI experience?",
                a: "That is the most common starting point. The training is built so non-technical leaders get fluent fast, with frameworks, hands-on exercises, and templates they can use the same day. No coding background is required.",
              },
              {
                q: "How do we get started?",
                a: "Book a call. We spend 30 minutes mapping your goals, current stack, and constraints, then propose the right format — advisory, training, systems, or a combination — with a clear scope and price before any work begins.",
              },
            ].map((item, i) => (
              <details key={i} className="faq-item">
                <summary>
                  <span>{item.q}</span>
                  <i className="fa-solid fa-plus faq-icon" />
                </summary>
                <div className="faq-answer">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-32 border-t border-accent">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-bg-tea mb-8">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--lime-glow)" }} />
            <span className="tag-label">Free 30-min strategy call</span>
          </div>
          <h2 className="section-title max-w-2xl">
            Tell us where AI
            <br />
            should move the needle.
          </h2>
          <p className="section-description mt-6 max-w-md" style={{ opacity: 0.8 }}>
            Work with an advisor who pairs strategy, ethics, and execution to put AI to work in your business.
          </p>
          <button className="btn-primary rounded-full px-7 py-4 flex items-center gap-3 text-base mt-10 shrink-0">
            Book your call
            <i className="fa-solid fa-arrow-right text-sm" style={{ color: "var(--lime-glow)" }} />
          </button>
        </div>
      </section>

      {/* FOOTER */}

      <footer id="contact" className="border-t border-accent">

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
