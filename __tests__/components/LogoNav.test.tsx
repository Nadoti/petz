import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LogoNav } from "../../components/LogoNav";

describe("<LogoNav>", () => {
  it("render the LogoNav component with the correct behavior", () => {
    render(<LogoNav />);
    
    const linkElement = screen.getByLabelText("home page");

    expect(linkElement).toHaveClass("w-16");

    userEvent.hover(linkElement);

    setTimeout(() => {
      expect(linkElement).toHaveClass("w-64");
    }, 100);

    userEvent.unhover(linkElement);

    expect(linkElement).toHaveClass("w-16");
  });
});
