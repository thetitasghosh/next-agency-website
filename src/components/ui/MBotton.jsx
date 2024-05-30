import React from 'react';
import {navigation} from '@/data/navigation'
const MBotton = () => {
  return (
    <div className="fixed w-full flex justify-center bottom-2 ">
      <div className="w-[370px] h-20 border border-black py-8 rounded-md flex items-center justify-evenly bg-neutral-300">
    {
        navigation.map((data,idx)=>{
            return <NavButton key={idx} data={data} />
        })
    }
      </div>
    </div>
  );
}

export default MBotton;
const NavButton = ({data})=>{
    const {icon,title} = data
    return (
        <div className='size-16  flex flex-col items-center justify-center  rounded-md bg-black text-white'>
            <div className='icon '>
                {icon}
            </div>
            <div>
                <p className='text-xs'>{title}</p>
            </div>
        </div>
    )
}
