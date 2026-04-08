/**
 * Converts, renames, and optimises all band photos for web use.
 * Outputs to public/images/ with clean sequential names.
 * Run: node process-images.mjs
 */

import sharp from "./node_modules/sharp/lib/index.js";
import { readdirSync, mkdirSync } from "fs";
import { join, extname } from "path";

const SRC = "./public/images";
const OUT = "./public/images";

const SUPPORTED = [".jpg", ".jpeg", ".heic", ".heif", ".png", ".webp"];

const files = readdirSync(SRC)
  .filter(f => SUPPORTED.includes(extname(f).toLowerCase()))
  .sort();

console.log(`Found ${files.length} images to process:\n`, files);

let idx = 1;
for (const file of files) {
  const src = join(SRC, file);
  const name = `photo-${String(idx).padStart(2, "0")}.jpg`;
  const dest = join(OUT, name);

  try {
    const meta = await sharp(src).metadata();
    const isLandscape = (meta.width ?? 0) >= (meta.height ?? 0);

    await sharp(src)
      .rotate()                          // auto-rotate from EXIF
      .resize({
        width: 1600,
        height: 1067,
        fit: isLandscape ? "cover" : "cover",
        position: "attention",           // smart crop — keeps faces
      })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(dest);

    console.log(`✅  ${file} → ${name}`);
    idx++;
  } catch (err) {
    console.error(`❌  Skipped ${file}:`, err.message);
  }
}

console.log(`\nDone. ${idx - 1} images written to public/images/`);
