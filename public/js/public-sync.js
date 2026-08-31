// Public Website Supabase & CMS Sync Engine

window.addEventListener('DOMContentLoaded', function () {
    initPublicSync();
    initEnquiryFormHandler();

    // Listen for storage changes across tabs (Instant sync when Admin Panel updates)
    window.addEventListener('storage', function () {
        initPublicSync();
    });

    // Auto-refresh public view periodically to fetch fresh database updates
    setInterval(initPublicSync, 5000);
});

async function initPublicSync() {
    if (typeof CMSDataStore === 'undefined') return;

    try {
        await Promise.all([
            syncHeroSection(),
            syncAboutSection(),
            syncFooterSection(),
            syncCategoriesSection(),
            syncProjectsSection(),
            syncProductPages()
        ]);
    } catch (e) {
        console.warn('CMS Public Sync notice:', e);
    }
}

// 1. Sync Hero Section (Heading, Subtitle, Background Image)
async function syncHeroSection() {
    const heroData = await CMSDataStore.get('hero_sections');
    if (!heroData || heroData.length === 0) return;
    const hero = heroData[0];
    if (!hero) return;

    // Update Hero Title
    const titleEl = document.querySelector('.hero-title') || document.getElementById('heroTitleDisplay');
    if (titleEl && hero.heading) {
        titleEl.innerHTML = hero.heading;
    }

    // Update Hero Subtitle / Description
    const subtitleEl = document.querySelector('.hero-subtitle') || document.getElementById('heroDescDisplay');
    if (subtitleEl && hero.description) {
        subtitleEl.textContent = hero.description;
    }

    // Update Hero Background Image
    if (hero.background_image) {
        const slides = document.querySelectorAll('.hero-slide');
        slides.forEach(slide => {
            slide.style.backgroundImage = `url('${hero.background_image}')`;
        });
    }
}

// 2. Sync About Us Section
async function syncAboutSection() {
    const aboutData = await CMSDataStore.get('about_sections');
    if (!aboutData || aboutData.length === 0) return;
    const about = aboutData[0];
    if (!about) return;

    const titleEl = document.querySelector('.about-section-title') || document.getElementById('aboutTitleDisplay');
    if (titleEl && about.title) {
        titleEl.textContent = about.title;
    }

    const descEl = document.querySelector('.about-section-desc') || document.getElementById('aboutDescDisplay');
    if (descEl && about.main_description) {
        descEl.textContent = about.main_description;
    }
}

// 3. Sync Footer Contact & Address Details
async function syncFooterSection() {
    const footerData = await CMSDataStore.get('footer_content');
    if (!footerData || footerData.length === 0) return;
    const footer = footerData[0];
    if (!footer) return;

    // Update Footer Description
    const descEls = document.querySelectorAll('.footer-company-desc, #footerCompanyDesc');
    descEls.forEach(el => {
        if (footer.company_description) el.textContent = footer.company_description;
    });

    // Update Footer Address
    const addressEls = document.querySelectorAll('.footer-address-text, #footerAddressText');
    addressEls.forEach(el => {
        if (footer.address) el.textContent = footer.address;
    });

    // Update Footer Phone Numbers
    const phoneEls = document.querySelectorAll('.footer-phone-link, #footerPhoneLink');
    phoneEls.forEach(el => {
        if (footer.phone) {
            el.textContent = footer.phone;
            el.href = `tel:${footer.phone.replace(/[^0-9+]/g, '')}`;
        }
    });

    // Update Footer Email Addresses
    const emailEls = document.querySelectorAll('.footer-email-link, #footerEmailLink');
    emailEls.forEach(el => {
        if (footer.email) {
            el.textContent = footer.email;
            el.href = `mailto:${footer.email}`;
        }
    });
}

// 4. Sync Categories Section
async function syncCategoriesSection() {
    const categories = await CMSDataStore.get('categories');
    if (!categories || categories.length === 0) return;

    const visibleCategories = categories.filter(c => c.is_visible !== false);
    const grid = document.getElementById('categoriesGridContainer');
    if (grid && visibleCategories.length > 0) {
        let html = '';
        visibleCategories.forEach(cat => {
            html += `
            <div class="col-lg-3 col-md-6">
                <div class="card border-0 shadow-sm rounded-4 overflow-hidden h-100 bg-white product-card-hover">
                    <img src="${cat.image_url || 'images/logo/logo-symbol.png'}" alt="${cat.name}" class="card-img-top" style="height: 220px; object-fit: cover;">
                    <div class="card-body p-4 d-flex flex-column text-center">
                        <h4 class="fw-bold text-dark mb-2">${cat.name}</h4>
                        <p class="text-muted fs-7 mb-3 flex-grow-1">${cat.description || ''}</p>
                        <a href="product-catalogue-view.html?cat=${encodeURIComponent(cat.name)}" class="btn btn-outline-danger fw-bold text-uppercase fs-7 mt-auto">Explore ${cat.name} &rarr;</a>
                    </div>
                </div>
            </div>`;
        });
        grid.innerHTML = html;
    }
}

// 5. Sync Projects Showcase
async function syncProjectsSection() {
    const projects = await CMSDataStore.get('projects');
    if (!projects || projects.length === 0) return;

    const visibleProjects = projects.filter(p => p.is_visible !== false);
    const container = document.getElementById('projectsGridContainer') || document.querySelector('.projects-portfolio-container');
    if (container && visibleProjects.length > 0) {
        let html = '';
        visibleProjects.forEach(proj => {
            html += `
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm rounded-4 overflow-hidden h-100 bg-white product-card-hover">
                    <img src="${proj.main_image || 'images/sections/hero-workspace.jpg'}" alt="${proj.title}" class="card-img-top" style="height: 240px; object-fit: cover;">
                    <div class="card-body p-4 d-flex flex-column">
                        <span class="badge bg-danger text-white align-self-start mb-2">${proj.location || 'Corporate Installation'}</span>
                        <h4 class="fw-bold text-dark mb-2">${proj.title}</h4>
                        <p class="text-secondary fs-7 mb-0">${proj.description || ''}</p>
                    </div>
                </div>
            </div>`;
        });
        container.innerHTML = html;
    }
}

// 6. Sync Product Pages (ArchLabs Catalogue, Categories, Sofas)
async function syncProductPages() {
    const products = await CMSDataStore.get('products');
    if (!products || products.length === 0) return;

    // Filter published products only
    const visibleProducts = products.filter(p => p.is_visible !== false);

    // ArchLabs Catalogue - Mesh Series
    const meshSection = document.querySelector('#mesh-series .row.g-4');
    if (meshSection) {
        const meshProducts = visibleProducts.filter(p => p.subcategory === 'Mesh Series' || p.category_slug === 'archlabs-seating');
        if (meshProducts.length > 0) {
            renderProductGrid(meshSection, meshProducts);
        }
    }

    // ArchLabs Catalogue - Leather Series
    const leatherSection = document.querySelector('#leather-series .row.g-4');
    if (leatherSection) {
        const leatherProducts = visibleProducts.filter(p => p.subcategory === 'Leather Series');
        if (leatherProducts.length > 0) {
            renderProductGrid(leatherSection, leatherProducts);
        }
    }
}

function renderProductGrid(container, items) {
    if (!container) return;
    let html = '';
    items.forEach(prod => {
        const safeName = (prod.name || '').replace(/'/g, "\\'");
        const safeImg = (prod.main_image || 'images/logo/logo-symbol.png').replace(/'/g, "\\'");
        const safeDesc = (prod.description || '').replace(/'/g, "\\'").replace(/\n/g, ' ');
        const safePrice = (prod.price || 'Enquire for Price').replace(/'/g, "\\'");
        const safeSubcat = (prod.subcategory || 'Product').replace(/'/g, "\\'");

        html += `
        <div class="col-lg-4 col-md-6">
            <div class="card border h-100 shadow-sm rounded-4 overflow-hidden product-card-hover bg-white position-relative">
                <div class="cursor-pointer text-center p-3 border-bottom bg-light position-relative" onclick="openProductDetailModal('${safeName}', '${safeImg}', '${safeDesc}', '${safePrice}', '${safeSubcat}')">
                    <img src="${prod.main_image}" alt="${prod.name}" class="card-img-top" style="background: #ffffff; max-height: 270px; object-fit: contain; padding: 10px;">
                    <span class="position-absolute top-0 end-0 m-3 badge bg-dark text-white opacity-75 fs-7">🔍 Quick View</span>
                </div>
                <div class="card-body p-4 d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h4 class="fw-black text-dark mb-0 cursor-pointer" style="font-size: 1.35rem !important; font-weight: 800 !important;" onclick="openProductDetailModal('${safeName}', '${safeImg}', '${safeDesc}', '${safePrice}', '${safeSubcat}')">${prod.name}</h4>
                        <span class="badge bg-light text-danger border fs-7">${prod.subcategory || 'Product'}</span>
                    </div>
                    <p class="text-secondary fw-semibold fs-6 mb-3 flex-grow-1" style="line-height: 1.6; color: #444444 !important;">${prod.description || ''}</p>
                    <div class="d-grid gap-2 mt-auto">
                        <button type="button" class="btn btn-danger text-uppercase fw-black fs-7 py-2.5 shadow-sm" style="border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;" onclick="openEnquiryModal('${safeName}')">ENQUIRE NOW &rarr;</button>
                    </div>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

// Global Product Detail Modal Opener
function openProductDetailModal(name, image, desc, price, subcategory) {
    const modalEl = document.getElementById('productDetailModal');
    if (!modalEl) {
        openEnquiryModal(name);
        return;
    }

    document.getElementById('productModalName').textContent = name || 'Product';
    document.getElementById('productModalTitle').textContent = name || 'Product Preview';
    document.getElementById('productModalImg').src = image || 'images/logo/logo-symbol.png';
    document.getElementById('productModalDesc').textContent = desc || 'Full ergonomic workspace furniture product specifications available upon request.';
    document.getElementById('productModalPrice').textContent = price || 'Enquire for Price';
    document.getElementById('productModalBadge').textContent = subcategory || 'Vishista Solution';

    const enquireBtn = document.getElementById('productModalEnquireBtn');
    if (enquireBtn) {
        enquireBtn.onclick = function () {
            if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
                const detailModal = bootstrap.Modal.getInstance(modalEl);
                if (detailModal) detailModal.hide();
            }
            setTimeout(() => openEnquiryModal(name), 300);
        };
    }

    if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
    }
}

// Global Enquiry Modal Helper
function openEnquiryModal(productName) {
    const input = document.getElementById('modalProductInput');
    if (input) {
        input.value = productName || 'General Furniture Enquiry';
    }
    const modalEl = document.getElementById('enquireModal');
    if (modalEl && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
    }
}

// Connect Customer Enquiry Form Submission directly to WhatsApp (+91 98490 58444) and Supabase
function initEnquiryFormHandler() {
    const enquiryModalForm = document.querySelector('#enquireModal form');
    if (enquiryModalForm) {
        enquiryModalForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const submitBtn = enquiryModalForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Connecting to WhatsApp...';
            }

            const productName = document.getElementById('modalProductInput') ? document.getElementById('modalProductInput').value : 'General Enquiry';
            const inputs = enquiryModalForm.querySelectorAll('input[type="text"]');
            const nameInput = inputs[0] ? inputs[0].value.trim() : 'Customer';
            const companyInput = inputs[1] ? inputs[1].value.trim() : '';
            const phoneInput = enquiryModalForm.querySelector('input[type="tel"]') ? enquiryModalForm.querySelector('input[type="tel"]').value.trim() : '';
            const emailInput = enquiryModalForm.querySelector('input[type="email"]') ? enquiryModalForm.querySelector('input[type="email"]').value.trim() : '';
            const messageInput = enquiryModalForm.querySelector('textarea') ? enquiryModalForm.querySelector('textarea').value.trim() : '';

            // Construct Pre-filled WhatsApp Message
            let waMessage = `Hi Vishista Office Solutions,\n\nI am interested in your workspace products.\n\n📌 *Product/Service:* ${productName}\n👤 *Name:* ${nameInput}`;
            if (companyInput) waMessage += `\n🏢 *Company:* ${companyInput}`;
            if (phoneInput) waMessage += `\n📞 *Phone:* ${phoneInput}`;
            if (emailInput) waMessage += `\n✉️ *Email:* ${emailInput}`;
            if (messageInput) waMessage += `\n📝 *Notes:* ${messageInput}`;

            const targetPhone = '919849058444';
            const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(waMessage)}`;

            const enquiryPayload = {
                product_name: productName,
                full_name: nameInput,
                company_name: companyInput,
                phone_number: phoneInput,
                email: emailInput,
                message: messageInput,
                status: 'new',
                created_at: new Date().toISOString()
            };

            try {
                if (typeof CMSDataStore !== 'undefined') {
                    await CMSDataStore.insertRecord('enquiries', enquiryPayload);
                }
            } catch (err) {
                console.warn('Enquiry background save notice:', err);
            } finally {
                window.open(whatsappUrl, '_blank');

                enquiryModalForm.reset();
                const modalEl = document.getElementById('enquireModal');
                if (modalEl && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
                    const modal = bootstrap.Modal.getInstance(modalEl);
                    if (modal) modal.hide();
                }

                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'SUBMIT ENQUIRY';
                }
            }
        });
    }
}

window.openProductDetailModal = openProductDetailModal;
window.openEnquiryModal = openEnquiryModal;
window.initPublicSync = initPublicSync;
