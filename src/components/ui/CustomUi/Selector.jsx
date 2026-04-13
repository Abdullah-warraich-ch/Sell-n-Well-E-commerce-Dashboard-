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
    <FieldGroup className="w-full max-w-xs">
      <Field>
        <Select defaultValue={defaultValue}>
          <SelectTrigger className="w-full border-0 bg-input p-5 font-medium text-primary-text shadow-none focus-visible:border-0 focus-visible:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent
            position="popper"
            className="border-border border shadow shadow-shadow bg-secondary ring-0 "
          >
            <SelectGroup>
              <SelectItem
                className="hover:bg-primary text-primary-text"
                value={defaultValue}
                defaultValue
              >
                {defaultValueText}
              </SelectItem>
              {list.map((item) => (
                <SelectItem
                  className="hover:bg-primary text-primary-text"
                  value={item.toLowerCase()}
                  key={item}
                >
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  );
}
