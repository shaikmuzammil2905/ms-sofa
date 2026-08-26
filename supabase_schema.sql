-- Supabase Schema for Vishista Office Solutions CMS

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    image_url TEXT,
    display_order INT DEFAULT 0,
    is_visible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    subcategory TEXT,
    description TEXT,
    features TEXT,
    price TEXT,
    main_image TEXT NOT NULL,
    additional_images JSONB DEFAULT '[]'::jsonb,
    is_featured BOOLEAN DEFAULT FALSE,
    is_visible BOOLEAN DEFAULT TRUE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. PROJECTS TABLE
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL,
    location TEXT,
    description TEXT,
    main_image TEXT NOT NULL,
    gallery_images JSONB DEFAULT '[]'::jsonb,
    is_visible BOOLEAN DEFAULT TRUE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. TESTIMONIALS TABLE
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name TEXT NOT NULL,
    company_name TEXT,
    designation TEXT,
    location TEXT,
    testimonial_text TEXT NOT NULL,
    rating INT DEFAULT 5,
    image_url TEXT,
    is_visible BOOLEAN DEFAULT TRUE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. HERO SECTIONS TABLE
CREATE TABLE IF NOT EXISTS public.hero_sections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    heading TEXT NOT NULL,
    subheading TEXT,
    description TEXT,
    primary_btn_text TEXT,
    primary_btn_link TEXT,
    secondary_btn_text TEXT,
    secondary_btn_link TEXT,
    bg_image_url TEXT,
    is_visible BOOLEAN DEFAULT TRUE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. ABOUT SECTIONS TABLE
CREATE TABLE IF NOT EXISTS public.about_sections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    subtitle TEXT,
    main_description TEXT,
    secondary_description TEXT,
    image_url TEXT,
    experience_years TEXT,
    btn_text TEXT,
    btn_link TEXT,
    is_visible BOOLEAN DEFAULT TRUE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. FEATURED COLLECTIONS TABLE
CREATE TABLE IF NOT EXISTS public.featured_collections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT,
    image_url TEXT,
    link_url TEXT,
    display_order INT DEFAULT 0,
    is_visible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. GALLERY TABLE
CREATE TABLE IF NOT EXISTS public.gallery (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT,
    category TEXT,
    image_url TEXT NOT NULL,
    cloudinary_public_id TEXT,
    display_order INT DEFAULT 0,
    is_visible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_name TEXT,
    full_name TEXT NOT NULL,
    company_name TEXT,
    phone_number TEXT NOT NULL,
    email TEXT,
    message TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 11. FOOTER CONTENT TABLE
CREATE TABLE IF NOT EXISTS public.footer_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_description TEXT,
    address TEXT,
    email_primary TEXT,
    email_secondary TEXT,
    email_director TEXT,
    phone_primary TEXT,
    whatsapp_number TEXT,
    directions_url TEXT,
    copyright_text TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 12. WEBSITE SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.website_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    site_name TEXT DEFAULT 'Vishista Office Solutions',
    logo_url TEXT,
    favicon_url TEXT,
    meta_title TEXT,
    meta_description TEXT,
    keywords TEXT,
    og_title TEXT,
    og_description TEXT,
    og_image_url TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 13. ENABLE ROW LEVEL SECURITY (RLS) ON ALL TABLES
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hero_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.about_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.featured_collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.footer_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_settings ENABLE ROW LEVEL SECURITY;

-- 14. CREATE RLS POLICIES FOR PUBLIC READ ACCESS
CREATE POLICY "Allow public read access for categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access for products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Allow public read access for projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access for testimonials" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Allow public read access for hero_sections" ON public.hero_sections FOR SELECT USING (true);
CREATE POLICY "Allow public read access for about_sections" ON public.about_sections FOR SELECT USING (true);
CREATE POLICY "Allow public read access for featured_collections" ON public.featured_collections FOR SELECT USING (true);
CREATE POLICY "Allow public read access for gallery" ON public.gallery FOR SELECT USING (true);
CREATE POLICY "Allow public read access for footer_content" ON public.footer_content FOR SELECT USING (true);
CREATE POLICY "Allow public read access for website_settings" ON public.website_settings FOR SELECT USING (true);

-- Allow public insert on enquiries
CREATE POLICY "Allow public insert on enquiries" ON public.enquiries FOR INSERT WITH CHECK (true);

-- 15. CREATE RLS POLICIES FOR AUTHENTICATED ADMIN USERS (FULL CRUD)
CREATE POLICY "Allow admin all on categories" ON public.categories FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow admin all on products" ON public.products FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow admin all on projects" ON public.projects FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow admin all on testimonials" ON public.testimonials FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow admin all on hero_sections" ON public.hero_sections FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow admin all on about_sections" ON public.about_sections FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow admin all on featured_collections" ON public.featured_collections FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow admin all on gallery" ON public.gallery FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow admin all on enquiries" ON public.enquiries FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow admin all on footer_content" ON public.footer_content FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow admin all on website_settings" ON public.website_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
