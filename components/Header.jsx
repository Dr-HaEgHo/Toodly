import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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

const Header = () => {

  const location = usePathname()
  const [title, setTitle] = useState("Upcoming")

  const handleTitleChange = () => {
    tasks.filter((item) => {
      if (item.route === location) {
        setTitle(item.title)
      }
    })
  }

  useEffect(() => {
    handleTitleChange()
  } ,[location])

  return (
    <div className="w-full flex items-center">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-appYellow ">
        <Image
         src={require("../assets/images/me.jpg")} 
         alt="user-profile-pic"
         width={40} />
      </div>

      <h1 className="ml-8 font-[600] text-[36px] 2xl:text-[46px]">{title}</h1>

      <div className="mx-16 border rounded-lg p-2 py-1">
        <p className="text-2xl 2xl:text-4xl">12</p>
      </div>
    </div>
  );
};

export default Header;
