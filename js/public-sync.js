// Public Website Supabase Synchronization Engine
document.addEventListener('DOMContentLoaded', function () {
    initPublicSync();
    initEnquiryFormHandler();
});

async function initPublicSync() {
    try {
        // Load initial data from seed fallback or Supabase
        const seedRes = await fetch('data/seed_data.json').catch(() => null);
        let seedData = null;
        if (seedRes && seedRes.ok) {
            seedData = await seedRes.json();
        }

        // Initialize local caches if empty
        if (seedData) {
            if (!localStorage.getItem('vishista_cms_products') && seedData.products) {
                localStorage.setItem('vishista_cms_products', JSON.stringify(seedData.products));
            }
            if (!localStorage.getItem('vishista_cms_categories') && seedData.categories) {
                localStorage.setItem('vishista_cms_categories', JSON.stringify(seedData.categories));
            }
            if (!localStorage.getItem('vishista_cms_hero_sections') && seedData.hero_sections) {
                localStorage.setItem('vishista_cms_hero_sections', JSON.stringify(seedData.hero_sections));
            }
            if (!localStorage.getItem('vishista_cms_about_sections') && seedData.about_sections) {
                localStorage.setItem('vishista_cms_about_sections', JSON.stringify(seedData.about_sections));
            }
            if (!localStorage.getItem('vishista_cms_footer_content') && seedData.footer_content) {
                localStorage.setItem('vishista_cms_footer_content', JSON.stringify(seedData.footer_content));
            }
        }

        // Sync Content
        syncHeroSection();
        syncAboutSection();
        syncFooterContent();
        syncProductPages();
    } catch (e) {
        console.warn('Public sync error:', e);
    }
}

// 1. Sync Hero Section
async function syncHeroSection() {
    const heroList = await CMSDataStore.get('hero_sections');
    if (heroList && heroList.length > 0) {
        const hero = heroList[0];
        const headingEl = document.querySelector('.hero-heading, h1.display-4, h1.display-3');
        if (headingEl && hero.heading) headingEl.textContent = hero.heading;

        const subheadEl = document.querySelector('.hero-subheading, p.fs-5');
        if (subheadEl && hero.description) subheadEl.textContent = hero.description;
    }
}

// 2. Sync About Section
async function syncAboutSection() {
    const aboutList = await CMSDataStore.get('about_sections');
    if (aboutList && aboutList.length > 0) {
        const about = aboutList[0];
        const storyTitleEl = document.querySelector('.about-story-title');
        if (storyTitleEl && about.title) storyTitleEl.textContent = about.title;

        const storyDescEl = document.querySelector('.about-story-desc');
        if (storyDescEl && about.main_description) storyDescEl.textContent = about.main_description;
    }
}

// 3. Sync Footer Content
async function syncFooterContent() {
    const footerList = await CMSDataStore.get('footer_content');
    if (footerList && footerList.length > 0) {
        const footer = footerList[0];
        const descEl = document.querySelector('.footer-about p');
        if (descEl && footer.company_description) descEl.textContent = footer.company_description;

        const addressEl = document.querySelector('.footer-contact-block span');
        if (addressEl && footer.address) {
            addressEl.innerHTML = footer.address.replace(/\n/g, '<br>');
        }
    }
}

// 4. Sync Product Pages
async function syncProductPages() {
    const products = await CMSDataStore.get('products');
    if (!products || products.length === 0) return;

    // Filter published products only
    const visibleProducts = products.filter(p => p.is_visible !== false);

    // If on ArchLabs Catalogue page, sync Mesh Series & Leather Series
    const meshSection = document.querySelector('#mesh-series .row.g-4');
    if (meshSection) {
        const meshProducts = visibleProducts.filter(p => p.subcategory === 'Mesh Series' || p.category_slug === 'archlabs-seating');
        if (meshProducts.length > 0) {
            renderProductGrid(meshSection, meshProducts);
        }
    }

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
        html += `
        <div class="col-lg-4 col-md-6">
            <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                <img src="${prod.main_image}" alt="${prod.name}" class="card-img-top" style="background: #ffffff; max-height: 280px; object-fit: contain; padding: 15px;">
                <div class="card-body p-4 d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h4 class="fw-bold text-dark mb-0">${prod.name}</h4>
                        <span class="badge bg-light text-danger border fs-7">${prod.subcategory || 'Product'}</span>
                    </div>
                    <p class="text-secondary fs-7 mb-3 flex-grow-1">${prod.description || ''}</p>
                    <div class="d-grid gap-2">
                        <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('${prod.name.replace(/'/g, "\\'")}')">Enquire Now</button>
                    </div>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

// 5. Connect Enquiry Forms to Supabase
function initEnquiryFormHandler() {
    const enquiryModalForm = document.querySelector('#enquireModal form');
    if (enquiryModalForm) {
        enquiryModalForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const submitBtn = enquiryModalForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Sending...';
            }

            const productName = document.getElementById('modalProductInput') ? document.getElementById('modalProductInput').value : 'General Enquiry';
            const nameInput = enquiryModalForm.querySelector('input[type="text"]');
            const phoneInput = enquiryModalForm.querySelector('input[type="tel"]');
            const emailInput = enquiryModalForm.querySelector('input[type="email"]');
            const messageInput = enquiryModalForm.querySelector('textarea');

            const enquiryPayload = {
                product_name: productName,
                full_name: nameInput ? nameInput.value : 'Customer',
                phone_number: phoneInput ? phoneInput.value : '',
                email: emailInput ? emailInput.value : '',
                message: messageInput ? messageInput.value : '',
                status: 'new',
                created_at: new Date().toISOString()
            };

            // Save to Supabase / CMSDataStore
            try {
                const existingEnquiries = await CMSDataStore.get('enquiries');
                existingEnquiries.unshift(enquiryPayload);
                await CMSDataStore.save('enquiries', existingEnquiries);

                alert('Thank you! Your enquiry has been submitted successfully.');
                enquiryModalForm.reset();
                const modalEl = document.getElementById('enquireModal');
                if (modalEl && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
                    const modal = bootstrap.Modal.getInstance(modalEl);
                    if (modal) modal.hide();
                }
            } catch (err) {
                alert('Submission failed. Please try again.');
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'SUBMIT ENQUIRY';
                }
            }
        });
    }
}
