import { sum } from "../sum";

test("Calculate sum of two numbers", () => {
  const result = sum(3, 5);
  expect(result).toBe(8);
});
