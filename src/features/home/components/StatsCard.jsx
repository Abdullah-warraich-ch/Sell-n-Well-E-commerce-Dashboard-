import React from "react";

function StatsCard({ title, subheading, desc, icon: Icon, color, trend }) {
  const isPositive = trend === "up";
  const trendColor = isPositive ? "text-success" : "text-danger";
  const descValue = desc.split(" ")[0].replace(/[+-]/, "");
  const descText = desc.split(" ").slice(1).join(" ");

  return (
    <div className="relative p-6 bg-secondary rounded-[16px] flex flex-col gap-8 shadow-sm hover:shadow-md border border-border transition-all duration-300 group overflow-hidden">
      {/* Decorative background flare */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[40px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-300"
        style={{ backgroundColor: color }}
      />

      <div className="flex justify-between items-start z-10">
        <div className="text-[13px] font-bold tracking-[0.03em] leading-5 text-secondary-text uppercase">
          {title}
        </div>
        <div
          style={{ "--bg": color }}
          className="bg-[color-mix(in_srgb,var(--bg)_12%,transparent)] p-3 rounded-xl ring-1 ring-[color-mix(in_srgb,var(--bg)_20%,transparent)] shadow-[0_2px_10px_color-mix(in_srgb,var(--bg)_10%,transparent)]"
        >
          <Icon size={18} color={color} className="group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      <div className="z-10">
        <div className="text-[28px] font-semibold tracking-tight text-primary-text mb-1.5">
          {subheading}
        </div>
        <div className="flex items-center gap-1.5 text-[13px] font-medium text-secondary-text">
          <span className={`flex items-center font-semibold bg-[color-mix(in_srgb,currentColor_10%,transparent)] px-1.5 py-0.5 rounded-md ${trendColor}`}>
            {isPositive ? "+" : "-"}
            {descValue}
          </span>
          <span>{descText}</span>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
