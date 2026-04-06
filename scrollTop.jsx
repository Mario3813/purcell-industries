import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const smoothScrollToTop = () => {
  const start = window.scrollY;
  const duration = 1800; 
  let startTime = null;

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime;

    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start * (1 - progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    smoothScrollToTop(); // 👈 ahora usa animación custom
  }, [pathname]);

  return null;
};

export default ScrollToTop;