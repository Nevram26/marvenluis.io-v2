import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, expect, test, vi } from "vitest";
import HomePage from "./page";
import { projects } from "@/lib/portfolio";
import { generateMetadata, generateStaticParams } from "./projects/[slug]/page";
import sitemap from "./sitemap";
import robots from "./robots";

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string | { src: string }; alt: string }) => (
    <img src={typeof src === "string" ? src : src.src} alt={alt} />
  ),
}));
afterEach(cleanup);

test("renders one clear heading and recruiter-focused sections", () => {
  render(<HomePage />);
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  for (const id of ["work", "experience", "about", "contact"])
    expect(document.getElementById(id)).toBeTruthy();
  expect(
    screen.queryByText(/Days I Code|Contribution Activity/),
  ).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Download résumé/ })).toHaveAttribute(
    "href",
    "/Marven_Luis_Resume.pdf",
  );
});

test("links every featured project to a generated case study", () => {
  render(<HomePage />);
  expect(generateStaticParams()).toEqual(
    projects.map((project) => ({ slug: project.slug })),
  );
  expect(new Set(projects.map((project) => project.slug)).size).toBe(
    projects.length,
  );
  for (const project of projects)
    expect(
      screen.getByRole("link", { name: `Read ${project.name} case study` }),
    ).toHaveAttribute("href", `/projects/${project.slug}`);
});

test("provides distinct metadata and crawlable project URLs", async () => {
  for (const project of projects) {
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: project.slug }),
    });
    expect(metadata.title).toContain(project.name);
    expect(metadata.alternates?.canonical).toBe(`/projects/${project.slug}`);
  }
  expect(sitemap()).toHaveLength(projects.length + 1);
  expect(robots().sitemap).toBe("https://marvenluis.io/sitemap.xml");
});
