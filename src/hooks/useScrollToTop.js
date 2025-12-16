import { useEffect, useCallback } from 'react';

const useScrollToTop = (options = {}) => {
  const {
    smooth = true,
    duration = 600,
    triggerOnMount = true,
    dependencies = []
  } = options;

  const smoothScrollTo = useCallback((element, to, scrollDuration) => {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const val = Math.easeInOutQuad(currentTime, start, change, scrollDuration);
      element.scrollTop = val;
      if (currentTime < scrollDuration) {
        setTimeout(animateScroll, increment);
      } 
    };

    Math.easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    animateScroll();
  }, []);

  const scrollToTop = useCallback(() => {
    if (smooth) {
      smoothScrollTo(document.documentElement, 0, duration);
    } else {
      window.scrollTo(0, 0);
    }
  }, [smooth, duration, smoothScrollTo]);

  // serialize dependencies to avoid spreading into the effect dependency array
  const depsString = JSON.stringify(dependencies);

  useEffect(() => {
    if (triggerOnMount) {
      scrollToTop();
    }
  }, [scrollToTop, triggerOnMount, depsString]);

  return scrollToTop;
};

export default useScrollToTop;