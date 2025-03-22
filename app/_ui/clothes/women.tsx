import Button from "@/components/button";
import ProductCard from "@/components/product-card";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { CLOTHES_WOMEN_PRODUCTS } from "./constant";

const WomenClothes = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 justify-end">
        <p className="font-semibold text-sm md:text-base">
          See All Women&apos;s Clothes
        </p>
        <Button isIconOnly intent="outline">
          <ChevronRightIcon className="text-primary size-6 md:size-8" />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CLOTHES_WOMEN_PRODUCTS.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WomenClothes;
