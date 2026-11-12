import { render, screen } from "@testing-library/react";
import CodingActivity from "./CodingActivity";

afterEach(() => vi.unstubAllGlobals());

test("renders real GitHub counts and daily contribution levels", async () => {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => ({ contributions: [
    { date: "2026-11-01", count: 4, level: 3 }, { date: "2026-11-02", count: 3, level: 2 },
  ] }) }));
  render(<CodingActivity/>);
  expect(await screen.findByRole("img", { name: /7 GitHub contributions/i })).toBeInTheDocument();
  expect(screen.getByText("2026-11-01: 4 contributions")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /view activity on GitHub/i })).toHaveAttribute("href", "https://github.com/Nevram26");
});

test("failed requests show an honest fallback and keep the GitHub link", async () => {
  vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
  render(<CodingActivity/>);
  expect(await screen.findByText(/couldn't load the contribution calendar/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /view activity on GitHub/i })).toBeInTheDocument();
});
