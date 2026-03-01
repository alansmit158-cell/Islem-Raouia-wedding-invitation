import { execSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync } from 'fs';

const inputPath = './frontend/public/image.png';
const outputPath = './frontend/public/poster.webp';

// Check if sharp is available
try {
    execSync('node -e "require(\'sharp\')"', { stdio: 'ignore' });
} catch {
    console.log('Installing sharp...');
    execSync('npm install sharp', { stdio: 'inherit' });
}

const sharp = (await import('sharp')).default;

await sharp(inputPath)
    .resize(1080, null, { withoutEnlargement: true })
    .webp({ quality: 40 })
    .toFile(outputPath);

const before = readFileSync(inputPath).length;
const after = readFileSync(outputPath).length;
console.log(`✅ Done! ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB`);
