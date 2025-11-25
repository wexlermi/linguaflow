import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Import language data directly
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
const languagesDir = path.join(__dirname, 'src', 'data', 'languages');

const updateLanguageFile = (langKey, langData) => {
    if (langKey === 'GEORGIAN') return; // Already done manually

    const filePath = path.join(languagesDir, `${langData.id === 'jp' ? 'japanese' : langData.id}.js`);

    // Handle special case for 'jp' id vs 'japanese.js' filename if needed
    // Actually, let's just map keys to filenames to be safe
    const fileMap = {
        'THAI': 'thai.js',
        'VIETNAMESE': 'vietnamese.js',
        'GERMAN': 'german.js',
        'RUSSIAN': 'russian.js',
        'JAPANESE': 'japanese.js',
        'KOREAN': 'korean.js',
        'HINDI': 'hindi.js',
        'ARABIC': 'arabic.js',
        'HEBREW': 'hebrew.js',
        'GREEK': 'greek.js',
        'GEORGIAN': 'georgian.js',
        'ARMENIAN': 'armenian.js',
        'KHMER': 'khmer.js',
        'BURMESE': 'burmese.js'
    };

    const targetFile = path.join(languagesDir, fileMap[langKey]);

    if (!fs.existsSync(targetFile)) {
        console.error(`File not found: ${targetFile}`);
        return;
    }

    let content = fs.readFileSync(targetFile, 'utf8');

    // We need to inject audioSrc into the chars array objects.
    // Regex approach: look for { char: ... } and inject audioSrc if missing.
    // But we need the 'name' to construct the path.
    // This is tricky with regex. 
    // Better approach: Re-serialize the chars array? No, that destroys formatting.
    // Let's use a smart regex replace line by line.

    const lines = content.split('\n');
    const newLines = lines.map(line => {
        if (line.trim().startsWith('{ char:') && !line.includes('audioSrc:')) {
            // Extract name
            const nameMatch = line.match(/name:\s*['"]([^'"]+)['"]/);
            if (nameMatch) {
                const name = nameMatch[1];
                const sanitizedName = name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
                const audioPath = `/audio/${langData.id}/${sanitizedName}.mp3`;

                // Insert before the closing brace
                return line.replace(/}(\s*,?)$/, `, audioSrc: '${audioPath}' }$1`);
            }
        }
        return line;
    });

    fs.writeFileSync(targetFile, newLines.join('\n'));
    console.log(`Updated ${fileMap[langKey]}`);
};

for (const langKey in LANGUAGES) {
    updateLanguageFile(langKey, LANGUAGES[langKey]);
}
