import { stagger } from 'framer-motion';
import React from 'react';
import {navigation} from "@/data/navigation"
import Link from 'next/link';


const Nav = ({isClick}) => {
  return (
    <div className="w-full h-full p-1 flex flex-col items-center justify-center fixed right-0 top-0 bg-white transition z-20">
      <div className="w-96 h-[40rem]  flex items-start flex-col justify-center gap-10 px-12">
        {navigation.map((data, idx) => {
          return <Route key={idx} routes={data} />;
        })}
      </div>
      <div className=" w-96 h-40 flex items-center justify-center flex-col">
        <p className="text-base">Social Platform</p>
        <div className="w-full h-full  flex items-center justify-evenly">
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
          <h1>5</h1>
        </div>
      </div>
    </div>
  );
}
function Route({routes}){
  return (
    <>
      <div className='text-5xl'>
        <Link  href={routes.route}>{routes.title}</Link>
      </div>
    </>
  )
}
export default Nav;
