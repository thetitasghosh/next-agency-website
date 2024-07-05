import React from "react";
import { service } from "@/data/serviceData";
import ServiceCard from "@/components/ui/ServiceCard";
const ServiceSection = () => {
  return (
    <div className="flex min-h-screen w-[400px] flex-col items-center justify-start gap-10 overflow-hidden p-2 pt-20">
      <div className="relative w-full text-2xl">
        <h1 className="border_bottom red rounded p-2 font-medium">Service</h1>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center gap-5 pt-5">
        {service.map((serve, idx) => {
          return <ServiceCard key={idx} data={serve} />;
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
