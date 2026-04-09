import React from "react";

function Card({ title, subheading, desc, icon: Icon, color }) {
  return (
    <div className=" p-6 bg-secondary rounded-[14px] flex flex-col gap-10 shadow border-border w-[24%]">
      <div className="flex justify-between text-[14px] font-medium leading-5 text-secondary-text">
        {title}
        <div className="">
          <Icon size={20} color={color} />
        </div>
      </div>
      <div>
        <div className="text-[24px] font-bold leading-8 text-primary-text">
          {subheading}
        </div>
        <div className="text-[12px] leading-4 font-normal text-secondary-text">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default Card;
