export const valuePerPokemon = 70;


export function calculateCostTotal(numberPokemon: number, generation: number): number {

  const pokemonCost = numberPokemon * valuePerPokemon;

  const managementFees = Math.min(generation * 0.03, 0.3);

  const totalCost = pokemonCost + pokemonCost * managementFees;

  return totalCost;
}


