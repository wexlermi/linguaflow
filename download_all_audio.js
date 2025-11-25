import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// Import language data directly with extensions for Node.js compatibility
import { THAI } from './src/data/languages/thai.js';
import { VIETNAMESE } from './src/data/languages/vietnamese.js';
import { GERMAN } from './src/data/languages/german.js';
import { RUSSIAN } from './src/data/languages/russian.js';
import { JAPANESE } from './src/data/languages/japanese.js';
import { KOREAN } from './src/data/languages/korean.js';
import { HINDI } from './src/data/languages/hindi.js';
import { ARABIC } from './src/data/languages/arabic.js';
import { HEBREW } from './src/data/languages/hebrew.js';
import { GREEK } from './src/data/languages/greek.js';
import { GEORGIAN } from './src/data/languages/georgian.js';
import { ARMENIAN } from './src/data/languages/armenian.js';
import { KHMER } from './src/data/languages/khmer.js';
import { BURMESE } from './src/data/languages/burmese.js';

const LANGUAGES = {
    THAI, VIETNAMESE, GERMAN, RUSSIAN, JAPANESE, KOREAN, HINDI,
    ARABIC, HEBREW, GREEK, GEORGIAN, ARMENIAN, KHMER, BURMESE
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseOutputDir = path.join(__dirname, 'public', 'audio');

// Hack mapping from audio.js
const NETWORK_LANG_MAPPING = {
    'ka': 'ru',
    'hy': 'ru',
};

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

const processAllLanguages = async () => {
    for (const langKey in LANGUAGES) {
        const lang = LANGUAGES[langKey];
        if (lang.comingSoon) continue;

        console.log(`Processing ${lang.name} (${lang.id})...`);
        const langDir = path.join(baseOutputDir, lang.id);

        if (!fs.existsSync(langDir)) {
            fs.mkdirSync(langDir, { recursive: true });
        }

        for (const charData of lang.chars) {
            const charName = charData.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase(); // Sanitize filename
            const filename = `${charName}.mp3`;
            const filePath = path.join(langDir, filename);

            // Skip if already exists (optional, but good for retries)
            if (fs.existsSync(filePath)) {
                // console.log(`  Skipping ${filename} (exists)`);
                continue;
            }

            let textToSpeak = charData.char;
            // Thai logic from audio.js
            if (lang.id === 'thai') {
                textToSpeak = (charData.thaiName || charData.name).replace(/\s/g, '');
            } else if (lang.id === 'vietnamese') {
                // Match logic in LanguageModule.jsx
                textToSpeak = (charData.type === 'Tone' || charData.type === 'Grammar') ? charData.char : charData.char;
            }

            let langCode = lang.langCode;
            let isoCode = langCode.split('-')[0];

            // Apply hack mapping
            if (NETWORK_LANG_MAPPING[isoCode]) {
                isoCode = NETWORK_LANG_MAPPING[isoCode];
            }

            // Construct URL
            // Use translate.googleapis.com with client=gtx for reliability
            const url = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=${isoCode}&dt=t&q=${encodeURIComponent(textToSpeak)}`;

            try {
                // console.log(`  Downloading ${filename}...`);
                await downloadAudio(url, filePath);
                // Be nice to the API
                await new Promise(r => setTimeout(r, 200));
            } catch (error) {
                console.error(`  Error downloading ${charData.char} (${filename}): ${error.message}`);
            }
        }
    }
    console.log('All downloads complete!');
};

processAllLanguages();
