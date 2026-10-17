import type { MetadataRoute } from "next";
import { profile, projects } from "@/lib/portfolio";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.url, priority: 1 },
    ...projects.map((project) => ({
      url: `${profile.url}/projects/${project.slug}`,
      priority: 0.8,
    })),
  ];
}
