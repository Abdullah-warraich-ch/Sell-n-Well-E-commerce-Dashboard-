import React from 'react';
import { Tag, Trash2 } from 'lucide-react';
import ConfirmAlertDialog from '@/components/common/ConfirmAlertDialog';

const activeSalesData = [
  { id: 1, name: "Eid Mega Sale", discount: "25%", target: "All Categories", status: "Active" },
  { id: 2, name: "Winter Clearance", discount: "50%", target: "Winter Collection", status: "Ending Soon" },
  { id: 3, name: "Accessories Promo", discount: "15%", target: "Accessories", status: "Active" }
];

function ActiveSalesList() {
  return (
    <div className="bg-secondary rounded-[16px] border border-border p-6 shadow-sm h-full">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-[18px] font-semibold tracking-tight text-primary-text flex items-center gap-2">
            <Tag size={20} className="text-warning" />
            Active Sales
          </h2>
          <p className="text-[13px] font-medium text-secondary-text mt-1 opacity-90">
            Currently running discounts and promotions.
          </p>
        </div>
        <span className="bg-[color-mix(in_srgb,var(--bg-primary)_80%,transparent)] px-3 py-1 rounded-full text-[12px] font-semibold border border-border text-primary-text shadow-sm">
          {activeSalesData.length} Campaigns
        </span>
      </div>

      <div className="space-y-4">
        {activeSalesData.map(sale => (
          <div key={sale.id} className="p-4 rounded-xl border border-border bg-[color-mix(in_srgb,var(--bg-primary)_40%,transparent)] hover:bg-[color-mix(in_srgb,var(--bg-primary)_80%,transparent)] transition-colors group flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 shrink-0 rounded-full bg-[color-mix(in_srgb,var(--color-warning)_15%,transparent)] flex items-center justify-center text-warning group-hover:scale-105 transition-transform">
                <Tag size={18} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[15px] font-semibold text-primary-text tracking-tight group-hover:text-warning transition-colors">
                  {sale.name}
                  <span className={`ml-3 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border ${sale.status === 'Active' ? 'text-[var(--color-success)] bg-[color-mix(in_srgb,var(--color-success)_10%,transparent)] border-[color-mix(in_srgb,var(--color-success)_20%,transparent)]' : 'text-[var(--color-warning)] bg-[color-mix(in_srgb,var(--color-warning)_10%,transparent)] border-[color-mix(in_srgb,var(--color-warning)_20%,transparent)]'}`}>
                    {sale.status}
                  </span>
                </h3>
                <div className="flex items-center gap-3 mt-1 text-[13px] font-medium text-secondary-text opacity-90">
                  <span className="text-primary-text font-semibold">{sale.discount} OFF</span>
                  <span className="w-1 h-1 rounded-full bg-border"></span>
                  <span>{sale.target}</span>
                </div>
              </div>
            </div>
            
            <div className="flex sm:justify-end shrink-0">
               <ConfirmAlertDialog 
                 title={`End ${sale.name}?`} 
                 description={`This will immediately remove the ${sale.discount} discount from ${sale.target} and return products to their normal prices.`} 
                 actionLabel="End Sale"
               >
                 <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold text-[color-mix(in_srgb,var(--color-danger)_90%,white)] bg-[color-mix(in_srgb,var(--color-danger)_10%,transparent)] hover:bg-[color-mix(in_srgb,var(--color-danger)_20%,transparent)] transition-colors">
                   <Trash2 size={14} /> End Campaign
                 </button>
               </ConfirmAlertDialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveSalesList;
