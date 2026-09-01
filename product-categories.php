<?php include('header.php'); ?>

<!-- Page Header Banner -->
<section class="py-5 bg-dark text-white text-center position-relative" style="background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('images/sections/hero-workspace.jpg') center/cover no-repeat;">
    <div class="tf-container py-4">
        <div class="mb-3 d-flex justify-content-center align-items-center gap-2">
            <span id="categoryPageBadge" class="badge bg-danger text-uppercase px-3 py-2 fw-black tracking-widest" style="font-size: 0.95rem !important;">Corporate Product Catalogue</span>
        </div>
        <h1 id="categoryPageMainTitle" class="display-4 fw-black text-white mt-2 mb-3" style="font-weight: 900 !important;">Workspace Furniture &amp; Solutions</h1>
        <p id="categoryPageSubtitle" class="text-white mx-auto fw-bold mb-4" style="max-width: 850px; font-size: 1.25rem !important; line-height: 1.7; color: #ffffff !important; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
            Explore our extensive catalogue of modular workstations, executive desks, ergonomic mesh chairs, acoustic pods, soft seating, carpets, and turnkey systems.
        </p>
        <div class="d-flex justify-content-center align-items-center gap-3">
            <a href="index.html" class="btn btn-outline-light rounded-pill px-4 py-2 fw-bold text-uppercase fs-7 shadow-sm">
                &larr; Back to Home
            </a>
            <button type="button" id="viewAllCategoriesBtn" class="btn btn-light text-danger rounded-pill px-4 py-2 fw-bold text-uppercase fs-7 shadow-sm" onclick="selectCategoryFilter('all')" style="display: none;">
                View All Categories
            </button>
        </div>
    </div>
</section>

<!-- Interactive Horizontally Scrollable Categories Bar -->
<div class="category-scroll-nav-wrapper py-3 bg-white border-bottom shadow-sm">
    <div class="tf-container">
        <div class="d-flex align-items-center gap-2">
            <!-- Pinned Fixed Left Controls (Category label + All Categories button) -->
            <div class="d-flex align-items-center gap-2 flex-shrink-0 pe-2 border-end border-2" style="border-color: #e5e7eb !important;">
                <span class="fw-bold text-dark flex-shrink-0 d-none d-md-inline" style="font-size: 0.95rem; letter-spacing: 0.5px; color: #111111;">Category:</span>
                <button type="button" class="btn category-scroll-pill active flex-shrink-0" onclick="selectCategoryFilter('all')">
                    All Categories
                </button>
            </div>

            <!-- Horizontally Scrollable Remaining Categories Container -->
            <div class="category-scroll-container d-flex align-items-center gap-2 overflow-auto py-1 flex-grow-1 ps-1">
                <button type="button" class="btn category-scroll-pill flex-shrink-0" onclick="selectCategoryFilter('workstations')">
                    Workstations
                </button>
                <button type="button" class="btn category-scroll-pill flex-shrink-0" onclick="selectCategoryFilter('tables')">
                    Tables
                </button>
                <button type="button" class="btn category-scroll-pill flex-shrink-0" onclick="selectCategoryFilter('storage')">
                    Storage Systems
                </button>
                <button type="button" class="btn category-scroll-pill flex-shrink-0" onclick="selectCategoryFilter('seating')">
                    Seating
                </button>
                <button type="button" class="btn category-scroll-pill flex-shrink-0" onclick="selectCategoryFilter('soft-seating')">
                    Soft Seating
                </button>
                <button type="button" class="btn category-scroll-pill flex-shrink-0" onclick="selectCategoryFilter('pods')">
                    Pods
                </button>
                <button type="button" class="btn category-scroll-pill flex-shrink-0" onclick="selectCategoryFilter('carpets')">
                    Carpets
                </button>
                <button type="button" class="btn category-scroll-pill flex-shrink-0" onclick="selectCategoryFilter('outdoor')">
                    Outdoor
                </button>
                <button type="button" class="btn category-scroll-pill flex-shrink-0" onclick="selectCategoryFilter('educational')">
                    Educational
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    :root {
        --site-header-height: 60px;
    }
    @media (max-width: 991px) {
        :root {
            --site-header-height: 52px;
        }
    }
    @media (max-width: 576px) {
        :root {
            --site-header-height: 48px;
        }
    }

    .category-scroll-nav-wrapper {
        position: sticky !important;
        top: var(--site-header-height, 60px) !important;
        z-index: 95 !important;
        background-color: #ffffff !important;
        border-bottom: 2px solid #e5e7eb !important;
        margin-top: 0 !important;
    }
    .category-scroll-container {
        scrollbar-width: none;
        -ms-overflow-style: none;
        -webkit-overflow-scrolling: touch;
    }
    .category-scroll-container::-webkit-scrollbar {
        display: none;
    }
    .category-scroll-pill {
        font-family: 'Inter', sans-serif !important;
        font-size: 14.5px !important;
        font-weight: 700 !important;
        padding: 8px 22px !important;
        border-radius: 50px !important;
        border: 1.5px solid #d1d5db !important;
        color: #1f2937 !important;
        background-color: #f9fafb !important;
        transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
        white-space: nowrap !important;
        cursor: pointer !important;
    }
    .category-scroll-pill:hover {
        background-color: #fee2e2 !important;
        color: #d32f2f !important;
        border-color: #fca5a5 !important;
        transform: translateY(-1px);
    }
    .category-scroll-pill.active {
        background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%) !important;
        color: #ffffff !important;
        border-color: #b71c1c !important;
        box-shadow: 0 4px 14px rgba(211, 47, 47, 0.35) !important;
        transform: translateY(-1px);
    }
    @media (max-width: 768px) {
        .category-scroll-nav-wrapper {
            top: var(--site-header-height, 50px) !important;
            padding-top: 6px !important;
            padding-bottom: 6px !important;
        }
        .category-scroll-pill {
            font-size: 13px !important;
            padding: 6px 16px !important;
        }
    }
    @media (max-width: 576px) {
        .category-scroll-nav-wrapper {
            top: var(--site-header-height, 48px) !important;
            padding-top: 5px !important;
            padding-bottom: 5px !important;
        }
        .category-scroll-pill {
            font-size: 12px !important;
            padding: 5px 12px !important;
        }
    }

    /* Category Header & Responsive View All Button */
    .category-header-flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 1.25rem;
        padding-bottom: 0.5rem;
        border-bottom: 3px solid #d32f2f;
    }
    .category-title-text {
        font-family: 'Inter', sans-serif !important;
        font-weight: 900 !important;
        font-size: 2.2rem !important;
        color: #111111 !important;
        margin-bottom: 0 !important;
        line-height: 1.2 !important;
    }
    .category-view-all-btn {
        font-family: 'Inter', sans-serif !important;
        font-size: 0.95rem !important;
        font-weight: 800 !important;
        text-transform: uppercase !important;
        padding: 8px 20px !important;
        border-radius: 6px !important;
        white-space: nowrap !important;
        flex-shrink: 0 !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 4px !important;
        background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%) !important;
        color: #ffffff !important;
        border: none !important;
        box-shadow: 0 4px 12px rgba(211, 47, 47, 0.25) !important;
        text-decoration: none !important;
        transition: all 0.2s ease !important;
    }
    .category-view-all-btn:hover {
        background: linear-gradient(135deg, #b71c1c 0%, #991212 100%) !important;
        transform: translateY(-1px);
        color: #ffffff !important;
        box-shadow: 0 6px 16px rgba(211, 47, 47, 0.35) !important;
    }

    @media (max-width: 768px) {
        .category-title-text {
            font-size: 1.55rem !important;
        }
        .category-view-all-btn {
            font-size: 0.78rem !important;
            padding: 6px 12px !important;
            letter-spacing: 0.2px !important;
            border-radius: 5px !important;
        }
    }

    @media (max-width: 480px) {
        .category-title-text {
            font-size: 1.35rem !important;
        }
        .category-view-all-btn {
            font-size: 0.72rem !important;
            padding: 5px 10px !important;
            letter-spacing: 0px !important;
        }
    }
</style>

<!-- Main Catalogue Container -->
<div class="py-5 bg-white">
    <div class="tf-container">

        <!-- VISHISTA EXCLUSIVE COLLECTION BANNER -->
        <div id="exclusiveCollectionBanner" class="bg-dark text-white rounded-4 p-4 p-md-5 mb-5 shadow-lg position-relative overflow-hidden" style="background: linear-gradient(135deg, #111111 0%, #262626 100%); border: 1px solid rgba(255,255,255,0.1);">
            <div class="row align-items-center g-4">
                <div class="col-lg-6">
                    <h2 class="display-3 fw-black text-white mb-4" style="font-weight: 900 !important; font-size: 3rem !important; letter-spacing: -0.5px; text-shadow: 0 4px 15px rgba(0,0,0,0.5);">Vishista Exclusive Collection</h2>
                    <div class="pt-2">
                        <a href="archlabs-catalogue.html" target="_blank" class="btn btn-danger btn-lg px-5 py-3 text-uppercase fw-black shadow-lg" style="border-radius: 8px; font-size: 1.2rem !important; letter-spacing: 1px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">EXPLORE MORE &rarr;</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="rounded-4 overflow-hidden shadow-lg border border-secondary border-opacity-25">
                        <img src="images/sections/vishista_exclusive.jpg" alt="Vishista Exclusive Collection" class="img-fluid w-100" style="height: 320px; object-fit: cover; display: block;">
                    </div>
                </div>
            </div>
        </div>

        <!-- 1. WORKSTATIONS -->
        <section id="workstations" class="category-section-block mb-5 pt-4" data-cat-slug="workstations">
            <div class="category-header-flex">
                <div>
                    <h2 class="category-title-text">Workstations</h2>
                </div>
                <a href="products.html?category=workstations" class="category-view-all-btn">View All Workstations &rarr;</a>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=workstations&subcat=Height%20Adjustable%20Series"><img src="images/categories/cat_workstations.jpg" alt="Height Adjustable Series" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">1. Height Adjustable Series</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Motorized sit-to-stand desks engineered for active workplace wellness, smooth height transitions, and integrated wire management.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=workstations&subcat=Height%20Adjustable%20Series" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=workstations&subcat=Desking%20Series"><img src="images/sections/hero-workspace.jpg" alt="Desking Series" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">2. Desking Series</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Modular open-plan linear and back-to-back desking systems with minimalist leg profiles and customizable privacy screens.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=workstations&subcat=Desking%20Series" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=workstations&subcat=Panel%20Series"><img src="images/sections/s-lookbook-2.jpg" alt="Panel Series" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">3. Panel Series</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Acoustic panel-based workstation partitions providing high acoustic privacy, raceway power conduits, and modular storage integration.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=workstations&subcat=Panel%20Series" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2. TABLES -->
        <section id="tables" class="category-section-block mb-5 pt-4 border-top" data-cat-slug="tables">
            <div class="category-header-flex">
                <div>
                    <h2 class="category-title-text">Tables</h2>
                </div>
                <a href="products.html?category=tables" class="category-view-all-btn">View All Tables &rarr;</a>
            </div>
            <div class="row g-4">
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=tables&subcat=Cabin%20Tables"><img src="images/categories/cat_tables.png" alt="Cabin Tables" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Cabin Tables</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Executive director and managerial desk setups with attached side return credenzas.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=tables&subcat=Cabin%20Tables" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=tables&subcat=Meeting%20Tables"><img src="images/categories/cat_tables.jpg" alt="Meeting Tables" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Meeting Tables</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Large boardroom conference tables equipped with pop-up connectivity boxes and cable trays.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=tables&subcat=Meeting%20Tables" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=tables&subcat=Cafe%20Tables"><img src="images/sections/vishista_exclusive.jpg" alt="Cafe Tables" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Cafe Tables</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Stylish cafeteria and pantry dining tables available in round, square, and high-counter designs.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=tables&subcat=Cafe%20Tables" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=tables&subcat=Training%20Tables"><img src="images/archlabs/pages/page_43.png" alt="Training Tables" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: contain;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Training Tables</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Foldable tilt-top training desks on lockable castors for reconfigurable seminar halls.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=tables&subcat=Training%20Tables" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. STORAGE -->
        <section id="storage" class="category-section-block mb-5 pt-4 border-top" data-cat-slug="storage">
            <div class="category-header-flex">
                <div>
                    <h2 class="category-title-text">Storage Systems</h2>
                </div>
                <a href="products.html?category=storage" class="category-view-all-btn">View All Storage &rarr;</a>
            </div>
            <div class="row g-4">
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=storage&subcat=Prelam%20Storage"><img src="images/categories/cat_storage.png" alt="Prelam Storage" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Prelam Storage</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Laminate wood credenzas, pedestals, and tall storage units matching workstation finishes.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=storage&subcat=Prelam%20Storage" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=storage&subcat=Metal%20Storage"><img src="images/categories/cat_storage.jpg" alt="Metal Storage" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Metal Storage</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Powder-coated steel filing cabinets, lateral drawers, and central archive units.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=storage&subcat=Metal%20Storage" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=storage&subcat=Compactor%20Storage"><img src="images/header/prd-nav-1.jpg" alt="Compactor Storage" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Compactor Storage</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">High-density mobile rail compactor storage systems maximizing floor space utilization.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=storage&subcat=Compactor%20Storage" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=storage&subcat=Locker"><img src="images/header/prd-nav-2.jpg" alt="Lockers" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Locker Systems</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Personal employee lockers with mechanical keypads, RFID locks, and ventilation slots.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=storage&subcat=Locker" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 4. SEATING -->
        <section id="seating" class="category-section-block mb-5 pt-4 border-top" data-cat-slug="seating">
            <div class="category-header-flex">
                <div>
                    <h2 class="category-title-text">Seating</h2>
                </div>
                <a href="products.html?category=seating" class="category-view-all-btn">View All Seating &rarr;</a>
            </div>
            <div class="row g-4">
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=seating&subcat=Mesh%20Chair"><img src="images/archlabs/pages/page_4.png" alt="Mesh Chair" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: contain;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Mesh Chairs (30 Models)</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Breathable lumbar-support task chairs with synchro-tilt mechanism and adjustable 3D armrests.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=seating&subcat=Mesh%20Chair" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=seating&subcat=Leather%20Chair"><img src="images/archlabs/pages/page_36.png" alt="Leather Chair" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: contain;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Leather Chairs (5 Models)</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">High-back executive leather armchairs with diamond stitch quilting and chrome base control.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=seating&subcat=Leather%20Chair" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=seating&subcat=Training%20Chair"><img src="images/archlabs/pages/page_43.png" alt="Training Chair" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: contain;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Training Chairs (7 Models)</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Nesting training chairs equipped with writing tablets, wire baskets, and castor wheels.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=seating&subcat=Training%20Chair" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=seating&subcat=Cafe%20Chair"><img src="images/archlabs/pages/page_57.png" alt="Cafe Chair" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: contain;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Cafe Chairs (7 Models)</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Vibrant polypropelene and metal frame dining chairs for pantry breakouts.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=seating&subcat=Cafe%20Chair" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. SOFT SEATING -->
        <section id="soft-seating" class="category-section-block mb-5 pt-4 border-top" data-cat-slug="soft-seating">
            <div class="category-header-flex">
                <div>
                    <h2 class="category-title-text">Soft Seating</h2>
                </div>
                <a href="products.html?category=soft-seating" class="category-view-all-btn">View All Soft Seating &rarr;</a>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=soft-seating&subcat=Lounge"><img src="images/categories/cat_soft_seating.jpg" alt="Lounge & Sofas" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">Lounge &amp; Executive Sofas</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Single, two, and three-seater plush upholstered couches for reception areas and executive suites.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=soft-seating&subcat=Lounge" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=soft-seating&subcat=Collaborative"><img src="images/collection/collection-1.jpg" alt="Collaborative Seating" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">Collaborative Seating</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Modular curved sofas and high-back acoustic booth seating for agile team huddles.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=soft-seating&subcat=Collaborative" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=soft-seating&subcat=Pouffe"><img src="images/collection/collection-2.jpg" alt="Pouffes & Tables" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">Pouffes &amp; Occasional Tables</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Geometrical soft pouffes, ottomans, and companion coffee center tables.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=soft-seating&subcat=Pouffe" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. PODS -->
        <section id="pods" class="category-section-block mb-5 pt-4 border-top" data-cat-slug="pods">
            <div class="category-header-flex">
                <div>
                    <h2 class="category-title-text">Pods</h2>
                </div>
                <a href="products.html?category=pods" class="category-view-all-btn">View All Pods &rarr;</a>
            </div>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=pods"><img src="images/categories/cat_pods.jpg" alt="Single Phone Pod" class="card-img-top" style="background: #ffffff; height: 260px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">Single Acoustic Phone Pod</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Sound-insulated solo booth equipped with air ventilation, LED lighting, power outlets, and laptop shelf for private calls.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=pods" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=pods"><img src="images/sections/hero-workspace.jpg" alt="Meeting Pod" class="card-img-top" style="background: #ffffff; height: 260px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">4-6 Person Meeting Pod</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Fully enclosed acoustic meeting booth complete with integrated sofa seating, TV monitor mounting bracket, and power hubs.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=pods" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 7. CARPETS -->
        <section id="carpets" class="category-section-block mb-5 pt-4 border-top" data-cat-slug="carpets">
            <div class="category-header-flex">
                <div>
                    <h2 class="category-title-text">Carpets</h2>
                </div>
                <a href="products.html?category=carpets" class="category-view-all-btn">View All Carpets &rarr;</a>
            </div>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=carpets"><img src="images/categories/cat_carpets.jpg" alt="Interface Carpet Tiles" class="card-img-top" style="background: #ffffff; height: 260px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">Interface Carpet Tiles</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Modular acoustic carpet tiles available in contemporary geometric patterns, stain-resistant fibers, and sound dampening backing.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=carpets" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 8. OUTDOOR -->
        <section id="outdoor" class="category-section-block mb-5 pt-4 border-top" data-cat-slug="outdoor">
            <div class="category-header-flex">
                <div>
                    <h2 class="category-title-text">Outdoor</h2>
                </div>
                <a href="products.html?category=outdoor" class="category-view-all-btn">View All Outdoor &rarr;</a>
            </div>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=outdoor"><img src="images/categories/cat_outdoor.jpg" alt="Outdoor" class="card-img-top" style="background: #ffffff; height: 260px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">Loom Crafts Terrace &amp; Cafe Seating</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Weather-resistant synthetic wicker and aluminum outdoor lounge sets, patio umbrellas, and dining tables.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=outdoor" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 9. EDUCATIONAL -->
        <section id="educational" class="category-section-block mb-5 pt-4 border-top" data-cat-slug="educational">
            <div class="category-header-flex">
                <div>
                    <h2 class="category-title-text">Educational</h2>
                </div>
                <a href="products.html?category=educational" class="category-view-all-btn">View All Educational &rarr;</a>
            </div>
            <div class="row g-4">
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=educational&subcat=Classroom"><img src="images/categories/cat_education.png" alt="Classroom Desks" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Classroom Desks</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Single and dual-bench student desks with bag hooks and book shelves.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=educational&subcat=Classroom" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=educational&subcat=Library"><img src="images/categories/cat_educational.jpg" alt="Library Units" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Library Furniture</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Study carrels, reading tables, and heavy-duty double-sided book racks.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=educational&subcat=Library" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=educational&subcat=Hostel"><img src="images/sections/s-lookbook-1.jpg" alt="Hostel Furniture" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Hostel Furniture</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Metal bunk beds, study tables, and wardrobe locker units.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=educational&subcat=Hostel" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <a href="products.html?category=educational&subcat=Auditorium"><img src="images/categories/cat_seating.jpg" alt="Auditorium Seating" class="card-img-top" style="background: #ffffff; height: 220px; object-fit: cover;"></a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Auditorium Seating</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Cushioned tip-up auditorium chairs with writing tablets and row numbering.</p>
                            <div class="d-grid mt-auto">
                                <a href="products.html?category=educational&subcat=Auditorium" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow-md text-center" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 8px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">VIEW PRODUCT CATALOGUE &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>

<script>
function selectCategoryFilter(categorySlug) {
    if (!categorySlug) categorySlug = 'all';
    categorySlug = categorySlug.toLowerCase().trim().replace(/^#/, '');

    const categoryAliases = {
        'workstation': 'workstations',
        'workstations': 'workstations',
        'table': 'tables',
        'tables': 'tables',
        'storage': 'storage',
        'storage-systems': 'storage',
        'seating': 'seating',
        'chairs': 'seating',
        'ergonomic-seating': 'seating',
        'archlabs-seating': 'seating',
        'soft-seating': 'soft-seating',
        'lounge': 'soft-seating',
        'soft-seating-lounge': 'soft-seating',
        'pod': 'pods',
        'pods': 'pods',
        'acoustic-pods': 'pods',
        'carpet': 'carpets',
        'carpets': 'carpets',
        'carpet-tiles': 'carpets',
        'interface-carpets': 'carpets',
        'outdoor': 'outdoor',
        'outdoor-furniture': 'outdoor',
        'education': 'educational',
        'educational': 'educational',
        'educational-solutions': 'educational'
    };

    const targetSlug = categoryAliases[categorySlug] || categorySlug;
    const sections = document.querySelectorAll('.category-section-block');
    const exclusiveBanner = document.getElementById('exclusiveCollectionBanner');
    const pageTitle = document.getElementById('categoryPageMainTitle');
    const pageSubtitle = document.getElementById('categoryPageSubtitle');
    const badgeEl = document.getElementById('categoryPageBadge');
    const viewAllBtn = document.getElementById('viewAllCategoriesBtn');

    // Update active state across horizontally scrollable pills
    document.querySelectorAll('.category-scroll-pill').forEach(pill => {
        const onclickAttr = pill.getAttribute('onclick') || '';
        const pillSlugMatch = onclickAttr.match(/selectCategoryFilter\('([^']+)'\)/);
        const pillSlug = pillSlugMatch ? pillSlugMatch[1] : '';

        if (pillSlug === targetSlug || (targetSlug === 'all' && pillSlug === 'all')) {
            pill.classList.add('active');
            if (pillSlug === 'all') {
                const scrollCont = document.querySelector('.category-scroll-container');
                if (scrollCont) scrollCont.scrollTo({ left: 0, behavior: 'smooth' });
            } else if (pill.closest('.category-scroll-container')) {
                try {
                    pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                } catch(e) {}
            }
        } else {
            pill.classList.remove('active');
        }
    });

    if (targetSlug && targetSlug !== 'all') {
        let matched = false;
        sections.forEach(sec => {
            const secId = (sec.id || '').toLowerCase();
            const secSlug = (sec.getAttribute('data-cat-slug') || '').toLowerCase();

            if (secId === targetSlug || secSlug === targetSlug) {
                sec.style.display = 'block';
                sec.classList.remove('border-top');
                matched = true;

                const catHeading = sec.querySelector('h2');
                if (catHeading && pageTitle) {
                    pageTitle.textContent = catHeading.textContent + ' Subcategories';
                }
                if (pageSubtitle) {
                    pageSubtitle.textContent = 'Explore our specialized ' + (catHeading ? catHeading.textContent : targetSlug) + ' subcategories engineered for modern collaborative workspaces.';
                }
                if (badgeEl) {
                    badgeEl.textContent = (catHeading ? catHeading.textContent : targetSlug) + ' Catalogue';
                }
            } else {
                sec.style.display = 'none';
            }
        });

        if (matched) {
            if (exclusiveBanner) {
                if (targetSlug === 'seating' || targetSlug === 'archlabs-seating') {
                    exclusiveBanner.style.display = 'block';
                } else {
                    exclusiveBanner.style.display = 'none';
                }
            }
            if (viewAllBtn) viewAllBtn.style.display = 'inline-flex';
            
            // Update browser URL without reload
            const newUrl = window.location.pathname + '?category=' + encodeURIComponent(targetSlug);
            window.history.replaceState({ category: targetSlug }, '', newUrl);
            return;
        }
    }

    // Show all categories & subcategories
    sections.forEach(sec => {
        sec.style.display = 'block';
    });
    if (exclusiveBanner) exclusiveBanner.style.display = 'block';
    if (pageTitle) pageTitle.textContent = 'Workspace Furniture & Solutions';
    if (pageSubtitle) pageSubtitle.textContent = 'Explore our extensive catalogue of modular workstations, executive desks, ergonomic mesh chairs, acoustic pods, soft seating, carpets, and turnkey systems.';
    if (badgeEl) badgeEl.textContent = 'Corporate Product Catalogue';
    if (viewAllBtn) viewAllBtn.style.display = 'none';

    const cleanUrl = window.location.pathname;
    window.history.replaceState({}, '', cleanUrl);
}

function updateStickyCategoryNavPosition() {
    const header = document.querySelector('header.header-sticky') || document.querySelector('header');
    const navWrapper = document.querySelector('.category-scroll-nav-wrapper');
    if (header && navWrapper) {
        const headerHeight = Math.round(header.getBoundingClientRect().height || header.offsetHeight || 50);
        navWrapper.style.top = headerHeight + 'px';
        document.documentElement.style.setProperty('--site-header-height', headerHeight + 'px');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateStickyCategoryNavPosition();
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category') || urlParams.get('cat') || window.location.hash.replace('#', '') || 'all';
    selectCategoryFilter(initialCategory);
});

window.addEventListener('resize', updateStickyCategoryNavPosition);
window.addEventListener('load', updateStickyCategoryNavPosition);

window.addEventListener('popstate', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const cat = urlParams.get('category') || urlParams.get('cat') || window.location.hash.replace('#', '') || 'all';
    selectCategoryFilter(cat);
});

window.addEventListener('hashchange', function() {
    const cat = window.location.hash.replace('#', '') || 'all';
    selectCategoryFilter(cat);
});

// Intercept all in-page and menu clicks targeting categories
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href') || '';
    if (href.includes('product-categories.html') || href.startsWith('#')) {
        let cat = '';
        if (href.includes('category=')) {
            const match = href.match(/category=([^&#]+)/);
            if (match) cat = decodeURIComponent(match[1]);
        } else if (href.includes('cat=')) {
            const match = href.match(/cat=([^&#]+)/);
            if (match) cat = decodeURIComponent(match[1]);
        } else if (href.includes('#')) {
            cat = href.split('#')[1];
        }

        if (cat) {
            e.preventDefault();
            selectCategoryFilter(cat);
            
            // Close mobile offcanvas if open
            const offcanvasEl = document.getElementById('mobileMenu');
            if (offcanvasEl && typeof bootstrap !== 'undefined') {
                const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
                if (bsOffcanvas) bsOffcanvas.hide();
            }

            // Smooth scroll to top of categories
            const navWrapper = document.querySelector('.category-scroll-nav-wrapper');
            if (navWrapper) {
                const headerOffset = 70;
                const elementPosition = navWrapper.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: Math.max(0, offsetPosition),
                    behavior: 'smooth'
                });
            }
        }
    }
});
</script>

<?php include('footer.php'); ?>
