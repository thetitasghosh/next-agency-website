import React from "react";
import { ShareOptions } from "@/data/navigation";
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
      <DialogContent className="w-80 h-60 rounded-lg flex items-center justify-center flex-col">
        <DialogHeader>
          <DialogTitle>Share my digital card</DialogTitle>
        </DialogHeader>
        <div className=" w-72 h-80 flex items-center justify-center">
          <div className="w-full h-full  flex items-center justify-center gap-3">
            {ShareOptions.map((data, idx) => {
              return (
                <div key={idx} className="size-10 cursor-pointer">
                  <div>{data.icon}</div>
                  {/* <p className="text-xs">{data.label}</p> */}
                </div>
              );
            })}
          </div>
        </div>
        <DialogFooter>
          <DialogClose>close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
