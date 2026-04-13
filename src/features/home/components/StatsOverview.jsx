import React from "react";
import { DollarSign, ShoppingBag, Box, TrendingDown } from "lucide-react";
import StatsCard from "./StatsCard";

function StatsOverview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Total Revenue"
        subheading="Rs. 58987"
        desc="+12.5% from last month"
        icon={DollarSign}
        color="var(--color-success)"
      />
      <StatsCard
        title="Active Orders"
        subheading="4"
        desc="+12.5% from last month"
        icon={ShoppingBag}
        color="var(--color-info)"
      />
      <StatsCard
        title="Products"
        subheading="58"
        desc="Accross 3 Categories"
        icon={Box}
        color="var(--color-sale)"
      />
      <StatsCard
        title="Low Stock"
        subheading="3"
        desc="Products Below 50 Units"
        icon={TrendingDown}
        color="var(--color-danger)"
      />
    </div>
  );
}

export default StatsOverview;
