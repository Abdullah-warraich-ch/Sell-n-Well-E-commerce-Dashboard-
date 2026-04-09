import Search from "@/components/ui/CustomUi/Search";
import React from "react";

function Orders() {
  return (
    <div className=" p-8 flex flex-col gap-10">
      <div>
        <Search placeholder="Search Orders By OrderId, Customer Name, Email..." />
      </div>
    </div>
  );
}

export default Orders;
