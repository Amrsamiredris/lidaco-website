import { Globe, Package, Truck, Shield } from "lucide-react";

const trustItems = [
  { icon: Globe, label: "Worldwide Export" },
  { icon: Package, label: "Custom Packaging" },
  { icon: Truck, label: "Bulk Supply" },
  { icon: Shield, label: "Guaranteed Quality" },
];

export function TrustStrip() {
  return (
    <section className="bg-lid-sand-100 border-t border-b border-lid-sand-300">
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex flex-col items-center gap-[14px] text-center py-11 px-5 ${
                  index < trustItems.length - 1
                    ? "border-r border-lid-sand-300"
                    : ""
                } ${index < 2 ? "max-md:border-b max-md:border-lid-sand-300" : ""}`}
              >
                <span className="text-lid-gold-700">
                  <Icon size={30} strokeWidth={1.5} />
                </span>
                <span className="font-medium text-[11px] tracking-[0.20em] uppercase text-lid-brown-800">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
