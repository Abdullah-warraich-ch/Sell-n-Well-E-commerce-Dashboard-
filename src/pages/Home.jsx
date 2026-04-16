import React from "react";
import { Info, ArrowRight, Plus, Megaphone, BarChart2 } from "lucide-react";
import StatsOverview from "@/features/home/components/StatsOverview";
import RecentOrders from "@/features/home/components/RecentOrders";
import QuickShortcut from "@/features/home/components/QuickShortcut";

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
          <ArrowRight
            size={16}
            className="text-info ml-1 group-hover:translate-x-1 transition-transform"
          />
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
        <QuickShortcut />
      </div>
    </div>
  );
}

export default Home;
