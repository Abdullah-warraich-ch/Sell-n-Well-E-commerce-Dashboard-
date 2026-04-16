import React from "react";
import { DollarSign, ShoppingBag, Box, TrendingDown } from "lucide-react";
import StatsCard from "./StatsCard";

function StatsOverview() {
  return (
    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Total Revenue"
        subheading="Rs. 58,987"
        desc="+12.5% from last month"
        trend="up"
        icon={DollarSign}
        color="var(--color-success)"
      />
      <StatsCard
        title="Active Orders"
        subheading="42"
        desc="+8.2% new orders"
        trend="up"
        icon={ShoppingBag}
        color="var(--color-info)"
      />
      <StatsCard
        title="Total Products"
        subheading="158"
        desc="+4.0% items added"
        trend="up"
        icon={Box}
        color="var(--color-sale)"
      />
      <StatsCard
        title="Low Stock"
        subheading="12"
        desc="-2.5% restock soon"
        trend="down"
        icon={TrendingDown}
        color="var(--color-danger)"
      />
    </div>
  );
}

export default StatsOverview;
