import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "../../components/Footer";

describe("<Footer>", () => {
  it("render the Footer component with the correct text", () => {
    render(<Footer />);

    const textElement = screen.getByText("Todas as marcas e ilustrações utilizadas são de seus resepctivos donos.");

    expect(textElement).toBeInTheDocument();
  });
});
