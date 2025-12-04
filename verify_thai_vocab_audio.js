import fs from 'fs';
import path from 'path';
import { THAI } from './src/data/languages/thai.js';

const verifyAudio = () => {
    console.log('Verifying Thai vocabulary audio...');
    let missingCount = 0;
    let successCount = 0;

    THAI.vocabulary.forEach(category => {
        console.log(`Checking category: ${category.category}`);
        category.items.forEach(item => {
            if (item.audioSrc) {
                const filepath = path.join(process.cwd(), 'public', item.audioSrc);
                if (fs.existsSync(filepath)) {
                    const stats = fs.statSync(filepath);
                    if (stats.size > 0) {
                        successCount++;
                    } else {
                        console.error(`❌ Empty file: ${item.thai} (${item.meaning}) -> ${filepath}`);
                        missingCount++;
                    }
                } else {
                    console.error(`❌ Missing file: ${item.thai} (${item.meaning}) -> ${filepath}`);
                    missingCount++;
                }
            } else {
                console.warn(`⚠️ No audioSrc defined for: ${item.thai} (${item.meaning})`);
            }
        });
    });

    console.log('--- Verification Summary ---');
    console.log(`✅ Found: ${successCount}`);
    console.log(`❌ Missing/Empty: ${missingCount}`);

    if (missingCount === 0) {
        console.log('🎉 All audio files verified successfully!');
    } else {
        console.error('⚠️ Some audio files are missing or empty.');
        process.exit(1);
    }
};

verifyAudio();
