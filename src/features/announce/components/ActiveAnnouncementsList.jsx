import React from 'react';
import { Megaphone, Trash2, ArrowUpRight } from 'lucide-react';
import ConfirmAlertDialog from '@/components/common/ConfirmAlertDialog';

const activeAnnouncementsData = [
  { id: 1, title: "🚀 Free Shipping on all orders over $100!", duration: "Next 3 Days", type: "success" },
  { id: 2, title: "⚠️ Expected Delivery Delays due to heavy rain.", duration: "Until Cancelled", type: "warning" },
];

function ActiveAnnouncementsList() {
  return (
    <div className="bg-secondary rounded-[16px] border border-border p-6 shadow-sm h-full flex flex-col">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-[18px] font-semibold tracking-tight text-primary-text flex items-center gap-2">
            <Megaphone size={20} className="text-warning" />
            Active Announcements
          </h2>
          <p className="text-[13px] font-medium text-secondary-text mt-1 opacity-90">
            Messages currently displayed on the storefront.
          </p>
        </div>
        <span className="bg-[color-mix(in_srgb,var(--bg-primary)_80%,transparent)] px-3 py-1 rounded-full text-[12px] font-semibold border border-border text-primary-text shadow-sm">
          {activeAnnouncementsData.length} Live
        </span>
      </div>

      <div className="space-y-4 flex-1">
        {activeAnnouncementsData.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 text-center h-full border border-dashed border-border rounded-xl">
             <Megaphone className="text-secondary-text mb-3" size={32} />
             <p className="text-[15px] font-semibold text-primary-text">No active announcements</p>
             <p className="text-[13px] text-secondary-text mt-1">Your store banner is currently invisible.</p>
          </div>
        ) : (
          activeAnnouncementsData.map(alert => (
            <div key={alert.id} className="p-4 rounded-xl border border-border bg-[color-mix(in_srgb,var(--bg-primary)_40%,transparent)] hover:bg-[color-mix(in_srgb,var(--bg-primary)_80%,transparent)] transition-colors group flex flex-col gap-4">
              <div className="flex gap-4 items-start">
                <div className={`h-10 w-10 shrink-0 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform ${alert.type === 'warning' ? 'bg-[color-mix(in_srgb,var(--color-warning)_15%,transparent)] text-warning' : 'bg-[color-mix(in_srgb,var(--color-success)_15%,transparent)] text-[var(--color-success)]'}`}>
                  <Megaphone size={18} />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-[15px] font-semibold text-primary-text tracking-tight group-hover:text-info transition-colors leading-6">
                    {alert.title}
                  </h3>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 text-[12px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border border-border text-secondary-text bg-[color-mix(in_srgb,var(--bg-primary)_80%,transparent)] shadow-sm">
                       {alert.duration}
                    </div>
                    <ConfirmAlertDialog 
                      title="Remove Announcement?" 
                      description="This will immediately pull down the banner from the customer-facing storefront." 
                      actionLabel="Remove"
                    >
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold text-[color-mix(in_srgb,var(--color-danger)_90%,white)] bg-[color-mix(in_srgb,var(--color-danger)_10%,transparent)] hover:bg-[color-mix(in_srgb,var(--color-danger)_20%,transparent)] transition-colors">
                        <Trash2 size={14} /> Pull Down
                      </button>
                    </ConfirmAlertDialog>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ActiveAnnouncementsList;
