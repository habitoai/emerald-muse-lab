const LINKS = [
  { label: "Works", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
];

export function SiteFooter() {
  return (
    <footer className="text-[#f5f0e0] px-3 sm:px-6 lg:px-10">
      <div
        className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 rounded-2xl sm:rounded-3xl"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_1.4fr_1fr] gap-8 md:gap-10 lg:gap-16">
          {/* Left: brand + tagline */}
          <div className="flex flex-col justify-between gap-10">
            <div
              className="w-12 h-12 rounded-md flex items-center justify-center"
              style={{ border: "1.5px solid #f5f0e0" }}
              aria-label="Eddy's AI Lab"
            >
              <i className="fa-solid fa-layer-group text-lg" style={{ color: "#f5f0e0" }} />
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
              Practical AI.<br />Built for leaders.
            </h3>
          </div>

          {/* Middle: link grid + CTA */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              {LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-5 py-4 rounded-md text-sm font-medium hover:opacity-100 opacity-90 transition"
                  style={{ backgroundColor: "#161616" }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="mailto:edwin@eddysailab.com"
              className="mt-3 flex items-center justify-between px-5 py-4 rounded-md text-sm font-semibold tracking-wide uppercase"
              style={{ backgroundColor: "#f5f0e0", color: "#0a0a0a" }}
            >
              Talk to Edwin
              <span
                className="w-9 h-9 rounded-md flex items-center justify-center"
                style={{ backgroundColor: "var(--lime-glow)" }}
              >
                <i className="fa-solid fa-arrow-right text-xs" style={{ color: "#0a0a0a" }} />
              </span>
            </a>
          </div>

          {/* Right: newsletter */}
          <div
            className="md:col-span-2 lg:col-span-1 rounded-md p-5 sm:p-6 flex flex-col gap-6"
            style={{ backgroundColor: "#161616" }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 border-b pb-3"
              style={{ borderColor: "rgba(245,240,224,0.2)" }}
            >
              <input
                type="email"
                placeholder="Your work email"
                className="flex-1 bg-transparent outline-none text-sm placeholder:opacity-50"
                style={{ color: "#f5f0e0" }}
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-md flex items-center justify-center"
                style={{ backgroundColor: "var(--lime-glow)" }}
                aria-label="Subscribe"
              >
                <i className="fa-solid fa-arrow-right text-xs" style={{ color: "#0a0a0a" }} />
              </button>
            </form>
            <p className="text-xs opacity-50 leading-relaxed">
              By providing this information, you agree to be kept informed about Eddy&apos;s AI Lab insights, programs, and events.
            </p>
            <p className="text-sm leading-relaxed mt-auto">
              Get field notes on AI strategy, executive coaching, and the systems we build with leaders.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ borderTop: "1px solid rgba(245,240,224,0.12)" }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/in/rogoi-edwin?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold transition hover:brightness-110"
              style={{ backgroundColor: "#0077B5", color: "#fff" }}
            >
              <i className="fa-brands fa-linkedin-in" />
              Follow me on LinkedIn
            </a>
            <a
              href="https://www.instagram.com/eddys_ai.lab?igsh=eXY4M29lZHJ6aHB5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold transition hover:brightness-110"
              style={{ backgroundColor: "#E4405F", color: "#fff" }}
            >
              <i className="fa-brands fa-instagram" />
              Follow me on Instagram
            </a>
            <a
              href="https://www.tiktok.com/@eddys_ai_lab?_r=1&_t=ZS-977yAYS6cqI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold transition hover:brightness-110"
              style={{ backgroundColor: "#FE2C55", color: "#fff" }}
            >
              <i className="fa-brands fa-tiktok" />
              Follow me on TikTok
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm opacity-60">
            <a href="#" className="hover:opacity-100 transition">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition">Terms of Service</a>
            <p>© {new Date().getFullYear()} Eddy&apos;s AI Lab. Founded by Edwin Rogoi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
