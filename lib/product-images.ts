import type { Product, ProductImageSlug } from "./data";

export type ProductKind = Product["kind"];

export type EditorialImageKey = "orchard" | "quality";

export type ProductImageKey = ProductImageSlug | EditorialImageKey;

const DATE_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQCEAwEPwAB//9k=";

const PIST_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQCEAwEPwAB//9k=";

const PRODUCT_IMAGES: Record<
  ProductImageKey,
  { src: string; blurDataURL: string }
> = {
  "bam-mazafati": {
    src: "/products/bam-mazafati.jpg",
    blurDataURL: DATE_BLUR,
  },
  rabi: { src: "/products/rabi.jpg", blurDataURL: DATE_BLUR },
  kabkab: { src: "/products/kabkab.jpg", blurDataURL: DATE_BLUR },
  piarom: { src: "/products/piarom.jpg", blurDataURL: DATE_BLUR },
  akbari: { src: "/products/akbari.jpg", blurDataURL: PIST_BLUR },
  "ahmad-aghaei": {
    src: "/products/ahmad-aghaei.jpg",
    blurDataURL: PIST_BLUR,
  },
  fandoghi: { src: "/products/fandoghi.jpg", blurDataURL: PIST_BLUR },
  "kalleh-ghouchi": {
    src: "/products/kalleh-ghouchi.jpg",
    blurDataURL: PIST_BLUR,
  },
  "pistachio-kernels": {
    src: "/products/pistachio-kernels.jpg",
    blurDataURL: PIST_BLUR,
  },
  "pistachio-powder": {
    src: "/products/pistachio-powder.jpg",
    blurDataURL: PIST_BLUR,
  },
  orchard: {
    src: "/products/orchard.jpg",
    blurDataURL: DATE_BLUR,
  },
  quality: {
    src: "/products/quality-inspection.jpg",
    blurDataURL: DATE_BLUR,
  },
};

export function getProductImageKey(
  productOrKey: Product | ProductImageKey | ProductKind
): ProductImageKey {
  if (typeof productOrKey === "string") {
    if (productOrKey === "date") return "bam-mazafati";
    if (productOrKey === "pist") return "akbari";
    return productOrKey;
  }

  return productOrKey.image;
}

export function getProductImage(
  productOrKey: Product | ProductImageKey | ProductKind
) {
  return PRODUCT_IMAGES[getProductImageKey(productOrKey)];
}
