const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.php': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'font/otf',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm'
};

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

    return content;
}

const server = http.createServer((req, res) => {
    let parsedUrl = url.parse(req.url);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // Route /admin or /admin/ to Admin Panel SPA (preserving static files like /admin/css/ or /admin/js/)
    if ((pathname === '/admin' || pathname === '/admin/') && !path.extname(pathname)) {
        let adminPath = path.join(ROOT_DIR, 'admin', 'index.html');
        if (!fs.existsSync(adminPath)) {
            adminPath = path.join(ROOT_DIR, 'admin.html');
        }
        if (fs.existsSync(adminPath)) {
            const htmlOutput = fs.readFileSync(adminPath, 'utf8');
            res.writeHead(200, { 'Content-Type': MIME_TYPES['.html'] });
            res.end(htmlOutput);
            return;
        }
    }

    if (pathname === '/') {
        pathname = '/index.php';
    }

    let targetPath = path.join(ROOT_DIR, pathname);

    // Prevent directory traversal
    if (!targetPath.startsWith(ROOT_DIR)) {
        res.statusCode = 403;
        res.end('Forbidden');
        return;
    }

    // Check if path exists
    fs.stat(targetPath, (err, stats) => {
        if (err || stats.isDirectory()) {
            if (stats && stats.isDirectory()) {
                targetPath = path.join(targetPath, 'index.php');
            } else {
                res.statusCode = 404;
                res.end('File Not Found');
                return;
            }
        }

        const ext = path.extname(targetPath).toLowerCase();

        if (ext === '.php' || ext === '.html') {
            const htmlOutput = renderPhpFile(targetPath);
            if (htmlOutput === null) {
                res.statusCode = 404;
                res.end('Page Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': MIME_TYPES['.html'] });
                res.end(htmlOutput);
            }
        } else {
            const mimeType = MIME_TYPES[ext] || 'application/octet-stream';
            fs.readFile(targetPath, (readErr, data) => {
                if (readErr) {
                    res.statusCode = 404;
                    res.end('Asset Not Found');
                } else {
                    res.writeHead(200, { 'Content-Type': mimeType });
                    res.end(data);
                }
            });
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
