"use client";

import { useState } from "react";
import { DATES, PISTACHIOS, ALL_PRODUCTS, Product } from "@/lib/data";
import { ProductCard } from "./ProductCard";

type FilterType = "all" | "dates" | "pistachios";

export function ProductFilter() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const getProducts = (): Product[] => {
    switch (activeFilter) {
      case "dates":
        return DATES;
      case "pistachios":
        return PISTACHIOS;
      default:
        return ALL_PRODUCTS;
    }
  };

  const filters: { id: FilterType; label: string }[] = [
    { id: "all", label: "All" },
    { id: "dates", label: "Dates" },
    { id: "pistachios", label: "Pistachios" },
  ];

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex gap-8 justify-center mb-10 border-b border-lid-sand-300 pb-4">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`font-[family-name:var(--font-ui)] font-medium text-[12px] tracking-[0.16em] uppercase transition-colors relative py-3 pb-1 ${
              activeFilter === filter.id
                ? "text-lid-gold-500"
                : "text-lid-sand-700 hover:text-lid-brown-800"
            }`}
          >
            {filter.label}
            {activeFilter === filter.id && (
              <span className="absolute left-0 right-0 -bottom-[17px] h-[1px] bg-lid-gold-500"></span>
            )}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {getProducts().map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
