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
        let cleanDesc = hero.description.replace(/\s*across Telangana and Andhra Pradesh\.?/gi, '.').replace(/\.\./g, '.');
        subtitleEl.textContent = cleanDesc;
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

// // 4. Dynamic Categories Sync (Megamenu, Mobile Drawer, Grids, and Jump Bar)
async function syncCategoriesSection() {
    const rawCategories = (await CMSDataStore.get('categories')) || [];
    const rawSubcategories = (await CMSDataStore.get('subcategories')) || [];
    const rawProducts = (await CMSDataStore.get('products')) || [];
    
    const categories = rawCategories.filter(c => c.is_visible !== false && c.is_published !== false);
    const products = rawProducts.filter(p => p.is_visible !== false && p.is_published !== false);
    const visibleCategories = categories;

    if (visibleCategories.length === 0) return;

    // A. Sync Desktop Megamenu Grid
    const megaGrid = document.getElementById('megaMenuCategoryGrid') || document.querySelector('.mega-menu-grid');
    if (megaGrid) {
        let megaHtml = '';
        visibleCategories.forEach(cat => {
            const catName = cat.name.trim();
            const catSlug = cat.slug || catName.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            // Find subcategories belonging to this category from subcategories table or products
            let subItems = rawSubcategories
                .filter(s => s.category_slug === catSlug || s.category_slug === catName)
                .map(s => s.name.trim());

            const catProducts = products.filter(p => p.is_visible !== false && (
                (p.category_slug && p.category_slug.toLowerCase() === catSlug.toLowerCase()) ||
                (p.category && p.category.toLowerCase() === catName.toLowerCase())
            ));

            catProducts.forEach(p => {
                if (p.subcategory && !subItems.includes(p.subcategory.trim())) {
                    subItems.push(p.subcategory.trim());
                }
            });

            let subListHtml = '';
            if (subItems.length > 0) {
                subListHtml = subItems.map(subName => 
                    `<li><a href="product-catalogue-view.html?cat=${encodeURIComponent(catName)}&subcat=${encodeURIComponent(subName)}" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; ${subName}</a></li>`
                ).join('');
            } else {
                subListHtml = `<li><a href="product-catalogue-view.html?cat=${encodeURIComponent(catName)}" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Explore All ${catName}</a></li>`;
            }

            megaHtml += `
                <div>
                    <a href="product-catalogue-view.html?cat=${encodeURIComponent(catName)}" class="mega-category-title d-block" style="font-size: 15px !important; font-weight: 700 !important;">${catName}</a>
                    <ul class="mega-subcategory-list">
                        ${subListHtml}
                    </ul>
                </div>
            `;
        });
        megaGrid.innerHTML = megaHtml;
    }

    // B. Sync Mobile Drawer Menu
    const mobileGroup = document.getElementById('mobileMenuCategoryGroup') || document.querySelector('#mobileProductsCollapse .mobile-accordion-group');
    if (mobileGroup) {
        let mobHtml = '';
        visibleCategories.forEach(cat => {
            const catName = cat.name.trim();
            const catSlug = cat.slug || catName.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            let subItems = rawSubcategories
                .filter(s => s.category_slug === catSlug || s.category_slug === catName)
                .map(s => s.name.trim());

            const catProducts = products.filter(p => p.is_visible !== false && (
                (p.category_slug && p.category_slug.toLowerCase() === catSlug.toLowerCase()) ||
                (p.category && p.category.toLowerCase() === catName.toLowerCase())
            ));

            catProducts.forEach(p => {
                if (p.subcategory && !subItems.includes(p.subcategory.trim())) {
                    subItems.push(p.subcategory.trim());
                }
            });

            let subListHtml = '';
            if (subItems.length > 0) {
                subListHtml = subItems.map(subName =>
                    `<li><a class="mobile-sub-link text-dark" style="font-family: 'Inter', sans-serif; font-size: 13.5px !important; font-weight: 600 !important; color: #333333 !important;" href="product-catalogue-view.html?cat=${encodeURIComponent(catName)}&subcat=${encodeURIComponent(subName)}">&bull; ${subName}</a></li>`
                ).join('');
            } else {
                subListHtml = `<li><a class="mobile-sub-link text-dark" style="font-family: 'Inter', sans-serif; font-size: 13.5px !important; font-weight: 600 !important; color: #333333 !important;" href="product-catalogue-view.html?cat=${encodeURIComponent(catName)}">&bull; Explore All ${catName}</a></li>`;
            }

            mobHtml += `
                <div class="p-3 rounded-3" style="background-color: #f8f9fa; border: 1px solid #e9ecef;">
                    <a href="product-catalogue-view.html?cat=${encodeURIComponent(catName)}" class="fw-bold text-dark fs-6 text-decoration-none d-block mb-2" style="font-family: 'Inter', sans-serif; font-size: 15px !important; font-weight: 700 !important; color: #111111 !important;">
                        ${catName} &rarr;
                    </a>
                    <ul class="nav flex-column gap-1 mobile-nested-group list-unstyled m-0 ps-2" style="border-left: 2px solid #d32f2f;">
                        ${subListHtml}
                    </ul>
                </div>
            `;
        });
        mobileGroup.innerHTML = mobHtml;
    }

    // C. Sync Category Cards Grid
    const grid = document.getElementById('categoriesGridContainer');
    if (grid) {
        let html = '';
        const defaultCategoryImages = {
            'workstations': 'images/categories/cat_workstations.jpg',
            'modular-workstations': 'images/categories/cat_workstations.jpg',
            'tables': 'images/categories/cat_tables.png',
            'tables-desks': 'images/categories/cat_tables.png',
            'storage': 'images/categories/cat_storage.png',
            'storage-systems': 'images/categories/cat_storage.png',
            'seating': 'images/categories/cat_seating.jpg',
            'ergonomic-seating': 'images/categories/cat_seating.jpg',
            'archlabs-seating': 'images/categories/cat_seating.jpg',
            'soft-seating': 'images/categories/cat_soft_seating.jpg',
            'soft-seating-lounges': 'images/categories/cat_soft_seating.jpg',
            'acoustic-pods': 'images/categories/cat_pods.jpg',
            'pods': 'images/categories/cat_pods.jpg',
            'carpets': 'images/categories/cat_carpets.jpg',
            'interface-carpets': 'images/categories/cat_carpets.jpg',
            'outdoor': 'images/categories/cat_outdoor.jpg',
            'outdoor-furniture': 'images/categories/cat_outdoor.jpg',
            'educational': 'images/categories/cat_education.png',
            'educational-solutions': 'images/categories/cat_education.png'
        };

        visibleCategories.forEach(cat => {
            const catSlug = cat.slug || cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            let catTargetUrl = `product-catalogue-view.html?cat=${encodeURIComponent(cat.name)}`;
            if (catSlug === 'soft-seating') {
                catTargetUrl = 'product-sofas.html';
            }

            let catImg = cat.image_url;
            if (!catImg || catImg.includes('map') || catImg.includes('logo-symbol') || catImg.includes('collection-1') || defaultCategoryImages[catSlug]) {
                catImg = defaultCategoryImages[catSlug] || defaultCategoryImages[cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')] || catImg || 'images/categories/cat_workstations.jpg';
            }

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

            let subTagsHtml = '';
            if (catProducts.length > 0) {
                const sampleSubcats = Array.from(new Set(catProducts.map(p => p.subcategory || p.name))).slice(0, 3);
                subTagsHtml = '<div class="mb-3 d-flex flex-wrap gap-1">' + sampleSubcats.map(sub => 
                    `<span class="badge bg-light text-dark border fw-bold px-2 py-1" style="font-size: 11.5px !important; font-family: 'Inter', sans-serif;">&bull; ${sub}</span>`
                ).join('') + '</div>';
            }

            const badgeText = cat.badge || (catProducts.length > 0 ? `${catProducts.length} Products` : 'Workspace Solution');

            html += `
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <a href="${catTargetUrl}" class="position-relative overflow-hidden d-block" style="height: 250px; width: 100%; background: #f8f9fa;">
                        <img src="${catImg}" alt="${cat.name}" class="w-100 h-100" style="object-fit: cover; object-position: center; width: 100% !important; height: 100% !important; transition: transform 0.5s ease;" onerror="this.src='images/categories/cat_workstations.jpg'">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold shadow-sm">${badgeText}</span>
                    </a>
                    <div class="card-body p-4 d-flex flex-column">
                        <h3 class="fw-black text-dark mb-2" style="font-size: 1.65rem !important; font-weight: 900 !important; color: #111111 !important; font-family: 'Inter', sans-serif;">
                            <a href="${catTargetUrl}" class="text-decoration-none text-dark">${cat.name}</a>
                        </h3>
                        <p class="text-secondary mb-3 flex-grow-1" style="font-size: 1.15rem !important; font-weight: 600 !important; line-height: 1.6 !important; color: #333333 !important;">${descText}</p>
                        ${subTagsHtml}
                        <div class="d-flex align-items-center justify-content-between pt-2 border-top mt-auto">
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
    if (jumpContainer) {
        let jumpHtml = `<span class="fw-black text-dark me-2" style="font-size: 1.35rem !important; font-weight: 900 !important; letter-spacing: 0.5px; color: #000000 !important;">Jump to Category:</span>`;
        visibleCategories.forEach(cat => {
            const catName = cat.name.trim();
            const catSlug = cat.slug || catName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const targetHref = `product-catalogue-view.html?cat=${encodeURIComponent(catName)}`;
            jumpHtml += `<a href="${targetHref}" class="btn rounded-pill px-4 py-2 text-uppercase category-jump-btn">${catName}</a>`;
        });
        jumpContainer.innerHTML = jumpHtml;
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

    const visibleProducts = products.filter(p => p.is_visible !== false && p.is_published !== false);

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

async function openProductDetailModal(name, image, desc, price, subcategory, additionalImages) {
    const modalEl = document.getElementById('productDetailModal');
    if (!modalEl) {
        openEnquiryModal(name);
        return;
    }

    let extraImgs = Array.isArray(additionalImages) ? additionalImages : [];
    if (extraImgs.length === 0 && typeof CMSDataStore !== 'undefined') {
        try {
            const allProducts = await CMSDataStore.get('products');
            const found = (allProducts || []).find(p => p.name === name || p.slug === name);
            if (found && Array.isArray(found.additional_images)) {
                extraImgs = found.additional_images;
            }
        } catch(e) {}
    }

    const nameEl = document.getElementById('productModalName');
    if (nameEl) nameEl.textContent = name || 'Product';
    const titleEl = document.getElementById('productModalTitle');
    if (titleEl) titleEl.textContent = name || 'Product Preview';
    const mainImgEl = document.getElementById('productModalImg');
    if (mainImgEl) mainImgEl.src = image || 'images/logo/logo-symbol.png';
    const descEl = document.getElementById('productModalDesc');
    if (descEl) descEl.textContent = desc || 'Full ergonomic workspace furniture product specifications available upon request.';
    const priceEl = document.getElementById('productModalPrice');
    if (priceEl) priceEl.textContent = price || 'Enquire for Price';
    const badgeEl = document.getElementById('productModalBadge');
    if (badgeEl) badgeEl.textContent = subcategory || 'Vishista Solution';

    // Render interactive Thumbnail Gallery
    let galleryContainer = document.getElementById('productModalGalleryContainer');
    if (!galleryContainer && mainImgEl && mainImgEl.parentNode) {
        galleryContainer = document.createElement('div');
        galleryContainer.id = 'productModalGalleryContainer';
        galleryContainer.className = 'd-flex flex-wrap gap-2 justify-content-center mt-3';
        mainImgEl.parentNode.appendChild(galleryContainer);
    }

    if (galleryContainer) {
        const allImagesList = Array.from(new Set([image, ...extraImgs])).filter(Boolean);
        if (allImagesList.length > 1) {
            galleryContainer.innerHTML = allImagesList.map((imgUrl, i) => `
                <img src="${imgUrl}" 
                     class="img-thumbnail ${i === 0 ? 'border-danger border-2' : ''}" 
                     style="width: 60px; height: 60px; object-fit: cover; cursor: pointer; transition: all 0.2s ease;" 
                     onclick="document.getElementById('productModalImg').src='${imgUrl.replace(/'/g, "\\'")}'; document.querySelectorAll('#productModalGalleryContainer img').forEach(el => el.classList.remove('border-danger', 'border-2')); this.classList.add('border-danger', 'border-2');" 
                     alt="Thumbnail ${i + 1}">
            `).join('');
            galleryContainer.classList.remove('d-none');
        } else {
            galleryContainer.innerHTML = '';
            galleryContainer.classList.add('d-none');
        }
    }

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
