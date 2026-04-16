import React from "react";
import { Trash2 } from "lucide-react";
import ConfirmAlertDialog from "@/components/common/ConfirmAlertDialog";

function ProductCard({
  name,
  category,
  price,
  stock,
  description,
  status,
  image,
}) {
  return (
    <article className="group overflow-hidden rounded-[20px] border border-border bg-secondary shadow-sm hover:shadow-md transition-all duration-300 min-w-0 flex flex-col">
      <div className="relative h-48 sm:h-52 overflow-hidden bg-[color-mix(in_srgb,var(--bg-primary)_30%,transparent)]">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className={`absolute top-4 left-4 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase border border-border shadow-sm backdrop-blur-md ${status === 'In Stock' ? 'bg-[color-mix(in_srgb,var(--color-success)_20%,transparent)] text-[var(--color-success)]' : 'bg-[color-mix(in_srgb,var(--color-warning)_20%,transparent)] text-[var(--color-warning)]'}`}>
          {status}
        </span>
      </div>

      <div className="flex flex-col flex-1 px-5 py-6">
        <div>
          <h3 className="text-[17px] font-semibold tracking-tight text-primary-text mb-2 group-hover:text-info transition-colors">
            {name}
          </h3>
          <span className="inline-block rounded-[10px] border border-border bg-[color-mix(in_srgb,var(--bg-primary)_80%,transparent)] px-2.5 py-1 text-[12px] font-medium text-secondary-text shadow-sm">
            {category}
          </span>
        </div>

        <p className="max-w-[28ch] text-[13px] leading-5 font-medium text-secondary-text mt-4 opacity-90 flex-1">
          {description}
        </p>

        <div className="flex items-end justify-between mt-6">
          <p className="text-[18px] font-bold tracking-tight text-primary-text">
            ${price}
          </p>
          <p className="text-[12px] font-medium text-secondary-text">Stock: {stock}</p>
        </div>

        <div className="mt-6 pt-5 border-t border-border/50">
          <ConfirmAlertDialog
            title={`Delete ${name}?`}
            description="This will remove the product from the dashboard inventory view. You can wire the actual delete action next."
            actionLabel="Delete Product"
          >
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[color-mix(in_srgb,var(--color-danger)_10%,transparent)] hover:bg-[color-mix(in_srgb,var(--color-danger)_20%,transparent)] text-[var(--color-danger)] px-4 py-2.5 text-[14px] font-semibold transition-colors duration-200"
            >
              <Trash2 size={16} />
              Delete Product
            </button>
          </ConfirmAlertDialog>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
