'use client'
import Sidebar from '@/components/Sidebar';
import React, { useState } from 'react'

const layout = ({ children }) => {
  
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className='w-full h-screen flex p-[1rem] 2xl:p-[1.4rem] gap-4 2xl:gap-[1.4rem]' >
      {/* FOR THE SIDE BAR */}
      <div style={{
        display: sidebarOpen === true ? "block" : "none"
      }}
      className='flex-1 max-w-[330px] rounded-2xl overflow-hidden'
      >
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div> 
 
      {/* FOR ALL THE OTHER PAGES */}
      <div className='flex-[3]'>{children}</div>
    </div>
  );
}

export default layout