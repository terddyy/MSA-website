import { Button } from "../../../components/button";
import { Container } from "../../../components/container";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#e6f2ff,white)] py-16">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-200/70 blur-3xl" />
      <Container className="relative">
        <div className="rounded-3xl border border-blue-100 bg-white/80 p-10 shadow-[0_20px_50px_rgba(0,120,212,0.16)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Ready to start?
              </p>
              <h2 className="font-[var(--font-display)] text-3xl font-semibold text-slate-900 sm:text-4xl">
                Start learning today
              </h2>
              <p className="max-w-xl text-lg text-slate-600">
                Dive into official Microsoft learning paths that keep you moving
                forward with confidence.
              </p>
            </div>
            <Button href="/#featured-resources" size="md">
              Start Learning Today
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
