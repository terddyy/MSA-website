import Link from "next/link";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <Container className="flex flex-col gap-6 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Microsoft Learning Resource Hub
          </p>
          <p>
            Curated by a student for students. Official Microsoft learning
            content only.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/resources" className="hover:text-slate-900">
            Browse resources
          </Link>
          <Link href="/about" className="hover:text-slate-900">
            About the creator
          </Link>
          <a
            href="https://learn.microsoft.com/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900"
          >
            Microsoft Learn
          </a>
        </div>
      </Container>
    </footer>
  );
}
