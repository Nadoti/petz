export function managementFee(geracaoMaisAlta: number) {
  const taxaGerencial = Math.min(geracaoMaisAlta * 0.03, 0.3);

  return 70 * taxaGerencial;
}