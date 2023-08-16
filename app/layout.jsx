"use client";
import Loader from "@/components/Loader";
import "@/styles/globals.css";
import { createContext, useEffect, useReducer, useState } from "react";
import reducer from "@/hooks/useReducer";

const metadata = {
  title: "Toodly",
  description: "Organize Better",
};

const initialState = { loadingAnimationFinished: false };

export const Context = createContext(initialState);

const RootLayout = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [loaded, setLoaded] = useState(false)
    const [count, setCount] = useState([])
  


    useEffect(() => {
      setLoaded(true);
    }, [state.loadingAnimationFinished]);

    let isPageLoaded = loaded && state.loadingAnimationFinished;


  return (
    <html>
      <body>
        <Context.Provider value={[state, dispatch]} >
          <main className="app ">
            {isPageLoaded ? null : <Loader />}
            {children}
            
          </main>
        </Context.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
 