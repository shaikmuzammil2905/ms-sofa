const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

function compileFullHtml(pageFileName) {
    const srcPath = path.join(ROOT_DIR, pageFileName);
    if (!fs.existsSync(srcPath)) return null;

    let pageContent = fs.readFileSync(srcPath, 'utf8');

    // Read raw header.php and footer.php
    let headerContent = '';
    const headerPath = path.join(ROOT_DIR, 'header.php');
    if (fs.existsSync(headerPath)) {
        headerContent = fs.readFileSync(headerPath, 'utf8');
        headerContent = headerContent.replace(/<\?php[\s\S]*?\?>/gi, '');
    }

    let footerContent = '';
    const footerPath = path.join(ROOT_DIR, 'footer.php');
    if (fs.existsSync(footerPath)) {
        footerContent = fs.readFileSync(footerPath, 'utf8');
        footerContent = footerContent.replace(/<\?php[\s\S]*?\?>/gi, '');
    }

    // Resolve PHP includes inside page content
    const includeRegex = /<\?php\s+include(?:_once)?\s*[\('"]+([^'"]+)['"]+\)?;?\s*\?>/gi;
    pageContent = pageContent.replace(includeRegex, (match, includedFileName) => {
        if (includedFileName === 'header.php') return headerContent;
        if (includedFileName === 'footer.php') return footerContent;
        const targetPath = path.join(ROOT_DIR, includedFileName);
        if (fs.existsSync(targetPath)) {
            return fs.readFileSync(targetPath, 'utf8').replace(/<\?php[\s\S]*?\?>/gi, '');
        }
        return '';
    });

    // Remove any leftover PHP tags
    pageContent = pageContent.replace(/<\?php[\s\S]*?\?>/gi, '');

    // Standardize page links
    pageContent = pageContent.replace(/href="index\.php"/g, 'href="index.html"');
    pageContent = pageContent.replace(/href="about\.php"/g, 'href="about.html"');
    pageContent = pageContent.replace(/href="archlabs-catalogue\.php"/g, 'href="archlabs-catalogue.html"');
    pageContent = pageContent.replace(/href="categories\.php"/g, 'href="categories.html"');
    pageContent = pageContent.replace(/href="product-categories\.php"/g, 'href="product-categories.html"');
    pageContent = pageContent.replace(/href="products\.php"/g, 'href="products.html"');
    pageContent = pageContent.replace(/href="product-sofas\.php"/g, 'href="product-sofas.html"');
    pageContent = pageContent.replace(/href="contact\.php"/g, 'href="contact.html"');

    return pageContent;
}

function copyFolderRecursiveSync(source, target) {
    if (!fs.existsSync(source)) return;
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target, { recursive: true });
    }
    const files = fs.readdirSync(source);
    files.forEach((file) => {
        const curSource = path.join(source, file);
        const curTarget = path.join(target, file);
        if (fs.lstatSync(curSource).isDirectory()) {
            copyFolderRecursiveSync(curSource, curTarget);
        } else {
            fs.copyFileSync(curSource, curTarget);
        }
    });
}

if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

const pages = [
    { src: 'index.php', distHtml: 'index.html' },
    { src: 'about.php', distHtml: 'about.html' },
    { src: 'archlabs-catalogue.php', distHtml: 'archlabs-catalogue.html' },
    { src: 'product-categories.php', distHtml: 'product-categories.html' },
    { src: 'products.php', distHtml: 'products.html' },
    { src: 'product-sofas.php', distHtml: 'product-sofas.html' },
    { src: 'product-catalogue-view.php', distHtml: 'product-catalogue-view.html' },
    { src: 'contact.php', distHtml: 'contact.html' },
    { src: 'admin.php', distHtml: 'admin.html' }
];

pages.forEach(page => {
    const compiledHtml = compileFullHtml(page.src);
    if (compiledHtml) {
        fs.writeFileSync(path.join(ROOT_DIR, page.distHtml), compiledHtml, 'utf8');
        fs.writeFileSync(path.join(PUBLIC_DIR, page.distHtml), compiledHtml, 'utf8');
        console.log(`Compiled ${page.src} -> ${page.distHtml} successfully.`);
    }
});

// Guarantee admin/index.html generation for Vercel & Localhost
const adminDir = path.join(ROOT_DIR, 'admin');
if (!fs.existsSync(adminDir)) {
    fs.mkdirSync(adminDir, { recursive: true });
}
if (fs.existsSync(path.join(ROOT_DIR, 'admin.html'))) {
    const adminHtml = fs.readFileSync(path.join(ROOT_DIR, 'admin.html'), 'utf8');
    fs.writeFileSync(path.join(adminDir, 'index.html'), adminHtml, 'utf8');
    
    const publicAdminDir = path.join(PUBLIC_DIR, 'admin');
    if (!fs.existsSync(publicAdminDir)) fs.mkdirSync(publicAdminDir, { recursive: true });
    fs.writeFileSync(path.join(publicAdminDir, 'index.html'), adminHtml, 'utf8');
    console.log('Compiled admin/index.html successfully.');
}

// Copy static asset directories to public/
['css', 'images', 'icons', 'js', 'data', 'admin'].forEach(folder => {
    copyFolderRecursiveSync(path.join(ROOT_DIR, folder), path.join(PUBLIC_DIR, folder));
});
console.log('Copied static asset directories to public/ for Vercel deployment.');
