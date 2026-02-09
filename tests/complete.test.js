const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

test("Check for negative subtotal", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal"
  );
});

test("if subtotal >= 1000, applies 5% discount", () => {
  expect(calculateFinalAmount(1000)).toBe(950);
});

test("10% discount, SAVE10", () => {
  expect(calculateFinalAmount(1000, "SAVE10")).toBe(850);
});

test("FLAT50 boundary case", () => {
  expect(calculateFinalAmount(40, "FLAT50")).toBe(0);
});

test("no coupon", () => {
  expect(calculateFinalAmount(40)).toBe(40);
});

test("case insensitive coupon", () => {
  expect(calculateFinalAmount(500, "save10")).toBe(450);
});
