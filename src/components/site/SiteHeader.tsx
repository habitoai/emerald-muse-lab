import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/eddys-logo.png.asset.json";

type NavKey = "works" | "journal" | "about" | "faq" | "contact";

const NAV: { key: NavKey; label: string; href: string }[] = [
  { key: "works", label: "Works", href: "/gallery" },
  { key: "journal", label: "Journal", href: "/journal" },
  { key: "about", label: "About", href: "/about" },
  { key: "faq", label: "FAQ", href: "/#faq" },
  { key: "contact", label: "Contact", href: "/#contact" },
];

export function SiteHeader({ active }: { active?: NavKey }) {
  return (
    <header className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-8 flex items-center justify-between">
      <Link
        to="/"
        className="logo-text font-semibold tracking-tight flex items-center gap-3 leading-none"
      >
        <img src={logoAsset.url} alt="Eddys AI Lab" className="h-10 w-auto block" />
        <span className="text-2xl leading-none">eddys ai lab</span>
      </Link>
      <nav className="hidden md:flex items-center gap-10">
        {NAV.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className={`nav-link text-base opacity-90 hover:opacity-60 transition-opacity duration-200 ease-out${
              active === item.key ? " underline underline-offset-8" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
