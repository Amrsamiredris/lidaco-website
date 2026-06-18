import type { Product } from "./data";

export type ProductKind = Product["kind"];

export type ProductImageKey =
  | "date"
  | "pistachio"
  | "orchard"
  | "quality";

const PRODUCT_IMAGES: Record<
  ProductImageKey,
  { src: string; blurDataURL: string }
> = {
  date: {
    src: "/products/date-placeholder.svg",
    blurDataURL:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nNycgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTInIGhlaWdodD0nNycgZmlsbD0nIzNEQTFBQyIvPjwvc3ZnPg==",
  },
  pistachio: {
    src: "/products/pistachio-placeholder.svg",
    blurDataURL:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nNycgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTInIGhlaWdodD0nNycgZmlsbD0nIzJBMzAxOCIvPjwvc3ZnPg==",
  },
  orchard: {
    src: "/products/orchard-placeholder.svg",
    blurDataURL:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nOScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTInIGhlaWdodD0nOScgZmlsbD0nIzJBMzAxOCIvPjwvc3ZnPg==",
  },
  quality: {
    src: "/products/quality-placeholder.svg",
    blurDataURL:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nOScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTInIGhlaWdodD0nOScgZmlsbD0nIzNEQTFBQyIvPjwvc3ZnPg==",
  },
};

export function getProductImageKey(
  productOrKind: Product | ProductKind | ProductImageKey
): ProductImageKey {
  if (typeof productOrKind === "string") {
    if (productOrKind === "date" || productOrKind === "pist") {
      return productOrKind === "pist" ? "pistachio" : "date";
    }

    return productOrKind;
  }

  return productOrKind.kind === "pist" ? "pistachio" : "date";
}

export function getProductImage(productOrKind: Product | ProductKind | ProductImageKey) {
  return PRODUCT_IMAGES[getProductImageKey(productOrKind)];
}
