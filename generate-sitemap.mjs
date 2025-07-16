import { createClient } from '@sanity/client';
import { promises as fs } from 'fs';
import dotenv from 'dotenv';

// Load environment variables from your .env file
dotenv.config();

// --- Configuration ---
// Read the project ID from the loaded environment variables
const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = 'production';
const apiVersion = '2024-03-11';
const baseUrl = 'https://thomas.mafille.net'; // Your website's URL

// --- Validation ---
// Exit with an error if the project ID is not found
if (!projectId) {
  console.error('Error: VITE_SANITY_PROJECT_ID is not defined in your .env file.');
  console.error('Sitemap generation failed.');
  process.exit(1); // This stops the build process if the key is missing
}

// --- Sanity Client ---
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Use false for build scripts to ensure fresh data
});

async function generateSitemap() {
  console.log('Fetching data from Sanity to generate sitemap...');

  // Fetch all project slugs from Sanity
  const projects = await client.fetch(`*[_type == "project"]{"slug": slug.current}`);

  // Get the current date for the <lastmod> tag
  const today = new Date().toISOString().split('T')[0];

  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Project Pages -->
  ${projects
    .map(
      (project) => `
  <url>
    <loc>${baseUrl}/projects/${project.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}
</urlset>
  `.trim();

  // Write the sitemap to the public directory
  try {
    await fs.writeFile('public/sitemap.xml', sitemap);
    console.log('Sitemap generated successfully at public/sitemap.xml');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
