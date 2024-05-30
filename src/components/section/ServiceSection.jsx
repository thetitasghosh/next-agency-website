import React from "react";
import { service } from "@/data/serviceData";
import Card from "@/components/ui/card";
const ServiceSection = () => {
  return (
    <div className="w-[400px] min-h-screen flex flex-col items-center justify-start  gap-10 p-2 overflow-hidden">
      <div className="text-2xl font-medium w-full px-2 relative">
        <h1 className="border_bottom">Service</h1>
      </div>
      <div className="flex min-h-screen items-center justify-center flex-col gap-5">
        {service.map((serve, idx) => {
          return <Card key={idx} data={serve} />;
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
