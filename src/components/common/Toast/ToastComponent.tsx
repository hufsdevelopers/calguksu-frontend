import React, { useEffect, useState } from 'react';
import useToast from '@/components/common/Toast/Toast.hooks';
import { ToastWrapper } from '@/components/common/Toast/Toast.styles';
import CheckIcon from '@/components/common/icon/check-icon';
import XIcon from '@/components/common/icon/x-icon';

const ToastComponent: React.FC = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (toast) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <ToastWrapper $isVisible={isVisible}>
      {toast?.type === 'success'
        ? <CheckIcon width={26} height={26} fill='#46D37B' />
        : <XIcon width={26} height={26} fill='#D34646' />}
      {toast?.message}
    </ToastWrapper>
  );
};

export default ToastComponent;