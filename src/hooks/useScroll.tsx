import * as React from "react";
import { useEffect } from "react";

type ScrollProps = {
  breakpoint: number;
};

const useScroll = () => {
  const scrollToTop = ({ breakpoint }: ScrollProps) => {
    useEffect(() => {
      if (window.scrollY > breakpoint) {
        window.scrollTo(0, 0);
      }
    }, [breakpoint]);
  };

  return {scrollToTop}
};

export {useScroll};
