import Card from "@/components/ui/CustomUi/Card";
import React from "react";
import { Info } from "lucide-react";
import CardContainerHome from "@/components/ui/CustomUi/CardContainerHome";
import OrderContainerHome from "@/components/ui/CustomUi/OrderContainerHome";
function Home() {
  return (
    <div className="p-8 flex flex-col gap-10 overflow-y-auto ">
      <div className="flex p-3 gap-3 items-center bg-select/50 border border-blue-600 rounded-2xl">
        <Info color="blue" size={20} />
        <p className="text-[14px] leading-3.5 text-button">
          2 active announcements displayed to customers
        </p>
      </div>
      <CardContainerHome />
      <OrderContainerHome />
    </div>
  );
}

export default Home;
