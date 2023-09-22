'use client'

import Nav from "@/components/Nav";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Context } from "./layout";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import useScrollPosition from "@/hooks/useScrollPosition";
import Welcome from "@/components/Welcome";
import ThatsRight from "@/components/ThatsRight";
import Features from "@/components/features/Features";

const boxes = ["red", "blue", "yellow", "green", "brown", "orange", "pink", "purple", "red", "blue", "yellow", "green", "brown", "orange", "pink", "purple"];

const Home = () => {
  const router = useRouter();

  const [state, dispatch] = useContext(Context);
  const [loded, setLoaded] = useState(true)

  const scrollPosition = useScrollPosition();
  // console.log("position", scrollPosition);
  
  
  const handleGetStarted = () => {
      dispatch({ type: "loadingAnimationStart" });
      router.push('/signup')
  }
  


  return (
    <section className="w-full flex flex-col justify-center z-10">
      {/* <Nav /> */}
      <Hero handleGetStarted={handleGetStarted} />
      <div className="w-full h-[100vh] flex flex-col gap-10 "></div>
      {/* <Welcome/> */}
      <ThatsRight />
      <Features/>
      <div className="parent w-full h-screen fixed top-0 left-0"/>
    </section>
  );
};
 
export default Home;
