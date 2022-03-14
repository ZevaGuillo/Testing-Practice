const Calculator = require("../code/calculator");

describe("Calculator basic operations", () => {
  let calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  test("Add", () => {
    expect(calculator.add(1, 2)).toEqual(3);
  });
  test("Subtract", () => {
    expect(calculator.subtract(5, 2)).toEqual(3);
  });
  test("Divide", () => {
    expect(calculator.divide(15, 5)).toBeCloseTo(3);
  });
  test("Multiply", () => {
    expect(calculator.multiply(1, 3)).toEqual(3);
  });
  test("Add when is undefined", () => {
    expect(calculator.add()).toBe(NaN);
  });
  test("Subtract when is undefined", () => {
    expect(calculator.subtract()).toBe(NaN);
  });
  test("Divide when is undefined", () => {
    expect(calculator.divide()).toBe(NaN);
  });
  test("Multiply when is undefined", () => {
    expect(calculator.multiply()).toBe(NaN);
  });
});
