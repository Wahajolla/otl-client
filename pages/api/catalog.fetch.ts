import ky from 'ky';
import { Color } from '../../types/cms.types';

export const fetchColors = () =>
  ky.get('http://93.157.110.76:3000/colors').json<Color[]>();
