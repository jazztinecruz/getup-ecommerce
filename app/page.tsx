import CarouselProducts from "./_ui/carousel";
import ClothesProducts from "./_ui/clothes";
import GridProducts from "./_ui/grid";
import Hero from "./_ui/hero";

const Page = () => {
  return (
    <div className="space-y-14 lg:space-y-40 mb-14 lg:mb-40">
      <Hero />
      <CarouselProducts />
      <GridProducts />
      <ClothesProducts />
    </div>
  );
};

export default Page;
