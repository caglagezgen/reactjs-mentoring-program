import { useEffect, useState } from 'react';

const useClickedOutside = (className: string): boolean => {
  const [isClickedOutside, setClickedOutside] = useState(false);

  useEffect(() => {
    const clickOutsideHandler = (e: MouseEvent) => {
      const isClickedOutsideContainer = !(e.target as HTMLElement).closest(`.${className}`);

      setClickedOutside(isClickedOutsideContainer);
    };

    document.addEventListener('mousedown', clickOutsideHandler);

    return () => document.removeEventListener('mousedown', clickOutsideHandler);
  }, []);

  return isClickedOutside;
};

export default useClickedOutside;
