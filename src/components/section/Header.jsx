"use client";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import Nav from "@/components/section/Nav";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.body.style = "overflow-y:hidden";
    } else {
      document.body.style = "overflow-y:auto";
    }
  });
  return (
    <div className="border z-10 w-full h-16 green flex items-center justify-between px-5 text-2xl fixed  text-black ">
      <div className="logo mix-blend-difference font-extrabold  ">DB</div>
      <div
        onClick={() => {
          setMenu(!menu);
        }}
        className="menu  flex items-center justify-center red gap-1 z-30 "
      >
        menu {menu ? <IoCloseSharp /> : <IoMenu />}
      </div>
      {menu && <Nav />}
    </div>
  );
};

export default Header;
