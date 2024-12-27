import React from "react";

const FullRemove = () => {
  return (
    <div>
      <div className="flex lg:hidden">
        <div className="w-4 h-4 flex items-center justify-center relative">
          <div className="absolute w-full h-[2px] bg-[#6C7275] rotate-45 rounded-[2px]"></div>
          <div className="w-[2px] h-full bg-[#6C7275] rotate-45 rounded-[2px]"></div>
        </div>
      </div>
      <div className="hidden cursor-pointer items-center gap-2 lg:flex">
        <div className="w-4 h-4 flex items-center justify-center relative">
          <div className="absolute w-full h-[2px] bg-[#6C7275] rotate-45 rounded-[2px]"></div>
          <div className="w-[2px] h-full bg-[#6C7275] rotate-45 rounded-[2px]"></div>
        </div>
        <p className="text-[14px] text-[#6C7275] font-semibold">Remove</p>
      </div>
    </div>
  );
};

export default FullRemove;
