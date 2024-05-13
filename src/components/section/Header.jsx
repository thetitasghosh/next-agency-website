"use client";
import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Nav from "@/components/section/Nav";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="border z-10 w-full h-16 green flex items-center justify-between px-5 text-2xl fixed  text-black">
      <div className="logo mix-blend-difference font-extrabold  z-20">Logo</div>
      <div
        onClick={() => {
          setMenu(!menu);
        }}
        className="menu flex items-center justify-center red gap-1 z-30 "
      >
        menu {menu ? <IoCloseSharp /> : <HiOutlineMenuAlt2 />}
      </div>
      {menu && <Nav />}
    </div>
  );
};

export default Header;
