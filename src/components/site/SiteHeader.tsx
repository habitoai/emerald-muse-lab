import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import logoAsset from "@/assets/eddys-logo.png.asset.json";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

type NavKey = "about" | "faq" | "contact";

const NAV: { key: NavKey; label: string; href: string; isHash?: boolean }[] = [
  { key: "about", label: "About", href: "/about" },
  { key: "faq", label: "FAQ", href: "/#faq", isHash: true },
  { key: "contact", label: "Contact", href: "/contact" },
];

export function SiteHeader({ active }: { active?: NavKey }) {
  return (
    <header className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-8 flex items-center justify-between">
      <Link
        to="/"
        className="logo-text font-semibold tracking-tight inline-flex items-center gap-3 leading-none"
      >
        <img src={logoAsset.url} alt="Eddys AI Lab" className="h-9 w-auto block shrink-0 relative top-[2px]" />
        <span className="text-3xl leading-none relative top-[3px]">Eddys AI Lab</span>
      </Link>

      {/* Desktop */}
      <nav className="hidden md:flex items-center gap-10">
        {NAV.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className={`nav-link text-base hover:opacity-70 transition${
              active === item.key ? " underline underline-offset-8" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile */}
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="md:hidden p-2 -mr-2 cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" style={{ color: "var(--emerald-pine)" }} />
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full sm:w-[360px] border-[var(--green-tea)]"
          style={{ backgroundColor: "var(--background)" }}
        >
          <nav className="flex flex-col gap-8 mt-12">
            {NAV.map((item) => {
              const linkClass = `nav-link text-2xl font-medium hover:opacity-70 transition${
                active === item.key ? " underline underline-offset-8" : ""
              }`;
              return (
                <SheetClose asChild key={item.key}>
                  {item.isHash ? (
                    <a href={item.href} className={linkClass}>
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  )}
                </SheetClose>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
