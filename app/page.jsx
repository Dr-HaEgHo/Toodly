'use client'

import Nav from "@/components/Nav";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Context } from "./layout";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";

const Home = () => {
  const router = useRouter();

  const [state, dispatch] = useContext(Context);
  const [loded, setLoaded] = useState(true)
  const [scrollposition, setScrollPosition] = useState()

  useEffect(() => { 

    const doAction = () => {
      console.log()
    }

    document.addEventListener('scrollY', doAction)

    return document.removeEventListener('Scroll', doAction)
  },[])
  

    const handleGetStarted = () => {
        dispatch({ type: "loadingAnimationStart" });
        router.push('/signup')
    }
  return (
    <section className="w-full flex flex-col justify-center z-10">
      {/* <Nav /> */}
      <Hero handleGetStarted={handleGetStarted} />

      <div className="parent w-full h-screen absolute top-0 left-0"></div>
    </section>
  );
};

export default Home;
