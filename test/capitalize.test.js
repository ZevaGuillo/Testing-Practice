const { capitalize } = require("../code/capitalize");

describe("Capitalize", () => {
  test("Name ", () => {
    expect(capitalize("guillermo")).toBe("Guillermo");
  });
  test("Is Undefined", () => {
    expect(capitalize()).toBe("");
  });
  test("Is Null", () => {
    expect(capitalize(null)).toBe("");
  });
});
