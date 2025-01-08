import { describe, it, expect } from "vitest";
import { findLastIndex } from "../findLastIndex";

describe("findLastIndex", () => {
  it("should return the last index that matches the predicate", () => {
    const arr = [1, 2, 3, 4, 5];
    const predicate = (value: number) => value % 2 === 0;
    const result = findLastIndex(arr, predicate);
    expect(result).toBe(3);
  });

  it("should return -1 if no elements match the predicate", () => {
    const arr = [1, 3, 5, 7];
    const predicate = (value: number) => value % 2 === 0;
    const result = findLastIndex(arr, predicate);
    expect(result).toBe(-1);
  });

  it("should work with an empty array", () => {
    const arr: number[] = [];
    const predicate = (value: number) => value % 2 === 0;
    const result = findLastIndex(arr, predicate);
    expect(result).toBe(-1);
  });

  it("should return the correct index when multiple elements match the predicate", () => {
    const arr = [1, 2, 3, 4, 6];
    const predicate = (value: number) => value % 2 === 0;
    const result = findLastIndex(arr, predicate);
    expect(result).toBe(4);
  });

  it("should work with different types of elements", () => {
    const arr = ["a", "b", "c", "d"];
    const predicate = (value: string) => value === "c";
    const result = findLastIndex(arr, predicate);
    expect(result).toBe(2);
  });
});
