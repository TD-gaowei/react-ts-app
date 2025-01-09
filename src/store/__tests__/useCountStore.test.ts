// import { describe, it, expect, beforeEach } from "vitest";
import { act, renderHook } from "@testing-library/react-hooks";
import { useCountStore } from "../useCountStore";

// 使用zustand写的方法本质上是Hook,按照Hook的测试方式来测试

describe("useCountStore", () => {
  beforeEach(() => {
    const { result } = renderHook(() => useCountStore());
    act(() => {
      result.current.reset();
    });
  });

  it("should initialize with count 0", () => {
    const { result } = renderHook(() => useCountStore());
    expect(result.current.count).toBe(0);
  });

  it("should increment count", () => {
    const { result } = renderHook(() => useCountStore());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it("should decrement count", () => {
    const { result } = renderHook(() => useCountStore());
    act(() => {
      result.current.increment();
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });

  it("should reset count", () => {
    const { result } = renderHook(() => useCountStore());
    act(() => {
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });

  it("should increment count asynchronously", async () => {
    const { result } = renderHook(() => useCountStore());
    await act(async () => {
      await result.current.incrementAsync();
    });
    expect(result.current.count).toBe(1);
  });

  it("should decrement count asynchronously", async () => {
    const { result } = renderHook(() => useCountStore());
    await act(async () => {
      await result.current.increment();
      await result.current.decrementAsync();
    });
    expect(result.current.count).toBe(0);
  });
});
