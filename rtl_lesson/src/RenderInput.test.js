import React from "react";
import { render, screen, } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import RenderInput  from "./RenderInput"


describe("Rendering" , ()=> {
  it ("should render all the element correctly" , () => {
    render(<RenderInput/>)
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
  })
})

describe("input on change event", ()=>{
  it("Should update input value correctly", async() => {
    render(<RenderInput/>);
    const inputValue = screen.getByPlaceholderText("Enter")
    await userEvent.type(inputValue, 'test')
    
    expect(inputValue.value).toBe("test")
  })
})

describe("Console button conditionally trigged", () => {
  it("should not trigger output function", async() => {
    // 関数自体の呼び出しのテストを行うことができる
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole}/>)
    await userEvent.click(screen.getByRole("button"))
    expect(outputConsole).not.toHaveBeenCalled()
  })

  it("should Trigger Output function", async() => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole}/>)
    const inputValue = screen.getByPlaceholderText("Enter")
    await userEvent.type(inputValue, "test")
    
    expect(inputValue.value).toBe("test")
  })
})
