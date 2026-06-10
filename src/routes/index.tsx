import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FinalCTA } from "@/components/site/FinalCTA";
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

import brandOsho from "@/assets/brands/osho.png.asset.json";
import brandBatanat from "@/assets/brands/batanat.png.asset.json";
import brandDazu from "@/assets/brands/dazu.png.asset.json";
import brandExcellence from "@/assets/brands/excellence-project.png.asset.json";
import brandHive from "@/assets/brands/hive-pastries.png.asset.json";
import brandGorgeous from "@/assets/brands/gorgeous-tech.png.asset.json";
import brandMku from "@/assets/brands/mount-kenya.png.asset.json";
import brandNdovesha from "@/assets/brands/ndovesha.png.asset.json";
import reasonStrategy from "@/assets/reason-strategy.webp";
import reasonWorkflow from "@/assets/reason-workflow.webp";
import reasonEducation from "@/assets/reason-education.webp";
import articleRoi from "@/assets/article-ai-roi.jpg";
import articleTraining from "@/assets/article-team-training.jpg";
import articleStrategy from "@/assets/article-ai-strategy.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eddys AI Lab — Practical AI for Leaders" },
      { name: "description", content: "We help business leaders put AI to work — strategy, training, and systems built around your real work." },
      { property: "og:title", content: "Eddys AI Lab — Practical AI for Leaders" },
      { property: "og:description", content: "We help business leaders put AI to work — strategy, training, and systems built around your real work." },
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
      <SiteHeader />


      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-56 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h1 className="hero-title max-w-4xl">
            We help business leaders
            <br />
            put AI to work.
          </h1>
          <a href="/#contact" className="btn-primary rounded-full px-7 py-4 inline-flex items-center gap-3 text-base self-start md:self-end shrink-0">
            Book a private call
            <i className="fa-solid fa-arrow-right text-sm" style={{ color: "var(--lime-glow)" }} />
          </a>
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
            loading="eager"
            decoding="async"
            // @ts-expect-error - fetchpriority is valid HTML, not yet in React types
            fetchpriority="high"
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
            { n: "3,500+", d: "Learners reached" },
            { n: "10+", d: "AI systems designed" },
            { n: "6-week", d: "Implementation sprint" },
            { n: "500K+", d: "Content reach" },
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
              We identify where AI can create real leverage before recommending platforms, prompts, or automations.
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
              Your AI system is shaped around your goals, workflows, content, clients, and decision-making style.
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
              You learn how to think with AI, then apply it through practical workflows, prompts, playbooks, and systems.
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
                Built from daily AI research, experimentation, teaching, content creation, and practical implementation.
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

      <FinalCTA />

      <SiteFooter />
    </div>
  );
}
