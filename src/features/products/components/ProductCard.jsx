import React from "react";
import { Trash2, Edit2 } from "lucide-react";
import ConfirmAlertDialog from "@/components/common/ConfirmAlertDialog";

function ProductCard({
  name,
  category,
  price,
  stock,
  status,
  image,
}) {
  const getStatusDot = (status) => {
    switch (status) {
      case 'In Stock': return 'bg-emerald-500';
      case 'Low Stock': return 'bg-amber-500';
      default: return 'bg-rose-500';
    }
  };

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-secondary">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover" />

        {/* Status */}
        <div className="absolute top-3 right-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-button text-button-text">
            <span className={`h-1.5 w-1.5 rounded-full ${getStatusDot(status)}`} />
            <span className="text-[9px] font-medium uppercase tracking-wider">{status}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <span className="text-[10px] font-medium uppercase tracking-wider text-secondary-text/50 mb-1">
          {category}
        </span>
        <h3 className="text-[15px] font-semibold text-primary-text line-clamp-1 mb-3">
          {name}
        </h3>

        <div className="mt-auto flex items-baseline justify-between mb-4">
          <p className="text-[17px] font-semibold tracking-tight text-primary-text">
            <span className="text-[12px] font-normal text-secondary-text/50 mr-0.5">Rs.</span>
            {Number(price).toLocaleString()}
          </p>
          <span className="text-[11px] font-normal text-secondary-text/50">
            {stock} in stock
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-3 border-t border-border/40">
          <button className="flex-1 flex h-9 items-center justify-center gap-1.5 rounded-lg bg-button/5 text-[12px] font-medium text-primary-text hover:bg-button/10 transition-colors">
            <Edit2 size={13} />
            Edit
          </button>

          <ConfirmAlertDialog
            title={`Delete ${name}?`}
            description="This action cannot be undone."
            actionLabel="Delete"
          >
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-500/5 text-rose-400/60 hover:bg-rose-500/10 hover:text-rose-500 transition-colors"
            >
              <Trash2 size={13} />
            </button>
          </ConfirmAlertDialog>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
