import Button from "@/components/button";
import type { TProduct } from "@/types/product";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Card, CardHeader } from "@heroui/react";
import Image from "next/image";

type Props = {
  product: TProduct;
  isHeightFull?: boolean;
};

const GridProductCard = ({ product, isHeightFull = false }: Props) => {
  const { name, description, image } = product;

  return (
    <Card
      className={`col-span-12 sm:col-span-4  ${
        !isHeightFull ? "h-80" : "h-80 lg:h-full"
      }`}>
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny uppercase font-medium">{description}</p>
        <h4 className="font-semibold text-large">{name}</h4>
        <Button isIconOnly className="bg-secondary rounded-xl p-3 mt-1">
          <ArrowRightIcon className="size-4 text-primary" />
        </Button>
      </CardHeader>
      <Image
        alt={`Product ${name} Image`}
        className="z-0 w-full h-full object-cover"
        src={image}
        fill
      />
    </Card>
  );
};

export default GridProductCard;
