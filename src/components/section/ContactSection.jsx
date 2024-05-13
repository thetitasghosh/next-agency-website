import React from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from "@/components/ui/textarea";
import { Button } from '../ui/button';

const ContactSection = () => {
  return (
    <div className="w-screen h-screen p-2 flex flex-col items-center justify-start green">
      <div className="w-full px-2">
        <h1 className="text-2xl font-medium">Contact Us</h1>
      </div>
      <div className="w-full gap-3 text-black h-screen flex flex-col items-center justify-center red px-5">
        <Label htmlFor="name" className="text-black w-full px-2">
          Your Name
        </Label>
        <Input
          type="text"
          id="name"
          placeholder="Your Name"
          className="border border-black"
        />
        <Label htmlFor="email" className="text-black w-full px-2">
          Your Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Your Email"
          className="border border-black"
        />
        <Label htmlFor="message" className="text-black w-full px-2">
          Your message
        </Label>
        <Textarea
          placeholder="Type your message here."
          id="message"
          className="border border-black"
        />
        <Button className="w-full">Send message</Button>
      </div>
    </div>
  );
}

export default ContactSection;
