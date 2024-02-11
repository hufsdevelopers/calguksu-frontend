import styled from 'styled-components';
import { media, rem } from '@/styles/globals';

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${rem(24)} ${rem(24)} 0 ${rem(24)};

    ${media.laptop`
      padding: ${`${rem(72)} ${rem(72)} 0 ${rem(72)}`};
      height:auto;
  `}
`;

export const ModalTitle = styled.h2`
    color: var(--calguksu-main-text);
    font-size: ${rem(32)};
    font-weight: 600;
    line-height: normal;
`;

export const ModalSubtitle = styled.p`
    margin-top: ${rem(11)};
    color: #959595;
    font-size: ${rem(16)};
    font-weight: 500;
    line-height: ${rem(27)};
`;

export const ModalContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: ${rem(34)};

    & > div {
        max-width: 100%;
    }
;
`;

export const ModalTextareaCounter = styled.p`
    margin-top: ${rem(10)};
    color: #B4B4B4;
    font-size: ${rem(14)};
    font-weight: 500;
    line-height: normal;
    text-align: end;
`;

export const ModalButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${rem(37)};
    padding-bottom: ${rem(24)};
    gap: ${rem(9)};

    ${media.laptop`
    padding-bottom: ${rem(50)};
    justify-content: flex-end;
  `}
`;

export const ModalCloseButton = styled.button`
    min-width: ${rem(117)};
    color: var(--calguksu-text-comment-normal);
    height: ${rem(52)};
    font-size: ${rem(18)};
    font-weight: 600;
`;

export const ModalPositiveButton = styled(ModalCloseButton)`
    color: var(--calguksu-colors-white);
    border-radius: ${rem(8)};
    background-color: var(--calguksu-colors-blue-500);
`;