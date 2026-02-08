import { Container } from "../../../components/container";

const reasons = [
  {
    title: "Curated for students",
    description:
      "No endless scrolling. Every module is picked for clarity, depth, and fast learning momentum.",
  },
  {
    title: "Official Microsoft-owned sources",
    description:
      "Every resource comes straight from Microsoft Learn, Azure, GitHub, and Power Platform teams.",
  },
  {
    title: "Beginner-friendly pathways",
    description:
      "We highlight the right starting points and what to learn next so you stay confident.",
  },
];

export function WhySection() {
  return (
    <section className="py-16">
      <Container className="space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Why this hub exists
          </p>
          <h2 className="font-[var(--font-display)] text-3xl font-semibold text-slate-900 sm:text-4xl">
            Guidance, not overwhelm
          </h2>
          <p className="max-w-2xl text-lg text-slate-600">
            This hub helps you focus on high-impact learning paths that map to
            real Microsoft technologies.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
