import { Tag, ArrowRight, Delete, Trash } from 'lucide-react'
import React from 'react'

function CategoryCard({ name, products }) {
    return (
        <div className="p-5 bg-secondary rounded-[16px] border border-border shadow-sm hover:shadow-md hover:border-[color-mix(in_srgb,var(--color-info)_30%,transparent)] transition-all duration-300 cursor-pointer flex justify-between gap-10 relative overflow-hidden flex-col">
            {/* Subtle glow effect */}
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-info/10 blur-[30px] opacity-100 transition-opacity pointer-events-none" />

            <div className="flex items-center gap-4 z-10">
                <div className="w-12 h-12 rounded-full bg-[color-mix(in_srgb,var(--color-info)_12%,transparent)] flex items-center justify-center text-info group-hover:scale-110 transition-transform">
                    <Tag size={20} />
                </div>
                <div>
                    <h1 className="text-[16px] font-semibold text-primary-text tracking-tight group-hover:text-info transition-colors">{name}</h1>
                    <p className="text-[13px] font-medium text-secondary-text mt-0.5 opacity-90">{products} {products === 1 ? 'Product' : 'Products'}</p>
                </div>
            </div>

            <div className="z-10 bg-secondary p-2 rounded-xl text-danger hover:bg-danger/10 border border-border flex justify-center items-center gap-2 transition-all">
                <Trash size={18} /> <span className="text-[13px] font-medium">Delete</span>
            </div>
        </div>
    )
}
export default CategoryCard;
