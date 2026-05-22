import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import contactHandler from './api/contact.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const port = Number(process.env.PORT || 3000);
const hostname = process.env.HOSTNAME || '0.0.0.0';

const mimeTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.mjs', 'text/javascript; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.gif', 'image/gif'],
  ['.webp', 'image/webp'],
  ['.ico', 'image/x-icon'],
  ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2'],
]);

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(body));
}

function withVercelResponseHelpers(res) {
  res.status = (statusCode) => {
    res.statusCode = statusCode;
    return res;
  };
  res.json = (body) => {
    if (!res.headersSent) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
    }
    res.end(JSON.stringify(body));
    return res;
  };
  return res;
}

async function serveFile(res, requestedPath) {
  const pathname = decodeURIComponent(requestedPath);
  const relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const filePath = path.resolve(distDir, relativePath);

  if (!filePath.startsWith(distDir + path.sep)) {
    sendJson(res, 403, { ok: false, error: 'Forbidden' });
    return;
  }

  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) throw new Error('Not a file');

    const ext = path.extname(filePath).toLowerCase();
    const headers = {
      'Content-Type': mimeTypes.get(ext) || 'application/octet-stream',
    };

    if (pathname.startsWith('/assets/')) {
      headers['Cache-Control'] = 'public, max-age=31536000, immutable';
    }

    res.writeHead(200, headers);
    createReadStream(filePath).pipe(res);
  } catch {
    const indexPath = path.join(distDir, 'index.html');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    createReadStream(indexPath).pipe(res);
  }
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url || '/', 'http://localhost');

  try {
    if (url.pathname === '/api/contact') {
      await contactHandler(req, withVercelResponseHelpers(res));
      return;
    }

    if (url.pathname.startsWith('/api/')) {
      sendJson(res, 404, { ok: false, error: 'Not found' });
      return;
    }

    await serveFile(res, url.pathname);
  } catch (err) {
    console.error('[server] request failed', err);
    if (!res.headersSent) {
      sendJson(res, 500, { ok: false, error: 'Internal server error' });
    } else {
      res.end();
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`3.0 Labs server listening on http://${hostname}:${port}`);
});
