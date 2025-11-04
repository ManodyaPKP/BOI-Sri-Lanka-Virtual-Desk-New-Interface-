// hooks/useRestrictUserActions.js
import { useEffect } from 'react';

const useRestrictUserActions = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e) => {
      // Prevent zoom shortcuts (Ctrl+Plus, Ctrl+Minus, Ctrl+0)
      if (
        (e.ctrlKey && (e.key === '-' || e.key === '=' || e.key === '0')) ||
        (e.ctrlKey && e.key === 'NumpadSubtract') ||
        (e.ctrlKey && e.key === 'NumpadAdd') ||
        (e.ctrlKey && e.key === 'Numpad0')
      ) {
        e.preventDefault();
        return false;
      }

      // Linux-specific: Prevent Super key (Windows key) combinations that might open system menus
      if (e.metaKey) {
        // On Linux, metaKey is typically the Super/Windows key
        e.preventDefault();
        return false;
      }

      // Linux-specific: Prevent Alt key combinations for window management
      if (e.altKey && (e.key === 'Tab' || e.key === 'F4')) {
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

    // Additional protection for text selection and copying on Linux
    const handleSelectStart = (e) => {
      e.preventDefault();
      return false;
    };

    const handleCopy = (e) => {
      e.preventDefault();
      return false;
    };

    const handleCut = (e) => {
      e.preventDefault();
      return false;
    };

    const handlePaste = (e) => {
      e.preventDefault();
      return false;
    };

    // Apply event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('paste', handlePaste);

    // Additional CSS to prevent text selection
    const originalUserSelect = document.body.style.userSelect;
    document.body.style.userSelect = 'none';

    return () => {
      // Clean up event listeners
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('paste', handlePaste);
      
      // Restore original userSelect style
      document.body.style.userSelect = originalUserSelect;
    };
  }, []);
};

export default useRestrictUserActions;