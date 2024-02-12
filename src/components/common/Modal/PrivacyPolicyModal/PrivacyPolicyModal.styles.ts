import styled from 'styled-components';
import { rem } from '@/styles/globals';

export const PolicyContent = styled.div`
    color: var(--calguksu-button-navigation-text-color);
    font-size: ${rem(16)};
    line-height: ${rem(30)};

    & strong {
        font-weight: 600;
    }

    & a {
        color: var(--calguksu-colors-gray-600);
        text-decoration: underline;
    }

    & ul {
        padding-left: ${rem(20)};
    }
`;