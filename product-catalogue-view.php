<?php include('header.php'); ?>

<!-- Dedicated Product Category Page Header -->
<section class="py-5 bg-dark text-white text-center position-relative" style="background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('images/sections/hero-workspace.jpg') center/cover no-repeat;">
    <div class="tf-container py-5">
        <div class="mb-3">
            <span class="badge bg-danger text-uppercase px-3 py-2 fw-black tracking-widest" style="font-size: 0.9rem !important;">Vishista Official Product Catalogue</span>
        </div>
        <h1 class="display-3 fw-black text-white mt-2 mb-3" id="cataloguePageTitle" style="font-weight: 900 !important;">Product Catalogue</h1>
        <p class="text-white mx-auto fw-bold fs-5" id="cataloguePageDescription" style="max-width: 800px; color: #ffffff !important; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
            Explore our line-wise models, technical specifications, and custom configurations.
        </p>
        <div class="mt-4">
            <a href="product-categories.html" class="btn btn-outline-light btn-md rounded-pill px-4 py-2 fw-bold text-uppercase">&larr; Back To All Categories</a>
        </div>
    </div>
</section>

<!-- Dedicated Catalogue Models Display Section -->
<div class="py-5 bg-light">
    <div class="tf-container">

        <!-- Category Title & Action Header -->
        <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4 pb-3 border-bottom border-3 border-danger gap-3">
            <div>
                <span class="badge bg-danger text-uppercase px-2 py-1 fs-7 mb-1" id="modelCountBadge">Line-Wise Models</span>
                <h2 class="fw-black text-dark mb-0" id="sectionHeading" style="font-size: 2.2rem !important; font-weight: 900 !important; color: #111111 !important;">Product Models</h2>
            </div>
            <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black px-4 py-2 shadow-sm" id="enquireSeriesHeaderBtn" style="border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">Enquire For This Series &rarr;</button>
        </div>

        <!-- Dynamic Models Grid -->
        <div class="row g-4 mb-5" id="modelsGridContainer">
            <!-- Dynamic model cards injected via JS -->
        </div>

        <!-- Corporate Support & Bulk Pricing Banner -->
        <div class="bg-dark text-white rounded-4 p-4 p-md-5 shadow-lg position-relative overflow-hidden" style="background: linear-gradient(135deg, #111111 0%, #262626 100%); border: 1px solid rgba(255,255,255,0.1);">
            <div class="row align-items-center g-4">
                <div class="col-lg-8">
                    <h3 class="fw-black text-white mb-2" style="font-size: 2rem !important; font-weight: 900 !important;">Need Custom Dimensions or Bulk Corporate Pricing?</h3>
                    <p class="text-white-50 fs-6 mb-0">Our spatial layout consultants offer 3D floor plan layout assistance and custom finish options across Telangana &amp; Andhra Pradesh.</p>
                </div>
                <div class="col-lg-4 text-lg-end">
                    <button type="button" class="btn btn-danger btn-lg px-4 py-3 text-uppercase fw-black shadow-lg" id="enquireBottomBannerBtn" style="border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none; font-size: 1.1rem !important;">Get Corporate Quote &rarr;</button>
                </div>
            </div>
        </div>

    </div>
</div>

<script>
    var pageCatalogueDatabase = {
        "Height Adjustable Series": {
            title: "Height Adjustable Series Catalogue",
            desc: "Motorized sit-to-stand desks engineered for active workplace wellness, smooth height transitions, and integrated wire management.",
            badge: "3 Line-Wise Sit-Stand Models",
            items: [
                { name: "Model HA-01 Sit-Stand Executive Desk", img: "images/categories/cat_workstations.jpg", specs: "Dual Motor / 120kg Load Capacity / Digital Memory Presets (650-1300mm transition height) / Anti-collision Sensor" },
                { name: "Model HA-02 Back-to-Back Bench System", img: "images/sections/hero-workspace.jpg", specs: "Central Cable Spine / Integrated Acoustic Divider Screen / Cable Snake Conduits / Dual Motor per Desk" },
                { name: "Model HA-03 Corner L-Desk Managerial", img: "images/sections/vishista_exclusive.jpg", specs: "3-Leg Motorized System / Side Credenza Storage Unit / Wireless Phone Charging Hub / Heavy Steel Base" }
            ]
        },
        "Desking Series": {
            title: "Desking Series Catalogue",
            desc: "Modular open-plan linear and back-to-back desking systems with minimalist metal leg profiles and wire raceways.",
            badge: "3 Open-Plan Desking Systems",
            items: [
                { name: "Model DS-Linear 4-Person Workstation Cluster", img: "images/categories/cat_workstations.jpg", specs: "Powder Coated Metal Legs / Fabric Privacy Screen / Base Raceway Wiring / Under-desk Cable Basket" },
                { name: "Model DS-Loop Leg 2-Person Bench", img: "images/sections/s-lookbook-2.jpg", specs: "Loop Frame Steel Legs / Prelam Wood Top / Center Screen Bracket / Wire Pass Grommets" },
                { name: "Model DS-Managerial L-Shape Workstation", img: "images/header/prd-nav-1.jpg", specs: "Attached Pedestal / Wire Pass Grommets / Acoustic Fabric Screen / Modesty Panel" }
            ]
        },
        "Panel Series": {
            title: "Panel Series Workstations Catalogue",
            desc: "Acoustic panel-based partition workstations providing high acoustic privacy, raceway power conduits, and modular storage integration.",
            badge: "2 Partition Panel Systems",
            items: [
                { name: "Model PS-60mm Tile Partition System", img: "images/categories/cat_workstations.jpg", specs: "60mm Panel Thickness / Fabric & Glass Tiles / Base Raceway Wiring Conduits / Whiteboard Tiles" },
                { name: "Model PS-45mm Slim Panel Workstation", img: "images/header/prd-nav-2.jpg", specs: "45mm Panel Thickness / Magnetic Marker Board / Overhead Storage Unit / Acoustic Felt Panels" }
            ]
        },
        "Cabin Tables": {
            title: "Executive Cabin Tables Catalogue",
            desc: "Executive director and managerial desk setups with attached side return credenzas, cable conduits, and premium finishes.",
            badge: "3 Executive Desk Suites",
            items: [
                { name: "Model CB-Executive Director Desk", img: "images/categories/cat_tables.png", specs: "Veneer Finish / Leatherette Writing Pad / Side Credenza Storage Unit / Cable Port Boxes" },
                { name: "Model CB-Managerial Side Return Desk", img: "images/categories/cat_tables.jpg", specs: "Prelam Wood Finish / Lockable Drawer Pedestal / Wire Pass Grommets / Modesty Panel" },
                { name: "Model CB-Modern CEO Suite Desk", img: "images/sections/vishista_exclusive.jpg", specs: "Beveled Edge Top / Built-in Power Module / Attached Return Credenza / Polished Metal Base" }
            ]
        },
        "Meeting Tables": {
            title: "Meeting & Boardroom Tables Catalogue",
            desc: "Large boardroom conference tables equipped with pop-up connectivity boxes, cable troughs, and heavy-duty steel bases.",
            badge: "3 Boardroom Models",
            items: [
                { name: "Model MT-12 Seater Boardroom Table", img: "images/categories/cat_tables.png", specs: "Dual Pop-up Power Box / Boat Shape Top / Heavy Duty Steel Base Frame / Cable Spine Passage" },
                { name: "Model MT-8 Seater Conference Table", img: "images/categories/cat_tables.jpg", specs: "Modular Sectional Top / Cable Trough / Metal Leg Frames / Prelam Wood Finish" },
                { name: "Model MT-Round Discussion Table", img: "images/header/prd-nav-2.jpg", specs: "1200mm Diameter / Pedestal Base / Prelam Wood Top / Solid Rim Edging" }
            ]
        },
        "Cafe Tables": {
            title: "Cafeteria & Pantry Tables Catalogue",
            desc: "Stylish cafeteria and pantry dining tables available in round, square, and high-counter bar designs.",
            badge: "2 Dining & Pantry Models",
            items: [
                { name: "Model CF-Round Breakout Dining Table", img: "images/categories/cat_tables.png", specs: "Stainless Steel Disc Base / Compact Laminate Top / Easy Clean Hygienic Surface" },
                { name: "Model CF-High Counter Bar Table", img: "images/archlabs/pages/page_57.png", specs: "1050mm Bar Height / Footrest Rail / Heavy Duty Steel Legs / Prelam Top" }
            ]
        },
        "Training Tables": {
            title: "Training & Seminar Tables Catalogue",
            desc: "Foldable tilt-top training desks on lockable castors for reconfigurable seminar halls and learning centers.",
            badge: "2 Seminar Desk Models",
            items: [
                { name: "Model TR-Tilt Top Flip Desk", img: "images/categories/cat_tables.png", specs: "Flip Mechanism / Lockable Castors / Nesting Compact Storage / Perforated Metal Modesty" },
                { name: "Model TR-Fixed Seminar Table", img: "images/archlabs/pages/page_43.png", specs: "Modesty Panel / Front Book Rack / Cable Hole Grommet / Steel Tube Frame" }
            ]
        },
        "Prelam Storage": {
            title: "Prelam Storage Systems Catalogue",
            desc: "Laminate wood credenzas, mobile pedestals, and full-height storage units matching workstation finishes.",
            badge: "3 Modular Storage Units",
            items: [
                { name: "Model ST-Mobile Pedestal (3 Drawer)", img: "images/categories/cat_storage.png", specs: "Central Keyed Locking / Castor Wheels / Stationary Tray Included / Anti-tilt Mechanism" },
                { name: "Model ST-Low Credenza Cabinet", img: "images/categories/cat_storage.jpg", specs: "Sliding Wooden Doors / Adjustable Internal Shelves / Cylinder Lock / Metal Handles" },
                { name: "Model ST-Full Height Storage Cupboard", img: "images/sections/s-lookbook-1.jpg", specs: "Hinged Wooden Doors / 4 Internal Shelves / Prelam Board Construction" }
            ]
        },
        "Metal Storage": {
            title: "Metal Storage Systems Catalogue",
            desc: "Powder-coated steel filing cabinets, lateral drawers, and archive storage almirahs.",
            badge: "2 Heavy Duty Steel Storage Models",
            items: [
                { name: "Model MS-4 Drawer Filing Cabinet", img: "images/categories/cat_storage.jpg", specs: "Telescopic Ball Bearing Slides / Anti-Tilt Central Lock / Heavy Gauge Steel Sheet" },
                { name: "Model MS-2 Door Steel Almirah", img: "images/categories/cat_storage.png", specs: "3-Way Locking Handle / 4 Adjustable Shelves / Durable Powder Coated Finish" }
            ]
        },
        "Compactor Storage": {
            title: "Mobile Compactor Storage Catalogue",
            desc: "High-density mobile rail compactor storage systems maximizing office floor space utilization.",
            badge: "Mobile Rail Storage",
            items: [
                { name: "Model CP-Mechanical Mobile Compactor System", img: "images/header/prd-nav-1.jpg", specs: "Mechanical Drive Wheel / Safety Floor Lock / Heavy Load Rails / A4 & Legal File Shelf Widths" }
            ]
        },
        "Locker Systems": {
            title: "Modular Staff Lockers Catalogue",
            desc: "Personal employee lockers with mechanical keypads, RFID smart locks, and ventilation slots.",
            badge: "2 Staff Locker Models",
            items: [
                { name: "Model LK-6 Door Staff Locker", img: "images/categories/cat_storage.png", specs: "Digital Keypad Lock / Name Tag Holder / Internal Coat Hook / Louvered Air Slots" },
                { name: "Model LK-9 Door Modular Locker", img: "images/header/prd-nav-2.jpg", specs: "RFID Card Access / Air Ventilation Slits / Heavy Gauge Steel Construction" }
            ]
        },
        "Mesh Chairs (30 Models)": {
            title: "Ergonomic Mesh Seating Series Catalogue",
            desc: "Complete 30-model ergonomic mesh task seating collection engineered for all-day posture support.",
            badge: "30 Line-Wise Mesh Models",
            items: [
                { name: "Model Veloz Mesh Task Chair (P.04)", img: "images/archlabs/pages/page_4.png", specs: "Breathable Mesh Back / 3D Gel Armrest / Synchro-Tilt Mechanism / Class 4 Gas Lift" },
                { name: "Model V-Ergo High Back Mesh (P.05)", img: "images/archlabs/pages/page_5.png", specs: "Adjustable Lumbar Support / Aluminium Diecast Base / Adjustable 2D Headrest" },
                { name: "Model V-Lumbar Mid Back Task (P.06)", img: "images/archlabs/pages/page_6.png", specs: "Nylon Frame / Multi-position Lock / PU Arm Pads / High Density Seat Foam" },
                { name: "Model V-Executive Mesh Suite (P.07)", img: "images/archlabs/pages/page_7.png", specs: "Full Mesh Seat & Back / Polished Chrome Base / 3D Adjustable Headrest" }
            ]
        },
        "Leather Chairs (5 Models)": {
            title: "Executive Leather Seating Catalogue",
            desc: "High-back executive leather armchairs with diamond stitch quilting and chrome controls.",
            badge: "5 Executive Leather Models",
            items: [
                { name: "Model Exec Leather Director Chair (P.36)", img: "images/archlabs/pages/page_36.png", specs: "Genuine Upholstered Leather / Knee-Tilt Locking Mechanism / Polished Chrome Base" },
                { name: "Model Diamond Stitch Executive (P.37)", img: "images/archlabs/pages/page_37.png", specs: "Quilted Backrest Cushioning / Fixed Cushioned Armrests / Heavy Duty Gas Lift" },
                { name: "Model Managerial Leatherette Swivel (P.38)", img: "images/archlabs/pages/page_38.png", specs: "High Density Cushioning / T-Bar Chrome Armrest / Smooth Nylon Castors" }
            ]
        },
        "Training Chairs (7 Models)": {
            title: "Training & Seminar Seating Catalogue",
            desc: "Nesting training chairs equipped with writing tablets, wire baskets, and castor wheels.",
            badge: "7 Training Chair Models",
            items: [
                { name: "Model Nesting Tablet Chair (P.43)", img: "images/archlabs/pages/page_43.png", specs: "Foldable Writing Tablet / Under-seat Wire Book Basket / Castor Wheel Base" },
                { name: "Model Mobile Seminar Mesh Chair (P.44)", img: "images/archlabs/pages/page_44.png", specs: "Flip Seat Mechanism / Nesting Compact Storage / Breathable Mesh Backrest" },
                { name: "Model Poly Shell Training Chair (P.45)", img: "images/archlabs/pages/page_45.png", specs: "Heavy Duty Frame / Cup Holder Writing Tablet / Stackable Base Design" }
            ]
        },
        "Cafe Chairs (7 Models)": {
            title: "Cafeteria & Dining Seating Catalogue",
            desc: "Vibrant polypropylene and metal frame dining chairs for pantry breakouts.",
            badge: "7 Cafe & Pantry Models",
            items: [
                { name: "Model Polypropelene Shell Chair (P.57)", img: "images/archlabs/pages/page_57.png", specs: "Molded Polypropylene Shell / Solid Wooden Legs / Easy Clean Surface" },
                { name: "Model Chrome Leg Breakout Chair (P.58)", img: "images/archlabs/pages/page_58.png", specs: "Stackable Chrome Legs / Ergonomic Seat Contour / Stain Resistant Surface" },
                { name: "Model High Counter Bar Stool (P.59)", img: "images/archlabs/pages/page_59.png", specs: "Swivel Seat / Chrome Footrest Ring / Gas Lift Height Adjustment" }
            ]
        },
        "Lounge & Executive Sofas": {
            title: "Executive Lounge Sofas Catalogue",
            desc: "Single, two, and three-seater plush upholstered couches for reception areas and executive suites.",
            badge: "Plush Executive Couches",
            items: [
                { name: "Model SV-Executive 3-Seater Leather Couch", img: "images/categories/cat_soft_seating.jpg", specs: "Genuine Leatherette / Stainless Steel Legs / High Resilience Cushioning" },
                { name: "Model SV-Single Club Reception Armchair", img: "images/collection/collection-1.jpg", specs: "Plush Fabric Upholstery / Solid Wood Internal Frame / Ergonomic Back" }
            ]
        },
        "Collaborative Seating": {
            title: "Collaborative Booth Seating Catalogue",
            desc: "Modular curved sofas and high-back acoustic booth seating for agile team huddles.",
            badge: "Acoustic Booths & Curved Modules",
            items: [
                { name: "Model CS-Curved Modular Sofa Cluster", img: "images/collection/collection-1.jpg", specs: "Interlocking Curved Modules / Integrated Power Outlet / High Density Foam" },
                { name: "Model CS-High Back Acoustic Booth", img: "images/collection/collection-2.jpg", specs: "Sound Dampening Side Panels / Center Coffee Table / 4-Person Capacity" }
            ]
        },
        "Pouffes & Occasional Tables": {
            title: "Soft Pouffes & Center Tables Catalogue",
            desc: "Geometrical soft pouffes, ottomans, and companion coffee center tables.",
            badge: "Pouffes, Ottomans & Tables",
            items: [
                { name: "Model PF-Geometric Hexagon Ottoman", img: "images/collection/collection-2.jpg", specs: "Modular Hexagon Shape / Fabric Finish / Nylon Glide Feet" },
                { name: "Model PF-Round Center Coffee Table", img: "images/categories/cat_tables.png", specs: "Marble & Wood Top Options / Metal Base / Modern Aesthetic" }
            ]
        },
        "Single Acoustic Phone Pod": {
            title: "Single Acoustic Phone Pod Catalogue",
            desc: "Sound-insulated solo booth equipped with air ventilation, LED lighting, power outlets, and laptop shelf.",
            badge: "Solo Phone Pod",
            items: [
                { name: "Model PD-Solo Acoustic Telephone Booth", img: "images/categories/cat_pods.jpg", specs: "Sound Reduction 32dB / Silent Ventilation Fan / Motion Sensor LED / Power Hub" }
            ]
        },
        "4-6 Person Meeting Pod": {
            title: "4-6 Person Acoustic Meeting Pod Catalogue",
            desc: "Fully enclosed acoustic meeting booth complete with integrated sofa seating, TV mounting bracket, and power hubs.",
            badge: "Meeting Pod",
            items: [
                { name: "Model PD-4-6 Person Conference Pod", img: "images/sections/hero-workspace.jpg", specs: "Double Glazed Acoustic Glass / Integrated Sofas / TV Wall Bracket / Power Hub" }
            ]
        },
        "Interface Carpet Tiles": {
            title: "Interface Acoustic Carpet Tiles Catalogue",
            desc: "Modular acoustic carpet tiles available in contemporary geometric patterns and stain-resistant fibers.",
            badge: "Acoustic Carpet Tiles",
            items: [
                { name: "Model CP-Acoustic Nylon Modular Tile", img: "images/categories/cat_carpets.jpg", specs: "50x50cm Tiles / Sound Dampening Backing / Stain Shield Treatment" },
                { name: "Model CP-Geometric Plank Carpet Tile", img: "images/categories/cat_workstations.jpg", specs: "25x100cm Planks / Heavy Commercial Wear / High Friction Rating" }
            ]
        },
        "Loom Crafts Terrace & Cafe Seating": {
            title: "Outdoor Furniture & Terrace Seating Catalogue",
            desc: "Weather-resistant synthetic wicker and aluminum outdoor lounge sets, patio umbrellas, and dining tables.",
            badge: "Outdoor Patio Furniture",
            items: [
                { name: "Model OD-Synthetic Wicker Terrace Lounge", img: "images/categories/cat_outdoor.jpg", specs: "UV-Resistant All-Weather Wicker / Water Repellent Cushions / Aluminium Frame" },
                { name: "Model OD-Patio Dining Set & Umbrella", img: "images/categories/cat_tables.png", specs: "4-Seater Outdoor Table / Heavy Duty Patio Umbrella / Stainless Hardware" }
            ]
        },
        "Classroom Desks": {
            title: "Classroom Student Desks Catalogue",
            desc: "Single and dual-bench student desks with bag hooks and book shelves for schools and colleges.",
            badge: "Institutional Desks",
            items: [
                { name: "Model ED-Single Student Ergonomic Desk", img: "images/categories/cat_education.png", specs: "Rounded Wood Edges / Metal Frame / Bag Hook / Under-desk Book Shelf" },
                { name: "Model ED-Dual Student Bench Unit", img: "images/categories/cat_educational.jpg", specs: "2-Person Integrated Bench / Heavy Duty Steel Tube / Pencil Groove" }
            ]
        },
        "Library Furniture": {
            title: "Library Study Furniture Catalogue",
            desc: "Study carrels, reading tables, and heavy-duty double-sided book racks.",
            badge: "Library Racks & Carrels",
            items: [
                { name: "Model ED-Individual Study Carrel Desk", img: "images/categories/cat_educational.jpg", specs: "Side Acoustic Divider / LED Reading Light / Power Socket" },
                { name: "Model ED-Double-Sided Steel Book Shelf", img: "images/categories/cat_education.png", specs: "6-Tier Storage / Adjustable Shelves / Label Holder" }
            ]
        },
        "Hostel Furniture": {
            title: "Hostel & Housing Furniture Catalogue",
            desc: "Metal bunk beds, study tables, and wardrobe locker units for institutional housing.",
            badge: "Hostel Bunk Beds & Desks",
            items: [
                { name: "Model ED-Metal Heavy Duty Bunk Bed", img: "images/sections/s-lookbook-1.jpg", specs: "Safety Guard Rail / Side Ladder / Powder Coated Steel Frame" },
                { name: "Model ED-Hostel Study Desk & Locker", img: "images/categories/cat_education.png", specs: "Attached Wardrobe / Study Desk / Combination Lock" }
            ]
        },
        "Auditorium Seating": {
            title: "Auditorium & Lecture Hall Seating Catalogue",
            desc: "Cushioned tip-up auditorium chairs with writing tablets and row numbering.",
            badge: "Auditorium Chairs",
            items: [
                { name: "Model ED-Tip-Up Cushion Auditorium Chair", img: "images/categories/cat_seating.jpg", specs: "Gravity Auto-Return Seat / Retractable Writing Tablet / Molded Foam" }
            ]
        },
        "Ergonomic Arms & Power Management": {
            title: "Workspace Accessories Catalogue",
            desc: "Gas-spring dual monitor arms, under-desk cable trays, vertical wire serpents, and pop-up power modules.",
            badge: "Monitor Arms & Power Modules",
            items: [
                { name: "Model AC-Gas Spring Dual Monitor Arm", img: "images/categories/cat_workstations.jpg", specs: "VESA Mount / Quick Release Clamp / Integrated Cable Passage" },
                { name: "Model AC-Pop-Up Power & Data Module", img: "images/categories/cat_workstations.jpg", specs: "2 Power Sockets / USB-C Fast Charger / HDMI Pass Through" }
            ]
        },

        "Mesh Chair": {
            title: "Ergonomic Mesh Seating Catalogue",
            desc: "High-performance ergonomic mesh chairs with adjustable lumbar support, 3D arms, and synchro-tilt mechanisms.",
            badge: "Ergonomic Mesh Seating",
            items: [
                { name: "Model Veloz Mesh Task Chair (P.04)", img: "images/archlabs/pages/page_4.png", specs: "Breathable Mesh Back / 3D Gel Armrest / Synchro-Tilt Mechanism / Class 4 Gas Lift" },
                { name: "Model V-Ergo High Back Mesh (P.05)", img: "images/archlabs/pages/page_5.png", specs: "Adjustable Lumbar Support / Aluminium Diecast Base / Adjustable 2D Headrest" },
                { name: "Model V-Lumbar Mid Back Task (P.06)", img: "images/archlabs/pages/page_6.png", specs: "Nylon Frame / Multi-position Lock / PU Arm Pads / High Density Seat Foam" },
                { name: "Model V-Executive Mesh Suite (P.07)", img: "images/archlabs/pages/page_7.png", specs: "Full Mesh Seat & Back / Polished Chrome Base / 3D Adjustable Headrest" }
            ]
        },
        "Leather Chair": {
            title: "Executive Leather Seating Catalogue",
            desc: "High-back executive leather armchairs with diamond stitch quilting and chrome controls.",
            badge: "Executive Leather Models",
            items: [
                { name: "Model Exec Leather Director Chair (P.36)", img: "images/archlabs/pages/page_36.png", specs: "Genuine Upholstered Leather / Knee-Tilt Locking Mechanism / Polished Chrome Base" },
                { name: "Model Diamond Stitch Executive (P.37)", img: "images/archlabs/pages/page_37.png", specs: "Quilted Backrest Cushioning / Fixed Cushioned Armrests / Heavy Duty Gas Lift" },
                { name: "Model Managerial Leatherette Swivel (P.38)", img: "images/archlabs/pages/page_38.png", specs: "High Density Cushioning / T-Bar Chrome Armrest / Smooth Nylon Castors" }
            ]
        },
        "Training Chair": {
            title: "Training & Seminar Seating Catalogue",
            desc: "Nesting training chairs equipped with writing tablets, wire baskets, and castor wheels.",
            badge: "Training Chair Models",
            items: [
                { name: "Model Nesting Tablet Chair (P.43)", img: "images/archlabs/pages/page_43.png", specs: "Foldable Writing Tablet / Under-seat Wire Book Basket / Castor Wheel Base" },
                { name: "Model Mobile Seminar Mesh Chair (P.44)", img: "images/archlabs/pages/page_44.png", specs: "Flip Seat Mechanism / Nesting Compact Storage / Breathable Mesh Backrest" },
                { name: "Model Poly Shell Training Chair (P.45)", img: "images/archlabs/pages/page_45.png", specs: "Heavy Duty Frame / Cup Holder Writing Tablet / Stackable Base Design" }
            ]
        },
        "Cafe Chair": {
            title: "Cafeteria & Dining Seating Catalogue",
            desc: "Vibrant polypropylene and metal frame dining chairs for pantry breakouts.",
            badge: "Cafe & Dining Models",
            items: [
                { name: "Model Polypropelene Shell Chair (P.57)", img: "images/archlabs/pages/page_57.png", specs: "Molded Polypropylene Shell / Solid Wooden Legs / Easy Clean Surface" },
                { name: "Model Chrome Leg Breakout Chair (P.58)", img: "images/archlabs/pages/page_58.png", specs: "Stackable Chrome Legs / Ergonomic Seat Contour / Stain Resistant Surface" },
                { name: "Model High Counter Bar Stool (P.59)", img: "images/archlabs/pages/page_59.png", specs: "Swivel Seat / Chrome Footrest Ring / Gas Lift Height Adjustment" }
            ]
        },
        "Lounge": {
            title: "Executive Lounge Sofas & Couches",
            desc: "Single, two, and three-seater plush upholstered couches for reception areas and executive suites.",
            badge: "Plush Executive Lounges",
            items: [
                { name: "Model SV-Executive 3-Seater Leather Couch", img: "images/categories/cat_soft_seating.jpg", specs: "Genuine Leatherette / Stainless Steel Legs / High Resilience Cushioning" },
                { name: "Model SV-Single Club Reception Armchair", img: "images/collection/collection-1.jpg", specs: "Plush Fabric Upholstery / Solid Wood Internal Frame / Ergonomic Back" }
            ]
        },
        "Sofa": {
            title: "Corporate Soft Seating & Sofas",
            desc: "Premium executive couches and plush sofas for modern office reception and breakout spaces.",
            badge: "Executive Sofas",
            items: [
                { name: "Model SV-Executive 3-Seater Leather Couch", img: "images/categories/cat_soft_seating.jpg", specs: "Genuine Leatherette / Stainless Steel Legs / High Resilience Cushioning" },
                { name: "Model SV-Single Club Reception Armchair", img: "images/collection/collection-1.jpg", specs: "Plush Fabric Upholstery / Solid Wood Internal Frame / Ergonomic Back" }
            ]
        },
        "Collaborative": {
            title: "Collaborative Booth Seating",
            desc: "Modular curved sofas and high-back acoustic booth seating for agile team huddles.",
            badge: "Acoustic Booths & Curved Modules",
            items: [
                { name: "Model CS-Curved Modular Sofa Cluster", img: "images/collection/collection-1.jpg", specs: "Interlocking Curved Modules / Integrated Power Outlet / High Density Foam" },
                { name: "Model CS-High Back Acoustic Booth", img: "images/collection/collection-2.jpg", specs: "Sound Dampening Side Panels / Center Coffee Table / 4-Person Capacity" }
            ]
        },
        "Pouffe": {
            title: "Soft Pouffes & Ottomans",
            desc: "Geometrical soft pouffes and ottomans for versatile breakout seating.",
            badge: "Pouffes & Ottomans",
            items: [
                { name: "Model PF-Geometric Hexagon Ottoman", img: "images/collection/collection-2.jpg", specs: "Modular Hexagon Shape / Fabric Finish / Nylon Glide Feet" },
                { name: "Model PF-Cylinder Soft Pouffe", img: "images/collection/collection-1.jpg", specs: "High Density Foam / Premium Fabric / Dual Tone Finish" }
            ]
        },
        "Occasional Tables": {
            title: "Occasional & Center Tables",
            desc: "Modern reception center tables and side companion coffee tables.",
            badge: "Center & Coffee Tables",
            items: [
                { name: "Model PF-Round Center Coffee Table", img: "images/categories/cat_tables.png", specs: "Marble & Wood Top Options / Metal Base / Modern Aesthetic" },
                { name: "Model PF-Square Wooden Side Table", img: "images/categories/cat_tables.jpg", specs: "Solid Wood Finish / Matte Black Metal Legs / Beveled Rim" }
            ]
        },
        "Classroom": {
            title: "Classroom Student Desks Catalogue",
            desc: "Single and dual-bench student desks with bag hooks and book shelves for schools and colleges.",
            badge: "Institutional Desks",
            items: [
                { name: "Model ED-Single Student Ergonomic Desk", img: "images/categories/cat_education.png", specs: "Rounded Wood Edges / Metal Frame / Bag Hook / Under-desk Book Shelf" },
                { name: "Model ED-Dual Student Bench Unit", img: "images/categories/cat_educational.jpg", specs: "2-Person Integrated Bench / Heavy Duty Steel Tube / Pencil Groove" }
            ]
        },
        "Library": {
            title: "Library Study Furniture Catalogue",
            desc: "Study carrels, reading tables, and heavy-duty double-sided book racks.",
            badge: "Library Racks & Carrels",
            items: [
                { name: "Model ED-Individual Study Carrel Desk", img: "images/categories/cat_educational.jpg", specs: "Side Acoustic Divider / LED Reading Light / Power Socket" },
                { name: "Model ED-Double-Sided Steel Book Shelf", img: "images/categories/cat_education.png", specs: "6-Tier Storage / Adjustable Shelves / Label Holder" }
            ]
        },
        "Hostel": {
            title: "Hostel & Housing Furniture Catalogue",
            desc: "Metal bunk beds, study tables, and wardrobe locker units for institutional housing.",
            badge: "Hostel Bunk Beds & Desks",
            items: [
                { name: "Model ED-Metal Heavy Duty Bunk Bed", img: "images/sections/s-lookbook-1.jpg", specs: "Safety Guard Rail / Side Ladder / Powder Coated Steel Frame" },
                { name: "Model ED-Hostel Study Desk & Locker", img: "images/categories/cat_education.png", specs: "Attached Wardrobe / Study Desk / Combination Lock" }
            ]
        },
        "Auditorium": {
            title: "Auditorium & Lecture Hall Seating Catalogue",
            desc: "Cushioned tip-up auditorium chairs with writing tablets and row numbering.",
            badge: "Auditorium Chairs",
            items: [
                { name: "Model ED-Tip-Up Cushion Auditorium Chair", img: "images/categories/cat_seating.jpg", specs: "Gravity Auto-Return Seat / Retractable Writing Tablet / Molded Foam" }
            ]
        },
        "Pods": {
            title: "Acoustic Work Pods Catalogue",
            desc: "Private Acoustic Phone Booths and Collaborative Meeting Pods engineered for sound isolation and distraction-free calls.",
            badge: "Acoustic Pods",
            items: [
                { name: "Model PD-Solo Acoustic Telephone Booth", img: "images/categories/cat_pods.jpg", specs: "Sound Reduction 32dB / Silent Ventilation Fan / Motion Sensor LED / Power Hub" },
                { name: "Model PD-4-6 Person Conference Pod", img: "images/sections/hero-workspace.jpg", specs: "Double Glazed Acoustic Glass / Integrated Sofas / TV Wall Bracket / Power Hub" }
            ]
        },
        "Carpets": {
            title: "Interface Carpet Tiles Catalogue",
            desc: "High-performance modular Interface Carpet Tiles designed for heavy traffic commercial office floors.",
            badge: "Acoustic Carpet Tiles",
            items: [
                { name: "Model CP-Acoustic Nylon Modular Tile", img: "images/categories/cat_carpets.jpg", specs: "50x50cm Tiles / Sound Dampening Backing / Stain Shield Treatment" },
                { name: "Model CP-Geometric Plank Carpet Tile", img: "images/categories/cat_workstations.jpg", specs: "25x100cm Planks / Heavy Commercial Wear / High Friction Rating" }
            ]
        },
        "Outdoor": {
            title: "Outdoor Furniture & Terrace Seating",
            desc: "Weatherproof Loom Crafts outdoor lounge sets, patio tables, and terrace seating for corporate cafeterias.",
            badge: "Outdoor Patio Furniture",
            items: [
                { name: "Model OD-Synthetic Wicker Terrace Lounge", img: "images/categories/cat_outdoor.jpg", specs: "UV-Resistant All-Weather Wicker / Water Repellent Cushions / Aluminium Frame" },
                { name: "Model OD-Patio Dining Set & Umbrella", img: "images/categories/cat_tables.png", specs: "4-Seater Outdoor Table / Heavy Duty Patio Umbrella / Stainless Hardware" }
            ]
        },
        "Educational": {
            title: "Educational Solutions Catalogue",
            desc: "Ergonomic Classroom Desks, Library Furniture, Hostel Storage Units, and Heavy-Duty Auditorium Seating.",
            badge: "Educational Solutions",
            items: [
                { name: "Model ED-Single Student Ergonomic Desk", img: "images/categories/cat_education.png", specs: "Rounded Wood Edges / Metal Frame / Bag Hook / Under-desk Book Shelf" },
                { name: "Model ED-Individual Study Carrel Desk", img: "images/categories/cat_educational.jpg", specs: "Side Acoustic Divider / LED Reading Light / Power Socket" },
                { name: "Model ED-Metal Heavy Duty Bunk Bed", img: "images/sections/s-lookbook-1.jpg", specs: "Safety Guard Rail / Side Ladder / Powder Coated Steel Frame" },
                { name: "Model ED-Tip-Up Cushion Auditorium Chair", img: "images/categories/cat_seating.jpg", specs: "Gravity Auto-Return Seat / Retractable Writing Tablet / Molded Foam" }
            ]
        },
        "Workstations": {
            title: "Modular Workstations Catalogue",
            desc: "Height Adjustable Series, Desking Series, and Panel Series designed for collaborative and ergonomic team layouts.",
            badge: "Workstations",
            items: [
                { name: "Model HA-01 Sit-Stand Executive Desk", img: "images/categories/cat_workstations.jpg", specs: "Dual Motor / 120kg Load Capacity / Digital Memory Presets / Anti-collision Sensor" },
                { name: "Model DS-Linear 4-Person Workstation Cluster", img: "images/categories/cat_workstations.jpg", specs: "Powder Coated Metal Legs / Fabric Privacy Screen / Base Raceway Wiring" },
                { name: "Model PS-60mm Tile Partition System", img: "images/categories/cat_workstations.jpg", specs: "60mm Panel Thickness / Fabric & Glass Tiles / Base Raceway Wiring Conduits" }
            ]
        },
        "Tables": {
            title: "Corporate Tables Catalogue",
            desc: "Executive Cabin Tables, Conference Meeting Tables, Cafe Tables, and Modular Training Tables.",
            badge: "Tables & Desks",
            items: [
                { name: "Model CB-Executive Director Desk", img: "images/categories/cat_tables.png", specs: "Veneer Finish / Leatherette Writing Pad / Side Credenza Storage Unit" },
                { name: "Model MT-12 Seater Boardroom Table", img: "images/categories/cat_tables.png", specs: "Dual Pop-up Power Box / Boat Shape Top / Heavy Duty Steel Base Frame" },
                { name: "Model CF-Round Breakout Dining Table", img: "images/categories/cat_tables.png", specs: "Stainless Steel Disc Base / Compact Laminate Top / Easy Clean Hygienic Surface" },
                { name: "Model TR-Tilt Top Flip Desk", img: "images/categories/cat_tables.png", specs: "Flip Mechanism / Lockable Castors / Nesting Compact Storage" }
            ]
        },
        "Storage": {
            title: "Storage Systems Catalogue",
            desc: "Prelam Storage Credenzas, Heavy-Duty Metal Filing Cabinets, High-Density Compactor Storage, and Personal Lockers.",
            badge: "Storage Systems",
            items: [
                { name: "Model ST-Mobile Pedestal (3 Drawer)", img: "images/categories/cat_storage.png", specs: "Central Keyed Locking / Castor Wheels / Stationary Tray Included" },
                { name: "Model MS-4 Drawer Filing Cabinet", img: "images/categories/cat_storage.jpg", specs: "Telescopic Ball Bearing Slides / Anti-Tilt Central Lock / Heavy Gauge Steel Sheet" },
                { name: "Model CP-Mechanical Mobile Compactor System", img: "images/header/prd-nav-1.jpg", specs: "Mechanical Drive Wheel / Safety Floor Lock / Heavy Load Rails" },
                { name: "Model LK-6 Door Staff Locker", img: "images/categories/cat_storage.png", specs: "Digital Keypad Lock / Name Tag Holder / Louvered Air Slots" }
            ]
        },
        "Seating": {
            title: "Seating Catalogue",
            desc: "Ergonomic Task Mesh Chairs, Genuine Leather Executive Armchairs, Training Chairs, and Cafe Dining Chairs.",
            badge: "Seating Collection",
            items: [
                { name: "Model Veloz Mesh Task Chair (P.04)", img: "images/archlabs/pages/page_4.png", specs: "Breathable Mesh Back / 3D Gel Armrest / Synchro-Tilt Mechanism / Class 4 Gas Lift" },
                { name: "Model Exec Leather Director Chair (P.36)", img: "images/archlabs/pages/page_36.png", specs: "Genuine Upholstered Leather / Knee-Tilt Locking Mechanism / Polished Chrome Base" },
                { name: "Model Nesting Tablet Chair (P.43)", img: "images/archlabs/pages/page_43.png", specs: "Foldable Writing Tablet / Under-seat Wire Book Basket / Castor Wheel Base" },
                { name: "Model Polypropelene Shell Chair (P.57)", img: "images/archlabs/pages/page_57.png", specs: "Molded Polypropylene Shell / Solid Wooden Legs / Easy Clean Surface" }
            ]
        },
        "Soft Seating": {
            title: "Soft Seating & Lounge Catalogue",
            desc: "Plush Executive Couches, Modular Curved Lounges, Collaborative Meeting Booths, and Geometrical Pouffes.",
            badge: "Soft Seating Collection",
            items: [
                { name: "Model SV-Executive 3-Seater Leather Couch", img: "images/categories/cat_soft_seating.jpg", specs: "Genuine Leatherette / Stainless Steel Legs / High Resilience Cushioning" },
                { name: "Model CS-Curved Modular Sofa Cluster", img: "images/collection/collection-1.jpg", specs: "Interlocking Curved Modules / Integrated Power Outlet / High Density Foam" },
                { name: "Model PF-Geometric Hexagon Ottoman", img: "images/collection/collection-2.jpg", specs: "Modular Hexagon Shape / Fabric Finish / Nylon Glide Feet" },
                { name: "Model PF-Round Center Coffee Table", img: "images/categories/cat_tables.png", specs: "Marble & Wood Top Options / Metal Base / Modern Aesthetic" }
            ]
        }
    };

    function resolveCatalogueData(rawKey) {
        if (!rawKey) return pageCatalogueDatabase["Workstations"];
        var decoded = decodeURIComponent(rawKey).trim();
        if (pageCatalogueDatabase[decoded]) return { matchedKey: decoded, data: pageCatalogueDatabase[decoded] };
        
        var normalizedQuery = decoded.toLowerCase().replace(/[^a-z0-9]/g, '');
        for (var k in pageCatalogueDatabase) {
            var normalizedK = k.toLowerCase().replace(/[^a-z0-9]/g, '');
            if (normalizedK === normalizedQuery || normalizedK.includes(normalizedQuery) || normalizedQuery.includes(normalizedK)) {
                return { matchedKey: k, data: pageCatalogueDatabase[k] };
            }
        }
        return null;
    }

    async function loadDynamicCatalogueView() {
        var urlParams = new URLSearchParams(window.location.search);
        var rawCat = urlParams.get('cat') || window.location.hash.replace('#', '') || 'Workstations';
        var rawSubcat = urlParams.get('subcat') || '';
        
        var queryCat = decodeURIComponent(rawCat).trim();
        var querySubcat = decodeURIComponent(rawSubcat).trim();
        var activeTarget = querySubcat ? querySubcat : queryCat;

        // 1. Fetch categories and products from live Supabase DB store
        var allCategories = (typeof CMSDataStore !== 'undefined') ? await CMSDataStore.get('categories') : [];
        var allProducts = (typeof CMSDataStore !== 'undefined') ? await CMSDataStore.get('products') : [];

        // Match category details if available
        var matchedCatObj = allCategories.find(function(c) {
            return (c.name && c.name.toLowerCase().trim() === queryCat.toLowerCase()) ||
                   (c.slug && c.slug.toLowerCase().trim() === queryCat.toLowerCase());
        });

        var catNameDisplay = activeTarget;
        var displayTitle = (querySubcat ? (queryCat + " — " + querySubcat) : (catNameDisplay + " Catalogue"));
        var displayDesc = matchedCatObj ? (matchedCatObj.description || "Explore line-wise models, custom configurations, and ergonomic workspace features.") : ("Official Vishista product catalogue for " + catNameDisplay + ".");

        document.getElementById('cataloguePageTitle').innerText = displayTitle;
        document.getElementById('cataloguePageDescription').innerText = displayDesc;
        document.getElementById('sectionHeading').innerText = catNameDisplay + " Models";

        // 2. Filter products matching this category or subcategory
        var normQuery = activeTarget.toLowerCase().replace(/[^a-z0-9]/g, '');
        var normCat = queryCat.toLowerCase().replace(/[^a-z0-9]/g, '');
        var matchedProducts = allProducts.filter(function(p) {
            if (p.is_visible === false) return false;

            var pSubcat = (p.subcategory || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            var pCatSlug = (p.category_slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            var pName = (p.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');

            if (querySubcat) {
                if (pSubcat === normQuery || pSubcat.includes(normQuery) || normQuery.includes(pSubcat)) return true;
                if (pName.includes(normQuery)) return true;
                return false;
            }

            if (pSubcat === normCat || pCatSlug === normCat) return true;
            if (pSubcat.includes(normCat) || normCat.includes(pSubcat)) return true;
            if (pCatSlug.includes(normCat) || normCat.includes(pCatSlug)) return true;
            if (pName.includes(normCat) || normCat.includes(pName)) return true;

            if (matchedCatObj && matchedCatObj.slug) {
                var cSlugNorm = matchedCatObj.slug.toLowerCase().replace(/[^a-z0-9]/g, '');
                if (pCatSlug === cSlugNorm || pCatSlug.includes(cSlugNorm)) return true;
            }
            return false;
        });

        // 3. Fallback to hardcoded seed dataset if query matches pre-seeded categories and no custom DB records found
        if (matchedProducts.length === 0 && typeof pageCatalogueDatabase !== 'undefined') {
            var resolvedSeed = resolveCatalogueData(activeTarget);
            if (resolvedSeed && resolvedSeed.data) {
                catNameDisplay = resolvedSeed.matchedKey;
                displayTitle = resolvedSeed.data.title;
                displayDesc = resolvedSeed.data.desc;
                document.getElementById('cataloguePageTitle').innerText = displayTitle;
                document.getElementById('cataloguePageDescription').innerText = displayDesc;
                document.getElementById('sectionHeading').innerText = catNameDisplay + " Models";

                matchedProducts = resolvedSeed.data.items.map(function(item) {
                    return {
                        name: item.name,
                        main_image: item.img,
                        description: item.specs,
                        subcategory: catNameDisplay,
                        price: "Enquire for Price"
                    };
                });
            }
        }

        document.getElementById('modelCountBadge').innerText = matchedProducts.length + " Models Available";

        var grid = document.getElementById('modelsGridContainer');
        grid.innerHTML = '';

        if (matchedProducts.length === 0) {
            grid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="card border-0 shadow-sm p-5 rounded-4 bg-white">
                        <div class="fs-1 text-danger mb-3">🪑</div>
                        <h3 class="fw-black text-dark mb-2">${catNameDisplay}</h3>
                        <p class="text-muted fs-6 mb-4">No products listed under this category yet. Click below to request a custom catalogue or instant quote.</p>
                        <div>
                            <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black px-4 py-3" onclick="openEnquiryModal('${catNameDisplay.replace(/'/g, "\\'")}')">Enquire For ${catNameDisplay} &rarr;</button>
                        </div>
                    </div>
                </div>`;
            return;
        }

        matchedProducts.forEach(function(prod) {
            var col = document.createElement('div');
            col.className = 'col-lg-4 col-md-6';
            var safeName = (prod.name || '').replace(/'/g, "\\'");
            var safeImg = (prod.main_image || prod.img || 'images/logo/logo-symbol.png').replace(/'/g, "\\'");
            var safeSpecs = (prod.description || prod.specs || '').replace(/'/g, "\\'").replace(/\n/g, ' ');
            var safePrice = (prod.price || 'Enquire for Price').replace(/'/g, "\\'");
            var safeCat = (prod.subcategory || catNameDisplay || 'Product').replace(/'/g, "\\'");

            col.innerHTML = `
                <div class="card border h-100 shadow-sm rounded-4 overflow-hidden bg-white product-card-hover">
                    <div class="position-relative overflow-hidden p-3 bg-light text-center border-bottom cursor-pointer" onclick="openProductDetailModal('${safeName}', '${safeImg}', '${safeSpecs}', '${safePrice}', '${safeCat}')">
                        <img src="${safeImg}" alt="${safeName}" class="img-fluid rounded-3" style="height: 250px; object-fit: contain; width: 100%;">
                        <span class="position-absolute top-0 end-0 m-3 badge bg-dark text-white opacity-75 fs-7">🔍 Quick View</span>
                    </div>
                    <div class="card-body p-4 d-flex flex-column">
                        <span class="badge bg-light text-danger border align-self-start mb-2 fs-7">${prod.subcategory || catNameDisplay}</span>
                        <h3 class="fw-black text-dark mb-2 cursor-pointer" style="font-size: 1.4rem !important; font-weight: 900 !important;" onclick="openProductDetailModal('${safeName}', '${safeImg}', '${safeSpecs}', '${safePrice}', '${safeCat}')">${prod.name}</h3>
                        <p class="text-secondary fw-semibold fs-6 mb-4 flex-grow-1" style="line-height: 1.6; color: #444444 !important;">${prod.description || prod.specs || ''}</p>
                        <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black py-3 mt-auto shadow-sm" style="border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none; font-size: 1.05rem !important;" onclick="openEnquiryModal('${safeName}')">Enquire For This Model &rarr;</button>
                    </div>
                </div>
            `;
            grid.appendChild(col);
        });

        document.getElementById('enquireSeriesHeaderBtn').onclick = function() {
            openEnquiryModal(catNameDisplay + ' Series Catalogue');
        };
        document.getElementById('enquireBottomBannerBtn').onclick = function() {
            openEnquiryModal(catNameDisplay + ' Corporate Bulk Quote');
        };
    }

    document.addEventListener('DOMContentLoaded', function() {
        loadDynamicCatalogueView();
    });
</script>

<?php include('footer.php'); ?>


