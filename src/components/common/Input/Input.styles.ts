import styled from 'styled-components';
import { rem } from '@/styles/globals';

export const InputContainer = styled.div<{ $invalid: boolean }>`
    position: relative;
    width: 100%;
    max-width: ${rem(393)};
    height: ${rem(70)};
    border-radius: ${rem(6)};
    background-color: var(--calguksu-box-background-color);
    border: ${rem(1)} solid var(--calguksu-box-border);
    border-color: ${props => props.$invalid ? 'var(--calguksu-colors-error)' : 'var(--calguksu-box-border)'};
`;

export const InputBlock = styled.input`
    font-size: ${rem(16)};
    font-weight: 500;
    width: 100%;
    position: relative;
    color: var(--calguksu-main-text);
    height: 100%;
    background: none;
    outline: none;
    border: none;
    padding: ${rem(16)} ${rem(26)} 0 ${rem(26)};
    z-index: 2;

    &:focus ~ label, &:valid ~ label {
        font-size: ${rem(12)};
        bottom: ${rem(42)};
    }
`;

export const InputLabel = styled.label<{ $invalid: boolean }>`
    position: absolute;
    color: ${props => props.$invalid ? 'var(--calguksu-colors-error)' : 'var(--calguksu-box-none-select)'};
    left: ${rem(26)};
    font-size: ${rem(16)};
    font-weight: 500;
    bottom: ${rem(23)};
    transition: all 200ms ease;
    user-select: none;
`;