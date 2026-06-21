import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import speakerAsset from "@/assets/speaker.png.asset.json";
import laurelAward from "@/assets/laurels/laurel-award.png.asset.json";
import laurelCountries from "@/assets/laurels/laurel-countries.png.asset.json";
import laurelKenya from "@/assets/laurels/laurel-kenya.png.asset.json";
import laurelLearners from "@/assets/laurels/laurel-learners.png.asset.json";
import person1 from "@/assets/people/edwin-1.jpg.asset.json";
import person2 from "@/assets/people/edwin-2.jpg.asset.json";
import person3 from "@/assets/people/edwin-3.jpg.asset.json";
import person4 from "@/assets/people/edwin-4.jpg.asset.json";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FinalCTA } from "@/components/site/FinalCTA";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

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
  { src: laurelAward.url, alt: "Assistive Technology Enabler of the Year" },
  { src: laurelLearners.url, alt: "3.5K+ learners trained" },
  { src: laurelCountries.url, alt: "10 countries reached" },
  { src: laurelKenya.url, alt: "500K Kenya AI literacy goal" },
];

const heroSlides = [
  {
    src: speakerAsset.url,
    alt: "Edwin Rogoi speaking on stage to a business audience",
  },
  {
    src: person1.url,
    alt: "Edwin Rogoi portrait",
  },
  {
    src: person2.url,
    alt: "Edwin Rogoi portrait",
  },
];

function AboutHeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
  }, [api, onSelect]);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        className="w-full rounded-3xl overflow-hidden"
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-auto object-cover"
                width={1600}
                height={1000}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-2 mt-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              current === index
                ? "bg-primary"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      <SiteHeader active="about" />

      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-40 pb-16">
        <h1 className="about-hero-title max-w-5xl">Meet Edwin Rogoi</h1>
        <p className="about-lead mt-10 max-w-3xl">
          Edwin Rogoi is the award-winning visionary founder of Eddy&apos;s AI Lab and a leading voice in the movement to democratize Artificial Intelligence across Kenya and beyond. Driven by a mission to make AI accessible, practical, and impactful for everyone, Edwin works tirelessly to ensure that technology is not seen as an intimidating barrier but as a transformative tool for personal and professional growth. His dedication to this cause was recently recognized on a national stage when he was honored as the Assistive Technology Enabler of the Year, a testament to his commitment to inclusive innovation.
        </p>
      </section>

      {/* PORTRAIT CAROUSEL */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-16">
        <AboutHeroCarousel />
      </section>

      {/* STATS — monotone laurel marquee */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="stats-marquee">
            <div className="stats-marquee-track">
              {[...stats, ...stats].map((item, i) => (
                <div key={i} className="stats-marquee-item">
                  <img src={item.src} alt={item.alt} className="stats-laurel-img" loading="lazy" />
                </div>
              ))}
            </div>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 py-4">
              {[person1, person2, person3, person4].map((p, i) => (
                <div key={i} className="rounded-2xl overflow-hidden aspect-square bg-muted">
                  <img src={p.url} alt="Edwin Rogoi" width={900} height={900} loading="lazy" className="w-full h-full object-cover object-top" />
                </div>
              ))}
            </div>
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
