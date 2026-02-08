import type { Metadata } from "next";
import {
  get_all_resources,
  get_category_list,
} from "../../features/resources/controller/resources_controller";
import { ResourcesPage } from "../../features/resources/view/resources_page";

export const metadata: Metadata = {
  title: "Resources | Microsoft Learning Resource Hub",
  description:
    "Browse curated Microsoft learning resources for cloud, AI, developer tools, and more.",
};

export default function ResourcesIndexPage() {
  const resources = get_all_resources();
  const categories = get_category_list();

  return <ResourcesPage resources={resources} categories={categories} />;
}
