import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledToast = styled(motion.div)`
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    margin-bottom: 10px;
`;