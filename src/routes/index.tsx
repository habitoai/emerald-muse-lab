import { createFileRoute } from "@tanstack/react-router";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import speakerAsset from "@/assets/speaker.png.asset.json";

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
      <header className="max-w-7xl mx-auto px-6 lg:px-10 pt-8 flex items-center justify-between">
        <a href="/" className="logo-text text-2xl font-semibold tracking-tight flex items-center gap-2">
          <i className="fa-solid fa-asterisk text-lg" />
          orchid
        </a>
        <nav className="hidden md:flex items-center gap-10">
          <a className="nav-link text-base hover:opacity-70 transition" href="#works">Works</a>
          <a className="nav-link text-base hover:opacity-70 transition" href="#journal">Journal</a>
          <a className="nav-link text-base hover:opacity-70 transition" href="#about">About</a>
          <a className="nav-link text-base hover:opacity-70 transition" href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-40 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h1 className="hero-title max-w-4xl">
            Strategic AI integration
            <br />
            for business leaders
          </h1>
          <button className="btn-primary rounded-full px-7 py-4 flex items-center gap-3 text-base self-start md:self-end shrink-0">
            Book Call
            <i className="fa-solid fa-arrow-right text-sm" />
          </button>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-24">
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
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 border-t border-accent">
        <p className="section-description text-center mb-10">
          Over 190 design projects created for top brands including
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {brands.map((b) => (
            <div key={b.name} className="brand-logo">
              <i className={b.icon} />
              <span>{b.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT + STATS */}
      <section id="about" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-bg-tea mb-10">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--emerald-pine)" }} />
          <span className="tag-label">Who we are</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <h2 className="section-title">
            Agency of ideas
            <br />
            and impact
          </h2>
          <div>
            <p className="brand-intro mb-6">
              We turn sharp strategy into brands and experiences people remember
            </p>
            <p className="section-description">
              From identity systems to digital products, we partner with founders and
              teams who care about craft — shaping work that performs as well as it looks.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
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
          <a href="/" className="logo-text text-2xl font-semibold flex items-center gap-2">
            <i className="fa-solid fa-asterisk text-lg" />
            orchid
          </a>
          <p className="stat-description">© {new Date().getFullYear()} Orchid Studio. All rights reserved.</p>
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
