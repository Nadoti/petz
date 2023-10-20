

export function convertToCurrency(currency: number) {
  return currency.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}