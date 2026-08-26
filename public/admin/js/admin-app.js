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

            // Default Admin Credentials fallback for initial setup
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
            document.querySelector('.admin-sidebar').classList.toggle('show');
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

    // Load data for module
    if (tabName === 'dashboard') loadDashboardData();
    if (tabName === 'products') loadProductsModule();
    if (tabName === 'categories') loadCategoriesModule();
    if (tabName === 'projects') loadProjectsModule();
    if (tabName === 'hero') loadHeroModule();
    if (tabName === 'about') loadAboutModule();
    if (tabName === 'enquiries') loadEnquiriesModule();
    if (tabName === 'footer') loadFooterModule();
}

// 3. Module: Dashboard
async function loadDashboardData() {
    const products = await CMSDataStore.get('products');
    const categories = await CMSDataStore.get('categories');
    const enquiries = await CMSDataStore.get('enquiries');

    document.getElementById('statTotalProducts').textContent = products.length || 0;
    document.getElementById('statTotalCategories').textContent = categories.length || 0;
    document.getElementById('statTotalEnquiries').textContent = enquiries.length || 0;

    const publishedCount = products.filter(p => p.is_visible !== false).length;
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
            <td><span class="badge bg-light text-dark border">${prod.subcategory || 'General'}</span></td>
            <td>${prod.price || 'Enquire'}</td>
            <td>
                <span class="${isVisible ? 'badge-published' : 'badge-hidden'}">
                    ${isVisible ? 'Published' : 'Hidden'}
                </span>
            </td>
            <td>${prod.display_order || index + 1}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary me-1" onclick="editProductModal('${prod.id || index}')">Edit</button>
                <button class="btn btn-sm btn-outline-warning me-1" onclick="toggleProductVisibility(${index})">${isVisible ? 'Hide' : 'Show'}</button>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct(${index})">Delete</button>
            </td>
        </tr>`;
    });
    tbody.innerHTML = html;
}

async function toggleProductVisibility(index) {
    const products = await CMSDataStore.get('products');
    if (products[index]) {
        products[index].is_visible = !products[index].is_visible;
        await CMSDataStore.save('products', products);
        loadProductsModule();
        loadDashboardData();
    }
}

async function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product?')) {
        const products = await CMSDataStore.get('products');
        products.splice(index, 1);
        await CMSDataStore.save('products', products);
        loadProductsModule();
        loadDashboardData();
    }
}

// Open Add Product Modal
function openAddProductModal() {
    document.getElementById('productModalTitle').textContent = 'Add New Product';
    document.getElementById('productForm').reset();
    document.getElementById('productIdInput').value = '';
    document.getElementById('productImagePreview').src = '';
    document.getElementById('productImagePreviewContainer').classList.add('d-none');

    const modal = new bootstrap.Modal(document.getElementById('productFormModal'));
    modal.show();
}

// Cloudinary Direct Upload for Product Form
async function handleCloudinaryProductUpload(input) {
    const file = input.files[0];
    if (!file) return;

    const progressBox = document.getElementById('productUploadProgress');
    const progressBar = document.getElementById('productProgressBar');
    progressBox.classList.remove('d-none');
    progressBar.style.width = '0%';
    progressBar.textContent = '0%';

    try {
        const result = await uploadToCloudinary(file, (percent) => {
            progressBar.style.width = `${percent}%`;
            progressBar.textContent = `${percent}%`;
        });

        document.getElementById('productMainImageUrl').value = result.url;
        document.getElementById('productImagePreview').src = result.url;
        document.getElementById('productImagePreviewContainer').classList.remove('d-none');
        alert('Image uploaded to Cloudinary successfully!');
    } catch (e) {
        alert('Cloudinary upload failed: ' + e.message);
    } finally {
        progressBox.classList.add('d-none');
    }
}

// Save Product Form
async function saveProductForm(e) {
    e.preventDefault();
    const id = document.getElementById('productIdInput').value;
    const name = document.getElementById('productNameInput').value;
    const category_slug = document.getElementById('productCategorySelect').value;
    const subcategory = document.getElementById('productSubcategoryInput').value;
    const description = document.getElementById('productDescInput').value;
    const price = document.getElementById('productPriceInput').value;
    const main_image = document.getElementById('productMainImageUrl').value || 'images/logo/logo-mark.png?v=2';

    const products = await CMSDataStore.get('products');

    if (id !== '') {
        // Edit
        const index = parseInt(id);
        if (products[index]) {
            products[index].name = name;
            products[index].category_slug = category_slug;
            products[index].subcategory = subcategory;
            products[index].description = description;
            products[index].price = price;
            products[index].main_image = main_image;
        }
    } else {
        // Add New
        const newProd = {
            id: 'prod_' + Date.now(),
            name,
            slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            category_slug,
            subcategory,
            description,
            price: price || 'Enquire for Price',
            main_image,
            is_visible: true,
            display_order: products.length + 1,
            created_at: new Date().toISOString()
        };
        products.unshift(newProd);
    }

    await CMSDataStore.save('products', products);

    const modalEl = document.getElementById('productFormModal');
    if (modalEl) {
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
    }

    loadProductsModule();
    loadDashboardData();
}

// 5. Module: Enquiries
async function loadEnquiriesModule() {
    const enquiries = await CMSDataStore.get('enquiries');
    const tbody = document.getElementById('enquiriesTableBody');
    if (!tbody) return;

    if (!enquiries || enquiries.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted">No customer enquiries received yet.</td></tr>`;
        return;
    }

    let html = '';
    enquiries.forEach((enq, index) => {
        html += `
        <tr>
            <td class="fw-bold">${enq.full_name}</td>
            <td>${enq.product_name || 'General'}</td>
            <td><a href="tel:${enq.phone_number}">${enq.phone_number}</a></td>
            <td>${enq.email || '-'}</td>
            <td>${new Date(enq.created_at || Date.now()).toLocaleDateString()}</td>
            <td>
                <span class="badge bg-danger text-white">${enq.status || 'New'}</span>
            </td>
        </tr>`;
    });
    tbody.innerHTML = html;
}

// Export functions to global scope
window.showAdminDashboard = showAdminDashboard;
window.showAuthScreen = showAuthScreen;
window.switchTab = switchTab;
window.openAddProductModal = openAddProductModal;
window.handleCloudinaryProductUpload = handleCloudinaryProductUpload;
window.saveProductForm = saveProductForm;
window.toggleProductVisibility = toggleProductVisibility;
window.deleteProduct = deleteProduct;
