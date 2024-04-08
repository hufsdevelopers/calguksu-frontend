import styled from 'styled-components';

import { media } from '@/styles/ui.styles';

export const IntroImageBlock = styled.div`
  max-width: 100%;
  position: relative;
  user-select: none;
  width: 100%;

  &:before {
    content: '';
    display: block;
    padding-top: calc(100% * (242 / 380));
  }

  ${media.laptop`
    max-width: 611px;
    
    &:before {
      content: '';
      display: block;
      padding-top: calc(100% * (256 / 611));
    }
  `}
`;

export const IntroImage = styled.img`
  left: 0;
  max-width: 100%;
  position: absolute;
  top: 0;
  user-select: none;
  width: 100%;
  padding-left: 56px;
  content: var(--calguksu-main-mobile-image);

  ${media.laptop`
    max-width: 611px;
    padding-left: 0;
    content: var(--calguksu-main-image);
  `}
`;

export const IntroTitle = styled.h2`
  color: var(--calguksu-main-text);
  font-size: 40px;
  font-weight: 500;
  padding: 0 24px;
  text-align: center;
  word-break: keep-all;
  width: 100%;

  ${media.laptop`
    margin-top: -36px;
    font-size: 49px;
  `}
`;

export const IntroSubTitle = styled.p`
  color: var(--calguksu-colors-primary-400);
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  margin-top: 8px;
  padding: 0 24px;
  text-align: center;
  word-break: keep-all;
  width: 100%;

  ${media.laptop`
    font-size: 17px;
  `}
`;
