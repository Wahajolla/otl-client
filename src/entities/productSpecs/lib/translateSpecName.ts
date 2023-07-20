import { ProductSpecsNames } from '../model/types';

const specsNamesTranslate = {
  dimension: 'Размер',
  color: 'Цвет',
  generic: 'Вариант',
};

export function translateSpecName(name: string) {
  return specsNamesTranslate[name];
}
