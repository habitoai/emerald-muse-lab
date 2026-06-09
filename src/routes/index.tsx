import { createFileRoute } from "@tanstack/react-router";
import footerBg from "@/assets/footer-bg.jpg";
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
import brandOsho from "@/assets/brands/osho.png.asset.json";
import brandBatanat from "@/assets/brands/batanat.png.asset.json";
import brandDazu from "@/assets/brands/dazu.png.asset.json";
import brandExcellence from "@/assets/brands/excellence-project.png.asset.json";
import brandHive from "@/assets/brands/hive-pastries.png.asset.json";
import brandGorgeous from "@/assets/brands/gorgeous-tech.png.asset.json";
import brandMku from "@/assets/brands/mount-kenya.png.asset.json";
import brandNdovesha from "@/assets/brands/ndovesha.png.asset.json";

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
            { slug: "ai-strategy-advisory", image: serviceAdvisory, title: "AI Strategy Advisory", body: "We help founders, executives, and creators land on a clear AI direction, roadmap, and execution plan." },
            { slug: "executive-ai-training", image: serviceTraining, title: "Executive AI Training", body: "We train leaders and teams to use AI in real work, not slides. Practical, hands on, built around your day." },
            { slug: "ai-workflow-systems", image: serviceSystems, title: "AI Workflow Systems", body: "We design and ship AI systems for your research, content, operations, client delivery, and decisions." },
            { slug: "creator-personal-brand-ai", image: serviceCreator, title: "Creator & Personal Brand AI", body: "We help high performers use AI to scale content, thinking, offers, and digital products." },
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
        className="big-footer"
        style={{ ["--footer-bg" as never]: `url(${footerBg})` }}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-24 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-24 mb-20">
            <div>
              <p className="big-footer-eyebrow mb-8">Let&apos;s talk</p>
              <h2 className="big-footer-title">Put AI<br />to work.</h2>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
                <a
                  href="mailto:hello@eddysailab.com"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-base font-medium"
                  style={{ backgroundColor: "var(--lime-glow)", color: "var(--emerald-pine)" }}
                >
                  Book your call
                  <i className="fa-solid fa-arrow-right text-sm" />
                </a>
                <a href="mailto:hello@eddysailab.com" className="big-footer-link underline underline-offset-4">
                  hello@eddysailab.com
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <p className="big-footer-col-title">Explore</p>
                <ul className="space-y-1">
                  <li><a href="/" className="big-footer-link">Home</a></li>
                  <li><a href="/about" className="big-footer-link">About</a></li>
                  <li><a href="#services" className="big-footer-link">Services</a></li>
                  <li><a href="#faq" className="big-footer-link">FAQ</a></li>
                </ul>
              </div>
              <div>
                <p className="big-footer-col-title">Follow</p>
                <ul className="space-y-1">
                  <li><a href="#" className="big-footer-link">Twitter</a></li>
                  <li><a href="#" className="big-footer-link">Instagram</a></li>
                  <li><a href="#" className="big-footer-link">LinkedIn</a></li>
                  <li><a href="#" className="big-footer-link">YouTube</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{ borderTop: "1px solid rgba(245,240,224,0.18)" }}
          >
            <a href="/" className="flex items-center gap-3 text-lg font-semibold" style={{ color: "#f5f0e0" }}>
              <img src={logoAsset.url} alt="Eddys AI Lab" className="h-8 w-auto" />
              eddys ai lab
            </a>
            <p className="big-footer-link" style={{ fontSize: 14, opacity: 0.65 }}>
              © {new Date().getFullYear()} Eddys AI Lab. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-lg">
              <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter" /></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
