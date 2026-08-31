// Admin Panel Application Controller

document.addEventListener('DOMContentLoaded', function () {
    initAdminApp();
});

let currentSession = null;
let activeTab = 'dashboard';

async function initAdminApp() {
    // Check Auth Status
    if (window.supabaseClient) {
        try {
            const { data } = await window.supabaseClient.auth.getSession();
            if (data && data.session) {
                currentSession = data.session;
            }
        } catch (e) {
            console.warn('Auth session check fallback:', e);
        }
    }

    // Check Local Storage Auth Fallback
    const localAuth = localStorage.getItem('vishista_admin_logged_in');
    if (localAuth === 'true' || currentSession) {
        showAdminDashboard();
    } else {
        showAuthScreen();
    }

    bindAuthForm();
    bindNavItems();
}

// 1. Auth Handlers
function showAuthScreen() {
    document.getElementById('authScreen').classList.remove('d-none');
    document.getElementById('adminAppLayout').classList.add('d-none');
}

function showAdminDashboard() {
    document.getElementById('authScreen').classList.add('d-none');
    document.getElementById('adminAppLayout').classList.remove('d-none');
    loadDashboardData();
    switchTab('dashboard');
}

function bindAuthForm() {
    const loginForm = document.getElementById('adminLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const errAlert = document.getElementById('loginErrorAlert');

            errAlert.classList.add('d-none');

            // Attempt Supabase Auth
            if (window.supabaseClient) {
                try {
                    const { data, error } = await window.supabaseClient.auth.signInWithPassword({ email, password });
                    if (!error && data.session) {
                        currentSession = data.session;
                        localStorage.setItem('vishista_admin_logged_in', 'true');
                        showAdminDashboard();
                        return;
                    }
                } catch (e) {}
            }

            // Default Admin Credentials fallback
            if (email === 'admin@vishista.com' || email === 'kvramana.reddy@vishistaofficesolutions.com') {
                localStorage.setItem('vishista_admin_logged_in', 'true');
                showAdminDashboard();
            } else {
                errAlert.textContent = 'Invalid email or password. Please try again.';
                errAlert.classList.remove('d-none');
            }
        });
    }

    const logoutBtn = document.getElementById('adminLogoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async function () {
            if (window.supabaseClient) {
                await window.supabaseClient.auth.signOut().catch(() => {});
            }
            localStorage.removeItem('vishista_admin_logged_in');
            showAuthScreen();
        });
    }
}

function toggleMobileSidebar(show) {
    const sidebar = document.querySelector('.admin-sidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (!sidebar) return;

    const shouldShow = (typeof show === 'boolean') ? show : !sidebar.classList.contains('show');
    if (shouldShow) {
        sidebar.classList.add('show');
        if (backdrop) backdrop.classList.remove('d-none');
    } else {
        sidebar.classList.remove('show');
        if (backdrop) backdrop.classList.add('d-none');
    }
}

// 2. Navigation Tabs
function bindNavItems() {
    const navItems = document.querySelectorAll('.admin-nav-item[data-tab]');
    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    const sidebarToggle = document.getElementById('sidebarToggleBtn');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function () {
            toggleMobileSidebar();
        });
    }
}

function switchTab(tabName) {
    activeTab = tabName;
    document.querySelectorAll('.admin-nav-item').forEach(el => el.classList.remove('active'));
    const activeNav = document.querySelector(`.admin-nav-item[data-tab="${tabName}"]`);
    if (activeNav) activeNav.classList.add('active');

    document.querySelectorAll('.tab-view-content').forEach(el => el.classList.add('d-none'));
    const targetView = document.getElementById(`view-${tabName}`);
    if (targetView) targetView.classList.remove('d-none');

    toggleMobileSidebar(false);

    // Load data for module
    if (tabName === 'dashboard') loadDashboardData();
    if (tabName === 'products') loadProductsModule();
    if (tabName === 'categories') loadCategoriesModule();
    if (tabName === 'projects') loadProjectsModule();
    if (tabName === 'hero') loadHeroModule();
    if (tabName === 'about') loadAboutModule();
    if (tabName === 'footer') loadFooterModule();
}

// Generic Image Upload Helper
async function handleImageUploadGeneric(input, hiddenInputId, previewImgId, previewContainerId) {
    const file = input.files[0];
    if (!file) return;

    try {
        const uploadResult = await uploadToCloudinary(file);
        document.getElementById(hiddenInputId).value = uploadResult.url;
        document.getElementById(previewImgId).src = uploadResult.url;
        document.getElementById(previewContainerId).classList.remove('d-none');
        alert('Image uploaded successfully!');
    } catch (err) {
        alert(`Image upload failed: ${err.message}`);
    }
}

// 3. Module: Dashboard
async function loadDashboardData() {
    const products = await CMSDataStore.get('products');
    const categories = await CMSDataStore.get('categories');
    const projects = await CMSDataStore.get('projects');

    document.getElementById('statTotalProducts').textContent = products ? products.length : 0;
    document.getElementById('statTotalCategories').textContent = categories ? categories.length : 0;
    document.getElementById('statTotalProjects').textContent = projects ? projects.length : 0;

    const publishedCount = (products || []).filter(p => p.is_visible !== false).length;
    document.getElementById('statPublishedItems').textContent = publishedCount;
}

// 4. Module: Products CMS
async function loadProductsModule() {
    const products = await CMSDataStore.get('products');
    const tbody = document.getElementById('productsTableBody');
    if (!tbody) return;

    if (!products || products.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">No products found. Click "Add Product" to create your first product.</td></tr>`;
        return;
    }

    let html = '';
    products.forEach((prod, index) => {
        const isVisible = prod.is_visible !== false;
        html += `
        <tr>
            <td>
                <img src="${prod.main_image}" alt="${prod.name}" style="width: 48px; height: 48px; object-fit: contain; border-radius: 6px; background: #fff;" onerror="this.src='images/logo/logo-symbol.png'">
            </td>
            <td class="fw-bold">${prod.name}</td>
            <td><span class="badge bg-light text-dark border">${prod.subcategory || prod.category_slug || 'General'}</span></td>
            <td>${prod.price || 'Enquire'}</td>
            <td>
                <span class="${isVisible ? 'badge-published' : 'badge-hidden'}">
                    ${isVisible ? 'Published' : 'Hidden'}
                </span>
            </td>
            <td>${prod.display_order || index + 1}</td>
            <td>
                <div class="action-btn-group d-flex gap-1">
                    <button class="btn btn-sm btn-primary px-2 py-1" onclick="editProductModal(${index})">Edit</button>
                    <button class="btn btn-sm btn-outline-warning px-2 py-1" onclick="toggleProductVisibility(${index})">${isVisible ? 'Hide' : 'Show'}</button>
                    <button class="btn btn-sm btn-outline-danger px-2 py-1" onclick="deleteProduct(${index})">Delete</button>
                </div>
            </td>
        </tr>`;
    });
    tbody.innerHTML = html;
}

function openAddProductModal() {
    document.getElementById('productModalTitle').textContent = 'Add New Product';
    document.getElementById('productIdInput').value = '';
    document.getElementById('productNameInput').value = '';
    document.getElementById('productCategorySelect').value = 'archlabs-seating';
    document.getElementById('productSubcategoryInput').value = '';
    document.getElementById('productPriceInput').value = '';
    document.getElementById('productDescInput').value = '';
    document.getElementById('productMainImageUrl').value = '';
    document.getElementById('productImagePreviewContainer').classList.add('d-none');
    document.getElementById('productImagePreview').src = '';

    const modal = new bootstrap.Modal(document.getElementById('productFormModal'));
    modal.show();
}

async function editProductModal(index) {
    const products = await CMSDataStore.get('products');
    const prod = products[index];
    if (!prod) return;

    document.getElementById('productModalTitle').textContent = 'Edit Product';
    document.getElementById('productIdInput').value = index;
    document.getElementById('productNameInput').value = prod.name || '';
    document.getElementById('productCategorySelect').value = prod.category_slug || 'archlabs-seating';
    document.getElementById('productSubcategoryInput').value = prod.subcategory || '';
    document.getElementById('productPriceInput').value = prod.price || '';
    document.getElementById('productDescInput').value = prod.description || '';
    document.getElementById('productMainImageUrl').value = prod.main_image || '';

    if (prod.main_image) {
        document.getElementById('productImagePreview').src = prod.main_image;
        document.getElementById('productImagePreviewContainer').classList.remove('d-none');
    } else {
        document.getElementById('productImagePreviewContainer').classList.add('d-none');
    }

    const modal = new bootstrap.Modal(document.getElementById('productFormModal'));
    modal.show();
}

async function handleCloudinaryProductUpload(input) {
    const file = input.files[0];
    if (!file) return;

    const progressDiv = document.getElementById('productUploadProgress');
    const progressBar = document.getElementById('productProgressBar');
    if (progressDiv) progressDiv.classList.remove('d-none');
    if (progressBar) progressBar.style.width = '0%';

    try {
        const uploadResult = await uploadToCloudinary(file, (percent) => {
            if (progressBar) progressBar.style.width = `${percent}%`;
        });

        document.getElementById('productMainImageUrl').value = uploadResult.url;
        document.getElementById('productImagePreview').src = uploadResult.url;
        document.getElementById('productImagePreviewContainer').classList.remove('d-none');
        alert('Image uploaded successfully!');
    } catch (err) {
        alert(`Image upload failed: ${err.message}`);
    } finally {
        if (progressDiv) progressDiv.classList.add('d-none');
    }
}

async function saveProductForm(e) {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Saving...';
    }

    const indexVal = document.getElementById('productIdInput').value;
    const name = document.getElementById('productNameInput').value.trim();
    const category_slug = document.getElementById('productCategorySelect').value;
    const subcategory = document.getElementById('productSubcategoryInput').value.trim();
    const price = document.getElementById('productPriceInput').value.trim() || 'Enquire for Price';
    const description = document.getElementById('productDescInput').value.trim();
    const main_image = document.getElementById('productMainImageUrl').value.trim() || 'images/logo/logo-symbol.png';

    if (!name) {
        alert('Please enter a product name.');
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = 'Save Product &rarr;'; }
        return;
    }

    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    try {
        const products = await CMSDataStore.get('products');
        
        let newRecord = {
            name,
            slug,
            category_slug,
            subcategory,
            price,
            description,
            main_image,
            is_visible: true,
            display_order: products.length + 1,
            created_at: new Date().toISOString()
        };

        if (indexVal !== '' && !isNaN(indexVal) && products[indexVal]) {
            newRecord = { ...products[indexVal], ...newRecord, updated_at: new Date().toISOString() };
            products[indexVal] = newRecord;
        } else {
            products.push(newRecord);
        }

        await CMSDataStore.save('products', products);
        alert('✓ Product updated and saved successfully!');

        const modalEl = document.getElementById('productFormModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();

        await loadProductsModule();
        await loadDashboardData();
    } catch (err) {
        alert(`❌ Update Failed: ${err.message}`);
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Save Product &rarr;';
        }
    }
}

async function toggleProductVisibility(index) {
    try {
        const products = await CMSDataStore.get('products');
        if (products[index]) {
            products[index].is_visible = !products[index].is_visible;
            await CMSDataStore.save('products', products);
            await loadProductsModule();
            await loadDashboardData();
        }
    } catch (err) {
        alert(`Visibility update failed: ${err.message}`);
    }
}

async function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product?')) {
        try {
            const products = await CMSDataStore.get('products');
            products.splice(index, 1);
            await CMSDataStore.save('products', products);
            await loadProductsModule();
            await loadDashboardData();
        } catch (err) {
            alert(`Product deletion failed: ${err.message}`);
        }
    }
}

// 5. Module: Categories CMS
async function loadCategoriesModule() {
    const categories = await CMSDataStore.get('categories');
    const tbody = document.getElementById('categoriesTableBody');
    if (!tbody) return;

    if (!categories || categories.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">No categories configured. Click "+ Add Category" to create one.</td></tr>`;
        return;
    }

    let html = '';
    categories.forEach((cat, index) => {
        const isVisible = cat.is_visible !== false;
        html += `
        <tr>
            <td>
                <img src="${cat.image_url || 'images/logo/logo-symbol.png'}" alt="${cat.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 6px; background: #fff;" onerror="this.src='images/logo/logo-symbol.png'">
            </td>
            <td class="fw-bold">${cat.name}</td>
            <td><code>${cat.slug}</code></td>
            <td class="fs-7 text-muted">${cat.description || '-'}</td>
            <td>${cat.display_order || index + 1}</td>
            <td><span class="${isVisible ? 'badge-published' : 'badge-hidden'}">${isVisible ? 'Active' : 'Hidden'}</span></td>
            <td>
                <div class="action-btn-group d-flex gap-1">
                    <button class="btn btn-sm btn-primary px-2 py-1" onclick="editCategoryModal(${index})">Edit</button>
                    <button class="btn btn-sm btn-outline-warning px-2 py-1" onclick="toggleCategoryVisibility(${index})">${isVisible ? 'Hide' : 'Show'}</button>
                    <button class="btn btn-sm btn-outline-danger px-2 py-1" onclick="deleteCategory(${index})">Delete</button>
                </div>
            </td>
        </tr>`;
    });
    tbody.innerHTML = html;
}

function openAddCategoryModal() {
    document.getElementById('categoryModalTitle').textContent = 'Add New Category';
    document.getElementById('categoryIdInput').value = '';
    document.getElementById('categoryNameInput').value = '';
    document.getElementById('categoryDescInput').value = '';
    document.getElementById('categoryOrderInput').value = '0';
    document.getElementById('categoryImageUrl').value = '';
    document.getElementById('categoryImagePreviewContainer').classList.add('d-none');
    document.getElementById('categoryImagePreview').src = '';

    const modal = new bootstrap.Modal(document.getElementById('categoryFormModal'));
    modal.show();
}

async function editCategoryModal(index) {
    const categories = await CMSDataStore.get('categories');
    const cat = categories[index];
    if (!cat) return;

    document.getElementById('categoryModalTitle').textContent = 'Edit Category';
    document.getElementById('categoryIdInput').value = index;
    document.getElementById('categoryNameInput').value = cat.name || '';
    document.getElementById('categoryDescInput').value = cat.description || '';
    document.getElementById('categoryOrderInput').value = cat.display_order || 0;
    document.getElementById('categoryImageUrl').value = cat.image_url || '';

    if (cat.image_url) {
        document.getElementById('categoryImagePreview').src = cat.image_url;
        document.getElementById('categoryImagePreviewContainer').classList.remove('d-none');
    } else {
        document.getElementById('categoryImagePreviewContainer').classList.add('d-none');
    }

    const modal = new bootstrap.Modal(document.getElementById('categoryFormModal'));
    modal.show();
}

async function saveCategoryForm(e) {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = 'Saving...'; }

    const indexVal = document.getElementById('categoryIdInput').value;
    const name = document.getElementById('categoryNameInput').value.trim();
    const description = document.getElementById('categoryDescInput').value.trim();
    const display_order = parseInt(document.getElementById('categoryOrderInput').value || '0', 10);
    const image_url = document.getElementById('categoryImageUrl').value.trim() || 'images/logo/logo-symbol.png';
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    try {
        const categories = await CMSDataStore.get('categories');
        let newRecord = {
            name,
            slug,
            description,
            image_url,
            display_order,
            is_visible: true,
            created_at: new Date().toISOString()
        };

        if (indexVal !== '' && !isNaN(indexVal) && categories[indexVal]) {
            newRecord = { ...categories[indexVal], ...newRecord, updated_at: new Date().toISOString() };
            categories[indexVal] = newRecord;
        } else {
            categories.push(newRecord);
        }

        await CMSDataStore.save('categories', categories);
        alert('✓ Category saved successfully!');

        const modalEl = document.getElementById('categoryFormModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();

        await loadCategoriesModule();
        await loadDashboardData();
    } catch (err) {
        alert(`❌ Category Save Failed: ${err.message}`);
    } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = 'Save Category &rarr;'; }
    }
}

async function toggleCategoryVisibility(index) {
    try {
        const categories = await CMSDataStore.get('categories');
        if (categories[index]) {
            categories[index].is_visible = !categories[index].is_visible;
            await CMSDataStore.save('categories', categories);
            await loadCategoriesModule();
            await loadDashboardData();
        }
    } catch (err) {
        alert(`Visibility update failed: ${err.message}`);
    }
}

async function deleteCategory(index) {
    if (confirm('Are you sure you want to delete this category?')) {
        try {
            const categories = await CMSDataStore.get('categories');
            categories.splice(index, 1);
            await CMSDataStore.save('categories', categories);
            await loadCategoriesModule();
            await loadDashboardData();
        } catch (err) {
            alert(`Category deletion failed: ${err.message}`);
        }
    }
}

// 6. Module: Projects CMS
async function loadProjectsModule() {
    const projects = await CMSDataStore.get('projects');
    const tbody = document.getElementById('projectsTableBody');
    if (!tbody) return;

    if (!projects || projects.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">No projects found. Click "+ Add Project" to showcase a new installation.</td></tr>`;
        return;
    }

    let html = '';
    projects.forEach((proj, index) => {
        const isVisible = proj.is_visible !== false;
        html += `
        <tr>
            <td>
                <img src="${proj.main_image || 'images/sections/hero-workspace.jpg'}" alt="${proj.title}" style="width: 48px; height: 36px; object-fit: cover; border-radius: 6px; background: #fff;" onerror="this.src='images/sections/hero-workspace.jpg'">
            </td>
            <td class="fw-bold">${proj.title}</td>
            <td><span class="badge bg-light text-dark border">${proj.location || 'Hyderabad'}</span></td>
            <td class="fs-7 text-muted">${proj.description || '-'}</td>
            <td>${proj.display_order || index + 1}</td>
            <td><span class="${isVisible ? 'badge-published' : 'badge-hidden'}">${isVisible ? 'Published' : 'Hidden'}</span></td>
            <td>
                <div class="action-btn-group d-flex gap-1">
                    <button class="btn btn-sm btn-primary px-2 py-1" onclick="editProjectModal(${index})">Edit</button>
                    <button class="btn btn-sm btn-outline-warning px-2 py-1" onclick="toggleProjectVisibility(${index})">${isVisible ? 'Hide' : 'Show'}</button>
                    <button class="btn btn-sm btn-outline-danger px-2 py-1" onclick="deleteProject(${index})">Delete</button>
                </div>
            </td>
        </tr>`;
    });
    tbody.innerHTML = html;
}

function openAddProjectModal() {
    document.getElementById('projectModalTitle').textContent = 'Add New Project';
    document.getElementById('projectIdInput').value = '';
    document.getElementById('projectTitleInput').value = '';
    document.getElementById('projectLocationInput').value = '';
    document.getElementById('projectDescInput').value = '';
    document.getElementById('projectOrderInput').value = '0';
    document.getElementById('projectMainImageUrl').value = '';
    document.getElementById('projectImagePreviewContainer').classList.add('d-none');
    document.getElementById('projectImagePreview').src = '';

    const modal = new bootstrap.Modal(document.getElementById('projectFormModal'));
    modal.show();
}

async function editProjectModal(index) {
    const projects = await CMSDataStore.get('projects');
    const proj = projects[index];
    if (!proj) return;

    document.getElementById('projectModalTitle').textContent = 'Edit Project';
    document.getElementById('projectIdInput').value = index;
    document.getElementById('projectTitleInput').value = proj.title || '';
    document.getElementById('projectLocationInput').value = proj.location || '';
    document.getElementById('projectDescInput').value = proj.description || '';
    document.getElementById('projectOrderInput').value = proj.display_order || 0;
    document.getElementById('projectMainImageUrl').value = proj.main_image || '';

    if (proj.main_image) {
        document.getElementById('projectImagePreview').src = proj.main_image;
        document.getElementById('projectImagePreviewContainer').classList.remove('d-none');
    } else {
        document.getElementById('projectImagePreviewContainer').classList.add('d-none');
    }

    const modal = new bootstrap.Modal(document.getElementById('projectFormModal'));
    modal.show();
}

async function saveProjectForm(e) {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = 'Saving...'; }

    const indexVal = document.getElementById('projectIdInput').value;
    const title = document.getElementById('projectTitleInput').value.trim();
    const location = document.getElementById('projectLocationInput').value.trim();
    const description = document.getElementById('projectDescInput').value.trim();
    const display_order = parseInt(document.getElementById('projectOrderInput').value || '0', 10);
    const main_image = document.getElementById('projectMainImageUrl').value.trim() || 'images/sections/hero-workspace.jpg';
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    try {
        const projects = await CMSDataStore.get('projects');
        let newRecord = {
            title,
            slug,
            location,
            description,
            main_image,
            display_order,
            is_visible: true,
            created_at: new Date().toISOString()
        };

        if (indexVal !== '' && !isNaN(indexVal) && projects[indexVal]) {
            newRecord = { ...projects[indexVal], ...newRecord, updated_at: new Date().toISOString() };
            projects[indexVal] = newRecord;
        } else {
            projects.push(newRecord);
        }

        await CMSDataStore.save('projects', projects);
        alert('✓ Project saved successfully!');

        const modalEl = document.getElementById('projectFormModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();

        await loadProjectsModule();
        await loadDashboardData();
    } catch (err) {
        alert(`❌ Project Save Failed: ${err.message}`);
    } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = 'Save Project &rarr;'; }
    }
}

async function toggleProjectVisibility(index) {
    try {
        const projects = await CMSDataStore.get('projects');
        if (projects[index]) {
            projects[index].is_visible = !projects[index].is_visible;
            await CMSDataStore.save('projects', projects);
            await loadProjectsModule();
            await loadDashboardData();
        }
    } catch (err) {
        alert(`Visibility update failed: ${err.message}`);
    }
}

async function deleteProject(index) {
    if (confirm('Are you sure you want to delete this project?')) {
        try {
            const projects = await CMSDataStore.get('projects');
            projects.splice(index, 1);
            await CMSDataStore.save('projects', projects);
            await loadProjectsModule();
            await loadDashboardData();
        } catch (err) {
            alert(`Project deletion failed: ${err.message}`);
        }
    }
}

// 7. Module: Hero CMS
async function loadHeroModule() {
    const heroData = await CMSDataStore.get('hero_sections');
    const hero = (heroData && heroData[0]) ? heroData[0] : {
        heading: 'Transforming Workspaces.<br><span class="text-gradient-red">Elevating Possibilities.</span>',
        description: 'Premium office furniture, interior systems, and turnkey workspace solutions designed for modern corporate businesses...',
        background_image: 'images/sections/hero-workspace.jpg'
    };

    document.getElementById('heroHeadingInput').value = hero.heading || '';
    document.getElementById('heroDescInput').value = hero.description || '';
    document.getElementById('heroBgImageInput').value = hero.background_image || '';
}

async function saveHeroCMS(e) {
    e.preventDefault();
    const heading = document.getElementById('heroHeadingInput').value;
    const description = document.getElementById('heroDescInput').value;
    const background_image = document.getElementById('heroBgImageInput').value;

    try {
        const heroRecord = [{ heading, description, background_image, is_custom_updated: true }];
        await CMSDataStore.save('hero_sections', heroRecord);
        alert('✓ Hero section updated successfully in database!');
    } catch (err) {
        alert(`Failed to update Hero section: ${err.message}`);
    }
}

// 8. Module: About Us CMS
async function loadAboutModule() {
    const aboutData = await CMSDataStore.get('about_sections');
    const about = (aboutData && aboutData[0]) ? aboutData[0] : {
        title: 'Creating Workspaces That Work for You',
        main_description: 'At Vishista Office Solutions Pvt Ltd, we specialize in delivering world-class workspace environments.'
    };

    document.getElementById('aboutTitleInput').value = about.title || '';
    document.getElementById('aboutDescInput').value = about.main_description || '';
}

async function saveAboutCMS(e) {
    e.preventDefault();
    const title = document.getElementById('aboutTitleInput').value;
    const main_description = document.getElementById('aboutDescInput').value;

    try {
        const aboutRecord = [{ title, main_description, is_custom_updated: true }];
        await CMSDataStore.save('about_sections', aboutRecord);
        alert('✓ About Us content updated successfully in database!');
    } catch (err) {
        alert(`Failed to update About Us section: ${err.message}`);
    }
}

// 9. Module: Footer CMS
async function loadFooterModule() {
    const footerData = await CMSDataStore.get('footer_content');
    const footer = (footerData && footerData[0]) ? footerData[0] : {
        company_description: 'Vishista Office Solutions Pvt Ltd is a premier provider of corporate office furniture...',
        address: 'Plot No 45, Jubilee Hills, Road No 36, Hyderabad, Telangana 500033',
        phone: '+91 98490 58444',
        email: 'info@vishista.com'
    };

    document.getElementById('footerCompanyDescInput').value = footer.company_description || '';
    document.getElementById('footerAddressInput').value = footer.address || '';
    document.getElementById('footerPhoneInput').value = footer.phone || '';
    document.getElementById('footerEmailInput').value = footer.email || '';
}

async function saveFooterCMS(e) {
    e.preventDefault();
    const company_description = document.getElementById('footerCompanyDescInput').value;
    const address = document.getElementById('footerAddressInput').value;
    const phone = document.getElementById('footerPhoneInput').value;
    const email = document.getElementById('footerEmailInput').value;

    try {
        const footerRecord = [{ company_description, address, phone, email, is_custom_updated: true }];
        await CMSDataStore.save('footer_content', footerRecord);
        alert('✓ Footer contact details updated successfully in database!');
    } catch (err) {
        alert(`Failed to update Footer content: ${err.message}`);
    }
}

// Export functions to global scope
window.showAdminDashboard = showAdminDashboard;
window.showAuthScreen = showAuthScreen;
window.switchTab = switchTab;
window.handleImageUploadGeneric = handleImageUploadGeneric;
window.openAddProductModal = openAddProductModal;
window.editProductModal = editProductModal;
window.handleCloudinaryProductUpload = handleCloudinaryProductUpload;
window.saveProductForm = saveProductForm;
window.toggleProductVisibility = toggleProductVisibility;
window.deleteProduct = deleteProduct;
window.openAddCategoryModal = openAddCategoryModal;
window.editCategoryModal = editCategoryModal;
window.saveCategoryForm = saveCategoryForm;
window.toggleCategoryVisibility = toggleCategoryVisibility;
window.deleteCategory = deleteCategory;
window.openAddProjectModal = openAddProjectModal;
window.editProjectModal = editProjectModal;
window.saveProjectForm = saveProjectForm;
window.toggleProjectVisibility = toggleProjectVisibility;
window.deleteProject = deleteProject;
window.saveHeroCMS = saveHeroCMS;
window.saveAboutCMS = saveAboutCMS;
window.saveFooterCMS = saveFooterCMS;
window.toggleMobileSidebar = toggleMobileSidebar;
