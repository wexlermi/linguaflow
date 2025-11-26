import fs from 'fs';
import path from 'path';
import https from 'https';
import { THAI } from './src/data/languages/thai.js';

const downloadImage = (keyword, filepath) => {
    return new Promise((resolve, reject) => {
        const dir = path.dirname(filepath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        // Use loremflickr with keyword
        const url = `https://loremflickr.com/640/480/${encodeURIComponent(keyword)}`;
        const file = fs.createWriteStream(filepath);

        https.get(url, (response) => {
            // Handle redirects (loremflickr redirects to actual image)
            if (response.statusCode === 301 || response.statusCode === 302) {
                let redirectUrl = response.headers.location;
                if (!redirectUrl.startsWith('http')) {
                    redirectUrl = `https://loremflickr.com${redirectUrl}`;
                }

                https.get(redirectUrl, (redirectResponse) => {
                    if (redirectResponse.statusCode !== 200) {
                        reject(new Error(`Failed to download (redirect): ${redirectResponse.statusCode}`));
                        return;
                    }
                    redirectResponse.pipe(file);
                    file.on('finish', () => {
                        file.close();
                        console.log(`Downloaded: ${filepath}`);
                        resolve();
                    });
                }).on('error', (err) => {
                    fs.unlink(filepath, () => { });
                    console.error(`Error downloading (redirect) ${filepath}:`, err.message);
                    reject(err);
                });
                return;
            }

            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${filepath}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { });
            console.error(`Error downloading ${filepath}:`, err.message);
            reject(err);
        });
    });
};

const processImages = async () => {
    console.log('Starting image fetch...');
    const lang = THAI;
    const updates = [];

    for (const category of lang.vocabulary) {
        for (const item of category.items) {
            if (!item.imageSrc) {
                const filename = item.roman.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '') + '.jpg';
                const filepath = path.join(process.cwd(), 'public', 'images', 'thai', filename);
                const publicPath = `/images/thai/${filename}`;

                // Use meaning as keyword, maybe strip some words if needed
                const keyword = item.meaning.split('/')[0].trim(); // Handle "Sea/Beach" -> "Sea"

                console.log(`Fetching image for ${item.meaning} (${keyword})...`);

                try {
                    await downloadImage(keyword, filepath);
                    updates.push({
                        thai: item.thai,
                        imageSrc: publicPath
                    });
                    // Be nice to the server
                    await new Promise(resolve => setTimeout(resolve, 1000));
                } catch (err) {
                    console.error(`Failed to fetch image for ${item.meaning}:`, err.message);
                }
            }
        }
    }

    console.log('Image fetch complete!');
    console.log('Updates to apply to thai.js:');
    console.log(JSON.stringify(updates, null, 2));
};

processImages();
