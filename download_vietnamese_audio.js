import fs from 'fs';
import path from 'path';
import https from 'https';
import { VIETNAMESE } from './src/data/languages/vietnamese.js';

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

const processVietnamese = async () => {
    console.log('Starting Vietnamese audio download...');
    const lang = VIETNAMESE;

    for (const char of lang.chars) {
        if (char.audioSrc) {
            const filepath = path.join(process.cwd(), 'public', char.audioSrc);
            // Use the name for pronunciation (e.g., "Bê", "Xê")
            // For vowels, the name is usually the sound or close to it.
            const textToSpeak = char.name;

            try {
                await downloadAudio(textToSpeak, lang.langCode, filepath);
                await new Promise(resolve => setTimeout(resolve, 200));
            } catch (err) {
                console.error(`Failed to download audio for ${char.char}:`, err.message);
            }
        }
    }

    console.log('Vietnamese audio download complete!');
};

processVietnamese();
