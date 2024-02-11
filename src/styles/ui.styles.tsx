import styled from 'styled-components';
import { rem, media } from '@/styles/globals';

export const GradientOval = styled.div`
    background: var(--calguksu-main-gradient);
    border-radius: ${rem(2387)};
    filter: blur(${rem(100)});
    height: 100%;
    left: -10%;
    opacity: 0.3;
    position: fixed;
    top: -50%;
    width: 120%;
`;

export const SectionInnerContainer = styled.div`
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: auto;
    padding: ${rem(80)} 0 ${rem(40)} 0;

    ${media.laptop`
      padding: ${`${rem(118)} 0 ${rem(40)} 0`};
  `}
`;

export const SectionContentColumn = styled.div`
    display: flex;
    width: 100%;
    max-width: ${rem(393)};
    padding: 0 ${rem(24)};
    flex-direction: column;
    gap: ${rem(31)};
`;

export const SectionContentTitle = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: ${rem(10)};

    & p {
        color: var(--calguksu-main-text);
        font-size: ${rem(24)};
        font-weight: 500;
    }
`;

export const SectionComment = styled.p`
    color: var(--calguksu-text-comment-normal);
    font-size: ${rem(13)};
    font-weight: 500;
    margin-top: ${rem(-10)};
    text-align: center;
    word-break: keep-all;
`;

export const SectionCommentHighlight = styled.span`
    color: var(--calguksu-text-comment-link);
    font-size: ${rem(13)};
    font-weight: 500;
    cursor: pointer;
    text-decoration: underline;
`;

export const ErrorTitle = styled.p`
    font-size: ${rem(20)};
    font-weight: 500;
    color: var(--calguksu-main-text);
    margin-top: ${rem(72)};
`;