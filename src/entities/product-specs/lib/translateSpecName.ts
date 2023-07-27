import { SpecName } from '../model/types';

const specsNamesTranslate = {
  dimension: 'Размер',
  color: 'Цвет',
  generic: 'Вариант',
};

export function translateSpecName(name: SpecName) {
  return specsNamesTranslate[name];
}
