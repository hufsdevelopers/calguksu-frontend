import styled from 'styled-components';
import { rem } from '@/styles/globals';

export const CompleteText = styled.p`
    color: var(--calguksu-main-text);
    text-align: center;
    font-size: ${rem(16)};
    font-weight: 500;
    line-height: ${rem(25)};
    margin-top: ${rem(19)};
`;

export const CompleteInnerHighlight = styled.span`
    background-color: var(--calguksu-text-highlight);
`;