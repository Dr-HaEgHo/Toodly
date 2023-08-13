'use client'
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { HambergerMenu } from 'iconsax-react';
import React, { useState } from 'react'

const layout = ({ children }) => {
  
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="w-full h-screen flex p-[1rem] 2xl:p-[1.4rem] gap-4 2xl:gap-[1.4rem]">
      {/* FOR THE SIDE BAR */}
      <div
        style={{
          display: sidebarOpen === true ? "block" : "none",
        }}
        className="flex-1 max-w-[250px] 2xl:max-w-[330px] rounded-2xl overflow-hidden"
      >
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      <div
        style={{
          display: sidebarOpen === true ? "none" : "block",
        }}
        className="rounded-2xl overflow-hidden"
      >
        <HambergerMenu
          onClick={() => setSidebarOpen((v) => !v)}
          className="text-2xl text-darkGray cursor-pointer"
          size="32"
          variant="Outline"
        />
      </div>

      {/* FOR ALL THE OTHER PAGES */}
      <div className="flex-[3]">
        <div className="fixed top-0 flex py-[1rem] 2xl:py-[1.4rem] pr-[1rem] 2xl:pr-[1.4rem] bg-whiteBg">
          <Header />
        </div>
        <div className="mt-[5rem]">{children}</div>
      </div>
    </div>
  );
}

export default layout