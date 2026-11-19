vi.mock("./lib/kit", () => ({ mountKit: () => Promise.resolve() }));
import {profile} from "./content/site";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

test("home answers the recruiter questions above the fold", () => {
  renderAt("/");
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Marven Luis/i);
  expect(screen.getAllByRole("link", { name: /read my resume/i })[0]).toHaveAttribute("href", "/Marven-Luis-resume.pdf");
  expect(screen.getAllByRole("link", { name: /email me/i })[0]).toHaveAttribute("href", expect.stringMatching(/^mailto:/));
});

test("Esca links to its teaser and the old case study returns to work", () => {
  Element.prototype.scrollIntoView = vi.fn();
  renderAt("/work/esca");
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Marven Luis/);
  expect(screen.getByRole("link", { name: /visit the Esca website/i })).toHaveAttribute("href", "https://www.esca-agri.com/");
  expect(screen.queryByText(/read the case study/i)).not.toBeInTheDocument();
  expect(screen.getByText(/projects I contributed to as part of a team/i)).toBeInTheDocument();
});

 test("profile shows the first four projects and omits music until supplied", () => {
 renderAt("/");
 expect([...document.querySelectorAll("#top4 .friend h3")].map(el=>el.textContent)).toEqual(["VoltGuard","TB treatment outcome prediction","Cache Game","Exit-interview platform"]);
 expect(document.querySelectorAll("#top4 .tv-screen__image")).toHaveLength(4);
 expect(screen.getByText(/I work out/)).toBeInTheDocument();
 expect(screen.queryByText("Now playing")).not.toBeInTheDocument();
 expect(document.querySelector("#who")).toHaveTextContent("Who I");
 expect(screen.getByRole("link", {name: /skip to content/i})).toHaveAttribute("href", "#top");
 });

test("supplied bands appear in the profile and interests",()=>{profile.bands=["A","B","C"];renderAt("/");expect(screen.getAllByText("Now playing").length).toBeGreaterThan(0);expect(screen.getAllByText("A, B, C")[0]).toBeInTheDocument();profile.bands=[];});

test("header contains only the centered logo and effects have no pause button", () => {
  renderAt("/");
  expect(document.querySelectorAll(".constellation")).toHaveLength(3);
  expect(screen.queryByRole("button", { name: /effects/i })).not.toBeInTheDocument();
  expect(document.querySelector("header nav")).not.toBeInTheDocument();
  expect(document.querySelector("header .nav__actions")).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Marven Luis home" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Currently building" })).not.toBeInTheDocument();
});

test("reduced motion leaves constellations and stars still", () => {
  const previous = window.matchMedia;
  window.matchMedia = query => ({...previous(query), matches:query.includes("prefers-reduced-motion")});
  try {
    renderAt("/");
    expect(document.querySelector(".constellation polyline").getAttribute("stroke-dasharray")).toBeNull();
    expect(document.querySelector(".scene-star").style.transform).toBe("");
  } finally { window.matchMedia = previous; }
});

test("recruiters see each job's top contributions without expanding anything", () => {
  renderAt("/");
  const jobs = [...document.querySelectorAll("#work .space-job")];
  expect(jobs).toHaveLength(3);
  for (const job of jobs) expect(job.querySelectorAll(":scope > ul > li").length).toBeGreaterThan(0);
  expect(jobs[0].querySelector(":scope > ul")).toHaveTextContent(/tenant isolation/);
  expect(document.querySelector("#work")).toHaveTextContent(/Trained newly onboarded interns on MetaWatt's AI-assisted development workflows/);
});

test("skills and interests carry real content only", () => {
  renderAt("/");
  expect(document.querySelector("#skills")).toHaveTextContent(/NestJS/);
  const interests = document.querySelector("#interests").textContent;
  expect(interests).not.toMatch(/Reading|Travel/);
  expect(interests).toMatch(/Music/);
});

test("page copy has no coaching wording and no em dashes", () => {
  renderAt("/");
  const text = document.body.textContent;
  expect(text).not.toMatch(/coach/i);
  expect(text).not.toContain("—");
});
