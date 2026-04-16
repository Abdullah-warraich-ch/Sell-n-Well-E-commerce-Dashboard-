import * as React from "react";

import { Field, FieldGroup } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectAlignItem({ list, defaultValue, defaultValueText }) {
  return (
    <FieldGroup className="w-full max-w-xs sm:min-w-44">
      <Field>
        <Select defaultValue={defaultValue}>
          <SelectTrigger className="w-full bg-secondary border border-border p-3 rounded-xl text-[14px] font-medium text-primary-text shadow-sm focus:border-button focus:ring-2 focus:ring-button/20 outline-none transition-all hover:border-[color-mix(in_srgb,var(--bg-button)_40%,transparent)] h-[46px] data-[state=open]:border-button">
            <SelectValue />
          </SelectTrigger>
          <SelectContent
            position="popper"
            className="border-border border shadow-lg shadow-shadow bg-secondary rounded-xl overflow-hidden animate-in fade-in zoom-in-95"
          >
            <SelectGroup className="p-1">
              <SelectItem
                className="hover:bg-[color-mix(in_srgb,var(--color-info)_10%,transparent)] focus:bg-[color-mix(in_srgb,var(--color-info)_10%,transparent)] focus:text-info cursor-pointer rounded-lg text-primary-text px-3 font-medium transition-colors"
                value={defaultValue}
              >
                {defaultValueText}
              </SelectItem>
              {list.map((item) => {
                if (item.toLowerCase() === defaultValue.toLowerCase()) return null;
                return (
                  <SelectItem
                    className="hover:bg-[color-mix(in_srgb,var(--color-info)_10%,transparent)] focus:bg-[color-mix(in_srgb,var(--color-info)_10%,transparent)] focus:text-info cursor-pointer rounded-lg text-primary-text px-3 font-medium transition-colors"
                    value={item.toLowerCase()}
                    key={item}
                  >
                    {item}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  );
}
