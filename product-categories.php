<?php include('header.php'); ?>

<!-- Page Header Banner -->
<section class="py-5 bg-dark text-white text-center position-relative" style="background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('images/sections/hero-workspace.jpg') center/cover no-repeat;">
    <div class="tf-container py-4">
        <span class="badge bg-danger text-uppercase px-3 py-2 mb-3 fw-bold tracking-widest fs-7">Corporate Product Catalogue</span>
        <h1 class="display-4 fw-bold text-white mt-2 mb-3">Workspace Furniture &amp; Solutions</h1>
        <p class="fs-5 text-white-50 max-w-700 mx-auto" style="max-width: 750px;">
            Explore our extensive catalogue of modular workstations, executive desks, ergonomic mesh chairs, acoustic pods, soft seating, carpets, and turnkey systems.
        </p>
    </div>
</section>

<!-- Category Filter Anchor Navigation -->
<div class="bg-light border-bottom sticky-top py-3 shadow-sm" style="z-index: 100;">
    <div class="tf-container overflow-auto">
        <div class="d-flex flex-nowrap align-items-center gap-2 text-nowrap">
            <span class="fw-bold text-dark me-2 fs-7">Jump to Category:</span>
            <a href="archlabs-catalogue.html" class="btn btn-danger btn-sm rounded-pill fs-7 px-3 fw-bold">&bull; ArchLabs Seating Catalogue</a>
            <a href="#workstations" class="btn btn-outline-dark btn-sm rounded-pill fs-7 px-3">Workstations</a>
            <a href="#tables" class="btn btn-outline-dark btn-sm rounded-pill fs-7 px-3">Tables</a>
            <a href="#storage" class="btn btn-outline-dark btn-sm rounded-pill fs-7 px-3">Storage</a>
            <a href="#seating" class="btn btn-outline-dark btn-sm rounded-pill fs-7 px-3">Seating</a>
            <a href="#soft-seating" class="btn btn-outline-dark btn-sm rounded-pill fs-7 px-3">Soft Seating</a>
            <a href="#pods" class="btn btn-outline-dark btn-sm rounded-pill fs-7 px-3">Pods</a>
            <a href="#carpets" class="btn btn-outline-dark btn-sm rounded-pill fs-7 px-3">Carpets</a>
            <a href="#outdoor" class="btn btn-outline-dark btn-sm rounded-pill fs-7 px-3">Outdoor</a>
            <a href="#educational" class="btn btn-outline-dark btn-sm rounded-pill fs-7 px-3">Educational</a>
            <a href="#accessories" class="btn btn-outline-dark btn-sm rounded-pill fs-7 px-3">Accessories</a>
        </div>
    </div>
</div>

<!-- Main Catalogue Container -->
<div class="py-5 bg-white">
    <div class="tf-container">

        <!-- FEATURED ARCHLABS SEATING BANNER -->
        <div class="bg-dark text-white rounded-4 p-4 p-md-5 mb-5 shadow-lg position-relative overflow-hidden" style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);">
            <div class="row align-items-center g-4">
                <div class="col-lg-8">
                    <span class="badge bg-danger text-uppercase px-3 py-2 fs-7 mb-2">Featured Catalogue 2026</span>
                    <h2 class="display-6 fw-bold text-white mb-2">ArchLabs Seating Collection</h2>
                    <p class="text-white-50 fs-6 mb-4">Complete 64-page seating collection featuring 30 Mesh Series models, 5 Leather Series models, 7 Training Series models, Metro Linea Public Seating, and Cafeteria Chairs.</p>
                    <div class="d-flex flex-wrap gap-3">
                        <a href="archlabs-catalogue.html" class="btn btn-danger btn-lg px-4 py-2 text-uppercase fw-bold fs-7">Explore ArchLabs Catalogue &rarr;</a>
                        <button type="button" class="btn btn-outline-light btn-lg px-4 py-2 text-uppercase fw-bold fs-7" onclick="openEnquiryModal('ArchLabs Full Seating Catalogue')">Enquire for ArchLabs Seating</button>
                    </div>
                </div>
                <div class="col-lg-4 text-center">
                    <img src="images/archlabs/pages/page_4.png" alt="ArchLabs Seating" class="img-fluid rounded-3 shadow" style="max-height: 240px; object-fit: contain;">
                </div>
            </div>
        </div>

        <!-- 1. WORKSTATIONS -->
        <section id="workstations" class="mb-5 pt-4">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <h2 class="fw-bold text-dark mb-0">Workstations</h2>
                    <small class="text-muted">Source: VIAK Catalogue</small>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Workstations Series')">Enquire for Workstations</button>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/sections/s-lookbook-1.jpg" alt="Height Adjustable Series" class="card-img-top" style="height: 220px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <span class="badge bg-light text-dark border align-self-start mb-2 fs-7">VIAK Catalogue</span>
                            <h4 class="fw-bold text-dark mb-2">Height Adjustable Series</h4>
                            <p class="text-secondary fs-7 flex-grow-1">Motorized sit-to-stand desks engineered for active workplace wellness, smooth height transitions, and integrated wire management.</p>
                            <div class="d-grid gap-2 mt-3">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Height Adjustable Series Workstations')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/collection/collection-1.jpg" alt="Desking Series" class="card-img-top" style="height: 220px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <span class="badge bg-light text-dark border align-self-start mb-2 fs-7">VIAK Catalogue</span>
                            <h4 class="fw-bold text-dark mb-2">Desking Series</h4>
                            <p class="text-secondary fs-7 flex-grow-1">Modular open-plan linear and back-to-back desking systems with minimalist leg profiles and customizable privacy screens.</p>
                            <div class="d-grid gap-2 mt-3">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Desking Series Workstations')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/header/prd-nav-1.jpg" alt="Panel Series" class="card-img-top" style="height: 220px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <span class="badge bg-light text-dark border align-self-start mb-2 fs-7">VIAK Catalogue</span>
                            <h4 class="fw-bold text-dark mb-2">Panel Series</h4>
                            <p class="text-secondary fs-7 flex-grow-1">Acoustic panel-based workstation partitions providing high acoustic privacy, raceway power conduits, and modular storage integration.</p>
                            <div class="d-grid gap-2 mt-3">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Panel Series Workstations')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2. TABLES -->
        <section id="tables" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <h2 class="fw-bold text-dark mb-0">Tables</h2>
                    <small class="text-muted">Source: VIAK Catalogue</small>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Executive & Conference Tables')">Enquire for Tables</button>
            </div>
            <div class="row g-4">
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/header/prd-nav-1.jpg" alt="Cabin Tables" class="card-img-top" style="height: 200px; object-fit: cover;">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Cabin Tables</h5>
                            <p class="text-secondary fs-7 flex-grow-1">Executive director and managerial desk setups with attached side return credenzas.</p>
                            <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2" onclick="openEnquiryModal('Cabin Tables')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/header/prd-nav-2.jpg" alt="Meeting Tables" class="card-img-top" style="height: 200px; object-fit: cover;">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Meeting Tables</h5>
                            <p class="text-secondary fs-7 flex-grow-1">Large boardroom conference tables equipped with pop-up connectivity boxes and cable trays.</p>
                            <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2" onclick="openEnquiryModal('Meeting Tables')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/sections/lookbook-item-1.jpg" alt="Cafe Tables" class="card-img-top" style="height: 200px; object-fit: cover;" onerror="this.src='images/sections/s-lookbook-1.jpg'">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Cafe Tables</h5>
                            <p class="text-secondary fs-7 flex-grow-1">Stylish cafeteria and pantry dining tables available in round, square, and high-counter designs.</p>
                            <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2" onclick="openEnquiryModal('Cafe Tables')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/collection/collection-1.jpg" alt="Training Tables" class="card-img-top" style="height: 200px; object-fit: cover;">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Training Tables</h5>
                            <p class="text-secondary fs-7 flex-grow-1">Foldable tilt-top training desks on lockable castors for reconfigurable seminar halls.</p>
                            <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2" onclick="openEnquiryModal('Training Tables')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. STORAGE -->
        <section id="storage" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <h2 class="fw-bold text-dark mb-0">Storage Systems</h2>
                    <small class="text-muted">Source: VIAK Catalogue</small>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Storage Systems')">Enquire for Storage</button>
            </div>
            <div class="row g-4">
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/sections/s-lookbook-2.jpg" alt="Prelam Storage" class="card-img-top" style="height: 200px; object-fit: cover;" onerror="this.src='images/collection/collection-1.jpg'">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Prelam Storage</h5>
                            <p class="text-secondary fs-7 flex-grow-1">Laminate wood credenzas, pedestals, and tall storage units matching workstation finishes.</p>
                            <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2" onclick="openEnquiryModal('Prelam Storage')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/sections/s-lookbook-1.jpg" alt="Metal Storage" class="card-img-top" style="height: 200px; object-fit: cover;">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Metal Storage</h5>
                            <p class="text-secondary fs-7 flex-grow-1">Powder-coated steel filing cabinets, lateral drawers, and central archive units.</p>
                            <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2" onclick="openEnquiryModal('Metal Storage')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/header/prd-nav-1.jpg" alt="Compactor Storage" class="card-img-top" style="height: 200px; object-fit: cover;">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Compactor Storage</h5>
                            <p class="text-secondary fs-7 flex-grow-1">High-density mobile rail compactor storage systems maximizing floor space utilization.</p>
                            <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2" onclick="openEnquiryModal('Compactor Storage')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/header/prd-nav-2.jpg" alt="Lockers" class="card-img-top" style="height: 200px; object-fit: cover;">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Locker Systems</h5>
                            <p class="text-secondary fs-7 flex-grow-1">Personal employee lockers with mechanical keypads, RFID locks, and ventilation slots.</p>
                            <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2" onclick="openEnquiryModal('Locker Systems')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 4. SEATING -->
        <section id="seating" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <h2 class="fw-bold text-dark mb-0">Ergonomic Seating</h2>
                    <small class="text-muted">Sources: ArchLabs, VIAK Chair Cat. 01 &amp; ESS Catalogue</small>
                </div>
                <a href="archlabs-catalogue.html" class="btn btn-danger btn-sm text-uppercase fw-bold">View ArchLabs Seating &rarr;</a>
            </div>
            <div class="row g-4">
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/archlabs/pages/page_4.png" alt="Mesh Chair" class="card-img-top" style="height: 200px; object-fit: cover; object-position: top;">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Mesh Chairs (30 Models)</h5>
                            <p class="text-secondary fs-7 flex-grow-1">Breathable lumbar-support task chairs with synchro-tilt mechanism and adjustable 3D armrests.</p>
                            <a href="archlabs-catalogue.html#mesh-series" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2">Explore Mesh Chairs</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/archlabs/pages/page_36.png" alt="Leather Chair" class="card-img-top" style="height: 200px; object-fit: cover; object-position: top;">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Leather Chairs (5 Models)</h5>
                            <p class="text-secondary fs-7 flex-grow-1">High-back executive leather armchairs with diamond stitch quilting and chrome base control.</p>
                            <a href="archlabs-catalogue.html#leather-series" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2">Explore Leather Chairs</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/archlabs/pages/page_43.png" alt="Training Chair" class="card-img-top" style="height: 200px; object-fit: cover; object-position: top;">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Training Chairs (7 Models)</h5>
                            <p class="text-secondary fs-7 flex-grow-1">Nesting training chairs equipped with writing tablets, wire baskets, and castor wheels.</p>
                            <a href="archlabs-catalogue.html#training-series" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2">Explore Training Chairs</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/archlabs/pages/page_57.png" alt="Cafe Chair" class="card-img-top" style="height: 200px; object-fit: cover; object-position: top;">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Cafe Chairs (7 Models)</h5>
                            <p class="text-secondary fs-7 flex-grow-1">Vibrant polypropelene and metal frame dining chairs for pantry breakouts.</p>
                            <a href="archlabs-catalogue.html#cafeteria-series" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2">Explore Cafe Chairs</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. SOFT SEATING -->
        <section id="soft-seating" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <h2 class="fw-bold text-dark mb-0">Soft Seating &amp; Lounge</h2>
                    <small class="text-muted">Source: 2021 Viak Soft Seating Catalogue</small>
                </div>
                <a href="product-sofas.html" class="btn btn-danger btn-sm text-uppercase fw-bold">View Full Sofas Page &rarr;</a>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/collection/collection-1.jpg" alt="Lounge & Sofas" class="card-img-top" style="height: 220px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Lounge &amp; Executive Sofas</h4>
                            <p class="text-secondary fs-7 flex-grow-1">Single, two, and three-seater plush upholstered couches for reception areas and executive suites.</p>
                            <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-3" onclick="openEnquiryModal('Lounge and Executive Sofas')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/sections/s-lookbook-1.jpg" alt="Collaborative Seating" class="card-img-top" style="height: 220px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Collaborative Seating</h4>
                            <p class="text-secondary fs-7 flex-grow-1">Modular curved sofas and high-back acoustic booth seating for agile team huddles.</p>
                            <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-3" onclick="openEnquiryModal('Collaborative Modular Seating')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/header/prd-nav-1.jpg" alt="Pouffes & Tables" class="card-img-top" style="height: 220px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Pouffes &amp; Occasional Tables</h4>
                            <p class="text-secondary fs-7 flex-grow-1">Geometrical soft pouffes, ottomans, and companion coffee center tables.</p>
                            <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-3" onclick="openEnquiryModal('Pouffes and Coffee Tables')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. PODS -->
        <section id="pods" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <h2 class="fw-bold text-dark mb-0">Acoustic Work Pods</h2>
                    <small class="text-muted">Source: DURIAN Catalogue</small>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Acoustic Pods')">Enquire for Pods</button>
            </div>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/sections/s-lookbook-1.jpg" alt="Single Phone Pod" class="card-img-top" style="height: 260px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Single Acoustic Phone Pod</h4>
                            <p class="text-secondary fs-7 flex-grow-1">Sound-insulated solo booth equipped with air ventilation, LED lighting, power outlets, and laptop shelf for private calls.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold py-2 mt-2" onclick="openEnquiryModal('Single Acoustic Phone Pod')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/collection/collection-1.jpg" alt="Meeting Pod" class="card-img-top" style="height: 260px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">4-6 Person Meeting Pod</h4>
                            <p class="text-secondary fs-7 flex-grow-1">Fully enclosed acoustic meeting booth complete with integrated sofa seating, TV monitor mounting bracket, and power hubs.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold py-2 mt-2" onclick="openEnquiryModal('4-6 Person Meeting Pod')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 7. CARPETS -->
        <section id="carpets" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <h2 class="fw-bold text-dark mb-0">Interface Carpets</h2>
                    <small class="text-muted">Source: INTERFACE CARPETS</small>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Interface Carpet Tiles')">Enquire for Carpets</button>
            </div>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/sections/lookbook-item-1.jpg" alt="Interface Carpet Tiles" class="card-img-top" style="height: 240px; object-fit: cover;" onerror="this.src='images/collection/collection-1.jpg'">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Interface Carpet Tiles</h4>
                            <p class="text-secondary fs-7 flex-grow-1">Modular acoustic carpet tiles available in contemporary geometric patterns, stain-resistant fibers, and sound dampening backing.</p>
                            <button type="button" class="btn btn-outline-danger text-uppercase fw-bold py-2 mt-2" onclick="openEnquiryModal('Interface Carpet Tiles')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 8. OUTDOOR -->
        <section id="outdoor" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <h2 class="fw-bold text-dark mb-0">Outdoor Furniture</h2>
                    <small class="text-muted">Source: LOOM CRAFTS</small>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Loom Crafts Outdoor')">Enquire for Outdoor</button>
            </div>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/sections/lookbook-item-2.jpg" alt="Loom Crafts Outdoor" class="card-img-top" style="height: 240px; object-fit: cover;" onerror="this.src='images/sections/s-lookbook-1.jpg'">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Loom Crafts Terrace &amp; Cafe Seating</h4>
                            <p class="text-secondary fs-7 flex-grow-1">Weather-resistant synthetic wicker and aluminum outdoor lounge sets, patio umbrellas, and dining tables.</p>
                            <button type="button" class="btn btn-outline-danger text-uppercase fw-bold py-2 mt-2" onclick="openEnquiryModal('Loom Crafts Outdoor Furniture')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 9. EDUCATIONAL -->
        <section id="educational" class="mb-5 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <h2 class="fw-bold text-dark mb-0">Educational Furniture</h2>
                    <small class="text-muted">Sources: VIAK School Furniture &amp; DURIAN</small>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Educational Furniture')">Enquire for Institutions</button>
            </div>
            <div class="row g-4">
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/header/prd-nav-1.jpg" alt="Classroom Desks" class="card-img-top" style="height: 180px; object-fit: cover;">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Classroom Desks</h5>
                            <p class="text-secondary fs-7 flex-grow-1">Single and dual-bench student desks with bag hooks and book shelves.</p>
                            <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2" onclick="openEnquiryModal('Classroom Desks')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/header/prd-nav-2.jpg" alt="Library Units" class="card-img-top" style="height: 180px; object-fit: cover;">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Library Furniture</h5>
                            <p class="text-secondary fs-7 flex-grow-1">Study carrels, reading tables, and heavy-duty double-sided book racks.</p>
                            <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2" onclick="openEnquiryModal('Library Furniture')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/sections/s-lookbook-2.jpg" alt="Hostel Furniture" class="card-img-top" style="height: 180px; object-fit: cover;" onerror="this.src='images/collection/collection-1.jpg'">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Hostel Furniture</h5>
                            <p class="text-secondary fs-7 flex-grow-1">Metal bunk beds, study tables, and wardrobe locker units.</p>
                            <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2" onclick="openEnquiryModal('Hostel Furniture')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/collection/collection-1.jpg" alt="Auditorium Seating" class="card-img-top" style="height: 180px; object-fit: cover;">
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="fw-bold text-dark mb-1">Auditorium Seating</h5>
                            <p class="text-secondary fs-7 flex-grow-1">Cushioned tip-up auditorium chairs with writing tablets and row numbering.</p>
                            <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase mt-2" onclick="openEnquiryModal('Auditorium Seating')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 10. ACCESSORIES -->
        <section id="accessories" class="mb-4 pt-4 border-top">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <h2 class="fw-bold text-dark mb-0">Workspace Accessories</h2>
                    <small class="text-muted">Source: OEM &amp; VIAK</small>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Workspace Accessories')">Enquire for Accessories</button>
            </div>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                        <img src="images/header/prd-nav-1.jpg" alt="Workspace Accessories" class="card-img-top" style="height: 220px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Ergonomic Arms &amp; Power Management</h4>
                            <p class="text-secondary fs-7 flex-grow-1">Gas-spring dual monitor arms, under-desk cable trays, vertical wire serpents, and pop-up power modules.</p>
                            <button type="button" class="btn btn-outline-danger text-uppercase fw-bold py-2 mt-2" onclick="openEnquiryModal('Workspace Accessories & Power Modules')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>

<?php include('footer.php'); ?>