import { Handbag, ShoppingBag, Truck } from "lucide-react";
import React from "react";

function RecentOrders() {
  return (
    <div className="relative p-4 sm:p-6 bg-secondary rounded-[14px] border border-border overflow-hidden">
      <h1 className="mb-5 text-[16px] text-primary-text font-medium leading-6">
        Recent Orders
      </h1>
      <Handbag
        className="absolute -right-6 top-10 opacity-10 rotate-45 hidden lg:block"
        size={200}
        color="black"
      />
      <div className="py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-b-border">
        <div>
          <h1 className="text-[16px] text-primary-text font-medium leading-6">
            Muhammad Abdullah
          </h1>
          <p className="text-secondary-text text-[14px] font-normal leading-5">
            abdullahnasar333@gmail.com
          </p>
        </div>
        <div className="flex gap-3 items-center justify-between sm:justify-start">
          <div>
            <h3 className="text-[16px] text-primary-text font-medium leading-6">
              Rs. 5878
            </h3>
            <p className="text-secondary-text text-[14px] font-normal leading-5">
              3 items
            </p>
          </div>
          <div>
            <button className="text-xs rounded-full px-3 py-1 bg-button text-button-text">
              Deliverd
            </button>
          </div>
        </div>
      </div>
      <div className="py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-b-border">
        <div>
          <h1 className="text-[16px] text-primary-text font-medium leading-6">
            Muhammad Abdullah
          </h1>
          <p className="text-secondary-text text-[14px] font-normal leading-5">
            abdullahnasar333@gmail.com
          </p>
        </div>
        <div className="flex gap-3 items-center justify-between sm:justify-start">
          <div>
            <h3 className="text-[16px] text-primary-text font-medium leading-6">
              Rs. 5878
            </h3>
            <p className="text-secondary-text text-[14px] font-normal leading-5">
              3 items
            </p>
          </div>
          <div>
            <button className="text-xs rounded-full px-3 py-1 bg-button text-button-text">
              Deliverd
            </button>
          </div>
        </div>
      </div>
      <div className="py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-b-border">
        <div>
          <h1 className="text-[16px] text-primary-text font-medium leading-6">
            Muhammad Abdullah
          </h1>
          <p className="text-secondary-text text-[14px] font-normal leading-5">
            abdullahnasar333@gmail.com
          </p>
        </div>
        <div className="flex gap-3 items-center justify-between sm:justify-start">
          <div>
            <h3 className="text-[16px] text-primary-text font-medium leading-6">
              Rs. 5878
            </h3>
            <p className="text-secondary-text text-[14px] font-normal leading-5">
              3 items
            </p>
          </div>
          <div>
            <button className="text-xs rounded-full px-3 py-1 bg-button text-button-text">
              Deliverd
            </button>
          </div>
        </div>
      </div>
      <div className="py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-b-border">
        <div>
          <h1 className="text-[16px] text-primary-text font-medium leading-6">
            Muhammad Abdullah
          </h1>
          <p className="text-secondary-text text-[14px] font-normal leading-5">
            abdullahnasar333@gmail.com
          </p>
        </div>
        <div className="flex gap-3 items-center justify-between sm:justify-start">
          <div>
            <h3 className="text-[16px] text-primary-text font-medium leading-6">
              Rs. 5878
            </h3>
            <p className="text-secondary-text text-[14px] font-normal leading-5">
              3 items
            </p>
          </div>
          <div>
            <button className="text-xs rounded-full px-3 py-1 bg-button text-button-text">
              Deliverd
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentOrders;
