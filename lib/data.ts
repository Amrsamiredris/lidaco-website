// LIDACO Product Catalogue Data

export type Product = {
  name: string;
  kind: "date" | "pist";
  eyebrow: string;
  tag: string;
  specs: [string, string][];
};

export const DATES: Product[] = [
  {
    name: "Bam Mazafati",
    kind: "date",
    eyebrow: "Premium Iranian Date",
    tag: "Cold storage",
    specs: [
      ["Origin", "Bam, Iran"],
      ["Packaging", "5 / 10 kg bulk"],
      ["Moisture", "15–18%"],
      ["Shelf life", "12 months"],
    ],
  },
  {
    name: "Rabi",
    kind: "date",
    eyebrow: "Semi-dry Date",
    tag: "Bulk supply",
    specs: [
      ["Origin", "Sistan, Iran"],
      ["Packaging", "10 kg carton"],
      ["Moisture", "13–15%"],
      ["Shelf life", "18 months"],
    ],
  },
  {
    name: "Kabkab",
    kind: "date",
    eyebrow: "Semi-dry Date",
    tag: "Export grade",
    specs: [
      ["Origin", "Behbahan"],
      ["Packaging", "10 kg carton"],
      ["Moisture", "14–16%"],
      ["Shelf life", "18 months"],
    ],
  },
  {
    name: "Piarom",
    kind: "date",
    eyebrow: "Premium Dry Date",
    tag: "Premium grade",
    specs: [
      ["Origin", "Hajiabad"],
      ["Packaging", "5 / 10 kg"],
      ["Moisture", "11–15%"],
      ["Shelf life", "24 months"],
    ],
  },
];

export const PISTACHIOS: Product[] = [
  {
    name: "Akbari",
    kind: "pist",
    eyebrow: "Long Pistachio",
    tag: "Premium grade",
    specs: [
      ["Origin", "Rafsanjan"],
      ["Packaging", "10 / 25 kg"],
      ["Grade", "22–24 cal"],
      ["Shelf life", "12 months"],
    ],
  },
  {
    name: "Ahmad Aghaei",
    kind: "pist",
    eyebrow: "Long Pistachio",
    tag: "Export grade",
    specs: [
      ["Origin", "Rafsanjan"],
      ["Packaging", "10 / 25 kg"],
      ["Grade", "24–26 cal"],
      ["Shelf life", "12 months"],
    ],
  },
  {
    name: "Fandoghi",
    kind: "pist",
    eyebrow: "Round Pistachio",
    tag: "Bulk supply",
    specs: [
      ["Origin", "Rafsanjan"],
      ["Packaging", "25 kg"],
      ["Grade", "28–30 cal"],
      ["Shelf life", "12 months"],
    ],
  },
  {
    name: "Kalleh Ghouchi",
    kind: "pist",
    eyebrow: "Jumbo Pistachio",
    tag: "Premium grade",
    specs: [
      ["Origin", "Rafsanjan"],
      ["Packaging", "10 / 25 kg"],
      ["Grade", "20–22 cal"],
      ["Shelf life", "12 months"],
    ],
  },
  {
    name: "Pistachio Kernels",
    kind: "pist",
    eyebrow: "Shelled Green Kernel",
    tag: "Export grade",
    specs: [
      ["Origin", "Rafsanjan"],
      ["Packaging", "10 kg vac"],
      ["Type", "Whole green"],
      ["Shelf life", "12 months"],
    ],
  },
  {
    name: "Pistachio Powder",
    kind: "pist",
    eyebrow: "Ground Kernel",
    tag: "Bulk supply",
    specs: [
      ["Origin", "Rafsanjan"],
      ["Packaging", "5 / 10 kg"],
      ["Mesh", "Fine / coarse"],
      ["Shelf life", "9 months"],
    ],
  },
];

export const FEATURED: Product[] = [DATES[0], DATES[3], PISTACHIOS[0]];

export const ALL_PRODUCTS: Product[] = [...DATES, ...PISTACHIOS];
