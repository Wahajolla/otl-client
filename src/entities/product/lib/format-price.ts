export function formatPrice(value: Rubles, withSign = true) {
  return `${Number(value).toFixed(0)}${withSign ? ' р.' : ''}`;
}
