'use client'
import React, { useEffect, useState } from "react";
import { workdata } from "@/data/workData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WorkCard from "@/components/ui/workCard";
const WorkSection = () => {
  const [wApi,setWApi] = useState()
  const [current,setCurrent ]= useState(0)
  const [count,setCount] = useState(0)
  useEffect(()=>{
    if(!wApi){
      return
    }
   setCount(wApi.scrollSnapList().length);
   setCurrent(wApi.selectedScrollSnap() + 1);

   wApi.on("select", () => {
     setCurrent(wApi.selectedScrollSnap() + 1);
   });
  },[wApi])
  return (
    <div className="w-[400px]  h-[40rem] flex flex-col items-center gap-2 justify-start p-5 py-10 overflow-hidden">
      <div className="w-full px-2 h-16  relative ">
        <h1 className="text-2xl font-medium  border_bottom">Works</h1>
      </div>
      <div className=" w-full h-[25rem] gap-1 flex items-center justify-center p-2">
        <Carousel setApi={setWApi}  className="w-full     ">
          <CarouselContent className="">
            {workdata.map((data, idx) => {
              return (
                <CarouselItem
                  key={idx}
                  className=" flex items-center justify-center"
                >
                  <WorkCard data={data} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext  /> */}
        </Carousel>
      </div>
      <div className=" w-full  h-10  justify-center flex">
        <h1 className="text-xl font-medium">
          Work {current} of {count}
        </h1>
      </div>
    </div>
  );
};

export default WorkSection;
