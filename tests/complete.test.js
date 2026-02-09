const { calculateFinalAmount } = require("../src/pricing");

// 1. Negative Subtotal
test("Check for negative subtotal", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT.")).toThrow(
    "Invalid subtotal"
  );
});

// 2. if subtotal>=100 then apply 5% discount
test("if subtotal >= 1000, applies 5% discount", () => {
  expect(calculateFinalAmount(1000)).toBe(950);
});

// 3. apply save10
test("10% discount, SAVE10", () => {
  expect(calculateFinalAmount(1000, "SAVE10")).toBe(850);
});

// 4. apply flat50
test("FLAT50 boundary case", () => {
  expect(calculateFinalAmount(40, "FLAT50")).toBe(0);
});

// 5. No Coupon
test("no coupon", () => {
  expect(calculateFinalAmount(40)).toBe(40);
});

// 6. case insensitive coupon
test("case insensitive coupon", () => {
  expect(calculateFinalAmount(500, "save10")).toBe(450);
});
