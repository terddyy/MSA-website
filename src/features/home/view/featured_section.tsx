import { Container } from "../../../components/container";
import { get_featured_resources } from "../../resources/controller/resources_controller";
import { ResourceCard } from "../../resources/view/resource_card";

export function FeaturedSection() {
  const featuredResources = get_featured_resources();

  return (
    <section id="featured-resources" className="bg-slate-50 py-16">
      <Container className="space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Featured resources
          </p>
          <h2 className="font-[var(--font-display)] text-3xl font-semibold text-slate-900 sm:text-4xl">
            Start with the essentials
          </h2>
          <p className="max-w-2xl text-lg text-slate-600">
            These paths are designed for beginners who want fast wins, clear
            explanations, and official Microsoft guidance.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredResources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </Container>
    </section>
  );
}
