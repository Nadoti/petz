export const valuePerPokemon = 70;


export function calculateCostTotal(numberPokemon: number, geracaoMaisAlta: number): number {

  const pokemonCost = numberPokemon * valuePerPokemon;

  // Calcula a taxa gerencial (com limite de 30%)
  const managementFees = Math.min(geracaoMaisAlta * 0.03, 0.3);

  // Calcula o custo total incluindo a taxa gerencial
  const totalCost = pokemonCost + pokemonCost * managementFees;

  return totalCost;
}


