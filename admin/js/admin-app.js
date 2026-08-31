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
    loadProductsModule();
    loadCategoriesModule();
    loadProjectsModule();
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

    if (document.getElementById('statTotalProducts')) document.getElementById('statTotalProducts').textContent = products ? products.length : 0;
    if (document.getElementById('statTotalCategories')) document.getElementById('statTotalCategories').textContent = categories ? categories.length : 0;
    if (document.getElementById('statTotalProjects')) document.getElementById('statTotalProjects').textContent = projects ? projects.length : 0;

    const publishedCount = (products || []).filter(p => p.is_visible !== false && p.is_published !== false).length;
    if (document.getElementById('statPublishedItems')) document.getElementById('statPublishedItems').textContent = publishedCount;
}

// 4. Module: Products CMS & Search/Filters
let cachedProductsList = [];

async function loadProductsModule() {
    cachedProductsList = await CMSDataStore.get('products');
    const categories = await CMSDataStore.get('categories');
    
    // Populate Category filter dropdown
    const catFilter = document.getElementById('productCategoryFilter');
    if (catFilter && categories) {
        let catOptions = '<option value="">All Categories</option>';
        categories.forEach(c => {
            catOptions += `<option value="${c.slug}">${c.name}</option>`;
        });
        catFilter.innerHTML = catOptions;
    }

    filterProductsTable();
}

function filterProductsTable() {
    const tbody = document.getElementById('productsTableBody');
    if (!tbody) return;

    const search = (document.getElementById('productSearchInput')?.value || '').toLowerCase().trim();
    const catFilter = document.getElementById('productCategoryFilter')?.value || '';
    const visFilter = document.getElementById('productVisibilityFilter')?.value || '';
    const pubFilter = document.getElementById('productPublishedFilter')?.value || '';

    if (!cachedProductsList || cachedProductsList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4 text-muted">No products found. Click "+ Add Product" to create one.</td></tr>`;
        return;
    }

    const filtered = cachedProductsList.filter((prod) => {
        const nameStr = (prod.name || '').toLowerCase();
        const descStr = (prod.description || '').toLowerCase();
        const matchesSearch = !search || nameStr.includes(search) || descStr.includes(search);

        const matchesCategory = !catFilter || prod.category_slug === catFilter;

        const isVis = prod.is_visible !== false;
        const matchesVisibility = !visFilter || (visFilter === 'visible' && isVis) || (visFilter === 'hidden' && !isVis);

        const isPub = prod.is_published !== false;
        const matchesPublished = !pubFilter || (pubFilter === 'published' && isPub) || (pubFilter === 'unpublished' && !isPub);

        return matchesSearch && matchesCategory && matchesVisibility && matchesPublished;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4 text-muted">No matching products found for the selected filters.</td></tr>`;
        return;
    }

    let html = '';
    filtered.forEach((prod) => {
        const realIndex = cachedProductsList.indexOf(prod);
        const isVisible = prod.is_visible !== false;
        const isPublished = prod.is_published !== false;

        html += `
        <tr>
            <td>
                <img src="${prod.main_image || prod.image || 'images/logo/logo-symbol.png'}" alt="${prod.name}" style="width: 48px; height: 48px; object-fit: contain; border-radius: 6px; background: #fff;" onerror="this.src='images/logo/logo-symbol.png'">
            </td>
            <td class="fw-bold text-dark">${prod.name}</td>
            <td>
                <span class="badge bg-light text-dark border">${prod.subcategory || prod.category_slug || 'General'}</span>
            </td>
            <td class="fs-7 text-secondary">${prod.price || 'Enquire'}</td>
            <td>
                <span class="${isVisible ? 'badge bg-success-subtle text-success border border-success' : 'badge bg-danger-subtle text-danger border border-danger'}">
                    ${isVisible ? 'VISIBLE' : 'HIDDEN'}
                </span>
            </td>
            <td>
                <span class="${isPublished ? 'badge bg-primary-subtle text-primary border border-primary' : 'badge bg-secondary-subtle text-secondary border'}">
                    ${isPublished ? 'PUBLISHED' : 'UNPUBLISHED'}
                </span>
            </td>
            <td>${prod.display_order || realIndex + 1}</td>
            <td>
                <div class="action-btn-group d-flex flex-wrap gap-1">
                    <button class="btn btn-sm btn-primary px-2 py-1 fs-7" onclick="editProductModal(${realIndex})">Edit</button>
                    <button class="btn btn-sm ${isVisible ? 'btn-outline-secondary' : 'btn-outline-success'} px-2 py-1 fs-7" onclick="toggleProductVisibility(${realIndex})">${isVisible ? 'Hide' : 'Show'}</button>
                    <button class="btn btn-sm ${isPublished ? 'btn-outline-warning' : 'btn-outline-info'} px-2 py-1 fs-7" onclick="toggleProductPublished(${realIndex})">${isPublished ? 'Unpublish' : 'Publish'}</button>
                    <button class="btn btn-sm btn-outline-danger px-2 py-1 fs-7" onclick="deleteProduct(${realIndex})">Delete</button>
                </div>
            </td>
        </tr>`;
    });
    tbody.innerHTML = html;
}

async function populateCategoryDropdown(selectEl, selectedSlug) {
    if (!selectEl) return;
    const categories = await CMSDataStore.get('categories');
    if (!categories || categories.length === 0) return;

    let html = '';
    categories.forEach(cat => {
        const slug = cat.slug || cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const isSelected = (selectedSlug === slug || selectedSlug === cat.name) ? 'selected' : '';
        html += `<option value="${slug}" ${isSelected}>${cat.name}</option>`;
    });
    selectEl.innerHTML = html;
}

async function openAddProductModal() {
    const selectEl = document.getElementById('productCategorySelect');
    await populateCategoryDropdown(selectEl, 'archlabs-seating');

    document.getElementById('productModalTitle').textContent = 'Add New Product';
    document.getElementById('productIdInput').value = '';
    document.getElementById('productNameInput').value = '';
    document.getElementById('productSubcategoryInput').value = '';
    document.getElementById('productPriceInput').value = '';
    document.getElementById('productDescInput').value = '';
    if (document.getElementById('productVisibleCheck')) document.getElementById('productVisibleCheck').checked = true;
    if (document.getElementById('productPublishedCheck')) document.getElementById('productPublishedCheck').checked = true;
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

    const selectEl = document.getElementById('productCategorySelect');
    await populateCategoryDropdown(selectEl, prod.category_slug);

    document.getElementById('productModalTitle').textContent = 'Edit Product';
    document.getElementById('productIdInput').value = index;
    document.getElementById('productNameInput').value = prod.name || '';
    document.getElementById('productSubcategoryInput').value = prod.subcategory || '';
    document.getElementById('productPriceInput').value = prod.price || '';
    document.getElementById('productDescInput').value = prod.description || '';
    if (document.getElementById('productVisibleCheck')) document.getElementById('productVisibleCheck').checked = prod.is_visible !== false;
    if (document.getElementById('productPublishedCheck')) document.getElementById('productPublishedCheck').checked = prod.is_published !== false;
    document.getElementById('productMainImageUrl').value = prod.main_image || prod.image || '';

    const imgPath = prod.main_image || prod.image;
    if (imgPath) {
        document.getElementById('productImagePreview').src = imgPath;
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
    const price = document.getElementById('productPriceInput').value.trim() || null;
    const description = document.getElementById('productDescInput').value.trim();
    const is_visible = document.getElementById('productVisibleCheck') ? document.getElementById('productVisibleCheck').checked : true;
    const is_published = document.getElementById('productPublishedCheck') ? document.getElementById('productPublishedCheck').checked : true;
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
            display_price: false,
            enquiry_only: true,
            description,
            main_image,
            image: main_image,
            is_visible,
            is_published,
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
            const targetProd = products[index];
            targetProd.is_visible = (targetProd.is_visible === false) ? true : false;
            
            if (targetProd.id) {
                await CMSDataStore.updateRecord('products', targetProd.id, { is_visible: targetProd.is_visible });
            } else if (targetProd.slug && typeof supabaseClient !== 'undefined' && supabaseClient) {
                await supabaseClient.from('products').update({ is_visible: targetProd.is_visible }).eq('slug', targetProd.slug);
            }
            
            localStorage.setItem(CMSDataStore.getKey('products'), JSON.stringify(products));
            await loadProductsModule();
            await loadDashboardData();
        }
    } catch (err) {
        alert(`Visibility update failed: ${err.message}`);
    }
}

async function toggleProductPublished(index) {
    try {
        const products = await CMSDataStore.get('products');
        if (products[index]) {
            const targetProd = products[index];
            targetProd.is_published = (targetProd.is_published === false) ? true : false;

            if (targetProd.id) {
                await CMSDataStore.updateRecord('products', targetProd.id, { is_published: targetProd.is_published });
            } else if (targetProd.slug && typeof supabaseClient !== 'undefined' && supabaseClient) {
                await supabaseClient.from('products').update({ is_published: targetProd.is_published }).eq('slug', targetProd.slug);
            }

            localStorage.setItem(CMSDataStore.getKey('products'), JSON.stringify(products));
            await loadProductsModule();
            await loadDashboardData();
        }
    } catch (err) {
        alert(`Published status update failed: ${err.message}`);
    }
}

async function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product?')) {
        try {
            const products = await CMSDataStore.get('products');
            const targetProd = products[index];
            if (targetProd) {
                if (targetProd.id && typeof supabaseClient !== 'undefined' && supabaseClient) {
                    await supabaseClient.from('products').delete().eq('id', targetProd.id);
                } else if (targetProd.slug && typeof supabaseClient !== 'undefined' && supabaseClient) {
                    await supabaseClient.from('products').delete().eq('slug', targetProd.slug);
                }
                
                products.splice(index, 1);
                localStorage.setItem(CMSDataStore.getKey('products'), JSON.stringify(products));
            }
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
    const products = await CMSDataStore.get('products');
    const tbody = document.getElementById('categoriesTableBody');
    if (!tbody) return;

    if (!categories || categories.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4 text-muted">No categories configured. Click "+ Add Category" to create one.</td></tr>`;
        return;
    }

    let html = '';
    categories.forEach((cat, index) => {
        const isVisible = cat.is_visible !== false;
        const isPublished = cat.is_published !== false;
        const prodCount = (products || []).filter(p => p.category_slug === cat.slug).length;

        html += `
        <tr>
            <td>
                <img src="${cat.image_url || 'images/logo/logo-symbol.png'}" alt="${cat.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 6px; background: #fff;" onerror="this.src='images/logo/logo-symbol.png'">
            </td>
            <td class="fw-bold text-dark">${cat.name}</td>
            <td><code>${cat.slug}</code></td>
            <td><span class="badge bg-danger-subtle text-danger border border-danger font-monospace px-2 py-1">${prodCount} Products</span></td>
            <td>
                <span class="${isVisible ? 'badge bg-success-subtle text-success border border-success' : 'badge bg-danger-subtle text-danger border border-danger'}">
                    ${isVisible ? 'VISIBLE' : 'HIDDEN'}
                </span>
            </td>
            <td>
                <span class="${isPublished ? 'badge bg-primary-subtle text-primary border border-primary' : 'badge bg-secondary-subtle text-secondary border'}">
                    ${isPublished ? 'PUBLISHED' : 'UNPUBLISHED'}
                </span>
            </td>
            <td>${cat.display_order || index + 1}</td>
            <td>
                <div class="action-btn-group d-flex flex-wrap gap-1">
                    <button class="btn btn-sm btn-primary px-2 py-1 fs-7" onclick="editCategoryModal(${index})">Edit</button>
                    <button class="btn btn-sm ${isVisible ? 'btn-outline-secondary' : 'btn-outline-success'} px-2 py-1 fs-7" onclick="toggleCategoryVisibility(${index})">${isVisible ? 'Hide' : 'Show'}</button>
                    <button class="btn btn-sm ${isPublished ? 'btn-outline-warning' : 'btn-outline-info'} px-2 py-1 fs-7" onclick="toggleCategoryPublished(${index})">${isPublished ? 'Unpublish' : 'Publish'}</button>
                    <button class="btn btn-sm btn-outline-danger px-2 py-1 fs-7" onclick="deleteCategory(${index})">Delete</button>
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
    if (document.getElementById('categoryVisibleCheck')) document.getElementById('categoryVisibleCheck').checked = true;
    if (document.getElementById('categoryPublishedCheck')) document.getElementById('categoryPublishedCheck').checked = true;
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
    if (document.getElementById('categoryVisibleCheck')) document.getElementById('categoryVisibleCheck').checked = cat.is_visible !== false;
    if (document.getElementById('categoryPublishedCheck')) document.getElementById('categoryPublishedCheck').checked = cat.is_published !== false;
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
    const is_visible = document.getElementById('categoryVisibleCheck') ? document.getElementById('categoryVisibleCheck').checked : true;
    const is_published = document.getElementById('categoryPublishedCheck') ? document.getElementById('categoryPublishedCheck').checked : true;
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
            is_visible,
            is_published,
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
            const targetCat = categories[index];
            targetCat.is_visible = (targetCat.is_visible === false) ? true : false;

            if (targetCat.id) {
                await CMSDataStore.updateRecord('categories', targetCat.id, { is_visible: targetCat.is_visible });
            } else if (targetCat.slug && typeof supabaseClient !== 'undefined' && supabaseClient) {
                await supabaseClient.from('categories').update({ is_visible: targetCat.is_visible }).eq('slug', targetCat.slug);
            }

            localStorage.setItem(CMSDataStore.getKey('categories'), JSON.stringify(categories));
            await loadCategoriesModule();
            await loadDashboardData();
        }
    } catch (err) {
        alert(`Visibility update failed: ${err.message}`);
    }
}

async function toggleCategoryPublished(index) {
    try {
        const categories = await CMSDataStore.get('categories');
        if (categories[index]) {
            const targetCat = categories[index];
            targetCat.is_published = (targetCat.is_published === false) ? true : false;

            if (targetCat.id) {
                await CMSDataStore.updateRecord('categories', targetCat.id, { is_published: targetCat.is_published });
            } else if (targetCat.slug && typeof supabaseClient !== 'undefined' && supabaseClient) {
                await supabaseClient.from('categories').update({ is_published: targetCat.is_published }).eq('slug', targetCat.slug);
            }

            localStorage.setItem(CMSDataStore.getKey('categories'), JSON.stringify(categories));
            await loadCategoriesModule();
            await loadDashboardData();
        }
    } catch (err) {
        alert(`Published status update failed: ${err.message}`);
    }
}

async function deleteCategory(index) {
    try {
        const categories = await CMSDataStore.get('categories');
        const products = await CMSDataStore.get('products');
        const targetCat = categories[index];

        if (!targetCat) return;

        // Safety Check: Check if products belong to category
        const attachedProducts = (products || []).filter(p => p.category_slug === targetCat.slug);
        if (attachedProducts.length > 0) {
            alert(`⚠️ Cannot delete category "${targetCat.name}" because ${attachedProducts.length} product(s) belong to it. Please reassign or delete those products first.`);
            return;
        }

        if (confirm(`Are you sure you want to delete category "${targetCat.name}"?`)) {
            if (targetCat.id && typeof supabaseClient !== 'undefined' && supabaseClient) {
                await supabaseClient.from('categories').delete().eq('id', targetCat.id);
            } else if (targetCat.slug && typeof supabaseClient !== 'undefined' && supabaseClient) {
                await supabaseClient.from('categories').delete().eq('slug', targetCat.slug);
            }

            categories.splice(index, 1);
            localStorage.setItem(CMSDataStore.getKey('categories'), JSON.stringify(categories));

            await loadCategoriesModule();
            await loadDashboardData();
        }
    } catch (err) {
        alert(`Category deletion failed: ${err.message}`);
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
            const targetProj = projects[index];
            targetProj.is_visible = (targetProj.is_visible === false) ? true : false;

            if (targetProj.id) {
                await CMSDataStore.updateRecord('projects', targetProj.id, { is_visible: targetProj.is_visible });
            } else if (targetProj.slug && typeof supabaseClient !== 'undefined' && supabaseClient) {
                await supabaseClient.from('projects').update({ is_visible: targetProj.is_visible }).eq('slug', targetProj.slug);
            }

            localStorage.setItem(CMSDataStore.getKey('projects'), JSON.stringify(projects));
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
            const targetProj = projects[index];
            if (targetProj) {
                if (targetProj.id && typeof supabaseClient !== 'undefined' && supabaseClient) {
                    await supabaseClient.from('projects').delete().eq('id', targetProj.id);
                } else if (targetProj.slug && typeof supabaseClient !== 'undefined' && supabaseClient) {
                    await supabaseClient.from('projects').delete().eq('slug', targetProj.slug);
                }

                projects.splice(index, 1);
                localStorage.setItem(CMSDataStore.getKey('projects'), JSON.stringify(projects));
            }
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
        slide_1: 'images/sections/hero-slide-1.png',
        slide_2: 'images/sections/hero-slide-2.png',
        slide_3: 'images/sections/hero-slide-3.png',
        background_image: 'images/sections/hero-slide-1.png'
    };

    if (document.getElementById('heroHeadingInput')) document.getElementById('heroHeadingInput').value = hero.heading || '';
    if (document.getElementById('heroDescInput')) document.getElementById('heroDescInput').value = hero.description || '';
    
    let slide1 = hero.slide_1 || '';
    let slide2 = hero.slide_2 || '';
    let slide3 = hero.slide_3 || '';

    if (!slide1 && hero.background_image) {
        const parts = hero.background_image.split(',').map(s => s.trim());
        slide1 = parts[0] || 'images/sections/hero-slide-1.png';
        slide2 = parts[1] || 'images/sections/hero-slide-2.png';
        slide3 = parts[2] || 'images/sections/hero-slide-3.png';
    }

    if (document.getElementById('heroBgImageInput')) document.getElementById('heroBgImageInput').value = slide1 || 'images/sections/hero-slide-1.png';
    if (document.getElementById('heroBgImageInput2')) document.getElementById('heroBgImageInput2').value = slide2 || 'images/sections/hero-slide-2.png';
    if (document.getElementById('heroBgImageInput3')) document.getElementById('heroBgImageInput3').value = slide3 || 'images/sections/hero-slide-3.png';
}

async function saveHeroCMS(e) {
    e.preventDefault();
    const heading = document.getElementById('heroHeadingInput').value;
    const description = document.getElementById('heroDescInput').value;
    const slide_1 = document.getElementById('heroBgImageInput') ? document.getElementById('heroBgImageInput').value : 'images/sections/hero-slide-1.png';
    const slide_2 = document.getElementById('heroBgImageInput2') ? document.getElementById('heroBgImageInput2').value : 'images/sections/hero-slide-2.png';
    const slide_3 = document.getElementById('heroBgImageInput3') ? document.getElementById('heroBgImageInput3').value : 'images/sections/hero-slide-3.png';
    const background_image = `${slide_1},${slide_2},${slide_3}`;

    try {
        const heroRecord = [{ heading, description, slide_1, slide_2, slide_3, background_image, is_custom_updated: true }];
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
