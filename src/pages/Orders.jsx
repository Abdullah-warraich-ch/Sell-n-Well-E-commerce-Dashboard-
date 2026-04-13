import Search from "@/components/forms/Search";
import { SelectAlignItem } from "@/components/forms/Selector";
import OrdersTable from "@/features/orders/components/OrdersTable";
import React from "react";

function Orders() {
  return (
    <div className=" p-8 flex flex-col gap-10">
      <div className="flex gap-5 items-center">
        <Search placeholder="Search Orders By OrderId, Customer Name, Email..." />
        <SelectAlignItem
          list={["Delivered", "Pending", "Processing", "Shipped"]}
          defaultValue="all"
          defaultValueText="All Status"
        />
      </div>
      <OrdersTable />
    </div>
  );
}

export default Orders;
