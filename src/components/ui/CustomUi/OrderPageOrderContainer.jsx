import React from "react";

function OrderPageOrderContainer() {
  return (
    <div className="bg-secondary p-8 rounded-2xl border border-border">
      <h1 className="mb-4 leading-4 text-[16px] text-primary-text font-medium">
        Orders(4)
      </h1>
      <table className="w-full ">
        <thead className="text-left ">
          <tr className="border-b border-border font-bold text-[14px] leading-5 text-secondary-text   ">
            <th className="p-2 ">Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border/20 hover:bg-primary  text-[16px] leading-6    ">
            <td className="p-3 font-medium text-primary-text">#12345</td>
            <td className="font-medium text-primary-text">John Doe</td>
            <td className="font-light text-secondary-text">2024-06-01</td>
            <td className="font-light text-secondary-text">3</td>
            <td className="font-medium text-primary-text">Rs. 1500</td>
            <td>Processing</td>
            <td>Nill</td>
          </tr>
          <tr className="border-b border-border/20 hover:bg-primary  text-[16px] leading-6    ">
            <td className="p-3 font-medium text-primary-text">#12346</td>
            <td className="font-medium text-primary-text">Jane Smith</td>
            <td className="font-light text-secondary-text">2024-06-02</td>
            <td className="font-light text-secondary-text">2</td>
            <td className="font-medium text-primary-text">Rs. 1000</td>
            <td className="font-medium text-primary-text">Shipped</td>
            <td>Nill</td>
          </tr>
          <tr className="border-b border-border/20 hover:bg-primary  text-[16px] leading-6    ">
            <td className="p-3 font-medium text-primary-text">#12347</td>
            <td className="font-medium text-primary-text">Bob Johnson</td>
            <td className="font-light text-secondary-text">2024-06-03</td>
            <td className="font-light text-secondary-text">1</td>
            <td className="font-medium text-primary-text">Rs. 500</td>
            <td className="font-medium text-primary-text">Delivered</td>
            <td>Nill</td>
          </tr>
          <tr className="border-b border-border/20 hover:bg-primary  text-[16px] leading-6    ">
            <td className="p-3 font-medium text-primary-text">#12348</td>
            <td className="font-medium text-primary-text">Alice Williams</td>
            <td className="font-light text-secondary-text">2024-06-04</td>
            <td className="font-light text-secondary-text">4</td>
            <td className="font-medium text-primary-text">Rs. 2000</td>
            <td className="font-medium text-primary-text">Cancelled</td>
            <td>Nill</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderPageOrderContainer;
