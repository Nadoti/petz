export function managementFee(geracaoMaisAlta: number) {
  // Calcula a taxa gerencial (com limite de 30%)
  const taxaGerencial = Math.min(geracaoMaisAlta * 0.03, 0.3);

  return 70 * taxaGerencial;
}