import { HambergerMenu, SearchNormal1 } from 'iconsax-react';
import Link from 'next/link';
import React from 'react'

const tasks = [
  {id: 1, title: "Upcoming", route: "/upcoming", },
  {id: 2, title: "Today", route: "/today", },
  {id: 3, title: "Calendar", route: "/calendar", },
  {id: 4, title: "Sticky Wall", route: "/sticky-wall", },
]

const Sidebar = () => {
  return (
    <div className="w-full bg-sidebarBgGray h-full">
      {/* THE MENU PART */}
      <div>
        <h2>Menu</h2>
        {/*ICON WILL BE HERE */}
        <HambergerMenu size="32" color="#FF8A65" variant="Outline" />
      </div>

      {/* THE SEARCH BAR */}
      <div>
        <SearchNormal1 size="32" color="#FF8A65" variant="Outline" />
        <input type="text" />
      </div>


      {/* TASKS */}
      <div>
        <h3>TASKS</h3>
        <div>Upcoming</div>
      </div>
    </div>
  );
}

export default Sidebar;