import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://www.veneerdigital.co.za';

const routes = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/thank-you.html', changefreq: 'monthly', priority: '0.3' },
  { url: '/privacy-policy', changefreq: 'monthly', priority: '0.5' },
  { url: '/terms-and-conditions', changefreq: 'monthly', priority: '0.5' },
  { url: '/popia-compliance', changefreq: 'monthly', priority: '0.5' },
  { url: '/cookie-policy', changefreq: 'monthly', priority: '0.5' }
];

const today = new Date().toISOString().split('T')[0];

function generateSitemap() {
  const xmlItems = routes.map(route => {
    return `  <url>
    <loc>${DOMAIN}${route.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`;

  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
  console.log(`Successfully generated sitemap at ${sitemapPath}`);
}

generateSitemap();
