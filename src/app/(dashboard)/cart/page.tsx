import React from "react";
import CartProducts from "@/components/_molecules/Cart/CartProducts";

function page() {
  return (
    <section className="w-full flex flex-col items-center px-[32px] pb-[80px] lg:pt-20">
      <div className="w-full max-w-[1120px]">
        <div className="flex items-center gap-1 mt-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <path
              d="M7.41577 9.5L4.41577 6.5L7.41577 3.5"
              stroke="#605F5F"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[16px] text-[#605F5F]">back</p>
        </div>
        <div className="w-full mt-10 flex flex-col  gap-6 lg:mt-20 lg:gap-[40px]">
          <h1 className="text-[40px] self-center lg:text-[54px]">Cart</h1>
          <div className="w-full flex self-center justify-between items-center lg:justify-center lg:gap-8">
            <div className="w-[80%] flex items-center gap-[17px] pb-6 border-b-2 border-black lg:w-[25%]">
              <div className="w-[42px] h-[42px] text-white bg-black flex items-center justify-center rounded-[50%]">
                1
              </div>
              <p className="text-[16px] font-semibold">Shopping Cart</p>
            </div>
            <div className="flex items-center gap-[17px] pb-6 lg:w-[25%]">
              <div className="w-[42px] h-[42px] text-white bg-[#B1B5C3] flex items-center justify-center rounded-[50%]">
                2
              </div>
              <p className="hidden text-[16px] text-[#B1B5C3] lg:flex">
                Checkout Details
              </p>
            </div>
            <div className="hidden w-[25%] items-center gap-[17px] pb-6  lg:flex">
              <div className="w-[42px] h-[42px] text-white bg-[#B1B5C3] flex items-center justify-center rounded-[50%]">
                3
              </div>
              <p className="text-[16px] text-[#B1B5C3]">Order Complete</p>
            </div>
          </div>
        </div>
        <div>
          <CartProducts />
        </div>
      </div>
    </section>
  );
}

export default page;
