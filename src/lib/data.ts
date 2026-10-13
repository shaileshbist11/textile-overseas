export const company = {
  name: "Inspiration Overseas",
  legalName: "Inspiration Overseas Ltd.",
  tagline: "Full-package garment manufacturing for the world's most demanding brands.",
  foundedYear: 2009,
  copyrightYear: 2026,
  email: "partnerships@inspirationoverseas.com",
  phone: "+880 2 5566 1200",
  whatsapp: "+880 1711 245 890",
  exportLicense:
    "Bangladesh Export Promotion Bureau registered export house · ERC No. W-114829 · Membership: BGMEA (Reg. 40218) · All shipments documented under HS Chapters 61 & 62 with country-of-origin certification.",
  hq: {
    label: "Head Office & Factory Complex",
    lines: ["Plot 42–45, Ashulia Industrial Park", "Savar, Dhaka 1341, Bangladesh"],
  },
  liaison: {
    label: "International Liaison Office",
    lines: ["Unit 1807, Tower B, Kowloon Bay", "Hong Kong SAR"],
  },
} as const;

export const stats = [
  { value: "500K+", label: "Monthly production capacity" },
  { value: "15+", label: "Export countries served" },
  { value: "99.4%", label: "On-time delivery rate" },
  { value: "24", label: "Production lines across units" },
] as const;

export type ProductCategory = {
  slug: string;
  name: string;
  short: string;
  description: string;
  tone: "copper" | "sage" | "ink" | "sand";
  heroStat: { value: string; label: string };
  highlights: string[];
  items: string[];
  fabrics: string[];
  moq: string;
  leadTime: string;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "knitwear",
    name: "Knitwear & Tees",
    short: "Circular knits, polos & fleece",
    description:
      "Our highest-volume program. Four dedicated knit units produce jersey, piqué, interlock and fleece garments with in-house knitting, dyeing partnerships and a fully equipped knit sewing floor. Precision tubular construction, cover-stitch finishing and soft-hand prints come standard.",
    tone: "copper",
    heroStat: { value: "1.1M", label: "knit pieces / month" },
    highlights: [
      "Single jersey up to 40s combed ring-spun",
      "Tubular & side-seam construction",
      "Pigment, reactive, pigment-discharge printing",
      "Enzyme & bio-polish finishing lines",
    ],
    items: [
      "Crew & V-neck tees",
      "Polo shirts",
      "Hoodies & pullovers",
      "Sweatshirts & joggers",
      "Tank tops & camisoles",
      "Bodysuits",
    ],
    fabrics: [
      "100% cotton jersey 120–220 GSM",
      "Cotton/poly & CVC blends",
      "Organic cotton (GOTS certified)",
      "Recycled poly blends (GRS certified)",
      "Modal, bamboo & viscose knits",
    ],
    moq: "500 pcs / color",
    leadTime: "45–60 days",
  },
  {
    slug: "woven-bottoms",
    name: "Woven Bottoms",
    short: "Chinos, denim & casual trousers",
    description:
      "A dedicated bottoms division with automated pocket-setting, waistband assembly and a denim line built for whiskering, ozone and laser finishing. From classic five-pocket denim to tailored chinos and technical cargo bottoms.",
    tone: "ink",
    heroStat: { value: "620K", label: "bottoms / month" },
    highlights: [
      "Automated pocket setters & belt-loop machines",
      "Laser, ozone & PP-free denim finishing",
      "Rope-dye & sulphur dye capability",
      "3-thread to 5-thread overlock standards",
    ],
    items: [
      "Five-pocket denim jeans",
      "Chinos & casual trousers",
      "Cargo & utility pants",
      "Shorts & swim trunks",
      "Joggers & soft trousers",
      "Tailored dress pants",
    ],
    fabrics: [
      "Cotton twill 8–12 oz",
      "Denim 4.5–14 oz (ring & zero-twist)",
      "Cotton/elastane stretch bottoms",
      "Linen & linen-blend summers",
      "Recycled cotton & Tencel™ blends",
    ],
    moq: "800 pcs / color",
    leadTime: "60–75 days",
  },
  {
    slug: "outerwear",
    name: "Outerwear",
    short: "Jackets, parkas & softshell",
    description:
      "Technical outerwear requires obsessive construction tolerances. Our outerwear floor specializes in taped seams, laminated fabrics, insulated quilting and trims-heavy programs for European premium and workwear brands.",
    tone: "sand",
    heroStat: { value: "180K", label: "outerwear pieces / month" },
    highlights: [
      "Seam-sealing & waterproof taping",
      "Quilting with recycled insulation",
      "Welded pockets & laser-cut details",
      "Mock-laydown & two-needle finishing",
    ],
    items: [
      "Padded & down jackets",
      "Softshell & hardshell jackets",
      "Parkas & anoraks",
      "Gilets & bodywarmers",
      "Coaches & bomber jackets",
      "Hi-vis technical outerwear",
    ],
    fabrics: [
      "Nylon ripstop & taslan",
      "Polyester taffeta & pongee",
      "Membrane-laminated shells (10K/15K)",
      "Wool-blend melton & tweed",
      "Recycled nylon (GRS certified)",
    ],
    moq: "300 pcs / color",
    leadTime: "75–90 days",
  },
  {
    slug: "activewear",
    name: "Activewear & Performance",
    short: "Training, yoga & seamless",
    description:
      "Performance programs demand fabric engineering as much as sewing. We run a dedicated activewear cell with flatlock, coverstitch and seamless knitting capability, sublimation printing and sweat-management finishing.",
    tone: "sage",
    heroStat: { value: "340K", label: "activewear pieces / month" },
    highlights: [
      "Seamless knit body-mapping",
      "4-way stretch flatlock construction",
      "All-over sublimation printing",
      "Moisture-wicking & anti-odour finish",
    ],
    items: [
      "Leggings & compression tights",
      "Sports bras & crop tops",
      "Training tees & tanks",
      "Track jackets & pants",
      "Cycling & running kits",
      "Seamless bodywear",
    ],
    fabrics: [
      "Polyester/spandex 4-way stretch",
      "Recycled polyester (GRS) performance",
      "Nylon micro interlock",
      "Seamless nylon blend",
      "Bamboo & Tencel™ performance knits",
    ],
    moq: "500 pcs / color",
    leadTime: "50–65 days",
  },
  {
    slug: "workwear",
    name: "Workwear & Uniform",
    short: "Industrial, medical & corporate",
    description:
      "Durable, compliant, repeatable. Our workwear division supplies hospital groups, airline crews, logistics operators and industrial clients with garments engineered to survive industrial laundering while holding color and shape.",
    tone: "ink",
    heroStat: { value: "260K", label: "workwear pieces / month" },
    highlights: [
      "Industrial-launder tested constructions",
      "FR & anti-static fabric capability",
      "Uniform-grade color consistency (grey-scale 4–5)",
      "Custom embroidery & heat-transfer ID",
    ],
    items: [
      "Medical scrubs & lab coats",
      "Chef & hospitality wear",
      "Aviation & crew uniforms",
      "Industrial coveralls",
      "Corporate office wear",
      "Safety & hi-vis apparel",
    ],
    fabrics: [
      "Cotton/poly 65/35 twill & poplin",
      "Tetron & poly-canvas",
      "FR cotton & modacrylic blends",
      "Antistatic workwear fabric",
      "Easy-care poplin & dobby",
    ],
    moq: "1,000 pcs / color",
    leadTime: "55–70 days",
  },
  {
    slug: "kidswear",
    name: "Kidswear",
    short: "Newborn to junior programs",
    description:
      "Children's programs carry the strictest compliance burden. Our kidswear unit runs under a dedicated safety protocol — needle policy, metal detection, drawstring and drawcord restrictions — with OEKO-TEX certified inputs across the board.",
    tone: "copper",
    heroStat: { value: "160K", label: "kidswear pieces / month" },
    highlights: [
      "EU & US childrenswear safety compliant",
      "Needle, metal-detector & button-pull protocols",
      "Snap, appliqué & print-heavy capability",
      "GOTS organic cotton programs",
    ],
    items: [
      "Bodysuits & sleepsuits",
      "Kids tees & sets",
      "Infant rompers",
      "Junior bottoms & denim",
      "Fleece & outerwear for kids",
      "School uniform programs",
    ],
    fabrics: [
      "Organic cotton jersey & interlock",
      "Soft-hand cotton velour",
      "Cotton/spandex blends",
      "Fleece & terry",
      "Printed poplin & lawn",
    ],
    moq: "600 pcs / color",
    leadTime: "50–65 days",
  },
];

export const capabilities = [
  {
    icon: "needle" as const,
    title: "In-house Stitching Line",
    text: "24 production lines and 1,850 machines across knit, bottoms, outerwear and a flexible small-batch cell — all under one roof in Ashulia.",
  },
  {
    icon: "scissors" as const,
    title: "Automated Fabric Cutting",
    text: "Auto-spreading with Gerber & Lectra CAD marker making and barcode traceability from cut panel to finished carton.",
  },
  {
    icon: "shield" as const,
    title: "Quality Audit Standards",
    text: "AQL 2.5 inline and final audits, 42-point measurement checks, metal detection, and third-party pre-shipment inspection support.",
  },
  {
    icon: "droplet" as const,
    title: "Eco-friendly Dyeing",
    text: "ZDHC MRSL aligned chemistry, in-house ETP (450 m³/day), ozone, enzyme and PP-free finishing with lab-dip retention.",
  },
  {
    icon: "globe" as const,
    title: "International Shipping Logistics",
    text: "FOB, CIF and DDP terms. Consolidated air and sea freight via Chattogram and Dhaka airports with end-to-end documentation.",
  },
  {
    icon: "leaf" as const,
    title: "Certified Sustainable Inputs",
    text: "GOTS and GRS certified fabric partners, organic and recycled programs with transaction certificates per shipment.",
  },
] as const;

export const machinery = [
  { machine: "Sewing machines", count: "1,850" },
  { machine: "Automatic pocket setters", count: "18" },
  { machine: "Flatlock / coverstitch", count: "140" },
  { machine: "Computerized embroidery (heads)", count: "96" },
  { machine: "Laser & ozone finishing units", count: "6" },
  { machine: "Seam-sealing machines", count: "22" },
  { machine: "Metal detectors & needle detectors", count: "14" },
  { machine: "In-house ETP capacity", count: "450 m³/day" },
] as const;

export const process = [
  {
    step: "01",
    title: "Inquiry & costing",
    text: "Tech pack or reference sample in, detailed FOB costing out — typically within 48 hours.",
  },
  {
    step: "02",
    title: "Sampling",
    text: "Fit, PP and top-of-production samples with photo reports and measurement sheets at every stage.",
  },
  {
    step: "03",
    title: "Fabric & trims",
    text: "Lab dips and strike-offs approved, fabric booked with our certified mill partners.",
  },
  {
    step: "04",
    title: "Production",
    text: "Cutting to sewing under line-balancing with daily output and quality reporting.",
  },
  {
    step: "05",
    title: "Finishing & QC",
    text: "Wash, iron, final AQL audit, metal detection and barcode carton verification.",
  },
  {
    step: "06",
    title: "Export & delivery",
    text: "Consolidation, documentation and freight — air, sea LCL or FCL to your DC.",
  },
] as const;

export const certifications = [
  { name: "ISO 9001:2015", scope: "Quality management system" },
  { name: "OEKO-TEX® 100", scope: "Product Class I — safe for babies" },
  { name: "GOTS 6.0", scope: "Global Organic Textile Standard" },
  { name: "GRS 4.0", scope: "Global Recycled Standard" },
  { name: "amfori BSCI", scope: "Social compliance audit — Grade B" },
  { name: "SEDEX / SMETA 4-Pillar", scope: "Ethical trade audit" },
  { name: "Higg FEM 3.0", scope: "Facility environmental module" },
  { name: "ZDHC MRSL Level 3", scope: "Chemical management" },
] as const;

export const timeline = [
  {
    year: "2009",
    title: "Founded in Dhaka",
    text: "Started as a 4-line knitwear unit with a single European buying house partner.",
  },
  {
    year: "2013",
    title: "Vertical expansion",
    text: "Added in-house cutting, washing and a dedicated bottoms division in Ashulia.",
  },
  {
    year: "2017",
    title: "First sustainability audit",
    text: "Commissioned our effluent treatment plant; earned OEKO-TEX and BSCI certification.",
  },
  {
    year: "2020",
    title: "Outerwear & technical",
    text: "Launched the technical outerwear floor with seam-sealing and laminated fabric lines.",
  },
  {
    year: "2023",
    title: "Solar & GOTS",
    text: "1.2 MW rooftop solar online; GOTS and GRS scope expanded across three facilities.",
  },
  {
    year: "2026",
    title: "2.4M pcs / month",
    text: "Serving 40+ active brand partners across 28 countries with a 98.6% OTIF record.",
  },
] as const;

export const markets = [
  "United States",
  "Germany",
  "United Kingdom",
  "Netherlands",
  "France",
  "Spain",
  "Italy",
  "Sweden",
  "Denmark",
  "Canada",
  "Australia",
  "Japan",
] as const;

export const testimonials = [
  {
    quote:
      "Inspiration Overseas runs our most complicated fleece program — six fabrications, three washes, zero quality escapes in eighteen months. Their sampling team is the fastest we've worked with.",
    author: "Head of Sourcing",
    company: "German premium casualwear brand",
  },
  {
    quote:
      "We moved our denim program to Ashulia in 2022 and cut ten days off the calendar. The laser and ozone finishing quality rivals anything in Turkey.",
    author: "VP Supply Chain",
    company: "US denim label",
  },
  {
    quote:
      "Their compliance documentation is the cleanest in our vendor book. Audits are scheduled, evidence is ready, and we never scramble before an SMETA visit.",
    author: "Global Compliance Director",
    company: "Nordic fashion group",
  },
] as const;

export const clientTypes = [
  "Premium casualwear",
  "Denim labels",
  "Workwear groups",
  "Activewear brands",
  "Department stores",
  "Corporate uniform buyers",
] as const;

export const catalogCategories = [
  "Women's Wear",
  "Kids Wear",
  "Sustainable Organic Cotton",
  "Denim",
  "Outerwear",
] as const;

export type CatalogProduct = {
  id: string;
  name: string;
  category: (typeof catalogCategories)[number];
  fabric: string;
  fabricType: string;
  gsm: string;
  moq: number;
  leadTimeWeeks: number;
  colors: string[];
  tone: "clay" | "navy" | "sage" | "sand";
  blurb: string;
};

export const catalogProducts: CatalogProduct[] = [
  {
    id: "IO-WW-101",
    name: "Satin Wrap Midi Dress",
    category: "Women's Wear",
    fabric: "Recycled polyester satin",
    fabricType: "Woven",
    gsm: "120 GSM",
    moq: 500,
    leadTimeWeeks: 6,
    colors: ["Champagne", "Black", "Clay"],
    tone: "clay",
    blurb: "Belted wrap silhouette with concealed zip and faced hem — core occasionwear program.",
  },
  {
    id: "IO-WW-104",
    name: "Ribbed Knit Co-ord Set",
    category: "Women's Wear",
    fabric: "Cotton/modal rib",
    fabricType: "Knit",
    gsm: "220 GSM",
    moq: 400,
    leadTimeWeeks: 5,
    colors: ["Oat", "Navy", "Sage"],
    tone: "sand",
    blurb: "Matching crop top and wide-leg pant with cover-stitch finishing.",
  },
  {
    id: "IO-WW-109",
    name: "Poplin Oversized Shirt",
    category: "Women's Wear",
    fabric: "Cotton poplin",
    fabricType: "Woven",
    gsm: "110 GSM",
    moq: 600,
    leadTimeWeeks: 5,
    colors: ["White", "Sky", "Stripe"],
    tone: "navy",
    blurb: "Drop-shoulder shirt with french seam side panels and mother-of-pearl buttons.",
  },
  {
    id: "IO-KW-201",
    name: "Kids Jersey Tee 2-Pack",
    category: "Kids Wear",
    fabric: "Organic cotton jersey",
    fabricType: "Knit",
    gsm: "160 GSM",
    moq: 800,
    leadTimeWeeks: 5,
    colors: ["Mixed basics"],
    tone: "sage",
    blurb: "EU childrenswear-safety compliant, printed neck labels, twin-needle hem.",
  },
  {
    id: "IO-KW-206",
    name: "Junior Fleece Hoodie",
    category: "Kids Wear",
    fabric: "Cotton-poly fleece",
    fabricType: "Knit",
    gsm: "280 GSM",
    moq: 600,
    leadTimeWeeks: 6,
    colors: ["Heather grey", "Navy", "Clay"],
    tone: "navy",
    blurb: "Kangaroo pocket, dyed-to-match drawcords with toggles (EU compliant length).",
  },
  {
    id: "IO-KW-212",
    name: "Newborn Sleepsuit Set",
    category: "Kids Wear",
    fabric: "Organic cotton interlock",
    fabricType: "Knit",
    gsm: "200 GSM",
    moq: 700,
    leadTimeWeeks: 5,
    colors: ["Pastel collection"],
    tone: "sand",
    blurb: "Mitten cuffs, envelope neck, snap placket — OEKO-TEX Class I inputs.",
  },
  {
    id: "IO-OC-301",
    name: "GOTS Organic Crew Tee",
    category: "Sustainable Organic Cotton",
    fabric: "GOTS organic cotton jersey",
    fabricType: "Knit",
    gsm: "180 GSM",
    moq: 500,
    leadTimeWeeks: 5,
    colors: ["Natural", "Plant-dyed palette"],
    tone: "sage",
    blurb: "Combed ring-spun organic cotton with transaction certificates per shipment.",
  },
  {
    id: "IO-OC-305",
    name: "Organic Terry Sweatshirt",
    category: "Sustainable Organic Cotton",
    fabric: "Organic cotton terry",
    fabricType: "Knit",
    gsm: "320 GSM",
    moq: 400,
    leadTimeWeeks: 6,
    colors: ["Undyed", "Clay", "Ink"],
    tone: "clay",
    blurb: "Loopback terry with side panels, bio-polished hand feel.",
  },
  {
    id: "IO-OC-309",
    name: "Recycled Cotton Tote Shirt",
    category: "Sustainable Organic Cotton",
    fabric: "Recycled cotton blend",
    fabricType: "Knit",
    gsm: "170 GSM",
    moq: 800,
    leadTimeWeeks: 6,
    colors: ["Melange set"],
    tone: "sand",
    blurb: "GRS certified recycled cotton with water-based print option.",
  },
  {
    id: "IO-DN-401",
    name: "High-Rise Straight Jean",
    category: "Denim",
    fabric: "12 oz ring denim",
    fabricType: "Denim",
    gsm: "400 GSM",
    moq: 800,
    leadTimeWeeks: 8,
    colors: ["Rinse", "Wash", "Black"],
    tone: "navy",
    blurb: "Laser whiskering, PP-free wash, button fly with branded shank.",
  },
  {
    id: "IO-DN-407",
    name: "Relaxed Carpenter Jean",
    category: "Denim",
    fabric: "10 oz comfort-stretch denim",
    fabricType: "Denim",
    gsm: "340 GSM",
    moq: 600,
    leadTimeWeeks: 8,
    colors: ["Stone", "Ecru", "Mid blue"],
    tone: "clay",
    blurb: "Utility pockets, triple-needle felled seams, Ozone-ready finish.",
  },
  {
    id: "IO-DN-412",
    name: "Denim Overshirt",
    category: "Denim",
    fabric: "8 oz chambray-denim",
    fabricType: "Denim",
    gsm: "270 GSM",
    moq: 500,
    leadTimeWeeks: 7,
    colors: ["Indigo", "Washed black"],
    tone: "sand",
    blurb: "Unlined overshirt with corozo buttons — crossover denim program.",
  },
  {
    id: "IO-OW-501",
    name: "Recycled Puffer Jacket",
    category: "Outerwear",
    fabric: "Recycled nylon ripstop",
    fabricType: "Outerwear",
    gsm: "GRS shell",
    moq: 300,
    leadTimeWeeks: 10,
    colors: ["Black", "Olive", "Clay"],
    tone: "navy",
    blurb: "Seam-sealed, recycled insulation, welded exterior pockets.",
  },
  {
    id: "IO-OW-505",
    name: "Softshell Commuter Jacket",
    category: "Outerwear",
    fabric: "Bonded softshell",
    fabricType: "Outerwear",
    gsm: "320 GSM",
    moq: 350,
    leadTimeWeeks: 9,
    colors: ["Charcoal", "Navy"],
    tone: "clay",
    blurb: "Windproof membrane, YKK zips, reflective tape detail option.",
  },
  {
    id: "IO-OW-510",
    name: "Quilted Liner Gilet",
    category: "Outerwear",
    fabric: "Taffeta / recycled fill",
    fabricType: "Outerwear",
    gsm: "Lightweight",
    moq: 400,
    leadTimeWeeks: 8,
    colors: ["Black", "Stone"],
    tone: "sand",
    blurb: "Packable gilet with chin guard and welt hand pockets.",
  },
];

export const productionStages = [
  "Raw Material Sourcing",
  "Cutting",
  "Stitching",
  "Quality Inspection",
  "Packaging",
  "Customs Clearance",
  "Shipped",
] as const;

export type DemoOrder = {
  id: string;
  buyer: string;
  style: string;
  category: string;
  units: number;
  destination: string;
  stageIndex: number;
  eta: string;
  lastUpdate: string;
  progressNote: string;
};

export const demoOrders: DemoOrder[] = [
  {
    id: "IO-24018",
    buyer: "Northwind Apparel GmbH",
    style: "High-Rise Straight Jean",
    category: "Denim",
    units: 12000,
    destination: "Hamburg, DE",
    stageIndex: 3,
    eta: "18 Jun 2026",
    lastUpdate: "Quality Inspection — second inline audit passed",
    progressNote: "Wash bulk approved. Final AQL scheduled this week.",
  },
  {
    id: "IO-24021",
    buyer: "Cedar & Co. Retail",
    style: "GOTS Organic Crew Tee",
    category: "Sustainable Organic Cotton",
    units: 8500,
    destination: "Rotterdam, NL",
    stageIndex: 5,
    eta: "02 Jun 2026",
    lastUpdate: "Customs clearance — docs submitted to C&F agent",
    progressNote: "Cartons sealed with GS1 labels. Vessel booking confirmed.",
  },
  {
    id: "IO-24026",
    buyer: "Harbor Kids Inc.",
    style: "Junior Fleece Hoodie",
    category: "Kids Wear",
    units: 6000,
    destination: "Newark, US",
    stageIndex: 1,
    eta: "27 Jul 2026",
    lastUpdate: "Cutting — marker optimization in progress",
    progressNote: "Fabric QC cleared at 4-point score 18. Cutting starts Saturday.",
  },
];

export const fabricStock = [
  { code: "FAB-JR-180", fabric: "Combed cotton jersey", gsm: "180 GSM", width: "180 cm", colors: "42 colors", stock: "18,400 m", status: "In stock" },
  { code: "FAB-TR-240", fabric: "Cotton twill 2/1", gsm: "240 GSM", width: "150 cm", colors: "28 colors", stock: "9,750 m", status: "In stock" },
  { code: "FAB-DN-400", fabric: "Ring denim", gsm: "400 GSM", width: "152 cm", colors: "12 shades", stock: "14,200 m", status: "In stock" },
  { code: "FAB-FL-320", fabric: "Brushed fleece", gsm: "320 GSM", width: "185 cm", colors: "30 colors", stock: "6,100 m", status: "Low stock" },
  { code: "FAB-OG-180", fabric: "GOTS organic jersey", gsm: "180 GSM", width: "180 cm", colors: "18 colors", stock: "11,900 m", status: "In stock" },
  { code: "FAB-RP-140", fabric: "Recycled poly pongee", gsm: "140 GSM", width: "145 cm", colors: "16 colors", stock: "4,300 m", status: "Low stock" },
  { code: "FAB-SS-320", fabric: "Bonded softshell", gsm: "320 GSM", width: "150 cm", colors: "8 colors", stock: "2,850 m", status: "Re-stocking" },
  { code: "FAB-IN-110", fabric: "Cotton poplin", gsm: "110 GSM", width: "145 cm", colors: "36 colors", stock: "7,600 m", status: "In stock" },
] as const;

export const samplePipeline = [
  { id: "SMP-9182", buyer: "Northwind Apparel GmbH", type: "Fit sample", style: "Relaxed Carpenter Jean", stage: "Buyer review", eta: "29 May 2026", status: "Awaiting feedback" },
  { id: "SMP-9186", buyer: "Harbor Kids Inc.", type: "PP sample", style: "Newborn Sleepsuit Set", stage: "In production", eta: "01 Jun 2026", status: "In progress" },
  { id: "SMP-9190", buyer: "Cedar & Co. Retail", type: "Size set", style: "Organic Terry Sweatshirt", stage: "Shipped", eta: "27 May 2026", status: "DHL 4482…901" },
  { id: "SMP-9193", buyer: "Meridian Workwear", type: "Top of production", style: "Industrial Coverall", stage: "Lab dip", eta: "05 Jun 2026", status: "Strike-off pending" },
  { id: "SMP-9197", buyer: "Atelier Nord AB", type: "Fit sample", style: "Quilted Liner Gilet", stage: "Cut & sew", eta: "08 Jun 2026", status: "In progress" },
] as const;

export const quoteGarmentTypes = [
  { value: "knit-tee", label: "T-shirts & polos", baseWeeks: 4 },
  { value: "fleece", label: "Fleece & hoodies", baseWeeks: 5 },
  { value: "woven-shirt", label: "Woven shirts & blouses", baseWeeks: 5 },
  { value: "bottoms", label: "Chinos & casual bottoms", baseWeeks: 6 },
  { value: "denim", label: "Denim jeans & jackets", baseWeeks: 8 },
  { value: "outerwear", label: "Jackets & outerwear", baseWeeks: 9 },
  { value: "activewear", label: "Activewear & performance", baseWeeks: 6 },
  { value: "kidswear", label: "Kidswear programs", baseWeeks: 5 },
] as const;

export const quoteQuantityRanges = [
  { value: "300-500", label: "300 – 500 pcs", min: 300, max: 500, weeksDelta: 0 },
  { value: "500-1000", label: "500 – 1,000 pcs", min: 500, max: 1000, weeksDelta: 0 },
  { value: "1000-3000", label: "1,000 – 3,000 pcs", min: 1000, max: 3000, weeksDelta: 1 },
  { value: "3000-5000", label: "3,000 – 5,000 pcs", min: 3000, max: 5000, weeksDelta: 1 },
  { value: "5000-10000", label: "5,000 – 10,000 pcs", min: 5000, max: 10000, weeksDelta: 2 },
  { value: "10000+", label: "10,000+ pcs", min: 10000, max: 20000, weeksDelta: 3 },
] as const;

export const quoteMaterials = [
  { value: "standard", label: "Standard mill fabrics", weeksDelta: 0, priceFactor: 1 },
  { value: "organic", label: "GOTS organic cotton", weeksDelta: 1, priceFactor: 1.15 },
  { value: "recycled", label: "GRS recycled blends", weeksDelta: 1, priceFactor: 1.12 },
  { value: "performance", label: "Performance / technical", weeksDelta: 2, priceFactor: 1.25 },
] as const;

export const quoteBrandingOptions = [
  { value: "woven-label", label: "Woven neck & care labels", weeksDelta: 0 },
  { value: "printed", label: "Printed branding & graphics", weeksDelta: 0.5 },
  { value: "embroidery", label: "Custom embroidery", weeksDelta: 1 },
  { value: "packaging", label: "Retail-ready packaging & hangtags", weeksDelta: 0.5 },
] as const;

export const quoteDestinations = [
  { value: "us-west", label: "US West Coast", transit: "Air 5–7 days / Sea 28–32 days" },
  { value: "us-east", label: "US East Coast", transit: "Air 6–8 days / Sea 32–36 days" },
  { value: "eu-north", label: "Northern Europe", transit: "Air 4–6 days / Sea 26–30 days" },
  { value: "eu-central", label: "Central Europe", transit: "Air 4–6 days / Sea 28–32 days" },
  { value: "uk", label: "United Kingdom", transit: "Air 4–6 days / Sea 30–34 days" },
  { value: "other", label: "Other / multi-destination", transit: "Quoted per lane" },
] as const;

export type QuoteInput = {
  garmentType: string;
  quantity: string;
  material: string;
  branding: string[];
  destination: string;
};

export function estimateQuote(input: QuoteInput) {
  const garment = quoteGarmentTypes.find((g) => g.value === input.garmentType);
  const qty = quoteQuantityRanges.find((q) => q.value === input.quantity);
  const material = quoteMaterials.find((m) => m.value === input.material);
  const destination = quoteDestinations.find((d) => d.value === input.destination);

  const base = garment?.baseWeeks ?? 5;
  const brandingWeeks = input.branding.reduce(
    (sum, value) =>
      sum + (quoteBrandingOptions.find((b) => b.value === value)?.weeksDelta ?? 0),
    0,
  );
  const raw = base + (qty?.weeksDelta ?? 0) + (material?.weeksDelta ?? 0) + brandingWeeks;
  const low = Math.max(3, Math.floor(raw));
  const high = low + 2;

  const qtyMid = qty ? (qty.min + qty.max) / 2 : 1000;
  const baseUnit = garment?.value === "denim" || garment?.value === "outerwear" ? 8.5 : 4.2;
  const unitLow = Number((baseUnit * (material?.priceFactor ?? 1)).toFixed(2));
  const unitHigh = Number((baseUnit * 1.35 * (material?.priceFactor ?? 1)).toFixed(2));

  return {
    leadTime: `${low}–${high} Weeks`,
    transit: destination?.transit ?? "Quoted per lane",
    fobRange: `$${unitLow.toFixed(2)} – $${unitHigh.toFixed(2)} / pc`,
    fobTotal: `$${(unitLow * qtyMid / 1000).toFixed(1)}k – $${(unitHigh * qtyMid / 1000).toFixed(1)}k`,
    summary: [
      garment?.label,
      qty?.label,
      material?.label,
      input.branding.length > 0
        ? `${input.branding.length} branding option(s)`
        : "No custom branding",
      destination?.label,
    ]
      .filter(Boolean)
      .join(" · "),
  };
}
