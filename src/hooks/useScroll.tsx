import * as React from "react";
import { useEffect } from "react";

const useScroll = () => {
  const scrollToTop = (breakpoint = 250) => {
    useEffect(() => {
      if (window.scrollY > breakpoint) {
        window.scrollTo(0, 0);
      }
    }, [breakpoint]);
  };

  return {scrollToTop}
};

export {useScroll};
