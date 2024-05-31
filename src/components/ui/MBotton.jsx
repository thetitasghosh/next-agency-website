import React, { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
const MBotton = ({ Home, About, Work, Contact, Service }) => {

  return (
    <div className="fixed w-full flex justify-center bottom-2 ">
      <div className="w-[370px] h-20 border border-black py-8 rounded-md flex items-center justify-evenly bg-neutral-300">
        {navigation.map((data, idx) => {
          return <NavButton key={idx} data={data} />;
        })}
      </div>
    </div>
  );
};

const NavButton = ({ data }) => {
  const [isClick,setIsClick] = useState(false)
    const { icon, title } = data;
    return (
      <div
        onMouseEnter={() => {
          setIsClick(!isClick);
        }}
        onMouseLeave={() => {
          setIsClick(!isClick);
        }}
        style={{
          backgroundColor: isClick ? "black" : " ",
          color: isClick ? "white" : "",
        }}
        className="size-16 cursor-pointer  flex flex-col items-center justify-center  rounded-md"
      >
        <div className="icon ">{icon}</div>
        <div>
          <p className="text-xs">{title}</p>
        </div>
      </div>
    );
};

  export default MBotton;