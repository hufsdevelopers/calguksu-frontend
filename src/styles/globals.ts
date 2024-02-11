import { css, CSSProp } from 'styled-components';

export const sizes: { [key: string]: number } = {
  mobile: 764,
  laptop: 1024,
};

type Media = {
  [key in keyof typeof sizes]: (first: TemplateStringsArray, ...interpolations: any[]) => CSSProp;
};

export const media: Media = Object.keys(sizes).reduce((acc: Media, label: string) => {
  acc[label] = (first: TemplateStringsArray, ...interpolations) => css`
      @media (min-width: ${sizes[label]}px) {
          ${css(first, ...interpolations)}
      }
  `;
  return acc;
}, {} as Media);


export const rem = (size: string | number, base: number = 16): string => {
  if (typeof size === 'string') {
    if (!size.endsWith('px')) throw new Error(`'size' must end with 'px': received ${size}`);
    return `${parseInt(size, 10) / base}rem`;
  }

  return `${size / base}rem`;
};