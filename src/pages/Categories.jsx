import Button from "@/components/common/Button";
import CategoryCard from "@/features/Category/components/CategoryCard";

import React from "react";

function Categories() {
  return (
    <div className="p-8">
      <div className="flex justify-between">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-primary-text">Categories</h1>
          <p className="text-secondary-text">Manage your product categories</p>
        </div>
        <div className="m-2">
          <Button> + Add Category</Button>
        </div>
      </div>
      <div>
        <CategoryCard name="Men" products="9" />
      </div>
    </div>
  );
}

export default Categories;
