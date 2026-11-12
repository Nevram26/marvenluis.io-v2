import { act, render, screen } from "@testing-library/react";
import { animate, createScope } from "animejs";
import SceneEffects from "./SceneEffects";

vi.mock("animejs", () => ({
  animate: vi.fn(() => ({ pause: vi.fn(), resume: vi.fn() })),
  createScope: vi.fn(() => {
    let construct;
    return {
      add(callback) { construct = callback; callback({ matches: { reducedMotion: false } }); return this; },
      refresh(reducedMotion) { construct({ matches: { reducedMotion } }); },
      revert() {},
    };
  }),
  engine: { pause() {}, resume() {} },
  stagger: () => 0,
  svg: { createDrawable: value => value },
  utils: { $: selector => document.querySelectorAll(selector) },
}));

test("scene effects cleanly rebuild when reduced motion changes without exposing controls", () => {
  render(<div className="myspace-page"><SceneEffects/></div>);
  const scope = createScope.mock.results[0].value;
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
  act(() => scope.refresh(true));
  animate.mockClear();
  act(() => scope.refresh(false));
  animate.mock.results.forEach(({ value }, i) => {
    expect(animate.mock.calls[i][1].autoplay).toBe(false);
    expect(value.resume).toHaveBeenCalled();
  });
  act(() => scope.refresh(true));
  animate.mock.results.forEach(({ value }) => value.resume.mockClear());
  animate.mock.results.forEach(({ value }) => expect(value.resume).not.toHaveBeenCalled());
});
