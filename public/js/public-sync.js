// Public Website Supabase & CMS Sync Engine

window.addEventListener('DOMContentLoaded', function () {
    initPublicSync();
    initEnquiryFormHandler();

    // Listen for storage changes across tabs (Instant sync when Admin Panel updates)
    window.addEventListener('storage', function () {
        initPublicSync();
    });

    // Auto-refresh public view periodically to fetch fresh database updates
    setInterval(initPublicSync, 4000);
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

// 1. Sync Hero Section (Heading, Subtitle, Background Images for 3 Slides)
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

    // Update Hero Background Images (Supports 3 Slides automatically)
    const slides = document.querySelectorAll('.hero-slide');
    if (slides && slides.length > 0) {
        let slideImages = [];
        if (hero.slide_1 || hero.slide_2 || hero.slide_3) {
            slideImages = [
                hero.slide_1 || 'images/sections/hero-slide-1.png',
                hero.slide_2 || 'images/sections/hero-slide-2.png',
                hero.slide_3 || 'images/sections/hero-slide-3.png'
            ];
        } else if (hero.background_image) {
            const splitImgs = hero.background_image.split(',').map(s => s.trim()).filter(Boolean);
            if (splitImgs.length > 1) {
                slideImages = splitImgs;
            } else if (splitImgs.length === 1) {
                slideImages = [
                    splitImgs[0],
                    'images/sections/hero-slide-2.png',
                    'images/sections/hero-slide-3.png'
                ];
            }
        } else {
            slideImages = [
                'images/sections/hero-slide-1.png',
                'images/sections/hero-slide-2.png',
                'images/sections/hero-slide-3.png'
            ];
        }

        slides.forEach((slide, index) => {
            const imgUrl = slideImages[index % slideImages.length];
            if (imgUrl) {
                slide.style.backgroundImage = `url('${imgUrl}')`;
                slide.style.backgroundSize = 'cover';
                slide.style.backgroundPosition = 'center center';
                slide.style.backgroundRepeat = 'no-repeat';
            }
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

    const descEls = document.querySelectorAll('.footer-company-desc, #footerCompanyDesc');
    descEls.forEach(el => {
        if (footer.company_description) el.textContent = footer.company_description;
    });

    const addressEls = document.querySelectorAll('.footer-address-text, #footerAddressText');
    addressEls.forEach(el => {
        if (footer.address) el.textContent = footer.address;
    });

    const phoneEls = document.querySelectorAll('.footer-phone-link, #footerPhoneLink');
    phoneEls.forEach(el => {
        if (footer.phone) {
            el.textContent = footer.phone;
            el.href = `tel:${footer.phone.replace(/[^0-9+]/g, '')}`;
        }
    });

    const emailEls = document.querySelectorAll('.footer-email-link, #footerEmailLink');
    emailEls.forEach(el => {
        if (footer.email) {
            el.textContent = footer.email;
            el.href = `mailto:${footer.email}`;
        }
    });
}

// 4. Dynamic Categories Sync (Megamenu, Mobile Drawer, Grids, and Jump Bar)
async function syncCategoriesSection() {
    const categories = await CMSDataStore.get('categories');
    if (!categories || categories.length === 0) return;

    const products = (await CMSDataStore.get('products')) || [];
    const visibleCategories = categories.filter(c => c.is_visible !== false);

    // A. Sync Desktop Megamenu Grid
    const megaGrid = document.getElementById('megaMenuCategoryGrid') || document.querySelector('.mega-menu-grid');
    if (megaGrid && visibleCategories.length > 0) {
        const existingTitles = Array.from(megaGrid.querySelectorAll('.mega-category-title')).map(el => el.textContent.trim().toLowerCase());
        
        visibleCategories.forEach(cat => {
            const catNameLower = cat.name.trim().toLowerCase();
            const catSlug = cat.slug || catNameLower.replace(/[^a-z0-9]+/g, '-');
            if (!existingTitles.includes(catNameLower)) {
                // Collect subcategories or products for this category
                const catProducts = products.filter(p => p.is_visible !== false && (
                    (p.category_slug && p.category_slug.toLowerCase() === catSlug) ||
                    (p.category && p.category.toLowerCase() === catNameLower)
                ));

                let subItems = [];
                catProducts.forEach(p => {
                    if (p.subcategory && !subItems.includes(p.subcategory)) {
                        subItems.push(p.subcategory);
                    }
                });

                if (subItems.length === 0) {
                    subItems.push(cat.name);
                }

                const subListHtml = subItems.map(subName => 
                    `<li><a href="product-catalogue-view.html?cat=${encodeURIComponent(cat.name)}" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; ${subName}</a></li>`
                ).join('');

                const catDiv = document.createElement('div');
                catDiv.innerHTML = `
                    <a href="product-catalogue-view.html?cat=${encodeURIComponent(cat.name)}" class="mega-category-title d-block text-danger" style="font-size: 15px !important; font-weight: 700 !important;">${cat.name}</a>
                    <ul class="mega-subcategory-list">
                        ${subListHtml}
                    </ul>
                `;
                megaGrid.appendChild(catDiv);
                existingTitles.push(catNameLower);
            }
        });
    }

    // B. Sync Mobile Drawer Menu
    const mobileGroup = document.getElementById('mobileMenuCategoryGroup') || document.querySelector('#mobileProductsCollapse .mobile-accordion-group');
    if (mobileGroup && visibleCategories.length > 0) {
        const existingMobileTitles = Array.from(mobileGroup.querySelectorAll('a.fw-bold')).map(el => el.textContent.replace('→', '').replace('→', '').trim().toLowerCase());

        visibleCategories.forEach(cat => {
            const catNameLower = cat.name.trim().toLowerCase();
            const catSlug = cat.slug || catNameLower.replace(/[^a-z0-9]+/g, '-');
            if (!existingMobileTitles.includes(catNameLower)) {
                const catProducts = products.filter(p => p.is_visible !== false && (
                    (p.category_slug && p.category_slug.toLowerCase() === catSlug) ||
                    (p.category && p.category.toLowerCase() === catNameLower)
                ));

                let subItems = [];
                catProducts.forEach(p => {
                    if (p.subcategory && !subItems.includes(p.subcategory)) {
                        subItems.push(p.subcategory);
                    }
                });
                if (subItems.length === 0) subItems.push(cat.name);

                const subListHtml = subItems.map(subName =>
                    `<li><a class="mobile-sub-link text-dark" style="font-family: 'Inter', sans-serif; font-size: 13.5px !important; font-weight: 600 !important; color: #333333 !important;" href="product-catalogue-view.html?cat=${encodeURIComponent(cat.name)}">&bull; ${subName}</a></li>`
                ).join('');

                const mobDiv = document.createElement('div');
                mobDiv.className = 'p-3 rounded-3';
                mobDiv.style.cssText = 'background-color: #f8f9fa; border: 1px solid #e9ecef;';
                mobDiv.innerHTML = `
                    <a href="product-catalogue-view.html?cat=${encodeURIComponent(cat.name)}" class="fw-bold text-dark fs-6 text-decoration-none d-block mb-2" style="font-family: 'Inter', sans-serif; font-size: 15px !important; font-weight: 700 !important; color: #111111 !important;">
                        ${cat.name} &rarr;
                    </a>
                    <ul class="nav flex-column gap-1 mobile-nested-group list-unstyled m-0 ps-2" style="border-left: 2px solid #d32f2f;">
                        ${subListHtml}
                    </ul>
                `;
                mobileGroup.appendChild(mobDiv);
                existingMobileTitles.push(catNameLower);
            }
        });
    }

    // C. Sync Category Cards Grid
    const grid = document.getElementById('categoriesGridContainer');
    if (grid && visibleCategories.length > 0) {
        let html = '';
        visibleCategories.forEach(cat => {
            const catSlug = cat.slug || cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const catTargetUrl = cat.slug === 'soft-seating' ? 'product-sofas.html' : 
                               (cat.slug === 'archlabs-seating' ? 'archlabs-catalogue.html' : 
                               `product-categories.html#${catSlug}`);

            // Find products belonging to this category
            const catProducts = products.filter(p => p.is_visible !== false && (
                (p.category_slug && p.category_slug.toLowerCase() === catSlug) ||
                (p.category && p.category.toLowerCase() === cat.name.toLowerCase())
            ));

            let descText = cat.description;
            if (!descText && catProducts.length > 0) {
                const sampleProds = catProducts.slice(0, 4).map(p => p.name).join(', ');
                descText = `Explore our ${cat.name} collection featuring ${sampleProds}.`;
            } else if (!descText) {
                descText = `Discover our range of ${cat.name} engineered for modern corporate workspaces.`;
            }

            const badgeText = cat.badge || (catProducts.length > 0 ? `${catProducts.length} Products` : 'Workspace Solution');

            html += `
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <div class="position-relative overflow-hidden" style="height: 250px; width: 100%; background: #f8f9fa;">
                        <img src="${cat.image_url || 'images/logo/logo-symbol.png'}" alt="${cat.name}" class="w-100 h-100" style="object-fit: cover; object-position: center; width: 100% !important; height: 100% !important; transition: transform 0.5s ease;" onerror="this.src='images/logo/logo-symbol.png'">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold shadow-sm">${badgeText}</span>
                    </div>
                    <div class="card-body p-4 d-flex flex-column">
                        <h3 class="fw-black text-dark mb-2" style="font-size: 1.65rem !important; font-weight: 900 !important; color: #111111 !important; font-family: 'Inter', sans-serif;">${cat.name}</h3>
                        <p class="text-secondary mb-4 flex-grow-1" style="font-size: 1.15rem !important; font-weight: 600 !important; line-height: 1.6 !important; color: #333333 !important;">${descText}</p>
                        <div class="d-flex align-items-center justify-content-between pt-2 border-top">
                            <a href="${catTargetUrl}" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3 py-2" style="font-size: 13px;">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-extrabold p-0 text-decoration-none" style="font-size: 15px;" onclick="openEnquiryModal('${(cat.name || '').replace(/'/g, "\\'")}')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>`;
        });
        grid.innerHTML = html;
    }

    // D. Sync Jump to Category Bar
    const jumpContainer = document.querySelector('.sticky-jump-bar .d-flex, .filter-anchor-bar .d-flex');
    if (jumpContainer && visibleCategories.length > 0) {
        const existingJumps = Array.from(jumpContainer.querySelectorAll('a')).map(el => el.textContent.trim().toLowerCase());
        visibleCategories.forEach(cat => {
            const catNameLower = cat.name.trim().toLowerCase();
            if (!existingJumps.includes(catNameLower)) {
                const a = document.createElement('a');
                a.href = `product-catalogue-view.html?cat=${encodeURIComponent(cat.name)}`;
                a.className = 'btn rounded-pill px-4 py-2 text-uppercase category-jump-btn';
                a.textContent = cat.name;
                jumpContainer.appendChild(a);
                existingJumps.push(catNameLower);
            }
        });
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

// 6. Sync Product Pages
async function syncProductPages() {
    const products = await CMSDataStore.get('products');
    if (!products || products.length === 0) return;

    const visibleProducts = products.filter(p => p.is_visible !== false);

    // Mesh Series
    const meshSection = document.querySelector('#mesh-series .row.g-4');
    if (meshSection) {
        const meshProducts = visibleProducts.filter(p => p.subcategory === 'Mesh Series' || p.category_slug === 'archlabs-seating');
        if (meshProducts.length > 0) {
            renderProductGrid(meshSection, meshProducts);
        }
    }

    // Leather Series
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
