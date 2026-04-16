import { Tag, ArrowRight } from 'lucide-react'
import React from 'react'

function CategoryCard({ name, products }) {
    return (
        <div className="p-5 bg-secondary rounded-[16px] border border-border shadow-sm hover:shadow-md hover:border-[color-mix(in_srgb,var(--color-info)_30%,transparent)] transition-all duration-300 group cursor-pointer flex justify-between items-center relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-info/10 blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="flex items-center gap-4 z-10">
                <div className="w-12 h-12 rounded-full bg-[color-mix(in_srgb,var(--color-info)_12%,transparent)] flex items-center justify-center text-info group-hover:scale-110 transition-transform">
                    <Tag size={20} />
                </div>
                <div>
                    <h1 className="text-[16px] font-semibold text-primary-text tracking-tight group-hover:text-info transition-colors">{name}</h1>
                    <p className="text-[13px] font-medium text-secondary-text mt-0.5 opacity-90">{products} {products === 1 ? 'Product' : 'Products'}</p>
                </div>
            </div>

            <div className="z-10 bg-[color-mix(in_srgb,var(--text-primary)_5%,transparent)] p-2 rounded-xl text-secondary-text group-hover:text-info group-hover:translate-x-1 transition-all">
                <ArrowRight size={18} />
            </div>
        </div>
    )
}
export default CategoryCard;
