"use client";

import { useMemo, useState } from "react";
import { Container } from "../../../components/container";
import type { ResourceCategory, ResourceItem } from "../model/resources_data";
import { ResourceCard } from "./resource_card";

type ResourcesPageProps = {
  resources: ResourceItem[];
  categories: ResourceCategory[];
};

type FilterCategory = ResourceCategory | "All";

export function ResourcesPage({ resources, categories }: ResourcesPageProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>("All");

  const filters: FilterCategory[] = ["All", ...categories];

  const filteredResources = useMemo(() => {
    if (selectedCategory === "All") {
      return resources;
    }

    return resources.filter(
      (resource) => resource.category === selectedCategory,
    );
  }, [resources, selectedCategory]);

  return (
    <div className="py-16">
      <Container className="space-y-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Curated pathways
          </p>
          <h1 className="font-[var(--font-display)] text-4xl font-semibold text-slate-900 sm:text-5xl">
            Explore Microsoft learning resources
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Filter by category to find the most relevant Microsoft-owned learning
            path for your next skill sprint.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {filters.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-[0_12px_24px_rgba(0,120,212,0.25)]"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-slate-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </Container>
    </div>
  );
}
