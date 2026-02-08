import Link from "next/link";
import { Button } from "../../../components/button";
import { Container } from "../../../components/container";

export default function ResourceNotFound() {
  return (
    <section className="py-20">
      <Container className="space-y-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Resource not found
        </p>
        <h1 className="font-[var(--font-display)] text-3xl font-semibold text-slate-900 sm:text-4xl">
          We couldn't find that learning path.
        </h1>
        <p className="text-lg text-slate-600">
          Try the full resources list to keep exploring Microsoft learning paths.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/resources" variant="secondary">
            Browse resources
          </Button>
          <Link href="/" className="text-sm font-semibold text-blue-700">
            Back to home
          </Link>
        </div>
      </Container>
    </section>
  );
}
