import { describe, expect, it } from "vitest";
import { createAvatarModel } from "../src/model.js";
import { renderAvatarSvg } from "../src/svg.js";

describe("avatar generator", () => {
  it("creates deterministic initials", () => {
    const a = createAvatarModel({ seed: "Nikhil Bheda" });
    const b = createAvatarModel({ seed: "Nikhil Bheda" });
    expect(a.initials).toBe("NB");
    expect(a.theme).toBe(b.theme);
  });

  it("renders svg output", () => {
    const model = createAvatarModel({ seed: "Developer" });
    const svg = renderAvatarSvg(model);
    expect(svg.startsWith("<?xml")).toBe(true);
    expect(svg.includes("<svg")).toBe(true);
  });
});
