"use client";

import React, { useState } from "react"; // Ensure React is imported

import ProductCard from "@/components/ProductCard";
import SidebarFilters from "@/components/SideBarFilter";
import SortBy from "@/components/SortBy";
import { products } from "@/data/content"; // Ensure you have your products data imported

import SectionProductsHeader from "./SectionProductsHeader";

// Define collections for filtering (currently all the same)
const collections = [
  { name: "All Products", value: "all" },
  { name: "Casual", value: "casual" }, // You can add more if needed
];

const Page = () => {
  const [selectedCollection, setSelectedCollection] = useState("all"); // Default selected collection

  // Filter products based on the selected collection
  const filteredProducts =
    selectedCollection === "all"
      ? products
      : products.filter((product) => product.collection === selectedCollection);

  // Add typing for the event parameter
  const handleCollectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedCollection(event.target.value);
  };

  return (
    <div className="container mb-20">
      <div className="mb-10">
        <SectionProductsHeader />
      </div>
      <div className="flex flex-col lg:flex-row" id="body">
        <div className="pr-4 lg:basis-1/3 xl:basis-1/4">
          <SidebarFilters />
        </div>
        <div className="mb-10 shrink-0 border-t lg:mx-4 lg:mb-0 lg:border-t-0" />
        <div className="relative flex-1">
          <div className="mb-5 flex items-center justify-between">
            <SortBy />
            <span className="text-sm">{filteredProducts.length} items</span>
            <select
              onChange={handleCollectionChange}
              value={selectedCollection}
              className="ml-4 rounded border"
            >
              {collections.map((collection) => (
                <option key={collection.value} value={collection.value}>
                  {collection.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid flex-1 gap-10 sm:grid-cols-2 xl:grid-cols-2 2xl:gap-12 ">
            {filteredProducts.map((item) => (
              <ProductCard product={item} key={item.slug} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
