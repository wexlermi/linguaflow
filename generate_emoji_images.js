import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, 'public', 'images', 'thai');

// Emoji mapping for each vocabulary word
const emojiMap = {
    // Greetings
    'sawatdee': '👋',
    'khop_khun': '🙏',
    'khor_thot': '😔',
    'chai': '✅',
    'mai': '❌',

    // Essentials
    'hong_nam': '🚻',
    'nam': '💧',
    'khao': '🍚',
    'aroi': '😋',
    'thao_rai': '💰',

    // Colors
    'si_daeng': '🔴',
    'si_khiao': '🟢',
    'si_nam_ngoen': '🔵',
    'si_khao': '⚪',
    'si_dam': '⚫',

    // Food
    'pad_thai': '🍜',
    'som_tum': '🥗',
    'tom_yum': '🍲',
    'mango_sticky_rice': '🥭',

    // Travel
    'sanam_bin': '✈️',
    'rong_raem': '🏨',
    'tua': '🎫',
    'tuk_tuk': '🛺',
    'rot_me': '🚌',

    // Shopping
    'ngoen': '💵',
    'phaeng': '💎',
    'thuk': '🏷️',
    'lot_rakha': '🎯',
    'ran_kha': '🏪',

    // Family
    'phor': '👨',
    'mae': '👩',
    'phi_chai': '👦',
    'nong_sao': '👧',
    'luk': '👶',

    // Time
    'wan_ni': '📅',
    'phrung_ni': '🌅',
    'muea_wan': '🌄',
    'ton_chao': '☀️',
    'ton_yen': '🌆',

    // Places
    'rong_rian': '🏫',
    'rong_phayaban': '🏥',
    'talat': '🛒',
    'thai_temple': '🛕',
    'thale': '🏖️',

    // Animals
    'ma': '🐕',
    'maew': '🐈',
    'elephant': '🐘',
    'nok': '🐦',
    'pla': '🐟'
};

function generateEmojiImage(emoji, filename) {
    const canvas = createCanvas(320, 240);
    const ctx = canvas.getContext('2d');

    // White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 320, 240);

    // Set font size for emoji (very large)
    ctx.font = '120px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw emoji in center
    ctx.fillText(emoji, 160, 120);

    // Save to file
    const filepath = path.join(IMAGES_DIR, filename);
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(filepath, buffer);
    console.log(`Generated: ${filepath}`);
}

// Generate all images
console.log('Generating emoji-based images...');
for (const [filename, emoji] of Object.entries(emojiMap)) {
    generateEmojiImage(emoji, `${filename}.jpg`);
}
console.log('Complete!');
