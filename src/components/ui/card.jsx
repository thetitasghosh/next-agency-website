import Image from "next/image";
import React from "react";
import { Button } from "./button";
import Link from "next/link";

const card = ({ data }) => {
  return (
    <div className="flex h-96 w-80 flex-col items-center justify-start gap-4 rounded-md p-2 shadow-md shadow-slate-500">
      <div className="flex w-full items-center justify-center rounded-md">
        <Image
          className="rounded"
          alt="service NGT SOFTWARE"
          src={data.cover}
          width={350}
        />
      </div>
      <h1 className="text-xl font-semibold">{data.service}</h1>
      <div className="flex h-10 w-full items-center justify-center">
        <h1>price</h1>
      </div>
      <div className="flex w-full items-center justify-evenly">
        <Link href={'#contactpage'} >
          <Button className="bg-clickBlue">Enquiry</Button>
        </Link>
        <Button variant={"destructive"}>Buy now</Button>
      </div>
    </div>
  );
};

export default card;
