import Link from "next/link";
import { Button } from "./button";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="terd&#39;s recommended learning home"
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
            T
          </span>
          terd&#39;s recommended learning
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/resources" className="hover:text-slate-900">
            Resources
          </Link>
          <Link href="/about" className="hover:text-slate-900">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button href="/resources" variant="secondary" size="sm">
            Explore
          </Button>
          <Button href="/#featured-resources" size="sm">
            Start Learning
          </Button>
        </div>
      </Container>
    </header>
  );
}
