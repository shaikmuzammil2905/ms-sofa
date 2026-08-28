
<?php include('header.php'); ?>


<!-- Animated Hero Section -->
<section class="hero-animated-section position-relative text-white overflow-hidden py-5 d-flex align-items-center" style="min-height: 88vh;">
    <!-- Animated Background Image Container -->
    <div class="hero-bg-animated-wrapper">
        <img src="images/sections/hero-workspace.jpg" alt="Vishista Modern Office Solutions" class="hero-bg-img">
        <div class="hero-bg-overlay"></div>
    </div>

    <div class="tf-container position-relative py-5" style="z-index: 2;">
        <div class="row align-items-center g-4">
            <div class="col-lg-9 col-xl-8">
                
                <!-- Animated Badge -->
                <div class="hero-badge-wrap mb-4">
                    <span class="badge hero-badge text-uppercase px-3 py-2 fw-bold tracking-widest fs-7">
                        <i class="icon icon-storefront me-2"></i> Vishista Office Solutions Pvt Ltd
                    </span>
                </div>

                <!-- Animated Main Heading -->
                <h1 class="display-3 fw-extrabold text-white mb-4 hero-title" style="line-height: 1.12; font-family: 'Inter', sans-serif;">
                    Transforming Workspaces.<br>
                    <span class="text-gradient-red">Elevating Possibilities.</span>
                </h1>

                <!-- Animated Subheading -->
                <p class="fs-5 text-white mb-5 hero-subtitle fw-semibold" style="max-width: 720px; line-height: 1.7; font-size: 1.25rem !important;">
                    <span class="px-3 py-2 rounded text-white d-inline-block shadow-sm" style="background: rgba(0, 0, 0, 0.65); backdrop-filter: blur(6px); border: 1px solid rgba(255,255,255,0.25);">
                        Premium office furniture, interior systems, and turnkey workspace solutions designed for modern corporate businesses, MNCs, educational institutions, and professional environments.
                    </span>
                </p>

            </div>
        </div>
    </div>
</section>

<style>
    .hero-animated-section {
        background-color: #0f0f0f;
    }
    .hero-bg-animated-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 1;
    }
    .hero-bg-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        animation: heroKenBurns 22s infinite alternate ease-in-out;
    }
    .hero-bg-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.35) 55%, rgba(0,0,0,0.2) 100%);
    }

    @keyframes heroKenBurns {
        0% {
            transform: scale(1) translate(0, 0);
        }
        100% {
            transform: scale(1.08) translate(-15px, -10px);
        }
    }

    .hero-badge-wrap {
        animation: fadeInDown 0.8s ease-out forwards;
    }
    .hero-badge {
        background: rgba(211, 47, 47, 0.25);
        border: 1px solid rgba(211, 47, 47, 0.6);
        color: #ff5252;
        border-radius: 50px;
        backdrop-filter: blur(8px);
        letter-spacing: 1px;
    }

    .hero-title {
        animation: fadeInUp 0.9s ease-out 0.2s both;
    }
    .text-gradient-red {
        background: linear-gradient(135deg, #ff5252 0%, #ff1744 50%, #ff8a80 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .hero-subtitle {
        animation: fadeInUp 0.9s ease-out 0.4s both;
    }

    .hero-actions {
        animation: fadeInUp 0.9s ease-out 0.6s both;
    }

    .hero-btn-primary {
        background-color: #d32f2f;
        border: none;
        border-radius: 6px;
        font-size: 15px;
        box-shadow: 0 8px 25px rgba(211, 47, 47, 0.4);
        transition: all 0.3s ease;
    }
    .hero-btn-primary:hover {
        background-color: #b71c1c;
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(211, 47, 47, 0.6);
    }

    .hero-btn-secondary {
        border-radius: 6px;
        font-size: 15px;
        backdrop-filter: blur(4px);
        transition: all 0.3s ease;
    }
    .hero-btn-secondary:hover {
        background-color: rgba(255,255,255,0.15);
        transform: translateY(-3px);
    }

    .hero-stats {
        animation: fadeInUp 0.9s ease-out 0.8s both;
    }

    .glass-stat-chip {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        padding: 8px 16px;
        border-radius: 50px;
        backdrop-filter: blur(10px);
        display: inline-flex;
        align-items: center;
        transition: all 0.3s ease;
        animation: heroFloat 4s infinite ease-in-out;
    }
    .glass-stat-chip:hover {
        background: rgba(255, 255, 255, 0.16);
        border-color: rgba(255, 82, 82, 0.5);
    }

    @keyframes heroFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>

<!-- Company Introduction Section -->
<section class="py-5 bg-light">
    <div class="tf-container py-4">
        <div class="row align-items-center g-5">
            <div class="col-lg-6">
                <div class="pe-lg-4">
                    <span class="text-danger fw-extrabold text-uppercase tracking-wider fs-6 d-block mb-2" style="letter-spacing: 1.5px;">Corporate Overview</span>
                    <h2 class="fw-extrabold text-dark mb-4" style="font-size: 3.2rem !important; line-height: 1.15; font-weight: 800 !important; color: #111111 !important;">
                        Creating Workspaces That Work for You
                    </h2>
                    <p class="text-dark fw-bold mb-3" style="font-size: 1.35rem !important; line-height: 1.7; color: #111111 !important;">
                        <strong>Vishista Office Solutions Pvt Ltd</strong> is a leading provider of premium office furniture, interior systems, and turnkey workspace solutions, serving corporate, commercial, and institutional clients across Telangana and Andhra Pradesh.
                    </p>
                    <p class="text-dark fw-bold mb-3" style="font-size: 1.35rem !important; line-height: 1.7; color: #111111 !important;">
                        With a strong focus on quality, innovation, and customer satisfaction, the company delivers modern, efficient, and future-ready work environments tailored to the evolving needs of today's businesses.
                    </p>
                    <p class="text-dark fw-bold mb-4" style="font-size: 1.35rem !important; line-height: 1.7; color: #111111 !important;">
                        Our expertise spans design consultation, product selection, multi-vendor coordination, installation, and dedicated after-sales support — making us a trusted partner for organizations seeking reliable and professional workspace transformation.
                    </p>
                    <a href="about.html" class="btn btn-dark btn-lg px-4 py-3 fw-bold text-uppercase shadow-sm" style="border-radius: 4px; font-size: 14px;">
                        Discover Our Story &rarr;
                    </a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="position-relative rounded-4 overflow-hidden shadow-lg border border-secondary-subtle">
                    <img src="images/sections/corporate-chair.jpg" alt="Corporate Executive Workspace" class="img-fluid w-100" style="object-fit: cover; min-height: 440px;">
                    <div class="position-absolute bottom-0 start-0 w-100 p-4" style="background: linear-gradient(transparent, rgba(0,0,0,0.85));">
                        <span class="text-white-50 text-uppercase fs-7 fw-semibold">Turnkey Execution</span>
                        <h4 class="text-white fw-bold mb-0">End-to-End Office Interior Systems</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Explore Our Workspace Solutions (Product Categories Grid) -->
<section class="py-5 bg-white">
    <div class="tf-container py-4">
        <div class="text-center mb-5" style="max-width: 700px; margin: 0 auto;">
            <span class="text-danger fw-bold text-uppercase tracking-wider fs-7">Product Categories</span>
            <h2 class="display-6 fw-bold text-dark mt-2 mb-3">Explore Our Workspace Solutions</h2>
            <p class="text-secondary">Discover our comprehensive collection of modular office furniture, ergonomic seating, acoustic pods, and turnkey architectural products.</p>
        </div>

        <div class="row g-4">
            
            <!-- Workstations -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <div class="position-relative overflow-hidden" style="height: 240px;">
                        <img src="images/sections/cat-1.jpg" alt="Workstations" class="w-100 h-100" style="object-fit: cover; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold">Modular Workspace</span>
                    </div>
                    <div class="card-body p-4 d-flex flex-column">
                        <h4 class="fw-bold text-dark mb-2">Workstations</h4>
                        <p class="text-secondary fs-7 mb-4 flex-grow-1">Height Adjustable Series, Desking Series, and Panel Series designed for collaborative and ergonomic team layouts.</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="product-categories.html#workstations" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-bold p-0 text-decoration-none" onclick="openEnquiryModal('Workstations Series')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tables -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <div class="position-relative overflow-hidden" style="height: 240px;">
                        <img src="images/sections/cat-2.jpg" alt="Tables" class="w-100 h-100" style="object-fit: cover; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold">Executive Suite</span>
                    </div>
                    <div class="card-body p-4 d-flex flex-column">
                        <h4 class="fw-bold text-dark mb-2">Tables</h4>
                        <p class="text-secondary fs-7 mb-4 flex-grow-1">Executive Cabin Tables, Conference Meeting Tables, Cafe Tables, and Modular Training Tables for modern corporate suites.</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="product-categories.html#tables" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-bold p-0 text-decoration-none" onclick="openEnquiryModal('Corporate Tables')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Storage -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <div class="position-relative overflow-hidden" style="height: 240px;">
                        <img src="images/sections/cat-3.jpg" alt="Storage" class="w-100 h-100" style="object-fit: cover; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold">Storage Systems</span>
                    </div>
                    <div class="card-body p-4 d-flex flex-column">
                        <h4 class="fw-bold text-dark mb-2">Storage Systems</h4>
                        <p class="text-secondary fs-7 mb-4 flex-grow-1">Prelam Storage Credenzas, Heavy-Duty Metal Filing Cabinets, High-Density Compactor Storage, and Personal Lockers.</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="product-categories.html#storage" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-bold p-0 text-decoration-none" onclick="openEnquiryModal('Storage Systems')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Seating -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <div class="position-relative overflow-hidden" style="height: 240px;">
                        <img src="images/categories/cat_seating.jpg" alt="Seating" class="w-100 h-100" style="object-fit: cover; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold">Ergonomic Seating</span>
                    </div>
                    <div class="card-body p-4 d-flex flex-column">
                        <h4 class="fw-bold text-dark mb-2">Ergonomic Seating</h4>
                        <p class="text-secondary fs-7 mb-4 flex-grow-1">Premium High-Back Mesh Chairs, Genuine Leather Executive Armchairs, Training Chairs, and Cafe Seating.</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="product-categories.html#seating" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-bold p-0 text-decoration-none" onclick="openEnquiryModal('Ergonomic Chairs')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Soft Seating -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <div class="position-relative overflow-hidden" style="height: 240px;">
                        <img src="images/categories/cat_soft_seating.jpg" alt="Soft Seating" class="w-100 h-100" style="object-fit: cover; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold">Lounge &amp; Sofas</span>
                    </div>
                    <div class="card-body p-4 d-flex flex-column">
                        <h4 class="fw-bold text-dark mb-2">Soft Seating &amp; Lounge</h4>
                        <p class="text-secondary fs-7 mb-4 flex-grow-1">Lounge Chairs, Executive Sofas, Modular Collaborative Seating, Pouffes, and Occasional Center Tables.</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="product-sofas.html" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-bold p-0 text-decoration-none" onclick="openEnquiryModal('Soft Seating & Sofas')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pods -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <div class="position-relative overflow-hidden" style="height: 240px;">
                        <img src="images/categories/cat_pods.jpg" alt="Pods" class="w-100 h-100" style="object-fit: cover; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold">Acoustic Pods</span>
                    </div>
                    <div class="card-body p-4 d-flex flex-column">
                        <h4 class="fw-bold text-dark mb-2">Acoustic Work Pods</h4>
                        <p class="text-secondary fs-7 mb-4 flex-grow-1">Private Acoustic Phone Pods and Collaborative Meeting Pods engineered for sound isolation and distraction-free calls.</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="product-categories.html#pods" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-bold p-0 text-decoration-none" onclick="openEnquiryModal('Acoustic Work Pods')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Carpets -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <div class="position-relative overflow-hidden" style="height: 240px;">
                        <img src="images/sections/lookbook-item-1.jpg" alt="Carpets" class="w-100 h-100" style="object-fit: cover; transition: transform 0.5s ease;" onerror="this.src='images/sections/hero-workspace.jpg'">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold">Carpet Flooring</span>
                    </div>
                    <div class="card-body p-4 d-flex flex-column">
                        <h4 class="fw-bold text-dark mb-2">Interface Carpets</h4>
                        <p class="text-secondary fs-7 mb-4 flex-grow-1">High-performance Interface Carpet Tiles designed for heavy traffic commercial office floors.</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="product-categories.html#carpets" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-bold p-0 text-decoration-none" onclick="openEnquiryModal('Interface Carpet Tiles')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Outdoor -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <div class="position-relative overflow-hidden" style="height: 240px;">
                        <img src="images/categories/cat_tables.jpg" alt="Outdoor" class="w-100 h-100" style="object-fit: cover; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold">Terrace &amp; Patio</span>
                    </div>
                    <div class="card-body p-4 d-flex flex-column">
                        <h4 class="fw-bold text-dark mb-2">Outdoor Furniture</h4>
                        <p class="text-secondary fs-7 mb-4 flex-grow-1">Weatherproof Loom Crafts outdoor lounge sets, patio tables, and terrace seating for corporate cafeterias.</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="product-categories.html#outdoor" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-bold p-0 text-decoration-none" onclick="openEnquiryModal('Outdoor Loom Crafts Furniture')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Educational -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <div class="position-relative overflow-hidden" style="height: 240px;">
                        <img src="images/header/prd-nav-1.jpg" alt="Educational" class="w-100 h-100" style="object-fit: cover; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold">Campus Solutions</span>
                    </div>
                    <div class="card-body p-4 d-flex flex-column">
                        <h4 class="fw-bold text-dark mb-2">Educational Solutions</h4>
                        <p class="text-secondary fs-7 mb-4 flex-grow-1">Ergonomic Classroom Desks, Library Furniture, Hostel Storage Units, and Heavy-Duty Auditorium Seating.</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="product-categories.html#educational" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-bold p-0 text-decoration-none" onclick="openEnquiryModal('Educational Furniture')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section class="py-5 bg-light">
    <div class="tf-container py-4">
        <div class="text-center mb-5" style="max-width: 700px; margin: 0 auto;">
            <span class="text-danger fw-bold text-uppercase tracking-wider fs-7">Our Excellence</span>
            <h2 class="display-6 fw-bold text-dark mt-2 mb-3">Why Choose Vishista Office Solutions</h2>
            <p class="text-secondary">We combine deep domain experience with premium product lines to deliver world-class turnkey workspace environments.</p>
        </div>

        <div class="scrolling-marquee-container">
            <div class="scrolling-marquee-track">
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">01</span>
                    <h5 class="fw-bold text-dark mb-2">20+ Years of Industry Expertise</h5>
                    <p class="text-secondary fs-7 mb-0">Decades of leadership delivering complex, large-scale MNC and enterprise workspace projects across South India.</p>
                </div>
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">02</span>
                    <h5 class="fw-bold text-dark mb-2">End-to-End Workspace Solutions</h5>
                    <p class="text-secondary fs-7 mb-0">Complete single-window support from initial space planning and product selection to installation and after-sales care.</p>
                </div>
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">03</span>
                    <h5 class="fw-bold text-dark mb-2">Trusted by Large MNCs</h5>
                    <p class="text-secondary fs-7 mb-0">Proven track record of fulfilling strict architectural standards and multi-vendor requirements for global corporations.</p>
                </div>
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">04</span>
                    <h5 class="fw-bold text-dark mb-2">Premium OEM Partnerships</h5>
                    <p class="text-secondary fs-7 mb-0">Direct access to industry-leading manufacturers including VIAK, ESS, DURIAN, Interface, and Loom Crafts.</p>
                </div>
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">05</span>
                    <h5 class="fw-bold text-dark mb-2">Customer-Centric Approach</h5>
                    <p class="text-secondary fs-7 mb-0">Customized layout proposals tailored specifically to your floor plan, corporate identity, and budget targets.</p>
                </div>
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">06</span>
                    <h5 class="fw-bold text-dark mb-2">Strong Leadership Execution</h5>
                    <p class="text-secondary fs-7 mb-0">Guided by seasoned executives with extensive background in executive workspace systems.</p>
                </div>
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">07</span>
                    <h5 class="fw-bold text-dark mb-2">Timely Delivery, Every Time</h5>
                    <p class="text-secondary fs-7 mb-0">Streamlined supply chain logistics and dedicated site supervision ensuring prompt project handovers.</p>
                </div>
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">08</span>
                    <h5 class="fw-bold text-dark mb-2">Commitment to Excellence</h5>
                    <p class="text-secondary fs-7 mb-0">Uncompromising quality assurance across materials, structural integrity, and ergonomic performance.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action Banner -->
<section class="py-5 text-white" style="background: linear-gradient(135deg, #1e1e1e 0%, #3a3a3a 100%);">
    <div class="tf-container text-center py-4">
        <h2 class="display-6 fw-bold text-white mb-3">Ready to Elevate Your Workspace?</h2>
        <p class="fs-5 text-white-50 mb-4" style="max-width: 650px; margin: 0 auto;">
            Connect with our workspace design specialists today to schedule a consultation or receive a detailed corporate proposal.
        </p>
        <div class="d-flex justify-content-center flex-wrap gap-3">
            <button type="button" class="btn btn-danger btn-lg px-4 py-3 fw-bold text-uppercase" style="border-radius: 4px; background-color: #d32f2f; border: none; font-size: 15px;" data-bs-toggle="modal" data-bs-target="#enquireModal">
                Enquire About Workspaces &rarr;
            </button>
            <a href="https://wa.me/919849058444" target="_blank" class="btn btn-success btn-lg px-4 py-3 fw-bold text-uppercase d-inline-flex align-items-center gap-2" style="border-radius: 4px; font-size: 15px;">
                Chat on WhatsApp (+91 9849058444)
            </a>
        </div>
    </div>
</section>

<style>
    .product-cat-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 30px rgba(0,0,0,0.12) !important;
    }
    .product-cat-card:hover img {
        transform: scale(1.05);
    }
</style><?php include('footer.php'); ?>