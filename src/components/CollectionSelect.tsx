"use client";

// Mark this file as a Client Component

import React from "react";

// Define the type for props
interface CollectionSelectProps {
  selected: string; // The selected collection name
  onCollectionSelect: (collectionName: string) => void; // Function to handle collection selection
}

// Define collections for filtering
const collections = [
  { name: "Men" },
  { name: "Women" },
  { name: "Dress" },
  { name: "Trouser" },
  { name: "Jackets" },
];

const CollectionSelect: React.FC<CollectionSelectProps> = ({
  selected,
  onCollectionSelect,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {collections.map((collection) => (
        <button
          key={collection.name}
          type="button"
          onClick={() => onCollectionSelect(collection.name)} // Handle click
          className={`min-w-[70px] max-w-[100px] flex-1 rounded-lg px-2 py-1 text-center text-sm ${
            selected === collection.name
              ? "bg-primary text-white"
              : "border border-neutral-400"
          }`}
        >
          {collection.name}
        </button>
      ))}
    </div>
  );
};

export default CollectionSelect;
