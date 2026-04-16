import React from "react";
import { Info, ArrowRight, Plus, Megaphone, BarChart2 } from "lucide-react";
import StatsOverview from "@/features/home/components/StatsOverview";
import RecentOrders from "@/features/home/components/RecentOrders";

function Home() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6 sm:gap-8 min-h-full animate-in fade-in duration-500">
      {/* Dashboard Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary-text">
            Dashboard Overview
          </h1>
          <p className="text-sm font-medium text-secondary-text mt-1.5 opacity-90">
            Here's what's happening with your store today.
          </p>
        </div>
        
        <div className="flex p-3 gap-3 items-center bg-[color-mix(in_srgb,var(--color-info)_10%,transparent)] border border-[color-mix(in_srgb,var(--color-info)_20%,transparent)] rounded-xl shadow-sm transition-all hover:bg-[color-mix(in_srgb,var(--color-info)_15%,transparent)] group cursor-pointer w-fit md:w-auto">
          <Info className="text-info" size={20} />
          <p className="text-[13px] font-semibold text-primary-text">
            2 active announcements
          </p>
          <ArrowRight size={16} className="text-info ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Stats Overview */}
      <StatsOverview />

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 mt-2">
        <div className="xl:col-span-2">
          <RecentOrders />
        </div>
        
        {/* Quick Actions Panel */}
        <div className="xl:col-span-1">
          <div className="p-5 sm:p-7 bg-secondary rounded-[16px] border border-border shadow-sm h-full flex flex-col">
            <h2 className="text-[18px] font-semibold text-primary-text tracking-tight mb-1">
              Quick Actions
            </h2>
            <p className="text-[13px] text-secondary-text font-medium mb-6 opacity-90">
              Manage your store efficiently.
            </p>
            
            <div className="flex flex-col gap-3">
              <button className="w-full text-left p-4 bg-primary rounded-xl text-[14px] font-bold text-primary-text hover:bg-[color-mix(in_srgb,var(--color-info)_5%,transparent)] border border-transparent hover:border-[color-mix(in_srgb,var(--color-info)_20%,transparent)] transition-all flex justify-between items-center group">
                <span className="flex items-center gap-3">
                  <div className="p-2 bg-[color-mix(in_srgb,var(--text-primary)_10%,transparent)] rounded-lg text-primary-text group-hover:bg-info group-hover:text-white transition-colors">
                    <Plus size={18} />
                  </div>
                  Add New Product
                </span>
                <ArrowRight size={16} className="text-secondary-text group-hover:text-info group-hover:translate-x-1 transition-all" />
              </button>

              <button className="w-full text-left p-4 bg-primary rounded-xl text-[14px] font-bold text-primary-text hover:bg-[color-mix(in_srgb,var(--color-info)_5%,transparent)] border border-transparent hover:border-[color-mix(in_srgb,var(--color-info)_20%,transparent)] transition-all flex justify-between items-center group">
                <span className="flex items-center gap-3">
                  <div className="p-2 bg-[color-mix(in_srgb,var(--text-primary)_10%,transparent)] rounded-lg text-primary-text group-hover:bg-warning group-hover:text-white transition-colors">
                    <Megaphone size={18} />
                  </div>
                  Create Announcement
                </span>
                <ArrowRight size={16} className="text-secondary-text group-hover:text-info group-hover:translate-x-1 transition-all" />
              </button>

              <button className="w-full text-left p-4 bg-primary rounded-xl text-[14px] font-semibold text-primary-text hover:bg-[color-mix(in_srgb,var(--color-info)_5%,transparent)] border border-transparent hover:border-[color-mix(in_srgb,var(--color-info)_20%,transparent)] transition-all flex justify-between items-center group">
                <span className="flex items-center gap-3">
                  <div className="p-2 bg-[color-mix(in_srgb,var(--text-primary)_8%,transparent)] rounded-[10px] text-primary-text group-hover:bg-success group-hover:text-white transition-colors">
                    <BarChart2 size={18} />
                  </div>
                  View Analytics
                </span>
                <ArrowRight size={16} className="text-secondary-text group-hover:text-info group-hover:translate-x-1 transition-all" />
              </button>
            </div>
            
            <div className="mt-auto pt-6">
              <div className="p-4 rounded-xl bg-[color-mix(in_srgb,var(--color-sale)_10%,transparent)] border border-[color-mix(in_srgb,var(--color-sale)_20%,transparent)]">
                 <h3 className="text-[14px] font-semibold text-[var(--color-sale)] flex items-center justify-between">
                   Store Setup <span>60%</span>
                 </h3>
                 <div className="w-full bg-[color-mix(in_srgb,var(--color-sale)_20%,transparent)] rounded-full h-1.5 mt-2 overflow-hidden">
                   <div className="bg-[var(--color-sale)] h-1.5 rounded-full w-[60%]"></div>
                 </div>
                 <p className="text-[12px] font-medium text-[var(--color-sale)] opacity-80 mt-2">
                   Add your first billing details to complete store setup.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
