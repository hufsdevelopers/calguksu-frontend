import styled from 'styled-components';
import { rem } from '@/styles/globals';

export const TextareaBlock = styled.textarea`
    width: 100%;
    resize: none;
    color: var(--calguksu-main-text);
    font-size: ${rem(16)};
    font-weight: 500;
    padding: ${rem(16)} ${rem(26)};
    border: ${rem(1)} solid var(--calguksu-box-border);
    border-radius: ${rem(6)};

    &:focus {
        outline: none;
    }
    
    &::placeholder {
        color: var(--calguksu-box-none-select);
    }
`;