import OrderPageOrderContainer from "@/components/ui/CustomUi/OrderPageOrderContainer";
import Search from "@/components/ui/CustomUi/Search";
import { SelectAlignItem } from "@/components/ui/CustomUi/Selector";
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
      <OrderPageOrderContainer />
    </div>
  );
}

export default Orders;
