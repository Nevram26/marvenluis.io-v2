import { fireEvent, render, screen } from "@testing-library/react";
import { animate, createScope, createTimer } from "animejs";
import TvImage from "./TvImage";

vi.mock("animejs", () => ({
  animate: vi.fn(() => ({ play: vi.fn(), pause: vi.fn() })),
  createTimer: vi.fn(() => ({ play: vi.fn(), pause: vi.fn() })),
  createScope: vi.fn(() => {
    const scope = {
      add: callback => { callback({ matches: { reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches } }); return scope; },
      revert: vi.fn(),
    };
    return scope;
  }),
}));

beforeEach(() => vi.clearAllMocks());
afterEach(() => { vi.restoreAllMocks(); vi.unstubAllGlobals(); });

test("project static runs only on hover or keyboard focus and cleans up on exit", () => {
  const { unmount } = render(<TvImage src="/project.png" alt="Team project" href="https://example.com" label="View team project" channel={1}/>);
  const link = screen.getByRole("link", { name: "View team project" });
  expect(screen.getByRole("img", { name: "Team project" })).toBeVisible();
  expect(createTimer).not.toHaveBeenCalled();
  fireEvent.pointerEnter(link);
  expect(createTimer).toHaveBeenCalledTimes(1);
  const hoverScope = createScope.mock.results.at(-1).value;
  fireEvent.pointerLeave(link);
  expect(hoverScope.revert).toHaveBeenCalled();
  fireEvent.focus(link);
  expect(createTimer).toHaveBeenCalledTimes(2);
  const focusScope = createScope.mock.results.at(-1).value;
  unmount();
  expect(focusScope.revert).toHaveBeenCalled();
});

test("portrait starts its static and branch animation and pauses while hidden or offscreen", () => {
  let intersect;
  const disconnect = vi.fn();
  vi.stubGlobal("IntersectionObserver", class {
    constructor(callback) { intersect = callback; }
    observe() {}
    disconnect = disconnect;
  });
  const { container, unmount } = render(<TvImage src="/portrait.png" alt="Portrait" portrait/>);
  expect(container.querySelector(".tv-branches")).toBeInTheDocument();
  const timer = createTimer.mock.results[0].value;
  expect(timer.play).not.toHaveBeenCalled();
  intersect([{ isIntersecting: true }]);
  expect(timer.play).toHaveBeenCalled();
  intersect([{ isIntersecting: false }]);
  expect(timer.pause).toHaveBeenCalled();
  const hidden = vi.spyOn(document, "hidden", "get").mockReturnValue(true);
  timer.play.mockClear();
  intersect([{ isIntersecting: true }]);
  fireEvent(document, new Event("visibilitychange"));
  expect(timer.play).not.toHaveBeenCalled();
  hidden.mockRestore();
  unmount();
  expect(disconnect).toHaveBeenCalled();
  vi.unstubAllGlobals();
});

test("reduced motion keeps gentle grain while omitting spatial animation", () => {
  const media = vi.spyOn(window, "matchMedia").mockReturnValue({ matches: true, addEventListener() {}, removeEventListener() {} });
  const { unmount } = render(<TvImage src="/portrait.png" alt="Portrait" portrait/>);
  expect(createTimer).toHaveBeenCalledWith(expect.objectContaining({ frameRate: 8 }));
  expect(animate).not.toHaveBeenCalled();
  unmount();
  media.mockRestore();
});

test("static interference follows the mouse and project TVs have no branches", () => {
  const { container } = render(<TvImage src="/project.png" alt="Project" href="https://example.com" label="Project"/>);
  const link = screen.getByRole("link", { name: "Project" });
  const screenElement = container.querySelector(".tv-screen");
  screenElement.getBoundingClientRect = () => ({ left: 0, top: 0, width: 200, height: 200 });
  fireEvent.pointerEnter(link);
  fireEvent(link, new MouseEvent("pointermove", { bubbles: true, clientX: 160, clientY: 20 }));
  createTimer.mock.calls.at(-1)[0].onUpdate();
  expect(parseFloat(screenElement.style.getPropertyValue("--signal-x"))).toBeGreaterThan(50);
  expect(parseFloat(screenElement.style.getPropertyValue("--signal-y"))).toBeLessThan(50);
  expect(container.querySelector(".tv-branches")).not.toBeInTheDocument();
});
