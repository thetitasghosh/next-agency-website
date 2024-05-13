import React from 'react';

const Abutton = () => {
  return (
    <div className="w-36 p-3  h-4  bg-black text-white flex items-center justify-between rounded-xl gap-1">
      <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
      <h1 className='text-xs'>available for work</h1>
    </div>
  );
}

export default Abutton;
