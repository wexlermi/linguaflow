import fs from 'fs';
import path from 'path';
import https from 'https';
import { GERMAN } from './src/data/languages/german.js';

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

const processGerman = async () => {
    console.log('Starting German audio fix...');
    const lang = GERMAN;

    for (const char of lang.chars) {
        if (char.audioSrc) {
            const filepath = path.join(process.cwd(), 'public', char.audioSrc);
            // Use the name (e.g., "A", "Be", "Ce") to ensure single pronunciation
            // For Umlauts, "A Umlaut" might be read as "A Umlaut". 
            // Better to use the character itself for vowels if it's simple, or the German name.
            // "Ä" is "Ä". "ß" is "Eszett".

            let textToSpeak = char.name;

            // Refine textToSpeak for German specificities
            if (char.name.includes('Umlaut')) {
                textToSpeak = char.char.split(' ')[0]; // Use 'Ä', 'Ö', 'Ü' directly
            } else if (char.name === 'Eszett') {
                textToSpeak = 'Eszett';
            } else {
                // For A-Z, just use the letter. Google TTS usually pronounces single letters as their name.
                textToSpeak = char.char.split(' ')[0];
            }

            try {
                await downloadAudio(textToSpeak, lang.langCode, filepath);
                await new Promise(resolve => setTimeout(resolve, 200));
            } catch (err) {
                console.error(`Failed to download audio for ${char.char}:`, err.message);
            }
        }
    }

    console.log('German audio fix complete!');
};

processGerman();
