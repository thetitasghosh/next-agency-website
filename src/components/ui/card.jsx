import Image from "next/image";
import React from "react";
import { Button } from "./button";

const card = ({ data }) => {
  return (
    <div className="w-64 p-2 h-80 rounded-md  flex flex-col items-center justify-start gap-3  shadow-md shadow-slate-500">
      <div className=" w-full flex justify-center items-center rounded-md">
        <Image className="-z-10" alt="" src={data.cover} width={250} />
      </div>
      <h1 className="text-xl font-semibold">{data.service}</h1>
      <div className=" w-full h-10 flex items-center justify-center">
        <h1>price</h1>
      </div>
      <div className="flex items-center  w-full justify-evenly">
        <Button variant={""}>Enquiry</Button>
        <Button variant={"destructive"}>Buy now</Button>
      </div>
    </div>
  );
};

export default card;
