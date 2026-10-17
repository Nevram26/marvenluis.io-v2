import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, expect, test } from "vitest";
import { MobileNav } from "./mobile-nav";

afterEach(cleanup);
test("mobile sheet opens, closes with Escape, and restores focus", async () => {
  const user = userEvent.setup();
  render(<MobileNav resumeUrl="/Marven_Luis_Resume.pdf" />);
  const trigger = screen.getByRole("button", { name: "Open navigation" });
  await user.click(trigger);
  expect(screen.getByRole("dialog")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute(
    "href",
    "/#work",
  );
  await user.keyboard("{Escape}");
  await waitFor(() =>
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
  );
  expect(trigger).toHaveFocus();
});

test("choosing a section closes the navigation", async () => {
  const user = userEvent.setup();
  render(<MobileNav resumeUrl="/Marven_Luis_Resume.pdf" />);
  await user.click(screen.getByRole("button", { name: "Open navigation" }));
  await user.click(screen.getByRole("link", { name: "About" }));
  await waitFor(() =>
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
  );
});
