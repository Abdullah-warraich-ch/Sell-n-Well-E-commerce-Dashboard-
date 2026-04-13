import React from "react";
import Button from "@/components/common/Button";

function ProductCard() {
  return (
    <div className="rounded-xl bg-secondary shadow-md overflow-hidden w-80">
      <img
        src="https://images.unsplash.com/photo-1588514912908-8f5891714f8d?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Perfume"
        className="h-1/3"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Perfume</h3>
        <p className="text-xs p-0.5 px-2 border-border  rounded-2xl border inline-block font-medium ">
          Men's
        </p>
        <p className="text-[14px] text-secondary-text leading-5 font-normal">
          Premium wireless headphones with noise cancellation
        </p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm text-primary-text font-bold text-[20px] leading-7">
            $49.99
          </p>
          <p className="text-sm text-gray-500">Status: 45</p>
        </div>
      </div>
      <div className="p-4">
        <button className="w-full bg-danger text-white py-2 rounded-lg hover:bg-danger/80 transition-colors duration-300">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
