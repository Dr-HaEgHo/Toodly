import Image from "next/image";
import React from "react";

const Header = ({ Title }) => {
  return (
    <div className="w-full flex items-center">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-appYellow ">
        <Image
         src={require("../assets/images/me.jpg")} 
         alt="user-profile-pic"
         width={40} />
      </div>

      <h1 className="ml-8 font-[600] text-[36px] 2xl:text-[46px]">Upcoming</h1>

      <div className="mx-16 border rounded-lg p-2 py-1">
        <p className="text-2xl 2xl:text-4xl">12</p>
      </div>
    </div>
  );
};

export default Header;
