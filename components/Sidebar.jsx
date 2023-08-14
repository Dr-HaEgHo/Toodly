import { HambergerMenu, SearchNormal1 } from 'iconsax-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { useRouter as useR } from 'next/router';

const tasks = [
  {
    id: 1,
    title: "Upcoming",
    route: "/dashboard",
    icon: "line-md:chevron-small-double-right",
  },
  {
    id: 2,
    title: "Today",
    route: "/dashboard/today",
    icon: "fa6-solid:list-check",
  },
  {
    id: 3,
    title: "Calendar",
    route: "/dashboard/calendar",
    icon: "fa-solid:calendar-alt",
  },
  {
    id: 4,
    title: "Sticky Wall",
    route: "/dashboard/sticky-wall",
    icon: "fa-solid:sticky-note",
  },
];

const list = [
  { id: 1, name: "Personal", color: "#FF6B6B", counter: 3 },
  { id: 2, name: "Work", color: "#66D9E8", counter: 6 },
  { id: 3, name: "List 1", color: "#FFD43B", counter: 5 },
];


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

  const router = useRouter();

  const [location, setLocation] = useState("/dashboard")
  // const [windowDimenion, detectHW] = useState({
  //     winWidth: window.innerWidth,
  //     winHeight: window.innerHeight,
  //   });

  //   const detectSize = () => {
  //     detectHW({
  //       winWidth: window.innerWidth,
  //       winHeight: window.innerHeight,
  //     });
  // };
  


    // useEffect(() => {
    //   window.addEventListener("resize", detectSize);
    //   //conole.log(windowDimenion);
    //   return () => {
    //     window.removeEventListener("resize", detectSize);
    //   };
    // }, [windowDimenion]);

  // useEffect(() => { 
  //   const getLocation = window.location.pathname;
  //   setLocation(getLocation) 
  // },[])

  useEffect(() => { 
    const handler = () => {
      router.push('/dashboard')
    }
    document.addEventListener('onKeyPress',handler)
    return () => {
      document.removeEventListener("onKeyPress", handler);
    };
  },[])


  let numbers = [8, 6, 3, 2]

  

  return (
    <div className="w-full bg-sidebarBgGray h-full p-4 flex flex-col justify-between">
      <div className="w-full">
        {/* THE MENU PART */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg 2xl:text-2xl font-[600] text-darkGray ">
            Menu
          </h2>
          {/*ICON WILL BE HERE */}
          <HambergerMenu
            onClick={() => setSidebarOpen((v) => !v)}
            className="text-2xl text-darkGray cursor-pointer"
            size="22"
            variant="Outline"
          />
        </div>

        {/* THE SEARCH BAR */}
        <div className="w-full flex items-center gap-1 border border-borderline px-2 2xl:px-4 py-2 rounded-[8px] mb-5 2xl:mb-8">
          <SearchNormal1
            className="text-iconGray"
            size="12"
            variant="Outline"
          />
          <input
            className="border-none bg-none bg-transparent text-darkGray flex-1 text-xs  2xl:text-base focus:outline-none placeholder:text-iconGray"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* TASKS */}
        <div className="border-b pb-3 2xl:pb-4">
          <h3 className="list-header">TASKS</ h3>
          <div className="flex flex-col items-center">
            {tasks?.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => router.push(item.route)}
                className={
                  item.route === location ? "sidebar-btn-active" : "sidebar-btn"
                }
              >
                <Icon
                  className="text-xs 2xl:text-base text-darkGray"
                  icon={item.icon ? item.icon : ""}
                />
                <h4 className="text-xs 2xl:text-base text-darkGray flex-1 ">
                  {item.title}
                </h4>
                {numbers && (
                  <div
                    className={`w-6 ${
                      item.route === location ? "bg-whiteBg" : "bg-borderline"
                    } rounded-md flex items-center justify-center`}
                  >
                    <p
                      className={`text-[10px] 2xl:text-xs text-darkGray font-[600]`}
                    >
                      {numbers[idx]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* LISTS */}
        <div className="border-b pt-6 2xl:pt-8 pb-4">
          <h3 className="list-header">LISTS</h3>
          <div className="flex flex-col items-center">
            {list?.map((item) => (
              <div
                key={item.id}
                onClick={() => router.push(item.route)}
                style={{
                  background: item.route === location ? "#ebebeb" : "none",
                }}
                className="w-full flex items-center transition duration-200 cursor-pointer bg-borderline rounded-lg p-[10px] gap-4"
              >
                <div
                  style={{ background: item.color }}
                  className="w-3 h-3 rounded"
                />
                <h4 className=" text-xs 2xl:text-base text-darkGray flex-1 ">
                  {item.name}
                </h4>
                {item.counter && (
                  <div className="w-6 bg-borderline rounded-md flex items-center justify-center">
                    <p className="text-xs text-darkGray font-[600]">
                      {item.counter}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* ADD NEW LIST BUTTON */}
            <div className="w-full flex items-center transition duration-200 cursor-pointer hover:bg-borderline rounded-lg p-[10px] gap-4">
              <Icon
                className="text-xs 2xl:text-base text-darkGray"
                icon="io:plus"
              />
              <h4 className="text-xs 2xl:text-base text-darkGray flex-1 ">
                Add New List
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* SETTINGS AND LOGOUT */}
      <div className=" w-full ">
        <div className="w-full flex items-center transition duration-200 cursor-pointer hover:bg-borderline rounded-lg p-[10px] gap-4">
          <Icon
            className="text-xs 2xl:text-base text-darkGray"
            icon="io:plus"
          />
          <h4 className="text-xs 2xl:text-base text-darkGray flex-1 ">
            Settings
          </h4>
        </div>

        {/* LOGOUT */}
        <div className="w-full flex items-center transition duration-200 cursor-pointer hover:bg-borderline rounded-lg p-[9px] 2xl:p-[10px] gap-4">
          <Icon
            className="text-xs 2xl:text-base text-darkGray"
            icon="io:plus"
          />
          <h4 className="text-xs 2xl:text-base text-darkGray flex-1 ">
            Sign out
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;