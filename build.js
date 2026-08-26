const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;

function compileFullHtml(pageFileName) {
    const srcPath = path.join(ROOT_DIR, pageFileName);
    if (!fs.existsSync(srcPath)) return null;

    let pageContent = fs.readFileSync(srcPath, 'utf8');

    // Read raw header.php and footer.php
    let headerContent = '';
    const headerPath = path.join(ROOT_DIR, 'header.php');
    if (fs.existsSync(headerPath)) {
        headerContent = fs.readFileSync(headerPath, 'utf8');
        // Remove php tags from header
        headerContent = headerContent.replace(/<\?php[\s\S]*?\?>/gi, '');
    }

    let footerContent = '';
    const footerPath = path.join(ROOT_DIR, 'footer.php');
    if (fs.existsSync(footerPath)) {
        footerContent = fs.readFileSync(footerPath, 'utf8');
        // Remove php tags from footer
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
    pageContent = pageContent.replace(/href="product-categories\.php"/g, 'href="product-categories.html"');
    pageContent = pageContent.replace(/href="product-sofas\.php"/g, 'href="product-sofas.html"');
    pageContent = pageContent.replace(/href="contact\.php"/g, 'href="contact.html"');

    return pageContent;
}

const pages = [
    { src: 'index.php', distHtml: 'index.html' },
    { src: 'about.php', distHtml: 'about.html' },
    { src: 'archlabs-catalogue.php', distHtml: 'archlabs-catalogue.html' },
    { src: 'product-categories.php', distHtml: 'product-categories.html' },
    { src: 'product-sofas.php', distHtml: 'product-sofas.html' },
    { src: 'contact.php', distHtml: 'contact.html' },
    { src: 'admin.php', distHtml: 'admin.html' }
];

pages.forEach(page => {
    const compiledHtml = compileFullHtml(page.src);
    if (compiledHtml) {
        // Write to distHtml (.html) for static hostings & Vercel
        fs.writeFileSync(path.join(ROOT_DIR, page.distHtml), compiledHtml, 'utf8');
        console.log(`Compiled ${page.src} -> ${page.distHtml} successfully.`);
    }
});

// Guarantee admin/index.html generation for Vercel static routing
const adminDir = path.join(ROOT_DIR, 'admin');
if (!fs.existsSync(adminDir)) {
    fs.mkdirSync(adminDir, { recursive: true });
}
if (fs.existsSync(path.join(ROOT_DIR, 'admin.html'))) {
    let adminHtml = fs.readFileSync(path.join(ROOT_DIR, 'admin.html'), 'utf8');
    adminHtml = adminHtml.replace(/href="admin\/css\/admin\.css"/g, 'href="css/admin.css"');
    adminHtml = adminHtml.replace(/src="admin\/js\/admin-app\.js"/g, 'src="js/admin-app.js"');
    adminHtml = adminHtml.replace(/src="images\//g, 'src="../images/');
    adminHtml = adminHtml.replace(/src="js\//g, 'src="../js/');
    adminHtml = adminHtml.replace(/href="images\//g, 'href="../images/');
    fs.writeFileSync(path.join(adminDir, 'index.html'), adminHtml, 'utf8');
    console.log('Compiled admin/index.html successfully.');
}

