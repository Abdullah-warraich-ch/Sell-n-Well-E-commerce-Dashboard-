import React from 'react';
import Button from '@/components/common/Button';
import { SelectAlignItem } from '@/components/forms/Selector';
import { Megaphone } from 'lucide-react';

function CreateAnnounceForm() {
  return (
    <div className="bg-secondary rounded-[16px] border border-border p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-[18px] font-semibold tracking-tight text-primary-text flex items-center gap-2">
          <Megaphone size={20} className="text-info" />
          Create Banner Announcement
        </h2>
        <p className="text-[13px] font-medium text-secondary-text mt-1 opacity-90">
          Publish an alert or promotional message heavily visible on the main store.
        </p>
      </div>
      
      <form className="space-y-5">
        <div>
          <label className="mb-1.5 block text-[13px] font-semibold tracking-wide text-secondary-text uppercase">
            Announcement Title
          </label>
          <input
            type="text"
            placeholder="e.g. Free Shipping on orders over Rs. 5000!"
            className="w-full rounded-xl border border-border bg-primary px-3.5 py-3 text-[14px] font-medium text-primary-text outline-none transition-all focus:border-button focus:ring-2 focus:ring-button/20 hover:border-button/40"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[13px] font-semibold tracking-wide text-secondary-text uppercase">
              Schedule / Duration
            </label>
             <SelectAlignItem
               list={["Next 24 Hours", "Next 3 Days", "Next 7 Days", "Until Cancelled"]}
               defaultValue="next 3 days"
               defaultValueText="Next 3 Days"
             />
          </div>
          <div>
             <label className="mb-1.5 block text-[13px] font-semibold tracking-wide text-secondary-text uppercase">
               Banner Color
             </label>
             <SelectAlignItem
               list={["Informational (Blue)", "Success (Green)", "Warning (Yellow)", "Urgent (Red)"]}
               defaultValue="informational (blue)"
               defaultValueText="Informational (Blue)"
             />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-[13px] font-semibold tracking-wide text-secondary-text uppercase">
            Optional Call-To-Action Link
          </label>
          <input
            type="url"
            placeholder="https://example.com/collection/summer"
            className="w-full rounded-xl border border-border bg-primary px-3.5 py-3 text-[14px] font-medium text-primary-text outline-none transition-all focus:border-button focus:ring-2 focus:ring-button/20 hover:border-button/40"
          />
        </div>

        <div className="mt-2 pt-5 border-t border-border/80">
          <Button type="button" className="w-full sm:w-auto shadow-sm">
            Publish Announcement
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateAnnounceForm;
