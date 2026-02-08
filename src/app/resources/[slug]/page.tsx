import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "../../../components/button";
import { Container } from "../../../components/container";
import {
  get_resource_by_slug,
  get_resource_slug_list,
} from "../../../features/resources/controller/resources_controller";

type ResourceDetailProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return get_resource_slug_list().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ResourceDetailProps): Metadata {
  const resource = get_resource_by_slug(params.slug);

  if (!resource) {
    return {
      title: "Resource Not Found | Microsoft Learning Resource Hub",
    };
  }

  return {
    title: `${resource.title} | Microsoft Learning Resource Hub`,
    description: resource.description,
  };
}

export default function ResourceDetailPage({ params }: ResourceDetailProps) {
  const resource = get_resource_by_slug(params.slug);

  if (!resource) {
    notFound();
  }

  return (
    <section className="py-16">
      <Container className="space-y-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {resource.category}
          </p>
          <h1 className="font-[var(--font-display)] text-4xl font-semibold text-slate-900 sm:text-5xl">
            {resource.title}
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            {resource.description}
          </p>
          <Button href={resource.url} external>
            {resource.cta_label}
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            <h2 className="font-[var(--font-display)] text-lg font-semibold text-slate-900">
              Why this is useful
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {resource.why}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            <h2 className="font-[var(--font-display)] text-lg font-semibold text-slate-900">
              Who it&#39;s for
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {resource.who}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            <h2 className="font-[var(--font-display)] text-lg font-semibold text-slate-900">
              What you&#39;ll learn
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {resource.learn.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-3xl border border-blue-100 bg-[linear-gradient(135deg,#e6f2ff,white)] p-8 shadow-[0_20px_50px_rgba(0,120,212,0.16)]">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Continue on Microsoft Learn
              </p>
              <h2 className="font-[var(--font-display)] mt-2 text-2xl font-semibold text-slate-900">
                Ready to jump in?
              </h2>
            </div>
            <Button href={resource.url} external>
              {resource.cta_label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
