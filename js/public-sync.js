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

            try {
                if (typeof CMSDataStore !== 'undefined') {
                    const existingEnquiries = await CMSDataStore.get('enquiries');
                    existingEnquiries.unshift(enquiryPayload);
                    await CMSDataStore.save('enquiries', existingEnquiries);
                }

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
