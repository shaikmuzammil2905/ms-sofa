
<?php include('header.php'); ?>


<!-- Page Header Banner -->
<section class="py-5 text-white text-center position-relative" style="background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('images/sections/hero-workspace.jpg') center/cover no-repeat;">
    <div class="tf-container py-5">
        <span class="text-danger fw-black text-uppercase tracking-wider d-block mb-2" style="font-size: 1.3rem !important; letter-spacing: 2px; font-weight: 900 !important; color: #ff5252 !important;">Get in Touch</span>
        <h1 class="display-3 fw-black text-white mt-2 mb-3" style="font-weight: 900 !important; text-shadow: 0 4px 15px rgba(0,0,0,0.6);">Let's Build Better Workspaces Together</h1>
        <p class="text-white mx-auto fw-bold" style="max-width: 850px; font-size: 1.45rem !important; line-height: 1.7; text-shadow: 0 2px 10px rgba(0,0,0,0.8); color: #ffffff !important;">
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
                    <span class="text-danger fw-black text-uppercase tracking-wider d-block mb-2" style="font-size: 1.3rem !important; letter-spacing: 1.5px; font-weight: 800 !important; color: #d32f2f !important;">Corporate Inquiry</span>
                    <h3 class="fw-extrabold text-dark mb-4" style="font-size: 2.5rem !important; font-weight: 900 !important; color: #111111 !important;">Send Us Your Requirement</h3>

                    <form id="mainContactForm" onsubmit="handleEnquirySubmit(event)">
                        <div class="row g-4 mb-4">
                            <div class="col-md-6">
                                <label class="form-label text-dark fw-extrabold mb-2" style="font-size: 1.3rem !important; color: #111111 !important; font-weight: 800 !important;">Your Full Name *</label>
                                <input type="text" class="form-control" required placeholder="Enter full name" style="border-radius: 8px; padding: 16px 18px; font-size: 1.2rem !important; font-weight: 600 !important; color: #111111 !important;">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label text-dark fw-extrabold mb-2" style="font-size: 1.3rem !important; color: #111111 !important; font-weight: 800 !important;">Company Name</label>
                                <input type="text" class="form-control" placeholder="Organization name" style="border-radius: 8px; padding: 16px 18px; font-size: 1.2rem !important; font-weight: 600 !important; color: #111111 !important;">
                            </div>
                        </div>

                        <div class="row g-4 mb-4">
                            <div class="col-md-6">
                                <label class="form-label text-dark fw-extrabold mb-2" style="font-size: 1.3rem !important; color: #111111 !important; font-weight: 800 !important;">Phone Number *</label>
                                <input type="tel" class="form-control" required placeholder="Mobile or landline" style="border-radius: 8px; padding: 16px 18px; font-size: 1.2rem !important; font-weight: 600 !important; color: #111111 !important;">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label text-dark fw-extrabold mb-2" style="font-size: 1.3rem !important; color: #111111 !important; font-weight: 800 !important;">Email Address *</label>
                                <input type="email" class="form-control" required placeholder="name@company.com" style="border-radius: 8px; padding: 16px 18px; font-size: 1.2rem !important; font-weight: 600 !important; color: #111111 !important;">
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="form-label text-dark fw-extrabold mb-2" style="font-size: 1.3rem !important; color: #111111 !important; font-weight: 800 !important;">Product / Service Interested In</label>
                            <select class="form-select" style="border-radius: 8px; padding: 16px 18px; font-size: 1.2rem !important; font-weight: 600 !important; color: #111111 !important;">
                                <option value="" style="font-weight: 700;">Select a Category / Service</option>
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
                            <label class="form-label text-dark fw-extrabold mb-2" style="font-size: 1.3rem !important; color: #111111 !important; font-weight: 800 !important;">Message / Requirements *</label>
                            <textarea class="form-control" rows="4" required placeholder="Please describe your space area, floor plan details, seating capacity, or estimated timeline..." style="border-radius: 8px; padding: 16px 18px; font-size: 1.2rem !important; font-weight: 600 !important; color: #111111 !important;"></textarea>
                        </div>

                        <div class="d-grid pt-2">
                            <button type="submit" class="btn btn-danger btn-lg text-uppercase fw-black shadow-lg py-3" style="border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none; font-size: 17px; letter-spacing: 0.8px;">
                                Submit Enquiry &rarr;
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Office Details & Google Map -->
            <div class="col-lg-5">
                <div class="card border-0 shadow-lg rounded-4 overflow-hidden bg-dark text-white p-0">
                    <div class="p-4 bg-dark text-white border-bottom border-secondary">
                        <span class="text-danger fw-black text-uppercase tracking-wider d-block mb-1" style="font-size: 1.15rem !important; letter-spacing: 1.5px; color: #ff5252 !important;">Corporate Office Location</span>
                        <h4 class="fw-black text-white mb-2" style="font-size: 1.6rem !important; font-weight: 900 !important;">Vishista Office Solutions Pvt Ltd</h4>
                        <p class="text-white-50 mb-0 fs-6" style="line-height: 1.5;">
                            Saishruthi Nilyam, Street No. 4, Sri Sathya Sai Enclave, Plot No. 109, Satya Sai Enclave Main Rd, Old Bowenpally, Secunderabad, Telangana 500009
                        </p>
                    </div>
                    <div class="w-100" style="height: 380px;">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5186256247926!2d78.4756593!3d17.4827598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a918a38ef2f%3A0x4a9b2b52fa102434!2sSaishruthi%20Nilyam%2C%20Street%20No.%204%2C%20Sri%20Sathya%20Sai%20Enclave%2C%20Old%20Bowenpally%2C%20Secunderabad%2C%20Telangana%20500009!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="p-3 bg-dark border-top border-secondary">
                        <a href="https://maps.app.goo.gl/Svm1wBx323dVFtx18" target="_blank" class="btn btn-danger btn-lg w-100 text-uppercase fw-extrabold shadow-sm py-3" style="border-radius: 6px; font-size: 14px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">
                            Get Directions on Google Maps &rarr;
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<?php include('footer.php'); ?>
