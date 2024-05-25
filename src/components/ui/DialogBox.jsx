import React from "react";
import Button from "./button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
const DialogBox = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-80 h-60 rounded-lg">
        <DialogHeader>
          <DialogTitle>Share my digital card</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-center">
          <h1>content here</h1>
        </div>
        <DialogFooter>
          <DialogClose>close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
