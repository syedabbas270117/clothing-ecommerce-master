import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import React from "react";

import type { ProductType } from "@/data/types";
// import Variant from '@/shared/Variant/Variant';

interface CategoryCardProps {
  product: ProductType;
  className?: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ product, className }) => {
  const { coverImage, productName } = product;
  return (
    <div className={`relative rounded-xl ${className}`}>
      <div className="relative h-[430px] overflow-hidden rounded-xl">
        <Image
          src={coverImage}
          alt="coverImage"
          className="size-full object-cover object-top"
          width={1000}
          height={1000}
        />
        <Link href="/products" className="absolute inset-0 size-full" />
      </div>
      <div className="mt-5 space-y-1">
        <div className="flex items-center justify-between">
          <Link href="/products" className="text-2xl font-medium">
            {productName}
          </Link>
          {/* <Variant /> */}
        </div>
        {/* <p className="text-2xl font-medium text-secondary">${price}.00</p> */}
      </div>
    </div>
  );
};

export default CategoryCard;
