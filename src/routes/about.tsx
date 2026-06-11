import { createFileRoute } from "@tanstack/react-router";
import speakerAsset from "@/assets/speaker.png.asset.json";
import laurelAward from "@/assets/laurels/laurel-award.png.asset.json";
import laurelCountries from "@/assets/laurels/laurel-countries.png.asset.json";
import laurelKenya from "@/assets/laurels/laurel-kenya.png.asset.json";
import laurelLearners from "@/assets/laurels/laurel-learners.png.asset.json";
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
          "Meet Edwin Rogoi, award-winning founder of Eddy's AI Lab. AI educator, strategist, and visionary driving AI literacy across Kenya and beyond.",
      },
      { property: "og:title", content: "About — Eddys AI Lab" },
      {
        property: "og:description",
        content:
          "Meet Edwin Rogoi, award-winning founder of Eddy's AI Lab. AI educator, strategist, and visionary driving AI literacy across Kenya and beyond.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  "Award-winning AI educator",
  "40K+ community",
  "3.5K+ learners trained",
  "10 countries reached",
  "Assistive Technology Enabler of the Year",
  "500K Kenya AI literacy goal",
];

function Laurel({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 60 80"
      className="stats-laurel"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M48 6 Q26 38 30 76" />
        <path d="M44 14 Q34 14 30 22" />
        <path d="M42 22 Q32 22 28 30" />
        <path d="M39 31 Q29 31 26 39" />
        <path d="M37 40 Q27 40 25 48" />
        <path d="M35 49 Q25 49 24 57" />
        <path d="M33 58 Q24 58 24 66" />
      </g>
    </svg>
  );
}

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
        <h1 className="about-hero-title max-w-5xl">Meet EdwinRogoi</h1>
        <p className="about-lead mt-10 max-w-3xl">
          Edwin Rogoi is the award-winning visionary founder of Eddy&apos;s AI Lab and a leading voice in the movement to democratize Artificial Intelligence across Kenya and beyond. Driven by a mission to make AI accessible, practical, and impactful for everyone, Edwin works tirelessly to ensure that technology is not seen as an intimidating barrier but as a transformative tool for personal and professional growth. His dedication to this cause was recently recognized on a national stage when he was honored as the Assistive Technology Enabler of the Year, a testament to his commitment to inclusive innovation.
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

      {/* STATS — monotone laurel marquee */}
      <section className="py-20">
        <div className="stats-marquee">
          <div className="stats-marquee-track">
            {[...stats, ...stats].map((label, i) => (
              <div key={i} className="stats-marquee-item">
                <Laurel />
                <span className="stats-marquee-label">{label}</span>
                <Laurel flip />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT EDWIN ROGOI */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-20 border-t border-accent">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20">
          <p className="about-section-label">About Edwin Rogoi</p>
          <div className="max-w-3xl space-y-6">
            <p className="about-body">
              His expertise is built upon a rigorous academic and professional foundation, holding multiple certifications that span the diverse tenets and applications of Artificial Intelligence. From technical architecture to real-world business implementation, Edwin&apos;s deep knowledge allows him to translate complex concepts into actionable strategies. Despite his extensive credentials, he remains a firm believer that in the fast-paced world of technology, the most valuable asset is an open mind; he is a lifelong student who never stops learning, constantly staying at the forefront of AI advancements to provide the most current insights to his community.
            </p>
            <p className="about-body">
              Through the leadership of Eddy&apos;s AI Lab, Edwin has cultivated a massive digital ecosystem, reaching a community of over 40,000 individuals and counting from different countries. His impact is measured in the success of those he mentors; in just a few months, he has directly trained over 3,500 people across 10 countries, helping students, entrepreneurs, and corporate teams harness AI for everything from workflow automation to strategic growth. Currently, Edwin is pursuing his most ambitious goal yet: to provide free AI literacy training to 500,000 Kenyans, paving the way for a future where every citizen is equipped to thrive in an AI-driven economy.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA
        eyebrow="Strategy advisory"
        title={<>Let&apos;s map your AI strategy.</>}
        body="Book a private call to scope a focused advisory sprint with Edwin."
      />

      <SiteFooter />
    </div>
  );
}
