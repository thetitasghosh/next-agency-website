import React, { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import Link from "next/link";
const MBotton = () => {
  return (
    <div className="fixed bottom-2 flex w-full justify-center">
      <div className="flex h-20 w-[370px] items-center justify-evenly rounded-md border  bg-green-600 py-8 ">
        {navigation.map((data, idx) => {
          return <NavButton key={idx} data={data} />;
        })}
      </div>
    </div>
  );
};

const NavButton = ({ data }) => {
  const [isClick, setIsClick] = useState(false);
  const { icon, title, route } = data;
  return (
    <Link href={route}>
      <div
        onMouseEnter={() => {
          setIsClick(!isClick);
        }}
        onMouseLeave={() => {
          setIsClick(!isClick);
        }}
        style={{
          backgroundColor: isClick ? "#1bc95b" : " ",
          color: isClick ? "white" : "white",
        }}
        className="flex size-16 cursor-pointer flex-col items-center justify-center rounded-md"
      >
        <div className="icon">{icon}</div>
        <div>
          <p className="text-xs">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default MBotton;
