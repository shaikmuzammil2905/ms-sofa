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
                <span class="badge bg-danger text-uppercase px-3 py-2 fs-7 mb-1" id="modelCountBadge">Loading Models...</span>
                <h2 class="fw-black text-dark mb-0" id="sectionHeading" style="font-size: 2.2rem !important; font-weight: 900 !important; color: #111111 !important;">Product Models</h2>
            </div>
            <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black px-4 py-2 shadow-sm" id="enquireSeriesHeaderBtn" style="border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">Enquire For This Category &rarr;</button>
        </div>

        <!-- Dynamic Models Grid -->
        <div class="row g-4 mb-5" id="modelsGridContainer">
            <div class="col-12 text-center py-5">
                <div class="spinner-border text-danger" role="status" style="width: 3rem; height: 3rem;">
                    <span class="visually-hidden">Loading products...</span>
                </div>
            </div>
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
    // Fallback dictionary for static offline catalogue representation
    var pageCatalogueDatabase = {
        "Workstations": {
            title: "Modular Workstations Catalogue",
            desc: "Height Adjustable Series, Desking Series, and Panel Series designed for collaborative and ergonomic team layouts.",
            items: [
                { name: "Model HA-01 Sit-Stand Executive Desk", img: "images/categories/cat_workstations.jpg", specs: "Dual Motor / 120kg Load Capacity / Digital Memory Presets (650-1300mm transition height) / Anti-collision Sensor", subcategory: "Height Adjustable Series" },
                { name: "Model HA-02 Back-to-Back Bench System", img: "images/sections/hero-workspace.jpg", specs: "Central Cable Spine / Integrated Acoustic Divider Screen / Cable Snake Conduits / Dual Motor per Desk", subcategory: "Height Adjustable Series" },
                { name: "Model HA-03 Corner L-Desk Managerial", img: "images/sections/vishista_exclusive.jpg", specs: "3-Leg Motorized System / Side Credenza Storage Unit / Wireless Phone Charging Hub / Heavy Steel Base", subcategory: "Height Adjustable Series" },
                { name: "Model DS-Linear 4-Person Cluster", img: "images/categories/cat_workstations.jpg", specs: "Powder Coated Metal Legs / Fabric Privacy Screen / Base Raceway Wiring / Under-desk Cable Basket", subcategory: "Desking Series" },
                { name: "Model DS-Loop Leg 2-Person Bench", img: "images/sections/s-lookbook-2.jpg", specs: "Loop Frame Steel Legs / Prelam Wood Top / Center Screen Bracket / Wire Pass Grommets", subcategory: "Desking Series" },
                { name: "Model PS-60mm Tile Partition System", img: "images/categories/cat_workstations.jpg", specs: "60mm Panel Thickness / Fabric & Glass Tiles / Base Raceway Wiring Conduits / Whiteboard Tiles", subcategory: "Panel Series" }
            ]
        },
        "Tables": {
            title: "Corporate Tables Catalogue",
            desc: "Executive Cabin Tables, Conference Meeting Tables, Cafe Tables, and Modular Training Tables for modern corporate suites.",
            items: [
                { name: "Model CB-Executive Director Desk", img: "images/categories/cat_tables.png", specs: "Veneer Finish / Leatherette Writing Pad / Side Credenza Storage Unit / Cable Port Boxes", subcategory: "Cabin Tables" },
                { name: "Model CB-Managerial Side Return Desk", img: "images/categories/cat_tables.jpg", specs: "Prelam Wood Finish / Lockable Drawer Pedestal / Wire Pass Grommets / Modesty Panel", subcategory: "Cabin Tables" },
                { name: "Model MT-12 Seater Boardroom Table", img: "images/categories/cat_tables.png", specs: "Dual Pop-up Power Box / Boat Shape Top / Heavy Duty Steel Base Frame / Cable Spine Passage", subcategory: "Meeting Tables" },
                { name: "Model MT-8 Seater Conference Table", img: "images/categories/cat_tables.jpg", specs: "Beveled Edge Top / Integrated Wire Channel / Heavy Sturdy Base / Pop-up Audio-Visual Box", subcategory: "Meeting Tables" },
                { name: "Model CF-Bistro Round High Table", img: "images/sections/vishista_exclusive.jpg", specs: "Cast Iron Base / Antibacterial Compact Laminate Top / Chrome Ring Footrest", subcategory: "Cafe Tables" },
                { name: "Model CF-Square Breakout Cafe Table", img: "images/categories/cat_tables.png", specs: "Solid Wood Legs / Scratch Resistant Surface / 4-Seater Compact Design", subcategory: "Cafe Tables" },
                { name: "Model TR-Foldable Flip-Top Training Table", img: "images/archlabs/pages/page_43.png", specs: "Quick Flip Mechanism / Lockable PU Castor Wheels / Modesty Panel with Perforated Steel", subcategory: "Training Tables" },
                { name: "Model TR-Mobile Seminar Desk", img: "images/archlabs/pages/page_44.png", specs: "Nesting Modular Frame / Heavy-duty Steel Structure / Integrated Bag Hooks", subcategory: "Training Tables" }
            ]
        },
        "Storage": {
            title: "Storage Systems Catalogue",
            desc: "Prelam Storage Credenzas, Heavy-Duty Metal Filing Cabinets, High-Density Compactor Storage, and Personal Lockers.",
            items: [
                { name: "Model ST-Mobile Pedestal (3 Drawer)", img: "images/categories/cat_storage.png", specs: "Central Keyed Locking / Castor Wheels / Stationary Tray Included / Anti-tilt Mechanism", subcategory: "Prelam Storage" },
                { name: "Model ST-Executive Credenza Unit", img: "images/categories/cat_storage.jpg", specs: "Sliding Shutter Prelam Cabinet / Adjustable Internal Shelves / Soft Close Hinges", subcategory: "Prelam Storage" },
                { name: "Model ST-Steel Filing Cabinet (4 Drawer)", img: "images/categories/cat_storage.jpg", specs: "Heavy-Duty CRCA Steel / Full Extension Ball Bearing Runners / Anti-tilt Safety Lock", subcategory: "Metal Storage" },
                { name: "Model AC-Gas Spring Dual Monitor Arm", img: "images/categories/cat_workstations.jpg", specs: "VESA Mount / Quick Release Clamp / Integrated Cable Passage", subcategory: "Metal Storage" },
                { name: "Model CP-High Density Mobile Compactor System", img: "images/header/prd-nav-1.jpg", specs: "Mechanical Wheel Drive / Floor Rail Track / Anti-topple Safety Mechanism / High Density Storage", subcategory: "Compactor Storage" },
                { name: "Model LK-Multi Tier Employee Personal Locker", img: "images/header/prd-nav-2.jpg", specs: "Electronic Keypad / RFID Lock Support / Ventilation Louvers / Name Card Holder", subcategory: "Locker" }
            ]
        },
        "Seating": {
            title: "Ergonomic Office Seating Catalogue",
            desc: "High-performance mesh task chairs, executive leather armchairs, training room seats, and cafe breakout chairs.",
            items: [
                { name: "Veloz Ergonomic Mesh Chair", img: "images/archlabs/pages/page_4.png", specs: "Synchro-tilt mechanism, Breathable Korean Mesh, 3D Adjustable Armrests, Nylon Base", subcategory: "Mesh Chair" },
                { name: "Feather High-Back Task Chair", img: "images/archlabs/pages/page_5.png", specs: "Class-4 Gas Lift, Lumbar Support Slider, Multi-locking Recline, Diecast Aluminium Base", subcategory: "Mesh Chair" },
                { name: "Eiffel Executive Mesh Chair", img: "images/archlabs/pages/page_6.png", specs: "Integrated Headrest, 2D Lumbar Support, Synchro Mechanism, Heavy-Duty Nylon Base", subcategory: "Mesh Chair" },
                { name: "Boss High-Back Leather Director Chair", img: "images/archlabs/pages/page_36.png", specs: "Top-grain Genuine Leather, Padded Pillow Armrests, Knee-tilt Mechanism, Chrome Base", subcategory: "Leather Chair" },
                { name: "Apex Executive Leather Chair", img: "images/archlabs/pages/page_37.png", specs: "Diamond Stitch Leatherette, Polished Aluminium Base, Ergonomic Contour Back", subcategory: "Leather Chair" },
                { name: "Nexus Training Chair with Tablet", img: "images/archlabs/pages/page_43.png", specs: "Foldable ABS Writing Tablet, Under-seat Wire Storage Basket, Nesting Castor Frame", subcategory: "Training Chair" },
                { name: "Orbit Seminar Nesting Chair", img: "images/archlabs/pages/page_44.png", specs: "Flip-up Seat Cushion, High-density Molded Foam, Breathable Mesh Back, 4 Castors", subcategory: "Training Chair" },
                { name: "AC08 Crest Modern Cafe Chair", img: "images/archlabs/pages/page_57.png", specs: "Ergonomic Polypropylene Shell, Chrome Steel Sled Base, Stackable Design", subcategory: "Cafe Chair" },
                { name: "Bistro Wooden Dining Chair", img: "images/archlabs/pages/page_60.png", specs: "Solid Bentwood Frame, Stain Resistant Seat Cushion, Anti-scratch Glides", subcategory: "Cafe Chair" }
            ]
        },
        "Soft Seating": {
            title: "Soft Seating & Lounge Catalogue",
            desc: "Executive sofas, collaborative booth seating, geometrical pouffes, and occasional reception tables.",
            items: [
                { name: "Executive Lounge Armchairs", img: "images/categories/cat_soft_seating.jpg", specs: "Single-seat ergonomic lounge armchair in premium acoustic fabric with solid wood base.", subcategory: "Lounge" },
                { name: "2 & 3-Seater Executive Sofas", img: "images/collection/collection-1.jpg", specs: "Sleek multi-seater reception couch featuring high-resilience foam and stain-resistant upholstery.", subcategory: "Lounge" },
                { name: "Collaborative Booth Seating", img: "images/collection/collection-2.jpg", specs: "High-back sound dampening acoustic booth creating semi-private discussion nooks in open offices.", subcategory: "Collaborative" },
                { name: "Geometrical Pouffes & Ottomans", img: "images/sections/s-lookbook-1.jpg", specs: "Flexible circular, hexagonal, and square soft pouffes designed for breakout spaces.", subcategory: "Pouffe" },
                { name: "Occasional Center Tables", img: "images/categories/cat_tables.png", specs: "Designer low-height coffee table with veneered wood top matching lounge ensembles.", subcategory: "Pouffe" }
            ]
        },
        "Pods": {
            title: "Acoustic Work Pods Catalogue",
            desc: "Private Acoustic Phone Booths and Collaborative Meeting Pods engineered for sound isolation and distraction-free calls.",
            items: [
                { name: "Model PD-Solo Acoustic Telephone Booth", img: "images/categories/cat_pods.jpg", specs: "Sound Reduction 32dB / Silent Ventilation Fan / Motion Sensor LED / Power Hub", subcategory: "Single Phone Pod" },
                { name: "Model PD-4 Person Collaborative Meeting Pod", img: "images/sections/hero-workspace.jpg", specs: "Dual Acoustic Glass Walls / Integrated Sofa Seating / TV Mounting Bracket / 35dB Noise Reduction", subcategory: "Meeting Pod" }
            ]
        },
        "Carpets": {
            title: "Interface Carpet Tiles Catalogue",
            desc: "High-performance modular Interface Carpet Tiles designed for heavy traffic commercial office floors.",
            items: [
                { name: "Model CP-Acoustic Nylon Modular Tile", img: "images/categories/cat_carpets.jpg", specs: "50x50cm Tiles / Sound Dampening Backing / Stain Shield Treatment", subcategory: "Interface Carpets" }
            ]
        },
        "Outdoor": {
            title: "Outdoor Furniture & Terrace Seating",
            desc: "Weatherproof Loom Crafts outdoor lounge sets, patio tables, and terrace seating for corporate cafeterias.",
            items: [
                { name: "Model OD-Synthetic Wicker Terrace Lounge", img: "images/categories/cat_outdoor.jpg", specs: "UV-Resistant All-Weather Wicker / Water Repellent Cushions / Aluminium Frame", subcategory: "Outdoor Furniture" }
            ]
        },
        "Educational": {
            title: "Educational Solutions Catalogue",
            desc: "Ergonomic Classroom Desks, Library Furniture, Hostel Storage Units, and Heavy-Duty Auditorium Seating.",
            items: [
                { name: "Model ED-Single Student Ergonomic Desk", img: "images/categories/cat_education.png", specs: "Rounded Wood Edges / Metal Frame / Bag Hook / Under-desk Book Shelf", subcategory: "Classroom" },
                { name: "Model ED-Library Study Carrel & Reading Table", img: "images/categories/cat_educational.jpg", specs: "Acoustic Divider Partitions / Wire Management Conduit / Scratchproof High-pressure Laminate", subcategory: "Library" },
                { name: "Model ED-Heavy Duty Metal Bunk Bed & Locker", img: "images/sections/s-lookbook-1.jpg", specs: "CRCA Powder-Coated Steel / Guard Rails / Safety Ladder / Attached Storage Locker", subcategory: "Hostel" },
                { name: "Model ED-Tip-Up Cushioned Auditorium Chair", img: "images/categories/cat_seating.jpg", specs: "Automatic Gravity Tip-up Mechanism / Moulded Polyurethane Cushion / Foldable Writing Tablet", subcategory: "Auditorium" }
            ]
        }
    };

    function getActiveCategoryQuery() {
        var params = new URLSearchParams(window.location.search);
        var cat = params.get('category') || params.get('cat') || window.location.hash.replace('#', '') || 'workstations';
        var subcat = params.get('subcategory') || params.get('subcat') || '';
        return {
            category: decodeURIComponent(cat).trim(),
            subcategory: decodeURIComponent(subcat).trim()
        };
    }

    function isSubcatMatch(prodSubcat, querySubcat, prodName) {
        if (!querySubcat) return true;
        
        var qSub = (querySubcat || '').toLowerCase().trim();
        var pSub = (prodSubcat || '').toLowerCase().trim();
        var pName = (prodName || '').toLowerCase().trim();

        var normQ = qSub.replace(/[^a-z0-9]/g, '');
        var normP = pSub.replace(/[^a-z0-9]/g, '');

        // 1. If product has an explicit subcategory, evaluate STRICTLY on subcategory
        if (normP) {
            if (normP === normQ) return true;
            if (normP.includes(normQ) || normQ.includes(normP)) return true;

            // Canonical category-specific subcategory alias matches
            // Workstations
            if (normQ.includes('heightadjustable') && normP.includes('heightadjustable')) return true;
            if (normQ.includes('desking') && normP.includes('desking')) return true;
            if (normQ.includes('panel') && normP.includes('panel')) return true;

            // Tables
            if (normQ.includes('cabin') && normP.includes('cabin')) return true;
            if (normQ.includes('meeting') && normP.includes('meeting')) return true;
            if (normQ.includes('cafe') && normP.includes('cafe')) return true;
            if (normQ.includes('training') && normP.includes('training')) return true;

            // Storage
            if (normQ.includes('prelam') && normP.includes('prelam')) return true;
            if (normQ.includes('metal') && normP.includes('metal')) return true;
            if (normQ.includes('compactor') && normP.includes('compactor')) return true;
            if (normQ.includes('locker') && normP.includes('locker')) return true;

            // Seating
            if (normQ.includes('mesh') && normP.includes('mesh')) return true;
            if (normQ.includes('leather') && normP.includes('leather')) return true;
            if (normQ.includes('training') && normP.includes('training')) return true;
            if (normQ.includes('cafe') && normP.includes('cafe')) return true;

            // Soft Seating
            if (normQ.includes('lounge') && (normP.includes('lounge') || normP.includes('sofa'))) return true;
            if (normQ.includes('collaborative') && normP.includes('collaborative')) return true;
            if (normQ.includes('pouffe') && (normP.includes('pouffe') || normP.includes('ottoman') || normP.includes('table'))) return true;

            // Educational
            if (normQ.includes('classroom') && normP.includes('classroom')) return true;
            if (normQ.includes('library') && normP.includes('library')) return true;
            if (normQ.includes('hostel') && normP.includes('hostel')) return true;
            if (normQ.includes('auditorium') && normP.includes('auditorium')) return true;

            // When product has a subcategory set and it doesn't match above, DO NOT leak into other subcategories
            return false;
        }

        // 2. Only if product has NO subcategory at all, fallback to model name prefix or keyword
        var normName = pName.replace(/[^a-z0-9]/g, '');
        if (normQ.includes('heightadjustable') && (normName.includes('heightadjustable') || normName.includes('sitstand') || normName.includes('motorized') || normName.startsWith('modelha'))) return true;
        if (normQ.includes('desking') && (normName.includes('desking') || normName.startsWith('modelds'))) return true;
        if (normQ.includes('panel') && (normName.includes('panel') || normName.includes('partition') || normName.startsWith('modelps'))) return true;
        if (normQ.includes('cabin') && (normName.includes('cabin') || normName.startsWith('modelcb'))) return true;
        if (normQ.includes('meeting') && (normName.includes('meeting') || normName.includes('boardroom') || normName.startsWith('modelmt'))) return true;
        if (normQ.includes('cafe') && (normName.includes('cafe') || normName.startsWith('modelcf'))) return true;
        if (normQ.includes('training') && (normName.includes('training') || normName.startsWith('modeltr'))) return true;
        if (normQ.includes('prelam') && (normName.includes('prelam') || normName.includes('pedestal'))) return true;
        if (normQ.includes('compactor') && normName.includes('compactor')) return true;
        if (normQ.includes('locker') && normName.includes('locker')) return true;
        if (normQ.includes('mesh') && normName.includes('mesh')) return true;
        if (normQ.includes('leather') && normName.includes('leather')) return true;
        if (normQ.includes('classroom') && (normName.includes('classroom') || normName.includes('student'))) return true;
        if (normQ.includes('library') && normName.includes('library')) return true;
        if (normQ.includes('hostel') && (normName.includes('hostel') || normName.includes('bunk'))) return true;
        if (normQ.includes('auditorium') && normName.includes('auditorium')) return true;

        return false;
    }

    async function loadDynamicCatalogueView(categoryParam, subcatParam) {
        var query = (categoryParam !== undefined) ? { category: categoryParam, subcategory: subcatParam || '' } : getActiveCategoryQuery();
        var queryCat = query.category || 'workstations';
        var querySubcat = query.subcategory || '';

        var normCat = queryCat.toLowerCase().replace(/[^a-z0-9]/g, '');
        var normSubcat = querySubcat ? querySubcat.toLowerCase().replace(/[^a-z0-9]/g, '') : '';

        // 1. Fetch categories and products from live Supabase DB store
        var allCategories = (typeof CMSDataStore !== 'undefined') ? await CMSDataStore.get('categories') : [];
        var allProducts = (typeof CMSDataStore !== 'undefined') ? await CMSDataStore.get('products') : [];

        // 2. Find matched category object from live Supabase (Exact matching prioritized)
        var matchedCat = allCategories.find(function(c) {
            if (!c) return false;
            var cSlugNorm = (c.slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            var cNameNorm = (c.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');

            return cSlugNorm === normCat ||
                   cNameNorm === normCat ||
                   cSlugNorm === normCat + 's' ||
                   cSlugNorm === normCat.replace(/s$/, '') ||
                   cNameNorm === normCat + 's' ||
                   cNameNorm === normCat.replace(/s$/, '');
        });

        if (!matchedCat) {
            matchedCat = allCategories.find(function(c) {
                if (!c) return false;
                var cSlugNorm = (c.slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
                var cNameNorm = (c.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
                return cSlugNorm.startsWith(normCat) || normCat.startsWith(cSlugNorm) ||
                       cNameNorm.startsWith(normCat) || normCat.startsWith(cNameNorm) ||
                       cSlugNorm.includes(normCat) || normCat.includes(cSlugNorm);
            });
        }

        var resolvedCatSlug = matchedCat ? (matchedCat.slug || normCat) : normCat;
        var resolvedCatName = matchedCat ? (matchedCat.name || queryCat) : (queryCat.charAt(0).toUpperCase() + queryCat.slice(1));
        var resolvedCatDesc = (matchedCat && matchedCat.description) ? matchedCat.description : ("Explore our " + resolvedCatName + " collection engineered for modern corporate workspaces.");

        // 3. Update Title, Heading, Description
        var pageTitle = querySubcat ? (resolvedCatName + " — " + querySubcat) : resolvedCatName;
        document.title = pageTitle + " - Vishista Office Solutions";

        var titleEl = document.getElementById('cataloguePageTitle');
        if (titleEl) titleEl.innerText = querySubcat ? (resolvedCatName + ": " + querySubcat) : (resolvedCatName + " Catalogue");

        var descEl = document.getElementById('cataloguePageDescription');
        if (descEl) descEl.innerText = resolvedCatDesc;

        var headEl = document.getElementById('sectionHeading');
        if (headEl) {
            if (querySubcat) {
                headEl.innerHTML = `${querySubcat} Models <a href="products.html?category=${encodeURIComponent(resolvedCatSlug)}" class="badge bg-light text-danger border ms-2 fs-7 align-middle text-decoration-none fw-bold">&times; View All ${resolvedCatName}</a>`;
            } else {
                headEl.innerText = resolvedCatName + " Models";
            }
        }

        // 4. Strict Supabase Product Filtering
        var targetSlugNorm = (resolvedCatSlug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        var targetNameNorm = (resolvedCatName || '').toLowerCase().replace(/[^a-z0-9]/g, '');

        var matchedProducts = allProducts.filter(function(p) {
            if (p.is_visible === false || p.is_published === false) return false;

            var pCatSlug = (p.category_slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            var pCatName = (p.category || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            var pSubcat = (p.subcategory || '');
            var pName = (p.name || '');

            // Category check
            var matchCategory = false;
            if (targetSlugNorm || targetNameNorm) {
                var matchSlug = (pCatSlug === targetSlugNorm) ||
                                (pCatSlug === targetSlugNorm + 's') ||
                                (pCatSlug === targetSlugNorm.replace(/s$/, '')) ||
                                (pCatSlug && targetSlugNorm && (pCatSlug.includes(targetSlugNorm) || targetSlugNorm.includes(pCatSlug)));

                var matchName = (pCatName === targetNameNorm) ||
                                (pCatName === targetNameNorm + 's') ||
                                (pCatName === targetNameNorm.replace(/s$/, '')) ||
                                (pCatName && targetNameNorm && (pCatName.includes(targetNameNorm) || targetNameNorm.includes(pCatName)));

                if ((targetSlugNorm === 'seating' || targetNameNorm === 'seating') && (pCatSlug.includes('seating') || pCatSlug.includes('archlabs'))) {
                    matchSlug = true;
                }

                matchCategory = matchSlug || matchName;
            } else {
                matchCategory = true;
            }

            // Subcategory check: If querySubcat is set, product MUST match subcategory
            if (querySubcat) {
                var matchesSub = isSubcatMatch(pSubcat, querySubcat, pName);
                return matchesSub && (matchCategory || !pCatSlug);
            }

            return matchCategory;
        });

        // 5. Fallback if offline or empty
        if (matchedProducts.length === 0 && typeof pageCatalogueDatabase !== 'undefined') {
            for (var key in pageCatalogueDatabase) {
                var kNorm = key.toLowerCase().replace(/[^a-z0-9]/g, '');
                var isCatMatch = (kNorm === targetSlugNorm || kNorm === targetNameNorm || kNorm + 's' === targetSlugNorm || kNorm === targetSlugNorm + 's' || targetSlugNorm.includes(kNorm) || kNorm.includes(targetSlugNorm));
                
                if (isCatMatch || (targetSlugNorm.includes('seating') && kNorm.includes('seating'))) {
                    var seedEntry = pageCatalogueDatabase[key];
                    var items = seedEntry.items || [];
                    if (querySubcat) {
                        items = items.filter(function(it) {
                            return isSubcatMatch(it.subcategory, querySubcat, it.name);
                        });
                    }
                    matchedProducts = items.map(function(it) {
                        return {
                            name: it.name,
                            main_image: it.img,
                            description: it.specs,
                            subcategory: it.subcategory || resolvedCatName,
                            category_slug: resolvedCatSlug,
                            price: "Enquire for Price"
                        };
                    });
                    break;
                }
            }
        }

        // 6. Update Model Count Badge
        var countBadge = document.getElementById('modelCountBadge');
        if (countBadge) {
            countBadge.innerText = matchedProducts.length + " Models Available";
        }

        // 7. Render Products Grid
        renderCatalogueProductsGrid(matchedProducts, querySubcat || resolvedCatName);

        // 8. Update Enquiry Actions
        var headerBtn = document.getElementById('enquireSeriesHeaderBtn');
        if (headerBtn) {
            headerBtn.onclick = function() {
                openEnquiryModal((querySubcat ? (resolvedCatName + ' - ' + querySubcat) : resolvedCatName) + ' Catalogue');
            };
        }

        var bannerBtn = document.getElementById('enquireBottomBannerBtn');
        if (bannerBtn) {
            bannerBtn.onclick = function() {
                openEnquiryModal((querySubcat ? (resolvedCatName + ' - ' + querySubcat) : resolvedCatName) + ' Corporate Quote');
            };
        }
    }

    function renderCatalogueProductsGrid(products, categoryName) {
        var grid = document.getElementById('modelsGridContainer');
        if (!grid) return;
        grid.innerHTML = '';

        if (!products || products.length === 0) {
            grid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="card border-0 shadow-sm p-5 rounded-4 bg-white">
                        <div class="fs-1 text-danger mb-3">🪑</div>
                        <h3 class="fw-black text-dark mb-2">${categoryName}</h3>
                        <p class="text-muted fs-6 mb-4">No products currently listed under this category. Click below to request a custom catalogue or instant quote.</p>
                        <div>
                            <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black px-4 py-3" onclick="openEnquiryModal('${categoryName.replace(/'/g, "\\'")}')">Enquire For ${categoryName} &rarr;</button>
                        </div>
                    </div>
                </div>`;
            return;
        }

        products.forEach(function(prod) {
            var col = document.createElement('div');
            col.className = 'col-lg-4 col-md-6';
            var safeName = (prod.name || '').replace(/'/g, "\\'");
            var safeImg = (prod.main_image || prod.img || 'images/logo/logo-symbol.png').replace(/'/g, "\\'");
            var safeSpecs = (prod.description || prod.specs || '').replace(/'/g, "\\'").replace(/\n/g, ' ');
            var safePrice = (prod.price || 'Enquire for Price').replace(/'/g, "\\'");
            var safeCat = (prod.subcategory || categoryName || 'Product').replace(/'/g, "\\'");

            col.innerHTML = `
                <div class="card border h-100 shadow-sm rounded-4 overflow-hidden bg-white product-card-hover">
                    <div class="position-relative overflow-hidden p-3 bg-light text-center border-bottom cursor-pointer" onclick="openProductDetailModal('${safeName}', '${safeImg}', '${safeSpecs}', '${safePrice}', '${safeCat}')">
                        <img src="${safeImg}" alt="${prod.name}" class="img-fluid rounded-3" style="height: 250px; object-fit: contain; width: 100%;">
                        <span class="position-absolute top-0 end-0 m-3 badge bg-dark text-white opacity-75 fs-7">🔍 Quick View</span>
                    </div>
                    <div class="card-body p-4 d-flex flex-column">
                        <span class="badge bg-light text-danger border align-self-start mb-2 fs-7">${prod.subcategory || categoryName}</span>
                        <h3 class="fw-black text-dark mb-2 cursor-pointer" style="font-size: 1.4rem !important; font-weight: 900 !important;" onclick="openProductDetailModal('${safeName}', '${safeImg}', '${safeSpecs}', '${safePrice}', '${safeCat}')">${prod.name}</h3>
                        <p class="text-secondary fw-semibold fs-6 mb-4 flex-grow-1" style="line-height: 1.6; color: #444444 !important;">${prod.description || prod.specs || ''}</p>
                        <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black py-3 mt-auto shadow-sm" style="border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none; font-size: 1.05rem !important;" onclick="openEnquiryModal('${safeName}')">Enquire For This Model &rarr;</button>
                    </div>
                </div>
            `;
            grid.appendChild(col);
        });
    }

    window.addEventListener('popstate', function() {
        loadDynamicCatalogueView();
    });

    document.addEventListener('DOMContentLoaded', function() {
        loadDynamicCatalogueView();
    });
</script>

<?php include('footer.php'); ?>
