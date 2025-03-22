"use client";

import { useState } from "react";
import { CAROUSEL_PRODUCTS } from "./constant";
import Button from "@/components/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import ProductCard from "@/components/product-card";

const ITEMS_PER_SLIDE = 4;

const CarouselProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProducts = CAROUSEL_PRODUCTS.length;

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + ITEMS_PER_SLIDE >= totalProducts ? 0 : prev + ITEMS_PER_SLIDE
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(totalProducts - ITEMS_PER_SLIDE, 0)
        : prev - ITEMS_PER_SLIDE
    );
  };

  return (
    <section className="grid gap-10 lg:gap-20">
      <div className="space-y-3 md:space-y-6 w-full max-w-2xl">
        <h2 className="text-2xl md:text-5xl font-bold lg:tracking-wide">
          Wear Confidence. Walk in Style.
        </h2>
        <p className="md:text-2xl md:font-semibold text-gray-500">
          Our go-to destination for trendy shoes and stylish apparel – because
          looking good should always be effortless!
        </p>
      </div>

      <div className="hidden lg:block space-y-6">
        <div className="flex items-center justify-end gap-3">
          <Button isIconOnly intent="outline" onPress={handlePrevious}>
            <ChevronLeftIcon className="text-primary size-8" />
          </Button>
          <Button isIconOnly intent="outline" onPress={handleNext}>
            <ChevronRightIcon className="text-primary size-8" />
          </Button>
        </div>

        <div className="flex items-center gap-6">
          {CAROUSEL_PRODUCTS.slice(
            currentIndex,
            currentIndex + ITEMS_PER_SLIDE
          ).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>

      <div className="lg:hidden">
        <div className="grid gap-6">
          {CAROUSEL_PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselProducts;
