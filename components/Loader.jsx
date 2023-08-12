import { Context } from "@/app/layout";
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
      className="w-full transition opacity-100 duration-[1s] h-screen flex items-center justify-center"
    >
      <p>LOADING {count} </p>
    </div>
  );
};

export default Loader;
