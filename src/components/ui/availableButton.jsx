import React from "react";
import { availble } from "@/constants/availblality";
const Abutton = () => {
  return (
    <div className="mt-5 flex h-4 w-36 items-center justify-between gap-1 rounded-xl bg-black p-3 text-white">
      <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
      <h1 className="text-xs">
        {availble ? "availble for work" : "not availble for work"}
      </h1>
    </div>
  );
};

export default Abutton;
