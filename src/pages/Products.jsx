import Button from "@/components/common/Button";
import Search from "@/components/forms/Search";
import { SelectAlignItem } from "@/components/forms/Selector";
import AddProductDialog from "@/features/products/components/AddProductDialog";
import ProductCard from "@/features/products/components/ProductCard";
import React from "react";

const perfumeProducts = [
  {
    name: "Midnight Oud",
    category: "Unisex",
    price: "99.99",
    stock: 48,
    description: "Dense oud and amber fragrance with a smooth vanilla dry down.",
    status: "Low Stock",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Velvet Rose",
    category: "Women",
    price: "89.99",
    stock: 22,
    description: "Rose-forward perfume with soft musk and warm floral depth.",
    status: "In Stock",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Citrus Ember",
    category: "Men",
    price: "74.99",
    stock: 61,
    description: "Fresh citrus opening with cedarwood and a crisp dry finish.",
    status: "In Stock",
    image:
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Amber Silk",
    category: "Unisex",
    price: "65.00",
    stock: 14,
    description: "Soft amber perfume oil layered with vanilla and warm spice.",
    status: "Low Stock",
    image:
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Ocean Veil",
    category: "Women",
    price: "79.50",
    stock: 35,
    description: "Marine freshness balanced with jasmine and airy clean musk.",
    status: "In Stock",
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Smoked Saffron",
    category: "Men",
    price: "110.00",
    stock: 9,
    description: "Bold saffron and leather scent with a darker woody base.",
    status: "Low Stock",
    image:
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=80",
  },
];

function Products() {
  const [isAddProductOpen, setIsAddProductOpen] = React.useState(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <AddProductDialog
        open={isAddProductOpen}
        onOpenChange={setIsAddProductOpen}
      />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Search placeholder="Search Products" />
        <div className="w-full sm:w-auto">
          <SelectAlignItem
            list={["In Stock", "Out of Stock", "Men", "Women"]}
            defaultValue="all"
            defaultValueText="All Status"
          />
        </div>
        <div className="w-full sm:w-auto sm:min-w-40">
          <Button onClick={() => setIsAddProductOpen(true)}>
            Add Products
          </Button>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {perfumeProducts.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
