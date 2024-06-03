import React from "react";
import { service } from "@/data/serviceData";
import Card from "@/components/ui/card";
const ServiceSection = () => {
  return (
    <div className="flex py-20 min-h-screen w-[400px] flex-col items-center justify-start gap-10 overflow-hidden p-2">
      <div className="relative w-full px-2 text-2xl font-medium">
        <h1 className="border_bottom">Service</h1>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center gap-5">
        {service.map((serve, idx) => {
          return <Card key={idx} data={serve} />;
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
