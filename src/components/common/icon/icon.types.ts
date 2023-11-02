import { SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGElement> {
  size?: number;
  width?: number;
  height?: number;
  fill?: any;
  stroke?: any;
  type?: 'fill' | 'stroke';
}