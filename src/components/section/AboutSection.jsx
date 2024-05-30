import React from 'react';

const AboutSection = () => {
  return (
    <div className="w-full min-h-96 flex flex-col items-center justify-start  gap-10 p-2">
      <div className="w-full text-2xl px-2 relative">
        <h1 className="  font-medium border_bottom">About us ...</h1>
      </div>
      <div className="w-full h-80 flex items-center justify-center  p-5">
        <p className="text-lg font-medium text-left ">
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
}

export default AboutSection;
