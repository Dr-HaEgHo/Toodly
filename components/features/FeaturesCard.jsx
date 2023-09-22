"useClient"
// import Lottie from "lottie-react";
// import seperatorAnimation from "@/components/Shared/seperator.json";
import {motion as m} from 'framer-motion'
import { useEffect, useState } from "react";


const FeaturesCard = ({ subtitle, background, location, index, style, title }) => {

    const [windowDimenion, detectHW] = useState({
        winWidth: 0,
        winHeight: 0,
    });
    
    useEffect(() => {
 
        window.addEventListener("resize", detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        }));
        //conole.log(windowDimenion);
        return () => {
            window.removeEventListener("resize", detectHW({
                winWidth: window.innerWidth,
                winHeight: window.innerHeight,
            }));
        };
    }, [windowDimenion]);

    return (
        <m.div
            initial={{
                width: `${100 - index * 10}%`
            }}
            whileInView={{
                width: "100%",
            }}
            viewPort={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: index }}
            className={`sticky shadow-xl flex h-[60vh] mx-auto flex-col  gap-4 items-center justify-center border border-borderline rounded-2xl bg-whiteBg bg-cover bg-center bg-no-repeat px-6 md:h-[65vh] md:px-20 xl:px-28`}
            style={{
                ...style,
                zIndex: 6 - index,
                flexDirection : windowDimenion.winWidth <= 600 ? "column" : style.flexDirection
            }}> 
            <div className="w-[36%]">
                <h2 className="text-3xl font-lexend font-bold text-darkGray uppercase md:text-4xl xl:text-4xl">
                    we are <span className="text-blue-gradient">{title}</span>
                </h2>
                {/* <Lottie animationData={seperatorAnimation} loop={false} className="my-2" /> */}
                <p className="mt-4 max-w-lg font-lexend font-[300] text-iconGray">{subtitle}</p>
            </div>
            <div className="w-[64%] h-[70%] bg-appYellow ">
                
            </div>
            <p className="absolute bottom-4 left-4 flex space-x-2 font-manrope text-xs text-appBlack">
                <span className="font-bold">0{index + 1}</span>
                <span>{location}</span>
            </p>
        </m.div>
    );
};

export default FeaturesCard;
