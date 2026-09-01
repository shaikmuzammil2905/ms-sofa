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

<!-- Category Filter Navigation Jump Bar -->
<div class="bg-white border-bottom py-3 category-jump-bar sticky-top" style="background-color: #ffffff !important; border-bottom: 3px solid #d32f2f !important; overflow-x: auto; z-index: 100;">
    <div class="tf-container">
        <div class="d-flex align-items-center gap-2 text-nowrap py-1" id="catalogueJumpCategoryList">
            <span class="fw-black text-dark me-2 flex-shrink-0" style="font-size: 1.1rem !important; font-weight: 900 !important; letter-spacing: 0.5px; color: #000000 !important;">Jump to Category:</span>
            <a href="products.html?category=workstations" class="btn rounded-pill px-3 py-2 text-uppercase category-jump-btn flex-shrink-0" data-cat-slug="workstations">Workstations</a>
            <a href="products.html?category=tables" class="btn rounded-pill px-3 py-2 text-uppercase category-jump-btn flex-shrink-0" data-cat-slug="tables">Tables</a>
            <a href="products.html?category=storage" class="btn rounded-pill px-3 py-2 text-uppercase category-jump-btn flex-shrink-0" data-cat-slug="storage">Storage</a>
            <a href="products.html?category=seating" class="btn rounded-pill px-3 py-2 text-uppercase category-jump-btn flex-shrink-0" data-cat-slug="seating">Seating</a>
            <a href="products.html?category=soft-seating" class="btn rounded-pill px-3 py-2 text-uppercase category-jump-btn flex-shrink-0" data-cat-slug="soft-seating">Soft Seating</a>
            <a href="products.html?category=pods" class="btn rounded-pill px-3 py-2 text-uppercase category-jump-btn flex-shrink-0" data-cat-slug="pods">Pods</a>
            <a href="products.html?category=carpets" class="btn rounded-pill px-3 py-2 text-uppercase category-jump-btn flex-shrink-0" data-cat-slug="carpets">Carpets</a>
            <a href="products.html?category=outdoor" class="btn rounded-pill px-3 py-2 text-uppercase category-jump-btn flex-shrink-0" data-cat-slug="outdoor">Outdoor</a>
            <a href="products.html?category=educational" class="btn rounded-pill px-3 py-2 text-uppercase category-jump-btn flex-shrink-0" data-cat-slug="educational">Educational</a>
        </div>
    </div>
</div>

<style>
    .category-jump-bar {
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        box-shadow: 0 3px 12px rgba(0,0,0,0.08);
    }
    .category-jump-bar::-webkit-scrollbar {
        display: none;
    }
    .category-jump-btn {
        font-size: 1rem !important;
        font-weight: 800 !important;
        border: 2px solid #000000 !important;
        color: #000000 !important;
        background-color: #ffffff !important;
        transition: all 0.2s ease-in-out !important;
        white-space: nowrap;
        text-decoration: none !important;
    }
    .category-jump-btn:hover,
    .category-jump-btn:focus,
    .category-jump-btn:active,
    .category-jump-btn.active {
        background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%) !important;
        color: #ffffff !important;
        border-color: #b71c1c !important;
        box-shadow: 0 4px 15px rgba(211, 47, 47, 0.3) !important;
        transform: translateY(-1px) !important;
    }
    @media (max-width: 768px) {
        .category-jump-btn {
            font-size: 0.85rem !important;
            padding: 6px 14px !important;
        }
    }
</style>

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
                { name: "Model MT-12 Seater Boardroom Table", img: "images/categories/cat_tables.png", specs: "Dual Pop-up Power Box / Boat Shape Top / Heavy Duty Steel Base Frame / Cable Spine Passage", subcategory: "Meeting Tables" }
            ]
        },
        "Storage": {
            title: "Storage Systems Catalogue",
            desc: "Prelam Storage Credenzas, Heavy-Duty Metal Filing Cabinets, High-Density Compactor Storage, and Personal Lockers.",
            items: [
                { name: "Model ST-Mobile Pedestal (3 Drawer)", img: "images/categories/cat_storage.png", specs: "Central Keyed Locking / Castor Wheels / Stationary Tray Included / Anti-tilt Mechanism", subcategory: "Prelam Storage" },
                { name: "Model AC-Gas Spring Dual Monitor Arm", img: "images/categories/cat_workstations.jpg", specs: "VESA Mount / Quick Release Clamp / Integrated Cable Passage", subcategory: "Metal Storage" }
            ]
        },
        "Pods": {
            title: "Acoustic Work Pods Catalogue",
            desc: "Private Acoustic Phone Booths and Collaborative Meeting Pods engineered for sound isolation and distraction-free calls.",
            items: [
                { name: "Model PD-Solo Acoustic Telephone Booth", img: "images/categories/cat_pods.jpg", specs: "Sound Reduction 32dB / Silent Ventilation Fan / Motion Sensor LED / Power Hub", subcategory: "Acoustic Pods" }
            ]
        },
        "Carpets": {
            title: "Interface Carpet Tiles Catalogue",
            desc: "High-performance modular Interface Carpet Tiles designed for heavy traffic commercial office floors.",
            items: [
                { name: "Model CP-Acoustic Nylon Modular Tile", img: "images/categories/cat_carpets.jpg", specs: "50x50cm Tiles / Sound Dampening Backing / Stain Shield Treatment", subcategory: "Carpet Flooring" }
            ]
        },
        "Outdoor": {
            title: "Outdoor Furniture & Terrace Seating",
            desc: "Weatherproof Loom Crafts outdoor lounge sets, patio tables, and terrace seating for corporate cafeterias.",
            items: [
                { name: "Model OD-Synthetic Wicker Terrace Lounge", img: "images/categories/cat_outdoor.jpg", specs: "UV-Resistant All-Weather Wicker / Water Repellent Cushions / Aluminium Frame", subcategory: "Terrace & Patio" }
            ]
        },
        "Educational": {
            title: "Educational Solutions Catalogue",
            desc: "Ergonomic Classroom Desks, Library Furniture, Hostel Storage Units, and Heavy-Duty Auditorium Seating.",
            items: [
                { name: "Model ED-Single Student Ergonomic Desk", img: "images/categories/cat_education.png", specs: "Rounded Wood Edges / Metal Frame / Bag Hook / Under-desk Book Shelf", subcategory: "Classroom" }
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
                       cNameNorm.startsWith(normCat) || normCat.startsWith(cNameNorm);
            });
        }

        var resolvedCatSlug = matchedCat ? (matchedCat.slug || normCat) : normCat;
        var resolvedCatName = matchedCat ? (matchedCat.name || queryCat) : (queryCat.charAt(0).toUpperCase() + queryCat.slice(1));
        var resolvedCatDesc = (matchedCat && matchedCat.description) ? matchedCat.description : ("Explore our " + resolvedCatName + " collection engineered for modern corporate workspaces.");

        // 3. Update Title, Heading, Description
        var pageTitle = querySubcat ? (resolvedCatName + " — " + querySubcat) : resolvedCatName;
        document.title = pageTitle + " - Vishista Office Solutions";

        var titleEl = document.getElementById('cataloguePageTitle');
        if (titleEl) titleEl.innerText = pageTitle + (querySubcat ? "" : " Catalogue");

        var descEl = document.getElementById('cataloguePageDescription');
        if (descEl) descEl.innerText = resolvedCatDesc;

        var headEl = document.getElementById('sectionHeading');
        if (headEl) headEl.innerText = resolvedCatName + " Models";

        // 4. Strict Supabase Product Filtering
        var targetSlugNorm = (resolvedCatSlug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        var targetNameNorm = (resolvedCatName || '').toLowerCase().replace(/[^a-z0-9]/g, '');

        var matchedProducts = allProducts.filter(function(p) {
            if (p.is_visible === false || p.is_published === false) return false;

            var pCatSlug = (p.category_slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            var pCatName = (p.category || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            var pSubcat = (p.subcategory || '').toLowerCase().replace(/[^a-z0-9]/g, '');

            if (querySubcat && normSubcat) {
                var matchesSub = (pSubcat === normSubcat || pSubcat.includes(normSubcat) || normSubcat.includes(pSubcat));
                if (matchesSub) return true;
            }

            var matchSlug = (pCatSlug === targetSlugNorm) ||
                            (pCatSlug === targetSlugNorm + 's') ||
                            (pCatSlug === targetSlugNorm.replace(/s$/, ''));

            var matchName = (pCatName === targetNameNorm) ||
                            (pCatName === targetNameNorm + 's') ||
                            (pCatName === targetNameNorm.replace(/s$/, ''));

            return matchSlug || matchName;
        });

        // 5. Fallback if offline or empty
        if (matchedProducts.length === 0 && typeof pageCatalogueDatabase !== 'undefined') {
            for (var key in pageCatalogueDatabase) {
                var kNorm = key.toLowerCase().replace(/[^a-z0-9]/g, '');
                if (kNorm === targetSlugNorm || kNorm === targetNameNorm || kNorm + 's' === targetSlugNorm || kNorm === targetSlugNorm + 's') {
                    var seedEntry = pageCatalogueDatabase[key];
                    matchedProducts = seedEntry.items.map(function(it) {
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

        // 7. Render Jump Category Bar with active state
        renderCatalogueJumpBar(allCategories, resolvedCatSlug, resolvedCatName);

        // 8. Render Products Grid
        renderCatalogueProductsGrid(matchedProducts, resolvedCatName);

        // 9. Update Enquiry Actions
        var headerBtn = document.getElementById('enquireSeriesHeaderBtn');
        if (headerBtn) {
            headerBtn.onclick = function() {
                openEnquiryModal(resolvedCatName + ' Catalogue');
            };
        }

        var bannerBtn = document.getElementById('enquireBottomBannerBtn');
        if (bannerBtn) {
            bannerBtn.onclick = function() {
                openEnquiryModal(resolvedCatName + ' Corporate Quote');
            };
        }
    }

    function renderCatalogueJumpBar(categories, activeSlug, activeName) {
        var jumpContainer = document.getElementById('catalogueJumpCategoryList');
        if (!jumpContainer) return;

        var defaultCategories = [
            { name: 'Workstations', slug: 'workstations' },
            { name: 'Tables', slug: 'tables' },
            { name: 'Storage', slug: 'storage' },
            { name: 'Seating', slug: 'seating' },
            { name: 'Soft Seating', slug: 'soft-seating' },
            { name: 'Pods', slug: 'pods' },
            { name: 'Carpets', slug: 'carpets' },
            { name: 'Outdoor', slug: 'outdoor' },
            { name: 'Educational', slug: 'educational' }
        ];

        var catsToUse = (categories && categories.length > 0) ? categories.filter(function(c) { return c.is_visible !== false; }) : defaultCategories;
        var normActive = (activeSlug || '').toLowerCase().replace(/[^a-z0-9]/g, '');

        var html = '<span class="fw-black text-dark me-2 flex-shrink-0" style="font-size: 1.1rem !important; font-weight: 900 !important; letter-spacing: 0.5px; color: #000000 !important;">Jump to Category:</span>';

        catsToUse.forEach(function(cat) {
            var cSlug = cat.slug || cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            var cName = cat.name;
            var normCat = cSlug.toLowerCase().replace(/[^a-z0-9]/g, '');
            var isActive = (normCat === normActive) || (normCat + 's' === normActive) || (normCat === normActive + 's');
            var activeClass = isActive ? ' active' : '';

            html += '<a href="products.html?category=' + encodeURIComponent(cSlug) + '" class="btn rounded-pill px-3 py-2 text-uppercase category-jump-btn flex-shrink-0' + activeClass + '" data-cat-slug="' + cSlug + '">' + cName + '</a>';
        });

        jumpContainer.innerHTML = html;

        // Attach click listeners to handle smooth transition & browser history
        jumpContainer.querySelectorAll('.category-jump-btn').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                var catSlug = this.getAttribute('data-cat-slug');
                if (catSlug) {
                    e.preventDefault();
                    var newUrl = 'products.html?category=' + encodeURIComponent(catSlug);
                    window.history.pushState({ category: catSlug }, '', newUrl);
                    loadDynamicCatalogueView(catSlug, '');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
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
