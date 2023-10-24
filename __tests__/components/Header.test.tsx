import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../../components/Header";

describe("<Header>", () => {
  it("render the Header component with links", () => {
    render(<Header />);

    const quemSomosLink = screen.getByText("Quem Somos");
    const agendarConsultaLink = screen.getByText("Agendar Consulta");

    expect(quemSomosLink).toBeInTheDocument();
    expect(agendarConsultaLink).toBeInTheDocument();
  });

  it("render the LogoNav component", () => {
    render(<Header />);

    const logoNav = screen.getByLabelText("home page");

    expect(logoNav).toBeInTheDocument();
  });
});
