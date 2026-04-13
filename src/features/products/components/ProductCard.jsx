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
    <article className="overflow-hidden rounded-[22px] border border-border bg-secondary shadow-sm min-w-0">
      <div className="relative h-48 sm:h-52 overflow-hidden bg-[color-mix(in_srgb,var(--color-warning)_18%,white)]">
        <img src={image} alt={name} className="h-full w-full object-cover" />
        <span className="absolute top-4 left-4 rounded-full bg-warning px-3 py-1 text-[11px] font-semibold tracking-[0.01em] text-white">
          {status}
        </span>
      </div>

      <div className="space-y-5 px-4 sm:px-5 py-5 sm:py-6">
        <div>
          <h3 className="text-[1.1rem] font-semibold tracking-[-0.02em] text-primary-text leading-7">
            {name}
          </h3>
          <span className="mt-3 inline-block rounded-xl border border-border bg-primary px-3 py-1 text-[12px] leading-4 font-medium text-secondary-text">
            {category}
          </span>
        </div>

        <p className="max-w-[28ch] text-[14px] leading-6 font-medium text-secondary-text">
          {description}
        </p>

        <div className="flex items-end justify-between">
          <p className="text-[1.1rem] font-bold tracking-[-0.03em] text-primary-text leading-7">
            ${price}
          </p>
          <p className="text-sm font-medium text-secondary-text">Stock: {stock}</p>
        </div>

        <ConfirmAlertDialog
          title={`Delete ${name}?`}
          description="This will remove the product from the dashboard inventory view. You can wire the actual delete action next."
          actionLabel="Delete Product"
        >
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-danger px-4 py-2 text-[14px] font-semibold tracking-[-0.01em] text-white transition hover:bg-danger/85"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </ConfirmAlertDialog>
      </div>
    </article>
  );
}

export default ProductCard;
