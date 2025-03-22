import MenClothes from "./men";
import WomenClothes from "./women";

const ClothesProducts = () => {
  return (
    <section className="grid gap-10 lg:gap-20">
      <div className="space-y-3 md:space-y-6 w-full max-w-2xl">
        <h2 className="text-2xl md:text-5xl font-bold lg:tracking-wide">
          Style That Speaks, Comfort That Lasts!
        </h2>
        <p className="md:text-2xl md:font-semibold text-gray-500">
          Discover trendsetting outfits that blend fashion and function—because
          your wardrobe should work as hard as you do!
        </p>
      </div>

      <MenClothes />
      <WomenClothes />
    </section>
  );
};

export default ClothesProducts;
