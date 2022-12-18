import React from "react";
import { render, screen, } from "@testing-library/react"
import List  from "./List"

describe('Renderling the list with props', () => {
  it("should render no data ! when no daa proped", ()=> {
    render(<List/>);
    expect(screen.getByText("No data")).toBeInTheDocument();
  });

  it("should render list item correctly", () => {
    const dummyData = [
      {id:1, item:"React dummy"},
      {id:2, item:"Angular dummy"},
      {id:3, item:"Vue dummy"},
    ]
    render(<List freamworks={dummyData}/>);

    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((ele) => ele.textContent)
    const dummyItems = dummyData.map((ele)=> ele.item)
    expect(frameworkItems).toEqual(dummyItems);
    // getByはnulに対してエラーを返すので、queryBy
    expect(screen.queryByText("No data")).toBeNull();
  })
});

