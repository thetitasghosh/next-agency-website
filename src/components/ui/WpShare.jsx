import React from "react";
import { Button } from "./button";
import { Input } from "./input";
const WpShare = () => {
  return (
    <div className="flex h-full w-full items-center justify-center gap-1">
      <Input
        id="phone_number"
        type="text"
        defaultValue={"+91"}
        placeholder="WhtasApp Number With Country Code"
        className="h-full w-full border border-black"
      ></Input>
      <Button className="bg-green-600">share on wp</Button>
    </div>
  );
};

export default WpShare;
