export function formatQuantity(value: number) {
  return value > 0 ? `Осталось ${value} шт` : 'Закончились';
}
