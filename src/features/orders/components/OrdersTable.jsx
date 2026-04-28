import React from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import { useOrders } from "@/hooks/useOrders";
import { Link } from "react-router-dom";

function OrdersTable() {
  const { orders, loading, error } = useOrders();

  const getBadgeColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'delivered': return 'text-[var(--color-success)] bg-[color-mix(in_srgb,var(--color-success)_10%,transparent)] border-[color-mix(in_srgb,var(--color-success)_20%,transparent)]';
      case 'pending': return 'text-[var(--color-warning)] bg-[color-mix(in_srgb,var(--color-warning)_10%,transparent)] border-[color-mix(in_srgb,var(--color-warning)_20%,transparent)]';
      case 'processing': return 'text-[var(--color-info)] bg-[color-mix(in_srgb,var(--color-info)_10%,transparent)] border-[color-mix(in_srgb,var(--color-info)_20%,transparent)]';
      case 'cancelled': return 'text-[var(--color-danger)] bg-[color-mix(in_srgb,var(--color-danger)_10%,transparent)] border-[color-mix(in_srgb,var(--color-danger)_20%,transparent)]';
      case 'shipped': return 'text-[var(--color-info)] bg-[color-mix(in_srgb,var(--color-info)_10%,transparent)] border-[color-mix(in_srgb,var(--color-info)_20%,transparent)]';
      case 'returned': return 'text-secondary-text bg-[color-mix(in_srgb,var(--text-secondary)_10%,transparent)] border-border';
      default: return 'bg-[color-mix(in_srgb,var(--text-secondary)_10%,transparent)] text-secondary-text border-border';
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 bg-secondary rounded-[16px] border border-border">
        <Loader2 className="w-8 h-8 animate-spin text-info" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-secondary rounded-[16px] border border-border text-center p-6">
        <p className="text-danger font-semibold">Error loading orders</p>
        <p className="text-secondary-text text-sm mt-1">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="bg-secondary flex flex-col rounded-[16px] border border-border shadow-sm overflow-hidden">
      <div className="p-5 sm:p-6 border-b border-border flex justify-between items-center bg-[color-mix(in_srgb,var(--bg-primary)_10%,transparent)]">
        <div>
          <h1 className="text-[19px] leading-7 text-primary-text font-semibold tracking-tight">
            All Orders <span className="text-secondary-text font-medium text-[15px] ml-1">({orders.length})</span>
          </h1>
          <p className="text-[13px] text-secondary-text mt-1 opacity-90">Manage, track, and update your recent store orders.</p>
        </div>
      </div>
      
      <div className="overflow-x-auto home-scrollbar pb-2">
        {orders.length === 0 ? (
          <div className="p-12 text-center text-secondary-text">
            No orders found.
          </div>
        ) : (
          <table className="w-full min-w-[900px] text-left border-collapse">
            <thead>
              <tr className="border-b border-border text-[13px] font-semibold tracking-wide text-secondary-text uppercase bg-[color-mix(in_srgb,var(--bg-primary)_20%,transparent)]">
                <th className="p-4 px-6 font-semibold">Order ID</th>
                <th className="p-4 font-semibold">Customer</th>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold text-center">Items</th>
                <th className="p-4 font-semibold">Total Amount</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-center w-[120px]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {orders.map((order) => {
                const totalQuantity = order.items?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0;
                
                return (
                  <tr key={order.id} className="hover:bg-[color-mix(in_srgb,var(--bg-primary)_60%,transparent)] transition-colors group relative cursor-default">
                    <td className="p-4 px-6">
                      <span className="text-[13px] font-semibold text-primary-text bg-[color-mix(in_srgb,var(--bg-primary)_80%,transparent)] px-2.5 py-1 rounded-md border border-border shadow-sm">
                        {order.orderId || order.id}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[15px] font-semibold text-primary-text group-hover:text-info transition-colors">
                          {order.customerInfo?.name || "Unknown"}
                        </span>
                        <span className="text-[13px] text-secondary-text font-medium opacity-80">
                          {order.customerInfo?.email || "No Email"}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-[14px] font-medium text-secondary-text">
                      {formatDate(order.createdAt)}
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center items-center">
                        <span className="text-[13px] font-semibold text-primary-text bg-[color-mix(in_srgb,var(--text-primary)_5%,transparent)] px-2.5 py-1 rounded-lg border border-[color-mix(in_srgb,var(--text-primary)_10%,transparent)]">
                          {totalQuantity}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-[15px] font-semibold text-primary-text">
                        Rs. {order.total?.toLocaleString() || 0}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${getBadgeColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center">
                        <Link 
                          to={`/orders/${order.id}`}
                          className="text-secondary-text hover:text-info p-2 rounded-lg hover:bg-[color-mix(in_srgb,var(--color-info)_10%,transparent)] transition-all flex items-center justify-center group/btn"
                        >
                          <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default OrdersTable;
