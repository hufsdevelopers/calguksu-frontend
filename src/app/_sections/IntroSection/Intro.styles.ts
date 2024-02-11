import styled from 'styled-components';
import { media, rem } from '@/styles/globals';

export const IntroImageBlock = styled.div`
    max-width: 75%;
    position: relative;
    user-select: none;
    width: 100%;

    &:before {
        content: '';
        display: block;
        padding-top: calc(85% * (451 / 440));
    }

    ${media.mobile`
      max-width: ${rem(440)};
      &:before {
        padding-top: calc(100% * (451 / 440));
      }
  `}
`;

export const IntroImage = styled.img`
    left: 50%;
    max-width: 75%;
    position: absolute;
    top: 0;
    user-select: none;
    width: 100%;
    content: var(--calguksu-main-image);
    transform: translateX(-50%);

    ${media.mobile`
      max-width: ${rem(440)};
  `}
`;

export const IntroTitle = styled.h2`
    color: var(--calguksu-main-text);
    font-size: ${rem(40)};
    font-weight: 500;
    margin-top: ${rem(-36)};
    padding: 0 ${rem(24)};
    text-align: center;
    word-break: keep-all;
    width: 100%;

    ${media.laptop`
   font-size: ${rem(49)};
  `}
`;

export const IntroSubTitle = styled.p`
    color: var(--calguksu-colors-primary-400);
    font-size: ${rem(16)};
    font-weight: 500;
    line-height: ${rem(30)};
    margin-top: ${rem(8)};
    padding: 0 ${rem(24)};
    text-align: center;
    word-break: keep-all;
    width: 100%;

    ${media.laptop`
   font-size: ${rem(17)};
  `}
`;
