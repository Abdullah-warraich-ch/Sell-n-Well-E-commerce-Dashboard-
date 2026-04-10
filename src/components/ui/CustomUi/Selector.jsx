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

export function SelectAlignItem() {
  return (
    <FieldGroup className="w-1/6 max-w-xs">
      <Field>
        <Select defaultValue="all">
          <SelectTrigger className="w-full border-0 bg-input p-5 font-medium text-primary-text shadow-none focus-visible:border-0 focus-visible:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent
            position="popper"
            className="border-border border shadow shadow-shadow bg-secondary ring-0 "
          >
            <SelectGroup>
              <SelectItem className="hover:bg-primary" value="all" defaultValue>
                All Status
              </SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  );
}
