import { useEffect, useState } from "react";

const useScrollPosition = (onChange) => {
  const [scrollYPosition, setscrollYPosition] = useState(0);
  const [scrollPositionPercentage, setScrollPositionPercentage] = useState(0);

  const setScrollVal = () => {
        const htmlElement = document.documentElement;
        const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
        setScrollPositionPercentage(Math.min(percentOfScreenHeightScrolled * 100, 100))
    }
    

    useEffect(() => { 
        
         window.addEventListener("scroll", setScrollVal, {passive: true});

         return () => {
           window.removeEventListener("scroll", setScrollVal);
         };

    },[])

  return scrollPositionPercentage;
};

export default useScrollPosition;