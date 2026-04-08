/**
 * Generates public/og-image.jpg — 1200×630
 * Run: node generate-og.mjs
 */

import sharp from "./node_modules/sharp/lib/index.js";

const W = 1200;
const H = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#3b0000"/>
      <stop offset="45%"  stop-color="#7f1d1d"/>
      <stop offset="100%" stop-color="#1c0a00"/>
    </linearGradient>
    <linearGradient id="bannerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#facc15" stop-opacity="0"/>
      <stop offset="20%"  stop-color="#facc15" stop-opacity="0.18"/>
      <stop offset="80%"  stop-color="#facc15" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#facc15" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   stop-color="#dc2626" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#dc2626" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Radial glow center -->
  <ellipse cx="600" cy="315" rx="480" ry="280" fill="url(#glow)"/>

  <!-- Serape stripe band: green / white / red / white / green -->
  <rect y="0"   width="${W}" height="18" fill="#166534" opacity="0.9"/>
  <rect y="18"  width="${W}" height="6"  fill="#ffffff" opacity="0.7"/>
  <rect y="24"  width="${W}" height="18" fill="#dc2626" opacity="0.9"/>
  <rect y="42"  width="${W}" height="6"  fill="#ffffff" opacity="0.7"/>
  <rect y="48"  width="${W}" height="18" fill="#166534" opacity="0.9"/>

  <rect y="${H - 66}" width="${W}" height="18" fill="#166534" opacity="0.9"/>
  <rect y="${H - 48}" width="${W}" height="6"  fill="#ffffff" opacity="0.7"/>
  <rect y="${H - 42}" width="${W}" height="18" fill="#dc2626" opacity="0.9"/>
  <rect y="${H - 24}" width="${W}" height="6"  fill="#ffffff" opacity="0.7"/>
  <rect y="${H - 18}" width="${W}" height="18" fill="#166534" opacity="0.9"/>

  <!-- Horizontal gold banner behind title -->
  <rect y="210" width="${W}" height="210" fill="url(#bannerGrad)"/>

  <!-- Decorative diamond row -->
  <g fill="#facc15" opacity="0.35">
    <polygon points="100,315 115,300 130,315 115,330"/>
    <polygon points="140,315 155,300 170,315 155,330"/>
    <polygon points="1030,315 1045,300 1060,315 1045,330"/>
    <polygon points="1070,315 1085,300 1100,315 1085,330"/>
  </g>

  <!-- Thin gold rule lines -->
  <line x1="80" y1="225" x2="1120" y2="225" stroke="#facc15" stroke-width="1" opacity="0.4"/>
  <line x1="80" y1="405" x2="1120" y2="405" stroke="#facc15" stroke-width="1" opacity="0.4"/>

  <!-- Main title shadow -->
  <text
    x="604" y="308"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="96"
    font-weight="bold"
    fill="#000000"
    fill-opacity="0.45"
    text-anchor="middle"
    dominant-baseline="middle"
    letter-spacing="1"
  >Mariachi Amigos LA</text>

  <!-- Main title -->
  <text
    x="600" y="304"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="96"
    font-weight="bold"
    fill="#ffffff"
    text-anchor="middle"
    dominant-baseline="middle"
    letter-spacing="1"
  >Mariachi Amigos LA</text>

  <!-- Tagline -->
  <text
    x="600" y="378"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="32"
    fill="#fca5a5"
    text-anchor="middle"
    dominant-baseline="middle"
    letter-spacing="3"
  >LOS ANGELES · EST. 2005</text>

  <!-- Divider dots -->
  <circle cx="530" cy="430" r="4" fill="#facc15" opacity="0.7"/>
  <circle cx="550" cy="430" r="4" fill="#dc2626" opacity="0.7"/>
  <circle cx="570" cy="430" r="4" fill="#166534" opacity="0.7"/>
  <circle cx="600" cy="430" r="6" fill="#facc15" opacity="0.9"/>
  <circle cx="630" cy="430" r="4" fill="#166534" opacity="0.7"/>
  <circle cx="650" cy="430" r="4" fill="#dc2626" opacity="0.7"/>
  <circle cx="670" cy="430" r="4" fill="#facc15" opacity="0.7"/>

  <!-- Phone -->
  <text
    x="600" y="490"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="26"
    fill="#fde68a"
    text-anchor="middle"
    dominant-baseline="middle"
    letter-spacing="3"
  >(323) 767-6657</text>

  <!-- URL -->
  <text
    x="600" y="530"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="18"
    fill="#ffffff"
    fill-opacity="0.45"
    text-anchor="middle"
    dominant-baseline="middle"
    letter-spacing="2"
  >mariachiamigosla.com</text>
</svg>`;

import { writeFileSync } from "fs";

sharp(Buffer.from(svg))
  .jpeg({ quality: 92 })
  .toFile("public/og-image.jpg")
  .then(() => console.log("✅  public/og-image.jpg created (1200×630)"))
  .catch((err) => { console.error("❌  Failed:", err); process.exit(1); });
