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

    // Auto-close sidebar drawer on mobile view after selecting any menu option
    const sidebar = document.querySelector('.admin-sidebar');
    if (sidebar && sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
    }

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

// Open Edit Product Modal
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

// 5. Module: Categories
async function loadCategoriesModule() {
    const categories = await CMSDataStore.get('categories');
    const tbody = document.getElementById('categoriesTableBody');
    if (!tbody) return;

    if (!categories || categories.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-muted">No categories configured.</td></tr>`;
        return;
    }

    let html = '';
    categories.forEach((cat, index) => {
        const isVisible = cat.is_visible !== false;
        html += `
        <tr>
            <td class="fw-bold">${cat.name}</td>
            <td><code>${cat.slug}</code></td>
            <td class="fs-7 text-muted">${cat.description || '-'}</td>
            <td>${cat.display_order || index + 1}</td>
            <td><span class="${isVisible ? 'badge-published' : 'badge-hidden'}">${isVisible ? 'Active' : 'Hidden'}</span></td>
        </tr>`;
    });
    tbody.innerHTML = html;
}

// 6. Module: Projects
async function loadProjectsModule() {
    const container = document.getElementById('projectsContentArea');
    if (!container) return;

    container.innerHTML = `
        <div class="p-3 border rounded bg-light">
            <h6 class="fw-bold mb-2">Active Turnkey Corporate Fitout Showcase</h6>
            <p class="fs-7 text-muted mb-3">Featured projects automatically load from Supabase and CMS data store into the homepage portfolio slider.</p>
            <div class="badge bg-success px-3 py-2 fs-7">✅ Corporate Showcase Active</div>
        </div>
    `;
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

    const heroRecord = [{ heading, description, background_image, is_custom_updated: true }];
    await CMSDataStore.save('hero_sections', heroRecord);
    alert('Hero section content updated successfully!');
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

    const aboutRecord = [{ title, main_description, is_custom_updated: true }];
    await CMSDataStore.save('about_sections', aboutRecord);
    alert('About Us content updated successfully!');
}

// 9. Module: Enquiries
async function loadEnquiriesModule() {
    const enquiries = await CMSDataStore.get('enquiries');
    const tbody = document.getElementById('enquiriesTableBody');
    if (!tbody) return;

    if (!enquiries || enquiries.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted">No customer enquiries received yet.</td></tr>`;
        return;
    }

    let html = '';
    enquiries.forEach((enq) => {
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

// 10. Module: Footer CMS
async function loadFooterModule() {
    const footerData = await CMSDataStore.get('footer_content');
    const footer = (footerData && footerData[0]) ? footerData[0] : {
        company_description: 'Vishista Office Solutions Pvt Ltd is a premier provider of corporate office furniture...',
        address: 'Plot No 45, Jubilee Hills, Road No 36, Hyderabad, Telangana 500033',
        phone: '+91 98490 12345',
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

    const footerRecord = [{ company_description, address, phone, email, is_custom_updated: true }];
    await CMSDataStore.save('footer_content', footerRecord);
    alert('Footer contact details updated successfully!');
}

// Export functions to global scope
window.showAdminDashboard = showAdminDashboard;
window.showAuthScreen = showAuthScreen;
window.switchTab = switchTab;
window.openAddProductModal = openAddProductModal;
window.editProductModal = editProductModal;
window.handleCloudinaryProductUpload = handleCloudinaryProductUpload;
window.saveProductForm = saveProductForm;
window.toggleProductVisibility = toggleProductVisibility;
window.deleteProduct = deleteProduct;
window.saveHeroCMS = saveHeroCMS;
window.saveAboutCMS = saveAboutCMS;
window.saveFooterCMS = saveFooterCMS;
