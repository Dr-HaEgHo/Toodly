'use client'

import Nav from "@/components/Nav";
import Link from "next/link";
import { useContext, useState } from "react";
import { Context } from "./layout";
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter();

    const [state, dispatch] = useContext(Context);
    const [loded, setLoaded] = useState(true)


    const handleGetStarted = () => {
        dispatch({ type: "loadingAnimationStart" });
        router.push('/signup')
    }
  return (
    <section className="w-full flex flex-col justify-center">
      {/* <Nav /> */}
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <p className="text-center text-xl md:text-3xl 2xl:text-4xl">Revolutionize your tasks with</p>
        <h1 className="text-center font-[600] text-appBlack text-[120px] md:text-[160px] 2xl:text-[280px]  grad-text  leading-[140px] md:leading-[180px] 2xl:leading-[280px]"> Toodly<span className="text-appYellow">.</span></h1>
        <button onClick={handleGetStarted} className="yellow-btn text-center  max-w-[200px] mt-8">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Home;
