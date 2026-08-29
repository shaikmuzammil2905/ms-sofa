<?php include('header.php'); ?>

<!-- Page Header Banner -->
<section class="py-5 bg-dark text-white text-center position-relative" style="background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('images/sections/hero-workspace.jpg') center/cover no-repeat;">
    <div class="tf-container py-5">
        <span class="badge bg-danger text-uppercase px-3 py-2 mb-3 fw-black tracking-widest" style="font-size: 0.95rem !important;">Corporate Product Catalogue</span>
        <h1 class="display-3 fw-black text-white mt-2 mb-3" style="font-weight: 900 !important;">Workspace Furniture &amp; Solutions</h1>
        <p class="text-white mx-auto fw-bold" style="max-width: 850px; font-size: 1.4rem !important; line-height: 1.7; color: #ffffff !important; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
            Explore our extensive catalogue of modular workstations, executive desks, ergonomic mesh chairs, acoustic pods, soft seating, carpets, and turnkey systems.
        </p>
    </div>
</section>

<!-- Category Filter Anchor Navigation (Fixed Overlapping & Bleed-through Issues) -->
<div class="bg-white border-bottom py-4 shadow-md sticky-jump-bar" style="position: sticky; top: 70px; z-index: 95; background-color: #ffffff !important; opacity: 1 !important; border-bottom: 3px solid #d32f2f;">
    <div class="tf-container overflow-auto">
        <div class="d-flex align-items-center gap-3 text-nowrap py-1">
            <span class="fw-black text-dark me-2" style="font-size: 1.35rem !important; font-weight: 900 !important; letter-spacing: 0.5px; color: #000000 !important;">Jump to Category:</span>
            <a href="#workstations" class="btn rounded-pill px-4 py-2 text-uppercase category-jump-btn">Workstations</a>
            <a href="#tables" class="btn rounded-pill px-4 py-2 text-uppercase category-jump-btn">Tables</a>
            <a href="#storage" class="btn rounded-pill px-4 py-2 text-uppercase category-jump-btn">Storage</a>
            <a href="#seating" class="btn rounded-pill px-4 py-2 text-uppercase category-jump-btn">Seating</a>
            <a href="#soft-seating" class="btn rounded-pill px-4 py-2 text-uppercase category-jump-btn">Soft Seating</a>
            <a href="#pods" class="btn rounded-pill px-4 py-2 text-uppercase category-jump-btn">Pods</a>
            <a href="#carpets" class="btn rounded-pill px-4 py-2 text-uppercase category-jump-btn">Carpets</a>
            <a href="#outdoor" class="btn rounded-pill px-4 py-2 text-uppercase category-jump-btn">Outdoor</a>
            <a href="#educational" class="btn rounded-pill px-4 py-2 text-uppercase category-jump-btn">Educational</a>
            <a href="#accessories" class="btn rounded-pill px-4 py-2 text-uppercase category-jump-btn">Accessories</a>
        </div>
    </div>
</div>

<style>
    section[id] {
        scroll-margin-top: 170px !important;
    }
    .category-jump-btn {
        font-size: 1.15rem !important;
        font-weight: 900 !important;
        border: 2.5px solid #000000 !important;
        color: #000000 !important;
        background-color: #ffffff !important;
        transition: all 0.2s ease-in-out !important;
    }
    .category-jump-btn:hover,
    .category-jump-btn:focus,
    .category-jump-btn:active,
    .category-jump-btn.active {
        background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%) !important;
        color: #ffffff !important;
        border-color: #b71c1c !important;
        box-shadow: 0 4px 15px rgba(211, 47, 47, 0.4) !important;
        transform: translateY(-2px) !important;
    }
</style>

<!-- Main Catalogue Container -->
<div class="py-5 bg-white">
    <div class="tf-container">

        <!-- VISHISTA EXCLUSIVE COLLECTION BANNER -->
        <div class="bg-dark text-white rounded-4 p-4 p-md-5 mb-5 shadow-lg position-relative overflow-hidden" style="background: linear-gradient(135deg, #111111 0%, #262626 100%); border: 1px solid rgba(255,255,255,0.1);">
            <div class="row align-items-center g-4">
                <div class="col-lg-6">
                    <h2 class="display-3 fw-black text-white mb-4" style="font-weight: 900 !important; font-size: 3rem !important; letter-spacing: -0.5px; text-shadow: 0 4px 15px rgba(0,0,0,0.5);">Vishista Exclusive Collection</h2>
                    <div class="pt-2">
                        <a href="archlabs-catalogue.html" class="btn btn-danger btn-lg px-5 py-3 text-uppercase fw-black shadow-lg" style="border-radius: 8px; font-size: 1.2rem !important; letter-spacing: 1px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">EXPLORE MORE &rarr;</a>
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
        <section id="workstations" class="mb-5 pt-4">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-3 border-danger">
                <div>
                    <h2 class="fw-black text-dark mb-0" style="font-size: 2.4rem !important; font-weight: 900 !important; color: #111111 !important;">Workstations</h2>
                </div>
                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black shadow-sm py-2 px-4" style="font-size: 1.05rem !important; border-radius: 6px;" onclick="openEnquiryModal('Workstations Series')">Enquire for Workstations</button>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_workstations.jpg" alt="Height Adjustable Series" class="card-img-top cursor-pointer" style="background: #ffffff; height: 240px; object-fit: cover;" onclick="showProductDetails('Height Adjustable Series Workstations', 'Motorized sit-to-stand desks engineered for active workplace wellness, smooth height transitions, and integrated wire management.', 'images/categories/cat_workstations.jpg')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">1. Height Adjustable Series</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Motorized sit-to-stand desks engineered for active workplace wellness, smooth height transitions, and integrated wire management.</p>
                            <div class="d-grid gap-2 mt-auto">
                                <button type="button" class="btn btn-outline-dark btn-lg fw-bold mb-1" style="border-radius: 6px; font-size: 1rem !important;" onclick="showProductDetails('Height Adjustable Series Workstations', 'Motorized sit-to-stand desks engineered for active workplace wellness, smooth height transitions, and integrated wire management.', 'images/categories/cat_workstations.jpg')">View Product Details &rarr;</button>
                                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black py-3" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Height Adjustable Series Workstations')">ENQUIRE NOW &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_workstations.jpg" alt="Desking Series" class="card-img-top cursor-pointer" style="background: #ffffff; height: 240px; object-fit: cover;" onclick="showProductDetails('Desking Series Workstations', 'Modular open-plan linear and back-to-back desking systems with minimalist leg profiles and customizable privacy screens.', 'images/categories/cat_workstations.jpg')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">2. Desking Series</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Modular open-plan linear and back-to-back desking systems with minimalist leg profiles and customizable privacy screens.</p>
                            <div class="d-grid gap-2 mt-auto">
                                <button type="button" class="btn btn-outline-dark btn-lg fw-bold mb-1" style="border-radius: 6px; font-size: 1rem !important;" onclick="showProductDetails('Desking Series Workstations', 'Modular open-plan linear and back-to-back desking systems with minimalist leg profiles and customizable privacy screens.', 'images/categories/cat_workstations.jpg')">View Product Details &rarr;</button>
                                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black py-3" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Desking Series Workstations')">ENQUIRE NOW &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_workstations.jpg" alt="Panel Series" class="card-img-top cursor-pointer" style="background: #ffffff; height: 240px; object-fit: cover;" onclick="showProductDetails('Panel Series Workstations', 'Acoustic panel-based workstation partitions providing high acoustic privacy, raceway power conduits, and modular storage integration.', 'images/categories/cat_workstations.jpg')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">3. Panel Series</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Acoustic panel-based workstation partitions providing high acoustic privacy, raceway power conduits, and modular storage integration.</p>
                            <div class="d-grid gap-2 mt-auto">
                                <button type="button" class="btn btn-outline-dark btn-lg fw-bold mb-1" style="border-radius: 6px; font-size: 1rem !important;" onclick="showProductDetails('Panel Series Workstations', 'Acoustic panel-based workstation partitions providing high acoustic privacy, raceway power conduits, and modular storage integration.', 'images/categories/cat_workstations.jpg')">View Product Details &rarr;</button>
                                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black py-3" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Panel Series Workstations')">ENQUIRE NOW &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2. TABLES -->
        <section id="tables" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-3 border-danger">
                <div>
                    <h2 class="fw-black text-dark mb-0" style="font-size: 2.4rem !important; font-weight: 900 !important; color: #111111 !important;">Tables</h2>
                </div>
                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black shadow-sm py-2 px-4" style="font-size: 1.05rem !important; border-radius: 6px;" onclick="openEnquiryModal('Executive & Conference Tables')">Enquire for Tables</button>
            </div>
            <div class="row g-4">
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_tables.png" alt="Cabin Tables" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: cover;" onclick="showProductDetails('Cabin Tables', 'Executive director and managerial desk setups with attached side return credenzas.', 'images/categories/cat_tables.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Cabin Tables</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Executive director and managerial desk setups with attached side return credenzas.</p>
                            <button type="button" class="btn btn-outline-dark btn-sm fw-bold mb-2" style="border-radius: 6px; font-size: 0.95rem !important;" onclick="showProductDetails('Cabin Tables', 'Executive director and managerial desk setups with attached side return credenzas.', 'images/categories/cat_tables.png')">View Details &rarr;</button>
                            <button type="button" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Cabin Tables')">ENQUIRE NOW &rarr;</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_tables.png" alt="Meeting Tables" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: cover;" onclick="showProductDetails('Meeting Tables', 'Large boardroom conference tables equipped with pop-up connectivity boxes and cable trays.', 'images/categories/cat_tables.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Meeting Tables</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Large boardroom conference tables equipped with pop-up connectivity boxes and cable trays.</p>
                            <button type="button" class="btn btn-outline-dark btn-sm fw-bold mb-2" style="border-radius: 6px; font-size: 0.95rem !important;" onclick="showProductDetails('Meeting Tables', 'Large boardroom conference tables equipped with pop-up connectivity boxes and cable trays.', 'images/categories/cat_tables.png')">View Details &rarr;</button>
                            <button type="button" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Meeting Tables')">ENQUIRE NOW &rarr;</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_tables.png" alt="Cafe Tables" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: cover;" onclick="showProductDetails('Cafe Tables', 'Stylish cafeteria and pantry dining tables available in round, square, and high-counter designs.', 'images/categories/cat_tables.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Cafe Tables</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Stylish cafeteria and pantry dining tables available in round, square, and high-counter designs.</p>
                            <button type="button" class="btn btn-outline-dark btn-sm fw-bold mb-2" style="border-radius: 6px; font-size: 0.95rem !important;" onclick="showProductDetails('Cafe Tables', 'Stylish cafeteria and pantry dining tables available in round, square, and high-counter designs.', 'images/categories/cat_tables.png')">View Details &rarr;</button>
                            <button type="button" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Cafe Tables')">ENQUIRE NOW &rarr;</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_tables.png" alt="Training Tables" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: cover;" onclick="showProductDetails('Training Tables', 'Foldable tilt-top training desks on lockable castors for reconfigurable seminar halls.', 'images/categories/cat_tables.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Training Tables</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Foldable tilt-top training desks on lockable castors for reconfigurable seminar halls.</p>
                            <button type="button" class="btn btn-outline-dark btn-sm fw-bold mb-2" style="border-radius: 6px; font-size: 0.95rem !important;" onclick="showProductDetails('Training Tables', 'Foldable tilt-top training desks on lockable castors for reconfigurable seminar halls.', 'images/categories/cat_tables.png')">View Details &rarr;</button>
                            <button type="button" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Training Tables')">ENQUIRE NOW &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. STORAGE -->
        <section id="storage" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-3 border-danger">
                <div>
                    <h2 class="fw-black text-dark mb-0" style="font-size: 2.4rem !important; font-weight: 900 !important; color: #111111 !important;">Storage Systems</h2>
                </div>
                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black shadow-sm py-2 px-4" style="font-size: 1.05rem !important; border-radius: 6px;" onclick="openEnquiryModal('Storage Systems')">Enquire for Storage</button>
            </div>
            <div class="row g-4">
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_storage.png" alt="Prelam Storage" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: cover;" onclick="showProductDetails('Prelam Storage', 'Laminate wood credenzas, pedestals, and tall storage units matching workstation finishes.', 'images/categories/cat_storage.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Prelam Storage</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Laminate wood credenzas, pedestals, and tall storage units matching workstation finishes.</p>
                            <button type="button" class="btn btn-outline-dark btn-sm fw-bold mb-2" style="border-radius: 6px; font-size: 0.95rem !important;" onclick="showProductDetails('Prelam Storage', 'Laminate wood credenzas, pedestals, and tall storage units matching workstation finishes.', 'images/categories/cat_storage.png')">View Details &rarr;</button>
                            <button type="button" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Prelam Storage')">ENQUIRE NOW &rarr;</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_storage.png" alt="Metal Storage" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: cover;" onclick="showProductDetails('Metal Storage', 'Powder-coated steel filing cabinets, lateral drawers, and central archive units.', 'images/categories/cat_storage.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Metal Storage</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Powder-coated steel filing cabinets, lateral drawers, and central archive units.</p>
                            <button type="button" class="btn btn-outline-dark btn-sm fw-bold mb-2" style="border-radius: 6px; font-size: 0.95rem !important;" onclick="showProductDetails('Metal Storage', 'Powder-coated steel filing cabinets, lateral drawers, and central archive units.', 'images/categories/cat_storage.png')">View Details &rarr;</button>
                            <button type="button" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Metal Storage')">ENQUIRE NOW &rarr;</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_storage.png" alt="Compactor Storage" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: cover;" onclick="showProductDetails('Compactor Storage', 'High-density mobile rail compactor storage systems maximizing floor space utilization.', 'images/categories/cat_storage.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Compactor Storage</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">High-density mobile rail compactor storage systems maximizing floor space utilization.</p>
                            <button type="button" class="btn btn-outline-dark btn-sm fw-bold mb-2" style="border-radius: 6px; font-size: 0.95rem !important;" onclick="showProductDetails('Compactor Storage', 'High-density mobile rail compactor storage systems maximizing floor space utilization.', 'images/categories/cat_storage.png')">View Details &rarr;</button>
                            <button type="button" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Compactor Storage')">ENQUIRE NOW &rarr;</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_storage.png" alt="Lockers" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: cover;" onclick="showProductDetails('Locker Systems', 'Personal employee lockers with mechanical keypads, RFID locks, and ventilation slots.', 'images/categories/cat_storage.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Locker Systems</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Personal employee lockers with mechanical keypads, RFID locks, and ventilation slots.</p>
                            <button type="button" class="btn btn-outline-dark btn-sm fw-bold mb-2" style="border-radius: 6px; font-size: 0.95rem !important;" onclick="showProductDetails('Locker Systems', 'Personal employee lockers with mechanical keypads, RFID locks, and ventilation slots.', 'images/categories/cat_storage.png')">View Details &rarr;</button>
                            <button type="button" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Locker Systems')">ENQUIRE NOW &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 4. SEATING -->
        <section id="seating" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-3 border-danger">
                <div>
                    <h2 class="fw-black text-dark mb-0" style="font-size: 2.4rem !important; font-weight: 900 !important; color: #111111 !important;">Ergonomic Seating</h2>
                </div>
                <a href="archlabs-catalogue.html" class="btn btn-danger btn-lg text-uppercase fw-black shadow-sm py-2 px-4" style="font-size: 1.05rem !important; border-radius: 6px;">View ArchLabs Seating &rarr;</a>
            </div>
            <div class="row g-4">
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/archlabs/pages/page_4.png" alt="Mesh Chair" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: contain;" onclick="showProductDetails('Mesh Chairs (30 Models)', 'Breathable lumbar-support task chairs with synchro-tilt mechanism and adjustable 3D armrests.', 'images/archlabs/pages/page_4.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Mesh Chairs (30 Models)</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Breathable lumbar-support task chairs with synchro-tilt mechanism and adjustable 3D armrests.</p>
                            <a href="archlabs-catalogue.html#mesh-series" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">Explore Mesh Chairs &rarr;</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/archlabs/pages/page_36.png" alt="Leather Chair" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: contain;" onclick="showProductDetails('Leather Chairs (5 Models)', 'High-back executive leather armchairs with diamond stitch quilting and chrome base control.', 'images/archlabs/pages/page_36.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Leather Chairs (5 Models)</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">High-back executive leather armchairs with diamond stitch quilting and chrome base control.</p>
                            <a href="archlabs-catalogue.html#leather-series" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">Explore Leather Chairs &rarr;</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/archlabs/pages/page_43.png" alt="Training Chair" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: contain;" onclick="showProductDetails('Training Chairs (7 Models)', 'Nesting training chairs equipped with writing tablets, wire baskets, and castor wheels.', 'images/archlabs/pages/page_43.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Training Chairs (7 Models)</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Nesting training chairs equipped with writing tablets, wire baskets, and castor wheels.</p>
                            <a href="archlabs-catalogue.html#training-series" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">Explore Training Chairs &rarr;</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/archlabs/pages/page_57.png" alt="Cafe Chair" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: contain;" onclick="showProductDetails('Cafe Chairs (7 Models)', 'Vibrant polypropelene and metal frame dining chairs for pantry breakouts.', 'images/archlabs/pages/page_57.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Cafe Chairs (7 Models)</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Vibrant polypropelene and metal frame dining chairs for pantry breakouts.</p>
                            <a href="archlabs-catalogue.html#cafeteria-series" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">Explore Cafe Chairs &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. SOFT SEATING -->
        <section id="soft-seating" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-3 border-danger">
                <div>
                    <h2 class="fw-black text-dark mb-0" style="font-size: 2.4rem !important; font-weight: 900 !important; color: #111111 !important;">Soft Seating &amp; Lounge</h2>
                </div>
                <a href="product-sofas.html" class="btn btn-danger btn-lg text-uppercase fw-black shadow-sm py-2 px-4" style="font-size: 1.05rem !important; border-radius: 6px;">View Full Sofas Page &rarr;</a>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_soft_seating.jpg" alt="Lounge & Sofas" class="card-img-top cursor-pointer" style="background: #ffffff; height: 240px; object-fit: cover;" onclick="showProductDetails('Lounge & Executive Sofas', 'Single, two, and three-seater plush upholstered couches for reception areas and executive suites.', 'images/categories/cat_soft_seating.jpg')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">Lounge &amp; Executive Sofas</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Single, two, and three-seater plush upholstered couches for reception areas and executive suites.</p>
                            <div class="d-grid gap-2 mt-auto">
                                <button type="button" class="btn btn-outline-dark btn-lg fw-bold mb-1" style="border-radius: 6px; font-size: 1rem !important;" onclick="showProductDetails('Lounge & Executive Sofas', 'Single, two, and three-seater plush upholstered couches for reception areas and executive suites.', 'images/categories/cat_soft_seating.jpg')">View Product Details &rarr;</button>
                                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black py-3" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Lounge and Executive Sofas')">ENQUIRE NOW &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_soft_seating.jpg" alt="Collaborative Seating" class="card-img-top cursor-pointer" style="background: #ffffff; height: 240px; object-fit: cover;" onclick="showProductDetails('Collaborative Seating', 'Modular curved sofas and high-back acoustic booth seating for agile team huddles.', 'images/categories/cat_soft_seating.jpg')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">Collaborative Seating</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Modular curved sofas and high-back acoustic booth seating for agile team huddles.</p>
                            <div class="d-grid gap-2 mt-auto">
                                <button type="button" class="btn btn-outline-dark btn-lg fw-bold mb-1" style="border-radius: 6px; font-size: 1rem !important;" onclick="showProductDetails('Collaborative Seating', 'Modular curved sofas and high-back acoustic booth seating for agile team huddles.', 'images/categories/cat_soft_seating.jpg')">View Product Details &rarr;</button>
                                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black py-3" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Collaborative Modular Seating')">ENQUIRE NOW &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_soft_seating.jpg" alt="Pouffes & Tables" class="card-img-top cursor-pointer" style="background: #ffffff; height: 240px; object-fit: cover;" onclick="showProductDetails('Pouffes & Occasional Tables', 'Geometrical soft pouffes, ottomans, and companion coffee center tables.', 'images/categories/cat_soft_seating.jpg')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">Pouffes &amp; Occasional Tables</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Geometrical soft pouffes, ottomans, and companion coffee center tables.</p>
                            <div class="d-grid gap-2 mt-auto">
                                <button type="button" class="btn btn-outline-dark btn-lg fw-bold mb-1" style="border-radius: 6px; font-size: 1rem !important;" onclick="showProductDetails('Pouffes & Occasional Tables', 'Geometrical soft pouffes, ottomans, and companion coffee center tables.', 'images/categories/cat_soft_seating.jpg')">View Product Details &rarr;</button>
                                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black py-3" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Pouffes and Coffee Tables')">ENQUIRE NOW &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. PODS -->
        <section id="pods" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-3 border-danger">
                <div>
                    <h2 class="fw-black text-dark mb-0" style="font-size: 2.4rem !important; font-weight: 900 !important; color: #111111 !important;">Acoustic Work Pods</h2>
                </div>
                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black shadow-sm py-2 px-4" style="font-size: 1.05rem !important; border-radius: 6px;" onclick="openEnquiryModal('Acoustic Pods')">Enquire for Pods</button>
            </div>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_pods.jpg" alt="Single Phone Pod" class="card-img-top cursor-pointer" style="background: #ffffff; height: 260px; object-fit: cover;" onclick="showProductDetails('Single Acoustic Phone Pod', 'Sound-insulated solo booth equipped with air ventilation, LED lighting, power outlets, and laptop shelf for private calls.', 'images/categories/cat_pods.jpg')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">Single Acoustic Phone Pod</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Sound-insulated solo booth equipped with air ventilation, LED lighting, power outlets, and laptop shelf for private calls.</p>
                            <div class="d-grid gap-2 mt-auto">
                                <button type="button" class="btn btn-outline-dark btn-lg fw-bold mb-1" style="border-radius: 6px; font-size: 1rem !important;" onclick="showProductDetails('Single Acoustic Phone Pod', 'Sound-insulated solo booth equipped with air ventilation, LED lighting, power outlets, and laptop shelf for private calls.', 'images/categories/cat_pods.jpg')">View Product Details &rarr;</button>
                                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black py-3" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Single Acoustic Phone Pod')">ENQUIRE NOW &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_pods.jpg" alt="Meeting Pod" class="card-img-top cursor-pointer" style="background: #ffffff; height: 260px; object-fit: cover;" onclick="showProductDetails('4-6 Person Meeting Pod', 'Fully enclosed acoustic meeting booth complete with integrated sofa seating, TV monitor mounting bracket, and power hubs.', 'images/categories/cat_pods.jpg')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">4-6 Person Meeting Pod</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Fully enclosed acoustic meeting booth complete with integrated sofa seating, TV monitor mounting bracket, and power hubs.</p>
                            <div class="d-grid gap-2 mt-auto">
                                <button type="button" class="btn btn-outline-dark btn-lg fw-bold mb-1" style="border-radius: 6px; font-size: 1rem !important;" onclick="showProductDetails('4-6 Person Meeting Pod', 'Fully enclosed acoustic meeting booth complete with integrated sofa seating, TV monitor mounting bracket, and power hubs.', 'images/categories/cat_pods.jpg')">View Product Details &rarr;</button>
                                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black py-3" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('4-6 Person Meeting Pod')">ENQUIRE NOW &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 7. CARPETS -->
        <section id="carpets" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-3 border-danger">
                <div>
                    <h2 class="fw-black text-dark mb-0" style="font-size: 2.4rem !important; font-weight: 900 !important; color: #111111 !important;">Interface Carpets</h2>
                </div>
                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black shadow-sm py-2 px-4" style="font-size: 1.05rem !important; border-radius: 6px;" onclick="openEnquiryModal('Interface Carpet Tiles')">Enquire for Carpets</button>
            </div>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_workstations.jpg" alt="Interface Carpet Tiles" class="card-img-top cursor-pointer" style="background: #ffffff; height: 260px; object-fit: cover;" onclick="showProductDetails('Interface Carpet Tiles', 'Modular acoustic carpet tiles available in contemporary geometric patterns, stain-resistant fibers, and sound dampening backing.', 'images/categories/cat_workstations.jpg')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">Interface Carpet Tiles</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Modular acoustic carpet tiles available in contemporary geometric patterns, stain-resistant fibers, and sound dampening backing.</p>
                            <div class="d-grid gap-2 mt-auto">
                                <button type="button" class="btn btn-outline-dark btn-lg fw-bold mb-1" style="border-radius: 6px; font-size: 1rem !important;" onclick="showProductDetails('Interface Carpet Tiles', 'Modular acoustic carpet tiles available in contemporary geometric patterns, stain-resistant fibers, and sound dampening backing.', 'images/categories/cat_workstations.jpg')">View Product Details &rarr;</button>
                                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black py-3" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Interface Carpet Tiles')">ENQUIRE NOW &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 8. OUTDOOR -->
        <section id="outdoor" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-3 border-danger">
                <div>
                    <h2 class="fw-black text-dark mb-0" style="font-size: 2.4rem !important; font-weight: 900 !important; color: #111111 !important;">Outdoor Furniture</h2>
                </div>
                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black shadow-sm py-2 px-4" style="font-size: 1.05rem !important; border-radius: 6px;" onclick="openEnquiryModal('Outdoor Furniture')">Enquire for Outdoor</button>
            </div>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_tables.png" alt="Loom Crafts Outdoor" class="card-img-top cursor-pointer" style="background: #ffffff; height: 260px; object-fit: cover;" onclick="showProductDetails('Loom Crafts Terrace & Cafe Seating', 'Weather-resistant synthetic wicker and aluminum outdoor lounge sets, patio umbrellas, and dining tables.', 'images/categories/cat_tables.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">Loom Crafts Terrace &amp; Cafe Seating</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Weather-resistant synthetic wicker and aluminum outdoor lounge sets, patio umbrellas, and dining tables.</p>
                            <div class="d-grid gap-2 mt-auto">
                                <button type="button" class="btn btn-outline-dark btn-lg fw-bold mb-1" style="border-radius: 6px; font-size: 1rem !important;" onclick="showProductDetails('Loom Crafts Terrace & Cafe Seating', 'Weather-resistant synthetic wicker and aluminum outdoor lounge sets, patio umbrellas, and dining tables.', 'images/categories/cat_tables.png')">View Product Details &rarr;</button>
                                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black py-3" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Loom Crafts Outdoor Furniture')">ENQUIRE NOW &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 9. EDUCATIONAL -->
        <section id="educational" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-3 border-danger">
                <div>
                    <h2 class="fw-black text-dark mb-0" style="font-size: 2.4rem !important; font-weight: 900 !important; color: #111111 !important;">Educational Solutions</h2>
                </div>
                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black shadow-sm py-2 px-4" style="font-size: 1.05rem !important; border-radius: 6px;" onclick="openEnquiryModal('Educational Furniture')">Enquire for Institutions</button>
            </div>
            <div class="row g-4">
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_education.png" alt="Classroom Desks" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: cover;" onclick="showProductDetails('Classroom Desks', 'Single and dual-bench student desks with bag hooks and book shelves.', 'images/categories/cat_education.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Classroom Desks</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Single and dual-bench student desks with bag hooks and book shelves.</p>
                            <button type="button" class="btn btn-outline-dark btn-sm fw-bold mb-2" style="border-radius: 6px; font-size: 0.95rem !important;" onclick="showProductDetails('Classroom Desks', 'Single and dual-bench student desks with bag hooks and book shelves.', 'images/categories/cat_education.png')">View Details &rarr;</button>
                            <button type="button" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Classroom Desks')">ENQUIRE NOW &rarr;</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_education.png" alt="Library Units" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: cover;" onclick="showProductDetails('Library Furniture', 'Study carrels, reading tables, and heavy-duty double-sided book racks.', 'images/categories/cat_education.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Library Furniture</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Study carrels, reading tables, and heavy-duty double-sided book racks.</p>
                            <button type="button" class="btn btn-outline-dark btn-sm fw-bold mb-2" style="border-radius: 6px; font-size: 0.95rem !important;" onclick="showProductDetails('Library Furniture', 'Study carrels, reading tables, and heavy-duty double-sided book racks.', 'images/categories/cat_education.png')">View Details &rarr;</button>
                            <button type="button" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Library Furniture')">ENQUIRE NOW &rarr;</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_education.png" alt="Hostel Furniture" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: cover;" onclick="showProductDetails('Hostel Furniture', 'Metal bunk beds, study tables, and wardrobe locker units.', 'images/categories/cat_education.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Hostel Furniture</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Metal bunk beds, study tables, and wardrobe locker units.</p>
                            <button type="button" class="btn btn-outline-dark btn-sm fw-bold mb-2" style="border-radius: 6px; font-size: 0.95rem !important;" onclick="showProductDetails('Hostel Furniture', 'Metal bunk beds, study tables, and wardrobe locker units.', 'images/categories/cat_education.png')">View Details &rarr;</button>
                            <button type="button" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Hostel Furniture')">ENQUIRE NOW &rarr;</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_education.png" alt="Auditorium Seating" class="card-img-top cursor-pointer" style="background: #ffffff; height: 220px; object-fit: cover;" onclick="showProductDetails('Auditorium Seating', 'Cushioned tip-up auditorium chairs with writing tablets and row numbering.', 'images/categories/cat_education.png')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.45rem !important; font-weight: 900 !important; color: #111111 !important;">Auditorium Seating</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.1rem !important; line-height: 1.6; color: #333333 !important;">Cushioned tip-up auditorium chairs with writing tablets and row numbering.</p>
                            <button type="button" class="btn btn-outline-dark btn-sm fw-bold mb-2" style="border-radius: 6px; font-size: 0.95rem !important;" onclick="showProductDetails('Auditorium Seating', 'Cushioned tip-up auditorium chairs with writing tablets and row numbering.', 'images/categories/cat_education.png')">View Details &rarr;</button>
                            <button type="button" class="btn btn-danger w-100 fw-black text-uppercase py-3 mt-auto" style="font-size: 1.1rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Auditorium Seating')">ENQUIRE NOW &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 10. ACCESSORIES -->
        <section id="accessories" class="mb-4 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-3 border-danger">
                <div>
                    <h2 class="fw-black text-dark mb-0" style="font-size: 2.4rem !important; font-weight: 900 !important; color: #111111 !important;">Workspace Accessories</h2>
                </div>
                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black shadow-sm py-2 px-4" style="font-size: 1.05rem !important; border-radius: 6px;" onclick="openEnquiryModal('Workspace Accessories')">Enquire for Accessories</button>
            </div>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card border h-100 shadow-sm rounded-4 overflow-hidden">
                        <img src="images/categories/cat_workstations.jpg" alt="Workspace Accessories" class="card-img-top cursor-pointer" style="background: #ffffff; height: 260px; object-fit: cover;" onclick="showProductDetails('Ergonomic Arms & Power Management', 'Gas-spring dual monitor arms, under-desk cable trays, vertical wire serpents, and pop-up power modules.', 'images/categories/cat_workstations.jpg')">
                        <div class="card-body p-4 d-flex flex-column">
                            <h3 class="fw-black text-dark mb-2" style="font-size: 1.55rem !important; font-weight: 900 !important; color: #111111 !important;">Ergonomic Arms &amp; Power Management</h3>
                            <p class="text-dark fw-semibold flex-grow-1 mb-3" style="font-size: 1.15rem !important; line-height: 1.65; color: #333333 !important;">Gas-spring dual monitor arms, under-desk cable trays, vertical wire serpents, and pop-up power modules.</p>
                            <div class="d-grid gap-2 mt-auto">
                                <button type="button" class="btn btn-outline-dark btn-lg fw-bold mb-1" style="border-radius: 6px; font-size: 1rem !important;" onclick="showProductDetails('Ergonomic Arms & Power Management', 'Gas-spring dual monitor arms, under-desk cable trays, vertical wire serpents, and pop-up power modules.', 'images/categories/cat_workstations.jpg')">View Product Details &rarr;</button>
                                <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black py-3" style="font-size: 1.15rem !important; letter-spacing: 0.8px; border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('Workspace Accessories & Power Modules')">ENQUIRE NOW &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>

<!-- Product Detail Modal -->
<div class="modal fade" id="productDetailModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="bg-dark text-white p-4 d-flex justify-content-between align-items-center">
                <h4 class="fw-black text-white mb-0" id="detailModalTitle" style="font-size: 1.5rem !important;">Product Specifications</h4>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4 bg-white">
                <div class="row g-4 align-items-center">
                    <div class="col-md-5 text-center">
                        <img id="detailModalImg" src="" alt="Product Image" class="img-fluid rounded-3 shadow-sm border" style="max-height: 280px; object-fit: cover; width: 100%;">
                    </div>
                    <div class="col-md-7">
                        <span class="badge bg-danger text-uppercase px-3 py-1 mb-2 fw-bold" style="font-size: 0.85rem !important;">Vishista Verified Quality</span>
                        <h3 class="fw-black text-dark mb-3" id="detailModalHeading" style="font-size: 1.6rem !important;"></h3>
                        <p class="text-dark fw-semibold fs-6 mb-4" id="detailModalDesc" style="line-height: 1.7; color: #333333 !important;"></p>
                        <div class="p-3 bg-light rounded-3 mb-4 border">
                            <strong class="text-dark d-block mb-1 fs-7">Key Solution Highlights:</strong>
                            <ul class="list-unstyled mb-0 fs-7 text-secondary">
                                <li>&bull; Ergonomically engineered for maximum corporate durability</li>
                                <li>&bull; Customizable modular sizes, colorways, and layout options</li>
                                <li>&bull; Comprehensive warranty &amp; direct corporate support</li>
                            </ul>
                        </div>
                        <div class="d-grid">
                            <button type="button" class="btn btn-danger btn-lg text-uppercase fw-black py-3 shadow" style="border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none; font-size: 1.1rem !important;" id="detailModalEnquireBtn">Enquire For This Product &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    function showProductDetails(title, desc, imgSrc) {
        document.getElementById('detailModalTitle').innerText = title;
        document.getElementById('detailModalHeading').innerText = title;
        document.getElementById('detailModalDesc').innerText = desc;
        document.getElementById('detailModalImg').src = imgSrc;
        document.getElementById('detailModalEnquireBtn').onclick = function() {
            var detailModal = bootstrap.Modal.getInstance(document.getElementById('productDetailModal'));
            if (detailModal) detailModal.hide();
            openEnquiryModal(title);
        };
        var modal = new bootstrap.Modal(document.getElementById('productDetailModal'));
        modal.show();
    }
</script>

<?php include('footer.php'); ?>