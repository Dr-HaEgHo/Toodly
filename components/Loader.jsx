import { Context } from "@/app/layout";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const Loader = () => {
  const [state, dispatch] = useContext(Context);
  const [count, setCount] = useState(4);

  useEffect(() => {
    setInterval(() => {
      setCount((v) => v - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(function () {
      dispatch({ type: "loadingAnimationFinished" });
    }, 5000);
  }, []);

  useEffect(() => {
    let loaderBox = document.getElementById("loader");
    if (count === 0) {
      loaderBox.style.opacity = 0;
    }

  }, [count]);

  return (
    <div
      id="loader"
      className="w-full z-50 transition opacity-100 duration-[1s] h-screen absolute bg-whiteBg flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center ">
        <Image
          src={require("@/assets/icons/ajax-loader.gif")}
          width={80}
          height={80}
        />
        <p className="">
          <span>Toodly.</span> is bringing you the best
        </p>
        <p>please wait...</p>
      </div>
    </div>
  );
};

export default Loader;
