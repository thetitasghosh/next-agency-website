"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { useToast } from "@/lib/use-toast";
import { whatsappNumber } from "@/data/navigation";

const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const URL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Customer Name: ${name}%0aCustomer Email: ${email}%0aCustomer Enquiry: ${message}%0a`;
    window.open(URL, "_blank");
  };

  return (
    <div className="flex h-[35rem] w-[400px] flex-col items-center justify-start overflow-hidden p-2">
      <div className="relative w-full">
        <h1 className="border_bottom rounded bg-gradient-to-r from-blue-700 to-blue-400 p-2 text-2xl font-medium text-white">
          Contact Us
        </h1>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-3 p-20 px-5 text-black">
        <form
          action={handleSubmit}
          method="post"
          className="flex w-full flex-col gap-3"
        >
          <Label htmlFor="name" className="w-full px-1 text-black">
            Your Name
          </Label>
          <Input
            type="text"
            id="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="border border-black"
          />
          <Label htmlFor="email" className="w-full px-1 text-black">
            Your Email
          </Label>
          <Input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="border border-black"
          />
          <Label htmlFor="message" className="w-full px-1 text-black">
            Your message
          </Label>
          <Textarea
            placeholder="Type your enquiry here."
            id="message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            className="border border-black"
          />
          <Button
            type="submit"
            onClick={() => {
              toast({
                title: "Welcome",
                description: name,
              });
            }}
            className="w-full bg-Blue"
          >
            Send message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
