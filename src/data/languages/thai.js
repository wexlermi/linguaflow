export const THAI = {
    id: 'thai',
    name: 'Thai',
    nativeName: 'ไทย',
    scriptName: 'Thai Script',
    desc: 'The beautiful looped script of Thailand. 44 Consonants.',
    langCode: 'th-TH',
    fontA: 'font-sarabun', // Traditional (Looped)
    fontB: 'font-kanit',   // Modern (Loopless)
    fontHand: 'font-mali', // Handwritten
    fontOld: 'font-charm', // Old Fashioned
    exampleText: 'สวัสดีครับ',
    exampleMeaning: 'Hello (Sawatdee)',
    styleALabel: 'Traditional',
    styleBLabel: 'Modern',
    styleHandLabel: 'Handwritten',
    styleOldLabel: 'Old Fashioned',
};

const chars = [
    // --- Consonants ---
    { char: 'ก', name: 'Gor Gai', thaiName: 'ก ไก่', meaning: 'Chicken', class: 'Mid', sound: 'k', emoji: '🐔', type: 'Consonant', audioSrc: '/audio/thai/gor_gai.mp3' },
    { char: 'ข', name: 'Khor Khai', thaiName: 'ข ไข่', meaning: 'Egg', class: 'High', sound: 'kh', emoji: '🥚', type: 'Consonant', audioSrc: '/audio/thai/khor_khai.mp3' },
    { char: 'ฃ', name: 'Khor Khuad', thaiName: 'ฃ ขวด', meaning: 'Bottle (Obs)', class: 'High', sound: 'kh', emoji: '🍾', type: 'Consonant', audioSrc: '/audio/thai/khor_khuad.mp3' },
    { char: 'ค', name: 'Khor Khwai', thaiName: 'ค ควาย', meaning: 'Buffalo', class: 'Low', sound: 'kh', emoji: '🐃', type: 'Consonant', audioSrc: '/audio/thai/khor_khwai.mp3' },
    { char: 'ฅ', name: 'Khor Khon', thaiName: 'ฅ คน', meaning: 'Person (Obs)', class: 'Low', sound: 'kh', emoji: '👤', type: 'Consonant', audioSrc: '/audio/thai/khor_khon.mp3' },
    { char: 'ฆ', name: 'Khor Rakhang', thaiName: 'ฆ ระฆัง', meaning: 'Bell', class: 'Low', sound: 'kh', emoji: '🔔', type: 'Consonant', audioSrc: '/audio/thai/khor_rakhang.mp3' },
    { char: 'ง', name: 'Ngor Ngu', thaiName: 'ง งู', meaning: 'Snake', class: 'Low', sound: 'ng', emoji: '🐍', type: 'Consonant', audioSrc: '/audio/thai/ngor_ngu.mp3' },
    { char: 'จ', name: 'Jor Jaan', thaiName: 'จ จาน', meaning: 'Plate', class: 'Mid', sound: 'j', emoji: '🍽️', type: 'Consonant', audioSrc: '/audio/thai/jor_jaan.mp3' },
    { char: 'ฉ', name: 'Chor Ching', thaiName: 'ฉ ฉิ่ง', meaning: 'Cymbals', class: 'High', sound: 'ch', emoji: '🥁', type: 'Consonant', audioSrc: '/audio/thai/chor_ching.mp3' },
    { char: 'ช', name: 'Chor Chang', thaiName: 'ช ช้าง', meaning: 'Elephant', class: 'Low', sound: 'ch', emoji: '🐘', type: 'Consonant', audioSrc: '/audio/thai/chor_chang.mp3' },
    { char: 'ซ', name: 'Sor So', thaiName: 'ซ โซ่', meaning: 'Chain', class: 'Low', sound: 's', emoji: '🔗', type: 'Consonant', audioSrc: '/audio/thai/sor_so.mp3' },
    { char: 'ฌ', name: 'Chor Cher', thaiName: 'ฌ เฌอ', meaning: 'Tree', class: 'Low', sound: 'ch', emoji: '🌳', type: 'Consonant', audioSrc: '/audio/thai/chor_cher.mp3' },
    { char: 'ญ', name: 'Yor Ying', thaiName: 'ญ หญิง', meaning: 'Woman', class: 'Low', sound: 'y', emoji: '👩', type: 'Consonant', audioSrc: '/audio/thai/yor_ying.mp3' },
    { char: 'ฎ', name: 'Dor Chada', thaiName: 'ฎ ชฎา', meaning: 'Headdress', class: 'Mid', sound: 'd', emoji: '👑', type: 'Consonant', audioSrc: '/audio/thai/dor_chada.mp3' },
    { char: 'ฏ', name: 'Tor Patak', thaiName: 'ฏ ปฏัก', meaning: 'Goad/Spear', class: 'Mid', sound: 't', emoji: '🔱', type: 'Consonant', audioSrc: '/audio/thai/tor_patak.mp3' },
    { char: 'ฐ', name: 'Thor Than', thaiName: 'ฐ ฐาน', meaning: 'Pedestal', class: 'High', sound: 'th', emoji: '🏛️', type: 'Consonant', audioSrc: '/audio/thai/thor_than.mp3' },
    { char: 'ฑ', name: 'Thor Montho', thaiName: 'ฑ มณโฑ', meaning: 'Montho (Character)', class: 'Low', sound: 'th', emoji: '👸', type: 'Consonant', audioSrc: '/audio/thai/thor_montho.mp3' },
    { char: 'ฒ', name: 'Thor Phuthao', thaiName: 'ฒ ผู้เฒ่า', meaning: 'Elder', class: 'Low', sound: 'th', emoji: '👴', type: 'Consonant', audioSrc: '/audio/thai/thor_phuthao.mp3' },
    { char: 'ณ', name: 'Nor Nen', thaiName: 'ณ เณร', meaning: 'Novice Monk', class: 'Low', sound: 'n', emoji: '🧘', type: 'Consonant', audioSrc: '/audio/thai/nor_nen.mp3' },
    { char: 'ด', name: 'Dor Dek', thaiName: 'ด เด็ก', meaning: 'Child', class: 'Mid', sound: 'd', emoji: '👶', type: 'Consonant', audioSrc: '/audio/thai/dor_dek.mp3' },
    { char: 'ต', name: 'Tor Tao', thaiName: 'ต เต่า', meaning: 'Turtle', class: 'Mid', sound: 't', emoji: '🐢', type: 'Consonant', audioSrc: '/audio/thai/tor_tao.mp3' },
    { char: 'ถ', name: 'Thor Thung', thaiName: 'ถ ถุง', meaning: 'Sack/Bag', class: 'High', sound: 'th', emoji: '💰', type: 'Consonant', audioSrc: '/audio/thai/thor_thung.mp3' },
    { char: 'ท', name: 'Thor Thahan', thaiName: 'ท ทหาร', meaning: 'Soldier', class: 'Low', sound: 'th', emoji: '💂', type: 'Consonant', audioSrc: '/audio/thai/thor_thahan.mp3' },
    { char: 'ธ', name: 'Thor Thong', thaiName: 'ธ ธง', meaning: 'Flag', class: 'Low', sound: 'th', emoji: '🚩', type: 'Consonant', audioSrc: '/audio/thai/thor_thong.mp3' },
    { char: 'น', name: 'Nor Nu', thaiName: 'น หนู', meaning: 'Mouse', class: 'Low', sound: 'n', emoji: '🐭', type: 'Consonant', audioSrc: '/audio/thai/nor_nu.mp3' },
    { char: 'บ', name: 'Bor Baimai', thaiName: 'บ ใบไม้', meaning: 'Leaf', class: 'Mid', sound: 'b', emoji: '🍃', type: 'Consonant', audioSrc: '/audio/thai/bor_baimai.mp3' },
    { char: 'ป', name: 'Por Pla', thaiName: 'ป ปลา', meaning: 'Fish', class: 'Mid', sound: 'p', emoji: '🐟', type: 'Consonant', audioSrc: '/audio/thai/por_pla.mp3' },
    { char: 'ผ', name: 'Phor Phueng', thaiName: 'ผ ผึ้ง', meaning: 'Bee', class: 'High', sound: 'ph', emoji: '🐝', type: 'Consonant', audioSrc: '/audio/thai/phor_phueng.mp3' },
    { char: 'ฝ', name: 'For Fa', thaiName: 'ฝ ฝา', meaning: 'Lid', class: 'High', sound: 'f', emoji: '🥘', type: 'Consonant', audioSrc: '/audio/thai/for_fa.mp3' },
    { char: 'พ', name: 'Phor Phan', thaiName: 'พ พาน', meaning: 'Tray', class: 'Low', sound: 'ph', emoji: '🥣', type: 'Consonant', audioSrc: '/audio/thai/phor_phan.mp3' },
    { char: 'ฟ', name: 'For Fan', thaiName: 'ฟ ฟัน', meaning: 'Teeth', class: 'Low', sound: 'f', emoji: '🦷', type: 'Consonant', audioSrc: '/audio/thai/for_fan.mp3' },
    { char: 'ภ', name: 'Phor Samphao', thaiName: 'ภ สำเภา', meaning: 'Junk (Boat)', class: 'Low', sound: 'ph', emoji: '⛵', type: 'Consonant', audioSrc: '/audio/thai/phor_samphao.mp3' },
    { char: 'ม', name: 'Mor Ma', thaiName: 'ม ม้า', meaning: 'Horse', class: 'Low', sound: 'm', emoji: '🐴', type: 'Consonant', audioSrc: '/audio/thai/mor_ma.mp3' },
    { char: 'ย', name: 'Yor Yak', thaiName: 'ย ยักษ์', meaning: 'Giant', class: 'Low', sound: 'y', emoji: '👹', type: 'Consonant', audioSrc: '/audio/thai/yor_yak.mp3' },
    { char: 'ร', name: 'Ror Ruea', thaiName: 'ร เรือ', meaning: 'Boat', class: 'Low', sound: 'r', emoji: '🚤', type: 'Consonant', audioSrc: '/audio/thai/ror_ruea.mp3' },
    { char: 'ล', name: 'Lor Ling', thaiName: 'ล ลิง', meaning: 'Monkey', class: 'Low', sound: 'l', emoji: '🐒', type: 'Consonant', audioSrc: '/audio/thai/lor_ling.mp3' },
    { char: 'ว', name: 'Wor Waen', thaiName: 'ว แหวน', meaning: 'Ring', class: 'Low', sound: 'w', emoji: '💍', type: 'Consonant', audioSrc: '/audio/thai/wor_waen.mp3' },
    { char: 'ศ', name: 'Sor Sala', thaiName: 'ศ ศาลา', meaning: 'Pavilion', class: 'High', sound: 's', emoji: '🛖', type: 'Consonant', audioSrc: '/audio/thai/sor_sala.mp3' },
    { char: 'ษ', name: 'Sor Ruesi', thaiName: 'ษ ฤๅษี', meaning: 'Hermit', class: 'High', sound: 's', emoji: '🧙', type: 'Consonant', audioSrc: '/audio/thai/sor_ruesi.mp3' },
    { char: 'ส', name: 'Sor Suea', thaiName: 'ส เสือ', meaning: 'Tiger', class: 'High', sound: 's', emoji: '🐅', type: 'Consonant', audioSrc: '/audio/thai/sor_suea.mp3' },
    { char: 'ห', name: 'Hor Hip', thaiName: 'ห หีบ', meaning: 'Chest/Box', class: 'High', sound: 'h', emoji: '📦', type: 'Consonant', audioSrc: '/audio/thai/hor_hip.mp3' },
    { char: 'ฬ', name: 'Lor Chula', thaiName: 'ฬ จุฬา', meaning: 'Kite', class: 'Low', sound: 'l', emoji: '🪁', type: 'Consonant', audioSrc: '/audio/thai/lor_chula.mp3' },
    { char: 'อ', name: 'Or Ang', thaiName: 'อ อ่าง', meaning: 'Basin', class: 'Mid', sound: 'o', emoji: '🛁', type: 'Consonant', audioSrc: '/audio/thai/or_ang.mp3' },
    { char: 'ฮ', name: 'Hor Nokhuk', thaiName: 'ฮ นกฮูก', meaning: 'Owl', class: 'Low', sound: 'h', emoji: '🦉', type: 'Consonant', audioSrc: '/audio/thai/hor_nokhuk.mp3' },
    // --- Vowels ---
    { char: '−ะ', name: 'Sara A', meaning: 'Short A', sound: 'a', type: 'Vowel', audioSrc: '/audio/thai/sara_a.mp3' },
    { char: '−า', name: 'Sara Aa', meaning: 'Long A', sound: 'aa', type: 'Vowel', audioSrc: '/audio/thai/sara_aa.mp3' },
    { char: '−ิ', name: 'Sara I', meaning: 'Short I', sound: 'i', type: 'Vowel', audioSrc: '/audio/thai/sara_i.mp3' },
    { char: '−ี', name: 'Sara Ii', meaning: 'Long I', sound: 'ii', type: 'Vowel', audioSrc: '/audio/thai/sara_ii.mp3' },
    { char: '−ึ', name: 'Sara Ue', meaning: 'Short Ue', sound: 'ue', type: 'Vowel', audioSrc: '/audio/thai/sara_ue.mp3' },
    { char: '−ื', name: 'Sara Uue', meaning: 'Long Ue', sound: 'uue', type: 'Vowel', audioSrc: '/audio/thai/sara_uue.mp3' },
    { char: '−ุ', name: 'Sara U', meaning: 'Short U', sound: 'u', type: 'Vowel', audioSrc: '/audio/thai/sara_u.mp3' },
    { char: '−ู', name: 'Sara Uu', meaning: 'Long U', sound: 'uu', type: 'Vowel', audioSrc: '/audio/thai/sara_uu.mp3' },
    { char: 'เ−ะ', name: 'Sara E', meaning: 'Short E', sound: 'e', type: 'Vowel', audioSrc: '/audio/thai/sara_e.mp3' },
    { char: 'เ−', name: 'Sara Ee', meaning: 'Long E', sound: 'ee', type: 'Vowel', audioSrc: '/audio/thai/sara_ee.mp3' },
    { char: 'แ−ะ', name: 'Sara Ae', meaning: 'Short Ae', sound: 'ae', type: 'Vowel', audioSrc: '/audio/thai/sara_ae.mp3' },
    { char: 'แ−', name: 'Sara Aae', meaning: 'Long Ae', sound: 'aae', type: 'Vowel', audioSrc: '/audio/thai/sara_aae.mp3' },
    { char: 'โ−ะ', name: 'Sara O', meaning: 'Short O', sound: 'o', type: 'Vowel', audioSrc: '/audio/thai/sara_o.mp3' },
    { char: 'โ−', name: 'Sara Oo', meaning: 'Long O', sound: 'oo', type: 'Vowel', audioSrc: '/audio/thai/sara_oo.mp3' },
    { char: 'เ−าะ', name: 'Sara Or', meaning: 'Short Or', sound: 'or', type: 'Vowel', audioSrc: '/audio/thai/sara_or.mp3' },
    { char: '−อ', name: 'Sara Oor', meaning: 'Long Or', sound: 'oor', type: 'Vowel', audioSrc: '/audio/thai/sara_oor.mp3' },
    { char: 'เ−อะ', name: 'Sara Oe', meaning: 'Short Oe', sound: 'oe', type: 'Vowel', audioSrc: '/audio/thai/sara_oe.mp3' },
    { char: 'เ−อ', name: 'Sara Ooe', meaning: 'Long Oe', sound: 'ooe', type: 'Vowel', audioSrc: '/audio/thai/sara_ooe.mp3' },
    { char: 'เ−ียะ', name: 'Sara Ia', meaning: 'Short Ia', sound: 'ia', type: 'Vowel', audioSrc: '/audio/thai/sara_ia.mp3' },
    { char: 'เ−ีย', name: 'Sara Iia', meaning: 'Long Ia', sound: 'iia', type: 'Vowel', audioSrc: '/audio/thai/sara_iia.mp3' },
    { char: 'เ−ือะ', name: 'Sara Uea', meaning: 'Short Uea', sound: 'uea', type: 'Vowel', audioSrc: '/audio/thai/sara_uea.mp3' },
    { char: 'เ−ือ', name: 'Sara Uuea', meaning: 'Long Uea', sound: 'uuea', type: 'Vowel', audioSrc: '/audio/thai/sara_uuea.mp3' },
    { char: '−ัวะ', name: 'Sara Ua', meaning: 'Short Ua', sound: 'ua', type: 'Vowel', audioSrc: '/audio/thai/sara_ua.mp3' },
    { char: '−ัว', name: 'Sara Uua', meaning: 'Long Uua', sound: 'uua', type: 'Vowel', audioSrc: '/audio/thai/sara_uua.mp3' },
    { char: '−ำ', name: 'Sara Am', meaning: 'Am', sound: 'am', type: 'Vowel', audioSrc: '/audio/thai/sara_am.mp3' },
    { char: 'ใ−', name: 'Sara Ai Mai Muan', meaning: 'Ai (Rolled)', sound: 'ai', type: 'Vowel', audioSrc: '/audio/thai/sara_ai_mai_muan.mp3' },
    { char: 'ไ−', name: 'Sara Ai Mai Malai', meaning: 'Ai (Malai)', sound: 'ai', type: 'Vowel', audioSrc: '/audio/thai/sara_ai_mai_malai.mp3' },
    { char: 'เ−า', name: 'Sara Ao', meaning: 'Ao', sound: 'ao', type: 'Vowel', audioSrc: '/audio/thai/sara_ao.mp3' },
    // --- Tones ---
    { char: '−่', name: 'Mai Ek', thaiName: 'ไม้เอก', meaning: 'Tone Mark 1', sound: 'Low Tone', type: 'Tone', audioSrc: '/audio/thai/mai_ek.mp3' },
    { char: '−้', name: 'Mai Tho', thaiName: 'ไม้โท', meaning: 'Tone Mark 2', sound: 'Falling Tone', type: 'Tone', audioSrc: '/audio/thai/mai_tho.mp3' },
    { char: '−๊', name: 'Mai Tri', thaiName: 'ไม้ตรี', meaning: 'Tone Mark 3', sound: 'High Tone', type: 'Tone', audioSrc: '/audio/thai/mai_tri.mp3' },
    { char: '−๋', name: 'Mai Chattawa', thaiName: 'ไม้จัตวา', meaning: 'Tone Mark 4', sound: 'Rising Tone', type: 'Tone', audioSrc: '/audio/thai/mai_chattawa.mp3' },
    // --- Numbers ---
    { char: '๐', name: 'Soon', thaiName: 'ศูนย์', meaning: 'Zero', sound: '0', type: 'Number', audioSrc: '/audio/thai/soon.mp3' },
    { char: '๑', name: 'Nueng', thaiName: 'หนึ่ง', meaning: 'One', sound: '1', type: 'Number', audioSrc: '/audio/thai/nueng.mp3' },
    { char: '๒', name: 'Song', thaiName: 'สอง', meaning: 'Two', sound: '2', type: 'Number', audioSrc: '/audio/thai/song.mp3' },
    { char: '๓', name: 'Sam', thaiName: 'สาม', meaning: 'Three', sound: '3', type: 'Number', audioSrc: '/audio/thai/sam.mp3' },
    { char: '๔', name: 'Si', thaiName: 'สี่', meaning: 'Four', sound: '4', type: 'Number', audioSrc: '/audio/thai/si.mp3' },
    { char: '๕', name: 'Ha', thaiName: 'ห้า', meaning: 'Five', sound: '5', type: 'Number', audioSrc: '/audio/thai/ha.mp3' },
    { char: '๖', name: 'Hok', thaiName: 'หก', meaning: 'Six', sound: '6', type: 'Number', audioSrc: '/audio/thai/hok.mp3' },
    { char: '๗', name: 'Chet', thaiName: 'เจ็ด', meaning: 'Seven', sound: '7', type: 'Number', audioSrc: '/audio/thai/chet.mp3' },
    { char: '๘', name: 'Paet', thaiName: 'แปด', meaning: 'Eight', sound: '8', type: 'Number', audioSrc: '/audio/thai/paet.mp3' },
    { char: '๙', name: 'Kao', thaiName: 'เก้า', meaning: 'Nine', sound: '9', type: 'Number', audioSrc: '/audio/thai/kao.mp3' },
    { char: '๑๐', name: 'Sip', thaiName: 'สิบ', meaning: 'Ten', sound: '10', type: 'Number', audioSrc: '/audio/thai/sip.mp3' },
];

const generateQuiz = (characters) => {
    const questions = [];

    characters.forEach(c => {
        // 1. Sound Question
        if (c.sound) {
            const distractors = characters
                .filter(x => x.sound !== c.sound && x.type === c.type)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)
                .map(x => x.sound);

            if (distractors.length === 3) {
                questions.push({
                    question: `What sound does '${c.char}' make?`,
                    options: [...distractors, c.sound].sort(() => 0.5 - Math.random()),
                    correct: c.sound
                });
            }
        }

        // 2. Meaning Question (for Consonants/Numbers)
        if (c.meaning && (c.type === 'Consonant' || c.type === 'Number')) {
            const distractors = characters
                .filter(x => x.meaning !== c.meaning && x.type === c.type)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)
                .map(x => x.meaning);

            if (distractors.length === 3) {
                questions.push({
                    question: `What does '${c.char}' mean?`,
                    options: [...distractors, c.meaning].sort(() => 0.5 - Math.random()),
                    correct: c.meaning
                });
            }
        }

        // 3. Class Question (Consonants only)
        if (c.class && c.type === 'Consonant') {
            const classes = ['Low', 'Mid', 'High'];
            const distractors = classes.filter(cls => cls !== c.class);
            // Add a random class to make 4 options or just use 3
            const options = [...distractors, c.class, 'Sonorant'].slice(0, 4).sort(() => 0.5 - Math.random());

            questions.push({
                question: `What class is '${c.char}' (${c.name})?`,
                options: options,
                correct: c.class
            });
        }

        // 4. Identification Question
        if (c.name) {
            const distractors = characters
                .filter(x => x.char !== c.char && x.type === c.type)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)
                .map(x => x.char);

            if (distractors.length === 3) {
                questions.push({
                    question: `Which character is '${c.name}'?`,
                    options: [...distractors, c.char].sort(() => 0.5 - Math.random()),
                    correct: c.char
                });
            }
        }
    });

    return questions.sort(() => 0.5 - Math.random());
};

Object.assign(THAI, {
    chars: chars,
    quiz: generateQuiz(chars)
});
