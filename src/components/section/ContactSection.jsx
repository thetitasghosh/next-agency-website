"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { useToast } from "@/lib/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState();
  return (
    <div className="w-[400px] h-[30rem] p-2 flex flex-col items-center justify-start overflow-hidden">
      <div className="w-full px-2 relative">
        <h1 className="text-2xl font-medium border_bottom">Contact Us</h1>
      </div>
      <div className="w-full gap-3 text-black h-fit flex flex-col items-center justify-center  p-20 px-5">
        <Label htmlFor="name" className="text-black w-full px-1">
          Your Name
        </Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="border border-black"
        />
        <Label htmlFor="email" className="text-black w-full px-1">
          Your Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Your Email"
          className="border border-black"
        />
        <Label htmlFor="message" className="text-black w-full px-1">
          Your message
        </Label>
        <Textarea
          placeholder="Type your message here."
          id="message"
          className="border border-black"
        />
        <Button
          onClick={() => {
            toast({
              title: "Welcome",
              description: name || "test ",
            });
          }}
          className="w-full"
        >
          Send message
        </Button>
      </div>
    </div>
  );
};

export default ContactSection;
