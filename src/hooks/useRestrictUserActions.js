// hooks/useRestrictUserActions.js
import { useEffect } from 'react';

const useRestrictUserActions = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && (e.key === '-' || e.key === '=' || e.key === '0')) ||
        (e.ctrlKey && e.key === 'NumpadSubtract') ||
        (e.ctrlKey && e.key === 'NumpadAdd') ||
        (e.ctrlKey && e.key === 'Numpad0')
      ) {
        e.preventDefault();
        return false;
      }
    };

    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);
};

export default useRestrictUserActions;