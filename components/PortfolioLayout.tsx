import Link from "next/link";
import { asset } from "@/lib/site-config";

const navItems = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

type PortfolioLayoutProps = {
  children: React.ReactNode;
};

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen lg:flex lg:gap-6 lg:p-6">
      <aside className="hidden lg:sticky lg:top-6 lg:flex lg:h-[calc(100vh-3rem)] lg:w-[22rem] lg:flex-col lg:items-center lg:justify-center lg:rounded-3xl lg:border lg:border-[#dbe3ef] lg:bg-white/80 lg:px-10 lg:py-12 lg:text-center lg:shadow-[0_20px_50px_rgba(15,23,42,0.08)] lg:backdrop-blur-xl">
        <img
          src={asset("/assets/profile-1.jpg")}
          alt="Profile Picture"
          className="mb-6 h-48 w-48 rounded-3xl object-cover shadow-[0_18px_35px_rgba(37,99,235,0.2)]"
        />
        <div>
          <h1 className="mb-3 text-3xl font-semibold tracking-tight text-[#1d4ed8]">Grace Collamat</h1>
          <p className="text-base leading-relaxed text-[#334155]">
            QA Tester with 5 years of hands-on experience in agile environments,
            focused on maintaining high product quality and supporting smooth,
            bug-free releases through strong team collaboration.
          </p>
        </div>
      </aside>

      <main className="w-full rounded-none border-0 bg-transparent px-4 pb-8 pt-4 lg:h-[calc(100vh-3rem)] lg:overflow-y-auto lg:rounded-3xl lg:border lg:border-[#dbe3ef] lg:bg-white/70 lg:px-8 lg:pb-10 lg:pt-6 lg:shadow-[0_20px_50px_rgba(15,23,42,0.08)] lg:backdrop-blur-xl">
        <header className="rounded-3xl border border-[#dbe3ef] bg-white/90 px-6 py-8 text-center shadow-sm lg:hidden">
          <img
            src={asset("/assets/profile-1.jpg")}
            alt="Profile Picture"
            className="mx-auto mb-4 h-32 w-32 rounded-3xl object-cover shadow-[0_12px_26px_rgba(37,99,235,0.2)]"
          />
          <h1 className="mb-2 text-2xl font-semibold tracking-tight text-[#1d4ed8]">Grace Collamat</h1>
          <p className="text-sm leading-relaxed text-[#334155]">
            QA Tester with 5 years of hands-on experience in agile environments,
            focused on maintaining high product quality and supporting smooth,
            bug-free releases through strong team collaboration.
          </p>
        </header>

        <nav className="sticky top-0 z-20 mt-4 flex flex-wrap justify-center gap-2 rounded-2xl border border-[#dbe3ef] bg-white/95 px-3 py-3 text-sm font-medium text-slate-600 shadow-sm backdrop-blur lg:mt-0 lg:gap-3 lg:px-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="app-nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="app-main mt-6 space-y-6">{children}</div>

        <footer className="mt-10 rounded-2xl border border-[#dbe3ef] bg-white/95 py-4 text-gray-700">
          <div className="text-center text-xs text-gray-500">
            &copy; 2025 Grace Collamat. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
