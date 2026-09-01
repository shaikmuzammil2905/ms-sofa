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
            <p class="text-muted fs-7 mb-4">Sign in to manage products, categories, projects &amp; website content.</p>

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
        <div id="sidebarBackdrop" class="sidebar-backdrop d-none" onclick="toggleMobileSidebar(false)"></div>
        
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
                <a class="admin-nav-item" data-tab="subcategories">
                    <span>📑 Subcategories</span>
                </a>
                <a class="admin-nav-item" data-tab="projects">
                    <span>🏢 Projects</span>
                </a>
                <a class="admin-nav-item" data-tab="hero">
                    <span>🖼️ Hero Section</span>
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
                                    <div id="statTotalProducts" class="stat-val">27</div>
                                    <div class="stat-lbl">Total Products</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="stat-card">
                                <div class="stat-icon bg-primary-subtle text-primary">🏷️</div>
                                <div>
                                    <div id="statTotalCategories" class="stat-val">10</div>
                                    <div class="stat-lbl">Categories</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="stat-card">
                                <div class="stat-icon bg-success-subtle text-success">🏢</div>
                                <div>
                                    <div id="statTotalProjects" class="stat-val">3</div>
                                    <div class="stat-lbl">Projects</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="stat-card">
                                <div class="stat-icon bg-warning-subtle text-warning">✅</div>
                                <div>
                                    <div id="statPublishedItems" class="stat-val">27</div>
                                    <div class="stat-lbl">Published Items</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="admin-card">
                        <h5 class="fw-bold text-dark mb-3">Quick Actions</h5>
                        <div class="d-flex flex-wrap gap-2">
                            <button class="btn btn-danger fw-bold text-uppercase fs-7" onclick="openAddProductModal()">+ Add New Product</button>
                            <button class="btn btn-outline-dark fw-bold text-uppercase fs-7" onclick="openAddCategoryModal()">+ Add New Category</button>
                            <button class="btn btn-outline-dark fw-bold text-uppercase fs-7" onclick="openAddProjectModal()">+ Add New Project</button>
                        </div>
                    </div>
                </div>

                <!-- 2. PRODUCTS MODULE -->
                <div id="view-products" class="tab-view-content d-none">
                    <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                        <div>
                            <h3 class="fw-bold text-dark mb-1">Products CMS</h3>
                            <p class="text-muted fs-7 mb-0">Manage all existing products, prices, images, visibility, and published status.</p>
                        </div>
                        <button class="btn btn-danger fw-bold text-uppercase fs-7 px-3 py-2" onclick="openAddProductModal()">+ Add Product</button>
                    </div>

                    <!-- Products Search & Multi-Filter Bar -->
                    <div class="admin-card mb-4 p-3 bg-light border rounded-3">
                        <div class="row g-2">
                            <div class="col-md-4">
                                <input type="text" id="productSearchInput" class="form-control form-control-sm" placeholder="🔍 Search product name or description..." oninput="filterProductsTable()">
                            </div>
                            <div class="col-md-3">
                                <select id="productCategoryFilter" class="form-select form-select-sm" onchange="filterProductsTable()">
                                    <option value="">All Categories</option>
                                </select>
                            </div>
                            <div class="col-md-2">
                                <select id="productVisibilityFilter" class="form-select form-select-sm" onchange="filterProductsTable()">
                                    <option value="">All Visibility</option>
                                    <option value="visible">Visible Only</option>
                                    <option value="hidden">Hidden Only</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <select id="productPublishedFilter" class="form-select form-select-sm" onchange="filterProductsTable()">
                                    <option value="">All Status</option>
                                    <option value="published">Published Only</option>
                                    <option value="unpublished">Unpublished Only</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="admin-card">
                        <div class="table-responsive">
                            <table class="admin-table align-middle">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Category / Subcategory</th>
                                        <th>Price</th>
                                        <th>Visibility</th>
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
                    <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                        <div>
                            <h3 class="fw-bold text-dark mb-1">Category Management</h3>
                            <p class="text-muted fs-7 mb-0">Manage all main website product categories dynamically.</p>
                        </div>
                        <button class="btn btn-danger fw-bold text-uppercase fs-7 px-3 py-2" onclick="openAddCategoryModal()">+ Add Category</button>
                    </div>

                    <!-- Categories Card -->
                    <div class="admin-card">
                        <h5 class="fw-bold text-dark mb-3">Categories</h5>
                        <div class="table-responsive">
                            <table class="admin-table align-middle">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Category Name</th>
                                        <th>Slug</th>
                                        <th>Subcategories</th>
                                        <th>Visibility</th>
                                        <th>Status</th>
                                        <th>Order</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="categoriesTableBody">
                                    <!-- Rendered dynamically -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- 3B. DEDICATED SUBCATEGORIES MODULE -->
                <div id="view-subcategories" class="tab-view-content d-none">
                    <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                        <div>
                            <h3 class="fw-bold text-dark mb-1">Subcategory Management</h3>
                            <p class="text-muted fs-7 mb-0">View all existing subcategories, filter by category, or create new subcategories dynamically.</p>
                        </div>
                        <button class="btn btn-danger fw-bold text-uppercase fs-7 px-3 py-2" onclick="openAddSubcategoryModal()">+ Add Subcategory</button>
                    </div>

                    <div class="admin-card">
                        <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-3">
                            <div class="d-flex align-items-center gap-2">
                                <h5 class="fw-bold text-dark mb-0">Subcategories List</h5>
                                <span id="dedicatedSubcategoryCountBadge" class="badge bg-danger-subtle text-danger border fw-bold">0 Subcategories</span>
                            </div>
                            <div class="d-flex flex-wrap align-items-center gap-2">
                                <label class="fs-7 fw-semibold text-muted mb-0">Filter by Category:</label>
                                <select id="dedicatedSubcategoryFilterSelect" class="form-select form-select-sm" style="min-width: 180px;" onchange="renderDedicatedSubcategoriesTable()">
                                    <option value="">All Categories</option>
                                </select>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="admin-table align-middle">
                                <thead>
                                    <tr>
                                        <th>Subcategory Name</th>
                                        <th>Parent Category</th>
                                        <th>Slug</th>
                                        <th>Linked Products</th>
                                        <th>Display Order</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="dedicatedSubcategoriesTableBody">
                                    <!-- Rendered dynamically -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- 4. PROJECTS MODULE -->
                <div id="view-projects" class="tab-view-content d-none">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h3 class="fw-bold text-dark mb-1">Projects &amp; Case Studies</h3>
                            <p class="text-muted fs-7 mb-0">Manage featured client installations and corporate fitout projects.</p>
                        </div>
                        <button class="btn btn-danger fw-bold text-uppercase fs-7 px-3 py-2" onclick="openAddProjectModal()">+ Add Project</button>
                    </div>
                    <div class="admin-card">
                        <div class="table-responsive">
                            <table class="admin-table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Project Title</th>
                                        <th>Location</th>
                                        <th>Description</th>
                                        <th>Display Order</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="projectsTableBody">
                                    <!-- Rendered dynamically -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- 5. HERO SECTION MODULE -->
                <div id="view-hero" class="tab-view-content d-none">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <h3 class="fw-bold text-dark mb-1">Hero Section CMS</h3>
                            <p class="text-muted fs-7 mb-0">Manage homepage main hero banner heading, subtitle, and dynamic carousel background slides.</p>
                        </div>
                    </div>
                    <div class="admin-card">
                        <form id="heroCmsForm" onsubmit="saveHeroCMS(event)">
                            <div class="mb-3">
                                <label class="form-label fw-semibold fs-7">Hero Heading (HTML Supported)</label>
                                <input type="text" id="heroHeadingInput" class="form-control" placeholder="Transforming Workspaces.<br><span class=&quot;text-gradient-red&quot;>Elevating Possibilities.</span>">
                            </div>
                            <div class="mb-4">
                                <label class="form-label fw-semibold fs-7">Subheading Description</label>
                                <textarea id="heroDescInput" class="form-control" rows="3"></textarea>
                            </div>

                            <!-- Dynamic Hero Slides Manager -->
                            <div class="mb-4 pt-3 border-top">
                                <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
                                    <div>
                                        <h5 class="fw-bold text-dark mb-0">Hero Carousel Background Slides</h5>
                                        <small class="text-muted">Add, upload, preview, or remove background images for the animated hero slider.</small>
                                    </div>
                                    <button type="button" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3" onclick="addHeroSlideItem()">+ Add New Hero Slide</button>
                                </div>
                                <div id="heroSlidesListContainer" class="row g-3">
                                    <!-- Rendered dynamically -->
                                </div>
                            </div>

                            <button type="submit" class="btn btn-danger fw-bold text-uppercase px-4 py-2">Save Hero Content &rarr;</button>
                        </form>
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
                                <select id="productCategorySelect" class="form-select" onchange="onProductCategoryChange()">
                                    <!-- Populated dynamically -->
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-semibold fs-7">Subcategory / Series</label>
                                <select id="productSubcategorySelect" class="form-select">
                                    <option value="">General / None</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-semibold fs-7">Price Tag</label>
                                <input type="text" id="productPriceInput" class="form-control" placeholder="e.g. Enquire for Price">
                            </div>
                            <div class="col-12">
                                <label class="form-label fw-semibold fs-7">Description</label>
                                <textarea id="productDescInput" class="form-control" rows="3" placeholder="Product features, mechanism, PU armrest, aluminium base specifications..."></textarea>
                            </div>
                            <div class="col-md-6">
                                <div class="form-check form-switch mt-2">
                                    <input class="form-check-input" type="checkbox" id="productVisibleCheck" checked>
                                    <label class="form-check-label fw-semibold fs-7" for="productVisibleCheck">Visibility (Show on Website)</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-check form-switch mt-2">
                                    <input class="form-check-input" type="checkbox" id="productPublishedCheck" checked>
                                    <label class="form-check-label fw-semibold fs-7" for="productPublishedCheck">Status (Published)</label>
                                </div>
                            </div>

                            <!-- Main Product Image Upload -->
                            <div class="col-md-6">
                                <label class="form-label fw-semibold fs-7">Main Product Image *</label>
                                <div class="upload-dropzone" onclick="document.getElementById('cloudinaryFileInput').click()">
                                    <div class="text-danger fs-3 mb-1">🖼️</div>
                                    <div class="fw-bold text-dark fs-7">Click to select Main Image</div>
                                </div>
                                <input type="file" id="cloudinaryFileInput" class="d-none" accept="image/*" onchange="handleCloudinaryProductUpload(this)">

                                <!-- Upload Progress -->
                                <div id="productUploadProgress" class="progress mt-2 d-none" style="height: 10px;">
                                    <div id="productProgressBar" class="progress-bar bg-danger" role="progressbar" style="width: 0%"></div>
                                </div>

                                <input type="hidden" id="productMainImageUrl">
                                <div id="productImagePreviewContainer" class="mt-2 text-center d-none">
                                    <img id="productImagePreview" src="" alt="Main Preview" style="max-height: 110px; border-radius: 8px; border: 1px solid #e2e8f0; padding: 4px;">
                                </div>
                            </div>

                            <!-- Additional Images Upload -->
                            <div class="col-md-6">
                                <label class="form-label fw-semibold fs-7">Additional Product Gallery Images</label>
                                <div class="upload-dropzone" onclick="document.getElementById('additionalImagesFileInput').click()">
                                    <div class="text-danger fs-3 mb-1">📸</div>
                                    <div class="fw-bold text-dark fs-7">Click to add Gallery Image</div>
                                </div>
                                <input type="file" id="additionalImagesFileInput" class="d-none" accept="image/*" onchange="handleAdditionalProductImageUpload(this)">

                                <div id="additionalImagesPreviewList" class="d-flex flex-wrap gap-2 mt-2">
                                    <!-- Additional thumbnail previews rendered here -->
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

    <!-- 4. ADD / EDIT CATEGORY MODAL -->
    <div class="modal fade" id="categoryFormModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
                <div class="modal-header border-bottom">
                    <h5 id="categoryModalTitle" class="modal-title fw-bold">Add Category</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form id="categoryForm" onsubmit="saveCategoryForm(event)">
                    <div class="modal-body p-4">
                        <input type="hidden" id="categoryIdInput">
                        <div class="mb-3">
                            <label class="form-label fw-semibold fs-7">Category Name *</label>
                            <input type="text" id="categoryNameInput" class="form-control" required placeholder="e.g. Workstations">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold fs-7">Description</label>
                            <textarea id="categoryDescInput" class="form-control" rows="2" placeholder="Brief category description..."></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold fs-7">Display Order</label>
                            <input type="number" id="categoryOrderInput" class="form-control" value="0">
                        </div>
                        <div class="row g-2 mb-3">
                            <div class="col-md-6">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="categoryVisibleCheck" checked>
                                    <label class="form-check-label fw-semibold fs-7" for="categoryVisibleCheck">Visibility (Visible)</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="categoryPublishedCheck" checked>
                                    <label class="form-check-label fw-semibold fs-7" for="categoryPublishedCheck">Status (Published)</label>
                                </div>
                            </div>
                        </div>
                        <!-- Category Image Upload -->
                        <div class="mb-3">
                            <label class="form-label fw-semibold fs-7">Category Image (Upload Image)</label>
                            <div class="upload-dropzone" onclick="document.getElementById('categoryFileInput').click()">
                                <div class="text-danger fs-3 mb-1">🖼️</div>
                                <div class="fw-bold text-dark fs-7">Click to select &amp; upload image</div>
                            </div>
                            <input type="file" id="categoryFileInput" class="d-none" accept="image/*" onchange="handleImageUploadGeneric(this, 'categoryImageUrl', 'categoryImagePreview', 'categoryImagePreviewContainer')">
                            <input type="hidden" id="categoryImageUrl">
                            <div id="categoryImagePreviewContainer" class="mt-2 text-center d-none">
                                <img id="categoryImagePreview" src="" alt="Preview" style="max-height: 120px; border-radius: 8px; border: 1px solid #e2e8f0; padding: 4px;">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer border-top">
                        <button type="button" class="btn btn-light fw-semibold" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-danger fw-bold text-uppercase px-4">Save Category &rarr;</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- 4B. ADD / EDIT SUBCATEGORY MODAL -->
    <div class="modal fade" id="subcategoryFormModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
                <div class="modal-header border-bottom">
                    <h5 id="subcategoryModalTitle" class="modal-title fw-bold">Add Subcategory</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form id="subcategoryForm" onsubmit="saveSubcategoryForm(event)">
                    <div class="modal-body p-4">
                        <input type="hidden" id="subcategoryIdInput">
                        <div class="mb-3">
                            <label class="form-label fw-semibold fs-7">Parent Category *</label>
                            <select id="subcategoryCategorySelect" class="form-select" required>
                                <!-- Populated dynamically -->
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold fs-7">Subcategory Name *</label>
                            <input type="text" id="subcategoryNameInput" class="form-control" required placeholder="e.g. 3 Seater Sofa or Mesh Series">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold fs-7">Display Order</label>
                            <input type="number" id="subcategoryOrderInput" class="form-control" value="0">
                        </div>
                    </div>
                    <div class="modal-footer border-top">
                        <button type="button" class="btn btn-light fw-semibold" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-danger fw-bold text-uppercase px-4">Save Subcategory &rarr;</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- 5. ADD / EDIT PROJECT MODAL -->
    <div class="modal fade" id="projectFormModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
                <div class="modal-header border-bottom">
                    <h5 id="projectModalTitle" class="modal-title fw-bold">Add Project</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form id="projectForm" onsubmit="saveProjectForm(event)">
                    <div class="modal-body p-4">
                        <input type="hidden" id="projectIdInput">
                        <div class="mb-3">
                            <label class="form-label fw-semibold fs-7">Project Title *</label>
                            <input type="text" id="projectTitleInput" class="form-control" required placeholder="e.g. TCS Hitech City Corporate Office">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold fs-7">Location</label>
                            <input type="text" id="projectLocationInput" class="form-control" placeholder="e.g. Hyderabad, Telangana">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold fs-7">Description</label>
                            <textarea id="projectDescInput" class="form-control" rows="3" placeholder="Project details, workstations installed, turnkey interiors..."></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold fs-7">Display Order</label>
                            <input type="number" id="projectOrderInput" class="form-control" value="0">
                        </div>
                        <!-- Project Image Upload -->
                        <div class="mb-3">
                            <label class="form-label fw-semibold fs-7">Project Image (Upload Image) *</label>
                            <div class="upload-dropzone" onclick="document.getElementById('projectFileInput').click()">
                                <div class="text-danger fs-3 mb-1">🖼️</div>
                                <div class="fw-bold text-dark fs-7">Click to select &amp; upload image</div>
                            </div>
                            <input type="file" id="projectFileInput" class="d-none" accept="image/*" onchange="handleImageUploadGeneric(this, 'projectMainImageUrl', 'projectImagePreview', 'projectImagePreviewContainer')">
                            <input type="hidden" id="projectMainImageUrl">
                            <div id="projectImagePreviewContainer" class="mt-2 text-center d-none">
                                <img id="projectImagePreview" src="" alt="Preview" style="max-height: 120px; border-radius: 8px; border: 1px solid #e2e8f0; padding: 4px;">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer border-top">
                        <button type="button" class="btn btn-light fw-semibold" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-danger fw-bold text-uppercase px-4">Save Project &rarr;</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Bootstrap 5 Bundle JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Supabase JS Client SDK -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

    <!-- Supabase & Upload Config -->
    <script src="/js/supabase-config.js"></script>
    <!-- Admin App Controller -->
    <script src="/admin/js/admin-app.js"></script>
</body>
</html>


