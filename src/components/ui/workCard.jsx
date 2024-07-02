import Image from "next/image";
import React from "react";

const workCard = ({ data }) => {
  const { img, title, desq, date } = data;
  return (
    <div className="black flex h-96 w-80 flex-col items-center justify-start gap-2 rounded-md p-2 shadow-md shadow-slate-500">
      <div className="flex w-full items-center justify-between rounded">
        <Image
          className="black w-full rounded"
          alt="works NGT SOFTWARE"
          src={img}
          width={200}
          height={100}
        />
      </div>
      <div className="black flex h-16 w-full items-center justify-center">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="black flex h-32 w-full items-center justify-center">
        <p>{desq}</p>
      </div>
      <div className="flex h-10 w-full items-center justify-end">
        <h3 className="">{date}</h3>
      </div>
    </div>
  );
};

export default workCard;
