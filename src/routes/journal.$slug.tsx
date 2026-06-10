import { createFileRoute, notFound } from "@tanstack/react-router";
import logoAsset from "@/assets/eddys-logo.png.asset.json";
import { getPost, posts, type Post } from "@/lib/journal-posts";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    return {
      meta: [
        { title: post ? `${post.title} — Eddys AI Lab Journal` : "Article — Eddys AI Lab" },
        { name: "description", content: post?.lede ?? "" },
        { property: "og:title", content: post?.title ?? "" },
        { property: "og:description", content: post?.lede ?? "" },
        ...(post?.img ? [{ property: "og:image", content: post.img }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="about-hero-title">Article not found</h1>
        <a href="/journal" className="nav-link underline mt-6 inline-block">Back to journal</a>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="about-hero-title">Something went wrong</h1>
        <button onClick={reset} className="nav-link underline mt-6">Try again</button>
      </div>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

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
          <a className="nav-link text-base hover:opacity-70 transition underline underline-offset-8" href="/journal">Journal</a>
          <a className="nav-link text-base hover:opacity-70 transition" href="/#contact">Contact</a>
        </nav>
      </header>

      {/* TITLE */}
      <section className="max-w-3xl mx-auto px-6 lg:px-10 pt-28 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-bg-tea mb-8">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--lime-glow)" }} />
          <span className="tag-label">{post.eyebrow}</span>
        </div>
        <h1
          className="font-semibold"
          style={{
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            color: "var(--emerald-pine)",
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          {post.title}
        </h1>
        <p className="about-lead mt-6 mx-auto" style={{ maxWidth: 620 }}>
          {post.lede}
        </p>
      </section>

      {/* HERO IMAGE */}
      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-10">
        <div className="overflow-hidden rounded-2xl bg-[var(--green-tea)]">
          <img
            src={post.img}
            alt={post.alt}
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* META */}
      <section className="max-w-3xl mx-auto px-6 lg:px-10 pb-12">
        <div className="flex items-center justify-between text-sm" style={{ color: "var(--emerald-pine)" }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full accent-bg-tea flex items-center justify-center font-semibold">
              {post.author.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="opacity-60">{post.author.role}</div>
            </div>
          </div>
          <div className="opacity-60">
            {post.date} · {post.read}
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="max-w-3xl mx-auto px-6 lg:px-10 pb-24">
        <div className="space-y-6" style={{ color: "var(--emerald-pine)" }}>
          {post.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="font-semibold pt-6"
                  style={{
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    fontSize: "26px",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="list-disc pl-6 space-y-2 text-lg leading-relaxed opacity-90">
                  {block.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-lg leading-relaxed opacity-90">
                {block.text}
              </p>
            );
          })}
        </div>
      </article>

      {/* CONTINUE READING */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-20 border-t border-accent">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-bg-tea mb-4">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--lime-glow)" }} />
              <span className="tag-label">Continue reading</span>
            </div>
            <h2 className="section-title" style={{ fontSize: 40, lineHeight: 1.1 }}>More from the journal</h2>
          </div>
          <a href="/journal" className="nav-link text-base opacity-80 hover:opacity-100">All articles ↗</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {more.map((p: Post) => (
            <a key={p.slug} href={`/journal/${p.slug}`} className="group block">
              <div className="overflow-hidden rounded-2xl bg-[var(--green-tea)] aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  width={768}
                  height={576}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-4">
                <div className="text-sm opacity-60 mb-2" style={{ color: "var(--emerald-pine)" }}>{p.read}</div>
                <h3
                  className="text-xl md:text-2xl leading-tight font-semibold"
                  style={{
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    color: "var(--emerald-pine)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
              </div>
            </a>
          ))}
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
