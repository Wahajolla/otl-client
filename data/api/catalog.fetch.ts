import ky from 'ky';
import { Category, CMSCategory, Color } from '../../types/cms.types';
import { API } from './api.base';

// export const fetchColors = () => ky.get('categories/').json<Category[]>();

export const fetchCategories = () => API.get('categories').json<CMSCategory>();

export const fetchCategory = (catId: number) =>
  API.get('categories/' + 1).json<Category>();
