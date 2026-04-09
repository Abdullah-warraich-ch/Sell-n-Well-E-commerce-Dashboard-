import React from "react";
import { DollarSign, ShoppingBag, Box, TrendingDown } from "lucide-react";
import Card from "./Card";
function CardContainerHome() {
  return (
    <div className=" flex justify-between">
      <Card
        title="Total Revenue"
        subheading="Rs. 58987"
        desc="+12.5% from last month"
        icon={DollarSign}
        color="green"
      />
      <Card
        title="Active Orders"
        subheading="4"
        desc="+12.5% from last month"
        icon={ShoppingBag}
        color="blue"
      />
      <Card
        title="Products"
        subheading="58"
        desc="Accross 3 Categories"
        icon={Box}
        color="purple"
      />
      <Card
        title="Low Stock"
        subheading="3"
        desc="Products Below 50 Units"
        icon={TrendingDown}
        color="red"
      />
    </div>
  );
}

export default CardContainerHome;
