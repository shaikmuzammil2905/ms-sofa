
<?php include('header.php'); ?>


<!-- Page Header Banner -->
<section class="py-5 bg-dark text-white text-center position-relative" style="background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('images/collection/collection-1.jpg') center/cover no-repeat;">
    <div class="tf-container py-4">
        <span class="text-danger fw-bold text-uppercase tracking-wider fs-7">Soft Seating Catalogue</span>
        <h1 class="display-4 fw-bold text-white mt-2 mb-3">Executive Sofas & Lounge Seating</h1>
        <p class="fs-5 text-white-50 max-w-700 mx-auto" style="max-width: 750px;">
            Source: 2021 Viak Soft Seating Collection. Designed for corporate lounges, breakout zones, executive cabins, and reception lobbies.
        </p>
    </div>
</section>

<!-- Sofas & Soft Seating Catalogue -->
<div class="py-5 bg-white">
    <div class="tf-container">
        
        <div class="row g-4 mb-5">
            <!-- Lounge Chair -->
            <div class="col-lg-4 col-md-6">
                <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                    <img src="images/products/sofas/product-1.jpg" alt="Executive Lounge Chair" class="card-img-top" style="background: #ffffff;" onerror="this.src='images/categories/cat_soft_seating.jpg'">
                    <div class="card-body p-4 d-flex flex-column">
                        <span class="badge bg-light text-dark border align-self-start mb-2 fs-7">2021 Viak Soft Seating</span>
                        <h4 class="fw-bold text-dark mb-2">Executive Lounge Armchairs</h4>
                        <p class="text-secondary fs-7 flex-grow-1">Single-seat ergonomic lounge armchairs in premium leather or acoustic fabric upholstery with solid wood or metal leg bases.</p>
                        <button type="button" class="btn btn-danger text-uppercase fw-bold py-2 mt-3" onclick="openEnquiryModal('Executive Lounge Armchairs')">Enquire Now</button>
                    </div>
                </div>
            </div>

            <!-- Executive Sofas -->
            <div class="col-lg-4 col-md-6">
                <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                    <img src="images/products/sofas/product-2.jpg" alt="Executive Sofas" class="card-img-top" style="background: #ffffff;" onerror="this.src='images/categories/cat_soft_seating.jpg'">
                    <div class="card-body p-4 d-flex flex-column">
                        <span class="badge bg-light text-dark border align-self-start mb-2 fs-7">2021 Viak Soft Seating</span>
                        <h4 class="fw-bold text-dark mb-2">2 &amp; 3-Seater Executive Sofas</h4>
                        <p class="text-secondary fs-7 flex-grow-1">Sleek multi-seater reception couches featuring high-resilience foam cushioning and stain-resistant fabric finishes.</p>
                        <button type="button" class="btn btn-danger text-uppercase fw-bold py-2 mt-3" onclick="openEnquiryModal('2 & 3-Seater Executive Sofas')">Enquire Now</button>
                    </div>
                </div>
            </div>

            <!-- Collaborative Booths -->
            <div class="col-lg-4 col-md-6">
                <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                    <img src="images/products/sofas/product-3.jpg" alt="Collaborative Seating" class="card-img-top" style="background: #ffffff;" onerror="this.src='images/categories/cat_soft_seating.jpg'">
                    <div class="card-body p-4 d-flex flex-column">
                        <span class="badge bg-light text-dark border align-self-start mb-2 fs-7">2021 Viak Soft Seating</span>
                        <h4 class="fw-bold text-dark mb-2">Collaborative Booth Seating</h4>
                        <p class="text-secondary fs-7 flex-grow-1">High-back sound dampening collaborative booths creating semi-private discussion nooks in open offices.</p>
                        <button type="button" class="btn btn-danger text-uppercase fw-bold py-2 mt-3" onclick="openEnquiryModal('Collaborative Booth Seating')">Enquire Now</button>
                    </div>
                </div>
            </div>

            <!-- Pouffes -->
            <div class="col-lg-4 col-md-6">
                <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                    <img src="images/products/sofas/product-4.jpg" alt="Modular Pouffes" class="card-img-top" style="background: #ffffff;" onerror="this.src='images/categories/cat_soft_seating.jpg'">
                    <div class="card-body p-4 d-flex flex-column">
                        <span class="badge bg-light text-dark border align-self-start mb-2 fs-7">2021 Viak Soft Seating</span>
                        <h4 class="fw-bold text-dark mb-2">Geometrical Pouffes &amp; Ottomans</h4>
                        <p class="text-secondary fs-7 flex-grow-1">Flexible circular, hexagonal, and square soft pouffes designed for informal breakout areas and waiting zones.</p>
                        <button type="button" class="btn btn-danger text-uppercase fw-bold py-2 mt-3" onclick="openEnquiryModal('Geometrical Pouffes and Ottomans')">Enquire Now</button>
                    </div>
                </div>
            </div>

            <!-- Occasional Tables -->
            <div class="col-lg-4 col-md-6">
                <div class="card border h-100 shadow-sm rounded-3 overflow-hidden">
                    <img src="images/categories/cat_tables.jpg" alt="Occasional Tables" class="card-img-top" style="background: #ffffff;">
                    <div class="card-body p-4 d-flex flex-column">
                        <span class="badge bg-light text-dark border align-self-start mb-2 fs-7">2021 Viak Soft Seating</span>
                        <h4 class="fw-bold text-dark mb-2">Occasional Center Tables</h4>
                        <p class="text-secondary fs-7 flex-grow-1">Designer low-height coffee tables with veneered wood, marble, or glass tops matching lounge seating ensembles.</p>
                        <button type="button" class="btn btn-danger text-uppercase fw-bold py-2 mt-3" onclick="openEnquiryModal('Occasional Center Tables')">Enquire Now</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-light rounded-4 p-4 text-center">
            <h4 class="fw-bold text-dark mb-2">Looking for Customized Fabric & Leatherette Options?</h4>
            <p class="text-secondary mb-3">Our soft seating solutions are fully customizable in terms of colors, dimensions, and foam density.</p>
            <button type="button" class="btn btn-danger text-uppercase fw-bold px-4 py-2" onclick="openEnquiryModal('Customized Soft Seating Proposal')">Request Custom Upholstery Swatches</button>
        </div>

    </div>
</div>
<?php include('footer.php'); ?>