export function formatPrice(value: Rubles, withSign = true) {
  return `${withSign ? '₽' : ''}${Number(value / 100).toFixed(0)}`;
}
