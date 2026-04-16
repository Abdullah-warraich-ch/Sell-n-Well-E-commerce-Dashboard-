import React from 'react';
import Button from '@/components/common/Button';
import { SelectAlignItem } from '@/components/forms/Selector';
import { Percent } from 'lucide-react';

function CreateSaleForm() {
  return (
    <div className="bg-secondary rounded-[16px] border border-border p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-[18px] font-semibold tracking-tight text-primary-text flex items-center gap-2">
          <Percent size={20} className="text-info" />
          Create New Sale
        </h2>
        <p className="text-[13px] font-medium text-secondary-text mt-1 opacity-90">
          Apply a promotional discount to specific categories or store-wide.
        </p>
      </div>
      
      <form className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[13px] font-semibold tracking-wide text-secondary-text uppercase">
              Sale / Campaign Name
            </label>
            <input
              type="text"
              placeholder="e.g. Summer Clearance"
              className="w-full rounded-xl border border-border bg-primary px-3.5 py-3 text-[14px] font-medium text-primary-text outline-none transition-all focus:border-button focus:ring-2 focus:ring-button/20 hover:border-button/40"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-[13px] font-semibold tracking-wide text-secondary-text uppercase">
              Discount Percentage (%)
            </label>
            <input
              type="number"
              placeholder="e.g. 20"
              className="w-full rounded-xl border border-border bg-primary px-3.5 py-3 text-[14px] font-medium text-primary-text outline-none transition-all focus:border-button focus:ring-2 focus:ring-button/20 hover:border-button/40"
            />
          </div>
        </div>

        <div>
           <label className="mb-1.5 block text-[13px] font-semibold tracking-wide text-secondary-text uppercase">
             Apply To Target
           </label>
           <SelectAlignItem
             list={["All Categories (Store-wide)", "Men's Apparel", "Women's Collection", "Accessories", "Footwear"]}
             defaultValue="all categories (store-wide)"
             defaultValueText="All Categories (Store-wide)"
           />
        </div>

        <div className="mt-2 pt-5 border-t border-border/80">
          <Button type="button" className="w-full sm:w-auto shadow-sm">
            Launch Sale Campaign
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateSaleForm;
