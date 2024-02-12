import styled from 'styled-components';
import { motion } from 'framer-motion';

import { media, rem } from '@/styles/globals';
import { ButtonBlock } from '@/components/common/Button/Button.styles';

export const Backdrop = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2048;
    padding: ${rem(24)}
`;

export const ModalBox = styled(motion.div)`
    width: 100%;
    max-width: ${rem(756)};
    height: 100%;
    max-height: 100%;
    background: var(--calguksu-modal-background);
    border-radius: ${rem(16)};
    z-index: 2049;
    overflow-y: auto;

    ${media.laptop`
     height: auto;
  `}
`;


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

export const ModalCloseButton = styled(ButtonBlock)`
    min-width: ${rem(96)};
    color: var(--calguksu-text-comment-normal);
    background-color: transparent;

    &:hover {
        background-color: transparent;
    }
`;