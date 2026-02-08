import Link from "next/link";
import { Badge } from "../../../components/badge";
import { Button } from "../../../components/button";
import { Card } from "../../../components/card";
import type { ResourceItem } from "../model/resources_data";

const accentClasses: Record<ResourceItem["accent"], string> = {
  azure: "bg-[#0078d4]",
  ai: "bg-[#0ea5e9]",
  dev: "bg-[#2563eb]",
  power: "bg-[#f97316]",
  security: "bg-[#334155]",
};

export function ResourceCard({ resource }: { resource: ResourceItem }) {
  return (
    <Card className="group flex h-full flex-col justify-between p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold text-white ${accentClasses[resource.accent]}`}
          >
            {resource.icon_label}
          </div>
          <Badge tone="info">{resource.level}</Badge>
        </div>
        <div className="space-y-2">
          <Link
            href={`/resources/${resource.slug}`}
            className="font-[var(--font-display)] text-lg font-semibold text-slate-900 transition group-hover:text-blue-700"
          >
            {resource.title}
          </Link>
          <p className="text-sm leading-6 text-slate-600">
            {resource.description}
          </p>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {resource.category}
        </p>
      </div>
      <div className="mt-6 flex justify-end">
        <Button href={resource.url} external size="sm">
          {resource.cta_label}
        </Button>
      </div>
    </Card>
  );
}
