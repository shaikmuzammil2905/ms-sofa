// Public Website Supabase & CMS Sync Engine

window.addEventListener('load', function () {
    initPublicSync();
    initEnquiryFormHandler();
});

async function initPublicSync() {
    try {
        // Sync Product Lists on Catalogue Pages
        syncProductPages();
    } catch (e) {
        console.warn('CMS Public Sync notice:', e);
    }
}

// Sync Product Pages (ArchLabs Catalogue, Categories, Sofas)
async function syncProductPages() {
    if (typeof CMSDataStore === 'undefined') return;
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

// Global Product Detail Modal Opener (Video 3 Requirement)
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

// Connect Customer Enquiry Form Submission to Supabase
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
            const inputs = enquiryModalForm.querySelectorAll('input[type="text"]');
            const nameInput = inputs[0] || null;
            const companyInput = inputs[1] || null;
            const phoneInput = enquiryModalForm.querySelector('input[type="tel"]');
            const emailInput = enquiryModalForm.querySelector('input[type="email"]');
            const messageInput = enquiryModalForm.querySelector('textarea');

            const enquiryPayload = {
                product_name: productName,
                full_name: nameInput ? nameInput.value : 'Customer',
                company_name: companyInput ? companyInput.value : '',
                phone_number: phoneInput ? phoneInput.value : '',
                email: emailInput ? emailInput.value : '',
                message: messageInput ? messageInput.value : '',
                status: 'new',
                created_at: new Date().toISOString()
            };

            try {
                if (typeof CMSDataStore !== 'undefined') {
                    await CMSDataStore.insertRecord('enquiries', enquiryPayload);
                }

                alert('Thank you! Your enquiry has been submitted successfully.');
                enquiryModalForm.reset();
                const modalEl = document.getElementById('enquireModal');
                if (modalEl && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
                    const modal = bootstrap.Modal.getInstance(modalEl);
                    if (modal) modal.hide();
                }
            } catch (err) {
                alert(`Submission notice: ${err.message || 'Enquiry recorded locally.'}`);
            } finally {
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
