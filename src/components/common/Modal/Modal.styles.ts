import styled from 'styled-components';
import { motion } from 'framer-motion';

import { media, rem } from '@/styles/globals';

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