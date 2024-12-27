"use client";
import React, { useState } from "react";
import { products } from "../../../data";
import Image from "next/image";
import AddingRemoving from "@/components/_atoms/Cart/AddingRemoving";
import FullRemove from "@/components/_atoms/Cart/FullRemove";

interface CartProductsProps {
  id: number;
  title: string;
  category: string;
  description: string;
  rating: number;
  price: number;
  discount: number;
  color: string;
  image: string[];
}

const CartProducts = () => {
  const [quantities, setQuantities] = useState(() =>
    products.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {} as Record<number, number>)
  );

  const updateQuantity = (id: number, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="mt-10 lg:mt-20">
      <div className="pb-6 flex items-center justify-between border-b border-[#6C7275]">
        <div className="text-[16px] text-[#121212]">Product</div>
        <div className="hidden gap-24 lg:flex">
          <div className="text-[16px] text-[#121212]">Quantity</div>
          <div className="text-[16px] text-[#121212]">Price</div>
          <div className="text-[16px] text-[#121212]">Subtotal</div>
        </div>
      </div>
      {products.map((product: CartProductsProps) => (
        <div key={product.id}>
          <div className="my-6 flex justify-between">
            <div className="flex items-center gap-4">
              <Image
                width={80}
                height={94}
                src={product.image[0]}
                alt="Image"
              />
              <div className="flex flex-col gap-2">
                <h4 className="text-[14px] text-[#141718] font-semibold">
                  {product.title}
                </h4>
                <p className="text-[12px] text-[#6C7275] font-normal">
                  Color: {product.color}
                </p>
                <div className="flex lg:hidden">
                  <AddingRemoving
                    number={quantities[product.id]}
                    setNumber={(value: number) =>
                      updateQuantity(product.id, value)
                    }
                  />
                </div>
                <div className="hidden lg:flex">
                  <FullRemove />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 relative top-1 lg:flex-row items-center lg:gap-24">
              <h4 className="lg:hidden">
                ${Math.floor((product.price * product.discount) / 100)}
              </h4>
              <div className="lg:hidden">
                <FullRemove />
              </div>
              <div className="hidden lg:flex">
                <AddingRemoving
                  number={quantities[product.id]}
                  setNumber={(value: number) =>
                    updateQuantity(product.id, value)
                  }
                />
              </div>
              <div className="hidden text-[18px] text-[#121212] font-normal lg:flex">
                ${Math.floor((product.price * product.discount) / 100)}
              </div>
              <div className="hidden text-[18px] text-[#121212] font-semibold lg:flex">
                $
                {Math.floor((product.price * product.discount) / 100) *
                  quantities[product.id]}
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#E8ECEF]"></div>
        </div>
      ))}
      <div className="max-w-[340px] flex flex-col gap-4 my-6 lg:my-20 lg:max-w-[420px]">
        <h1 className="text-[16px] text-[#141718] font-semibold lg:text-[24px]">
          Have a coupon?
        </h1>
        <p className="text-[14px] text-[#6C7275] font-medium lg:text-[16px]">
          Add your code for an instant cart discount
        </p>
        <div className="px-4 py-2 flex border border-[#6C7275]">
          <input
            type="text"
            placeholder="Coupon Code"
            className="outline-none pr-8 pl-2 text-[16px] text-[#6C7275] font-medium lg:pr-24"
          />
          <button className="text-[16px] text-[#141718] font-medium">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
