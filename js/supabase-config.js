// Supabase & Cloudinary Configuration for Vishista Office Solutions CMS

const SUPABASE_URL = 'https://oseccrcffoyttjgpazrt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zZWNjcmNmZm95dHRqZ3BhenJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3NTM4OTEsImV4cCI6MjEwMzMyOTg5MX0.ESJ0iK2zcCPZZCZtfeYW7uObbEP7JxXUYJiSi9a4pzA';

const CLOUDINARY_CLOUD_NAME = 'iw4ntmv5';
const CLOUDINARY_UPLOAD_PRESET = 'ml_default';

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

// Global Store State Manager (Hybrid Supabase + Live Cache)
const CMSDataStore = {
    getKey: (table) => `vishista_cms_${table}`,
    
    get: async function(table) {
        if (supabaseClient) {
            try {
                const { data, error } = await supabaseClient.from(table).select('*').order('created_at', { ascending: false });
                if (!error && data && data.length > 0) {
                    localStorage.setItem(this.getKey(table), JSON.stringify(data));
                    return data;
                }
            } catch (e) {
                console.warn(`Supabase fetch fallback for ${table}:`, e.message);
            }
        }
        const cached = localStorage.getItem(this.getKey(table));
        return cached ? JSON.parse(cached) : [];
    },

    save: async function(table, records) {
        localStorage.setItem(this.getKey(table), JSON.stringify(records));
        if (supabaseClient) {
            try {
                await supabaseClient.from(table).upsert(records);
            } catch (e) {
                console.warn(`Supabase upsert warning for ${table}:`, e.message);
            }
        }
    }
};

if (typeof window !== 'undefined') {
    window.SUPABASE_URL = SUPABASE_URL;
    window.SUPABASE_ANON_KEY = SUPABASE_ANON_KEY;
    window.CLOUDINARY_CLOUD_NAME = CLOUDINARY_CLOUD_NAME;
    window.CLOUDINARY_UPLOAD_PRESET = CLOUDINARY_UPLOAD_PRESET;
    window.supabaseClient = supabaseClient;
    window.uploadToCloudinary = uploadToCloudinary;
    window.CMSDataStore = CMSDataStore;
}
