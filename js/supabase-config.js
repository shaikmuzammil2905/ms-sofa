// Supabase & Cloudinary Configuration for Vishista Office Solutions CMS

const SUPABASE_URL = 'https://oseccrcffoyttjgpazrt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zZWNjcmNmZm95dHRqZ3BhenJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3NTM4OTEsImV4cCI6MjEwMzMyOTg5MX0.ESJ0iK2zcCPZZCZtfeYW7uObbEP7JxXUYJiSi9a4pzA';

const CLOUDINARY_CLOUD_NAME = 'iw4ntmv5';
const CLOUDINARY_UPLOAD_PRESET = 'ml_default';

// Embedded Seed Data Dataset for Fail-Safe CMS Resolution
const VISHISTA_SEED_DATA = {
  "categories": [
    {
      "name": "Modular Workstations",
      "slug": "workstations",
      "description": "Height adjustable sit-stand desks, linear open-plan desking, and acoustic panel partitions",
      "image_url": "images/categories/cat_workstations.jpg",
      "display_order": 1,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Height Adjustable Series",
      "slug": "height-adjustable-series",
      "description": "Motorized sit-to-stand desks engineered for active workplace ergonomics",
      "image_url": "images/categories/cat_workstations.jpg",
      "display_order": 2,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Open Plan Desking Series",
      "slug": "desking-series",
      "description": "Modular open-plan linear and back-to-back desking systems",
      "image_url": "images/categories/cat_workstations.jpg",
      "display_order": 3,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Panel Partition Series",
      "slug": "panel-series",
      "description": "Acoustic panel-based workstation partitions providing high acoustic privacy",
      "image_url": "images/categories/cat_workstations.jpg",
      "display_order": 4,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Tables & Desks",
      "slug": "tables",
      "description": "Executive director desks, boardroom meeting tables, cafe counters, and training desks",
      "image_url": "images/categories/cat_tables.png",
      "display_order": 5,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Executive Cabin Tables",
      "slug": "cabin-tables",
      "description": "Executive director and managerial desk setups with side return credenzas",
      "image_url": "images/categories/cat_tables.png",
      "display_order": 6,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Boardroom Meeting Tables",
      "slug": "meeting-tables",
      "description": "Large boardroom conference tables equipped with pop-up connectivity boxes",
      "image_url": "images/categories/cat_tables.png",
      "display_order": 7,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Cafe & Breakout Tables",
      "slug": "cafe-tables",
      "description": "Sleek cafe counters and collaborative huddle tables",
      "image_url": "images/categories/cat_tables.png",
      "display_order": 8,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Training Tables",
      "slug": "training-tables",
      "description": "Flip-top and mobile modular training room tables",
      "image_url": "images/categories/cat_tables.png",
      "display_order": 9,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Storage Systems",
      "slug": "storage",
      "description": "Prelam credenzas, steel filing cabinets, high-density mobile compactors, and employee lockers",
      "image_url": "images/categories/cat_storage.png",
      "display_order": 10,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Prelam Storage",
      "slug": "prelam-storage",
      "description": "Wooden pre-laminated credenzas and executive pedestals",
      "image_url": "images/categories/cat_storage.png",
      "display_order": 11,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Steel & Metal Storage",
      "slug": "metal-storage",
      "description": "Powder-coated steel filing cabinets, lateral drawers, and archive units",
      "image_url": "images/categories/cat_storage.png",
      "display_order": 12,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Compactor Storage",
      "slug": "compactor-storage",
      "description": "High-density mobile rail compactor storage systems",
      "image_url": "images/categories/cat_storage.png",
      "display_order": 13,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Employee Locker Systems",
      "slug": "locker-systems",
      "description": "Personal keyless employee locker cabinets",
      "image_url": "images/categories/cat_storage.png",
      "display_order": 14,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "ArchLabs Seating Catalogue",
      "slug": "archlabs-seating",
      "description": "Line-wise Mesh, Executive Leather, Training, Metro Linea, and Cafeteria Collections",
      "image_url": "images/categories/cat_seating.jpg",
      "display_order": 15,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Ergonomic Mesh Chairs",
      "slug": "mesh-chairs",
      "description": "Breathable mesh back ergonomic office chairs with synchro-tilt mechanism",
      "image_url": "images/categories/cat_seating.jpg",
      "display_order": 16,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Executive Leather Chairs",
      "slug": "leather-chairs",
      "description": "Top-grain genuine leather high-back executive chairs",
      "image_url": "images/categories/cat_seating.jpg",
      "display_order": 17,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Training & Cafe Chairs",
      "slug": "training-cafe-chairs",
      "description": "Stackable writing tablet chairs and cafeteria seating",
      "image_url": "images/categories/cat_seating.jpg",
      "display_order": 18,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Metro Linea Public Seating",
      "slug": "metro-linea",
      "description": "2, 3, and 5-seater heavy-duty public airport and lobby benches",
      "image_url": "images/categories/cat_seating.jpg",
      "display_order": 19,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Soft Seating & Lounges",
      "slug": "soft-seating",
      "description": "Executive leather couches, modular lounge sofas, collaborative booths, and pouffes",
      "image_url": "images/categories/cat_soft_seating.jpg",
      "display_order": 20,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Acoustic Work Pods",
      "slug": "acoustic-pods",
      "description": "Solo phone booths and 4-6 person soundproof acoustic meeting pods",
      "image_url": "images/categories/cat_pods.jpg",
      "display_order": 21,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Interface Carpets",
      "slug": "carpets",
      "description": "Acoustic modular carpet tiles in contemporary geometric patterns",
      "image_url": "images/categories/cat_carpets.jpg",
      "display_order": 22,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Outdoor Furniture",
      "slug": "outdoor",
      "description": "Synthetic wicker terrace seating, patio umbrellas, and garden breakout sets",
      "image_url": "images/categories/cat_outdoor.jpg",
      "display_order": 23,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Educational Solutions",
      "slug": "educational",
      "description": "Student classroom desks, library reading carrels, hostel bunk beds, and auditorium chairs",
      "image_url": "images/categories/cat_education.png",
      "display_order": 24,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Workspace Accessories",
      "slug": "accessories",
      "description": "Dual monitor gas arms, under-desk cable management, and pop-up power modules",
      "image_url": "images/categories/cat_tables.png",
      "display_order": 25,
      "is_visible": true,
      "is_published": true
    }
  ],
  "subcategories": [
    { "name": "Height Adjustable Series", "slug": "height-adjustable-series", "category_slug": "workstations", "display_order": 1 },
    { "name": "Open Plan Desking Series", "slug": "desking-series", "category_slug": "workstations", "display_order": 2 },
    { "name": "Panel Partition Series", "slug": "panel-series", "category_slug": "workstations", "display_order": 3 },
    { "name": "Executive Cabin Tables", "slug": "cabin-tables", "category_slug": "tables", "display_order": 1 },
    { "name": "Boardroom Meeting Tables", "slug": "meeting-tables", "category_slug": "tables", "display_order": 2 },
    { "name": "Cafe & Breakout Tables", "slug": "cafe-tables", "category_slug": "tables", "display_order": 3 },
    { "name": "Training Tables", "slug": "training-tables", "category_slug": "tables", "display_order": 4 },
    { "name": "Prelam Storage", "slug": "prelam-storage", "category_slug": "storage", "display_order": 1 },
    { "name": "Steel & Metal Storage", "slug": "metal-storage", "category_slug": "storage", "display_order": 2 },
    { "name": "Compactor Storage", "slug": "compactor-storage", "category_slug": "storage", "display_order": 3 },
    { "name": "Employee Locker Systems", "slug": "locker-systems", "category_slug": "storage", "display_order": 4 },
    { "name": "Mesh Series", "slug": "mesh-series", "category_slug": "archlabs-seating", "display_order": 1 },
    { "name": "Leather Series", "slug": "leather-series", "category_slug": "archlabs-seating", "display_order": 2 },
    { "name": "Training Series", "slug": "training-series", "category_slug": "archlabs-seating", "display_order": 3 },
    { "name": "Metro Linea Series", "slug": "metro-linea-series", "category_slug": "archlabs-seating", "display_order": 4 },
    { "name": "Executive Couches", "slug": "executive-couches", "category_slug": "soft-seating", "display_order": 1 },
    { "name": "Modular Lounges", "slug": "modular-lounges", "category_slug": "soft-seating", "display_order": 2 },
    { "name": "Collaborative Booths", "slug": "collaborative-booths", "category_slug": "soft-seating", "display_order": 3 },
    { "name": "Phone Booths", "slug": "phone-booths", "category_slug": "acoustic-pods", "display_order": 1 },
    { "name": "Meeting Pods", "slug": "meeting-pods", "category_slug": "acoustic-pods", "display_order": 2 }
  ],
  "products": [
    {
      "name": "Veloz Mesh Chair",
      "slug": "veloz-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Veloz ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_4.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 1
    },
    {
      "name": "Feather Mesh Chair",
      "slug": "feather-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Feather ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_5.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 2
    },
    {
      "name": "Eiffel Mesh Chair",
      "slug": "eiffel-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Eiffel ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_6.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 3
    },
    {
      "name": "Mustang Mesh Chair",
      "slug": "mustang-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Mustang ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_7.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 4
    },
    {
      "name": "Bravo Mesh Chair",
      "slug": "bravo-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Bravo ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_8.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 5
    },
    {
      "name": "Polar Mesh Chair",
      "slug": "polar-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Polar ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_9.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 6
    },
    {
      "name": "Glanza Mesh Chair",
      "slug": "glanza-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Glanza ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_10.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 7
    },
    {
      "name": "Yaris Mesh Chair",
      "slug": "yaris-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Yaris ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_11.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 8
    },
    {
      "name": "Quartz Mesh Chair",
      "slug": "quartz-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Quartz ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_12.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 9
    },
    {
      "name": "Ditto Mesh Chair",
      "slug": "ditto-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Ditto ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_13.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 10
    },
    {
      "name": "Velfire Mesh Chair",
      "slug": "velfire-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Velfire ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_14.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 11
    },
    {
      "name": "Optimus Mesh Chair",
      "slug": "optimus-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Optimus ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_15.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 12
    },
    {
      "name": "Zoom Mesh Chair",
      "slug": "zoom-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Zoom ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_16.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 13
    },
    {
      "name": "Comfy Mesh Chair",
      "slug": "comfy-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Comfy ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_17.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 14
    },
    {
      "name": "Rio Mesh Chair",
      "slug": "rio-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Rio ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_18.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 15
    },
    {
      "name": "Hilite Mesh Chair",
      "slug": "hilite-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Hilite ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_19.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 16
    },
    {
      "name": "Ecco Mesh Chair",
      "slug": "ecco-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Ecco ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_20.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 17
    },
    {
      "name": "Vento Mesh Chair",
      "slug": "vento-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Vento ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_21.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 18
    },
    {
      "name": "Aura Mesh Chair",
      "slug": "aura-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Aura ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_22.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 19
    },
    {
      "name": "Dynamic Mesh Chair",
      "slug": "dynamic-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Dynamic ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_23.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 20
    },
    {
      "name": "Butterfly Mesh Chair",
      "slug": "butterfly-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Butterfly ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_24.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 21
    },
    {
      "name": "Mystic Mesh Chair",
      "slug": "mystic-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Mystic ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_25.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 22
    },
    {
      "name": "Breeze Mesh Chair",
      "slug": "breeze-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Breeze ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_26.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 23
    },
    {
      "name": "Matrix 1 Mesh Chair",
      "slug": "matrix-1-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Matrix 1 ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_27.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 24
    },
    {
      "name": "Marvel 1 & 2 Mesh Chair",
      "slug": "marvel-1-2-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Marvel 1 & 2 ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_28.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 25
    },
    {
      "name": "Jazz Mesh Chair",
      "slug": "jazz-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Jazz ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_29.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 26
    },
    {
      "name": "Flash Mesh Chair",
      "slug": "flash-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Flash ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_30.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 27
    },
    {
      "name": "Bonai Mesh Chair",
      "slug": "bonai-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Bonai ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_31.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 28
    },
    {
      "name": "X Mesh Mesh Chair",
      "slug": "x-mesh-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "X Mesh ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_32.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 29
    },
    {
      "name": "Spenser Mesh Chair",
      "slug": "spenser-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Spenser ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_33.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 30
    },
    {
      "name": "Luxe Leather Chair",
      "slug": "luxe-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Luxe executive leather chair with top-grain leather upholstery, deep cushioning, and polished aluminium armrests.",
      "specifications": "Top-grain Genuine Leather, Knee-Tilt Lock Mechanism, Polished Diecast Aluminium Base.",
      "main_image": "images/archlabs/pages/page_36.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 31
    },
    {
      "name": "Elara Leather Chair",
      "slug": "elara-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Elara executive leather chair with top-grain leather upholstery, deep cushioning, and polished aluminium armrests.",
      "specifications": "Top-grain Genuine Leather, Knee-Tilt Lock Mechanism, Polished Diecast Aluminium Base.",
      "main_image": "images/archlabs/pages/page_37.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 32
    },
    {
      "name": "Regent Leather Chair",
      "slug": "regent-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Regent executive leather chair with top-grain leather upholstery, deep cushioning, and polished aluminium armrests.",
      "specifications": "Top-grain Genuine Leather, Knee-Tilt Lock Mechanism, Polished Diecast Aluminium Base.",
      "main_image": "images/archlabs/pages/page_38.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 33
    },
    {
      "name": "Forma Leather Chair",
      "slug": "forma-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Forma executive leather chair with top-grain leather upholstery, deep cushioning, and polished aluminium armrests.",
      "specifications": "Top-grain Genuine Leather, Knee-Tilt Lock Mechanism, Polished Diecast Aluminium Base.",
      "main_image": "images/archlabs/pages/page_39.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 34
    },
    {
      "name": "Nero Leather Chair",
      "slug": "nero-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Nero executive leather chair with top-grain leather upholstery, deep cushioning, and polished aluminium armrests.",
      "specifications": "Top-grain Genuine Leather, Knee-Tilt Lock Mechanism, Polished Diecast Aluminium Base.",
      "main_image": "images/archlabs/pages/page_40.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 35
    },
    {
      "name": "Arc Standard Chair",
      "slug": "arc-standard-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Training Series",
      "description": "Arc Standard training chair engineered for seminars, classrooms, and corporate learning centers.",
      "specifications": "Stackable steel frame, optional foldable writing tablet, high-density foam seat.",
      "main_image": "images/archlabs/pages/page_42.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 36
    },
    {
      "name": "Cove Cushioned Chair",
      "slug": "cove-cushioned-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Training Series",
      "description": "Cove Cushioned training chair engineered for seminars, classrooms, and corporate learning centers.",
      "specifications": "Stackable steel frame, optional foldable writing tablet, high-density foam seat.",
      "main_image": "images/archlabs/pages/page_43.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 37
    },
    {
      "name": "Pivot Writing Table Chair",
      "slug": "pivot-writing-table-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Training Series",
      "description": "Pivot Writing Table training chair engineered for seminars, classrooms, and corporate learning centers.",
      "specifications": "Stackable steel frame, optional foldable writing tablet, high-density foam seat.",
      "main_image": "images/archlabs/pages/page_44.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 38
    },
    {
      "name": "Pivot Full Writing Table Chair",
      "slug": "pivot-full-writing-table-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Training Series",
      "description": "Pivot Full Writing Table training chair engineered for seminars, classrooms, and corporate learning centers.",
      "specifications": "Stackable steel frame, optional foldable writing tablet, high-density foam seat.",
      "main_image": "images/archlabs/pages/page_45.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 39
    },
    {
      "name": "Stack Storage Variants Chair",
      "slug": "stack-storage-variants-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Training Series",
      "description": "Stack Storage Variants training chair engineered for seminars, classrooms, and corporate learning centers.",
      "specifications": "Stackable steel frame, optional foldable writing tablet, high-density foam seat.",
      "main_image": "images/archlabs/pages/page_46.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 40
    },
    {
      "name": "ArchTwin Chair",
      "slug": "archtwin-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Training Series",
      "description": "ArchTwin training chair engineered for seminars, classrooms, and corporate learning centers.",
      "specifications": "Stackable steel frame, optional foldable writing tablet, high-density foam seat.",
      "main_image": "images/archlabs/pages/page_47.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 41
    },
    {
      "name": "ArchTwin Flip-Up Table Chair",
      "slug": "archtwin-flip-up-table-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Training Series",
      "description": "ArchTwin Flip-Up Table training chair engineered for seminars, classrooms, and corporate learning centers.",
      "specifications": "Stackable steel frame, optional foldable writing tablet, high-density foam seat.",
      "main_image": "images/archlabs/pages/page_48.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 42
    },
    {
      "name": "Metro Linea 2 Seater",
      "slug": "metro-linea-2-seater",
      "category_slug": "archlabs-seating",
      "subcategory": "Metro Linea",
      "description": "Metro Linea 2 Seater heavy-duty perforated steel beam seating for airports, waiting rooms, and public lobbies.",
      "specifications": "Perforated steel seats, chrome plated beam legs, anti-skid rubber feet.",
      "main_image": "images/archlabs/pages/page_50.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 43
    },
    {
      "name": "Metro Linea 3 Seater",
      "slug": "metro-linea-3-seater",
      "category_slug": "archlabs-seating",
      "subcategory": "Metro Linea",
      "description": "Metro Linea 3 Seater heavy-duty perforated steel beam seating for airports, waiting rooms, and public lobbies.",
      "specifications": "Perforated steel seats, chrome plated beam legs, anti-skid rubber feet.",
      "main_image": "images/archlabs/pages/page_51.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 44
    },
    {
      "name": "Metro Linea 5 Seater",
      "slug": "metro-linea-5-seater",
      "category_slug": "archlabs-seating",
      "subcategory": "Metro Linea",
      "description": "Metro Linea 5 Seater heavy-duty perforated steel beam seating for airports, waiting rooms, and public lobbies.",
      "specifications": "Perforated steel seats, chrome plated beam legs, anti-skid rubber feet.",
      "main_image": "images/archlabs/pages/page_52.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 45
    },
    {
      "name": "AC01 Stack Chair",
      "slug": "ac01-stack-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Cafeteria Series",
      "description": "AC01 Stack Chair modern cafeteria chair designed for corporate pantries, food courts, and dining halls.",
      "specifications": "Polypropylene moulded shell / bentwood timber frame, chrome steel legs.",
      "main_image": "images/archlabs/pages/page_54.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 46
    },
    {
      "name": "AC02 Curve Chair",
      "slug": "ac02-curve-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Cafeteria Series",
      "description": "AC02 Curve Chair modern cafeteria chair designed for corporate pantries, food courts, and dining halls.",
      "specifications": "Polypropylene moulded shell / bentwood timber frame, chrome steel legs.",
      "main_image": "images/archlabs/pages/page_55.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 47
    },
    {
      "name": "AC03 Arc Chair",
      "slug": "ac03-arc-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Cafeteria Series",
      "description": "AC03 Arc Chair modern cafeteria chair designed for corporate pantries, food courts, and dining halls.",
      "specifications": "Polypropylene moulded shell / bentwood timber frame, chrome steel legs.",
      "main_image": "images/archlabs/pages/page_56.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 48
    },
    {
      "name": "AC04 Spindle Chair",
      "slug": "ac04-spindle-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Cafeteria Series",
      "description": "AC04 Spindle Chair modern cafeteria chair designed for corporate pantries, food courts, and dining halls.",
      "specifications": "Polypropylene moulded shell / bentwood timber frame, chrome steel legs.",
      "main_image": "images/archlabs/pages/page_57.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 49
    },
    {
      "name": "AC06 Timber Chair",
      "slug": "ac06-timber-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Cafeteria Series",
      "description": "AC06 Timber Chair modern cafeteria chair designed for corporate pantries, food courts, and dining halls.",
      "specifications": "Polypropylene moulded shell / bentwood timber frame, chrome steel legs.",
      "main_image": "images/archlabs/pages/page_58.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 50
    },
    {
      "name": "AC07 Lounge Chair",
      "slug": "ac07-lounge-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Cafeteria Series",
      "description": "AC07 Lounge Chair modern cafeteria chair designed for corporate pantries, food courts, and dining halls.",
      "specifications": "Polypropylene moulded shell / bentwood timber frame, chrome steel legs.",
      "main_image": "images/archlabs/pages/page_59.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 51
    },
    {
      "name": "AC08 Crest Chair",
      "slug": "ac08-crest-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Cafeteria Series",
      "description": "AC08 Crest Chair modern cafeteria chair designed for corporate pantries, food courts, and dining halls.",
      "specifications": "Polypropylene moulded shell / bentwood timber frame, chrome steel legs.",
      "main_image": "images/archlabs/pages/page_60.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 52
    },
    {
      "name": "Model HA-01 Sit-Stand Executive Desk",
      "slug": "model-ha-01-sit-stand-executive-desk",
      "category_slug": "workstations",
      "subcategory": "Height Adjustable Series",
      "description": "Motorized dual-motor sit-to-stand executive desk with digital height preset controller and wire raceway.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 53
    },
    {
      "name": "Model HA-02 Back-to-Back Bench System",
      "slug": "model-ha-02-back-to-back-bench-system",
      "category_slug": "workstations",
      "subcategory": "Height Adjustable Series",
      "description": "4-person electric height-adjustable back-to-back benching system with acoustic fabric divider screens.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 54
    },
    {
      "name": "Model HA-03 Corner L-Desk Managerial",
      "slug": "model-ha-03-corner-l-desk-managerial",
      "category_slug": "workstations",
      "subcategory": "Height Adjustable Series",
      "description": "L-shaped motorized height-adjustable desk with integrated side return storage credenza.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 55
    },
    {
      "name": "Model DS-Linear 4-Person Cluster",
      "slug": "model-ds-linear-4-person-cluster",
      "category_slug": "workstations",
      "subcategory": "Desking Series",
      "description": "Linear open-plan 4-person workstation cluster with steel loop leg frame and desktop power boxes.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 56
    },
    {
      "name": "Model DS-Loop Leg 2-Person Bench",
      "slug": "model-ds-loop-leg-2-person-bench",
      "category_slug": "workstations",
      "subcategory": "Desking Series",
      "description": "2-person back-to-back desking bench with powder-coated triangular leg profile.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 57
    },
    {
      "name": "Model PS-60mm Tile Partition System",
      "slug": "model-ps-60mm-tile-partition-system",
      "category_slug": "workstations",
      "subcategory": "Panel Series",
      "description": "60mm thick tile-based partition system with fabric tackable panels, whiteboards, and raceway wire channels.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 58
    },
    {
      "name": "Model CB-Executive Director Desk",
      "slug": "model-cb-executive-director-desk",
      "category_slug": "tables",
      "subcategory": "Cabin Tables",
      "description": "Premium teak veneer executive director desk featuring leatherette desk pad and integrated runner cabinet.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_tables.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 59
    },
    {
      "name": "Model CB-Managerial Side Return Desk",
      "slug": "model-cb-managerial-side-return-desk",
      "category_slug": "tables",
      "subcategory": "Cabin Tables",
      "description": "Managerial L-desk with modesty panel, pedestal drawers, and side runner unit.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_tables.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 60
    },
    {
      "name": "Model MT-12 Seater Boardroom Table",
      "slug": "model-mt-12-seater-boardroom-table",
      "category_slug": "tables",
      "subcategory": "Meeting Tables",
      "description": "12-seater conference boardroom table with pop-up HDMI/LAN/Power connectivity modules.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_tables.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 61
    },
    {
      "name": "Model ST-Mobile Pedestal (3 Drawer)",
      "slug": "model-st-mobile-pedestal-3-drawer-",
      "category_slug": "storage",
      "subcategory": "Prelam Storage",
      "description": "3-drawer mobile under-desk pedestal with central lock, anti-tilt castor, and stationery tray.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_storage.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 62
    },
    {
      "name": "Model PD-Solo Acoustic Telephone Booth",
      "slug": "model-pd-solo-acoustic-telephone-booth",
      "category_slug": "acoustic-pods",
      "subcategory": "Acoustic Work Pods",
      "description": "Sound-insulated solo acoustic phone pod equipped with silent ventilation fan, LED lighting, and power outlets.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_pods.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 63
    },
    {
      "name": "Model CP-Acoustic Nylon Modular Tile",
      "slug": "model-cp-acoustic-nylon-modular-tile",
      "category_slug": "carpets",
      "subcategory": "Interface Carpets",
      "description": "High-performance modular carpet tiles with sound-absorbing recycled cushion backing.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_carpets.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 64
    },
    {
      "name": "Model OD-Synthetic Wicker Terrace Lounge",
      "slug": "model-od-synthetic-wicker-terrace-lounge",
      "category_slug": "outdoor",
      "subcategory": "Outdoor Furniture",
      "description": "Weather-resistant synthetic wicker terrace lounge set with UV-protected outdoor cushions.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_outdoor.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 65
    },
    {
      "name": "Model ED-Single Student Ergonomic Desk",
      "slug": "model-ed-single-student-ergonomic-desk",
      "category_slug": "educational",
      "subcategory": "Educational Solutions",
      "description": "Ergonomic classroom desk & chair combo with book bag hook and wire storage rack.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_education.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 66
    },
    {
      "name": "Model AC-Gas Spring Dual Monitor Arm",
      "slug": "model-ac-gas-spring-dual-monitor-arm",
      "category_slug": "accessories",
      "subcategory": "Workspace Accessories",
      "description": "Full-motion dual monitor gas spring arm with desk clamp and integrated cable management clips.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_tables.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 67
    },
    {
      "name": "Executive Lounge Armchairs",
      "slug": "executive-lounge-armchairs",
      "category_slug": "soft-seating",
      "subcategory": "Lounge & Executive Sofas",
      "description": "Single-seat ergonomic lounge armchairs in premium leather or acoustic fabric upholstery.",
      "specifications": "High resilience foam, premium fabric / leatherette, hardwood frame.",
      "main_image": "images/categories/cat_soft_seating.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 68
    },
    {
      "name": "2 & 3-Seater Executive Sofas",
      "slug": "2-3-seater-executive-sofas",
      "category_slug": "soft-seating",
      "subcategory": "Lounge & Executive Sofas",
      "description": "Sleek multi-seater reception couches featuring high-resilience foam cushioning.",
      "specifications": "High resilience foam, premium fabric / leatherette, hardwood frame.",
      "main_image": "images/collection/collection-1.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 69
    },
    {
      "name": "Collaborative Booth Seating",
      "slug": "collaborative-booth-seating",
      "category_slug": "soft-seating",
      "subcategory": "Collaborative Seating",
      "description": "High-back sound dampening collaborative booths creating semi-private discussion nooks.",
      "specifications": "High resilience foam, premium fabric / leatherette, hardwood frame.",
      "main_image": "images/collection/collection-2.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 70
    },
    {
      "name": "Geometrical Pouffes & Ottomans",
      "slug": "geometrical-pouffes-ottomans",
      "category_slug": "soft-seating",
      "subcategory": "Pouffes & Ottomans",
      "description": "Flexible circular, hexagonal, and square soft pouffes for breakout areas.",
      "specifications": "High resilience foam, premium fabric / leatherette, hardwood frame.",
      "main_image": "images/sections/s-lookbook-1.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 71
    },
    {
      "name": "Occasional Center Tables",
      "slug": "occasional-center-tables",
      "category_slug": "soft-seating",
      "subcategory": "Occasional Center Tables",
      "description": "Designer low-height coffee tables with veneered wood or marble tops.",
      "specifications": "High resilience foam, premium fabric / leatherette, hardwood frame.",
      "main_image": "images/categories/cat_tables.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 72
    }
  ],
  "hero_sections": [
    {
      "heading": "Transforming Workspaces.<br><span class=\"text-gradient-red\">Elevating Possibilities.</span>",
      "description": "Premium office furniture, interior systems, and turnkey workspace solutions designed for modern corporate businesses, MNCs, educational institutions, and professional environments.",
      "slide_1": "images/sections/hero-slide-1.png",
      "slide_2": "images/sections/hero-slide-2.png",
      "slide_3": "images/sections/hero-slide-3.png",
      "background_image": "images/sections/hero-slide-1.png",
      "is_custom_updated": false
    }
  ],
  "about_sections": [
    {
      "title": "Creating Workspaces That Work for You",
      "main_description": "At Vishista Office Solutions Pvt Ltd, we specialize in delivering world-class workspace environments.",
      "is_custom_updated": false
    }
  ],
  "footer_content": [
    {
      "company_description": "Vishista Office Solutions Pvt Ltd is a premier provider of corporate office furniture and turnkey workspace interior solutions.",
      "address": "Plot No 45, Jubilee Hills, Road No 36, Hyderabad, Telangana 500033",
      "phone": "+91 98490 12345",
      "email": "info@vishista.com"
    }
  ],
  "projects": [
    {
      "name": "Corporate Tech Hub",
      "slug": "corporate-tech-hub",
      "client": "MNC Tech Firm, Hitec City",
      "category": "Turnkey Workspace",
      "location": "Hyderabad, Telangana",
      "description": "500-seater modular workstation installation with acoustic panel partitions and executive director cabins.",
      "image_url": "images/sections/hero-slide-1.png",
      "completion_year": "2025",
      "is_visible": true,
      "is_published": true,
      "display_order": 1
    },
    {
      "name": "Financial Services Regional HQ",
      "slug": "financial-services-hq",
      "client": "Leading Financial Institution",
      "category": "Executive Seating & Desks",
      "location": "Gachibowli, Hyderabad",
      "description": "Executive ArchLabs leather seating, high-density compactor storage, and 20-seater boardroom meeting tables.",
      "image_url": "images/sections/hero-slide-2.png",
      "completion_year": "2025",
      "is_visible": true,
      "is_published": true,
      "display_order": 2
    },
    {
      "name": "Global R&D Center",
      "slug": "global-rd-center",
      "client": "Pharma & Biotech Enterprise",
      "category": "Acoustic Pods & Soft Seating",
      "location": "Genome Valley, Hyderabad",
      "description": "Soundproof acoustic meeting pods, collaborative lounge sofa booths, and interface carpet tile flooring.",
      "image_url": "images/sections/hero-slide-3.png",
      "completion_year": "2024",
      "is_visible": true,
      "is_published": true,
      "display_order": 3
    }
  ]
};

// Initialize Supabase Client if SDK is loaded
let supabaseClient = null;
if (typeof supabase !== 'undefined' && supabase.createClient) {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Cloudinary Direct Upload Helper with Fail-Safe Data URL Fallback
async function uploadToCloudinary(file, onProgress) {
    if (!file) throw new Error('No file provided for upload.');

    const readAsBase64 = (f) => new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = () => resolve(URL.createObjectURL(f));
        reader.readAsDataURL(f);
    });

    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        return await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`);

            if (onProgress && xhr.upload) {
                xhr.upload.onprogress = (e) => {
                    if (e.lengthComputable) {
                        const percent = Math.round((e.loaded / e.total) * 100);
                        onProgress(percent);
                    }
                };
            }

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const response = JSON.parse(xhr.responseText);
                    resolve({
                        url: response.secure_url,
                        public_id: response.public_id
                    });
                } else {
                    reject(new Error(`Status ${xhr.status}`));
                }
            };

            xhr.onerror = () => reject(new Error('Network error during image upload.'));
            xhr.send(formData);
        });
    } catch (err) {
        console.warn('Cloudinary notice, applying high-speed data image fallback:', err);
        if (onProgress) onProgress(100);
        const dataUrl = await readAsBase64(file);
        return { url: dataUrl };
    }
}

function generateUUID() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Global Store State Manager (Supabase Database Priority + Fail-Safe Seed & Cache Merger)
const CMSDataStore = {
    getKey: (table) => `vishista_cms_${table}`,

    getDeletedSet: function(table) {
        try {
            const raw = localStorage.getItem(`vishista_cms_deleted_${table}`);
            return new Set(raw ? JSON.parse(raw) : []);
        } catch (e) {
            return new Set();
        }
    },

    markDeleted: function(table, identifier) {
        if (!identifier) return;
        try {
            const raw = localStorage.getItem(`vishista_cms_deleted_${table}`);
            const list = raw ? JSON.parse(raw) : [];
            if (!list.includes(identifier)) {
                list.push(identifier);
                localStorage.setItem(`vishista_cms_deleted_${table}`, JSON.stringify(list));
            }
        } catch (e) {}
    },

    get: async function(table) {
        const seedItems = (typeof VISHISTA_SEED_DATA !== 'undefined' && VISHISTA_SEED_DATA && VISHISTA_SEED_DATA[table]) ? VISHISTA_SEED_DATA[table] : [];
        const deletedSet = this.getDeletedSet(table);
        
        let storedItems = [];

        // 1. Try LocalStorage Cache
        const cached = localStorage.getItem(this.getKey(table));
        if (cached) {
            try {
                const parsed = JSON.parse(cached);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    storedItems = parsed;
                }
            } catch (e) {}
        }

        // 2. Fetch directly from Supabase DB if available
        if (supabaseClient) {
            try {
                const { data, error } = await supabaseClient.from(table).select('*');
                if (!error && Array.isArray(data) && data.length > 0) {
                    storedItems = data;
                }
            } catch (e) {
                console.warn(`[CMSDataStore] Supabase fetch notice for '${table}':`, e.message);
            }
        }

        // 3. Build merged master dataset starting with seed items
        const itemMap = new Map();

        seedItems.forEach(s => {
            const key = s.slug || (s.name ? s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : '') || s.id;
            itemMap.set(key, { ...s, id: s.id || generateUUID() });
        });

        storedItems.forEach(item => {
            const key = item.slug || (item.name ? item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : '') || item.id;
            if (itemMap.has(key)) {
                itemMap.set(key, { ...itemMap.get(key), ...item });
            } else {
                itemMap.set(key, item);
            }
        });

        // 4. Exclude explicitly deleted items
        const masterList = Array.from(itemMap.values()).filter(item => {
            const idMatch = item.id && deletedSet.has(item.id);
            const slugMatch = item.slug && deletedSet.has(item.slug);
            return !idMatch && !slugMatch;
        });

        try {
            localStorage.setItem(this.getKey(table), JSON.stringify(masterList));
        } catch(e) {}

        return masterList;
    },

    save: async function(table, records) {
        const deletedSet = this.getDeletedSet(table);
        const sanitizedRecords = (records || []).map(r => {
            const item = { ...r };
            if (!item.id || item.id === '' || item.id === 'null') {
                item.id = generateUUID();
            }
            return item;
        }).filter(item => !deletedSet.has(item.id) && !deletedSet.has(item.slug));

        localStorage.setItem(this.getKey(table), JSON.stringify(sanitizedRecords));

        if (!supabaseClient) {
            return sanitizedRecords;
        }

        try {
            let { data, error } = await supabaseClient.from(table).upsert(sanitizedRecords).select();

            if (error && error.message && error.message.includes('is_published')) {
                const cleanedRecords = sanitizedRecords.map(r => {
                    const copy = { ...r };
                    if (copy.is_published !== undefined) {
                        if (copy.is_visible === undefined) copy.is_visible = copy.is_published;
                        delete copy.is_published;
                    }
                    return copy;
                });
                const res = await supabaseClient.from(table).upsert(cleanedRecords).select();
                error = res.error;
                data = res.data;
            }

            if (error) {
                console.error(`[CMSDataStore] Supabase SAVE error for '${table}':`, error);
                return sanitizedRecords;
            }

            return await this.get(table);
        } catch (e) {
            console.error(`[CMSDataStore] Save failed for table '${table}':`, e.message);
            return sanitizedRecords;
        }
    },

    insertRecord: async function(table, record) {
        if (!supabaseClient) {
            const current = await this.get(table);
            current.push(record);
            return this.save(table, current);
        }

        let payload = [record];
        let { data, error } = await supabaseClient.from(table).insert(payload).select();

        if (error && error.message && error.message.includes('is_published')) {
            const cleanRec = { ...record };
            if (cleanRec.is_published !== undefined) {
                if (cleanRec.is_visible === undefined) cleanRec.is_visible = cleanRec.is_published;
                delete cleanRec.is_published;
            }
            const res = await supabaseClient.from(table).insert([cleanRec]).select();
            error = res.error;
            data = res.data;
        }

        if (error) {
            console.error(`[CMSDataStore] Supabase INSERT error for '${table}':`, error);
            const current = await this.get(table);
            current.push(record);
            return this.save(table, current);
        }

        return this.get(table);
    },

    updateRecord: async function(table, id, record) {
        const current = (await this.get(table)) || [];
        const idx = current.findIndex(r => r.id === id || r.slug === id);
        if (idx !== -1) {
            current[idx] = { ...current[idx], ...record };
            localStorage.setItem(this.getKey(table), JSON.stringify(current));
        }

        if (!supabaseClient) {
            return current;
        }

        try {
            let { data, error } = await supabaseClient.from(table).update(record).eq('id', id).select();

            if (error && error.message && error.message.includes('is_published')) {
                const cleanedRecord = { ...record };
                if (cleanedRecord.is_published !== undefined) {
                    if (cleanedRecord.is_visible === undefined) cleanedRecord.is_visible = cleanedRecord.is_published;
                    delete cleanedRecord.is_published;
                }
                const res = await supabaseClient.from(table).update(cleanedRecord).eq('id', id).select();
                error = res.error;
            }

            if ((error || !data || data.length === 0) && id) {
                let resBySlug = await supabaseClient.from(table).update(record).eq('slug', id).select();
                if (resBySlug.error && resBySlug.error.message.includes('is_published')) {
                    const cleanedRecord = { ...record };
                    if (cleanedRecord.is_published !== undefined) {
                        if (cleanedRecord.is_visible === undefined) cleanedRecord.is_visible = cleanedRecord.is_published;
                        delete cleanedRecord.is_published;
                    }
                    resBySlug = await supabaseClient.from(table).update(cleanedRecord).eq('slug', id).select();
                }
            }

            return await this.get(table);
        } catch (e) {
            console.error(`[CMSDataStore] Update failed for '${table}':`, e.message);
            return current;
        }
    },

    deleteRecord: async function(table, identifier) {
        if (!identifier) return this.get(table);

        this.markDeleted(table, identifier);

        const current = (await this.get(table)) || [];
        const updated = current.filter(r => r.id !== identifier && r.slug !== identifier);
        localStorage.setItem(this.getKey(table), JSON.stringify(updated));

        if (supabaseClient) {
            try {
                if (typeof identifier === 'string' && identifier.includes('-') && identifier.length !== 36) {
                    await supabaseClient.from(table).delete().eq('slug', identifier);
                } else {
                    await supabaseClient.from(table).delete().eq('id', identifier);
                }
            } catch (err) {
                console.warn(`[CMSDataStore] Supabase DELETE notice for '${table}':`, err.message);
            }
        }

        return updated;
    }
};

if (typeof window !== 'undefined') {
    window.SUPABASE_URL = SUPABASE_URL;
    window.SUPABASE_ANON_KEY = SUPABASE_ANON_KEY;
    window.CLOUDINARY_CLOUD_NAME = CLOUDINARY_CLOUD_NAME;
    window.CLOUDINARY_UPLOAD_PRESET = CLOUDINARY_UPLOAD_PRESET;
    window.VISHISTA_SEED_DATA = VISHISTA_SEED_DATA;
    window.supabaseClient = supabaseClient;
    window.uploadToCloudinary = uploadToCloudinary;
    window.CMSDataStore = CMSDataStore;
}
