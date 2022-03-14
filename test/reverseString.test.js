const { reverseString } = require("../code/reverseString");

describe("Reverse String", () => {
  test("Name ", () => {
    expect(reverseString("guillermo")).toBe("omrelliug");
  });
  test("Is Undefined", () => {
    expect(reverseString()).toBe("");
  });
  test("Is Null", () => {
    expect(reverseString(null)).toBe("");
  });
});
