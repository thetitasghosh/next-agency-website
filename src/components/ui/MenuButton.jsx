"use client";
import { navigation } from "@/data/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { MdHome } from "react-icons/md";
const MenuButton = () => {
  const [onclick, setOnclick] = useState(false);
  const buttonAnimation = {
    open: {
      width: "8.5rem",
      height: "25rem",
      transition: { duration: 0.75,  type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    close: {
      width: "8.5rem",
      height: "2.5rem",
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div
      onClick={() => {
        setOnclick(!onclick);
      }}
      className="fixed  w-[8.5rem] bg-black text-white  rounded-md h-10  z-50 bottom-3 right-[39%] flex items-center  justify-center "
    >
      <div className="flex relative ">
        <h1>menu</h1> <MdHome className="size-5" />
        <motion.div
          variants={buttonAnimation}
          animate={onclick ? "open" : "close"}
          initial="close"
          className="w-[8.5rem] absolute flex items-center text-lg flex-col justify-evenly bg-black bottom-0 -right-[2.3rem] -z-20 rounded-md origin-center  "
        >
          {navigation.map((data, idx) => {
            return (
              <Link
                key={idx}
                style={{ display: onclick ? "" : "none" }}
                href={data.route}
                className="transition-all delay-75"
              >
                {data.title}
              </Link>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default MenuButton;
