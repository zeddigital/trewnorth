/**
 * Generates the About page OG image (1280×720) by compositing
 * Darren's headshot onto a True North branded dark-navy background.
 *
 * Run: node scripts/gen-og-about.mjs
 */

import sharp from 'sharp';
import { readFileSync } from 'fs';

const W = 1280;
const H = 720;
const PHOTO_SLOT_W = 560;
const PHOTO_SLOT_H = H;
const INPUT_PHOTO = 'artifacts/true-north/public/darren-trew.webp';
const OUTPUT = 'artifacts/true-north/public/og-about.jpg';

// Resize photo to fill its slot (top-anchored to keep face visible)
const photoResized = await sharp(INPUT_PHOTO)
  .resize(PHOTO_SLOT_W, PHOTO_SLOT_H, { fit: 'cover', position: 'top' })
  .toBuffer();

// Gradient fade from navy → transparent (covers left edge of photo)
const fadeSvg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#0F2137" stop-opacity="1"/>
      <stop offset="60%"  stop-color="#0F2137" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#0F2137" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect x="${W - PHOTO_SLOT_W - 80}" y="0" width="${PHOTO_SLOT_W + 80}" height="${H}" fill="url(#fade)"/>
</svg>`);

// Text + brand layer
const textSvg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <!-- Cyan accent bar -->
  <rect x="64" y="64" width="4" height="56" fill="#00B4D8" rx="2"/>

  <!-- Brand name -->
  <text x="80" y="104" font-family="Georgia, serif" font-size="20" font-weight="bold"
        fill="#00B4D8" letter-spacing="3">TRUE NORTH ACCOUNTING</text>

  <!-- Name -->
  <text x="64" y="230" font-family="Georgia, serif" font-size="68" font-weight="bold"
        fill="#FFFFFF" letter-spacing="-1">Darren Trew</text>

  <!-- Title -->
  <text x="64" y="285" font-family="Georgia, serif" font-size="28"
        fill="#FFFFFF" opacity="0.88">Chartered Accountant</text>

  <!-- Divider -->
  <rect x="64" y="312" width="300" height="1" fill="#00B4D8" opacity="0.45"/>

  <!-- Credentials -->
  <text x="64" y="348" font-family="Arial, sans-serif" font-size="17"
        fill="#FFFFFF" opacity="0.68">CA ANZ · Registered Tax Agent · Xero Certified</text>

  <text x="64" y="374" font-family="Arial, sans-serif" font-size="17"
        fill="#FFFFFF" opacity="0.68">Beaumaris, Melbourne VIC</text>

  <!-- Tagline -->
  <text x="64" y="450" font-family="Georgia, serif" font-size="22"
        fill="#FFFFFF" opacity="0.55">25+ years helping Melbourne small</text>
  <text x="64" y="480" font-family="Georgia, serif" font-size="22"
        fill="#FFFFFF" opacity="0.55">businesses with confidence.</text>

  <!-- URL -->
  <text x="64" y="648" font-family="Arial, sans-serif" font-size="15"
        fill="#00B4D8" opacity="0.85">truenorthaccounting.com.au</text>
</svg>`);

await sharp({
  create: { width: W, height: H, channels: 3, background: '#0F2137' },
})
  .composite([
    { input: photoResized, left: W - PHOTO_SLOT_W, top: 0 },
    { input: fadeSvg,      left: 0, top: 0 },
    { input: textSvg,      left: 0, top: 0 },
  ])
  .jpeg({ quality: 90, mozjpeg: false })
  .toFile(OUTPUT);

console.log(`✓ OG image written to ${OUTPUT}`);
