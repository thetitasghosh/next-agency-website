import React from "react";
import { Button } from "./button";
import { Input } from "./input";
const WpShare = () => {
  return (
    <div className="w-full h-full flex items-center justify-center gap-1 ">
      <Input
        id="phone_number"
        type="text"
        defaultValue={"+91"}
        placeholder="WhtasApp Number With Country Code"
        className="border border-black w-full h-full"
      ></Input>
      <Button className="bg-green-600">share on wp</Button>
    </div>
  );
};

export default WpShare;
