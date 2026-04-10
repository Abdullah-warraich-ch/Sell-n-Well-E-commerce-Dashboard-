import Search from "@/components/ui/CustomUi/Search";
import React from "react";

function Orders() {
  return (
    <div className=" p-8 flex flex-col gap-10">
      <div className="flex gap-5">
        <Search placeholder="Search Orders By OrderId, Customer Name, Email..." />
        <select className="w-1/6 p-2 bg-input border-0 outline-0 rounded-lg text-sm font-medium pr-10">
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>
    </div>
  );
}

export default Orders;
