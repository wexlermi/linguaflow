import fs from 'fs';
import path from 'path';
import https from 'https';
import { THAI } from './src/data/languages/thai.js';
import { GREEK } from './src/data/languages/greek.js';
import { GERMAN } from './src/data/languages/german.js';
import { RUSSIAN } from './src/data/languages/russian.js';
import { JAPANESE } from './src/data/languages/japanese.js';
import { VIETNAMESE } from './src/data/languages/vietnamese.js';

const languages = [THAI, GREEK, GERMAN, RUSSIAN, JAPANESE, VIETNAMESE];

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

const processLanguages = async () => {
    console.log('Starting example audio download...');

    for (const lang of languages) {
        console.log(`Processing ${lang.name}...`);
        for (const char of lang.chars) {
            if (char.exampleWord && char.exampleWordAudioSrc) {
                const filepath = path.join(process.cwd(), 'public', char.exampleWordAudioSrc);

                // Skip if already exists to save time/bandwidth, unless forced
                // For now, we'll just download everything to be safe
                try {
                    await downloadAudio(char.exampleWord, lang.langCode, filepath);
                    // Polite delay
                    await new Promise(resolve => setTimeout(resolve, 200));
                } catch (err) {
                    console.error(`Failed to download audio for ${char.exampleWord} in ${lang.name}:`, err.message);
                }
            }
        }
    }

    console.log('All downloads complete!');
};

processLanguages();
