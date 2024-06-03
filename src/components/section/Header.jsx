"use client";
import React, { useEffect, useState } from "react";
// import { IoMenu } from "react-icons/io5";
// import Nav from "@/components/section/Nav";
// import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  // const [menu, setMenu] = useState(false);
  // useEffect(() => {
  //   if (menu) {
  //     document.body.style = "overflow-y:hidden";
  //   } else {
  //     document.body.style = "overflow-y:auto";
  //   }
  // });
  return (
    <div className="fixed z-[50] flex h-16 w-full justify-center">
      <div className="top-0 flex w-[400px] items-center justify-between border bg-slate-50 text-2xl shadow-lg shadow-slate-200">
        <div className="z-[100] flex w-full justify-center text-3xl font-extrabold">
          <Link href={"/"}> NGT SOFTWARE</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
