import { useEffect, useRef } from "react";
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
  const stackRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

    const updateStack = () => {
      const rect = stack.getBoundingClientRect();
      const vh = window.innerHeight;
      const cards = stack.querySelectorAll<HTMLElement>(".stack-card");
      const n = cards.length;
      if (n === 0) return;

      // segments: 1 expand + (n-1) pile + 1 rest = n+1 viewports of scroll
      const distance = Math.max(1, rect.height - vh);
      const scrolled = clamp(-rect.top, 0, distance);
      const t = (scrolled / distance) * (n); // 0..n

      // Card 0: expand from small (scale ~0.4) to full (scale 1) during t in [0..1]
      const expand = clamp(t, 0, 1);
      const startScale = 0.4;
      const scale0 = startScale + (1 - startScale) * expand;
      cards[0].style.transform = `translateY(0) scale(${scale0})`;
      cards[0].style.borderRadius = `${24 + (1 - expand) * 12}px`;

      // Cards 1..n-1: stacked below, slide up one-by-one in subsequent segments
      for (let k = 1; k < n; k++) {
        const local = clamp(t - k, 0, 1);
        const y = (1 - local) * vh;
        cards[k].style.transform = `translateY(${y}px) scale(1)`;
      }
    };

    updateStack();
    window.addEventListener("scroll", updateStack, { passive: true });
    window.addEventListener("resize", updateStack);

    return () => {
      window.removeEventListener("scroll", updateStack);
      window.removeEventListener("resize", updateStack);
    };
  }, []);

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
          <a className="nav-link text-base hover:opacity-70 transition" href="#about">About</a>
          <a className="nav-link text-base hover:opacity-70 transition" href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-56 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h1 className="hero-title max-w-4xl">
            Strategic AI integration
            <br />
            for business leaders
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
          Over 190 design projects created for top brands including
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
            <span className="tag-label">What I do</span>
          </div>

          <h2 className="section-title max-w-3xl">
            Get more from AI,
            <br />
            with less friction.
          </h2>

          <p className="section-description mt-8 max-w-md text-balance">
            Eddys AI Lab exists for leaders who do not want more AI noise. They want
            strategy, education, systems, and execution that make their work sharper.
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
                A six-week program for leaders who want to use AI with
                strategy, taste, and real execution. Limited seats.
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
            { n: "90+", d: "Projects that were shipped with care, reviewed end to end" },
            { n: "100%", d: "Happy clients that quickly come back for new projects and ideas" },
            { n: "30+", d: "Brands and startups that trusted us to shape their identity" },
            { n: "120", d: "Design concepts explored before landing on the perfect fit" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:pl-[260px] xl:pl-[320px]">
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

      {/* STACKING SCROLL TEST */}
      <section ref={stackRef} className="stack-section">
        <div className="stack-pin">
          {[
            { image: serviceAdvisory, title: "AI Strategy Advisory", meta: "01 — Advisory" },
            { image: serviceTraining, title: "Executive AI Training", meta: "02 — Training" },
            { image: serviceSystems, title: "AI Workflow Systems", meta: "03 — Systems" },
            { image: serviceCreator, title: "Creator & Personal Brand AI", meta: "04 — Creator" },
          ].map((c, i) => (
            <div key={i} className="stack-card" style={{ ["--i" as string]: i }}>
              <img src={c.image} alt={c.title} />
              <div className="stack-card-overlay">
                <span className="stack-card-meta">{c.meta}</span>
                <h3 className="stack-card-title">{c.title}</h3>
              </div>
            </div>
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
