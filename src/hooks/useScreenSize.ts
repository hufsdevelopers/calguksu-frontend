import { useEffect } from 'react';

const setScreenSize = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

const useScreenSize = () => {
  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => window.removeEventListener('resize', setScreenSize);
  }, []);
};

export default useScreenSize;
