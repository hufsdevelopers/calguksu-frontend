import { createContext } from 'react';

export interface Toast {
  message: string;
  type: 'success' | 'error';
  duration: number;
}

interface ToastContextProps {
  showToast: (message: string, type: 'success' | 'error', duration?: number) => void;
  toast: Toast | null;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export default ToastContext;