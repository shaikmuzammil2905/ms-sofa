const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://oseccrcffoyttjgpazrt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zZWNjcmNmZm95dHRqZ3BhenJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3NTM4OTEsImV4cCI6MjEwMzMyOTg5MX0.ESJ0iK2zcCPZZCZtfeYW7uObbEP7JxXUYJiSi9a4pzA';

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedSupabase() {
    console.log('--- Starting Supabase Data Migration ---');
    const seedPath = path.join(__dirname, '..', 'data', 'seed_data.json');
    if (!fs.existsSync(seedPath)) {
        console.error('seed_data.json not found!');
        return;
    }

    const seedData = JSON.parse(fs.readFileSync(seedPath, 'utf8'));

    // 1. Seed Categories
    console.log('\nSeeding Categories...');
    const categoryMap = {};
    for (const cat of seedData.categories) {
        const { data, error } = await supabase.from('categories').upsert(cat, { onConflict: 'slug' }).select();
        if (error) {
            console.error(`Error inserting category "${cat.name}":`, error.message);
        } else if (data && data.length > 0) {
            categoryMap[cat.slug] = data[0].id;
            console.log(`✓ Category "${cat.name}" seeded. ID: ${data[0].id}`);
        }
    }

    // 2. Seed Products
    console.log('\nSeeding Products...');
    for (const prod of seedData.products) {
        const categoryId = categoryMap[prod.category_slug];
        const productPayload = {
            name: prod.name,
            slug: prod.slug,
            category_id: categoryId || null,
            subcategory: prod.subcategory,
            description: prod.description,
            price: prod.price,
            main_image: prod.main_image,
            is_featured: prod.is_featured,
            is_visible: prod.is_visible,
            display_order: prod.display_order
        };

        const { data, error } = await supabase.from('products').upsert(productPayload, { onConflict: 'slug' }).select();
        if (error) {
            console.error(`Error inserting product "${prod.name}":`, error.message);
        } else {
            console.log(`✓ Product "${prod.name}" seeded.`);
        }
    }

    // 3. Seed Hero Section
    console.log('\nSeeding Hero Sections...');
    for (const hero of seedData.hero_sections) {
        const { error } = await supabase.from('hero_sections').insert(hero);
        if (error) {
            console.error('Error inserting hero section:', error.message);
        } else {
            console.log('✓ Hero section seeded.');
        }
    }

    // 4. Seed About Section
    console.log('\nSeeding About Sections...');
    for (const about of seedData.about_sections) {
        const { error } = await supabase.from('about_sections').insert(about);
        if (error) {
            console.error('Error inserting about section:', error.message);
        } else {
            console.log('✓ About section seeded.');
        }
    }

    // 5. Seed Footer Content
    console.log('\nSeeding Footer Content...');
    for (const footer of seedData.footer_content) {
        const { error } = await supabase.from('footer_content').insert(footer);
        if (error) {
            console.error('Error inserting footer content:', error.message);
        } else {
            console.log('✓ Footer content seeded.');
        }
    }

    // 6. Seed Website Settings
    console.log('\nSeeding Website Settings...');
    for (const setting of seedData.website_settings) {
        const { error } = await supabase.from('website_settings').insert(setting);
        if (error) {
            console.error('Error inserting website settings:', error.message);
        } else {
            console.log('✓ Website settings seeded.');
        }
    }

    console.log('\n--- Migration Finished ---');
}

seedSupabase();
