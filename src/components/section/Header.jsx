"use client";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import Nav from "@/components/section/Nav";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

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
    <div className="border z-[100] w-full h-16  flex items-center justify-between bg-slate-50 px-5 text-2xl fixed shadow-lg shadow-slate-200 ">
      <div className="logo  font-extrabold text-3xl z-[100]">
        <Link href={"/"}> DB</Link>
      </div>
      <div
        onClick={() => {
          setMenu(!menu);
        }}
        className="menu  flex items-center justify-center  gap-1 z-30 cursor-pointer text-3xl"
      >
        menu {menu ? <IoCloseSharp /> : <IoMenu />}
      </div>
      {menu && <Nav isClick={menu} />}
    </div>
  );
};

export default Header;
