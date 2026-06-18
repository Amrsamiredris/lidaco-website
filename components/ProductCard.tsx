import { Product } from "@/lib/data";
import { Badge } from "./Badge";
import { Eyebrow } from "./Eyebrow";
import { ProductImage } from "./ProductImage";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const badgeTone = product.kind === "pist" ? "olive" : "brown";

  return (
    <div className="bg-lid-sand-100 border border-lid-sand-300 rounded-[3px] overflow-hidden relative transition-all duration-[240ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] hover:border-lid-gold-500">
      <ProductImage
        product={product}
        alt={`${product.name} — ${product.eyebrow}`}
        priority={priority}
        className="h-[220px]"
      />

      {/* Badge */}
      {product.tag && (
        <div className="absolute top-[14px] left-[14px]">
          <Badge tone={badgeTone}>{product.tag}</Badge>
        </div>
      )}

      {/* Body */}
      <div className="p-[24px]">
        <Eyebrow>{product.eyebrow}</Eyebrow>
        <div className="font-[family-name:var(--font-display)] font-semibold text-[27px] tracking-[0.02em] text-lid-brown-800 my-[7px_0_16px] leading-[1.1]">
          {product.name}
        </div>

        {/* Spec Table */}
        <table className="w-full border-collapse">
          <tbody>
            {product.specs.map(([key, value], index) => (
              <tr key={key}>
                <td
                  className={`text-[10px] tracking-[0.14em] uppercase text-lid-brown-700 py-[9px] ${
                    index !== product.specs.length - 1
                      ? "border-b border-lid-sand-300"
                      : ""
                  }`}
                >
                  {key}
                </td>
                <td
                  className={`text-[12px] tracking-[0.03em] text-lid-brown-800 text-right py-[9px] ${
                    index !== product.specs.length - 1
                      ? "border-b border-lid-sand-300"
                      : ""
                  }`}
                >
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
