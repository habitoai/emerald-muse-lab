import { createFileRoute } from "@tanstack/react-router";
import footerBg from "@/assets/footer-bg.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import serviceAdvisoryAsset from "@/assets/service-advisory.png.asset.json";
import serviceTrainingAsset from "@/assets/service-training.png.asset.json";
import serviceSystemsAsset from "@/assets/service-systems.png.asset.json";
import serviceCreatorAsset from "@/assets/service-creator.png.asset.json";
const serviceAdvisory = serviceAdvisoryAsset.url;
const serviceTraining = serviceTrainingAsset.url;
const serviceSystems = serviceSystemsAsset.url;
const serviceCreator = serviceCreatorAsset.url;
import speakerAsset from "@/assets/speaker.png.asset.json";
import logoAsset from "@/assets/eddys-logo.png.asset.json";
import brandOsho from "@/assets/brands/osho.png.asset.json";
import brandBatanat from "@/assets/brands/batanat.png.asset.json";
import brandDazu from "@/assets/brands/dazu.png.asset.json";
import brandExcellence from "@/assets/brands/excellence-project.png.asset.json";
import brandHive from "@/assets/brands/hive-pastries.png.asset.json";
import brandGorgeous from "@/assets/brands/gorgeous-tech.png.asset.json";
import brandMku from "@/assets/brands/mount-kenya.png.asset.json";
import brandNdovesha from "@/assets/brands/ndovesha.png.asset.json";
import reasonStrategy from "@/assets/reason-strategy.png";
import reasonWorkflow from "@/assets/reason-workflow.png";
import reasonEducation from "@/assets/reason-education.png";
import articleRoi from "@/assets/article-ai-roi.jpg";
import articleTraining from "@/assets/article-team-training.jpg";
import articleStrategy from "@/assets/article-ai-strategy.jpg";


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
  { name: "Osho", src: brandOsho.url },
  { name: "Batanat", src: brandBatanat.url },
  { name: "Dazu AI Hub", src: brandDazu.url },
  { name: "Excellence Project", src: brandExcellence.url },
  { name: "The Hive Pastries", src: brandHive.url },
  { name: "Gorgeous Technical Institute", src: brandGorgeous.url },
  { name: "Mount Kenya University", src: brandMku.url },
  { name: "Ndovesha", src: brandNdovesha.url },
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
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={speakerAsset.url}
            alt="AI consultancy keynote speaker addressing a business audience"
            width={1600}
            height={1000}
            className="w-full h-auto object-cover"
            style={{ filter: "saturate(0.78) hue-rotate(-12deg) brightness(0.82) contrast(1.05)" }}
          />
          {/* Brand-tinted overlay to harmonize the red auditorium with the green system */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--emerald-pine) 35%, transparent) 0%, color-mix(in oklab, var(--emerald-pine) 10%, transparent) 45%, color-mix(in oklab, var(--emerald-pine) 55%, transparent) 100%)",
              mixBlendMode: "multiply",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 100%, color-mix(in oklab, var(--lime-glow) 18%, transparent), transparent 60%)",
            }}
          />
        </div>
      </section>



      {/* BRANDS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-12 border-t border-accent mt-6">
        <p className="section-description text-center mb-10">
          We have shaped AI strategy for teams at brands like
        </p>
        <div className="brand-marquee-row">
          <div className="brand-marquee-track">
            {[...brands, ...brands].map((b, i) => (
              <div key={i} className="brand-logo-img-wrap" title={b.name}>
                <img src={b.src} alt={b.name} className="brand-logo-img" loading="lazy" />
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
        <div className="flex items-center gap-2 mb-10">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--lime-glow)" }} />
          <span className="tag-label">Track record, in numbers we can stand behind</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { n: "3,500+", d: "Leaders and teams trained in person across our cohorts and workshops since 2022" },
            { n: "10", d: "Countries where we have delivered AI advisory, training, or build sprints on the ground" },
            { n: "6 wks", d: "Typical time from kickoff to a working AI workflow live inside a client team" },
            { n: "500K", d: "Kenyans we are on a mission to give free, structured AI literacy training to by 2030" },
          ].map((s) => (
            <div key={s.n}>
              <div className="stat-number">{s.n}</div>
              <p className="stat-description mt-3 max-w-[220px]">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="max-w-[1600px] mx-auto px-6 lg:px-10 py-24 border-t border-accent">
        <div className="flex flex-col items-center text-center mb-14 gap-5">
          <div className="flex items-center gap-1.5 text-lg" style={{ color: "var(--emerald-pine)" }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <i key={i} className="fa-solid fa-star" />
            ))}
          </div>
          <div className="inline-flex items-center px-4 py-2 rounded-full accent-bg-tea">
            <span className="tag-label">Trusted by leaders across 10+ countries</span>
          </div>
          <h2 className="capability-headline max-w-3xl">
            We help you figure out
            <br />
            what AI really means for your work.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {/* Reason 01 — Dark card */}
          <div
            className="rounded-3xl p-8 flex flex-col justify-between min-h-[420px]"
            style={{ backgroundColor: "var(--emerald-pine)", color: "#f5f0e0" }}
          >
            <h3 className="text-2xl font-semibold leading-snug max-w-[14ch]">Strategy before tools</h3>
            <div className="flex-1 flex items-center justify-center py-4">
              <img src={reasonStrategy} alt="" loading="lazy" className="max-h-56 w-auto" />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,224,0.7)" }}>
              We do not start by recommending random AI apps. We identify your goals, bottlenecks, workflows, and opportunities first — then design the right AI approach around them.
            </p>
          </div>

          {/* Reason 02 — Lime card */}
          <div
            className="rounded-3xl p-8 flex flex-col justify-between min-h-[420px]"
            style={{ backgroundColor: "var(--lime-glow)", color: "var(--emerald-pine)" }}
          >
            <h3 className="text-2xl font-semibold leading-snug max-w-[14ch]">Built around your work</h3>
            <div className="flex-1 flex items-center justify-center py-4">
              <img src={reasonWorkflow} alt="" loading="lazy" className="max-h-56 w-auto" />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(8,71,52,0.75)" }}>
              Your AI system is not generic. It is shaped around your role, business model, content, clients, habits, and level of technical confidence.
            </p>
          </div>

          {/* Reason 03 — Light card (tall, spans 2 rows) */}
          <div
            className="rounded-3xl p-8 flex flex-col justify-between min-h-[420px] md:row-span-2 md:min-h-full"
            style={{ backgroundColor: "var(--green-tea)", color: "var(--emerald-pine)" }}
          >
            <h3 className="text-2xl font-semibold leading-snug max-w-[14ch]">Education plus execution</h3>
            <div className="flex-1 flex items-center justify-center py-4">
              <img src={reasonEducation} alt="" loading="lazy" className="max-h-80 w-auto" />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(8,71,52,0.75)" }}>
              You do not just get theory. You learn how to think with AI, then apply it through prompts, workflows, automations, playbooks, and practical systems.
            </p>
          </div>


          {/* Reason 04 — Wide with image (spans 2 cols, row 2) */}
          <div
            className="rounded-3xl p-8 flex flex-col md:flex-row gap-6 md:col-span-2 min-h-[420px]"
            style={{ backgroundColor: "var(--green-tea)", color: "var(--emerald-pine)" }}
          >
            <div className="flex-1 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold leading-snug max-w-[18ch]">Creator-led and field-tested</h3>
              <p className="text-sm leading-relaxed max-w-md" style={{ color: "rgba(8,71,52,0.75)" }}>
                Eddys AI Lab is built from daily AI research, experimentation, content creation, and real-world application — not recycled corporate AI theory.
              </p>
            </div>
            <div className="md:w-[44%] rounded-2xl overflow-hidden relative min-h-[220px]">
              <img src={gallery5} alt="Edwin Rogoi in the lab" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="services" className="max-w-[1600px] mx-auto px-6 lg:px-10 py-24 border-t border-accent">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <p className="capability-eyebrow">Private engagements for leaders, founders, and high performers</p>
          <h2 className="capability-headline">How we work with you</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {[
            { slug: "ai-strategy-advisory", image: serviceAdvisory, title: "AI Strategy Integration", body: "A private roadmap for leaders who want to see exactly where AI can create real leverage in their business, content, decisions, and operations." },
            { slug: "executive-ai-training", image: serviceTraining, title: "Executive AI Coaching", body: "One-on-one guidance for business leaders and professionals who want to use AI with confidence, without wasting time on scattered tools." },
            { slug: "ai-workflow-systems", image: serviceSystems, title: "AI Workflow Systems", body: "Custom systems built around your work, for research, content, automation, knowledge management, client delivery, and day-to-day decisions." },
            { slug: "creator-personal-brand-ai", image: serviceCreator, title: "AI Content & Authority Systems", body: "For creators, founders, and experts who want to scale their ideas, content, and digital presence with AI, without losing their voice." },
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


      {/* Journal / Articles */}
      <section id="journal" className="max-w-[1600px] mx-auto px-6 lg:px-10 py-24 border-t border-accent">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <h2 className="section-title">Journal</h2>
            <p className="section-description mt-4 opacity-80">
              Field notes on AI strategy, adoption, and the workflows reshaping how teams ship.
            </p>
          </div>
          <a href="/journal" className="inline-flex items-center gap-2 nav-link text-base opacity-80 hover:opacity-100">
            See all articles
            <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {[
            {
              date: "May 28, 2026",
              title: "The honest ROI of AI inside a 20-person team",
              img: articleRoi,
              alt: "Laptop with green data visualization",
            },
            {
              date: "Apr 14, 2026",
              title: "Why most AI training fails — and what we changed",
              img: articleTraining,
              alt: "Team workshop with sticky notes",
            },
            {
              date: "Mar 02, 2026",
              title: "Build vs. buy: choosing your first AI workflow",
              img: articleStrategy,
              alt: "Abstract green glass shapes",
            },
          ].map((a) => (
            <a key={a.title} href="#journal" className="service-tile group">
              <div className="service-tile-image relative">
                <img
                  src={a.img}
                  alt={a.alt}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-background/90 flex items-center justify-center text-[var(--emerald-pine)] opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </div>
              </div>
              <div className="mt-5">
                <div className="text-sm opacity-60 mb-2">{a.date}</div>
                <h3 className="text-xl md:text-2xl font-semibold leading-tight" style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', letterSpacing: "-0.01em" }}>
                  {a.title}
                </h3>
              </div>
            </a>
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
                a: "Yes. We shape every training around your team, your industry, and the work you actually do. We run private cohorts for leadership, marketing, operations, and specialist teams, with live sessions, recorded modules, and follow-up office hours so it sticks.",
              },
              {
                q: "How do you handle data privacy and security in your AI workflows?",
                a: "We treat your data carefully. We use enterprise-tier models that do not train on your inputs, keep each client in their own workspace, redact sensitive information, and write down exactly where data flows. We sign NDAs and data agreements before any of your material touches a system.",
              },
              {
                q: "What is the expected ROI for my team after the AI Clarity cohort?",
                a: "Most of our past participants save 6 to 12 hours per person per week within 60 days. We measure it three ways: time saved, decisions made faster, and quality of output. You leave the cohort with a clear baseline and target for each.",
              },
              {
                q: "How long does a typical engagement run?",
                a: "Strategy advisory is a focused 4 to 6 week sprint. Training runs 3 to 6 weeks depending on cohort size. Workflow systems usually ship in 2 to 8 weeks. We keep things tight on purpose so you see real results inside a quarter.",
              },
              {
                q: "Will the systems still work if model providers change?",
                a: "Yes. We build on a model-agnostic layer so we can swap providers, OpenAI, Anthropic, Google, open-weights, without rewriting your processes. Your prompts, evaluations, and rules live in your workspace, not locked inside one vendor.",
              },
              {
                q: "What if my team has very little AI experience?",
                a: "That is the most common place we start. We teach non-technical leaders to get fluent fast, with simple frameworks, hands-on exercises, and templates you can use the same day. No coding background needed.",
              },
              {
                q: "How do we get started?",
                a: "Book a call. We spend 30 minutes mapping your goals, your current stack, and your constraints. Then we propose the right format, advisory, training, systems, or a mix, with a clear scope and price before any work begins.",
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
            Work with us as your advisor. We pair strategy, ethics, and execution to put AI to real work in your business.
          </p>
          <button className="btn-primary rounded-full px-7 py-4 flex items-center gap-3 text-base mt-10 shrink-0">
            Book your call
            <i className="fa-solid fa-arrow-right text-sm" style={{ color: "var(--lime-glow)" }} />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="text-[#f5f0e0]"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-20 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr_1fr] gap-12 lg:gap-16">
            {/* Left: brand + tagline */}
            <div className="flex flex-col justify-between gap-10">
              <div
                className="w-12 h-12 rounded-md flex items-center justify-center"
                style={{ border: "1.5px solid #f5f0e0" }}
                aria-label="Eddy's AI Lab"
              >
                <i className="fa-solid fa-layer-group text-lg" style={{ color: "#f5f0e0" }} />
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                Practical AI.<br />Built for leaders.
              </h3>
            </div>

            {/* Middle: link grid + CTA */}
            <div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Advisory", href: "/services/ai-strategy-integration" },
                  { label: "Clients", href: "#why-us" },
                  { label: "Training", href: "/services/executive-ai-coaching" },
                  { label: "Journal", href: "/journal" },
                  { label: "Systems", href: "/services/ai-workflow-systems" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "Authority", href: "/services/ai-content-authority-systems" },
                  { label: "About", href: "/about" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-5 py-4 rounded-md text-sm font-medium hover:opacity-100 opacity-90 transition"
                    style={{ backgroundColor: "#161616" }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href="mailto:hello@eddysailab.com"
                className="mt-3 flex items-center justify-between px-5 py-4 rounded-md text-sm font-semibold tracking-wide uppercase"
                style={{ backgroundColor: "#f5f0e0", color: "#0a0a0a" }}
              >
                Talk to Edwin
                <span
                  className="w-9 h-9 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: "var(--lime-glow)" }}
                >
                  <i className="fa-solid fa-arrow-right text-xs" style={{ color: "#0a0a0a" }} />
                </span>
              </a>
            </div>

            {/* Right: newsletter */}
            <div
              className="rounded-md p-6 flex flex-col gap-6"
              style={{ backgroundColor: "#161616" }}
            >
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 border-b pb-3"
                style={{ borderColor: "rgba(245,240,224,0.2)" }}
              >
                <input
                  type="email"
                  placeholder="Your work email"
                  className="flex-1 bg-transparent outline-none text-sm placeholder:opacity-50"
                  style={{ color: "#f5f0e0" }}
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: "var(--lime-glow)" }}
                  aria-label="Subscribe"
                >
                  <i className="fa-solid fa-arrow-right text-xs" style={{ color: "#0a0a0a" }} />
                </button>
              </form>
              <p className="text-xs opacity-50 leading-relaxed">
                By providing this information, you agree to be kept informed about Eddy&apos;s AI Lab insights, programs, and events.
              </p>
              <p className="text-sm leading-relaxed mt-auto">
                Get field notes on AI strategy, executive coaching, and the systems we build with leaders.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-16 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(245,240,224,0.12)" }}
          >
            <div className="flex items-center gap-4 text-sm opacity-70">
              <a href="#" aria-label="LinkedIn" className="hover:opacity-100">
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a href="#" aria-label="X" className="hover:opacity-100">
                <i className="fa-brands fa-x-twitter" />
              </a>
              <a href="#" className="ml-2 hover:opacity-100">Privacy Policy</a>
              <a href="#" className="hover:opacity-100">Terms of Service</a>
            </div>
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} Eddy&apos;s AI Lab. Founded by Edwin Rogoi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
