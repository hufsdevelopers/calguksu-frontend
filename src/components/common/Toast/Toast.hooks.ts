import { useContext } from 'react';
import ToastContext from '@/components/common/Toast/Toast.context';

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export default useToast;