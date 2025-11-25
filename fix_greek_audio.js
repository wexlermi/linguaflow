import fs from 'fs';
import path from 'path';
import https from 'https';
import { GREEK } from './src/data/languages/greek.js';

const AUDIO_DIR = path.join(process.cwd(), 'public', 'audio', 'greek');

if (!fs.existsSync(AUDIO_DIR)) {
    fs.mkdirSync(AUDIO_DIR, { recursive: true });
}

const downloadAudio = (text, filename) => {
    return new Promise((resolve, reject) => {
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=el&client=tw-ob`;
        const file = fs.createWriteStream(path.join(AUDIO_DIR, filename));

        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${filename} (${text})`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filename, () => { });
            console.error(`Error downloading ${filename}:`, err.message);
            reject(err);
        });
    });
};

const processGreek = async () => {
    console.log('Fixing Greek audio...');

    for (const char of GREEK.chars) {
        const filename = path.basename(char.audioSrc);
        // Use only the name (e.g., "Alpha") not the char (e.g., "Alpha Alpha")
        await downloadAudio(char.name, filename);
        // Add a small delay to be polite to the API
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log('Greek audio fix complete!');
};

processGreek();
