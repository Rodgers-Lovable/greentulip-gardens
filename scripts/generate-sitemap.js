import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL from company data
const BASE_URL = "https://greentulip.co.ke";

// Define your routes with their priorities and change frequencies
const routes = [
  {
    path: "/",
    priority: 1.0,
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/about",
    priority: 0.8,
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/experiences",
    priority: 0.9,
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/experiences/weddings",
    priority: 0.8,
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/experiences/picnics",
    priority: 0.8,
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/experiences/accommodation",
    priority: 0.8,
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/experiences/team-building",
    priority: 0.8,
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/experiences/photoshoots",
    priority: 0.8,
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/gallery",
    priority: 0.7,
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/book",
    priority: 0.9,
    changefreq: "daily",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/location",
    priority: 0.6,
    changefreq: "yearly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/faqs",
    priority: 0.6,
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/packages",
    priority: 0.8,
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/privacy",
    priority: 0.3,
    changefreq: "yearly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/terms",
    priority: 0.3,
    changefreq: "yearly",
    lastmod: new Date().toISOString().split("T")[0],
  },
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  const publicDir = path.join(__dirname, "..", "public");

  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemap);

  console.log("✅ Sitemap generated successfully at:", sitemapPath);
  console.log(`📄 Generated sitemap with ${routes.length} URLs`);

  return sitemap;
}

function generateRobotsTxt() {
  const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`;

  const publicDir = path.join(__dirname, "..", "public");
  const robotsPath = path.join(publicDir, "robots.txt");

  fs.writeFileSync(robotsPath, robots);
  console.log("✅ robots.txt generated successfully at:", robotsPath);
}

// Run the script
try {
  generateSitemap();
  generateRobotsTxt();
  console.log("\n🚀 SEO files generated successfully!");
} catch (error) {
  console.error("❌ Error generating sitemap:", error);
  process.exit(1);
}
