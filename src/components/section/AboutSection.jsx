import React from "react";

const AboutSection = () => {
  return (
    <div className="flex min-h-96 w-[400px] flex-col items-center justify-start gap-10 overflow-hidden p-2 pt-20">
      <div className="relative w-full text-2xl">
        <h1 className="border_bottom rounded bg-gradient-to-r from-blue-700 to-blue-400 p-2 font-medium text-white">
          About us
        </h1>
      </div>
      <div className="flex h-80 w-full items-center justify-center p-5">
        <p className="text-left text-lg font-medium">
          Digital Bandhan, a Bankura-based digital marketing company, offers a
          variety of services to help businesses grow in today competitive
          market. From graphic design and social media marketing to video and
          voice advertising, they provide essential tools for business
          development at a low cost. Let Digital Bandhan help your organization
          achieve fame.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
