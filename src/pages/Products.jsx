import Button from "@/components/common/Button";
import Search from "@/components/forms/Search";
import { SelectAlignItem } from "@/components/forms/Selector";
import AddProductDialog from "@/features/products/components/AddProductDialog";
import React from "react";

function Products() {
  const [isAddProductOpen, setIsAddProductOpen] = React.useState(false);

  return (
    <div className="p-8">
      <AddProductDialog
        open={isAddProductOpen}
        onOpenChange={setIsAddProductOpen}
      />
      <div className="flex gap-3">
        <Search placeholder="Search Products" />
        <SelectAlignItem
          list={["In Stock", "Out of Stock", "Men", "Women"]}
          defaultValue="all"
          defaultValueText="All Status"
        />
        <div className="w-1/5">
          <Button onClick={() => setIsAddProductOpen(true)}>
            Add Products
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Products;
