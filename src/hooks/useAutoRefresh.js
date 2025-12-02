import { useEffect, useRef } from 'react';

const useAutoRefresh = (timeoutMinutes = 3) => {
  const inactivityTimer = useRef(null);

  useEffect(() => {
    const resetInactivityTimer = () => {
      // Clear existing timer
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
      
      // Set new timer
      inactivityTimer.current = setTimeout(() => {
        // Refresh the page
        window.location.reload();
      }, timeoutMinutes * 60 * 1000); // Convert minutes to milliseconds  
    };

    // Activity detection function
    const handleUserActivity = () => {
      resetInactivityTimer();
    };

    // Events that indicate user activity
    const events = [
      'mousedown', 'mousemove', 'keypress', 'scroll', 
      'touchstart', 'click', 'touchmove', 'wheel'
    ];

    // Add event listeners
    events.forEach(event => {
      document.addEventListener(event, handleUserActivity, { passive: true });
    });

    // Start the initial timer
    resetInactivityTimer();

    // Cleanup
    return () => {
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
      events.forEach(event => {
        document.removeEventListener(event, handleUserActivity);
      });
    };
  }, [timeoutMinutes]);
};

export default useAutoRefresh;