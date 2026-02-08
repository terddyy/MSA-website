import type { Metadata } from "next";
import { Button } from "../../components/button";
import { Container } from "../../components/container";

export const metadata: Metadata = {
  title: "About | Microsoft Learning Resource Hub",
  description:
    "Meet the student creator behind the Microsoft Learning Resource Hub.",
};

export default function AboutPage() {
  return (
    <section className="py-16">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            About the creator
          </p>
          <h1 className="font-[var(--font-display)] text-4xl font-semibold text-slate-900 sm:text-5xl">
            Building a clearer path for student developers
          </h1>
          <p className="text-lg text-slate-600">
            I&#39;m a student creator who wants to make Microsoft learning resources
            easier to discover, easier to trust, and easier to finish. This hub
            reflects what helped me learn faster: clear starting points, focused
            learning goals, and official Microsoft guidance.
          </p>
          <p className="text-lg text-slate-600">
            My mission is to help students navigate Microsoft Learn with
            confidence while preparing to become a Microsoft Learn Student
            Ambassador.
          </p>
          <Button href="/resources" variant="secondary">
            Explore curated resources
          </Button>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
          <h2 className="font-[var(--font-display)] text-xl font-semibold text-slate-900">
            What this hub delivers
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
              <span>Focused, beginner-friendly Microsoft learning paths.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
              <span>Clear categories for cloud, AI, and developer tools.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
              <span>Fast links to official Microsoft-owned resources.</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
