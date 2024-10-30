import React from "react";

import CategoryCard from "@/components/CategoryCard";
// import ProductCard from '@/components/ProductCard';
import {
  categories,
  midText,
  // , products
} from "@/data/content";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Heading from "@/shared/Heading/Heading";

const SectionProducts = () => {
  return (
    <div className="container">
      <Heading showDash className="pb-16">
        {midText}
      </Heading>

      <div className="space-y-10">
        <div className="items-center justify-between md:flex">
          <Heading isMain className="mb-0">
            All Arrivals
          </Heading>
          <ButtonPrimary href="/products">Shop Now</ButtonPrimary>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {categories.map((product) => (
            <CategoryCard product={product} key={product.productName} />
          ))}
        </div>

        <div className="mt-16 h-px w-full bg-neutral-300" />
      </div>
    </div>
  );
};

export default SectionProducts;
