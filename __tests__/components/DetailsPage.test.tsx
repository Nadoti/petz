import React from "react";
import { render, screen } from "@testing-library/react"
import { DetailsPage } from "../../components/DetailsPage";

describe("<DetailsPage>", () => {
  it("render the DetailsPage component with title and text", () => {
    render(<DetailsPage title="Quem Somos" text="A maior rede de tratamento pokémon." />);

    const titles = screen.getAllByText("Quem Somos");
    const texts = screen.getAllByText("A maior rede de tratamento pokémon.");

    expect(titles.length).toBe(2);
    expect(texts.length).toBe(1);
  });
});
