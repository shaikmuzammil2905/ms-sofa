// Supabase & Cloudinary Configuration for Vishista Office Solutions CMS

const SUPABASE_URL = 'https://oseccrcffoyttjgpazrt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zZWNjcmNmZm95dHRqZ3BhenJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3NTM4OTEsImV4cCI6MjEwMzMyOTg5MX0.ESJ0iK2zcCPZZCZtfeYW7uObbEP7JxXUYJiSi9a4pzA';

const CLOUDINARY_CLOUD_NAME = 'iw4ntmv5';
const CLOUDINARY_UPLOAD_PRESET = 'ml_default';

// Embedded Seed Data Dataset for Fail-Safe CMS Resolution
const VISHISTA_SEED_DATA = {
  "categories": [
    {
      "name": "ArchLabs Seating Catalogue",
      "slug": "archlabs-seating",
      "description": "Line-wise Mesh, Executive Leather, Training, Metro Linea, and Cafeteria Collections",
      "image_url": "images/archlabs/pages/page_4.png",
      "display_order": 1,
      "is_visible": true
    },
    {
      "name": "Modular Workstations",
      "slug": "workstations",
      "description": "Height adjustable sit-stand desks, linear open-plan desking, and acoustic panel partitions",
      "image_url": "images/categories/cat_workstations.jpg",
      "display_order": 2,
      "is_visible": true
    },
    {
      "name": "Tables & Desks",
      "slug": "tables",
      "description": "Executive director desks, boardroom meeting tables, cafe counters, and training desks",
      "image_url": "images/categories/cat_tables.jpg",
      "display_order": 3,
      "is_visible": true
    },
    {
      "name": "Storage Systems",
      "slug": "storage",
      "description": "Prelam credenzas, steel filing cabinets, high-density mobile compactors, and employee lockers",
      "image_url": "images/categories/cat_storage.jpg",
      "display_order": 4,
      "is_visible": true
    },
    {
      "name": "Soft Seating & Lounges",
      "slug": "soft-seating",
      "description": "Executive leather couches, modular lounge sofas, collaborative booths, and pouffes",
      "image_url": "images/categories/cat_soft_seating.jpg",
      "display_order": 5,
      "is_visible": true
    },
    {
      "name": "Acoustic Work Pods",
      "slug": "acoustic-pods",
      "description": "Solo phone booths and 4-6 person soundproof acoustic meeting pods",
      "image_url": "images/categories/cat_pods.jpg",
      "display_order": 6,
      "is_visible": true
    },
    {
      "name": "Interface Carpets",
      "slug": "carpets",
      "description": "Acoustic modular carpet tiles in contemporary geometric patterns",
      "image_url": "images/sections/lookbook-item-1.jpg",
      "display_order": 7,
      "is_visible": true
    }
  ],
  "products": [
    {
      "name": "Veloz Mesh Chair",
      "slug": "veloz-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Synchro-tilt with multi-position lock, 3D armrest with gel PU pad, Aluminium diecast base, Adjustable headrest.",
      "main_image": "images/archlabs/pages/page_4.png",
      "price": "Enquire for Price",
      "is_featured": true,
      "is_visible": true,
      "display_order": 1
    },
    {
      "name": "Feather Mesh Chair",
      "slug": "feather-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Seamless reclining mechanism, Adjustable armrests, High-resilience cushioning, Adjustable headrest, Smooth castors.",
      "main_image": "images/archlabs/pages/page_5.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 2
    },
    {
      "name": "Eiffel Mesh Chair",
      "slug": "eiffel-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Contoured backrest, Integrated lumbar support, High-density foam seat, Smooth-reclining mechanism.",
      "main_image": "images/archlabs/pages/page_6.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 3
    },
    {
      "name": "Mustang Mesh Chair",
      "slug": "mustang-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Generously-padded seat, Adjustable backrest, Smooth recline, Reinforced heavy-duty base.",
      "main_image": "images/archlabs/pages/page_7.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 4
    },
    {
      "name": "Bravo Mesh Chair",
      "slug": "bravo-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Plush cushioning, Smooth-reclining mechanism, Adjustable armrests, Heavy-duty castors, Robust Frame.",
      "main_image": "images/archlabs/pages/page_8.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 5
    },
    {
      "name": "Polar Mesh Chair",
      "slug": "polar-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "High density moulded foam, Reinforced base, Adjustable armrests, Integrated lumbar support.",
      "main_image": "images/archlabs/pages/page_9.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 6
    },
    {
      "name": "Zeus Leather Chair",
      "slug": "zeus-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Top-grain genuine leather upholstery, Synchronized knee-tilt mechanism with 4-position lock, Polished aluminium base.",
      "main_image": "images/archlabs/pages/page_12.png",
      "price": "Enquire for Price",
      "is_featured": true,
      "is_visible": true,
      "display_order": 7
    },
    {
      "name": "Klass Leather Chair",
      "slug": "klass-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Executive high-back profile, Premium leatherette upholstery, Fixed aluminium armrests with leather pads.",
      "main_image": "images/archlabs/pages/page_13.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 8
    },
    {
      "name": "Signet Leather Chair",
      "slug": "signet-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Minimalist slimline aesthetic, Heavy-duty chrome gas lift, PU leather finish, Torsion bar tilt mechanism.",
      "main_image": "images/archlabs/pages/page_14.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 9
    },
    {
      "name": "Vektor Modular Workstation",
      "slug": "vektor-modular-workstation",
      "category_slug": "workstations",
      "subcategory": "Workstations",
      "description": "4-seater back-to-back linear desk system with fabric acoustic privacy screen dividers, integrated raceway wire management.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": "Enquire for Custom Layout",
      "is_featured": true,
      "is_visible": true,
      "display_order": 10
    },
    {
      "name": "Apex Executive Desk",
      "slug": "apex-executive-desk",
      "category_slug": "tables",
      "subcategory": "Executive Desks",
      "description": "L-shaped director desk in teak prelam finish with return side runner cabinet and leather writing pad insert.",
      "main_image": "images/categories/cat_tables.jpg",
      "price": "Enquire for Custom Dimensions",
      "is_featured": true,
      "is_visible": true,
      "display_order": 11
    },
    {
      "name": "Acoustic Silence Pod",
      "slug": "acoustic-silence-pod",
      "category_slug": "acoustic-pods",
      "subcategory": "Pods",
      "description": "Single person phone booth with sound-dampening interior felt, LED lighting, ventilation fan, and power outlet.",
      "main_image": "images/categories/cat_pods.jpg",
      "price": "Enquire for Quote",
      "is_featured": true,
      "is_visible": true,
      "display_order": 12
    }
  ],
  "hero_sections": [
    {
      "heading": "Transforming Workspaces.<br><span class=\"text-gradient-red\">Elevating Possibilities.</span>",
      "description": "Premium office furniture, interior systems, and turnkey workspace solutions designed for modern corporate businesses, MNCs, educational institutions, and professional environments across Telangana and Andhra Pradesh.",
      "background_image": "images/sections/hero-workspace.jpg",
      "is_custom_updated": false
    }
  ],
  "about_sections": [
    {
      "title": "Creating Workspaces That Work for You",
      "main_description": "At Vishista Office Solutions Pvt Ltd, we specialize in delivering world-class workspace environments.",
      "is_custom_updated": false
    }
  ],
  "footer_content": [
    {
      "company_description": "Vishista Office Solutions Pvt Ltd is a premier provider of corporate office furniture and turnkey workspace interior solutions across Telangana and Andhra Pradesh.",
      "address": "Plot No 45, Jubilee Hills, Road No 36, Hyderabad, Telangana 500033",
      "phone": "+91 98490 12345",
      "email": "info@vishista.com"
    }
  ]
};

// Initialize Supabase Client if SDK is loaded
let supabaseClient = null;
if (typeof supabase !== 'undefined' && supabase.createClient) {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Cloudinary Direct Upload Helper
async function uploadToCloudinary(file, onProgress) {
    if (!file) throw new Error('No file provided for upload.');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`);

        if (onProgress && xhr.upload) {
            xhr.upload.onprogress = (e) => {
                if (e.lengthComputable) {
                    const percent = Math.round((e.loaded / e.total) * 100);
                    onProgress(percent);
                }
            };
        }

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                const response = JSON.parse(xhr.responseText);
                resolve({
                    url: response.secure_url,
                    public_id: response.public_id,
                    format: response.format,
                    width: response.width,
                    height: response.height
                });
            } else {
                reject(new Error(`Cloudinary upload failed: ${xhr.statusText}`));
            }
        };

        xhr.onerror = () => reject(new Error('Network error during Cloudinary upload.'));
        xhr.send(formData);
    });
}

// Global Store State Manager (Hybrid Supabase + Live Cache + Fail-Safe Seed)
const CMSDataStore = {
    getKey: (table) => `vishista_cms_${table}`,
    
    get: async function(table) {
        if (supabaseClient) {
            try {
                const { data, error } = await supabaseClient.from(table).select('*');
                if (error) {
                    console.error(`[CMSDataStore] Supabase SELECT error for '${table}':`, error);
                } else if (data && data.length > 0) {
                    localStorage.setItem(this.getKey(table), JSON.stringify(data));
                    return data;
                }
            } catch (e) {
                console.warn(`[CMSDataStore] Supabase fetch exception for '${table}':`, e.message);
            }
        }

        // Fallback 1: LocalStorage Cache
        const cached = localStorage.getItem(this.getKey(table));
        if (cached) {
            try {
                const parsed = JSON.parse(cached);
                if (parsed && parsed.length > 0) return parsed;
            } catch (e) {}
        }

        // Fallback 2: Pre-seeded data dataset
        if (VISHISTA_SEED_DATA && VISHISTA_SEED_DATA[table]) {
            const seedRecords = VISHISTA_SEED_DATA[table];
            localStorage.setItem(this.getKey(table), JSON.stringify(seedRecords));

            // Auto-seed Supabase in background if Supabase is connected and empty
            if (supabaseClient && seedRecords.length > 0) {
                supabaseClient.from(table).upsert(seedRecords).then(({ error }) => {
                    if (error) {
                        console.warn(`[CMSDataStore] Auto-seed Supabase notice for '${table}':`, error.message);
                    } else {
                        console.log(`[CMSDataStore] Successfully auto-seeded Supabase table '${table}'.`);
                    }
                }).catch(() => {});
            }

            return seedRecords;
        }

        return [];
    },

    save: async function(table, records) {
        localStorage.setItem(this.getKey(table), JSON.stringify(records));
        if (supabaseClient) {
            try {
                const { error } = await supabaseClient.from(table).upsert(records);
                if (error) console.error(`[CMSDataStore] Supabase SAVE error for '${table}':`, error);
            } catch (e) {
                console.warn(`[CMSDataStore] Supabase upsert exception for '${table}':`, e.message);
            }
        }
    }
};

if (typeof window !== 'undefined') {
    window.SUPABASE_URL = SUPABASE_URL;
    window.SUPABASE_ANON_KEY = SUPABASE_ANON_KEY;
    window.CLOUDINARY_CLOUD_NAME = CLOUDINARY_CLOUD_NAME;
    window.CLOUDINARY_UPLOAD_PRESET = CLOUDINARY_UPLOAD_PRESET;
    window.VISHISTA_SEED_DATA = VISHISTA_SEED_DATA;
    window.supabaseClient = supabaseClient;
    window.uploadToCloudinary = uploadToCloudinary;
    window.CMSDataStore = CMSDataStore;
}
