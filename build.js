const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;

function renderPhpFile(filePath) {
    if (!fs.existsSync(filePath)) {
        return null;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Recursively resolve PHP includes (e.g. <?php include('header.php');?> or include_once "...")
    const includeRegex = /<\?php\s+include(?:_once)?\s*[\('"]+([^'"]+)['"]+\)?;?\s*\?>/gi;
    
    content = content.replace(includeRegex, (match, includedFileName) => {
        const targetPath = path.resolve(path.dirname(filePath), includedFileName);
        if (fs.existsSync(targetPath)) {
            return renderPhpFile(targetPath);
        }
        return '';
    });

    // Remove any remaining PHP tags or blocks
    content = content.replace(/<\?php[\s\S]*?\?>/gi, '');

    // Replace .php link references with .html for static deployment compatibility
    content = content.replace(/href="index\.php"/g, 'href="index.html"');
    content = content.replace(/href="product-categories\.php"/g, 'href="product-categories.html"');
    content = content.replace(/href="product-sofas\.php"/g, 'href="product-sofas.html"');

    return content;
}

const filesToBuild = [
    { src: 'index.php', dist: 'index.html' },
    { src: 'product-categories.php', dist: 'product-categories.html' },
    { src: 'product-sofas.php', dist: 'product-sofas.html' }
];

filesToBuild.forEach(file => {
    const srcPath = path.join(ROOT_DIR, file.src);
    const distPath = path.join(ROOT_DIR, file.dist);
    const renderedContent = renderPhpFile(srcPath);
    if (renderedContent) {
        fs.writeFileSync(distPath, renderedContent, 'utf8');
        console.log(`Generated ${file.dist} from ${file.src}`);
    } else {
        console.error(`Failed to generate ${file.dist}`);
    }
});
