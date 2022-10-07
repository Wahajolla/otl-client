import ky from 'ky';
import { Category, Color } from '../../types/cms.types';

export const fetchColors = () =>
  ky.get('http://93.157.110.76:3000/colors').json<Color[]>();

export const fetchCategories = () =>
  ky.get('http://164.215.102.47:4002/api/category').json<Category[]>();
