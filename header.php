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
    <meta name="description" content="Vishista Office Solutions Pvt Ltd offers premium office furniture, interior systems, and turnkey workspace solutions across Telangana and Andhra Pradesh.">
    <meta name="keywords" content="office furniture, workstations, executive tables, mesh chairs, lounge sofas, corporate interiors, Hyderabad, Secunderabad">
    
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
    <link rel="shortcut icon" href="images/logo/logo-mark.png">
    <link rel="apple-touch-icon-precomposed" href="images/logo/logo-mark.png">

    <style>
        .site-brand-logo {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none !important;
        }
        .site-brand-logo img {
            height: 48px;
            width: auto;
            object-fit: contain;
        }
        .brand-text-wrapper {
            display: flex;
            flex-direction: column;
        }
        .brand-main-title {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            font-size: 20px;
            font-weight: 800;
            color: #d32f2f;
            line-height: 1;
            letter-spacing: 0.5px;
        }
        .brand-sub-title {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            font-size: 9.5px;
            font-weight: 700;
            color: #555555;
            letter-spacing: 1.6px;
            margin-top: 3px;
        }
        .nav-enquire-btn {
            background-color: #d32f2f;
            color: #ffffff !important;
            padding: 10px 22px;
            border-radius: 4px;
            font-weight: 600;
            font-size: 14px;
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
        .mega-menu-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 24px;
            padding: 24px;
        }
        @media (max-width: 1200px) {
            .mega-menu-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        .mega-category-title {
            font-size: 14px;
            font-weight: 700;
            color: #111;
            margin-bottom: 12px;
            padding-bottom: 6px;
            border-bottom: 2px solid #d32f2f;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .mega-subcategory-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .mega-subcategory-list li {
            margin-bottom: 6px;
        }
        .mega-subcategory-list a {
            color: #555;
            font-size: 13px;
            text-decoration: none;
            transition: color 0.2s ease;
        }
        .mega-subcategory-list a:hover {
            color: #d32f2f;
            font-weight: 600;
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

        <!-- preload -->
        <div class="preload preload-container" id="preload">
            <div class="preload-logo">
                <div class="spinner"></div>
            </div>
        </div>
        <!-- /preload -->

        <!-- .header -->
        <header class="header header-sticky py-2">
            <div class="tf-container w-1750">
                <div class="header-inner d-flex align-items-center justify-content-between">
                    
                    <!-- Site Logo -->
                    <a href="index.html" class="site-brand-logo">
                        <img src="images/logo/logo-mark.png" alt="Vishista Logo">
                        <div class="brand-text-wrapper">
                            <span class="brand-main-title">VISHISTA</span>
                            <span class="brand-sub-title">OFFICE SOLUTIONS</span>
                        </div>
                    </a>

                    <!-- Navigation Bar -->
                    <nav class="main-menu d-none d-xl-block">
                        <ul class="navigation box-nav-menu d-flex align-items-center gap-4 list-unstyled mb-0">
                            <li class="text-menu menu-item">
                                <a href="index.html" class="item-link fw-semibold">Home</a>
                            </li>
                            <li class="text-menu menu-item">
                                <a href="about.html" class="item-link fw-semibold">About Us</a>
                            </li>
                            <li class="has-child text-menu menu-item position-relative">
                                <a href="product-categories.html" class="item-link fw-semibold">Products</a>
                                <div class="submenu sub-menu mega-menu" style="width: 100%; left: 0; right: 0;">
                                    <div class="tf-container w-1750">
                                        <div class="mega-menu-grid bg-white shadow-lg rounded-3">
                                            
                                            <!-- Workstations -->
                                            <div>
                                                <a href="product-categories.html#workstations" class="mega-category-title d-block">Workstations</a>
                                                <ul class="mega-subcategory-list">
                                                    <li><a href="product-categories.html#workstations">Height Adjustable Series</a></li>
                                                    <li><a href="product-categories.html#workstations">Desking Series</a></li>
                                                    <li><a href="product-categories.html#workstations">Panel Series</a></li>
                                                </ul>
                                            </div>

                                            <!-- Tables -->
                                            <div>
                                                <a href="product-categories.html#tables" class="mega-category-title d-block">Tables</a>
                                                <ul class="mega-subcategory-list">
                                                    <li><a href="product-categories.html#tables">Cabin Tables</a></li>
                                                    <li><a href="product-categories.html#tables">Meeting Tables</a></li>
                                                    <li><a href="product-categories.html#tables">Cafe Tables</a></li>
                                                    <li><a href="product-categories.html#tables">Training Tables</a></li>
                                                </ul>
                                            </div>

                                            <!-- Storage -->
                                            <div>
                                                <a href="product-categories.html#storage" class="mega-category-title d-block">Storage</a>
                                                <ul class="mega-subcategory-list">
                                                    <li><a href="product-categories.html#storage">Prelam Storage</a></li>
                                                    <li><a href="product-categories.html#storage">Metal Storage</a></li>
                                                    <li><a href="product-categories.html#storage">Compactor Storage</a></li>
                                                    <li><a href="product-categories.html#storage">Locker</a></li>
                                                </ul>
                                            </div>

                                            <!-- Seating -->
                                            <div>
                                                <a href="product-categories.html#seating" class="mega-category-title d-block">Seating</a>
                                                <ul class="mega-subcategory-list">
                                                    <li><a href="product-categories.html#seating">Mesh Chair</a></li>
                                                    <li><a href="product-categories.html#seating">Leather Chair</a></li>
                                                    <li><a href="product-categories.html#seating">Training Chair</a></li>
                                                    <li><a href="product-categories.html#seating">Cafe Chair</a></li>
                                                </ul>
                                            </div>

                                            <!-- Soft Seating -->
                                            <div>
                                                <a href="product-categories.html#soft-seating" class="mega-category-title d-block">Soft Seating</a>
                                                <ul class="mega-subcategory-list">
                                                    <li><a href="product-categories.html#soft-seating">Lounge</a></li>
                                                    <li><a href="product-categories.html#soft-seating">Sofa</a></li>
                                                    <li><a href="product-categories.html#soft-seating">Collaborative</a></li>
                                                    <li><a href="product-categories.html#soft-seating">Pouffe</a></li>
                                                    <li><a href="product-categories.html#soft-seating">Occasional Tables</a></li>
                                                </ul>
                                            </div>

                                            <!-- Pods -->
                                            <div>
                                                <a href="product-categories.html#pods" class="mega-category-title d-block">Pods</a>
                                                <ul class="mega-subcategory-list">
                                                    <li><a href="product-categories.html#pods">Acoustic Work Pods</a></li>
                                                    <li><a href="product-categories.html#pods">Meeting Pods</a></li>
                                                </ul>
                                            </div>

                                            <!-- Carpets -->
                                            <div>
                                                <a href="product-categories.html#carpets" class="mega-category-title d-block">Carpets</a>
                                                <ul class="mega-subcategory-list">
                                                    <li><a href="product-categories.html#carpets">Interface Carpet Tiles</a></li>
                                                </ul>
                                            </div>

                                            <!-- Outdoor -->
                                            <div>
                                                <a href="product-categories.html#outdoor" class="mega-category-title d-block">Outdoor</a>
                                                <ul class="mega-subcategory-list">
                                                    <li><a href="product-categories.html#outdoor">Loom Crafts Furniture</a></li>
                                                </ul>
                                            </div>

                                            <!-- Educational -->
                                            <div>
                                                <a href="product-categories.html#educational" class="mega-category-title d-block">Educational</a>
                                                <ul class="mega-subcategory-list">
                                                    <li><a href="product-categories.html#educational">Classroom</a></li>
                                                    <li><a href="product-categories.html#educational">Library</a></li>
                                                    <li><a href="product-categories.html#educational">Hostel</a></li>
                                                    <li><a href="product-categories.html#educational">Auditorium</a></li>
                                                </ul>
                                            </div>

                                            <!-- Accessories -->
                                            <div>
                                                <a href="product-categories.html#accessories" class="mega-category-title d-block">Accessories</a>
                                                <ul class="mega-subcategory-list">
                                                    <li><a href="product-categories.html#accessories">Monitor Arms & Power Modules</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="text-menu menu-item">
                                <a href="contact.html" class="item-link fw-semibold">Contact Us</a>
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
