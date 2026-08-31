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
      "image_url": "images/categories/cat_seating.jpg",
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
      "image_url": "images/categories/cat_tables.png",
      "display_order": 3,
      "is_visible": true
    },
    {
      "name": "Storage Systems",
      "slug": "storage",
      "description": "Prelam credenzas, steel filing cabinets, high-density mobile compactors, and employee lockers",
      "image_url": "images/categories/cat_storage.png",
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
      "image_url": "images/categories/cat_carpets.jpg",
      "display_order": 7,
      "is_visible": true
    },
    {
      "name": "Outdoor Furniture",
      "slug": "outdoor",
      "description": "Synthetic wicker terrace seating, patio umbrellas, and garden breakout sets",
      "image_url": "images/categories/cat_outdoor.jpg",
      "display_order": 8,
      "is_visible": true
    },
    {
      "name": "Educational Solutions",
      "slug": "educational",
      "description": "Student classroom desks, library reading carrels, hostel bunk beds, and auditorium chairs",
      "image_url": "images/categories/cat_education.png",
      "display_order": 9,
      "is_visible": true
    },
    {
      "name": "Workspace Accessories",
      "slug": "accessories",
      "description": "Dual monitor gas arms, under-desk cable management, and pop-up power modules",
      "image_url": "images/categories/cat_tables.png",
      "display_order": 10,
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
      "name": "Glanza Mesh Chair",
      "slug": "glanza-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Sturdy Metal base, High density moulded foam, Contoured backrest, Smooth-reclining mechanism.",
      "main_image": "images/archlabs/pages/page_10.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 7
    },
    {
      "name": "Yaris Mesh Chair",
      "slug": "yaris-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Supportive mesh back, Adjustable armrests, High density foam, Smooth-tilt mechanism.",
      "main_image": "images/archlabs/pages/page_11.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 8
    },
    {
      "name": "Quartz Mesh Chair",
      "slug": "quartz-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Robust Metal Frame, Multi-Position Locking, Synchronized reclining, Customizable seating position.",
      "main_image": "images/archlabs/pages/page_12.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 9
    },
    {
      "name": "Ditto Mesh Chair",
      "slug": "ditto-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Gas lift height adjustment, Robust Metal Frame, Premium Cushioning, Ergonomic backrest.",
      "main_image": "images/archlabs/pages/page_13.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 10
    },
    {
      "name": "Velfire Mesh Chair",
      "slug": "velfire-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "High back & Medium back configurations, Breathable mesh back, Robust Metal Frame.",
      "main_image": "images/archlabs/pages/page_14.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 11
    },
    {
      "name": "Optimus Mesh Chair",
      "slug": "optimus-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "High back & Medium back configurations, Premium cushioning, Smooth reclining mechanism.",
      "main_image": "images/archlabs/pages/page_15.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 12
    },
    {
      "name": "Luxe Leather Chair",
      "slug": "luxe-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Luxurious diamond stitch quilted upholstery, 3D adjustable armrests, Class 4 gas lift, Seat slide adjustment.",
      "main_image": "images/archlabs/pages/page_36.png",
      "price": "Enquire for Price",
      "is_featured": true,
      "is_visible": true,
      "display_order": 13
    },
    {
      "name": "Elara Leather Chair",
      "slug": "elara-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Contoured high back, Deep multi-density cushioning, Synchronized tilt with seat slide, 3D armrests.",
      "main_image": "images/archlabs/pages/page_37.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 14
    },
    {
      "name": "Regent Leather Chair",
      "slug": "regent-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Tall commanding high back, Fixed chrome armrests, Strong metal chrome frame, Premium leatherette.",
      "main_image": "images/archlabs/pages/page_38.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 15
    },
    {
      "name": "Height Adjustable Sit-Stand Desk",
      "slug": "height-adjustable-desk",
      "category_slug": "workstations",
      "subcategory": "Modular Workstations",
      "description": "Motorized sit-to-stand desks engineered for active workplace wellness, smooth height transitions, and integrated wire management.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": "Enquire for Price",
      "is_featured": true,
      "is_visible": true,
      "display_order": 16
    },
    {
      "name": "Desking Series Open Plan",
      "slug": "desking-series-open-plan",
      "category_slug": "workstations",
      "subcategory": "Modular Workstations",
      "description": "Modular open-plan linear and back-to-back desking systems with minimalist leg profiles and customizable privacy screens.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 17
    },
    {
      "name": "Panel Series Workstations",
      "slug": "panel-series-workstations",
      "category_slug": "workstations",
      "subcategory": "Modular Workstations",
      "description": "Acoustic panel-based workstation partitions providing high acoustic privacy, raceway power conduits, and modular storage integration.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 18
    },
    {
      "name": "Cabin & Executive Tables",
      "slug": "cabin-executive-tables",
      "category_slug": "tables",
      "subcategory": "Cabin Tables",
      "description": "Executive director and managerial desk setups with attached side return credenzas.",
      "main_image": "images/categories/cat_tables.png",
      "price": "Enquire for Price",
      "is_featured": true,
      "is_visible": true,
      "display_order": 19
    },
    {
      "name": "Boardroom Meeting Tables",
      "slug": "boardroom-meeting-tables",
      "category_slug": "tables",
      "subcategory": "Meeting Tables",
      "description": "Large boardroom conference tables equipped with pop-up connectivity boxes and cable trays.",
      "main_image": "images/categories/cat_tables.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 20
    },
    {
      "name": "High-Density Mobile Compactor Storage",
      "slug": "mobile-compactor-storage",
      "category_slug": "storage",
      "subcategory": "Compactor Storage",
      "description": "High-density mobile rail compactor storage systems maximizing floor space utilization.",
      "main_image": "images/categories/cat_storage.png",
      "price": "Enquire for Price",
      "is_featured": true,
      "is_visible": true,
      "display_order": 21
    },
    {
      "name": "Metal Filing Cabinets",
      "slug": "metal-filing-cabinets",
      "category_slug": "storage",
      "subcategory": "Metal Storage",
      "description": "Powder-coated steel filing cabinets, lateral drawers, and central archive units.",
      "main_image": "images/categories/cat_storage.png",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 22
    },
    {
      "name": "Executive Lounge Sofas",
      "slug": "executive-lounge-sofas",
      "category_slug": "soft-seating",
      "subcategory": "Lounges & Sofas",
      "description": "Single, two, and three-seater plush upholstered couches for reception areas and executive suites.",
      "main_image": "images/categories/cat_soft_seating.jpg",
      "price": "Enquire for Price",
      "is_featured": true,
      "is_visible": true,
      "display_order": 23
    },
    {
      "name": "Collaborative Booth Seating",
      "slug": "collaborative-booth-seating",
      "category_slug": "soft-seating",
      "subcategory": "Collaborative Seating",
      "description": "Modular curved sofas and high-back acoustic booth seating for agile team huddles.",
      "main_image": "images/categories/cat_soft_seating.jpg",
      "price": "Enquire for Price",
      "is_featured": false,
      "is_visible": true,
      "display_order": 24
    },
    {
      "name": "Single Acoustic Phone Pod",
      "slug": "single-acoustic-phone-pod",
      "category_slug": "acoustic-pods",
      "subcategory": "Phone Pods",
      "description": "Sound-insulated solo booth equipped with air ventilation, LED lighting, power outlets, and laptop shelf for private calls.",
      "main_image": "images/categories/cat_pods.jpg",
      "price": "Enquire for Price",
      "is_featured": true,
      "is_visible": true,
      "display_order": 25
    },
    {
      "name": "4-6 Person Acoustic Meeting Pod",
      "slug": "4-6-person-meeting-pod",
      "category_slug": "acoustic-pods",
      "subcategory": "Meeting Pods",
      "description": "Fully enclosed acoustic meeting booth complete with integrated sofa seating, TV monitor mounting bracket, and power hubs.",
      "main_image": "images/categories/cat_pods.jpg",
      "price": "Enquire for Price",
      "is_featured": true,
      "is_visible": true,
      "display_order": 26
    },
    {
      "name": "Interface Modular Carpet Tiles",
      "slug": "interface-carpet-tiles",
      "category_slug": "carpets",
      "subcategory": "Carpet Tiles",
      "description": "Modular acoustic carpet tiles available in contemporary geometric patterns, stain-resistant fibers, and sound dampening backing.",
      "main_image": "images/categories/cat_carpets.jpg",
      "price": "Enquire for Price",
      "is_featured": true,
      "is_visible": true,
      "display_order": 27
    }
  ],
  "hero_sections": [
    {
      "heading": "Transforming Workspaces.<br><span class=\"text-gradient-red\">Elevating Possibilities.</span>",
      "description": "Premium office furniture, interior systems, and turnkey workspace solutions designed for modern corporate businesses, MNCs, educational institutions, and professional environments.",
      "slide_1": "images/sections/hero-slide-1.png",
      "slide_2": "images/sections/hero-slide-2.png",
      "slide_3": "images/sections/hero-slide-3.png",
      "background_image": "images/sections/hero-slide-1.png",
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
      "company_description": "Vishista Office Solutions Pvt Ltd is a premier provider of corporate office furniture and turnkey workspace interior solutions.",
      "address": "Plot No 45, Jubilee Hills, Road No 36, Hyderabad, Telangana 500033",
      "phone": "+91 98490 12345",
      "email": "info@vishista.com"
    }
  ],
  "projects": [
    {
      "name": "Corporate Tech Hub",
      "slug": "corporate-tech-hub",
      "client": "MNC Tech Firm, Hitec City",
      "category": "Turnkey Workspace",
      "location": "Hyderabad, Telangana",
      "description": "500-seater modular workstation installation with acoustic panel partitions and executive director cabins.",
      "image_url": "images/sections/hero-slide-1.png",
      "completion_year": "2025",
      "is_visible": true,
      "display_order": 1
    },
    {
      "name": "Financial Services Regional HQ",
      "slug": "financial-services-hq",
      "client": "Leading Financial Institution",
      "category": "Executive Seating & Desks",
      "location": "Gachibowli, Hyderabad",
      "description": "Executive ArchLabs leather seating, high-density compactor storage, and 20-seater boardroom meeting tables.",
      "image_url": "images/sections/hero-slide-2.png",
      "completion_year": "2025",
      "is_visible": true,
      "display_order": 2
    },
    {
      "name": "Global R&D Center",
      "slug": "global-rd-center",
      "client": "Pharma & Biotech Enterprise",
      "category": "Acoustic Pods & Soft Seating",
      "location": "Genome Valley, Hyderabad",
      "description": "Soundproof acoustic meeting pods, collaborative lounge sofa booths, and interface carpet tile flooring.",
      "image_url": "images/sections/hero-slide-3.png",
      "completion_year": "2024",
      "is_visible": true,
      "display_order": 3
    }
  ]
};

// Initialize Supabase Client if SDK is loaded
let supabaseClient = null;
if (typeof supabase !== 'undefined' && supabase.createClient) {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Cloudinary Direct Upload Helper with Fail-Safe Data URL Fallback
async function uploadToCloudinary(file, onProgress) {
    if (!file) throw new Error('No file provided for upload.');

    const readAsBase64 = (f) => new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = () => resolve(URL.createObjectURL(f));
        reader.readAsDataURL(f);
    });

    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        return await new Promise((resolve, reject) => {
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
                        public_id: response.public_id
                    });
                } else {
                    reject(new Error(`Status ${xhr.status}`));
                }
            };

            xhr.onerror = () => reject(new Error('Network error during image upload.'));
            xhr.send(formData);
        });
    } catch (err) {
        console.warn('Cloudinary notice, applying high-speed data image fallback:', err);
        if (onProgress) onProgress(100);
        const dataUrl = await readAsBase64(file);
        return { url: dataUrl };
    }
}

function generateUUID() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Global Store State Manager (Supabase Database Priority + Fail-Safe Cache + Full Seed Merging)
const CMSDataStore = {
    getKey: (table) => `vishista_cms_${table}`,

    get: async function(table) {
        const seedItems = (typeof VISHISTA_SEED_DATA !== 'undefined' && VISHISTA_SEED_DATA && VISHISTA_SEED_DATA[table]) ? VISHISTA_SEED_DATA[table] : [];
        let items = [];

        // 1. Try LocalStorage Cache first
        const cached = localStorage.getItem(this.getKey(table));
        if (cached) {
            try {
                const parsed = JSON.parse(cached);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    items = parsed;
                }
            } catch (e) {}
        }

        // 2. Immediate Seed Fallback if items is currently empty
        if (items.length === 0 && seedItems.length > 0) {
            items = seedItems.map(r => ({ ...r, id: r.id || generateUUID() }));
            try { localStorage.setItem(this.getKey(table), JSON.stringify(items)); } catch(e){}
        }

        // 3. Fetch directly from Supabase DB in background/async and merge missing seeds
        if (supabaseClient) {
            try {
                const { data, error } = await supabaseClient.from(table).select('*');
                if (!error && Array.isArray(data) && data.length > 0) {
                    if (seedItems.length > 0) {
                        const existingSlugs = new Set(data.map(i => i.slug || (i.name ? i.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : '') || i.id));
                        const missingSeeds = seedItems.filter(s => {
                            const slug = s.slug || (s.name ? s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : '') || s.id;
                            return !existingSlugs.has(slug);
                        }).map(s => ({ ...s, id: s.id || generateUUID() }));

                        if (missingSeeds.length > 0) {
                            items = [...data, ...missingSeeds];
                            supabaseClient.from(table).upsert(missingSeeds).catch(() => {});
                        } else {
                            items = data;
                        }
                    } else {
                        items = data;
                    }
                    localStorage.setItem(this.getKey(table), JSON.stringify(items));
                } else if (seedItems.length > 0 && (!data || data.length === 0)) {
                    const seedRecords = seedItems.map(r => ({ ...r, id: r.id || generateUUID() }));
                    supabaseClient.from(table).upsert(seedRecords).catch(() => {});
                }
            } catch (e) {
                console.warn(`[CMSDataStore] Supabase fetch exception for '${table}':`, e.message);
            }
        }

        // 4. Final safety check: return items or seedItems
        if (items.length === 0 && seedItems.length > 0) {
            items = seedItems.map(r => ({ ...r, id: r.id || generateUUID() }));
            try { localStorage.setItem(this.getKey(table), JSON.stringify(items)); } catch(e){}
        }

        return items;
    },

    save: async function(table, records) {
        // Sanitize every record to ensure it has a valid UUID id
        const sanitizedRecords = (records || []).map(r => {
            const item = { ...r };
            if (!item.id || item.id === '' || item.id === 'null') {
                item.id = generateUUID();
            }
            return item;
        });

        if (!supabaseClient) {
            localStorage.setItem(this.getKey(table), JSON.stringify(sanitizedRecords));
            return sanitizedRecords;
        }

        try {
            const { data, error } = await supabaseClient.from(table).upsert(sanitizedRecords).select();
            if (error) {
                console.error(`[CMSDataStore] Supabase SAVE error for '${table}':`, error);
                throw new Error(`Database Error (${table}): ${error.message}`);
            }
            
            // Re-fetch fresh dataset from Supabase
            const { data: freshData } = await supabaseClient.from(table).select('*');
            const resultData = (freshData && freshData.length > 0) ? freshData : (data || sanitizedRecords);
            localStorage.setItem(this.getKey(table), JSON.stringify(resultData));
            return resultData;
        } catch (e) {
            console.error(`[CMSDataStore] Save failed for table '${table}':`, e.message);
            throw e;
        }
    },

    insertRecord: async function(table, record) {
        if (!supabaseClient) {
            const current = await this.get(table);
            current.push(record);
            return this.save(table, current);
        }

        const { data, error } = await supabaseClient.from(table).insert([record]).select();
        if (error) {
            console.error(`[CMSDataStore] Supabase INSERT error for '${table}':`, error);
            throw new Error(`Insert failed: ${error.message}`);
        }

        return this.get(table);
    },

    updateRecord: async function(table, id, record) {
        if (!supabaseClient) {
            const current = await this.get(table);
            const idx = current.findIndex(r => r.id === id);
            if (idx !== -1) current[idx] = { ...current[idx], ...record };
            return this.save(table, current);
        }

        const { data, error } = await supabaseClient.from(table).update(record).eq('id', id).select();
        if (error) {
            console.error(`[CMSDataStore] Supabase UPDATE error for '${table}':`, error);
            throw new Error(`Update failed: ${error.message}`);
        }

        return this.get(table);
    },

    deleteRecord: async function(table, id) {
        if (!supabaseClient) {
            const current = await this.get(table);
            const updated = current.filter(r => r.id !== id);
            return this.save(table, updated);
        }

        const { error } = await supabaseClient.from(table).delete().eq('id', id);
        if (error) {
            console.error(`[CMSDataStore] Supabase DELETE error for '${table}':`, error);
            throw new Error(`Delete failed: ${error.message}`);
        }

        return this.get(table);
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

