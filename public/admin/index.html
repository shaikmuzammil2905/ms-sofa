<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - Vishista Office Solutions CMS</title>
    <link rel="icon" href="/images/logo/logo-symbol.png" type="image/png">

    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Custom Admin Styling -->
    <link rel="stylesheet" href="/admin/css/admin.css">
</head>
<body class="admin-body">

    <!-- 1. AUTH LOGIN SCREEN -->
    <div id="authScreen" class="admin-auth-wrapper">
        <div class="admin-auth-card text-center">
            <div class="site-brand-logo justify-content-center mb-3">
                <img src="/images/logo/logo-mark.png?v=2" alt="Vishista Logo" style="height: 50px;">
            </div>
            <h4 class="fw-bold text-dark mb-1">Vishista Admin CMS</h4>
            <p class="text-muted fs-7 mb-4">Sign in to manage products, categories &amp; website content.</p>

            <div id="loginErrorAlert" class="alert alert-danger fs-7 d-none mb-3" role="alert"></div>

            <form id="adminLoginForm">
                <div class="text-start mb-3">
                    <label class="form-label fs-7 fw-semibold text-dark">Email Address</label>
                    <input type="email" id="loginEmail" class="form-control py-2" placeholder="admin@vishista.com" required value="admin@vishista.com">
                </div>
                <div class="text-start mb-4">
                    <label class="form-label fs-7 fw-semibold text-dark">Password</label>
                    <input type="password" id="loginPassword" class="form-control py-2" placeholder="••••••••" required value="admin123">
                </div>
                <button type="submit" class="btn btn-danger w-100 py-2 fw-bold text-uppercase shadow-sm" style="background-color: #d32f2f; border: none;">
                    Sign In to Dashboard &rarr;
                </button>
            </form>
            <div class="mt-4 pt-3 border-top text-muted fs-7">
                Protected by Supabase Auth &amp; Row Level Security
            </div>
        </div>
    </div>

    <!-- 2. ADMIN DASHBOARD LAYOUT -->
    <div id="adminAppLayout" class="admin-layout d-none">
        
        <!-- Sidebar Navigation -->
        <aside class="admin-sidebar">
            <div class="admin-sidebar-brand">
                <img src="/images/logo/logo-mark.png?v=2" alt="Vishista Logo" style="height: 36px;">
                <div>
                    <div class="fw-bold text-white fs-6 leading-tight">VISHISTA</div>
                    <div class="text-white-50 fs-8 tracking-wider">ADMIN CMS</div>
                </div>
            </div>

            <div class="admin-sidebar-menu">
                <a class="admin-nav-item active" data-tab="dashboard">
                    <span>📊 Dashboard</span>
                </a>
                <a class="admin-nav-item" data-tab="products">
                    <span>🪑 Products</span>
                </a>
                <a class="admin-nav-item" data-tab="categories">
                    <span>🏷️ Categories</span>
                </a>
                <a class="admin-nav-item" data-tab="projects">
                    <span>🏢 Projects</span>
                </a>
                <a class="admin-nav-item" data-tab="hero">
                    <span>🖼️ Hero Section</span>
                </a>
                <a class="admin-nav-item" data-tab="about">
                    <span>ℹ️ About Us</span>
                </a>
                <a class="admin-nav-item" data-tab="enquiries">
                    <span>📩 Enquiries Inbox</span>
                </a>
                <a class="admin-nav-item" data-tab="footer">
                    <span>🦶 Footer CMS</span>
                </a>
            </div>

            <div class="p-3 border-top border-secondary">
                <button id="adminLogoutBtn" class="btn btn-outline-light btn-sm w-100 fw-semibold text-uppercase">
                    Logout &rarr;
                </button>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="admin-content">
            <!-- Header -->
            <header class="admin-header">
                <div class="d-flex align-items-center gap-3">
                    <button id="sidebarToggleBtn" class="btn btn-light d-lg-none">☰</button>
                    <h5 class="fw-bold text-dark mb-0">Control Panel</h5>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <a href="/index.html" target="_blank" class="btn btn-outline-dark btn-sm fw-semibold">
                        View Live Website &rarr;
                    </a>
                </div>
            </header>

            <!-- Views -->
            <div class="admin-main-view">

                <!-- 1. DASHBOARD VIEW -->
                <div id="view-dashboard" class="tab-view-content">
                    <h3 class="fw-bold text-dark mb-4">Dashboard Overview</h3>
                    <div class="row g-4 mb-4">
                        <div class="col-md-3">
                            <div class="stat-card">
                                <div class="stat-icon bg-danger-subtle text-danger">🪑</div>
                                <div>
                                    <div id="statTotalProducts" class="stat-val">0</div>
                                    <div class="stat-lbl">Total Products</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="stat-card">
                                <div class="stat-icon bg-primary-subtle text-primary">🏷️</div>
                                <div>
                                    <div id="statTotalCategories" class="stat-val">0</div>
                                    <div class="stat-lbl">Categories</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="stat-card">
                                <div class="stat-icon bg-success-subtle text-success">✅</div>
                                <div>
                                    <div id="statPublishedItems" class="stat-val">0</div>
                                    <div class="stat-lbl">Published Items</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="stat-card">
                                <div class="stat-icon bg-warning-subtle text-warning">📩</div>
                                <div>
                                    <div id="statTotalEnquiries" class="stat-val">0</div>
                                    <div class="stat-lbl">Enquiries</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="admin-card">
                        <h5 class="fw-bold text-dark mb-3">Quick Actions</h5>
                        <div class="d-flex flex-wrap gap-2">
                            <button class="btn btn-danger fw-bold text-uppercase fs-7" onclick="openAddProductModal()">+ Add New Product</button>
                            <button class="btn btn-outline-dark fw-bold text-uppercase fs-7" onclick="switchTab('products')">Manage Products</button>
                            <button class="btn btn-outline-dark fw-bold text-uppercase fs-7" onclick="switchTab('enquiries')">View Customer Enquiries</button>
                        </div>
                    </div>
                </div>

                <!-- 2. PRODUCTS MODULE -->
                <div id="view-products" class="tab-view-content d-none">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h3 class="fw-bold text-dark mb-1">Products CMS</h3>
                            <p class="text-muted fs-7 mb-0">Manage all existing products, prices, images, and visibility.</p>
                        </div>
                        <button class="btn btn-danger fw-bold text-uppercase fs-7 px-3 py-2" onclick="openAddProductModal()">+ Add Product</button>
                    </div>

                    <div class="admin-card">
                        <div class="table-responsive">
                            <table class="admin-table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Subcategory</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Order</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="productsTableBody">
                                    <!-- Rendered dynamically -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- 3. CATEGORIES MODULE -->
                <div id="view-categories" class="tab-view-content d-none">
                    <h3 class="fw-bold text-dark mb-4">Category Management</h3>
                    <div class="admin-card">
                        <p class="text-muted fs-7">Categories structure all product listings across the ArchLabs Seating and Corporate Furniture catalogues.</p>
                    </div>
                </div>

                <!-- 4. ENQUIRIES MODULE -->
                <div id="view-enquiries" class="tab-view-content d-none">
                    <h3 class="fw-bold text-dark mb-4">Customer Enquiries Inbox</h3>
                    <div class="admin-card">
                        <div class="table-responsive">
                            <table class="admin-table">
                                <thead>
                                    <tr>
                                        <th>Customer Name</th>
                                        <th>Product Requested</th>
                                        <th>Phone Number</th>
                                        <th>Email</th>
                                        <th>Date Submitted</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody id="enquiriesTableBody">
                                    <!-- Rendered dynamically -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>

    <!-- 3. ADD / EDIT PRODUCT MODAL -->
    <div class="modal fade" id="productFormModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header border-bottom">
                    <h5 id="productModalTitle" class="modal-title fw-bold">Add Product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form id="productForm" onsubmit="saveProductForm(event)">
                    <div class="modal-body p-4">
                        <input type="hidden" id="productIdInput">

                        <div class="row g-3">
                            <div class="col-md-8">
                                <label class="form-label fw-semibold fs-7">Product Name *</label>
                                <input type="text" id="productNameInput" class="form-control" required placeholder="e.g. Veloz Ergonomic Mesh Chair">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label fw-semibold fs-7">Category *</label>
                                <select id="productCategorySelect" class="form-select">
                                    <option value="archlabs-seating">ArchLabs Seating Catalogue</option>
                                    <option value="workstations">Modular Workstations</option>
                                    <option value="tables">Tables &amp; Desks</option>
                                    <option value="storage">Storage Systems</option>
                                    <option value="soft-seating">Soft Seating &amp; Lounges</option>
                                    <option value="acoustic-pods">Acoustic Work Pods</option>
                                    <option value="carpets">Interface Carpets</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-semibold fs-7">Subcategory / Series</label>
                                <input type="text" id="productSubcategoryInput" class="form-control" placeholder="e.g. Mesh Series">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-semibold fs-7">Price Tag</label>
                                <input type="text" id="productPriceInput" class="form-control" placeholder="e.g. Enquire for Price">
                            </div>
                            <div class="col-12">
                                <label class="form-label fw-semibold fs-7">Description</label>
                                <textarea id="productDescInput" class="form-control" rows="3" placeholder="Product features, mechanism, PU armrest, aluminium base specifications..."></textarea>
                            </div>

                            <!-- Cloudinary Direct Image Upload -->
                            <div class="col-12">
                                <label class="form-label fw-semibold fs-7">Product Image (Cloudinary Direct Upload) *</label>
                                <div class="upload-dropzone" onclick="document.getElementById('cloudinaryFileInput').click()">
                                    <div class="text-danger fs-3 mb-1">☁️</div>
                                    <div class="fw-bold text-dark fs-7">Click to select &amp; upload image to Cloudinary</div>
                                    <div class="text-muted fs-8">Preset: ml_default | Cloud: iw4ntmv5</div>
                                </div>
                                <input type="file" id="cloudinaryFileInput" class="d-none" accept="image/*" onchange="handleCloudinaryProductUpload(this)">

                                <!-- Upload Progress -->
                                <div id="productUploadProgress" class="progress mt-2 d-none" style="height: 10px;">
                                    <div id="productProgressBar" class="progress-bar bg-danger" role="progressbar" style="width: 0%"></div>
                                </div>

                                <input type="hidden" id="productMainImageUrl">
                                <div id="productImagePreviewContainer" class="mt-3 text-center d-none">
                                    <img id="productImagePreview" src="" alt="Preview" style="max-height: 140px; border-radius: 8px; border: 1px solid #e2e8f0; padding: 6px;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer border-top">
                        <button type="button" class="btn btn-light fw-semibold" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-danger fw-bold text-uppercase px-4">Save Product &rarr;</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Bootstrap 5 Bundle JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Supabase JS Client SDK -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

    <!-- Supabase & Cloudinary Config -->
    <script src="/js/supabase-config.js"></script>
    <!-- Admin App Controller -->
    <script src="/admin/js/admin-app.js"></script>
</body>
</html>
