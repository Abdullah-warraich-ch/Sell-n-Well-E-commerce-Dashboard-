import React from "react";
import { SelectAlignItem } from "@/components/forms/Selector";
import { MoreVertical } from "lucide-react";

const ordersData = [
  { id: "#12345", name: "John Doe", email: "john@example.com", date: "2024-06-01", items: 3, total: "Rs. 1500", status: "Processing", statusColor: "warning" },
  { id: "#12346", name: "Jane Smith", email: "jane.smith@example.com", date: "2024-06-02", items: 2, total: "Rs. 1000", status: "Shipped", statusColor: "info" },
  { id: "#12347", name: "Bob Johnson", email: "bob.j@domain.com", date: "2024-06-03", items: 1, total: "Rs. 500", status: "Delivered", statusColor: "success" },
  { id: "#12348", name: "Alice Williams", email: "alice.w@email.com", date: "2024-06-04", items: 4, total: "Rs. 2000", status: "Cancelled", statusColor: "danger" },
  { id: "#12349", name: "Muhammad Abdullah", email: "abdullah@email.com", date: "2024-06-05", items: 6, total: "Rs. 12500", status: "Delivered", statusColor: "success" },
];

function OrdersTable() {
  const getBadgeColor = (type) => {
    switch(type) {
      case 'success': return 'text-[var(--color-success)] bg-[color-mix(in_srgb,var(--color-success)_10%,transparent)] border-[color-mix(in_srgb,var(--color-success)_20%,transparent)]';
      case 'warning': return 'text-[var(--color-warning)] bg-[color-mix(in_srgb,var(--color-warning)_10%,transparent)] border-[color-mix(in_srgb,var(--color-warning)_20%,transparent)]';
      case 'info': return 'text-[var(--color-info)] bg-[color-mix(in_srgb,var(--color-info)_10%,transparent)] border-[color-mix(in_srgb,var(--color-info)_20%,transparent)]';
      case 'danger': return 'text-[var(--color-danger)] bg-[color-mix(in_srgb,var(--color-danger)_10%,transparent)] border-[color-mix(in_srgb,var(--color-danger)_20%,transparent)]';
      default: return 'bg-[color-mix(in_srgb,var(--text-secondary)_10%,transparent)] text-secondary-text border-border';
    }
  };

  return (
    <div className="bg-secondary flex flex-col rounded-[16px] border border-border shadow-sm overflow-hidden">
      <div className="p-5 sm:p-6 border-b border-border flex justify-between items-center bg-[color-mix(in_srgb,var(--bg-primary)_10%,transparent)]">
        <div>
          <h1 className="text-[19px] leading-7 text-primary-text font-semibold tracking-tight">
            All Orders <span className="text-secondary-text font-medium text-[15px] ml-1">({ordersData.length})</span>
          </h1>
          <p className="text-[13px] text-secondary-text mt-1 opacity-90">Manage, track, and update your recent store orders.</p>
        </div>
      </div>
      
      <div className="overflow-x-auto home-scrollbar pb-2">
        <table className="w-full min-w-[900px] text-left border-collapse">
          <thead>
            <tr className="border-b border-border text-[13px] font-semibold tracking-wide text-secondary-text uppercase bg-[color-mix(in_srgb,var(--bg-primary)_20%,transparent)]">
              <th className="p-4 px-6 font-semibold">Order ID</th>
              <th className="p-4 font-semibold">Customer</th>
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold text-center">Items</th>
              <th className="p-4 font-semibold">Total Amount</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-center w-[180px]">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {ordersData.map((order, idx) => (
              <tr key={idx} className="hover:bg-[color-mix(in_srgb,var(--bg-primary)_60%,transparent)] transition-colors group relative cursor-default">
                <td className="p-4 px-6">
                  <span className="text-[13px] font-semibold text-primary-text bg-[color-mix(in_srgb,var(--bg-primary)_80%,transparent)] px-2.5 py-1 rounded-md border border-border shadow-sm">{order.id}</span>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-semibold text-primary-text group-hover:text-info transition-colors">{order.name}</span>
                    <span className="text-[13px] text-secondary-text font-medium opacity-80">{order.email}</span>
                  </div>
                </td>
                <td className="p-4 text-[14px] font-medium text-secondary-text">{order.date}</td>
                <td className="p-4 text-center">
                   <div className="flex justify-center items-center">
                     <span className="text-[13px] font-semibold text-primary-text bg-[color-mix(in_srgb,var(--text-primary)_5%,transparent)] px-2.5 py-1 rounded-lg border border-[color-mix(in_srgb,var(--text-primary)_10%,transparent)]">
                       {order.items}
                     </span>
                   </div>
                </td>
                <td className="p-4">
                  <span className="text-[15px] font-semibold text-primary-text">{order.total}</span>
                </td>
                <td className="p-4">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${getBadgeColor(order.statusColor)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                    <SelectAlignItem
                      list={["Delivered", "Processing", "Shipped", "Cancelled"]}
                      defaultValue={order.status.toLowerCase()}
                      defaultValueText={order.status}
                    />
                    <button className="text-secondary-text hover:text-primary-text p-1.5 rounded-lg hover:bg-[color-mix(in_srgb,var(--text-primary)_10%,transparent)] transition-colors pointer-events-auto h-9 w-9 flex items-center justify-center flex-shrink-0">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersTable;
