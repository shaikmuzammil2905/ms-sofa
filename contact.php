
<?php include('header.php'); ?>


<!-- Page Header Banner -->
<section class="py-5 bg-dark text-white text-center position-relative" style="background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('images/sections/hero-workspace.jpg') center/cover no-repeat;">
    <div class="tf-container py-4">
        <span class="text-danger fw-bold text-uppercase tracking-wider fs-7">Get in Touch</span>
        <h1 class="display-4 fw-bold text-white mt-2 mb-3">Let's Build Better Workspaces Together</h1>
        <p class="fs-5 text-white-50 max-w-700 mx-auto" style="max-width: 700px;">
            Have a new office setup, furniture replacement, or turnkey workspace requirement? Contact our team of experts today.
        </p>
    </div>
</section>

<!-- Main Contact Section -->
<section class="py-5 bg-white">
    <div class="tf-container py-4">
        <div class="row g-5">
            
            <!-- Contact Form -->
            <div class="col-lg-7">
                <div class="bg-light p-4 p-md-5 rounded-4 shadow-sm border">
                    <span class="text-danger fw-bold text-uppercase tracking-wider fs-7 d-block mb-2">Corporate Inquiry</span>
                    <h3 class="fw-bold text-dark mb-4">Send Us Your Requirement</h3>

                    <form id="mainContactForm" onsubmit="event.preventDefault(); alert('Thank you for submitting your enquiry to Vishista Office Solutions! Our representative will get back to you shortly.'); this.reset();">
                        <div class="row g-3 mb-3">
                            <div class="col-md-6">
                                <label class="form-label text-dark fw-semibold fs-7 mb-1">Your Full Name *</label>
                                <input type="text" class="form-control" required placeholder="Enter full name" style="border-radius: 6px; padding: 12px 14px;">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label text-dark fw-semibold fs-7 mb-1">Company Name</label>
                                <input type="text" class="form-control" placeholder="Organization name" style="border-radius: 6px; padding: 12px 14px;">
                            </div>
                        </div>

                        <div class="row g-3 mb-3">
                            <div class="col-md-6">
                                <label class="form-label text-dark fw-semibold fs-7 mb-1">Phone Number *</label>
                                <input type="tel" class="form-control" required placeholder="Mobile or landline" style="border-radius: 6px; padding: 12px 14px;">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label text-dark fw-semibold fs-7 mb-1">Email Address *</label>
                                <input type="email" class="form-control" required placeholder="name@company.com" style="border-radius: 6px; padding: 12px 14px;">
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label text-dark fw-semibold fs-7 mb-1">Product / Service Interested In</label>
                            <select class="form-select" style="border-radius: 6px; padding: 12px 14px;">
                                <option value="">Select a Category / Service</option>
                                <option value="Workstations">Modular Workstations (Desking / Height Adjustable / Panel)</option>
                                <option value="Tables">Executive & Conference Tables</option>
                                <option value="Storage">Storage Systems & Lockers</option>
                                <option value="Seating">Ergonomic Mesh & Leather Chairs</option>
                                <option value="Soft Seating">Soft Seating & Executive Sofas</option>
                                <option value="Pods">Acoustic Work Pods</option>
                                <option value="Carpets">Interface Carpet Tiles</option>
                                <option value="Outdoor">Outdoor Loom Crafts Furniture</option>
                                <option value="Educational">Educational & Classroom Furniture</option>
                                <option value="Turnkey">Turnkey Workspace Interiors</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="form-label text-dark fw-semibold fs-7 mb-1">Message / Requirements *</label>
                            <textarea class="form-control" rows="4" required placeholder="Please describe your space area, floor plan details, seating capacity, or estimated timeline..." style="border-radius: 6px; padding: 12px 14px;"></textarea>
                        </div>

                        <div class="d-grid gap-3">
                            <button type="submit" class="btn btn-danger btn-lg text-uppercase fw-bold" style="border-radius: 6px; background-color: #d32f2f; border: none; padding: 14px;">
                                Submit Enquiry &rarr;
                            </button>
                            <a href="https://wa.me/919849058444" target="_blank" class="btn btn-outline-success btn-lg fw-bold d-flex align-items-center justify-content-center gap-2" style="border-radius: 6px; padding: 12px;">
                                Quick Connect on WhatsApp (+91 9849058444)
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Office Details & Address -->
            <div class="col-lg-5">
                <div class="d-flex flex-column gap-4 h-100">
                    
                    <!-- Head Office Box -->
                    <div class="card border-0 shadow-sm p-4 rounded-4 bg-dark text-white">
                        <span class="text-danger fw-bold text-uppercase tracking-wider fs-7 d-block mb-2">Corporate Office</span>
                        <h4 class="fw-bold text-white mb-3">Vishista Office Solutions Pvt Ltd</h4>
                        
                        <div class="d-flex gap-3 mb-3">
                            <div class="text-danger fs-4"><i class="icon icon-storefront"></i></div>
                            <div>
                                <strong class="text-white">Registered Address:</strong>
                                <p class="text-white-50 mb-0 fs-7" style="line-height: 1.6;">
                                    Saishruthi Nilyam, Street No. 4,<br>
                                    Sri Sathya Sai Enclave, Plot No. 109,<br>
                                    Satya Sai Enclave Main Rd, Old Bowenpally,<br>
                                    Secunderabad, Telangana 500009
                                </p>
                            </div>
                        </div>

                        <div class="d-flex gap-3 mb-3" id="directions">
                            <div class="text-danger fs-4"><i class="icon icon-caret-right"></i></div>
                            <div>
                                <strong class="text-white">Google Maps Directions:</strong><br>
                                <a href="https://maps.app.goo.gl/Svm1wBx323dVFtx18" target="_blank" class="btn btn-danger btn-sm text-uppercase fw-bold mt-2" style="border-radius: 4px; font-size: 12px;">
                                    Get Directions on Google Maps &rarr;
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Direct Communication Box -->
                    <div class="card border-0 shadow-sm p-4 rounded-4 bg-light border">
                        <h5 class="fw-bold text-dark mb-3">Direct Contact Channels</h5>
                        
                        <div class="mb-3">
                            <strong class="text-dark d-block mb-1 fs-7">Official Email Addresses:</strong>
                            <ul class="list-unstyled mb-0 fs-7 d-flex flex-column gap-1">
                                <li>&bull; <a href="mailto:info@vishistaofficesolutions.com" class="text-danger text-decoration-none fw-semibold">info@vishistaofficesolutions.com</a></li>
                                <li>&bull; <a href="mailto:sales@vishistaofficesolutions.com" class="text-danger text-decoration-none fw-semibold">sales@vishistaofficesolutions.com</a></li>
                                <li>&bull; <a href="mailto:kvramana.reddy@vishistaofficesolutions.com" class="text-danger text-decoration-none fw-semibold">kvramana.reddy@vishistaofficesolutions.com</a></li>
                            </ul>
                        </div>

                        <div>
                            <strong class="text-dark d-block mb-1 fs-7">Phone / WhatsApp Support:</strong>
                            <a href="https://wa.me/919849058444" target="_blank" class="fs-5 fw-bold text-success text-decoration-none d-inline-flex align-items-center gap-2">
                                +91 9849058444
                            </a>
                        </div>
                    </div>

                    <!-- Regional Coverage -->
                    <div class="card border-0 shadow-sm p-4 rounded-4 bg-white border mb-4">
                        <h6 class="fw-bold text-dark mb-2">Regional Service Coverage</h6>
                        <p class="text-secondary fs-7 mb-0">Serving corporate hubs across Telangana (Hyderabad, Secunderabad, Gachibowli, HITEC City) and Andhra Pradesh (Vijayawada, Visakhapatnam, Tirupati).</p>
                    </div>

                    <!-- Interactive Google Maps Location (Matching image copy 71.png) -->
                    <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
                        <div class="bg-dark text-white p-3 d-flex justify-content-between align-items-center">
                            <span class="fw-bold fs-7 text-uppercase"><i class="icon icon-storefront me-2 text-danger"></i>Head Office Map Location</span>
                            <a href="https://maps.app.goo.gl/Svm1wBx323dVFtx18" target="_blank" class="btn btn-danger btn-sm text-uppercase fw-bold fs-8 py-1">Open Maps &rarr;</a>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5186256247926!2d78.4756593!3d17.4827598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a918a38ef2f%3A0x4a9b2b52fa102434!2sSaishruthi%20Nilyam%2C%20Street%20No.%204%2C%20Sri%20Sathya%20Sai%20Enclave%2C%20Old%20Bowenpally%2C%20Secunderabad%2C%20Telangana%20500009!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" width="100%" height="260" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>

        </div>
    </div>
</section>

<?php include('footer.php'); ?>
