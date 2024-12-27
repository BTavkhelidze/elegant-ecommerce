import React from "react";

const AddingRemoving = ({ number, setNumber }: any) => {
  const handlePlusClick = () => {
    setNumber(number + 1);
  };

  const handleMinusClick = () => {
    if (number === 1) setNumber(1);
    else setNumber(number - 1);
  };

  return (
    <div className=" w-[96px] py-3 flex items-center justify-center gap-3 border border-[#6C7275] rounded-[4px]">
      <div
        className="cursor-pointer w-4 h-4 flex items-center"
        onClick={handleMinusClick}
      >
        <div className="w-full h-[1px] bg-[#121212]"></div>
      </div>
      <p className="text-[12px] text-[#121212] font-semibold">{number}</p>
      <div
        className="cursor-pointer w-4 h-4 flex items-center justify-center relative"
        onClick={handlePlusClick}
      >
        <div className="absolute w-full h-[1px] bg-[#121212]"></div>
        <div className="w-[1px] h-full bg-[#121212]"></div>
      </div>
    </div>
  );
};

export default AddingRemoving;
