import React from "react";
import { Info } from "lucide-react";
import StatsOverview from "@/features/home/components/StatsOverview";
import RecentOrders from "@/features/home/components/RecentOrders";

function Home() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6 sm:gap-8 lg:gap-10">
      <div className="flex p-3 gap-3 items-start sm:items-center bg-select/50 border border-blue-600 rounded-2xl">
        <Info color="blue" size={20} />
        <p className="text-[14px] leading-3.5 text-button">
          2 active announcements displayed to customers
        </p>
      </div>
      <StatsOverview />
      <RecentOrders />
    </div>
  );
}

export default Home;
