import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import { THAI } from './src/data/languages/thai.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, 'public', 'audio', 'thai');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const downloadAudio = (url, filePath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download: ${response.statusCode}`));
                return;
            }
            const fileStream = fs.createWriteStream(filePath);
            response.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => { });
            reject(err);
        });
    });
};

const processThai = async () => {
    console.log('Re-downloading Thai audio with spaces preserved...');

    for (const charData of THAI.chars) {
        const charName = charData.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
        const filename = `${charName}.mp3`;
        const filePath = path.join(outputDir, filename);

        // Use thaiName if available, otherwise name. 
        // CRITICAL FIX: Do NOT remove spaces.
        // Google TTS handles 'ข ไข่' better than 'ขไข่'.
        const textToSpeak = charData.thaiName || charData.name;

        const url = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=th&dt=t&q=${encodeURIComponent(textToSpeak)}`;

        try {
            // console.log(`  Downloading ${filename} (${textToSpeak})...`);
            await downloadAudio(url, filePath);
            await new Promise(r => setTimeout(r, 200)); // Be nice
        } catch (error) {
            console.error(`  Error downloading ${charData.char}: ${error.message}`);
        }
    }
    console.log('Thai downloads complete!');
};

processThai();
