import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FinalCTA } from "@/components/site/FinalCTA";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import serviceAdvisoryAsset from "@/assets/service-advisory.jpg.asset.json";
import serviceTrainingAsset from "@/assets/service-training.jpg.asset.json";
import serviceSystemsAsset from "@/assets/service-systems.jpg.asset.json";
import serviceCreatorAsset from "@/assets/service-creator.jpg.asset.json";
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [],
  );
  const prev = useCallback(
    () =>
      setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, next, prev]);

  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      <SiteHeader />

      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-32 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-2xl">
            <h1 className="about-hero-title">Gallery</h1>
            <p className="about-lead mt-6 max-w-md">
              Moments from cohorts and keynotes.
            </p>
          </div>
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8 [column-fill:_balance]">
          {items.map((it, idx) => (
            <figure key={it.caption} className="group mb-6 lg:mb-8 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActiveIndex(idx)}
                className="block w-full overflow-hidden rounded-2xl bg-[var(--green-tea)] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--emerald-pine)]"
                aria-label={`Open ${it.caption}`}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                    it.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                />
              </button>
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

      {/* LIGHTBOX */}
      {isOpen && active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center transition"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition"
          >
            ›
          </button>

          <figure
            className="relative max-w-[92vw] max-h-[88vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-w-[92vw] max-h-[78vh] object-contain rounded-xl shadow-2xl"
            />
            <figcaption className="mt-4 flex items-center justify-between gap-6 w-full text-white/90 text-sm">
              <span>{active.caption}</span>
              <span className="text-white/60">
                {active.place} · {(activeIndex ?? 0) + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}

      <FinalCTA
        eyebrow="In the room"
        title={<>Want us in the room next?</>}
        body="Bring us in for a keynote, cohort, or private workshop."
      />

      <SiteFooter />
    </div>
  );
}
