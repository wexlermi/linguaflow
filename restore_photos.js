import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';
import { THAI } from './src/data/languages/thai.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, 'public', 'images', 'thai');

// Special mapping for abstract concepts to get better photos
const KEYWORD_MAPPING = {
    'Hello': 'greeting',
    'Thank you': 'gratitude',
    'Sorry': 'apology',
    'Yes': 'check_mark',
    'No': 'cross_mark',
    'Younger Sister': 'girl',
    'Older Brother': 'boy',
    'How much?': 'money',
    'Discount': 'sale_tag',
    'Expensive': 'luxury',
    'Cheap': 'bargain',
    'Today': 'calendar',
    'Tomorrow': 'sunrise',
    'Yesterday': 'sunset',
    'Morning': 'morning_sun',
    'Evening': 'evening_sky'
};

const downloadImage = (filename, keyword) => {
    // Default to photos (no extra keywords needed for loremflickr)
    const url = `https://loremflickr.com/320/240/${encodeURIComponent(keyword)}`;
    const filePath = path.join(IMAGES_DIR, filename);

    console.log(`Downloading ${filename} for keyword '${keyword}'...`);

    const file = fs.createWriteStream(filePath);

    const request = https.get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
            let redirectUrl = response.headers.location;
            if (redirectUrl.startsWith('/')) {
                redirectUrl = `https://loremflickr.com${redirectUrl}`;
            }
            // console.log(`Redirecting to: ${redirectUrl}`);
            https.get(redirectUrl, (redirectResponse) => {
                if (redirectResponse.statusCode !== 200) {
                    console.error(`Failed to download ${filename}: ${redirectResponse.statusCode}`);
                    return;
                }
                redirectResponse.pipe(file);
                file.on('finish', () => {
                    file.close(() => {
                        console.log(`Downloaded: ${filePath}`);
                    });
                });
            }).on('error', (err) => {
                fs.unlink(filePath, () => { });
                console.error(`Error downloading ${filename}: ${err.message}`);
            });
            return;
        }

        if (response.statusCode !== 200) {
            console.error(`Failed to download ${filename}: ${response.statusCode}`);
            return;
        }

        response.pipe(file);

        file.on('finish', () => {
            file.close(() => {
                console.log(`Downloaded: ${filePath}`);
            });
        });
    }).on('error', (err) => {
        fs.unlink(filePath, () => { });
        console.error(`Error downloading ${filename}: ${err.message}`);
    });
};

// Iterate through all categories and items
THAI.vocabulary.forEach(category => {
    category.items.forEach(item => {
        if (item.imageSrc) {
            const filename = path.basename(item.imageSrc);
            // Use mapped keyword if available, otherwise use meaning
            // Clean up meaning (e.g., "Sea/Beach" -> "Sea")
            let keyword = KEYWORD_MAPPING[item.meaning] || item.meaning.split('/')[0].trim();

            downloadImage(filename, keyword);
        }
    });
});
