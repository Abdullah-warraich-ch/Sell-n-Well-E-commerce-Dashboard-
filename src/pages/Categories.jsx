import Button from "@/components/common/Button";
import CategoryCard from "@/features/Category/components/CategoryCard";
import AddNewCategory from "@/features/Category/components/AddNewCategory";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const categoriesData = [
  { name: "Men's Apparel", products: 124 },
  { name: "Women's Collection", products: 218 },
  { name: "Accessories", products: 45 },
  { name: "Footwear", products: 89 },
  { name: "Tech Gadgets", products: 12 },
  { name: "Home & Living", products: 56 },
];

function Categories() {
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6 sm:gap-8 min-h-full animate-in fade-in duration-500">
      <AddNewCategory open={isAddCategoryOpen} onOpenChange={setIsAddCategoryOpen} />
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary-text">
            Categories
          </h1>
          <p className="text-sm font-medium text-secondary-text mt-1.5 opacity-90">
            Manage your store collections and product groupings
          </p>
        </div>
        <div className="w-full md:w-auto">
          <Button onClick={() => setIsAddCategoryOpen(true)} className="w-full md:w-auto shadow-sm">
            <Plus size={18} /> Add Category
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mt-2">
        {categoriesData.map((cat, idx) => (
          <CategoryCard key={idx} name={cat.name} products={cat.products} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
