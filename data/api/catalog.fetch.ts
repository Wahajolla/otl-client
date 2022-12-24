import ky from 'ky';
import { Category, Color } from '../../types/cms.types';

export const fetchColors = () =>
  ky.get('http://93.157.110.76:3000/colors').json<Color[]>();

export const fetchCategories = () =>
  ky.get('http://45.67.32.94:4002/api/category').json<Category[]>();
