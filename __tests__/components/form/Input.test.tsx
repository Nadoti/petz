import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "../../../components/form/Input";

describe("Input funciona quando:", () => {
  it("call setValue with the correct value when the input is changed", () => {
    const mockSetValue = jest.fn();
    const { getByLabelText } = render(
      <Input
        label="Nome"
        name="nome"
        id="nome"
        placeholder="Digite seu nome"
        setValue={mockSetValue}
      />
    );

    const input = getByLabelText("Nome");

    fireEvent.change(input, { target: { value: "texto para testar" } }); 

    expect(mockSetValue).toHaveBeenCalledWith("texto para testar"); 
  });

  it("show the name in field", () => {
    const mockSetValue = jest.fn();
    const { getByText } = render(
      <Input 
        label="Nome"
        name="nome"
        id="nome"
        placeholder="Digite seu nome"
        setValue={mockSetValue}
      />
    )
    const input = getByText("Nome")

    expect(input).toBeInTheDocument()
  })
});