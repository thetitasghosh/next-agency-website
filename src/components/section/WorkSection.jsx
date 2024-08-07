"use client";
import React, { useEffect, useRef, useState } from "react";
import { workdata } from "@/data/workData";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import WorkCard from "@/components/ui/workCard";
const WorkSection = () => {
  const [wApi, setWApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const autoPlayPlugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  useEffect(() => {
    if (!wApi) {
      return;
    }
    setCount(wApi.scrollSnapList().length);
    setCurrent(wApi.selectedScrollSnap() + 1);

    wApi.on("select", () => {
      setCurrent(wApi.selectedScrollSnap() + 1);
    });
  }, [wApi]);

  return (
    <div className="flex h-[40rem] w-[400px] flex-col items-center justify-start gap-2 overflow-hidden p-5 pt-20">
      <div className="relative h-16 w-full">
        <h1 className="border_bottom rounded bg-gradient-to-r from-blue-700 to-blue-400 p-2 text-2xl font-medium text-white">
          Works
        </h1>
      </div>
      <div className="flex h-[25rem] w-full items-center justify-center gap-1 p-2">
        <Carousel
          plugins={[autoPlayPlugin.current]}
          setApi={setWApi}
          // onMouseEnter={autoPlayPlugin.current.stop}
          // onMouseLeave={autoPlayPlugin.current.reset}
          className="w-full"
        >
          <CarouselContent className="">
            {workdata.map((data, idx) => {
              return (
                <CarouselItem
                  key={idx}
                  className="flex items-center justify-center"
                >
                  <WorkCard data={data} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex h-10 w-full justify-center">
        <h1 className="text-xl font-medium">
          Work {current} of {count}
        </h1>
      </div>
    </div>
  );
};

export default WorkSection;
