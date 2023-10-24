import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Header } from "../../components/Header";

jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: () => ({
    pathname: "/agendar-consulta",
    push: jest.fn(),
  }),
}));

jest.mock("../../components/BtnScheduleNewAppointment", () => {
  return {
    __esModule: true,
    BtnScheduleNewAppointment: () => <button>Agendar Consulta</button>,
  };
});


describe("<Header>", () => {
  it("render the Header component with links", async () => {
    render(<Header />);

    const quemSomosLink = screen.getByText("Quem Somos");
    await waitFor(() => {
      const agendarConsultaLink = screen.getByText("Agendar Consulta");
      expect(agendarConsultaLink).toBeInTheDocument();
    });


    expect(quemSomosLink).toBeInTheDocument();
  });

  it("render the LogoNav component", () => {
    render(<Header />);

    const logoNav = screen.getByLabelText("home page");

    expect(logoNav).toBeInTheDocument();
  });
});
