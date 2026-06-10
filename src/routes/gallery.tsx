import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FinalCTA } from "@/components/site/FinalCTA";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import serviceAdvisoryAsset from "@/assets/service-advisory.png.asset.json";
import serviceTrainingAsset from "@/assets/service-training.png.asset.json";
import serviceSystemsAsset from "@/assets/service-systems.png.asset.json";
import serviceCreatorAsset from "@/assets/service-creator.png.asset.json";
const serviceAdvisory = serviceAdvisoryAsset.url;
const serviceTraining = serviceTrainingAsset.url;
const serviceSystems = serviceSystemsAsset.url;
const serviceCreator = serviceCreatorAsset.url;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Eddys AI Lab" },
      {
        name: "description",
        content:
          "Moments from cohorts, keynotes, build sprints, and the AI workshops we have run on the ground.",
      },
      { property: "og:title", content: "Gallery — Eddys AI Lab" },
      {
        property: "og:description",
        content: "Behind-the-scenes from our AI cohorts, keynotes, and client sprints.",
      },
    ],
  }),
  component: GalleryPage,
});

type Item = {
  src: string;
  alt: string;
  caption: string;
  place: string;
  tall?: boolean;
};

const items: Item[] = [
  { src: g1, alt: "Cohort workshop", caption: "AI for Leaders — Cohort 07", place: "Nairobi", tall: true },
  { src: serviceTraining, alt: "Team training session", caption: "Team rollout sprint", place: "Lagos" },
  { src: g2, alt: "Keynote stage", caption: "Keynote — AI & Communications", place: "Kigali" },
  { src: serviceAdvisory, alt: "Advisory session", caption: "Founder advisory day", place: "Cape Town" },
  { src: g3, alt: "Build sprint", caption: "Build sprint — Ops GPT", place: "Nairobi", tall: true },
  { src: g4, alt: "Roundtable discussion", caption: "C-suite roundtable", place: "Accra" },
  { src: serviceCreator, alt: "Creator session", caption: "Creator-led AI lab", place: "Nairobi" },
  { src: g5, alt: "Workshop floor", caption: "Public-sector workshop", place: "Kampala", tall: true },
  { src: serviceSystems, alt: "Systems mapping", caption: "Workflow mapping day", place: "Nairobi" },
  { src: g6, alt: "Closing ceremony", caption: "Cohort 06 graduation", place: "Nairobi" },
];

function GalleryPage() {
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
          <a className="nav-link text-base hover:opacity-70 transition" href="/journal">Journal</a>
          <a className="nav-link text-base hover:opacity-70 transition underline underline-offset-8" href="/gallery">Gallery</a>
          <a className="nav-link text-base hover:opacity-70 transition" href="/#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-32 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-bg-tea mb-8">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--lime-glow)" }} />
              <span className="tag-label">In the room</span>
            </div>
            <h1 className="about-hero-title">Gallery</h1>
            <p className="about-lead mt-6 max-w-md">
              Moments from cohorts, keynotes, and client sprints — wherever the work happens.
            </p>
          </div>
          <div className="flex items-end gap-10" style={{ color: "var(--emerald-pine)" }}>
            <div>
              <div className="stat-number" style={{ fontSize: 56, lineHeight: 1 }}>10</div>
              <div className="stat-description mt-2">Countries</div>
            </div>
            <div>
              <div className="stat-number" style={{ fontSize: 56, lineHeight: 1 }}>40+</div>
              <div className="stat-description mt-2">Cohorts</div>
            </div>
            <div>
              <div className="stat-number" style={{ fontSize: 56, lineHeight: 1 }}>3.5K</div>
              <div className="stat-description mt-2">Leaders trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8 [column-fill:_balance]">
          {items.map((it) => (
            <figure
              key={it.caption}
              className="group mb-6 lg:mb-8 break-inside-avoid"
            >
              <div className="overflow-hidden rounded-2xl bg-[var(--green-tea)]">
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                    it.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                />
              </div>
              <figcaption
                className="flex items-center justify-between mt-3 px-1 text-sm"
                style={{ color: "var(--emerald-pine)" }}
              >
                <span className="opacity-85">{it.caption}</span>
                <span className="opacity-50">{it.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-24">
        <div
          className="rounded-3xl px-8 lg:px-16 py-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
          style={{ backgroundColor: "var(--emerald-pine)" }}
        >
          <h2 className="cohort-banner-title">Want us in the room next?</h2>
          <a
            href="/#contact"
            className="btn-primary rounded-full px-7 py-4 inline-flex items-center gap-3 text-base shrink-0"
          >
            Book a private call
            <i className="fa-solid fa-arrow-right text-sm" style={{ color: "var(--lime-glow)" }} />
          </a>
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
