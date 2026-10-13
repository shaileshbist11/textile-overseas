const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjMGYxNzJhIi8+PHJlY3QgeT0iMyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjYiIGZpbGw9IiMxZTI5M2IiLz48cmVjdCB5PSI5IiB3aWR0aD0iMTYiIGhlaWdodD0iMyIgZmlsbD0iIzMzNDE1NSIvPjwvc3ZnPg==";

export const blurDataURL = BLUR_PLACEHOLDER;

export function unsplash(id: string, width = 1200, height?: number): string {
  const h = height ? `&h=${height}` : "";
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}${h}&q=80`;
}

export type ImageAsset = { id: string; alt: string };

export const IMAGES = {
  hero: {
    id: "1581092162384-8987c1d64718",
    alt: "Designer reviewing a garment pattern on a tablet beside a stack of fabric swatches",
  },
  factoryFloor: {
    id: "1581091226825-a6a2a5aee158",
    alt: "Technician monitoring an automated garment production machine on the factory floor",
  },
  stitching: {
    id: "1558618666-fcd25c85cd64",
    alt: "Machine operator working with industrial thread cones on a stitching line",
  },
  designStudio: {
    id: "1581092160562-40aa08e78837",
    alt: "Fashion designer sketching a tech pack at a studio worktable",
  },
  quality: {
    id: "1581093588401-fbb62a02f120",
    alt: "Quality inspector in safety glasses checking production output",
  },
  logistics: {
    id: "1504328345606-18bbc8c9d7d1",
    alt: "Freight trucks lined up at an export logistics terminal",
  },
  logisticsAerial: {
    id: "1565793298595-6a879b1d9492",
    alt: "Aerial view of a freight distribution yard at dusk",
  },
  organicRack: {
    id: "1558769132-cb1aea458c5e",
    alt: "Neutral-toned organic linen garments styled with dried pampas grass",
  },
  whiteRack: {
    id: "1490481651871-ab68de25d43d",
    alt: "Minimal white garments hanging on a rail",
  },
  boutiqueRack: {
    id: "1445205170230-053b83016050",
    alt: "Curated boutique clothing rack in warm tones",
  },
  greenTees: {
    id: "1523381210434-271e8be1f52b",
    alt: "Row of green knit tees hanging on a production rack",
  },
  womensModel: {
    id: "1610030469983-98e550d6193c",
    alt: "Model wearing an elegant flowing occasion dress",
  },
  kidsSmile: {
    id: "1503944583220-79d8926ad5e2",
    alt: "Two smiling children in casual cotton clothing",
  },
  kidsFlatlay: {
    id: "1622290291468-a28f7a7dc6a8",
    alt: "Flat lay of a kids organic cotton tee with a teddy bear",
  },
  kidsOutfit: {
    id: "1519238263530-99bdd11df2ea",
    alt: "Flat lay of a child's outfit with cardigan and shorts",
  },
  kidsDresses: {
    id: "1560506840-ec148e82a604",
    alt: "Rack of colorful children's dresses",
  },
  jeansStack: {
    id: "1604176354204-9268737828e4",
    alt: "Neatly folded stack of denim jeans",
  },
  jeansPockets: {
    id: "1605518216938-7c31b7b14ad0",
    alt: "Row of denim jean back pockets showing stitch detail",
  },
  chambrayShirt: {
    id: "1596755094514-f87e34085b2c",
    alt: "Blue chambray shirt on a wooden hanger",
  },
  knitPoncho: {
    id: "1434389677669-e08b4cac3105",
    alt: "Cream knit poncho worn by a model",
  },
  whiteTeeConcrete: {
    id: "1581655353564-df123a1eb820",
    alt: "White t-shirt laid flat on a concrete surface",
  },
  whiteSweatshirt: {
    id: "1620799140408-edc6dcb6d633",
    alt: "White sweatshirt laid flat for a product shot",
  },
  manWhiteTee: {
    id: "1521572163474-6864f9cf17ab",
    alt: "Person wearing a plain white t-shirt, back view",
  },
  bomberJacket: {
    id: "1591047139829-d91aecb6caea",
    alt: "Rust-colored bomber jacket product shot",
  },
  menswearFlatlay: {
    id: "1544441893-675973e31985",
    alt: "Menswear flat lay with sneakers and knit layers",
  },
  menswearBoots: {
    id: "1479064555552-3ef4979f8908",
    alt: "Menswear flat lay with boots, chinos and a tee",
  },
  jeansFlatlay: {
    id: "1516762689617-e1cffcef479d",
    alt: "Flat lay of jeans, a sweater and boots",
  },
  jeansBeanie: {
    id: "1556905055-8f358a7a47b2",
    alt: "Flat lay of jeans, a beanie and a tee",
  },
  pinkJoggers: {
    id: "1594633312681-425c7b97ccd1",
    alt: "Pink knit jogger pants product shot",
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof IMAGES;

export const CATALOG_CATEGORY_IMAGES: Record<string, ImageKey> = {
  "Women's Wear": "womensModel",
  "Kids Wear": "kidsSmile",
  "Sustainable Organic Cotton": "organicRack",
  Denim: "jeansPockets",
  Outerwear: "bomberJacket",
};

export const PRODUCT_CATEGORY_IMAGES: Record<string, ImageKey> = {
  knitwear: "greenTees",
  "woven-bottoms": "jeansStack",
  outerwear: "bomberJacket",
  activewear: "pinkJoggers",
  workwear: "quality",
  kidswear: "kidsSmile",
};

export const CAPABILITY_IMAGES: Record<string, ImageKey> = {
  "In-house Stitching Line": "stitching",
  "Automated Fabric Cutting": "factoryFloor",
  "Quality Audit Standards": "quality",
  "Eco-friendly Dyeing": "whiteRack",
  "International Shipping Logistics": "logistics",
  "Certified Sustainable Inputs": "greenTees",
};

export const PRODUCT_IMAGES: Record<string, ImageKey> = {
  "IO-WW-101": "womensModel",
  "IO-WW-104": "knitPoncho",
  "IO-WW-109": "chambrayShirt",
  "IO-KW-201": "kidsFlatlay",
  "IO-KW-206": "kidsOutfit",
  "IO-KW-212": "kidsDresses",
  "IO-OC-301": "whiteTeeConcrete",
  "IO-OC-305": "whiteSweatshirt",
  "IO-OC-309": "manWhiteTee",
  "IO-DN-401": "jeansStack",
  "IO-DN-407": "jeansBeanie",
  "IO-DN-412": "jeansFlatlay",
  "IO-OW-501": "bomberJacket",
  "IO-OW-505": "menswearFlatlay",
  "IO-OW-510": "menswearBoots",
};

export const ORDER_IMAGES: Record<string, ImageKey> = {
  "IO-24018": "jeansStack",
  "IO-24021": "whiteTeeConcrete",
  "IO-24026": "kidsOutfit",
};
