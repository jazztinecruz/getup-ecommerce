import Image from "next/image";
import { Card, CardFooter } from "@heroui/react";
import type { TProduct } from "@/types/product";
import Button from "@/components/button";

type Props = {
  product: TProduct;
};

const ProductCard = ({ product }: Props) => {
  const { name, description, price, image } = product;
  return (
    <Card isFooterBlurred className="w-full h-[300px]">
      <Image
        alt={`${name} Image`}
        fill
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={image}
        priority
      />
      <CardFooter className="absolute bg-secondary/30 bottom-0 border-t-1 border-secondary/50 z-10 flex items-center justify-between gap-3">
        <div className="space-y-2 w-full max-w-xs">
          <h4 className="text-primary font-semibold text-lg">{name}</h4>
          <p className="text-primary text-tiny">{description}</p>
        </div>
        <Button>{price}</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
