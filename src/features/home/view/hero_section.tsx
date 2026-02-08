import { Button } from "../../../components/button";
import { Container } from "../../../components/container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-white">
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-blue-100/80 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl" />
      </div>
      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Microsoft Learning Resource Hub
            </p>
            <h1 className="font-[var(--font-display)] text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
              Learn Microsoft Skills, Curated for Students
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              Hand-picked Microsoft Learn resources for cloud, AI, and developer
              tools. Clear pathways, trusted sources, and beginner-friendly
              guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/#featured-resources" size="md">
                Start Learning on Microsoft Learn
              </Button>
              <Button href="/resources" variant="secondary" size="md">
                Explore Curated Resources
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/hero-image.png"
              alt="Student using a laptop"
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-2xl object-cover shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
