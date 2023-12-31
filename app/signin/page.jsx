"use client";
import { ArrowDown2, Eye, EyeSlash } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const metadata = {
  title: "Toodly | signin",
  description: "Organize Better",
};

const countries = [
  { id: 1, name: "Nigeria" },
  { id: 2, name: "Ghana" },
  { id: 3, name: "United States" },
  { id: 4, name: "United kingdom" },
  { id: 5, name: "Canada" },
  { id: 6, name: "Germany" },
  { id: 7, name: "Sweden" },
  { id: 8, name: "Netherlands" },
  { id: 9, name: "Turkey" },
  { id: 10, name: "Australia" },
];

const page = () => {
  const [visible, setVisible] = useState(false);
  const [countryDropDownOpen, setCountryDropDownOpen] = useState(false);
  const [country, setCountry] = useState("");

  const toggleVisibility = () => {
    setVisible((v) => !v);
  };

  const handleCountry = (name) => {
    setCountryDropDownOpen(false);
    setCountry(name);
    };
    
      const handleSignIn = (e) => {
        e.preventDefault();
        router.push("/dashboard");
      };


  const toggleCountry = () => {
    setCountryDropDownOpen((prevCurr) => {
      if (prevCurr === false) {
        return true;
      } else if (prevCurr === true) {
        return false;
      }
    });
  };

  // HANDLE COUNTRY CLOSE ON CLICK OUT
  useEffect(() => {
    let handler = (e) => {
      if (e.target.id !== "country") {
        setCountryDropDownOpen(false);
      } else if (e.target.id === "country") {
        toggleCountry();
      }
      if (e.target.id === "countryDrop") {
        setCountryDropDownOpen(true);
      }
      console.log("clicked", e.target);
      console.log(countryDropDownOpen);
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="container h-screen ">
      <div className="w-full h-full flex items-center">
        <div className="flex w-full gap-4 flex-nowrap">
          {/* THE PICTURE AREA */}
          <div className="half-container relative">
            <h2 className="text-[28px] text-whiteBg absolute top-3 right-6 font-[600] " >Toodly.</h2>
            <Image
              src={require("../../assets/images/toodly.png")}
              width={684}
              height={852}
            />
          </div>

          {/* THE FORM AREA */}
          <div className="half-container border border-borderline flex items-center">
            <div className="w-[74%] mx-auto">
              <h1 className="font-lexend text-5xl text-appBlack font-[600] mb-6">
                {" "}
                Sign In
              </h1>
              <div className="w-full z-10">
                <form className="w-full flex flex-col gap-4">
                

                  <div className="w-full ">
                    <input className="input" type="email" placeholder="Email" />
                  </div>

                  <div className="w-full relative">
                    <div
                      onClick={toggleVisibility}
                      className="absolute cursor-pointer top-1/2 right-4 transform -translate-y-1/2 "
                    >
                      {visible === true ? (
                        <EyeSlash
                          className="cursor-pointer"
                          size="20"
                          color="#7c7c7c"
                          variant="Bold"
                        />
                      ) : (
                        <Eye
                          className="cursor-pointer"
                          size="20"
                          color="#7c7c7c"
                          variant="Bold"
                        />
                      )}
                    </div>
                    <input
                      className="input"
                      type={visible === true ? "text" : "password"}
                      placeholder="Email"
                    />
                  </div>

                  

                  <button
                    onClick={handleSignIn}
                    className="yellow-btn mt-2 z-[0]"
                  >
                    Get Started
                  </button>
                </form>
              </div>
              <p className="text-center text-darkGray font-lexend text-base font-[600] mt-[2rem]">
                Don't have an account?{" "}
                <Link href="/signup" className="">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
