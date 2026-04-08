/**
 * Generates public/og-image.jpg — a 1200×630 dark-red gradient with
 * "Mariachi Amigos LA" text, using the `sharp` package already present
 * in node_modules (installed by Next.js image optimisation).
 *
 * Run once: node generate-og.mjs
 */

import sharp from "./node_modules/sharp/lib/index.js";
import { writeFileSync } from "fs";

const W = 1200;
const H = 630;

// Build an SVG that sharp can rasterise — no native canvas needed.
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#7f0000"/>
      <stop offset="50%"  stop-color="#b91c1c"/>
      <stop offset="100%" stop-color="#450a0a"/>
    </linearGradient>
    <linearGradient id="stripe" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"   stop-color="#facc15" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#facc15" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- background gradient -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- decorative horizontal stripe -->
  <rect y="240" width="${W}" height="150" fill="url(#stripe)"/>

  <!-- subtle border lines -->
  <rect y="50"       width="${W}" height="4" fill="#facc15" opacity="0.6"/>
  <rect y="${H - 54}" width="${W}" height="4" fill="#facc15" opacity="0.6"/>

  <!-- main title -->
  <text
    x="${W / 2}" y="290"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="88"
    font-weight="bold"
    fill="#ffffff"
    text-anchor="middle"
    dominant-baseline="middle"
    letter-spacing="2"
  >Mariachi Amigos LA</text>

  <!-- tagline -->
  <text
    x="${W / 2}" y="385"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="36"
    fill="#fca5a5"
    text-anchor="middle"
    dominant-baseline="middle"
    letter-spacing="1"
  >Professional Mariachi Band · Los Angeles</text>

  <!-- phone -->
  <text
    x="${W / 2}" y="460"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="28"
    fill="#fde68a"
    text-anchor="middle"
    dominant-baseline="middle"
    letter-spacing="2"
  >(323) 767-6657</text>
</svg>`;

const buf = Buffer.from(svg);

sharp(buf)
  .jpeg({ quality: 90 })
  .toFile("public/og-image.jpg")
  .then(() => console.log("✅  public/og-image.jpg created (1200×630)"))
  .catch((err) => { console.error("❌  Failed:", err); process.exit(1); });
