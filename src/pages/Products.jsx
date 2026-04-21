import Button from "@/components/common/Button";
import Search from "@/components/forms/Search";
import { SelectAlignItem } from "@/components/forms/Selector";
import AddProductDialog from "@/features/products/components/AddProductDialog";
import ProductCard from "@/features/products/components/ProductCard";
import React from "react";
import { Plus } from "lucide-react";
import { useProducts } from "@/hooks/useProducts"
import Loading from "@/components/common/Loading";


function Products() {
  const [isAddProductOpen, setIsAddProductOpen] = React.useState(false);
  const { products, loading } = useProducts();
  if (loading) {
    return <Loading />
  }
  return (
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6 sm:gap-8 min-h-full animate-in fade-in duration-500">
      <AddProductDialog
        open={isAddProductOpen}
        onOpenChange={setIsAddProductOpen}
      />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary-text">
            Products
          </h1>
          <p className="text-sm font-medium text-secondary-text mt-1.5 opacity-90">
            View, add, and manage your inventory.
          </p>
        </div>

        <div className="flex flex-col gap-10 sm:flex-row sm:items-center w-full md:w-auto">
          <div className="w-full sm:w-64">
            <Search placeholder="Search Products..." />
          </div>
          <div className="w-full sm:w-36 flex justify-center">
            <SelectAlignItem
              list={["In Stock", "Out of Stock", "Men", "Women"]}
              defaultValue="all"
              defaultValueText="All Filters"
            />
          </div>
          <div className="w-full sm:w-auto">
            <Button onClick={() => setIsAddProductOpen(true)} className="w-full shadow-sm">
              <Plus size={18} /> Add Product
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-2 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product) => (
          <ProductCard key={product.id} name={product.name} category={product.category} price={product.price} stock={product.stock} description={product.des} status={`${product.stock > 0 && product.stock <= 10 ? "Low Stock" : product.stock === 0 ? "Out of Stock" : "In Stock"}`} image={product.thumbnailUrl} />
        ))}
      </div>
    </div>
  );
}

export default Products;
