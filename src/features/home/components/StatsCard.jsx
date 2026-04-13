import React from "react";

function StatsCard({ title, subheading, desc, icon: Icon, color }) {
  return (
    <div
      style={{ borderLeftColor: color }}
      className="p-6 bg-secondary rounded-[14px] flex flex-col gap-10 hover:shadow-lg border-l-4 border border-border min-w-0"
    >
      <div className="flex justify-between text-[13px] font-semibold tracking-[0.01em] leading-5 text-secondary-text">
        {title}
        <div
          style={{ "--bg": color }}
          className="bg-[color-mix(in_srgb,var(--bg)_15%,transparent)] p-3 rounded-lg"
        >
          <Icon size={15} color={color} />
        </div>
      </div>
      <div>
        <div className="text-[24px] font-bold tracking-[-0.03em] leading-8 text-primary-text">
          {subheading}
        </div>
        <div className="text-[12px] leading-5 font-medium text-secondary-text">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
