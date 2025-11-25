import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// Manually defining the characters to avoid importing the whole app structure in this script
const georgianChars = [
    { char: 'ა', name: 'an' }, { char: 'ბ', name: 'ban' }, { char: 'g', name: 'gan' }, { char: 'დ', name: 'don' },
    { char: 'ე', name: 'en' }, { char: 'ვ', name: 'vin' }, { char: 'ზ', name: 'zen' }, { char: 'თ', name: 'tan' },
    { char: 'ი', name: 'in' }, { char: 'კ', name: 'kan' }, { char: 'ლ', name: 'las' }, { char: 'მ', name: 'man' },
    { char: 'ნ', name: 'nar' }, { char: 'ო', name: 'on' }, { char: 'პ', name: 'par' }, { char: 'ჟ', name: 'zhar' },
    { char: 'რ', name: 'rae' }, { char: 'ს', name: 'san' }, { char: 'ტ', name: 'tar' }, { char: 'უ', name: 'un' },
    { char: 'ფ', name: 'phar' }, { char: 'ქ', name: 'khar' }, { char: 'ღ', name: 'ghan' }, { char: 'ყ', name: 'qar' },
    { char: 'შ', name: 'shin' }, { char: 'ჩ', name: 'chin' }, { char: 'ც', name: 'can' }, { char: 'ძ', name: 'jil' },
    { char: 'წ', name: 'cil' }, { char: 'ჭ', name: 'char' }, { char: 'ხ', name: 'xan' }, { char: 'ჯ', name: 'jhan' },
    { char: 'ჰ', name: 'hae' }
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, 'public', 'audio', 'ka');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const downloadAudio = (char, filename) => {
    // Using the Russian endpoint hack
    const url = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=ru&dt=t&q=${encodeURIComponent(char)}`;
    const filePath = path.join(outputDir, `${filename}.mp3`);

    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${char}: ${response.statusCode}`));
                return;
            }
            const fileStream = fs.createWriteStream(filePath);
            response.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded: ${filename}.mp3`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => { });
            reject(err);
        });
    });
};

const processDownloads = async () => {
    for (const item of georgianChars) {
        try {
            await downloadAudio(item.char, item.name);
            // Be nice to the API
            await new Promise(r => setTimeout(r, 500));
        } catch (error) {
            console.error(error.message);
        }
    }
    console.log('All downloads complete!');
};

processDownloads();
