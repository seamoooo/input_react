import React from "react";
import { render, screen, act,renderHook } from "@testing-library/react"
import { useCounter }  from "./useCounter"

describe("use Counter custom hooks", () => {
  it("should increment by 1", () => {
    const {result} = renderHook(()=> useCounter(3))
    expect(result.current.count).toBe(3)

    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(4)
  });

  it("should decrement by 1", () => {
    const {result} = renderHook(()=> useCounter(3))
    expect(result.current.count).toBe(3)

    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(2)
  });

  it("should double by 1", () => {
    const {result} = renderHook(()=> useCounter(3))
    expect(result.current.count).toBe(3)

    act(() => {
      result.current.doubule()
    })
    expect(result.current.count).toBe(6)
  });


}) 
