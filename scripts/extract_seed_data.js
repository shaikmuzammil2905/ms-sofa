const fs = require('fs');
const path = require('path');

const seedData = {
    categories: [
        { name: "ArchLabs Seating Catalogue", slug: "archlabs-seating", description: "Line-wise Mesh, Executive Leather, Training, Metro Linea, and Cafeteria Collections", image_url: "images/archlabs/pages/page_4.png", display_order: 1, is_visible: true },
        { name: "Modular Workstations", slug: "workstations", description: "Height adjustable sit-stand desks, linear open-plan desking, and acoustic panel partitions", image_url: "images/sections/s-lookbook-1.jpg", display_order: 2, is_visible: true },
        { name: "Tables & Desks", slug: "tables", description: "Executive director desks, boardroom meeting tables, cafe counters, and training desks", image_url: "images/header/prd-nav-1.jpg", display_order: 3, is_visible: true },
        { name: "Storage Systems", slug: "storage", description: "Prelam credenzas, steel filing cabinets, high-density mobile compactors, and employee lockers", image_url: "images/sections/s-lookbook-2.jpg", display_order: 4, is_visible: true },
        { name: "Soft Seating & Lounges", slug: "soft-seating", description: "Executive leather couches, modular lounge sofas, collaborative booths, and pouffes", image_url: "images/collection/collection-1.jpg", display_order: 5, is_visible: true },
        { name: "Acoustic Work Pods", slug: "acoustic-pods", description: "Solo phone booths and 4-6 person soundproof acoustic meeting pods", image_url: "images/sections/s-lookbook-1.jpg", display_order: 6, is_visible: true },
        { name: "Interface Carpets", slug: "carpets", description: "Acoustic modular carpet tiles in contemporary geometric patterns", image_url: "images/sections/lookbook-item-1.jpg", display_order: 7, is_visible: true },
        { name: "Outdoor Furniture", slug: "outdoor", description: "Synthetic wicker terrace seating, patio umbrellas, and garden breakout sets", image_url: "images/sections/lookbook-item-2.jpg", display_order: 8, is_visible: true },
        { name: "Educational Solutions", slug: "educational", description: "Student classroom desks, library reading carrels, hostel bunk beds, and auditorium chairs", image_url: "images/header/prd-nav-1.jpg", display_order: 9, is_visible: true },
        { name: "Workspace Accessories", slug: "accessories", description: "Dual monitor gas arms, under-desk cable management, and pop-up power modules", image_url: "images/header/prd-nav-1.jpg", display_order: 10, is_visible: true }
    ],

    products: [
        // ArchLabs Mesh Series
        { name: "Veloz Mesh Chair", slug: "veloz-mesh-chair", category_slug: "archlabs-seating", subcategory: "Mesh Series", description: "Synchro-tilt with multi-position lock, 3D armrest with gel PU pad, Aluminium diecast base, Adjustable headrest.", main_image: "images/archlabs/pages/page_4.png", price: "Enquire for Price", is_featured: true, is_visible: true, display_order: 1 },
        { name: "Feather Mesh Chair", slug: "feather-mesh-chair", category_slug: "archlabs-seating", subcategory: "Mesh Series", description: "Seamless reclining mechanism, Adjustable armrests, High-resilience cushioning, Adjustable headrest, Smooth castors.", main_image: "images/archlabs/pages/page_5.png", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 2 },
        { name: "Eiffel Mesh Chair", slug: "eiffel-mesh-chair", category_slug: "archlabs-seating", subcategory: "Mesh Series", description: "Contoured backrest, Integrated lumbar support, High-density foam seat, Smooth-reclining mechanism.", main_image: "images/archlabs/pages/page_6.png", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 3 },
        { name: "Mustang Mesh Chair", slug: "mustang-mesh-chair", category_slug: "archlabs-seating", subcategory: "Mesh Series", description: "Generously-padded seat, Adjustable backrest, Smooth recline, Reinforced heavy-duty base.", main_image: "images/archlabs/pages/page_7.png", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 4 },
        { name: "Bravo Mesh Chair", slug: "bravo-mesh-chair", category_slug: "archlabs-seating", subcategory: "Mesh Series", description: "Plush cushioning, Smooth-reclining mechanism, Adjustable armrests, Heavy-duty castors, Robust Frame.", main_image: "images/archlabs/pages/page_8.png", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 5 },
        { name: "Polar Mesh Chair", slug: "polar-mesh-chair", category_slug: "archlabs-seating", subcategory: "Mesh Series", description: "High density moulded foam, Reinforced base, Adjustable armrests, Integrated lumbar support.", main_image: "images/archlabs/pages/page_9.png", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 6 },
        { name: "Glanza Mesh Chair", slug: "glanza-mesh-chair", category_slug: "archlabs-seating", subcategory: "Mesh Series", description: "Sturdy Metal base, High density moulded foam, Contoured backrest, Smooth-reclining mechanism.", main_image: "images/archlabs/pages/page_10.png", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 7 },
        { name: "Yaris Mesh Chair", slug: "yaris-mesh-chair", category_slug: "archlabs-seating", subcategory: "Mesh Series", description: "Supportive mesh back, Adjustable armrests, High density foam, Smooth-tilt mechanism.", main_image: "images/archlabs/pages/page_11.png", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 8 },
        { name: "Quartz Mesh Chair", slug: "quartz-mesh-chair", category_slug: "archlabs-seating", subcategory: "Mesh Series", description: "Robust Metal Frame, Multi-Position Locking, Synchronized reclining, Customizable seating position.", main_image: "images/archlabs/pages/page_12.png", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 9 },
        { name: "Ditto Mesh Chair", slug: "ditto-mesh-chair", category_slug: "archlabs-seating", subcategory: "Mesh Series", description: "Gas lift height adjustment, Robust Metal Frame, Premium Cushioning, Ergonomic backrest.", main_image: "images/archlabs/pages/page_13.png", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 10 },
        { name: "Velfire Mesh Chair", slug: "velfire-mesh-chair", category_slug: "archlabs-seating", subcategory: "Mesh Series", description: "High back & Medium back configurations, Breathable mesh back, Robust Metal Frame.", main_image: "images/archlabs/pages/page_14.png", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 11 },
        { name: "Optimus Mesh Chair", slug: "optimus-mesh-chair", category_slug: "archlabs-seating", subcategory: "Mesh Series", description: "High back & Medium back configurations, Premium cushioning, Smooth reclining mechanism.", main_image: "images/archlabs/pages/page_15.png", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 12 },

        // ArchLabs Leather Series
        { name: "Luxe Leather Chair", slug: "luxe-leather-chair", category_slug: "archlabs-seating", subcategory: "Leather Series", description: "Luxurious diamond stitch quilted upholstery, 3D adjustable armrests, Class 4 gas lift, Seat slide adjustment.", main_image: "images/archlabs/pages/page_36.png", price: "Enquire for Price", is_featured: true, is_visible: true, display_order: 13 },
        { name: "Elara Leather Chair", slug: "elara-leather-chair", category_slug: "archlabs-seating", subcategory: "Leather Series", description: "Contoured high back, Deep multi-density cushioning, Synchronized tilt with seat slide, 3D armrests.", main_image: "images/archlabs/pages/page_37.png", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 14 },
        { name: "Regent Leather Chair", slug: "regent-leather-chair", category_slug: "archlabs-seating", subcategory: "Leather Series", description: "Tall commanding high back, Fixed chrome armrests, Strong metal chrome frame, Premium leatherette.", main_image: "images/archlabs/pages/page_38.png", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 15 },

        // Workstations
        { name: "Height Adjustable Sit-Stand Desk", slug: "height-adjustable-desk", category_slug: "workstations", subcategory: "Modular Workstations", description: "Motorized sit-to-stand desks engineered for active workplace wellness, smooth height transitions, and integrated wire management.", main_image: "images/sections/s-lookbook-1.jpg", price: "Enquire for Price", is_featured: true, is_visible: true, display_order: 16 },
        { name: "Desking Series Open Plan", slug: "desking-series-open-plan", category_slug: "workstations", subcategory: "Modular Workstations", description: "Modular open-plan linear and back-to-back desking systems with minimalist leg profiles and customizable privacy screens.", main_image: "images/collection/collection-1.jpg", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 17 },
        { name: "Panel Series Workstations", slug: "panel-series-workstations", category_slug: "workstations", subcategory: "Modular Workstations", description: "Acoustic panel-based workstation partitions providing high acoustic privacy, raceway power conduits, and modular storage integration.", main_image: "images/header/prd-nav-1.jpg", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 18 },

        // Tables
        { name: "Cabin & Executive Tables", slug: "cabin-executive-tables", category_slug: "tables", subcategory: "Cabin Tables", description: "Executive director and managerial desk setups with attached side return credenzas.", main_image: "images/header/prd-nav-1.jpg", price: "Enquire for Price", is_featured: true, is_visible: true, display_order: 19 },
        { name: "Boardroom Meeting Tables", slug: "boardroom-meeting-tables", category_slug: "tables", subcategory: "Meeting Tables", description: "Large boardroom conference tables equipped with pop-up connectivity boxes and cable trays.", main_image: "images/header/prd-nav-2.jpg", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 20 },

        // Storage
        { name: "High-Density Mobile Compactor Storage", slug: "mobile-compactor-storage", category_slug: "storage", subcategory: "Compactor Storage", description: "High-density mobile rail compactor storage systems maximizing floor space utilization.", main_image: "images/header/prd-nav-1.jpg", price: "Enquire for Price", is_featured: true, is_visible: true, display_order: 21 },
        { name: "Metal Filing Cabinets", slug: "metal-filing-cabinets", category_slug: "storage", subcategory: "Metal Storage", description: "Powder-coated steel filing cabinets, lateral drawers, and central archive units.", main_image: "images/sections/s-lookbook-1.jpg", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 22 },

        // Soft Seating
        { name: "Executive Lounge Sofas", slug: "executive-lounge-sofas", category_slug: "soft-seating", subcategory: "Lounges & Sofas", description: "Single, two, and three-seater plush upholstered couches for reception areas and executive suites.", main_image: "images/collection/collection-1.jpg", price: "Enquire for Price", is_featured: true, is_visible: true, display_order: 23 },
        { name: "Collaborative Booth Seating", slug: "collaborative-booth-seating", category_slug: "soft-seating", subcategory: "Collaborative Seating", description: "Modular curved sofas and high-back acoustic booth seating for agile team huddles.", main_image: "images/sections/s-lookbook-1.jpg", price: "Enquire for Price", is_featured: false, is_visible: true, display_order: 24 },

        // Acoustic Pods
        { name: "Single Acoustic Phone Pod", slug: "single-acoustic-phone-pod", category_slug: "acoustic-pods", subcategory: "Phone Pods", description: "Sound-insulated solo booth equipped with air ventilation, LED lighting, power outlets, and laptop shelf for private calls.", main_image: "images/sections/s-lookbook-1.jpg", price: "Enquire for Price", is_featured: true, is_visible: true, display_order: 25 },
        { name: "4-6 Person Acoustic Meeting Pod", slug: "4-6-person-meeting-pod", category_slug: "acoustic-pods", subcategory: "Meeting Pods", description: "Fully enclosed acoustic meeting booth complete with integrated sofa seating, TV monitor mounting bracket, and power hubs.", main_image: "images/collection/collection-1.jpg", price: "Enquire for Price", is_featured: true, is_visible: true, display_order: 26 },

        // Interface Carpets
        { name: "Interface Modular Carpet Tiles", slug: "interface-carpet-tiles", category_slug: "carpets", subcategory: "Carpet Tiles", description: "Modular acoustic carpet tiles available in contemporary geometric patterns, stain-resistant fibers, and sound dampening backing.", main_image: "images/sections/lookbook-item-1.jpg", price: "Enquire for Price", is_featured: true, is_visible: true, display_order: 27 }
    ],

    hero_sections: [
        {
            heading: "Crafting Inspiring Workspaces for Modern Enterprise",
            subheading: "Premier Office Furniture & Turnkey Workspace Solutions",
            description: "Explore line-wise ArchLabs seating collections, modular workstations, executive desks, acoustic pods, soft seating, and custom corporate interiors.",
            primary_btn_text: "EXPLORE CATALOGUE",
            primary_btn_link: "archlabs-catalogue.html",
            secondary_btn_text: "ENQUIRE NOW",
            secondary_btn_link: "#enquireModal",
            bg_image_url: "images/sections/hero-workspace.jpg",
            is_visible: true
        }
    ],

    about_sections: [
        {
            title: "Vishista Office Solutions",
            subtitle: "Turnkey Corporate Interiors & Office Furniture Specialists",
            main_description: "Vishista Office Solutions Pvt Ltd is a premier provider of high-end office furniture, ArchLabs seating collections, modular workstation systems, executive seating, and turnkey corporate interior solutions across Telangana and Andhra Pradesh.",
            secondary_description: "Founded under the visionary leadership of K V Ramana Reddy, Vishista Office Solutions delivers state-of-the-art ergonomic design, durable quality construction, and personalized corporate workspace transformation.",
            image_url: "images/logo/logo-mark.png?v=2",
            experience_years: "15+ Years Experience",
            btn_text: "DISCOVER OUR STORY",
            btn_link: "about.html",
            is_visible: true
        }
    ],

    footer_content: [
        {
            company_description: "Vishista Office Solutions Pvt Ltd is a premier provider of high-end office furniture, ArchLabs seating collections, modular workstation systems, executive seating, and turnkey corporate interior solutions across Telangana and Andhra Pradesh.",
            address: "Saishruthi Nilyam, Street No. 4, Sri Sathya Sai Enclave, Plot No. 109, Old Bowenpally, Secunderabad, Telangana 500009",
            email_primary: "info@vishistaofficesolutions.com",
            email_secondary: "sales@vishistaofficesolutions.com",
            email_director: "kvramana.reddy@vishistaofficesolutions.com",
            phone_primary: "+91 9849058444",
            whatsapp_number: "+919849058444",
            directions_url: "https://maps.app.goo.gl/Svm1wBx323dVFtx18",
            copyright_text: "© 2026 Vishista Office Solutions Pvt Ltd. All Rights Reserved."
        }
    ],

    website_settings: [
        {
            site_name: "Vishista Office Solutions",
            logo_url: "images/logo/logo-mark.png?v=2",
            favicon_url: "images/logo/logo-symbol.png",
            meta_title: "Vishista Office Solutions - Premium Office Furniture & Turnkey Workspaces",
            meta_description: "Leading office furniture manufacturer & turnkey corporate workspace solution provider in Secunderabad, Hyderabad, Telangana & AP.",
            keywords: "office furniture, ArchLabs seating, modular workstations, ergonomic chairs, acoustic pods, executive desks, Hyderabad, Secunderabad",
            og_title: "Vishista Office Solutions - Corporate Workspaces",
            og_description: "Transform your workspace with ergonomic ArchLabs chairs, workstations, acoustic pods, and turnkey interior solutions.",
            og_image_url: "images/sections/hero-workspace.jpg"
        }
    ]
};

const outputDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'seed_data.json'), JSON.stringify(seedData, null, 2));
console.log('Seed data extracted and saved to data/seed_data.json successfully!');
