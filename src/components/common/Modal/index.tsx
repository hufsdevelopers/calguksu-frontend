import { ReactNode, useEffect, MouseEvent } from 'react';

import { AnimatePresence } from 'framer-motion';
import { Backdrop, ModalBox } from '@/components/common/Modal/Modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  disableBackdropClick?: boolean;
  disableEscapeKeyDown?: boolean;
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: 8, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Modal = ({
                 isOpen,
                 onClose,
                 children,
                 disableBackdropClick = false,
                 disableEscapeKeyDown = false,
               }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !disableEscapeKeyDown) onClose();
    };

    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, disableEscapeKeyDown]);

  const handleBackdropClick = () => {
    if (!disableBackdropClick) onClose();
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <Backdrop
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleBackdropClick}
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