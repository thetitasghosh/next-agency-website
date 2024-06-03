import Image from 'next/image';
import React from 'react';

const workCard = ({data}) => {
    const {img,title,desq,date}=data
  return (
    <div className="black w-80 p-2 h-96 flex items-center justify-start gap-2 flex-col shadow-md shadow-slate-500 rounded-md">
      <div className="w-full flex justify-between items-center rounded">
        <Image
          className="black rounded w-full"
          alt="works NGT SOFTWARE"
          src={img}
          width={200}
          height={100}
        />
      </div>
      <div className="w-full h-16 black flex items-center justify-center">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="w-full h-32 black flex items-center justify-center">
        <p>{desq}</p>
      </div>
      <div className="flex justify-end items-center  w-full h-10 ">
        <h3 className="">{date}</h3>
      </div>
    </div>
  );
}

export default workCard;
