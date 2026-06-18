import Image from "next/image";
import type { Product } from "@/lib/data";
import {
  getProductImage,
  type ProductImageKey,
  type ProductKind,
} from "@/lib/product-images";

type ProductImageProps = {
  product?: Product;
  kind?: ProductKind | ProductImageKey;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function ProductImage({
  product,
  kind,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
}: ProductImageProps) {
  const image = getProductImage(product ?? kind ?? "date");

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={image.src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        blurDataURL={image.blurDataURL}
        className="object-cover"
      />
    </div>
  );
}
