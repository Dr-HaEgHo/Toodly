import { useEffect, useState } from "react";

const useFullScroll = (onChange) => {
  const [scrollYPosition, setscrollYPosition] = useState(0);
  const [scrollPositionPercentage, setScrollPositionPercentage] = useState(0);

  const setScrollVal = () => {
        const htmlElement = document.documentElement;
        const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
        setScrollPositionPercentage(percentOfScreenHeightScrolled * 100)
    }
    

    useEffect(() => { 
        
         window.addEventListener("scroll", setScrollVal, {passive: true});

         return () => {
           window.removeEventListener("scroll", setScrollVal);
         };

    },[])

  return scrollPositionPercentage;
};

export default useFullScroll;