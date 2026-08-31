const fs = require('fs');
const path = require('path');

const categories = [
  { name: "Modular Workstations", slug: "workstations", description: "Height adjustable sit-stand desks, linear open-plan desking, and acoustic panel partitions", image_url: "images/categories/cat_workstations.jpg", display_order: 1, is_visible: true, is_published: true },
  { name: "Height Adjustable Series", slug: "height-adjustable-series", description: "Motorized sit-to-stand desks engineered for active workplace ergonomics", image_url: "images/categories/cat_workstations.jpg", display_order: 2, is_visible: true, is_published: true },
  { name: "Open Plan Desking Series", slug: "desking-series", description: "Modular open-plan linear and back-to-back desking systems", image_url: "images/categories/cat_workstations.jpg", display_order: 3, is_visible: true, is_published: true },
  { name: "Panel Partition Series", slug: "panel-series", description: "Acoustic panel-based workstation partitions providing high acoustic privacy", image_url: "images/categories/cat_workstations.jpg", display_order: 4, is_visible: true, is_published: true },
  
  { name: "Tables & Desks", slug: "tables", description: "Executive director desks, boardroom meeting tables, cafe counters, and training desks", image_url: "images/categories/cat_tables.png", display_order: 5, is_visible: true, is_published: true },
  { name: "Executive Cabin Tables", slug: "cabin-tables", description: "Executive director and managerial desk setups with side return credenzas", image_url: "images/categories/cat_tables.png", display_order: 6, is_visible: true, is_published: true },
  { name: "Boardroom Meeting Tables", slug: "meeting-tables", description: "Large boardroom conference tables equipped with pop-up connectivity boxes", image_url: "images/categories/cat_tables.png", display_order: 7, is_visible: true, is_published: true },
  { name: "Cafe & Breakout Tables", slug: "cafe-tables", description: "Sleek cafe counters and collaborative huddle tables", image_url: "images/categories/cat_tables.png", display_order: 8, is_visible: true, is_published: true },
  { name: "Training Tables", slug: "training-tables", description: "Flip-top and mobile modular training room tables", image_url: "images/categories/cat_tables.png", display_order: 9, is_visible: true, is_published: true },

  { name: "Storage Systems", slug: "storage", description: "Prelam credenzas, steel filing cabinets, high-density mobile compactors, and employee lockers", image_url: "images/categories/cat_storage.png", display_order: 10, is_visible: true, is_published: true },
  { name: "Prelam Storage", slug: "prelam-storage", description: "Wooden pre-laminated credenzas and executive pedestals", image_url: "images/categories/cat_storage.png", display_order: 11, is_visible: true, is_published: true },
  { name: "Steel & Metal Storage", slug: "metal-storage", description: "Powder-coated steel filing cabinets, lateral drawers, and archive units", image_url: "images/categories/cat_storage.png", display_order: 12, is_visible: true, is_published: true },
  { name: "Compactor Storage", slug: "compactor-storage", description: "High-density mobile rail compactor storage systems", image_url: "images/categories/cat_storage.png", display_order: 13, is_visible: true, is_published: true },
  { name: "Employee Locker Systems", slug: "locker-systems", description: "Personal keyless employee locker cabinets", image_url: "images/categories/cat_storage.png", display_order: 14, is_visible: true, is_published: true },

  { name: "ArchLabs Seating Catalogue", slug: "archlabs-seating", description: "Line-wise Mesh, Executive Leather, Training, Metro Linea, and Cafeteria Collections", image_url: "images/categories/cat_seating.jpg", display_order: 15, is_visible: true, is_published: true },
  { name: "Ergonomic Mesh Chairs", slug: "mesh-chairs", description: "Breathable mesh back ergonomic office chairs with synchro-tilt mechanism", image_url: "images/categories/cat_seating.jpg", display_order: 16, is_visible: true, is_published: true },
  { name: "Executive Leather Chairs", slug: "leather-chairs", description: "Top-grain genuine leather high-back executive chairs", image_url: "images/categories/cat_seating.jpg", display_order: 17, is_visible: true, is_published: true },
  { name: "Training & Cafe Chairs", slug: "training-cafe-chairs", description: "Stackable writing tablet chairs and cafeteria seating", image_url: "images/categories/cat_seating.jpg", display_order: 18, is_visible: true, is_published: true },
  { name: "Metro Linea Public Seating", slug: "metro-linea", description: "2, 3, and 5-seater heavy-duty public airport and lobby benches", image_url: "images/categories/cat_seating.jpg", display_order: 19, is_visible: true, is_published: true },

  { name: "Soft Seating & Lounges", slug: "soft-seating", description: "Executive leather couches, modular lounge sofas, collaborative booths, and pouffes", image_url: "images/categories/cat_soft_seating.jpg", display_order: 20, is_visible: true, is_published: true },
  { name: "Acoustic Work Pods", slug: "acoustic-pods", description: "Solo phone booths and 4-6 person soundproof acoustic meeting pods", image_url: "images/categories/cat_pods.jpg", display_order: 21, is_visible: true, is_published: true },
  { name: "Interface Carpets", slug: "carpets", description: "Acoustic modular carpet tiles in contemporary geometric patterns", image_url: "images/categories/cat_carpets.jpg", display_order: 22, is_visible: true, is_published: true },
  { name: "Outdoor Furniture", slug: "outdoor", description: "Synthetic wicker terrace seating, patio umbrellas, and garden breakout sets", image_url: "images/categories/cat_outdoor.jpg", display_order: 23, is_visible: true, is_published: true },
  { name: "Educational Solutions", slug: "educational", description: "Student classroom desks, library reading carrels, hostel bunk beds, and auditorium chairs", image_url: "images/categories/cat_education.png", display_order: 24, is_visible: true, is_published: true },
  { name: "Workspace Accessories", slug: "accessories", description: "Dual monitor gas arms, under-desk cable management, and pop-up power modules", image_url: "images/categories/cat_tables.png", display_order: 25, is_visible: true, is_published: true }
];

const products = [];

// 30 Mesh Chairs
const meshNames = [
  "Veloz", "Feather", "Eiffel", "Mustang", "Bravo", "Polar", "Glanza", "Yaris", "Quartz", "Ditto",
  "Velfire", "Optimus", "Zoom", "Comfy", "Rio", "Hilite", "Ecco", "Vento", "Aura", "Dynamic",
  "Butterfly", "Mystic", "Breeze", "Matrix 1", "Marvel 1 & 2", "Jazz", "Flash", "Bonai", "X Mesh", "Spenser"
];

meshNames.forEach((mName, i) => {
  const pNum = i + 4; // page_4 to page_33
  products.push({
    name: `${mName} Mesh Chair`,
    slug: `${mName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-mesh-chair`,
    category_slug: "archlabs-seating",
    subcategory: "Mesh Series",
    description: `${mName} ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.`,
    specifications: "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
    main_image: `images/archlabs/pages/page_${pNum}.png`,
    price: null,
    display_price: false,
    enquiry_only: true,
    is_visible: true,
    is_published: true,
    display_order: products.length + 1
  });
});

// 5 Leather Chairs
const leatherNames = ["Luxe", "Elara", "Regent", "Forma", "Nero"];
leatherNames.forEach((lName, i) => {
  const pNum = i + 36; // page_36 to page_40
  products.push({
    name: `${lName} Leather Chair`,
    slug: `${lName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-leather-chair`,
    category_slug: "archlabs-seating",
    subcategory: "Leather Series",
    description: `${lName} executive leather chair with top-grain leather upholstery, deep cushioning, and polished aluminium armrests.`,
    specifications: "Top-grain Genuine Leather, Knee-Tilt Lock Mechanism, Polished Diecast Aluminium Base.",
    main_image: `images/archlabs/pages/page_${pNum}.png`,
    price: null,
    display_price: false,
    enquiry_only: true,
    is_visible: true,
    is_published: true,
    display_order: products.length + 1
  });
});

// 7 Training Chairs
const trainingNames = [
  "Arc Standard", "Cove Cushioned", "Pivot Writing Table", "Pivot Full Writing Table",
  "Stack Storage Variants", "ArchTwin", "ArchTwin Flip-Up Table"
];
trainingNames.forEach((tName, i) => {
  const pNum = i + 42; // page_42 to page_48
  products.push({
    name: `${tName} Chair`,
    slug: `${tName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-chair`,
    category_slug: "archlabs-seating",
    subcategory: "Training Series",
    description: `${tName} training chair engineered for seminars, classrooms, and corporate learning centers.`,
    specifications: "Stackable steel frame, optional foldable writing tablet, high-density foam seat.",
    main_image: `images/archlabs/pages/page_${pNum}.png`,
    price: null,
    display_price: false,
    enquiry_only: true,
    is_visible: true,
    is_published: true,
    display_order: products.length + 1
  });
});

// 3 Metro Linea Public Seating
const metroNames = ["Metro Linea 2 Seater", "Metro Linea 3 Seater", "Metro Linea 5 Seater"];
metroNames.forEach((mName, i) => {
  const pNum = i + 50; // page_50 to page_52
  products.push({
    name: mName,
    slug: mName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    category_slug: "archlabs-seating",
    subcategory: "Metro Linea",
    description: `${mName} heavy-duty perforated steel beam seating for airports, waiting rooms, and public lobbies.`,
    specifications: "Perforated steel seats, chrome plated beam legs, anti-skid rubber feet.",
    main_image: `images/archlabs/pages/page_${pNum}.png`,
    price: null,
    display_price: false,
    enquiry_only: true,
    is_visible: true,
    is_published: true,
    display_order: products.length + 1
  });
});

// 7 Cafeteria Chairs
const cafeNames = [
  "AC01 Stack Chair", "AC02 Curve Chair", "AC03 Arc Chair", "AC04 Spindle Chair",
  "AC06 Timber Chair", "AC07 Lounge Chair", "AC08 Crest Chair"
];
cafeNames.forEach((cName, i) => {
  const pNum = i + 54; // page_54 to page_60
  products.push({
    name: cName,
    slug: cName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    category_slug: "archlabs-seating",
    subcategory: "Cafeteria Series",
    description: `${cName} modern cafeteria chair designed for corporate pantries, food courts, and dining halls.`,
    specifications: "Polypropylene moulded shell / bentwood timber frame, chrome steel legs.",
    main_image: `images/archlabs/pages/page_${pNum}.png`,
    price: null,
    display_price: false,
    enquiry_only: true,
    is_visible: true,
    is_published: true,
    display_order: products.length + 1
  });
});

// Workstations & Tables Models
const catalogueModels = [
  { name: "Model HA-01 Sit-Stand Executive Desk", cat: "workstations", sub: "Height Adjustable Series", img: "images/categories/cat_workstations.jpg", desc: "Motorized dual-motor sit-to-stand executive desk with digital height preset controller and wire raceway." },
  { name: "Model HA-02 Back-to-Back Bench System", cat: "workstations", sub: "Height Adjustable Series", img: "images/categories/cat_workstations.jpg", desc: "4-person electric height-adjustable back-to-back benching system with acoustic fabric divider screens." },
  { name: "Model HA-03 Corner L-Desk Managerial", cat: "workstations", sub: "Height Adjustable Series", img: "images/categories/cat_workstations.jpg", desc: "L-shaped motorized height-adjustable desk with integrated side return storage credenza." },
  { name: "Model DS-Linear 4-Person Cluster", cat: "workstations", sub: "Desking Series", img: "images/categories/cat_workstations.jpg", desc: "Linear open-plan 4-person workstation cluster with steel loop leg frame and desktop power boxes." },
  { name: "Model DS-Loop Leg 2-Person Bench", cat: "workstations", sub: "Desking Series", img: "images/categories/cat_workstations.jpg", desc: "2-person back-to-back desking bench with powder-coated triangular leg profile." },
  { name: "Model PS-60mm Tile Partition System", cat: "workstations", sub: "Panel Series", img: "images/categories/cat_workstations.jpg", desc: "60mm thick tile-based partition system with fabric tackable panels, whiteboards, and raceway wire channels." },
  
  { name: "Model CB-Executive Director Desk", cat: "tables", sub: "Cabin Tables", img: "images/categories/cat_tables.png", desc: "Premium teak veneer executive director desk featuring leatherette desk pad and integrated runner cabinet." },
  { name: "Model CB-Managerial Side Return Desk", cat: "tables", sub: "Cabin Tables", img: "images/categories/cat_tables.png", desc: "Managerial L-desk with modesty panel, pedestal drawers, and side runner unit." },
  { name: "Model MT-12 Seater Boardroom Table", cat: "tables", sub: "Meeting Tables", img: "images/categories/cat_tables.png", desc: "12-seater conference boardroom table with pop-up HDMI/LAN/Power connectivity modules." },
  { name: "Model ST-Mobile Pedestal (3 Drawer)", cat: "storage", sub: "Prelam Storage", img: "images/categories/cat_storage.png", desc: "3-drawer mobile under-desk pedestal with central lock, anti-tilt castor, and stationery tray." },
  { name: "Model PD-Solo Acoustic Telephone Booth", cat: "acoustic-pods", sub: "Acoustic Work Pods", img: "images/categories/cat_pods.jpg", desc: "Sound-insulated solo acoustic phone pod equipped with silent ventilation fan, LED lighting, and power outlets." },
  { name: "Model CP-Acoustic Nylon Modular Tile", cat: "carpets", sub: "Interface Carpets", img: "images/categories/cat_carpets.jpg", desc: "High-performance modular carpet tiles with sound-absorbing recycled cushion backing." },
  { name: "Model OD-Synthetic Wicker Terrace Lounge", cat: "outdoor", sub: "Outdoor Furniture", img: "images/categories/cat_outdoor.jpg", desc: "Weather-resistant synthetic wicker terrace lounge set with UV-protected outdoor cushions." },
  { name: "Model ED-Single Student Ergonomic Desk", cat: "educational", sub: "Educational Solutions", img: "images/categories/cat_education.png", desc: "Ergonomic classroom desk & chair combo with book bag hook and wire storage rack." },
  { name: "Model AC-Gas Spring Dual Monitor Arm", cat: "accessories", sub: "Workspace Accessories", img: "images/categories/cat_tables.png", desc: "Full-motion dual monitor gas spring arm with desk clamp and integrated cable management clips." }
];

catalogueModels.forEach(m => {
  products.push({
    name: m.name,
    slug: m.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    category_slug: m.cat,
    subcategory: m.sub,
    description: m.desc,
    specifications: "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
    main_image: m.img,
    price: null,
    display_price: false,
    enquiry_only: true,
    is_visible: true,
    is_published: true,
    display_order: products.length + 1
  });
});

// Soft Seating Sofas
const sofaModels = [
  { name: "Executive Lounge Armchairs", sub: "Lounge & Executive Sofas", img: "images/categories/cat_soft_seating.jpg", desc: "Single-seat ergonomic lounge armchairs in premium leather or acoustic fabric upholstery." },
  { name: "2 & 3-Seater Executive Sofas", sub: "Lounge & Executive Sofas", img: "images/collection/collection-1.jpg", desc: "Sleek multi-seater reception couches featuring high-resilience foam cushioning." },
  { name: "Collaborative Booth Seating", sub: "Collaborative Seating", img: "images/collection/collection-2.jpg", desc: "High-back sound dampening collaborative booths creating semi-private discussion nooks." },
  { name: "Geometrical Pouffes & Ottomans", sub: "Pouffes & Ottomans", img: "images/sections/s-lookbook-1.jpg", desc: "Flexible circular, hexagonal, and square soft pouffes for breakout areas." },
  { name: "Occasional Center Tables", sub: "Occasional Center Tables", img: "images/categories/cat_tables.png", desc: "Designer low-height coffee tables with veneered wood or marble tops." }
];

sofaModels.forEach(s => {
  products.push({
    name: s.name,
    slug: s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    category_slug: "soft-seating",
    subcategory: s.sub,
    description: s.desc,
    specifications: "High resilience foam, premium fabric / leatherette, hardwood frame.",
    main_image: s.img,
    price: null,
    display_price: false,
    enquiry_only: true,
    is_visible: true,
    is_published: true,
    display_order: products.length + 1
  });
});

console.log(`Generated ${categories.length} categories and ${products.length} products!`);

// Write to seed_data.json
const fullSeed = {
  categories,
  products,
  hero_sections: [
    {
      heading: "Transforming Workspaces.<br><span class=\"text-gradient-red\">Elevating Possibilities.</span>",
      description: "Premium office furniture, interior systems, and turnkey workspace solutions designed for modern corporate businesses, MNCs, educational institutions, and professional environments.",
      slide_1: "images/sections/hero-slide-1.png",
      slide_2: "images/sections/hero-slide-2.png",
      slide_3: "images/sections/hero-slide-3.png",
      background_image: "images/sections/hero-slide-1.png",
      is_custom_updated: false
    }
  ],
  about_sections: [
    {
      title: "Creating Workspaces That Work for You",
      main_description: "At Vishista Office Solutions Pvt Ltd, we specialize in delivering world-class workspace environments.",
      is_custom_updated: false
    }
  ],
  footer_content: [
    {
      company_description: "Vishista Office Solutions Pvt Ltd is a premier provider of corporate office furniture and turnkey workspace interior solutions.",
      address: "Plot No 45, Jubilee Hills, Road No 36, Hyderabad, Telangana 500033",
      phone: "+91 98490 12345",
      email: "info@vishista.com"
    }
  ],
  projects: [
    {
      name: "Corporate Tech Hub",
      slug: "corporate-tech-hub",
      client: "MNC Tech Firm, Hitec City",
      category: "Turnkey Workspace",
      location: "Hyderabad, Telangana",
      description: "500-seater modular workstation installation with acoustic panel partitions and executive director cabins.",
      image_url: "images/sections/hero-slide-1.png",
      completion_year: "2025",
      is_visible: true,
      is_published: true,
      display_order: 1
    },
    {
      name: "Financial Services Regional HQ",
      slug: "financial-services-hq",
      client: "Leading Financial Institution",
      category: "Executive Seating & Desks",
      location: "Gachibowli, Hyderabad",
      description: "Executive ArchLabs leather seating, high-density compactor storage, and 20-seater boardroom meeting tables.",
      image_url: "images/sections/hero-slide-2.png",
      completion_year: "2025",
      is_visible: true,
      is_published: true,
      display_order: 2
    },
    {
      name: "Global R&D Center",
      slug: "global-rd-center",
      client: "Pharma & Biotech Enterprise",
      category: "Acoustic Pods & Soft Seating",
      location: "Genome Valley, Hyderabad",
      description: "Soundproof acoustic meeting pods, collaborative lounge sofa booths, and interface carpet tile flooring.",
      image_url: "images/sections/hero-slide-3.png",
      completion_year: "2024",
      is_visible: true,
      is_published: true,
      display_order: 3
    }
  ]
};

fs.writeFileSync(path.join(__dirname, '../data/seed_data.json'), JSON.stringify(fullSeed, null, 2), 'utf8');

// Also construct JS string for js/supabase-config.js
let jsFileContent = fs.readFileSync(path.join(__dirname, '../js/supabase-config.js'), 'utf8');
const seedDataRegex = /const VISHISTA_SEED_DATA = \{[\s\S]*?\n\};/;
const newSeedCode = `const VISHISTA_SEED_DATA = ${JSON.stringify(fullSeed, null, 2)};`;

jsFileContent = jsFileContent.replace(seedDataRegex, newSeedCode);
fs.writeFileSync(path.join(__dirname, '../js/supabase-config.js'), jsFileContent, 'utf8');

console.log('Successfully updated seed_data.json and js/supabase-config.js!');
