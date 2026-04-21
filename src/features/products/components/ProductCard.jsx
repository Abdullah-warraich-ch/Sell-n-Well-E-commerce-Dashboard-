import React from "react";
import { Trash2, Edit2 } from "lucide-react";
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
    <article className="group relative flex flex-col overflow-hidden rounded-[28px] border border-border bg-secondary transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative aspect-[16/11] overflow-hidden bg-[color-mix(in_srgb,var(--bg-primary)_40%,transparent)]">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
        />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-xl backdrop-blur-xl border border-white/20 shadow-lg transition-all duration-300
            ${status === 'In Stock' 
              ? 'bg-success/15 text-success border-success/20' 
              : 'bg-danger/15 text-danger border-danger/20'}`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4">
          <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.15em] text-secondary-text/50">
            {category}
          </span>
          <h3 className="text-[19px] font-bold leading-tight tracking-tight text-primary-text group-hover:text-info transition-colors duration-300">
            {name}
          </h3>
        </div>

        <p className="mb-6 flex-1 text-[13.5px] leading-relaxed text-secondary-text/70 line-clamp-2">
          {description}
        </p>

        {/* Footer Info & Actions */}
        <div className="flex items-center justify-between pt-5 border-t border-border/50">
          <div>
            <p className="text-[20px] font-extrabold tracking-tight text-primary-text">
              <span className="mr-0.5 text-[13px] font-semibold text-secondary-text/60">Rs.</span>
              {Number(price).toLocaleString()}
            </p>
            <p className="text-[11px] font-bold text-secondary-text/40 uppercase tracking-tighter mt-0.5">
              Stock: <span className={stock < 10 ? 'text-danger/70' : 'text-secondary-text/60'}>{stock} units</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-secondary-text hover:bg-info/10 hover:text-info transition-all duration-300" title="Edit Product">
              <Edit2 size={18} strokeWidth={2.5} />
            </button>
            
            <ConfirmAlertDialog
              title={`Delete ${name}?`}
              description="This will remove the product from your inventory permanently."
              actionLabel="Delete Product"
            >
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-danger/5 text-danger/70 hover:bg-danger/10 hover:text-danger transition-all duration-300"
                title="Delete Product"
              >
                <Trash2 size={18} strokeWidth={2.5} />
              </button>
            </ConfirmAlertDialog>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
