import React from 'react';
import {render, screen} from "@testing-library/react"
import Render from './Render'

describe("Rendering", () => {
  it("should render all", () => {
    render(<Render/>);
    // screen.debug();

    // screen.debug(screen.getByRole("heading"));
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getByText("udemy")).toBeTruthy();
    expect(screen.queryByText("udemys")).toBeNull();
    expect(screen.getByTestId("hoge")).toBeTruthy();
  })
})

