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
import Link from "next/link";
const DialogBox = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex h-60 w-80 flex-col items-center justify-center rounded-lg">
        <DialogHeader>
          <DialogTitle>Share my digital card</DialogTitle>
        </DialogHeader>
        <div className="flex h-80 w-72 items-center justify-center">
          <div className="flex h-full w-full items-center justify-center gap-3">
            {ShareOptions.map((data, idx) => {
              return (
                <div key={idx} className="size-10 cursor-pointer">
                  <Link href={data.url} target="_blank">
                    <div>{data.icon}</div>
                  </Link>
                  {/* <p className="text-xs">{data.label}</p> */}
                </div>
              );
            })}
          </div>
        </div>
        <DialogFooter>
          <DialogClose className="rounded-lg border border-black p-1">
            close
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
