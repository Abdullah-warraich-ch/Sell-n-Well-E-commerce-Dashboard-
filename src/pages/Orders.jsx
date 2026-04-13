import Search from "@/components/forms/Search";
import { SelectAlignItem } from "@/components/forms/Selector";
import OrdersTable from "@/features/orders/components/OrdersTable";
import React from "react";

function Orders() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6 sm:gap-8 lg:gap-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Search placeholder="Search Orders By OrderId, Customer Name, Email..." />
        <div className="w-full sm:w-auto">
          <SelectAlignItem
            list={["Delivered", "Pending", "Processing", "Shipped"]}
            defaultValue="all"
            defaultValueText="All Status"
          />
        </div>
      </div>
      <OrdersTable />
    </div>
  );
}

export default Orders;
