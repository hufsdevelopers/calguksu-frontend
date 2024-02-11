import { ReactNode } from 'react';

import { AnimatePresence } from 'framer-motion';
import { Backdrop, ModalBox } from '@/components/common/Modal/Modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: 8, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <Backdrop
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <ModalBox
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </ModalBox>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;