import GridProductCard from "./card";
import { GRID_CATCHPHRASE, GRID_PRODUCTS } from "./constant";

const GridProducts = () => {
  return (
    <section className="grid gap-10 lg:gap-20">
      <div className="space-y-3 md:space-y-6 w-full max-w-2xl">
        <h2 className="text-2xl md:text-5xl font-bold lg:tracking-wide">
          Trendy, Comfy, and Always on Point!
        </h2>
        <p className="md:text-2xl md:font-semibold text-gray-500">
          Upgrade your wardrobe with the freshest kicks and fashion-forward
          clothing – where comfort meets style, every time!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:row-span-2">
          <GridProductCard product={GRID_PRODUCTS[0]} isHeightFull />
        </div>
        <div>
          <GridProductCard product={GRID_PRODUCTS[1]} />
        </div>
        <div>
          <GridProductCard product={GRID_PRODUCTS[2]} />
        </div>
        <div className="lg:col-span-2 text-center lg:text-lg font-medium lg:font-semibold w-full max-w-2xl mx-auto py-6">
          {GRID_CATCHPHRASE}
        </div>
      </div>
    </section>
  );
};

export default GridProducts;
