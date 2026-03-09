import { describe, test, expect } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";

describe("isActivePath", () => {
  test("returns true when current path matches href exactly", () => {
    expect(isActivePath("/login", "/login")).toBe(true);
  });

  test("returns true for rooth path", () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  test("returns true if current path includes the href", () => {
    expect(isActivePath("/testpath", "/testpath/123")).toBe(true);
  });

  test("returns false when paths dont match", () => {
    expect(isActivePath("/login", "/logout")).toBe(false);
  });
});
