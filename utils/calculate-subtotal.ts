import { valuePerPokemon } from "./calculate-cost-total";
import { convertToCurrency } from "./convert-to-currency";

export function calculateSubtotal(numberPokemon: number) {
  return convertToCurrency(numberPokemon * valuePerPokemon);
}