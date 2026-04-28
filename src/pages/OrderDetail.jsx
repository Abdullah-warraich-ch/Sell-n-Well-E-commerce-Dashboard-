import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ChevronLeft, 
  Package, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  CreditCard, 
  Loader2,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Clock
} from "lucide-react";
import { useOrderDetail, updateOrderStatus } from "@/hooks/useOrders";

function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { order, loading, error } = useOrderDetail(id);
  const [updating, setUpdating] = useState(false);

  const handleStatusUpdate = async (newStatus) => {
    setUpdating(true);
    const result = await updateOrderStatus(id, newStatus);
    if (result.success) {
      // Reload the page or update local state
      window.location.reload();
    } else {
      alert("Failed to update status");
    }
    setUpdating(false);
  };

  const getStatusStyle = (status) => {
    switch(status?.toLowerCase()) {
      case 'delivered': return 'text-success bg-success/10 border-success/20';
      case 'pending': return 'text-warning bg-warning/10 border-warning/20';
      case 'processing': return 'text-info bg-info/10 border-info/20';
      case 'cancelled': return 'text-danger bg-danger/10 border-danger/20';
      case 'shipped': return 'text-info bg-info/10 border-info/20';
      case 'returned': return 'text-secondary-text bg-secondary/10 border-border';
      default: return 'text-secondary-text bg-secondary/10 border-border';
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 animate-spin text-info" />
        <p className="mt-4 text-secondary-text font-medium">Loading order details...</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <div className="bg-danger/10 p-4 rounded-full mb-4">
          <XCircle className="w-12 h-12 text-danger" />
        </div>
        <h2 className="text-2xl font-bold text-primary-text">Order Not Found</h2>
        <p className="mt-2 text-secondary-text max-w-md">The order you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={() => navigate("/orders")}
          className="mt-6 px-6 py-2.5 bg-primary text-primary-inverse rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <ChevronLeft size={20} /> Back to Orders
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12 p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate("/orders")}
            className="p-2.5 rounded-xl border border-border bg-secondary hover:bg-border/50 transition-colors text-primary-text shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-primary-text">Order {order.orderId}</h1>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusStyle(order.status)}`}>
                {order.status}
              </span>
            </div>
            <p className="text-secondary-text text-sm flex items-center gap-1.5 mt-1">
              <Calendar size={14} /> Ordered on {formatDate(order.createdAt)}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          {order.status !== 'pending' && (
            <button 
              disabled={updating}
              onClick={() => handleStatusUpdate('pending')}
              className="px-4 py-2 bg-secondary text-primary-text border border-border rounded-xl font-bold text-sm hover:bg-border transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <RotateCcw size={16} /> Reset to Pending
            </button>
          )}
          {order.status === 'pending' && (
            <button 
              disabled={updating}
              onClick={() => handleStatusUpdate('processing')}
              className="px-4 py-2 bg-info/10 text-info border border-info/20 rounded-xl font-bold text-sm hover:bg-info hover:text-white transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <Clock size={16} /> Start Processing
            </button>
          )}
          {order.status === 'processing' && (
            <button 
              disabled={updating}
              onClick={() => handleStatusUpdate('shipped')}
              className="px-4 py-2 bg-info text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <Package size={16} /> Mark as Shipped
            </button>
          )}
          {(order.status === 'shipped' || order.status === 'processing') && (
            <button 
              disabled={updating}
              onClick={() => handleStatusUpdate('delivered')}
              className="px-4 py-2 bg-success text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <CheckCircle2 size={16} /> Mark as Delivered
            </button>
          )}
          {order.status !== 'cancelled' && order.status !== 'delivered' && (
            <button 
              disabled={updating}
              onClick={() => handleStatusUpdate('cancelled')}
              className="px-4 py-2 bg-danger/10 text-danger border border-danger/20 rounded-xl font-bold text-sm hover:bg-danger hover:text-white transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <XCircle size={16} /> Cancel Order
            </button>
          )}
          {order.status === 'delivered' && (
            <button 
              disabled={updating}
              onClick={() => handleStatusUpdate('returned')}
              className="px-4 py-2 bg-secondary text-primary-text border border-border rounded-xl font-bold text-sm hover:bg-border transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <RotateCcw size={16} /> Mark as Returned
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Items */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-secondary rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="p-5 border-b border-border bg-[color-mix(in_srgb,var(--bg-primary)_10%,transparent)]">
              <h3 className="font-bold text-primary-text flex items-center gap-2">
                <Package size={18} className="text-info" /> Items Breakdown
              </h3>
            </div>
            <div className="divide-y divide-border/60">
              {order.items?.map((item, idx) => (
                <div key={idx} className="p-5 flex items-center justify-between group hover:bg-[color-mix(in_srgb,var(--bg-primary)_30%,transparent)] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-[color-mix(in_srgb,var(--bg-primary)_50%,transparent)] border border-border flex items-center justify-center text-secondary-text font-bold text-xs uppercase">
                      {item.size || "No Size"}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-text group-hover:text-info transition-colors">{item.name}</h4>
                      <div className="flex items-center gap-3 mt-1">
                         <span className="text-xs font-semibold px-2 py-0.5 rounded bg-border/50 text-secondary-text">{item.gender}</span>
                         <span className="text-sm text-secondary-text font-medium">Qty: <span className="text-primary-text">{item.quantity}</span></span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary-text">Rs. {item.price?.toLocaleString()}</p>
                    <p className="text-xs text-secondary-text mt-1">Total: Rs. {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 bg-[color-mix(in_srgb,var(--bg-primary)_10%,transparent)] border-t border-border space-y-3">
              <div className="flex justify-between text-secondary-text font-medium">
                <span>Subtotal</span>
                <span>Rs. {order.total?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-secondary-text font-medium">
                <span>Shipping Fee</span>
                <span className="text-success font-bold">FREE</span>
              </div>
              <div className="pt-3 border-t border-border flex justify-between items-center">
                <span className="text-lg font-bold text-primary-text">Total Amount</span>
                <span className="text-2xl font-black text-info">Rs. {order.total?.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Customer Info */}
        <div className="space-y-6">
          <div className="bg-secondary rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="p-5 border-b border-border bg-[color-mix(in_srgb,var(--bg-primary)_10%,transparent)]">
              <h3 className="font-bold text-primary-text flex items-center gap-2">
                <User size={18} className="text-info" /> Customer Details
              </h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-info/10 text-info">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary-text uppercase tracking-wider">Full Name</p>
                  <p className="font-bold text-primary-text text-lg mt-0.5">{order.customerInfo?.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-warning/10 text-warning">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-secondary-text uppercase tracking-wider">Email Address</p>
                  <p className="font-bold text-primary-text truncate mt-0.5">{order.customerInfo?.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-success/10 text-success">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary-text uppercase tracking-wider">Phone Number</p>
                  <p className="font-bold text-primary-text mt-0.5">{order.customerInfo?.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-border">
                <div className="p-2.5 rounded-xl bg-danger/10 text-danger">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary-text uppercase tracking-wider">Shipping Address</p>
                  <p className="font-medium text-primary-text mt-1 leading-relaxed">
                    {order.customerInfo?.address}<br />
                    <span className="font-bold">{order.customerInfo?.city}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-2xl border border-border p-6 shadow-sm">
             <div className="flex items-center gap-3 mb-4">
               <CreditCard className="text-info" size={20} />
               <h3 className="font-bold text-primary-text">Payment Information</h3>
             </div>
             <div className="bg-[color-mix(in_srgb,var(--bg-primary)_20%,transparent)] rounded-xl p-4 border border-border">
                <p className="text-sm font-semibold text-primary-text">Cash on Delivery</p>
                <p className="text-xs text-secondary-text mt-1 italic">Customer will pay upon arrival of package.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
