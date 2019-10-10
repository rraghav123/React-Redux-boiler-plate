/* global describe */
/* global test */

import * as SampleUtils from "../../src/utils/sample";

describe("Sample Utils: add Numbers", () => {
  test("add two valid numbers", () => {
    expect(SampleUtils.addNumbers(1, 2)).toBe(3);
    expect(SampleUtils.addNumbers(1.5, 2.1)).toBe(3.6);
    expect(SampleUtils.addNumbers("2", 2)).toBe(4);
    expect(SampleUtils.addNumbers("2", "2")).toBe(4);
  });
  test("add two invalid numbers", () => {
    expect(SampleUtils.addNumbers()).toBe(0);
    expect(SampleUtils.addNumbers(2)).toBe(2);
    expect(SampleUtils.addNumbers(null)).toBe(0);
    expect(SampleUtils.addNumbers(2, null)).toBe(2);
    expect(SampleUtils.addNumbers(2, undefined)).toBe(2);
    expect(SampleUtils.addNumbers(undefined, undefined)).toBe(0);
  });
});
