import { timeFormat } from "../helpers/timeformat";

test("timeFormat for 825ms", () => {
  const time = 825;
  const result = timeFormat(time);
  expect(result).toBe("0s 825ms");
})

test("timeFormat for 2925ms", () => {
  const time = 2925;
  const result = timeFormat(time);
  expect(result).toBe("2s 925ms");
})

test("timeFormat for 0ms", () => {
  const time = 0;
  const result = timeFormat(time);
  expect(result).toBe("0s 0ms");
})

test("timeFormat for -20ms", () => {
  const time = -20;
  const result = timeFormat(time);
  expect(result).toBe("time should be a mumber and positive including 0");
})

test("timeFormat for string x", () => {
  const time = "x";
  const result = timeFormat(time);
  expect(result).toBe("time should be a mumber and positive including 0");
})