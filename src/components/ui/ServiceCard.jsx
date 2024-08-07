import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { DEFAULT_URL, whatsappNumber } from "@/data/navigation";
import Link from "next/link";

const ServiceCard = ({ data }) => {
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
        <h1>{data.price}</h1>
      </div>
      <div className="flex w-full items-center justify-evenly">
        <Link href={"#contactpage"}>
          <Button className="bg-Blue">Enquiry</Button>
        </Link>

        <Link
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=I want this  ${data.service} service `}
        >
          <Button className="bg-Green">Buy now</Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
