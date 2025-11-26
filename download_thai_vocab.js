import fs from 'fs';
import path from 'path';
import https from 'https';
import { THAI } from './src/data/languages/thai.js';

const downloadAudio = (text, langCode, filepath) => {
    return new Promise((resolve, reject) => {
        const dir = path.dirname(filepath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${langCode}&client=tw-ob`;
        const file = fs.createWriteStream(filepath);

        https.get(url, (response) => {
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

const processThaiVocab = async () => {
    console.log('Starting Thai vocabulary audio download...');
    const lang = THAI;

    if (!lang.vocabulary) {
        console.log('No vocabulary found.');
        return;
    }

    for (const category of lang.vocabulary) {
        console.log(`Processing category: ${category.category}`);
        for (const item of category.items) {
            if (item.audioSrc) {
                const filepath = path.join(process.cwd(), 'public', item.audioSrc);

                // Skip if already exists to save time/bandwidth, or force overwrite if needed.
                // For this task, we'll check existence.
                if (fs.existsSync(filepath)) {
                    // console.log(`Skipping existing: ${item.thai}`);
                    continue;
                }

                try {
                    await downloadAudio(item.thai, lang.langCode, filepath);
                    await new Promise(resolve => setTimeout(resolve, 200));
                } catch (err) {
                    console.error(`Failed to download audio for ${item.thai}:`, err.message);
                }
            }
        }
    }

    console.log('Thai vocabulary audio download complete!');
};

processThaiVocab();
