import { sum } from "./sum";

test("sum without args should be 0", () => {
  expect(sum()).toBe(0);
});

test("add 1 + 2 equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
