import { UNSPLASH_IMAGES } from "./unsplashImages";

export interface Subsidiary {
  id: string;
  name: string;
  brandTitle: string;
  tagline: string;
  description: string;
  director: string;
  directorRole: string;
  directorImage: string;
  category: "Energy" | "Agro & FMCG" | "Tourism" | "Artisanal" | "Fashion" | "Legal" | "Manufacturing";
  accentColor: string;
  glowColor: string;
  coverImage: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  products: ProductItem[];
  externalUrl?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  specs: { [key: string]: string };
  keyBenefits: string[];
  packagingOptions?: string[];
  applications?: string[];
  certifications?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  division: string;
  qualification?: string;
  bio: string;
  image: string;
  focus: string[];
}

export interface Certificate {
  id: string;
  code: string;
  name: string;
  authority: string;
  category: string;
  description: string;
  verified: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  company: string;
  country: string;
  flag: string;
  quote: string;
  vertical: string;
  rating: number;
}

// ----------------------------------------------------
// SUBSIDIARIES DATA
// ----------------------------------------------------
export const SUBSIDIARIES: Subsidiary[] = [
  {
    id: "paa-solar",
    name: "PAA Solar",
    brandTitle: "PAA SOLAR & CLEAN TECH",
    tagline: "High-Efficiency N-Type TOPCon Photovoltaics & Intelligent Storage",
    description:
      "A flagship clean-tech division engineered for utility, commercial, and residential energy sovereignty. We specialize in advanced N-Type TOPCon solar modules, AI-driven hybrid inverters, and high-density LiFePO4 battery storage systems with a 30-year linear performance warranty.",
    director: "Mr. Pandey",
    directorRole: "Group Director & Clean Energy Division Head",
    directorImage: UNSPLASH_IMAGES.leaderPandey,
    category: "Energy",
    accentColor: "#06b6d4",
    glowColor: "rgba(6, 182, 212, 0.4)",
    coverImage: UNSPLASH_IMAGES.solarFarmBifacial,
    stats: [
      { label: "Module Efficiency", value: "Up to 23.32%" },
      { label: "Linear Warranty", value: "30 Years" },
      { label: "MPPT Inverter Efficiency", value: ">98.4%" },
      { label: "Battery Cycle Life", value: "5,000+ Cycles" },
    ],
    highlights: [
      "Ultra-thin 1-2nm Tunnel Oxide Passivated Contact (TOPCon) architecture",
      "Bifacial dual-glass technology delivering up to 25% rear albedo gain",
      "Smart Hybrid Inverters with seamless <10ms UPS auto-transfer",
      "Automated Net-Metering Export & Anti-Islanding Grid Protection",
      "LiFePO4 high-safety chemistry with 10-20% safe depth of discharge",
    ],
    products: [
      {
        id: "topcon-solar-panel",
        name: "TOPCon N-Type High-Efficiency Solar Panel",
        subtitle: "500Wp – 640Wp+ Ultra-Tier Photovoltaic Modules",
        category: "Solar PV Modules",
        description:
          "Engineered with cutting-edge Tunnel Oxide Passivated Contact technology on N-type silicon wafers. Features ultra-low initial 1st-year degradation (≤1%) and minimal 0.4% annual degradation through Year 30.",
        image: UNSPLASH_IMAGES.solarPanelsRoof,
        specs: {
          "Power Output Range": "500Wp to 640Wp+ (Utility) / 275Wp (Compact)",
          "Module Conversion Efficiency": "22.0% – 23.32%",
          "Cell Architecture": "N-Type Monocrystalline TOPCon (1-2nm oxide tunnel)",
          "Degradation Rate": "≤ 1.0% Year 1 | 0.40%/year (Y2–Y30)",
          "Warranty": "30-Year Linear Power Warranty | 15-Year Product Warranty",
          "Bifaciality Factor": "80% ± 5% (Dual-Glass variants)",
          "Temperature Coefficient": "-0.30% / °C (High heat resilience)",
        },
        keyBenefits: [
          "Maximum energy yield in high-heat and humid desert/tropical climates",
          "Outstanding low-light and diffuse light performance during dawn, dusk, and overcast skies",
          "Zero Light-Induced Degradation (LID) and Potential-Induced Degradation (PID) immunity",
          "High structural load resistance (5400 Pa front snow / 2400 Pa rear wind)",
        ],
        packagingOptions: ["31 Panels / Pallet (Industrial Crates)", "620 Panels / 40ft High Cube Container"],
        applications: ["Utility-Scale Solar Farms", "Commercial Rooftops", "Industrial Microgrids", "High-End Residential"],
        certifications: ["IEC 61215", "IEC 61730", "ISO 9001", "CE", "UL 61730"],
      },
      {
        id: "grid-tie-inverter",
        name: "Intelligent Grid-Tie Solar Inverter",
        subtitle: "High-Frequency MPPT Solar-to-Grid Synchronizer",
        category: "Power Electronics",
        description:
          "Transforms raw DC solar energy into clean, synchronized household and industrial AC power. Synchronizes seamlessly with utility grid voltage, frequency, and phase with intelligent bi-directional net metering.",
        image: UNSPLASH_IMAGES.solarInverterTech,
        specs: {
          "Conversion Efficiency": "Over 98.2% (Euro Efficiency 97.8%)",
          "MPPT Trackers": "Dual / Multi-Channel High-Speed MPPT",
          "Grid Synchronization": "Automatic Phase, Frequency & Voltage Match",
          "Export Control": "Integrated Bi-Directional Net-Metering Meter",
          "Safety Protection": "Rapid Anti-Islanding Shutdown (<100ms), DC Surge Type II, Arc Fault AFCI",
          "Cooling": "Smart Natural Convection & Low-Noise Fans",
        },
        keyBenefits: [
          "Zero battery bank overhead required — utilizes the public grid as a virtual battery",
          "Real-time cloud analytics & mobile telemetry app integration",
          "Automated anti-islanding protects grid linemen during external outages",
        ],
        applications: ["Grid-Connected Homes", "Commercial Complexes", "Industrial Energy Offsetting"],
        certifications: ["IEEE 1547", "IEC 62109-1/2", "VDE-AR-N 4105", "CE"],
      },
      {
        id: "hybrid-solar-inverter",
        name: "All-in-One Multi-Mode Hybrid Inverter",
        subtitle: "3kW – 50kW Intelligent Energy Flow Orchestrator",
        category: "Power Electronics",
        description:
          "Combines an MPPT solar inverter and intelligent battery charge controller into a unified powerhouse. Dynamically balances rooftop solar, LiFePO4 battery reserve, and utility grid power with <10ms UPS switching.",
        image: UNSPLASH_IMAGES.batteryStorageLiFePO4,
        specs: {
          "Power Rating": "3 kW to 50 kW Modular Scalability",
          "Battery Compatibility": "48V Low-Voltage & High-Voltage LiFePO4 / LFP",
          "Transfer Switch Time": "< 10ms (Uninterrupted UPS Grade)",
          "Peak Surge Power": "200% Nominal Capacity (10 Seconds)",
          "Operating Modes": "Self-Consumption, Time-of-Use Peak Shaving, Off-Grid Backup, Net-Export",
        },
        keyBenefits: [
          "Complete blackout immunity for critical household and commercial loads",
          "Time-of-use scheduling: charges during low tariff hours, discharges at peak rates",
          "Remote OTA firmware upgrades and AI-assisted battery health management",
        ],
        applications: ["Luxury Villas", "Hospitals & Clinics", "Server Rooms", "Commercial Facilities"],
        certifications: ["CE", "UN38.3", "IEC 62040", "IEC 62619"],
      },
      {
        id: "offgrid-inverter",
        name: "Heavy-Duty Off-Grid Solar Inverter",
        subtitle: "Autonomous Pure Sine Wave Power Station",
        category: "Power Electronics",
        description:
          "Engineered for off-grid communities, agricultural solar pumps, and remote commercial setups. Delivers pristine pure sine wave output with high-voltage MPPT solar harvesting and generator auto-start.",
        image: UNSPLASH_IMAGES.solarInverterTech,
        specs: {
          "Output Waveform": "Pure Sine Wave (THD < 3%)",
          "Capacity Range": "1 kW to 15 kW Units (Parallelable up to 90 kW)",
          "MPPT Voltage Range": "60V – 500V DC Ultra-Wide Window",
          "Overload Protection": "110%-150% for 1 minute; >150% for 10 seconds",
        },
        keyBenefits: [
          "Completely detached from grid unreliability with 100% autonomous operation",
          "High surge rating effortlessly drives heavy inductive loads (pumps, compressors, motors)",
        ],
        applications: ["Agricultural Solar Pumps", "Remote Eco-Resorts", "Telecom Towers", "Off-Grid Farms"],
        certifications: ["CE", "RoHS", "ISO 9001"],
      },
      {
        id: "lifepo4-battery",
        name: "LiFePO4 Ultra-Density Energy Storage Battery",
        subtitle: "Lithium Iron Phosphate Deep-Cycle Power Banks",
        category: "Energy Storage",
        description:
          "Premium LiFePO4 (Lithium Iron Phosphate) chemistry delivering unmatched thermal stability, non-combustible safety, 5,000+ cycle life, and 95%+ round-trip efficiency. 50% lighter than legacy lead-acid systems.",
        image: UNSPLASH_IMAGES.batteryStorageLiFePO4,
        specs: {
          "Nominal Voltage": "3.2V / Cell (12.8V, 25.6V, 51.2V Modular Packs)",
          "Cycle Life": "2,500 – 5,000+ Cycles @ 80% DoD (Up to 9,000+ at 50% DoD)",
          "Round-Trip Efficiency": "≥ 95%",
          "Discharge Temperature": "-20°C to +60°C",
          "Charge Temperature": "0°C to +55°C",
          "Safe Depth of Discharge": "80% to 90% (Can discharge down to 10-20% safely)",
          "Weight Reduction": "40% – 50% lighter than equivalent Lead-Acid banks",
        },
        keyBenefits: [
          "Zero maintenance — no liquid top-ups, no corrosive acid leaks, no thermal runaway risks",
          "Integrated Smart BMS with multi-cell active balancing and CAN/RS485 telemetry",
          "Fast recharge capability: 0 to 100% within 2 hours",
        ],
        applications: ["Residential Solar Storage", "Marine & Yacht Power", "RV & Off-Grid Living", "Data Center UPS"],
        certifications: ["UN38.3", "IEC 62619", "CE", "UL 1973", "MSDS"],
      },
    ],
  },

  {
    id: "ekchakra-agro-fmcg",
    name: "Ekchakra Export",
    brandTitle: "EKCHAKRA AGRO & FMCG EXPORTS",
    tagline: "Direct-Farm GI Tagged Basmati, Fox Nuts (Makhana) & Pure Indian Spices",
    description:
      "A global agro-export division connecting India's rich agricultural heritage with international dining tables and FMCG industries. Sourced directly from certified farmer collectives across Punjab, Bihar, Andhra Pradesh, and Rajasthan, our commodities adhere strictly to APEDA, FSSAI, and global phytosanitary standards.",
    director: "Mr. Pandey",
    directorRole: "Director & Global Export Head",
    directorImage: UNSPLASH_IMAGES.leaderPandey,
    category: "Agro & FMCG",
    accentColor: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.4)",
    coverImage: UNSPLASH_IMAGES.basmatiRiceGrains,
    stats: [
      { label: "Export Destinations", value: "35+ Countries" },
      { label: "Purity Testing", value: "100% Sortex Cleaned" },
      { label: "Basmati Grain Length", value: "8.35mm+ Average" },
      { label: "Farmer Network", value: "1,200+ Cultivators" },
    ],
    highlights: [
      "100% Machine Sortex Cleaned with laser-color sorting",
      "Direct GI-tagged Basmati grain sourcing from Punjab & Haryana fertile basins",
      "Jumbo Grade Fox Nuts (Makhana) sourced natively from Mithila, Bihar",
      "Lab-certified moisture control (<12%) and zero chemical additives",
      "Flexible packaging from 50g retail sachets to 50kg export PP/BOPP & FCL containers",
    ],
    products: [
      {
        id: "basmati-non-basmati-rice",
        name: "Heritage Basmati & Regional State Rices",
        subtitle: "1121 XXL Grain, Pusa, Traditional & Sona Masoori",
        category: "Agro Commodities",
        description:
          "World-renowned Indian long-grain Basmati rice, celebrated for its floral aroma, slender elongation upon cooking (up to 2.5x), and non-sticky fluffy texture. Complementing our Basmati line are top-tier regional staples like Sona Masoori, PR-11, and IR-64.",
        image: UNSPLASH_IMAGES.basmatiRicePaddy,
        specs: {
          "Varieties": "1121 Steam / Sella / Golden Sella / Raw, Pusa Basmati, Traditional Basmati, Sona Masoori, IR-64",
          "Average Grain Length (AGL)": "8.35 mm to 8.45 mm (1121 Variety)",
          "Moisture Content": "12.0% Max",
          "Broken Grains": "< 1% (Sortex Grade 1)",
          "Purity": "95% Minimum (Customizable to 100%)",
          "Aroma": "Naturally Aged 12 to 24 Months",
          "Origin": "Punjab, Haryana, West Bengal, Andhra Pradesh (India)",
        },
        keyBenefits: [
          "Superb culinary elongation with discrete, feather-light grains",
          "Low Glycemic Index (GI), gluten-free, easily digestible",
          "Direct farm-to-mill vacuum processing preserves natural fragrance and nutrients",
        ],
        packagingOptions: ["1kg, 5kg, 10kg, 25kg, 50kg Non-Woven & BOPP Bags", "1x20ft FCL (25 Metric Tons)"],
        certifications: ["APEDA", "FSSAI", "ISO 22000", "Phytosanitary Certified"],
      },
      {
        id: "makhana-fox-nuts",
        name: "Jumbo Grade Puffed Makhana (Fox Nuts / Gorgon Nuts)",
        subtitle: "Grade-A Phool Makhana & Roasted Gourmet Flavors",
        category: "Superfoods",
        description:
          "Sourced organically from the pristine freshwater wetlands of Mithila (Bihar). Known globally as Fox Nuts or Gorgon Nut (Euryale Ferox), Makhana is an extraordinary gluten-free superfood packed with plant protein, magnesium, and anti-aging flavonoids.",
        image: UNSPLASH_IMAGES.makhanaFoxNuts,
        specs: {
          "Grades Available": "6-Suta Jumbo (Handpicked), 5-Suta Premium, 4-Suta Standard, Roasted Flavored",
          "Size Diameter": "12mm to 18mm+ (Jumbo Grade)",
          "Moisture Level": "≤ 8.0% (Ultra-crisp vacuum sealed)",
          "Protein Content": "9.7g / 100g",
          "Dietary Attributes": "Gluten-Free, Low Sodium, Zero Cholesterol, High Fiber",
        },
        keyBenefits: [
          "Exceptional plant-based protein snack with high potassium and low glycemic index",
          "Contains kaempferol — a powerful natural antioxidant supporting cardiovascular vitality",
          "Perfect for healthy snacking, culinary curries, puddings (kheer), and superfood blends",
        ],
        packagingOptions: ["50g, 100g, 250g Nitrogen-flushed Stand-up Pouches", "10kg / 25kg Bulk Corrugated Cartons"],
        certifications: ["FSSAI", "APEDA", "Non-GMO", "Halal"],
      },
      {
        id: "jeera-cumin-seeds",
        name: "Select Machine-Cleaned Cumin Seeds (Jeera)",
        subtitle: "Apiaceae Irano-Turanian Premium Whole Spices",
        category: "Whole Spices",
        description:
          "Intensely aromatic whole cumin seeds harvested from the arid spice belts of Gujarat and Rajasthan. Sun-dried and processed through modern multi-stage sortex cleaning to deliver 99.5% purity.",
        image: UNSPLASH_IMAGES.cuminSeedsJeera,
        specs: {
          "Purity": "99% to 99.5% Machine Cleaned Sortex",
          "Volatile Essential Oil": "2.5% to 4.0% Min",
          "Moisture": "≤ 9.0%",
          "Foreign Matter": "≤ 0.5%",
          "Packaging": "25kg / 50kg Jute & HDPE Poly-lined Bags",
        },
        keyBenefits: [
          "High concentration of thymol and cuminic aldehyde for profound aroma",
          "Natural digestive catalyst widely used in Mediterranean, Middle Eastern, and Asian cuisines",
        ],
        certifications: ["Spices Board of India", "FSSAI", "ISO 9001"],
      },
      {
        id: "lahsun-garlic-powder",
        name: "Micro-Dehydrated Pure Garlic Powder (Lahsun)",
        subtitle: "100% Natural Allium Sativum Flavor Enhancer",
        category: "Spice Powders",
        description:
          "Made from selected premium fresh garlic cloves that undergo state-of-the-art low-temperature dehydration and fine milling. Free of lumpiness, anti-caking chemicals, or fillers.",
        image: UNSPLASH_IMAGES.garlicPowder,
        specs: {
          "Mesh Size": "80 – 100 Mesh (Fine Free-Flowing)",
          "Moisture": "≤ 5.5%",
          "Allicin Content": "High Retained Bioactivity",
          "Color": "Creamy White to Pale Yellow",
        },
        keyBenefits: [
          "Instant potent garlic punch without peeling, chopping, or spoilage",
          "Exceptional solubility in seasonings, marinades, snack coatings, and dry rubs",
        ],
        packagingOptions: ["100g, 250g, 500g, 1kg Stand-up Foil Bags", "25kg Paper Drums with Poly Liner"],
        certifications: ["FSSAI", "US-FDA Registered Facility", "HACCP"],
      },
      {
        id: "red-mirch-powder",
        name: "Pure Red Chili Powder (Mirch)",
        subtitle: "Guntur, Byadigi, Mathania & Kashmiri Profiles",
        category: "Spice Powders",
        description:
          "Derived from stemless, sun-dried red chilies. Available in diverse profiles: from the fiery pungency of Guntur (50,000+ SHU) to the radiant ruby coloration and gentle mild warmth of Byadigi and Kashmiri chilies.",
        image: UNSPLASH_IMAGES.redChiliPowder,
        specs: {
          "Variants": "Kashmiri Mild Red, Guntur Extra Spicy, Byadigi Color-Rich, Mathania Signature",
          "Scoville Heat Units (SHU)": "10,000 SHU (Mild) to 65,000 SHU (Extra Hot)",
          "ASTA Color Value": "80 to 140+ ASTA",
          "Total Ash": "≤ 8.0%",
          "Packaging": "50g, 100g, 250g, 500g, 1000g Pouches | 25kg Bulk Bags",
        },
        keyBenefits: [
          "Vibrant natural capsaicin and carotenoids with zero artificial food dyes",
          "Rich in Vitamin A, Vitamin C, and metabolic-boosting capsaicin",
        ],
        certifications: ["Spices Board India", "FSSAI", "ISO 22000"],
      },
      {
        id: "garam-masala-powder",
        name: "Artisanal Royal Garam Masala Powder",
        subtitle: "Master Blend of 12 Warm Aromatic Whole Spices",
        category: "Spice Blends",
        description:
          "A signature artisanal spice formulation. Cumin, coriander, green cardamom, black cardamom, cloves, cinnamon, mace (javitri), nutmeg, black peppercorns, and star anise roasted to perfection and ground at controlled temperatures.",
        image: UNSPLASH_IMAGES.garamMasalaSpices,
        specs: {
          "Ingredients": "Cumin, Coriander, Cardamom, Cloves, Cinnamon, Mace, Black Pepper, Nutmeg, Star Anise",
          "Texture": "Fine Aromatic Powder",
          "Packaging": "50g, 100g, 250g Airtight Glass Jars & Foil Pouches",
          "Shelf Life": "12 Months in airtight cool dry storage",
        },
        keyBenefits: [
          "Preserved essential oils that release an intoxicating aroma when sprinkled in the final cooking stage",
          "Perfect balance of warmth, sweetness, and piquant spice without harsh bitterness",
        ],
        certifications: ["FSSAI", "Spices Board of India"],
      },
      {
        id: "drumstick-moringa-powder",
        name: "Organic Drumstick (Moringa Leaf) Superfood Powder",
        subtitle: "Moringa Oleifera Nutrient-Dense Green Superfood",
        category: "Superfoods",
        description:
          "Crafted from shade-dried young leaves of the miraculous Moringa oleifera tree. Packed with 90+ bioactive nutrients, 46 natural antioxidants, 18 amino acids, high iron, calcium, and vitamin C.",
        image: UNSPLASH_IMAGES.moringaLeafPowder,
        specs: {
          "Raw Material": "100% Organic Moringa Oleifera Leaves",
          "Nutrient Density": "7x Vitamin C of Oranges, 4x Calcium of Milk, 3x Potassium of Bananas",
          "Appearance": "Deep Emerald Green Fine Powder",
          "Moisture": "≤ 6.0%",
        },
        keyBenefits: [
          "Powerful natural energy booster and immune defense optimizer",
          "Superb addition to smoothies, wellness teas, dietary capsules, and skincare masks",
        ],
        packagingOptions: ["100g, 250g, 500g Resealable Kraft Bags", "20kg Fiber Drums"],
        certifications: ["Organic Certified", "FSSAI", "GMP", "ISO 9001"],
      },
      {
        id: "gawar-gum-powder",
        name: "High-Viscosity Guar Gum Powder",
        subtitle: "Cyamopsis Tetragonoloba Natural Plant Galactomannan",
        category: "Industrial & Food Hydrocolloids",
        description:
          "Extracted from the endosperm of guar seeds grown in Rajasthan. Acts as a premier natural water-soluble plant fiber, thickener, binder, and emulsion stabilizer across food, pharmaceutical, and industrial applications.",
        image: UNSPLASH_IMAGES.guarGumBeans,
        specs: {
          "Chemical Class": "Galactomannan Polysaccharide",
          "Viscosity Grades": "3,000 cps up to 8,000 cps (2hr / 24hr)",
          "Mesh Options": "100 Mesh, 200 Mesh, 250 Mesh",
          "Moisture": "≤ 12.0%",
          "Solubility": "Rapidly disperses in both cold and hot water to form thick gels",
        },
        keyBenefits: [
          "Natural stabilizer for bakery, sauces, dairy, and confectionery",
          "Essential rheology modifier in cosmetics, pharmaceuticals, textiles, and paper production",
        ],
        packagingOptions: ["25kg Multi-wall Kraft Paper Bags with PE Liner", "1000kg Jumbo Big Bags"],
        certifications: ["ISO 9001", "HACCP", "Halal", "Kosher", "FSSAI"],
      },
      {
        id: "pure-desi-ghee",
        name: "Vedic Bilona Pure Desi Cow Ghee",
        subtitle: "Traditional Cultured Clarified Butter (99.5% Pure Milk Fat)",
        category: "Dairy & Ayurveda",
        description:
          "Prepared via traditional Vedic churning of curdled whole grass-fed cow milk. Simmered slowly to caramelize milk solids, resulting in a rich golden aroma, nutty flavor, and long room-temperature shelf life.",
        image: UNSPLASH_IMAGES.desiGheeClarified,
        specs: {
          "Milk Fat Content": "≥ 99.5%",
          "Moisture": "≤ 0.3%",
          "Lactose & Casein": "Virtually Zero (Safe for lactose sensitive diets)",
          "Smoke Point": "250°C (482°F) — High Heat Stability",
          "Vitamins": "Rich in Fat-Soluble Vitamins A, D, E, K",
        },
        keyBenefits: [
          "Revered in Ayurvedic medicine for promoting digestion, ojas (vitality), and memory",
          "Exceptional for high-temperature sautéing, baking, and traditional sweet delicacies",
        ],
        packagingOptions: ["250ml, 500ml, 1L Glass Jars & Food-Grade Tins", "15kg Bulk Commercial Tins"],
        certifications: ["FSSAI", "Agmark Grade-1", "ISO 22000"],
      },
      {
        id: "organic-cowdung-biogas",
        name: "Bio-Enriched Cow Dung Compost & Renewable Biogas",
        subtitle: "3:2:1 NPK Organic Soil Conditioner & Clean Bio-Energy",
        category: "Organic Agrotech",
        description:
          "Nutrient-dense, aerobically composted indigenous cow manure. Enriched with billions of beneficial rhizosphere microorganisms, cellulose, lignin, and a balanced 3% N, 2% P, 1% K profile to restore degraded soil structures.",
        image: UNSPLASH_IMAGES.organicFarmFertilizer,
        specs: {
          "NPK Profile": "3% Nitrogen (N), 2% Phosphorus (P2O5), 1% Potassium (K2O)",
          "Organic Matter": "≥ 40%",
          "Moisture": "20% – 25%",
          "Biogas Yield": "0.04 m³ gas per kg fresh dung for clean methane energy",
        },
        keyBenefits: [
          "Slow-release natural nourishment with remarkable soil moisture retention",
          "Zero synthetic chemicals — 100% safe for organic farming and regenerative agriculture",
        ],
        packagingOptions: ["5kg, 10kg, 25kg, 50kg HDPE Bags", "Bulk Trailer Loads"],
        certifications: ["National Centre of Organic Farming (NCOF)", "FSSAI"],
      },
    ],
  },

  {
    id: "rj-travel-junction",
    name: "RJ Travel Junction",
    brandTitle: "RJ TRAVEL JUNCTION",
    tagline: "Bespoke Experiential Journeys, MICE & International Tourism",
    description:
      "A distinguished hospitality and global tourism wing providing seamless domestic and international travel architectures. From royal Rajasthani palace stays and Himalayan wellness retreats to corporate MICE conferences and European luxury circuits, we deliver personalized wanderlust with end-to-end concierge excellence.",
    director: "Ritesh",
    directorRole: "Managing Director – Tourism & Hospitality",
    directorImage: UNSPLASH_IMAGES.leaderRitesh,
    category: "Tourism",
    accentColor: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.4)",
    coverImage: UNSPLASH_IMAGES.luxuryTravelHimalayas,
    stats: [
      { label: "Client Satisfaction", value: "99.4%" },
      { label: "Global Destinations", value: "45+ Countries" },
      { label: "Corporate Groups Handled", value: "250+ MICE" },
      { label: "Dedicated Concierge", value: "24/7 Global Support" },
    ],
    highlights: [
      "Custom Luxury Itineraries across Europe, Middle East, Southeast Asia, and India",
      "Corporate MICE (Meetings, Incentives, Conferences, Exhibitions) turnkey logistics",
      "Exclusive Inbound Heritage Expeditions (Palaces, Ayurveda, Wildlife Safaris)",
      "Priority VIP Airport Lounges, Private Charters & International Visa Services",
    ],
    products: [
      {
        id: "corporate-mice-solutions",
        name: "Turnkey Corporate MICE & Retreats",
        subtitle: "Global Conferences & Incentive Travel Architecture",
        category: "Corporate Travel",
        description:
          "End-to-end planning and flawless execution for international board meetings, product launches, corporate annual summits, and luxury team incentives.",
        image: UNSPLASH_IMAGES.internationalFlightLuxury,
        specs: {
          "Services": "Venue Sourcing, Air Ticketing, 5-Star Accommodations, AV Production, Gala Dinners",
          "Group Size": "10 to 1,500+ Delegates",
          "Destinations": "Dubai, Singapore, Switzerland, Bali, Thailand, Goa, Jaipur, Udaipur",
        },
        keyBenefits: [
          "Complete budget optimization with dedicated on-ground trip directors",
          "Tailored team-building activations and high-level corporate hospitality",
        ],
      },
      {
        id: "heritage-luxury-tours",
        name: "Incredible India Heritage & Royal Circuits",
        subtitle: "Golden Triangle, Royal Rajasthan & Kerala Backwaters",
        category: "Experiential Tourism",
        description:
          "Immersive cultural journeys featuring private access to historic palaces, tiger safaris in Ranthambore, luxury houseboats in Alleppey, and spiritual Ganges ghats in Varanasi.",
        image: UNSPLASH_IMAGES.rajasthanPalaceHeritage,
        specs: {
          "Curated Circuits": "Royal Rajasthan, Golden Triangle, God's Own Country, Himalayan Nirvana",
          "Inclusions": "Heritage Palace Stays, Private Chauffeurs, Expert Historian Guides",
        },
        keyBenefits: [
          "Unparalleled cultural immersion with royal hospitality and authentic culinary tastings",
        ],
      },
    ],
  },

  {
    id: "shilp-craft",
    name: "Shilp Craft",
    brandTitle: "SHILP CRAFT & HERITAGE",
    tagline: "Authentic Indian Artisanal Crafts, Brass Art & Global Cross-Border Commerce",
    description:
      "Celebrating centuries of master Indian craftsmanship. Shilp Craft bridges indigenous rural artisans with international connoisseurs of fine art. From lost-wax brass sculptures and marble inlay to hand-carved teak decor, our creations grace luxury homes across the globe via Amazon Global, Bazar.com, and bespoke architectural commissions.",
    director: "Punam",
    directorRole: "Managing Director – Shilp Craft",
    directorImage: UNSPLASH_IMAGES.leaderPunam,
    category: "Artisanal",
    accentColor: "#ec4899",
    glowColor: "rgba(236, 72, 153, 0.4)",
    coverImage: UNSPLASH_IMAGES.indianHandicraftBrass,
    stats: [
      { label: "Artisans Supported", value: "450+ Masters" },
      { label: "Global E-Commerce", value: "Amazon.com / Bazar" },
      { label: "Handcrafted Authenticity", value: "100% Genuine" },
      { label: "Countries Shipped", value: "28+ Nations" },
    ],
    highlights: [
      "Traditional Dhokra & lost-wax brass casting from master artisans",
      "Hand-chiseled marble & sandstone architectural artifacts",
      "Sustainable seasoned Sheesham and Teak wood home accessories",
      "Full global fulfillment via Amazon USA, UK, India, and direct container shipping",
    ],
    products: [
      {
        id: "brass-bronze-sculptures",
        name: "Handcrafted Brass & Bronze Artifacts",
        subtitle: "Lost-Wax Cast Heritage Statues & Modern Decor",
        category: "Fine Metal Art",
        description:
          "Meticulously hand-carved and cast by multigenerational metal artisans. Each piece is polished with natural patinas, bringing royal spiritual grandeur and timeless aesthetic charm to living spaces.",
        image: UNSPLASH_IMAGES.indianHandicraftBrass,
        specs: {
          "Material": "Solid Virgin Brass & Bronze Alloys",
          "Technique": "Lost-Wax Casting, Hand Chasing & Antique Patina Finish",
          "Dimensions": "6 inches to 6 feet monumental statues",
        },
        keyBenefits: [
          "100% unique heirloom quality that appreciates with time",
          "Empowers traditional artisan families through ethical fair-trade compensation",
        ],
      },
      {
        id: "handcarved-wood-decor",
        name: "Sheesham & Teak Wood Heritage Decor",
        subtitle: "Intricate Jali Carvings & Contemporary Furniture",
        category: "Woodcraft",
        description:
          "Sustainably harvested Indian rosewood (Sheesham) crafted into ornamental screens, jewelry boxes, accent tables, and wall panels showcasing delicate Mughal and Rajasthani motifs.",
        image: UNSPLASH_IMAGES.artisanWoodCarving,
        specs: {
          "Wood Species": "Kiln-Dried Seasoned Sheesham & Plantation Teak",
          "Finishing": "Eco-friendly natural beeswax and lacquer polish",
        },
        keyBenefits: [
          "Termite-resistant, sturdy seasoned hardwood with striking natural grain patterns",
        ],
      },
    ],
  },

  {
    id: "delight-apparel",
    name: "Delight Apparel",
    brandTitle: "DELIGHT APPAREL & TEXTILES",
    tagline: "Sustainable Organic Cottons, Modern Fashion & Global E-Commerce",
    description:
      "A fast-growing fashion and textile enterprise combining traditional Indian weaving artistry with modern garment engineering. Specializing in ethically cultivated organic cotton apparel, premium ethnic ensembles, and private-label retail collections for global fashion brands.",
    director: "Aastha",
    directorRole: "Managing Director – Delight Apparel",
    directorImage: UNSPLASH_IMAGES.leaderAastha,
    category: "Fashion",
    accentColor: "#a855f7",
    glowColor: "rgba(168, 85, 247, 0.4)",
    coverImage: UNSPLASH_IMAGES.fashionTextilesWeaving,
    stats: [
      { label: "Fabric Sourcing", value: "100% GOTS Cotton" },
      { label: "Retail Portals", value: "Amazon, Myntra, Global" },
      { label: "Annual Production", value: "500,000+ Units" },
      { label: "Dyeing Standards", value: "Eco-Friendly AZO Free" },
    ],
    highlights: [
      "Breathable, hypoallergenic organic cotton and linen fabrications",
      "High-precision laser cutting, computerized stitching, and strict QA protocols",
      "Private-label garment manufacturing and OEM supply for global retailers",
      "Zero-toxic AZO-free botanical and low-impact reactive dyeing",
    ],
    products: [
      {
        id: "sustainable-cotton-apparel",
        name: "GOTS Certified Organic Cotton Collection",
        subtitle: "Contemporary Everyday Wear & Luxury Loungewear",
        category: "Sustainable Fashion",
        description:
          "Supremely soft, breathable garments crafted from non-GMO organic cotton. Designed for maximum comfort, durability, and minimal environmental footprint.",
        image: UNSPLASH_IMAGES.organicCottonFabrics,
        specs: {
          "Fabric Weight": "160 GSM to 320 GSM French Terry / Single Jersey",
          "Certifications": "GOTS (Global Organic Textile Standard), OEKO-TEX Standard 100",
        },
        keyBenefits: [
          "Soft on skin, durable through 100+ wash cycles without pilling or shrinkage",
        ],
      },
    ],
  },

  {
    id: "aap-ka-haq",
    name: "AAP KA HAQ",
    brandTitle: "AAP KA HAQ LEGAL & STRATEGIC ADVISORY",
    tagline: "Corporate Law, Cross-Border Trade Counsel & Dispute Resolution",
    description:
      "A premier legal advisory and corporate consultancy practice led by Advocate Aashray (BA LLB). Providing razor-sharp legal acumen, contractual structuring, international trade compliance, and dispute resolution for multinational corporations, entrepreneurs, and individuals.",
    director: "Aashray (BA LLB)",
    directorRole: "Managing Director & Senior Legal Counsel",
    directorImage: UNSPLASH_IMAGES.leaderAashray,
    category: "Legal",
    accentColor: "#6366f1",
    glowColor: "rgba(99, 102, 241, 0.4)",
    coverImage: UNSPLASH_IMAGES.corporateBoardroom,
    stats: [
      { label: "Success Rate", value: "98.5%" },
      { label: "Cross-Border Deals", value: "$50M+ Advised" },
      { label: "Corporate Clients", value: "180+ Enterprises" },
      { label: "Practice Areas", value: "Corporate & Trade Law" },
    ],
    highlights: [
      "International Trade & Incoterms contractual architecture",
      "Cross-border M&A, Joint Ventures, and FDI statutory structuring",
      "Intellectual Property protection (Trademarks, Patents, Copyrights)",
      "High-stakes Commercial Arbitration, Mediation & Litigation representation",
    ],
    products: [
      {
        id: "international-trade-law",
        name: "Cross-Border Trade & Incoterms Legal Advisory",
        subtitle: "Export-Import Compliance & International Contract Structuring",
        category: "Corporate Legal",
        description:
          "End-to-end legal architecture safeguarding global transactions. Drafting robust Bills of Lading, Letters of Credit (LC) terms, marine insurance clauses, and dispute settlement mechanisms under ICC and UNCITRAL rules.",
        image: UNSPLASH_IMAGES.lawGavelJustice,
        specs: {
          "Jurisdictions": "India, GCC/UAE, European Union, United States, ASEAN",
          "Focus": "Customs Law, FEMA/RBI Regulations, International Arbitration",
        },
        keyBenefits: [
          "Guaranteed statutory compliance mitigating trade defaults and regulatory penalties",
        ],
      },
    ],
  },

  {
    id: "bk-metal",
    name: "B K Metal",
    brandTitle: "B K METAL & STRUCTURAL ENGINEERING",
    tagline: "Hot-Dip Galvanized Mounting Structures & Heavy Steel Fabrication",
    description:
      "A heavy engineering division providing high-tensile galvanized steel mounting systems for utility-scale solar farms, industrial rooftop racking, telecommunication towers, and precision architectural framing. Built to withstand extreme wind velocities up to 180 km/h with a 25-year corrosion warranty.",
    director: "Mr. Pandey",
    directorRole: "Group Director & Technical Head",
    directorImage: UNSPLASH_IMAGES.leaderPandey,
    category: "Manufacturing",
    accentColor: "#64748b",
    glowColor: "rgba(100, 116, 139, 0.4)",
    coverImage: UNSPLASH_IMAGES.galvanizedSteelFabrication,
    stats: [
      { label: "Galvanizing Standard", value: "IS 4759 / ASTM A123" },
      { label: "Zinc Coating", value: "80 – 120 Microns" },
      { label: "Wind Resistance", value: "Up to 180 km/h" },
      { label: "Annual Fabrication", value: "10,000+ Metric Tons" },
    ],
    highlights: [
      "High-grade pre-galvanized (PosMAC / Galvalume) and hot-dip galvanized C & Z Purlins",
      "Modular tilt-adjustable mounting systems for ground-mount solar arrays",
      "CNC punched and cold-rolled precision engineering for rapid onsite assembly",
      "Corrosion warranty of 25+ years in harsh industrial and coastal C4/C5 environments",
    ],
    products: [
      {
        id: "solar-mounting-structures",
        name: "Galvanized Solar Array Mounting Structures",
        subtitle: "Ground-Mount, Rooftop & Carport Steel Systems",
        category: "Industrial Engineering",
        description:
          "Heavy-duty hot-dip galvanized mounting structures engineered with custom wind and seismic load calculations. Compatible with all monofacial and bifacial solar panel formats.",
        image: UNSPLASH_IMAGES.steelStructuresSolar,
        specs: {
          "Steel Grade": "High-Strength YS 350 / YS 550 MPa structural steel",
          "Zinc Coating Thickness": "Minimum 80 to 120 Microns (Hot-Dip)",
          "Design Wind Speed": "Tested up to 180 km/h (50 m/s)",
          "Corrosion Rating": "Class C4/C5 Coastal Industrial Resistance",
        },
        keyBenefits: [
          "Zero on-site welding required — 100% bolted modular assembly cuts labor time by 40%",
          "Designed to maximize rear bifacial light absorption with minimal shading",
        ],
      },
    ],
  },
];

// ----------------------------------------------------
// EXECUTIVE LEADERSHIP DIRECTORY
// ----------------------------------------------------
export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    name: "Mr. Pandey",
    role: "Group Director & Clean Energy Division Head",
    division: "EKCHAKRA Group / PAA Solar / BK Metal",
    bio: "The visionary leader spearheading EKCHAKRA's global clean energy transition and international commodity exports. With over two decades of industrial execution experience, Mr. Pandey oversees PAA Solar's R&D, BK Metal fabrication, and worldwide trade alliances.",
    image: UNSPLASH_IMAGES.leaderPandey,
    focus: ["Renewable Energy Architecture", "Global Supply Chain Logistics", "Strategic Capital Allocation"],
  },
  {
    name: "Punam",
    role: "Director – Shilp Craft",
    division: "Shilp Craft (Artisanal Heritage)",
    bio: "Punam leads the complete P&L, global e-commerce logistics, and artisan empowerment operations for Shilp Craft. Under her leadership, traditional Indian master craftsmen have gained direct digital access to consumers across Amazon USA, Amazon India, and Bazar.com.",
    image: UNSPLASH_IMAGES.leaderPunam,
    focus: ["Cross-Border E-Commerce", "Artisan Collective Incubation", "Quality Standardization"],
  },
  {
    name: "Ritesh",
    role: "Director – RJ Travel Junction",
    division: "RJ Travel Junction",
    bio: "Ritesh manages the full P&L and strategic expansion of RJ Travel Junction. He specializes in designing world-class domestic and international corporate MICE itineraries, luxury leisure journeys, and VIP concierge logistics.",
    image: UNSPLASH_IMAGES.leaderRitesh,
    focus: ["Global Tourism Strategy", "MICE Corporate Hospitality", "International Airline Alliances"],
  },
  {
    name: "Aastha",
    role: "Director – Delight Apparel",
    division: "Delight Apparel & Textiles",
    bio: "Aastha steers Delight Apparel's design roadmap, sustainable textile sourcing, and multi-channel e-commerce growth. She is passionate about organic cotton, ethical supply chains, and modernizing Indian fashion exports.",
    image: UNSPLASH_IMAGES.leaderAastha,
    focus: ["Sustainable Garment Manufacturing", "E-Commerce Growth Strategy", "Apparel Design R&D"],
  },
  {
    name: "Aashray (BA LLB)",
    role: "Director & Senior Legal Advisor",
    division: "AAP KA HAQ",
    bio: "Advocate Aashray directs AAP KA HAQ, providing comprehensive legal and strategic counsel across international trade laws, cross-border corporate governance, dispute resolution, and contractual protections for the conglomerate and external clients.",
    qualification: "BA LLB – Advocate & Legal Counsel",
    image: UNSPLASH_IMAGES.leaderAashray,
    focus: ["International Trade Law", "Corporate Governance & M&A", "Commercial Dispute Arbitration"],
  },
  {
    name: "Priyanka",
    role: "Head of Group Human Resources",
    division: "EKCHAKRA Group Corporate",
    bio: "An accomplished HR strategist responsible for global talent acquisition, executive training, organizational culture, and aligning our high-performing multidisciplinary teams with the conglomerate's long-term vision.",
    image: UNSPLASH_IMAGES.leaderPriyanka,
    focus: ["Global Talent Strategy", "Continuous Leadership Training", "Organizational Culture"],
  },
  {
    name: "Mr. Dinesh",
    role: "Group Financial Advisor & Head of Audit",
    division: "EKCHAKRA Group Corporate",
    qualification: "FCA – Qualified Chartered Accountant",
    bio: "A seasoned Chartered Accountant overseeing financial integrity, fiscal forecasting, international currency risk hedging, statutory tax compliance, and corporate certification frameworks across all 7 group entities.",
    image: UNSPLASH_IMAGES.leaderDinesh,
    focus: ["Fiscal Governance & Audits", "Foreign Exchange Hedging", "Statutory Compliance & Tax"],
  },
  {
    name: "Mr. Bhardwaj",
    role: "Group Chief Marketing Officer",
    division: "EKCHAKRA Group Corporate",
    bio: "Directs EKCHAKRA's global brand presence, multimedia production, international trade show delegations, digital catalogs, video campaigns, and high-impact digital marketing ecosystems across the Americas, Europe, and Asia.",
    image: UNSPLASH_IMAGES.leaderBhardwaj,
    focus: ["Global Brand Architecture", "Digital Growth & Media Production", "International Expo Outreach"],
  },
];

// ----------------------------------------------------
// CERTIFICATIONS & COMPLIANCE
// ----------------------------------------------------
export const CERTIFICATIONS: Certificate[] = [
  {
    id: "iso-9001",
    code: "ISO 9001:2015",
    name: "Quality Management System Certification",
    authority: "International Organization for Standardization",
    category: "Quality Assurance",
    description: "Certified for standardized quality management systems, rigorous process control, and systematic customer satisfaction across all corporate divisions.",
    verified: true,
  },
  {
    id: "iec-dgft",
    code: "IEC (Import Export Code)",
    name: "Directorate General of Foreign Trade (DGFT)",
    authority: "Ministry of Commerce and Industry, Govt. of India",
    category: "International Trade",
    description: "Statutory authorization for unrestricted commercial import and export operations across 190+ global port customs jurisdictions.",
    verified: true,
  },
  {
    id: "fieo",
    code: "FIEO Registered",
    name: "Federation of Indian Export Organisations",
    authority: "Apex Trade Body, Govt. of India",
    category: "Export Promotion",
    description: "Recognized premier export house promoting Indian agro commodities, renewable tech, and artisanal craft goods across overseas markets.",
    verified: true,
  },
  {
    id: "msme",
    code: "MSME UDYAM",
    name: "Ministry of Micro, Small and Medium Enterprises",
    authority: "Govt. of India",
    category: "Government Enterprise",
    description: "Officially registered enterprise enjoying priority sovereign export financing, technological support, and international trade fair subsidies.",
    verified: true,
  },
  {
    id: "cin-mca",
    code: "CIN (Corporate Identity Number)",
    name: "Ministry of Corporate Affairs",
    authority: "Registrar of Companies (RoC), Govt. of India",
    category: "Legal Incorporation",
    description: "Fully incorporated legal private limited entity under the Indian Companies Act with transparent public corporate disclosures.",
    verified: true,
  },
  {
    id: "gst",
    code: "GST Registered",
    name: "Goods and Services Tax Authority",
    authority: "Department of Revenue, Ministry of Finance",
    category: "Tax Compliance",
    description: "Fully compliant unified GST tax registration enabling seamless nationwide interstate logistics and international export duty drawbacks.",
    verified: true,
  },
  {
    id: "apeda",
    code: "APEDA Certified",
    name: "Agricultural & Processed Food Products Export Development Authority",
    authority: "Govt. of India",
    category: "Agro Safety",
    description: "Certified exporter for premium Basmati rice, fox nuts (Makhana), spices, and organic agro derivatives adhering to global sanitary norms.",
    verified: true,
  },
  {
    id: "fssai",
    code: "FSSAI Food License",
    name: "Food Safety and Standards Authority of India",
    authority: "Ministry of Health & Family Welfare",
    category: "Food Safety",
    description: "Certified food manufacturing, packing, and export handling complying with stringent microbiological, pesticide, and purity benchmarks.",
    verified: true,
  },
];

// ----------------------------------------------------
// TESTIMONIALS
// ----------------------------------------------------
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Tariq Al-Mansoor",
    designation: "Procurement Director",
    company: "Gulf Oasis Food Distribution LLC",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    quote:
      "We imported over 250 metric tons of 1121 XXL Basmati Rice and Makhana from EKCHAKRA Export. The grain length, aroma, and packaging exceeded international hotel chain standards. Their team handled port clearance without a single day of demurrage.",
    vertical: "Agro & FMCG",
    rating: 5,
  },
  {
    id: "test-2",
    clientName: "Dr. Klaus Richter",
    designation: "Chief Technical Officer",
    company: "Nordic CleanVolt Energy GmbH",
    country: "Germany",
    flag: "🇩🇪",
    quote:
      "The TOPCon N-Type solar panels and hybrid inverters supplied by PAA Solar have demonstrated remarkable low-light efficiency during North European winters. Their 30-year performance guarantee and technical documentation are exemplary.",
    vertical: "PAA Solar",
    rating: 5,
  },
  {
    id: "test-3",
    clientName: "Elena Rostova",
    designation: "Head of Corporate Events",
    company: "Apex Global Financial Group",
    country: "United Kingdom",
    flag: "🇬🇧",
    quote:
      "RJ Travel Junction orchestrated our 350-delegate corporate summit in Rajasthan with breathtaking precision. From chartered flights and royal palace banquets to seamless audiovisual production, their hospitality is unmatched.",
    vertical: "RJ Travel Junction",
    rating: 5,
  },
  {
    id: "test-4",
    clientName: "Marcus Vance",
    designation: "Curator & Home Decor Retailer",
    company: "Heritage & Modern Living Inc.",
    country: "United States",
    flag: "🇺🇸",
    quote:
      "Shilp Craft's brass sculptures and hand-carved wood art have become our fastest-selling items across our US boutiques. The authentic craftsmanship and meticulous export packaging ensure zero transit damage.",
    vertical: "Shilp Craft",
    rating: 5,
  },
];

// ----------------------------------------------------
// CSR & SUSTAINABILITY INITIATIVES
// ----------------------------------------------------
export const CSR_INITIATIVES = [
  {
    id: "csr-1",
    title: "Project Surya Kranti (Solar Empowerment)",
    metric: "15,000+ MWh",
    metricLabel: "Clean Energy Generated Annually",
    description:
      "Deploying subsidized rooftop solar and agricultural pump inverters to rural farming villages, replacing polluting diesel gensets with zero-emission solar power.",
    image: UNSPLASH_IMAGES.greenPlanetSolar,
  },
  {
    id: "csr-2",
    title: "Kisan Samriddhi (Farmer Prosperity Program)",
    metric: "1,200+ Cultivators",
    metricLabel: "Direct Fair-Price Beneficiaries",
    description:
      "Providing certified non-GMO seeds, organic bio-compost, and soil-health testing to smallholder farmers while guaranteeing 20% above-market fair-trade procurement prices.",
    image: UNSPLASH_IMAGES.farmerCommunity,
  },
  {
    id: "csr-3",
    title: "Shilp Kala Vikas (Artisan Heritage Trust)",
    metric: "450+ Master Artisans",
    metricLabel: "Traditional Creators Empowered",
    description:
      "Revitalizing endangered Indian lost-wax brass casting, handloom weaving, and stone carving through direct healthcare, digital literacy, and global marketplace onboarding.",
    image: UNSPLASH_IMAGES.ruralArtisanCraft,
  },
];

// ----------------------------------------------------
// GLOBAL EXPORT DESTINATIONS
// ----------------------------------------------------
export const GLOBAL_DESTINATIONS = [
  { country: "United States", city: "New York / Houston", port: "Port of New York / Los Angeles" },
  { country: "United Arab Emirates", city: "Dubai / Abu Dhabi", port: "Jebel Ali Port" },
  { country: "Germany", city: "Hamburg / Frankfurt", port: "Port of Hamburg" },
  { country: "United Kingdom", city: "London / Southampton", port: "Port of Felixstowe" },
  { country: "Saudi Arabia", city: "Riyadh / Jeddah", port: "Jeddah Islamic Port" },
  { country: "Singapore", city: "Singapore", port: "Port of Singapore" },
  { country: "Australia", city: "Sydney / Melbourne", port: "Port of Melbourne" },
  { country: "Netherlands", city: "Rotterdam / Amsterdam", port: "Port of Rotterdam" },
  { country: "Japan", city: "Tokyo / Yokohama", port: "Port of Yokohama" },
  { country: "Canada", city: "Toronto / Vancouver", port: "Port of Vancouver" },
];
