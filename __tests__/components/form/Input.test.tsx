import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "../../../components/form/Input";

describe("Input funciona quando:", () => {
  it("deve chamar setValue com o valor correto quando o input é alterado", () => {
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
});