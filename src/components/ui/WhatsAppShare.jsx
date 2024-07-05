import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { DEFAULT_URL } from "@/data/navigation";
import { Button } from "./button";
import { Input } from "./input";
import Link from "next/link";
const WpShare = () => {
  const [number, setNumber] = useState();
  return (
    <div className="flex h-full w-full items-center justify-center gap-2">
      <Input
        id="phone_number"
        type="text"
        defaultValue={"+91"}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="WhtasApp Number With Country Code"
        className="h-full w-full border border-black"
      ></Input>
      <Link
        target="_blank"
        href={`https://api.whatsapp.com/send?phone=${number}&text=${DEFAULT_URL}`}
      >
        <Button className="gap-1 bg-green-600 text-xs hover:bg-green-600">
          <FaWhatsapp className="size-4" /> Share on WhtasApp
        </Button>
      </Link>
    </div>
  );
};

export default WpShare;
