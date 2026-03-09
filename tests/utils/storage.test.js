import { expect, describe, test, beforeEach } from "vitest";
import { getUsername } from "../../js/utils/storage.js";

describe("Storage functions", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("getUsername", () => {
    test("returns the name from the user object in storage", () => {
      const user = { name: "alexander" };

      localStorage.setItem("user", JSON.stringify(user));

      expect(getUsername()).toBe("alexander");
    });

    test("returns null when no user exists in storage", () => {
      expect(getUsername()).toBe(null);
    });
  });
});
