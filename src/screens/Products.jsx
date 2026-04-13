import AddProductDialog from "@/components/ui/CustomUi/AddProductDialog";
import Button from "@/components/ui/CustomUi/Button";
import Search from "@/components/ui/CustomUi/Search";
import { SelectAlignItem } from "@/components/ui/CustomUi/Selector";
import React from "react";

function Products() {
  return (
    <div className="p-8">
      <AddProductDialog />
      <div className="flex gap-3">
        <Search placeholder="Search Products" />
        <SelectAlignItem
          list={["In Stock", "Out of Stock", "Men", "Women"]}
          defaultValue="all"
          defaultValueText="All Status"
        />
        <div className="w-1/5">
          <Button onClick={() => {}}>Add Products</Button>
        </div>
      </div>
    </div>
  );
}

export default Products;
