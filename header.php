<?php
	include_once "includes/inc_config.php";
?>
<!DOCTYPE html>
<!--[if IE 8]><html class="ie" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <!--[if IE ]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/><![endif]-->

    <meta name="author" content="Vishista Office Solutions Pvt Ltd">
    <title>Vishista Office Solutions - Premium Office Furniture & Turnkey Workspaces</title>
    <meta name="description" content="Vishista Office Solutions Pvt Ltd offers premium office furniture, ArchLabs seating collections, modular workstation systems, executive seating, and turnkey corporate interior solutions across Telangana and Andhra Pradesh.">
    <meta name="keywords" content="office furniture, ArchLabs seating, mesh chairs, leather chairs, workstations, executive tables, Hyderabad, Secunderabad">
    
    <!-- Mobile Specific Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- Theme Style -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/animate.min.css">
    <link rel="stylesheet" type="text/css" href="css/swiper-bundle.min.css">
    <link rel="stylesheet" type="text/css" href="css/sib-styles.css">
    <link rel="stylesheet" type="text/css" href="css/styles.css">

    <!-- Icon -->
    <link rel="stylesheet" type="text/css" href="icons/icomoon/style.css">

    <!-- Favicon -->
    <link rel="shortcut icon" href="images/logo/logo-mark.png?v=2">
    <link rel="apple-touch-icon-precomposed" href="images/logo/logo-mark.png?v=2">

    <!-- Supabase SDK & CMS Public Sync Engine -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2" defer></script>
    <script src="js/supabase-config.js" defer></script>
    <script src="js/public-sync.js" defer></script>

    <style>
        /* Site Logo Header Styling */
        .site-brand-logo {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none !important;
            max-width: 100%;
        }
        .site-brand-logo img {
            height: 52px;
            width: auto;
            object-fit: contain;
            flex-shrink: 0;
            transition: transform 0.2s ease;
        }
        .site-brand-logo:hover img {
            transform: scale(1.04);
        }
        .brand-text-wrapper {
            display: flex;
            flex-direction: column;
            white-space: nowrap;
        }
        .brand-main-title {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            font-size: 23px;
            font-weight: 900;
            color: #d32f2f;
            line-height: 1;
            letter-spacing: 0.8px;
        }
        .brand-sub-title {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            font-size: 10.5px;
            font-weight: 800;
            color: #333333;
            letter-spacing: 2.2px;
            margin-top: 3px;
        }
        @media (max-width: 576px) {
            .site-brand-logo {
                gap: 8px;
            }
            .site-brand-logo img {
                height: 38px !important;
            }
            .brand-main-title {
                font-size: 17px !important;
            }
            .brand-sub-title {
                font-size: 8px !important;
                letter-spacing: 1.2px !important;
            }
            .nav-enquire-btn {
                padding: 6px 12px !important;
                font-size: 11px !important;
            }
        }
        @media (max-width: 380px) {
            .site-brand-logo {
                gap: 6px;
            }
            .site-brand-logo img {
                height: 32px !important;
            }
            .brand-main-title {
                font-size: 14px !important;
            }
            .brand-sub-title {
                font-size: 7px !important;
                letter-spacing: 0.8px !important;
            }
            .nav-enquire-btn {
                padding: 5px 8px !important;
                font-size: 10px !important;
            }
        }

        /* Continuous Scrolling Marquee Animation for Section Cards */
        .scrolling-marquee-container {
            overflow: hidden !important;
            width: 100% !important;
            position: relative !important;
            padding: 10px 0 !important;
        }
        .scrolling-marquee-track {
            display: flex !important;
            gap: 24px !important;
            width: max-content !important;
            animation: marqueeContinuous 30s linear infinite !important;
        }
        .scrolling-marquee-track:hover {
            animation-play-state: paused !important;
        }
        @keyframes marqueeContinuous {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        /* High-Visibility Product Card & Subcategory Text Styling (Matching image copy 70.png) */
        .card-body h4, .card-body h5 {
            font-size: 1.3rem !important;
            font-weight: 800 !important;
            color: #111111 !important;
        }
        .card-body p, .card-body p.text-secondary {
            font-size: 1.05rem !important;
            font-weight: 600 !important;
            color: #333333 !important;
            line-height: 1.6 !important;
        }
        .product-cat-card h4 {
            font-size: 1.4rem !important;
            font-weight: 800 !important;
            color: #111111 !important;
        }
        .product-cat-card p {
            font-size: 1.1rem !important;
            font-weight: 600 !important;
            color: #333333 !important;
        }
        .badge {
            font-size: 0.85rem !important;
            font-weight: 700 !important;
        }

        .nav-enquire-btn {
            background-color: #d32f2f;
            color: #ffffff !important;
            padding: 10px 22px;
            border-radius: 4px;
            font-weight: 600;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            text-decoration: none !important;
            border: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .nav-enquire-btn:hover {
            background-color: #b71c1c;
            color: #ffffff !important;
            box-shadow: 0 4px 12px rgba(211, 47, 47, 0.3);
        }

        /* Desktop Mega Menu & Standard Dropdown Positioning Fix */
        .header-inner {
            position: relative !important;
        }
        .main-menu .navigation > li.has-child {
            position: relative !important;
        }
        .main-menu .navigation > li.has-child.has-mega-menu {
            position: static !important;
        }
        .main-menu .navigation > li:not(.has-mega-menu) > .submenu {
            position: absolute !important;
            top: 100% !important;
            left: 0 !important;
            min-width: 260px !important;
            background: #ffffff !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
            border-radius: 8px !important;
            padding: 16px !important;
            z-index: 99999 !important;
            border: 1px solid rgba(0,0,0,0.08) !important;
        }
        .mega-menu {
            position: absolute !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 1280px !important;
            max-width: 95vw !important;
            top: 100% !important;
            padding: 0 !important;
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.18) !important;
            border-radius: 12px !important;
            overflow: visible !important;
            background: #ffffff !important;
            z-index: 99999 !important;
            border: 1px solid rgba(0,0,0,0.08) !important;
        }
        .mega-menu-grid {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 22px 28px !important;
            padding: 26px 30px !important;
            background: #ffffff !important;
            border-radius: 12px !important;
            align-items: start !important;
        }
        @media (max-width: 1200px) {
            .mega-menu-grid {
                grid-template-columns: repeat(3, 1fr) !important;
            }
        }
        .mega-category-title {
            font-size: 13.5px !important;
            font-weight: 700 !important;
            color: #111111 !important;
            margin-bottom: 12px !important;
            padding-bottom: 6px !important;
            border-bottom: 2px solid #d32f2f !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
        }
        .mega-subcategory-list {
            list-style: none !important;
            padding: 0 !important;
            margin: 0 !important;
        }
        .mega-subcategory-list li {
            margin-bottom: 8px !important;
        }
        .mega-subcategory-list a {
            color: #444444 !important;
            font-size: 13px !important;
            text-decoration: none !important;
            transition: color 0.2s ease, font-weight 0.2s ease !important;
            display: inline-block !important;
        }
        .mega-subcategory-list a:hover {
            color: #d32f2f !important;
            font-weight: 600 !important;
            transform: translateX(3px);
        }

        /* Mobile Offcanvas Drawer Sizing & Accordion Styling (Matching image copy 8.png) */
        .offcanvas.canvas-mb {
            width: 380px !important;
            max-width: 90vw !important;
            background-color: #ffffff !important;
        }
        .offcanvas-header {
            padding: 16px 20px !important;
            border-bottom: 1px solid #e9ecef !important;
            background-color: #ffffff !important;
        }
        
        /* Mobile Menu Main Link */
        .mobile-nav-link {
            font-size: 16px !important;
            font-weight: 700 !important;
            color: #111111 !important;
            padding: 14px 8px !important;
            border-bottom: 1px solid #f0f0f0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            text-decoration: none !important;
            transition: all 0.2s ease !important;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link[aria-expanded="true"] {
            color: #d32f2f !important;
        }
        .mobile-nav-link .chevron-icon {
            font-size: 12px !important;
            transition: transform 0.3s ease !important;
            color: #555555 !important;
        }
        .mobile-nav-link[aria-expanded="true"] .chevron-icon {
            transform: rotate(180deg) !important;
            color: #d32f2f !important;
        }

        /* Prominent Dropdown Chevron Button Styling */
        .chevron-box {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 28px !important;
            height: 28px !important;
            min-width: 28px !important;
            border-radius: 50% !important;
            background-color: #f0f0f0 !important;
            color: #333333 !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1) !important;
        }
        [aria-expanded="true"] .chevron-box {
            transform: rotate(180deg) !important;
            background-color: #d32f2f !important;
            color: #ffffff !important;
        }
        .navigation li.has-child::after {
            display: none !important;
        }
        .desktop-arrow {
            font-size: 10px !important;
            margin-left: 3px !important;
            transition: transform 0.2s ease !important;
            display: inline-block !important;
        }
        .menu-item:hover .desktop-arrow {
            transform: rotate(180deg) !important;
            color: #d32f2f !important;
        }

        /* Universal Rock-Solid Sticky Filter Anchor Bar & Jump Bar for Desktop & Mobile */
        .filter-anchor-bar,
        .sticky-jump-bar {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 72px !important;
            z-index: 990 !important;
            background-color: #ffffff !important;
            border-bottom: 2px solid #d32f2f !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
        }
        @media (max-width: 1199px) {
            .filter-anchor-bar,
            .sticky-jump-bar {
                top: 58px !important;
            }
        }
        .filter-anchor-bar .tf-container,
        .sticky-jump-bar .tf-container {
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
        }
        .filter-anchor-bar .tf-container::-webkit-scrollbar,
        .sticky-jump-bar .tf-container::-webkit-scrollbar {
            display: none;
        }

        /* Mobile Level 1 Subcategory Link (Accordion Header inside Products) */
        .mobile-sub-accordion-link {
            font-size: 15px !important;
            font-weight: 600 !important;
            color: #222222 !important;
            padding: 11px 10px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            text-decoration: none !important;
            border-radius: 6px !important;
            transition: all 0.2s ease !important;
        }
        .mobile-sub-accordion-link:hover,
        .mobile-sub-accordion-link[aria-expanded="true"] {
            color: #d32f2f !important;
            background-color: rgba(211, 47, 47, 0.05) !important;
        }
        .mobile-sub-accordion-link .chevron-icon {
            font-size: 11px !important;
            transition: transform 0.3s ease !important;
            color: #777777 !important;
        }
        .mobile-sub-accordion-link[aria-expanded="true"] .chevron-icon {
            transform: rotate(180deg) !important;
            color: #d32f2f !important;
        }

        /* Mobile Level 2 Item Link */
        .mobile-sub-link {
            font-size: 14px !important;
            color: #444444 !important;
            padding: 8px 12px !important;
            display: block !important;
            text-decoration: none !important;
            transition: all 0.2s ease !important;
            border-radius: 4px !important;
        }
        .mobile-sub-link:hover {
            color: #d32f2f !important;
            font-weight: 600 !important;
            background-color: #f8f9fa !important;
            padding-left: 16px !important;
        }
        
        /* Indentation Lines matching image 8 */
        .mobile-accordion-group {
            padding-left: 8px !important;
            margin-top: 4px !important;
            margin-bottom: 6px !important;
        }
        .mobile-nested-group {
            padding-left: 12px !important;
            border-left: 2px solid #e2e8f0 !important;
            margin-left: 10px !important;
            margin-top: 4px !important;
            margin-bottom: 8px !important;
        }
        .mobile-nested-group.archlabs-border {
            border-left-color: #d32f2f !important;
        }

        /* Universal Attractive Product & Catalogue Card Image Fitting (Fixes Mobile Cropping) */
        .card-img-top,
        .product-card-hover img,
        .card img.card-img-top {
            height: 270px !important;
            max-height: 270px !important;
            width: 100% !important;
            object-fit: contain !important;
            object-position: center !important;
            background-color: #ffffff !important;
            padding: 10px !important;
            border-bottom: 1px solid #f0f0f0 !important;
            transition: transform 0.3s ease !important;
        }
        .card {
            background-color: #ffffff !important;
            border-radius: 12px !important;
            overflow: hidden !important;
            transition: box-shadow 0.3s ease, transform 0.3s ease !important;
        }
        .product-card-hover:hover {
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
            transform: translateY(-4px) !important;
        }
        .product-card-hover:hover .card-img-top,
        .product-card-hover:hover img {
            transform: scale(1.03) !important;
        }
        @media (max-width: 576px) {
            .card-img-top,
            .product-card-hover img,
            .card img.card-img-top {
                height: 240px !important;
                max-height: 240px !important;
                padding: 6px !important;
                object-fit: contain !important;
                object-position: center !important;
            }
        }
    </style>
</head>

<body>
    <!-- wrapper -->
    <div id="wrapper">

        <!-- Scroll Top -->
        <button id="goTop">
            <span class="border-progress"></span>
            <span class="icon icon-caret-up"></span>
        </button>

        <!-- Preloader Disabled for Instant Crisp Page Loading -->

        <!-- .header -->
        <header class="header header-sticky py-2">
            <div class="tf-container w-1750">
                <div class="header-inner d-flex align-items-center justify-content-between">
                    
                    <!-- Site Logo -->
                    <a href="index.html" class="site-brand-logo">
                        <img src="images/logo/logo-mark.png?v=2" alt="Vishista Logo">
                        <div class="brand-text-wrapper">
                            <span class="brand-main-title">VISHISTA</span>
                            <span class="brand-sub-title">OFFICE SOLUTIONS</span>
                        </div>
                    </a>

                    <!-- Navigation Bar -->
                    <nav class="main-menu d-none d-xl-block ms-auto me-4 me-lg-5">
                        <ul class="navigation box-nav-menu d-flex align-items-center gap-4 list-unstyled mb-0">
                            <!-- 1. Home -->
                            <li class="text-menu menu-item">
                                <a href="index.html" class="item-link fw-bold" style="font-size: 15px !important; font-weight: 700 !important; color: #222222 !important;">Home</a>
                            </li>

                            <!-- 2. About Us (Dropdown with Chevron Icon) -->
                            <li class="has-child text-menu menu-item">
                                <a href="about.html" class="item-link fw-bold d-inline-flex align-items-center gap-1" style="font-size: 15px !important; font-weight: 700 !important; color: #222222 !important;">About Us <span class="desktop-arrow">▼</span></a>
                                <div class="submenu sub-menu p-3 rounded-3 shadow-lg" style="min-width: 250px;">
                                    <ul class="list-unstyled mb-0 d-flex flex-column gap-1.5">
                                        <li><a href="about.html#company-profile" class="text-dark text-decoration-none d-block py-1.5 px-2 rounded-2 hover-red" style="font-family: 'Inter', sans-serif; font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Company Profile</a></li>
                                        <li><a href="about.html#director-profile" class="text-dark text-decoration-none d-block py-1.5 px-2 rounded-2 hover-red" style="font-family: 'Inter', sans-serif; font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Director Journey</a></li>
                                        <li><a href="about.html#mission-vision" class="text-dark text-decoration-none d-block py-1.5 px-2 rounded-2 hover-red" style="font-family: 'Inter', sans-serif; font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Mission &amp; Vision</a></li>
                                        <li><a href="about.html#core-values" class="text-dark text-decoration-none d-block py-1.5 px-2 rounded-2 hover-red" style="font-family: 'Inter', sans-serif; font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Core Values</a></li>
                                        <li><a href="about.html#why-choose-us" class="text-dark text-decoration-none d-block py-1.5 px-2 rounded-2 hover-red" style="font-family: 'Inter', sans-serif; font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Why Choose Us</a></li>
                                    </ul>
                                </div>
                            </li>

                            <!-- 3. Products (Mega Menu Dropdown with Chevron Icon) -->
                            <li class="has-child has-mega-menu text-menu menu-item">
                                <a href="product-categories.html" class="item-link fw-bold d-inline-flex align-items-center gap-1" style="font-size: 15px !important; font-weight: 700 !important; color: #222222 !important;">Products <span class="desktop-arrow">▼</span></a>
                                <div class="submenu sub-menu mega-menu">
                                    <div class="mega-menu-grid">
                                        
                                        <!-- 1. Workstations -->
                                        <div>
                                            <a href="product-categories.html#workstations" class="mega-category-title d-block" style="font-size: 15px !important; font-weight: 700 !important;">Workstations</a>
                                            <ul class="mega-subcategory-list">
                                                <li><a href="product-catalogue-view.html?cat=Height%20Adjustable%20Series" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Height Adjustable Series</a></li>
                                                <li><a href="product-catalogue-view.html?cat=Desking%20Series" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Desking Series</a></li>
                                                <li><a href="product-catalogue-view.html?cat=Panel%20Series" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Panel Series</a></li>
                                            </ul>
                                        </div>

                                        <!-- 2. Tables -->
                                        <div>
                                            <a href="product-categories.html#tables" class="mega-category-title d-block" style="font-size: 15px !important; font-weight: 700 !important;">Tables</a>
                                            <ul class="mega-subcategory-list">
                                                <li><a href="product-catalogue-view.html?cat=Cabin%20Tables" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Cabin Tables</a></li>
                                                <li><a href="product-catalogue-view.html?cat=Meeting%20Tables" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Meeting Tables</a></li>
                                                <li><a href="product-catalogue-view.html?cat=Cafe%20Tables" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Cafe Tables</a></li>
                                                <li><a href="product-catalogue-view.html?cat=Training%20Tables" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Training Tables</a></li>
                                            </ul>
                                        </div>

                                        <!-- 3. Storage -->
                                        <div>
                                            <a href="product-categories.html#storage" class="mega-category-title d-block" style="font-size: 15px !important; font-weight: 700 !important;">Storage</a>
                                            <ul class="mega-subcategory-list">
                                                <li><a href="product-catalogue-view.html?cat=Prelam%20Storage" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Prelam Storage</a></li>
                                                <li><a href="product-catalogue-view.html?cat=Metal%20Storage" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Metal Storage</a></li>
                                                <li><a href="product-catalogue-view.html?cat=Compactor%20Storage" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Compactor Storage</a></li>
                                                <li><a href="product-catalogue-view.html?cat=Locker" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Locker</a></li>
                                            </ul>
                                        </div>

                                        <!-- 4. Seating (Uniform Clean Styling matching image copy 123.png) -->
                                        <div>
                                            <a href="archlabs-catalogue.html" class="mega-category-title d-block" style="font-size: 15px !important; font-weight: 700 !important;">Seating</a>
                                            <ul class="mega-subcategory-list">
                                                <li><a href="product-catalogue-view.html?cat=Mesh%20Series" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Mesh Chair</a></li>
                                                <li><a href="product-catalogue-view.html?cat=Leather%20Series" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Leather Chair</a></li>
                                                <li><a href="product-catalogue-view.html?cat=Training%20Series" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Training Chair</a></li>
                                                <li><a href="product-catalogue-view.html?cat=Cafe%20Chair" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Cafe Chair</a></li>
                                            </ul>
                                        </div>

                                        <!-- 5. Soft Seating -->
                                        <div>
                                            <a href="product-sofas.html" class="mega-category-title d-block" style="font-size: 15px !important; font-weight: 700 !important;">Soft Seating</a>
                                            <ul class="mega-subcategory-list">
                                                <li><a href="product-sofas.html" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Lounge</a></li>
                                                <li><a href="product-sofas.html" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Sofa</a></li>
                                                <li><a href="product-sofas.html" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Collaborative</a></li>
                                                <li><a href="product-sofas.html" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Pouffe</a></li>
                                                <li><a href="product-sofas.html" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Occasional Tables</a></li>
                                            </ul>
                                        </div>

                                        <!-- 6. Pods & Environment -->
                                        <div>
                                            <a href="product-categories.html#pods" class="mega-category-title d-block" style="font-size: 15px !important; font-weight: 700 !important;">Pods &amp; Environment</a>
                                            <ul class="mega-subcategory-list">
                                                <li><a href="product-catalogue-view.html?cat=Acoustic%20Pods" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Pods</a></li>
                                                <li><a href="product-catalogue-view.html?cat=Interface%20Carpets" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Carpets</a></li>
                                                <li><a href="product-categories.html#outdoor" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Outdoor</a></li>
                                            </ul>
                                        </div>

                                        <!-- 7. Educational -->
                                        <div>
                                            <a href="product-categories.html#educational" class="mega-category-title d-block" style="font-size: 15px !important; font-weight: 700 !important;">Educational</a>
                                            <ul class="mega-subcategory-list">
                                                <li><a href="product-categories.html#educational" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Classroom</a></li>
                                                <li><a href="product-categories.html#educational" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Library</a></li>
                                                <li><a href="product-categories.html#educational" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Hostel</a></li>
                                                <li><a href="product-categories.html#educational" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Auditorium</a></li>
                                            </ul>
                                        </div>

                                        <!-- 8. Accessories -->
                                        <div>
                                            <a href="product-categories.html#accessories" class="mega-category-title d-block" style="font-size: 15px !important; font-weight: 700 !important;">Accessories</a>
                                            <ul class="mega-subcategory-list">
                                                <li><a href="product-categories.html#accessories" class="text-dark" style="font-size: 14.5px !important; font-weight: 600 !important; color: #333333 !important;">&bull; Accessories</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </li>

                            <!-- 4. Contact Us -->
                            <li class="text-menu menu-item">
                                <a href="contact.html" class="item-link fw-bold" style="font-size: 15px !important; font-weight: 700 !important; color: #222222 !important;">Contact Us</a>
                            </li>
                        </ul>
                    </nav>

                    <!-- Header Right CTA -->
                    <div class="header-right d-flex align-items-center gap-3">
                        <button type="button" class="nav-enquire-btn" data-bs-toggle="modal" data-bs-target="#enquireModal">
                            Enquire Now
                        </button>
                        <a href="#mobileMenu" data-bs-toggle="offcanvas" class="mobile-button d-xl-none text-dark fs-3">
                            <div class="burger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </header>
        <!-- End header -->
