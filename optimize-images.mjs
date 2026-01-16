import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = './public/assets';
const outputDir = './public/assets-optimized';

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(assetsDir);

for (const file of files) {
  const inputPath = path.join(assetsDir, file);
  const ext = path.extname(file).toLowerCase();

  // Skip non-image files
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
    // Copy non-image files as-is
    fs.copyFileSync(inputPath, path.join(outputDir, file));
    console.log(`Copied: ${file}`);
    continue;
  }

  const outputName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const outputPath = path.join(outputDir, outputName);

  try {
    await sharp(inputPath)
      .resize(1920, 1080, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 80 })
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`✓ ${file} → ${outputName} (${savings}% smaller)`);
  } catch (err) {
    console.error(`✗ Error processing ${file}:`, err.message);
  }
}

console.log('\nDone! Optimized images are in:', outputDir);
