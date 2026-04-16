import { Handbag, ArrowRight, ExternalLink } from "lucide-react";
import React from "react";

const ordersData = [
  { id: "#4892", name: "Muhammad Abdullah", email: "abdullahnasar333@gmail.com", amount: "Rs. 5878", items: 3, status: "Delivered", statusColor: "success" },
  { id: "#4891", name: "Ahmed Khan", email: "ahmed.k@example.com", amount: "Rs. 1240", items: 1, status: "Processing", statusColor: "warning" },
  { id: "#4890", name: "Sara Ali", email: "sara.ali@domain.com", amount: "Rs. 8920", items: 5, status: "Shipped", statusColor: "info" },
  { id: "#4889", name: "John Doe", email: "johndoe@email.com", amount: "Rs. 3200", items: 2, status: "Delivered", statusColor: "success" },
];

function RecentOrders() {
  const getBadgeColor = (type) => {
    switch(type) {
      case 'success': return 'text-[var(--color-success)] bg-[color-mix(in_srgb,var(--color-success)_10%,transparent)] border-[color-mix(in_srgb,var(--color-success)_20%,transparent)]';
      case 'warning': return 'text-[var(--color-warning)] bg-[color-mix(in_srgb,var(--color-warning)_10%,transparent)] border-[color-mix(in_srgb,var(--color-warning)_20%,transparent)]';
      case 'info': return 'text-[var(--color-info)] bg-[color-mix(in_srgb,var(--color-info)_10%,transparent)] border-[color-mix(in_srgb,var(--color-info)_20%,transparent)]';
      default: return 'bg-button text-button-text border-button';
    }
  };

  return (
    <div className="relative p-5 sm:p-7 bg-secondary rounded-[16px] border border-border flex flex-col h-full transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden">
      <div className="flex justify-between items-center mb-6 z-10">
        <div>
          <h1 className="text-[19px] text-primary-text font-extrabold tracking-[-0.02em] leading-7">
            Recent Orders
          </h1>
          <p className="text-[13px] text-secondary-text mt-1 font-medium">
            Latest 4 orders across your store.
          </p>
        </div>
        <button className="text-[13px] font-bold text-info hover:text-[color-mix(in_srgb,var(--color-info)_80%,transparent)] flex items-center gap-1 transition-colors px-3 py-1.5 rounded-lg hover:bg-[color-mix(in_srgb,var(--color-info)_10%,transparent)]">
          View All <ArrowRight size={14} className="ml-0.5" />
        </button>
      </div>

      <Handbag
        className="absolute -right-6 top-6 opacity-[0.03] rotate-12 hidden lg:block pointer-events-none"
        size={250}
        color="currentColor"
      />

      <div className="flex flex-col divide-y divide-border -mx-2 z-10">
        {ordersData.map((order, idx) => (
          <div key={idx} className="p-3 sm:px-4 py-4 flex flex-col sm:flex-row sm:items-center justify-between group hover:bg-[color-mix(in_srgb,var(--bg-primary)_50%,transparent)] transition-colors rounded-xl mx-2">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-primary flex items-center justify-center font-bold text-primary-text text-[14px] border border-border shadow-sm">
                {order.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-[15px] text-primary-text font-bold tracking-tight flex items-center gap-2">
                  {order.name}
                  <span className="text-[11px] font-bold text-secondary-text bg-[color-mix(in_srgb,var(--bg-primary)_80%,transparent)] px-1.5 py-[2px] rounded-md border border-border">
                    {order.id}
                  </span>
                </h1>
                <p className="text-secondary-text text-[13px] font-medium mt-0.5">
                  {order.email}
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 sm:gap-6 items-center justify-between sm:justify-end mt-4 sm:mt-0 ml-14 sm:ml-0">
              <div className="text-left sm:text-right">
                <h3 className="text-[15px] text-primary-text font-bold tracking-tight">
                  {order.amount}
                </h3>
                <p className="text-secondary-text text-[13px] font-medium mt-0.5">
                  {order.items} {order.items === 1 ? 'item' : 'items'}
                </p>
              </div>
              <div className="flex items-center gap-3 w-[110px] sm:w-[130px] justify-end">
                <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider border ${getBadgeColor(order.statusColor)}`}>
                  {order.status}
                </span>
                <button className="text-secondary-text hover:text-info transition-colors p-2 rounded-lg hover:bg-[color-mix(in_srgb,var(--color-info)_10%,transparent)] opacity-0 group-hover:opacity-100 hidden sm:block">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentOrders;
