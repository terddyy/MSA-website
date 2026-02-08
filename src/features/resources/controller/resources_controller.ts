import {
  resource_categories,
  resources,
  type ResourceItem,
} from "../model/resources_data";

export function get_all_resources(): ResourceItem[] {
  return resources;
}

export function get_featured_resources(): ResourceItem[] {
  return resources.filter((resource) => resource.featured);
}

export function get_resource_by_slug(slug: string): ResourceItem | undefined {
  return resources.find((resource) => resource.slug === slug);
}

export function get_resource_slug_list(): string[] {
  return resources.map((resource) => resource.slug);
}

export function get_category_list() {
  return resource_categories;
}
