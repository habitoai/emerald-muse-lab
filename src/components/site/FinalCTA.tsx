type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function FinalCTA({
  eyebrow = "Free 30-min strategy call",
  title = (
    <>
      Tell us where AI
      <br />
      should move the needle.
    </>
  ),
  body = "Work with us as your advisor. We pair strategy, ethics, and execution to put AI to real work in your business.",
  ctaLabel = "Book a private call",
  ctaHref = "mailto:edwin@eddysailab.com",
}: Props) {
  return (
    <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-32 border-t border-accent">
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-bg-tea mb-8">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--lime-glow)" }}
          />
          <span className="tag-label">{eyebrow}</span>
        </div>
        <h2 className="section-title max-w-2xl">{title}</h2>
        {body ? (
          <p className="section-description mt-6 max-w-md" style={{ opacity: 0.8 }}>
            {body}
          </p>
        ) : null}
        <a
          href={ctaHref}
          className="btn-primary rounded-full px-7 py-4 inline-flex items-center gap-3 text-base mt-10 shrink-0"
        >
          {ctaLabel}
          <i
            className="fa-solid fa-arrow-right text-sm"
            style={{ color: "var(--lime-glow)" }}
          />
        </a>
      </div>
    </section>
  );
}
