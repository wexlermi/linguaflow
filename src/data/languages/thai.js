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
    flashcards: [
        {
            id: 'modern-thai',
            title: 'Modern Thai',
            description: 'Practice reading modern loopless Thai fonts. Click to flip and see the traditional form.',
            cards: [] // Will be populated below
        },
        {
            id: 'old-thai',
            title: 'Old Fashioned Thai',
            description: 'Practice reading elegant old-fashioned Thai fonts. Click to flip and see the traditional form.',
            cards: [] // Will be populated below
        }
    ]
};



const chars = [
    // --- Consonants ---
    { char: 'ก', name: 'gaw gài', thaiName: 'ก ไก่', meaning: 'Chicken', class: 'Mid', sound: 'k', emoji: '🐔', type: 'Consonant', audioSrc: '/audio/thai/gor_gai.mp3', exampleWord: 'ไก่', exampleWordMeaning: 'Chicken', exampleWordAudioSrc: '/audio/thai/examples/gai.mp3' },
    { char: 'ข', name: 'khǎw khài', thaiName: 'ข ไข่', meaning: 'Egg', class: 'High', sound: 'kh', emoji: '🥚', type: 'Consonant', audioSrc: '/audio/thai/khor_khai.mp3', exampleWord: 'ไข่', exampleWordMeaning: 'Egg', exampleWordAudioSrc: '/audio/thai/examples/khai.mp3' },
    { char: 'ฃ', name: 'khǎw khùat', thaiName: 'ฃ ขวด', meaning: 'Bottle (Obs)', class: 'High', sound: 'kh', emoji: '🍾', type: 'Consonant', audioSrc: '/audio/thai/khor_khuad.mp3', exampleWord: 'ขวด', exampleWordMeaning: 'Bottle', exampleWordAudioSrc: '/audio/thai/examples/khuad.mp3' },
    { char: 'ค', name: 'khaw khwaai', thaiName: 'ค ควาย', meaning: 'Buffalo', class: 'Low', sound: 'kh', emoji: '🐃', type: 'Consonant', audioSrc: '/audio/thai/khor_khwai.mp3', exampleWord: 'ควาย', exampleWordMeaning: 'Buffalo', exampleWordAudioSrc: '/audio/thai/examples/khwai.mp3' },
    { char: 'ฅ', name: 'khaw khon', thaiName: 'ฅ คน', meaning: 'Person (Obs)', class: 'Low', sound: 'kh', emoji: '👤', type: 'Consonant', audioSrc: '/audio/thai/khor_khon.mp3', exampleWord: 'คน', exampleWordMeaning: 'Person', exampleWordAudioSrc: '/audio/thai/examples/khon.mp3' },
    { char: 'ฆ', name: 'khaw rá-khang', thaiName: 'ฆ ระฆัง', meaning: 'Bell', class: 'Low', sound: 'kh', emoji: '🔔', type: 'Consonant', audioSrc: '/audio/thai/khor_rakhang.mp3', exampleWord: 'ระฆัง', exampleWordMeaning: 'Bell', exampleWordAudioSrc: '/audio/thai/examples/rakhang.mp3' },
    { char: 'ง', name: 'ngaw nguu', thaiName: 'ง งู', meaning: 'Snake', class: 'Low', sound: 'ng', emoji: '🐍', type: 'Consonant', audioSrc: '/audio/thai/ngor_ngu.mp3', exampleWord: 'งู', exampleWordMeaning: 'Snake', exampleWordAudioSrc: '/audio/thai/examples/ngu.mp3' },
    { char: 'จ', name: 'jaw jaan', thaiName: 'จ จาน', meaning: 'Plate', class: 'Mid', sound: 'j', emoji: '🍽️', type: 'Consonant', audioSrc: '/audio/thai/jor_jaan.mp3', exampleWord: 'จาน', exampleWordMeaning: 'Plate', exampleWordAudioSrc: '/audio/thai/examples/jaan.mp3' },
    { char: 'ฉ', name: 'chǎw chìng', thaiName: 'ฉ ฉิ่ง', meaning: 'Cymbals', class: 'High', sound: 'ch', emoji: '🥁', type: 'Consonant', audioSrc: '/audio/thai/chor_ching.mp3', exampleWord: 'ฉิ่ง', exampleWordMeaning: 'Cymbals', exampleWordAudioSrc: '/audio/thai/examples/ching.mp3' },
    { char: 'ช', name: 'chaw cháang', thaiName: 'ช ช้าง', meaning: 'Elephant', class: 'Low', sound: 'ch', emoji: '🐘', type: 'Consonant', audioSrc: '/audio/thai/chor_chang.mp3', exampleWord: 'ช้าง', exampleWordMeaning: 'Elephant', exampleWordAudioSrc: '/audio/thai/examples/chang.mp3' },
    { char: 'ซ', name: 'saw sôo', thaiName: 'ซ โซ่', meaning: 'Chain', class: 'Low', sound: 's', emoji: '🔗', type: 'Consonant', audioSrc: '/audio/thai/sor_so.mp3', exampleWord: 'โซ่', exampleWordMeaning: 'Chain', exampleWordAudioSrc: '/audio/thai/examples/so.mp3' },
    { char: 'ฌ', name: 'chaw chəə', thaiName: 'ฌ เฌอ', meaning: 'Tree', class: 'Low', sound: 'ch', emoji: '🌳', type: 'Consonant', audioSrc: '/audio/thai/chor_cher.mp3', exampleWord: 'เฌอ', exampleWordMeaning: 'Tree', exampleWordAudioSrc: '/audio/thai/examples/cher.mp3' },
    { char: 'ญ', name: 'yaw yǐng', thaiName: 'ญ หญิง', meaning: 'Woman', class: 'Low', sound: 'y', emoji: '👩', type: 'Consonant', audioSrc: '/audio/thai/yor_ying.mp3', exampleWord: 'หญิง', exampleWordMeaning: 'Woman', exampleWordAudioSrc: '/audio/thai/examples/ying.mp3' },
    { char: 'ฎ', name: 'daw chá-daa', thaiName: 'ฎ ชฎา', meaning: 'Headdress', class: 'Mid', sound: 'd', emoji: '👑', type: 'Consonant', audioSrc: '/audio/thai/dor_chada.mp3', exampleWord: 'ชฎา', exampleWordMeaning: 'Headdress', exampleWordAudioSrc: '/audio/thai/examples/chada.mp3' },
    { char: 'ฏ', name: 'taw bpà-dtàk', thaiName: 'ฏ ปฏัก', meaning: 'Goad/Spear', class: 'Mid', sound: 't', emoji: '🔱', type: 'Consonant', audioSrc: '/audio/thai/tor_patak.mp3', exampleWord: 'ปฏัก', exampleWordMeaning: 'Goad', exampleWordAudioSrc: '/audio/thai/examples/patak.mp3' },
    { char: 'ฐ', name: 'thǎw thǎan', thaiName: 'ฐ ฐาน', meaning: 'Pedestal', class: 'High', sound: 'th', emoji: '🏛️', type: 'Consonant', audioSrc: '/audio/thai/thor_than.mp3', exampleWord: 'ฐาน', exampleWordMeaning: 'Pedestal', exampleWordAudioSrc: '/audio/thai/examples/than.mp3' },
    { char: 'ฑ', name: 'thaw mon-thoo', thaiName: 'ฑ มณโฑ', meaning: 'Montho (Character)', class: 'Low', sound: 'th', emoji: '👸', type: 'Consonant', audioSrc: '/audio/thai/thor_montho.mp3', exampleWord: 'มณโฑ', exampleWordMeaning: 'Montho', exampleWordAudioSrc: '/audio/thai/examples/montho.mp3' },
    { char: 'ฒ', name: 'thaw phûu-thâo', thaiName: 'ฒ ผู้เฒ่า', meaning: 'Elder', class: 'Low', sound: 'th', emoji: '👴', type: 'Consonant', audioSrc: '/audio/thai/thor_phuthao.mp3', exampleWord: 'ผู้เฒ่า', exampleWordMeaning: 'Elder', exampleWordAudioSrc: '/audio/thai/examples/phuthao.mp3' },
    { char: 'ณ', name: 'naw neen', thaiName: 'ณ เณร', meaning: 'Novice Monk', class: 'Low', sound: 'n', emoji: '🧘', type: 'Consonant', audioSrc: '/audio/thai/nor_nen.mp3', exampleWord: 'เณร', exampleWordMeaning: 'Novice Monk', exampleWordAudioSrc: '/audio/thai/examples/nen.mp3' },
    { char: 'ด', name: 'daw dèk', thaiName: 'ด เด็ก', meaning: 'Child', class: 'Mid', sound: 'd', emoji: '👶', type: 'Consonant', audioSrc: '/audio/thai/dor_dek.mp3', exampleWord: 'เด็ก', exampleWordMeaning: 'Child', exampleWordAudioSrc: '/audio/thai/examples/dek.mp3' },
    { char: 'ต', name: 'taw dtào', thaiName: 'ต เต่า', meaning: 'Turtle', class: 'Mid', sound: 't', emoji: '🐢', type: 'Consonant', audioSrc: '/audio/thai/tor_tao.mp3', exampleWord: 'เต่า', exampleWordMeaning: 'Turtle', exampleWordAudioSrc: '/audio/thai/examples/tao.mp3' },
    { char: 'ถ', name: 'thǎw thǔng', thaiName: 'ถ ถุง', meaning: 'Sack/Bag', class: 'High', sound: 'th', emoji: '💰', type: 'Consonant', audioSrc: '/audio/thai/thor_thung.mp3', exampleWord: 'ถุง', exampleWordMeaning: 'Sack', exampleWordAudioSrc: '/audio/thai/examples/thung.mp3' },
    { char: 'ท', name: 'thaw thá-hǎan', thaiName: 'ท ทหาร', meaning: 'Soldier', class: 'Low', sound: 'th', emoji: '💂', type: 'Consonant', audioSrc: '/audio/thai/thor_thahan.mp3', exampleWord: 'ทหาร', exampleWordMeaning: 'Soldier', exampleWordAudioSrc: '/audio/thai/examples/thahan.mp3' },
    { char: 'ธ', name: 'thaw thong', thaiName: 'ธ ธง', meaning: 'Flag', class: 'Low', sound: 'th', emoji: '🚩', type: 'Consonant', audioSrc: '/audio/thai/thor_thong.mp3', exampleWord: 'ธง', exampleWordMeaning: 'Flag', exampleWordAudioSrc: '/audio/thai/examples/thong.mp3' },
    { char: 'น', name: 'naw nǔu', thaiName: 'น หนู', meaning: 'Mouse', class: 'Low', sound: 'n', emoji: '🐭', type: 'Consonant', audioSrc: '/audio/thai/nor_nu.mp3', exampleWord: 'หนู', exampleWordMeaning: 'Mouse', exampleWordAudioSrc: '/audio/thai/examples/nu.mp3' },
    { char: 'บ', name: 'baw bai-máai', thaiName: 'บ ใบไม้', meaning: 'Leaf', class: 'Mid', sound: 'b', emoji: '🍃', type: 'Consonant', audioSrc: '/audio/thai/bor_baimai.mp3', exampleWord: 'ใบไม้', exampleWordMeaning: 'Leaf', exampleWordAudioSrc: '/audio/thai/examples/baimai.mp3' },
    { char: 'ป', name: 'bpaw bplaa', thaiName: 'ป ปลา', meaning: 'Fish', class: 'Mid', sound: 'p', emoji: '🐟', type: 'Consonant', audioSrc: '/audio/thai/por_pla.mp3', exampleWord: 'ปลา', exampleWordMeaning: 'Fish', exampleWordAudioSrc: '/audio/thai/examples/pla.mp3' },
    { char: 'ผ', name: 'phǎw phûng', thaiName: 'ผ ผึ้ง', meaning: 'Bee', class: 'High', sound: 'ph', emoji: '🐝', type: 'Consonant', audioSrc: '/audio/thai/phor_phueng.mp3', exampleWord: 'ผึ้ง', exampleWordMeaning: 'Bee', exampleWordAudioSrc: '/audio/thai/examples/phueng.mp3' },
    { char: 'ฝ', name: 'fǎw fǎan', thaiName: 'ฝ ฝา', meaning: 'Lid', class: 'High', sound: 'f', emoji: '🥘', type: 'Consonant', audioSrc: '/audio/thai/for_fa.mp3', exampleWord: 'ฝา', exampleWordMeaning: 'Lid', exampleWordAudioSrc: '/audio/thai/examples/fa.mp3' },
    { char: 'พ', name: 'phaw phaan', thaiName: 'พ พาน', meaning: 'Tray', class: 'Low', sound: 'ph', emoji: '🥣', type: 'Consonant', audioSrc: '/audio/thai/phor_phan.mp3', exampleWord: 'พาน', exampleWordMeaning: 'Tray', exampleWordAudioSrc: '/audio/thai/examples/phan.mp3' },
    { char: 'ฟ', name: 'faw fan', thaiName: 'ฟ ฟัน', meaning: 'Teeth', class: 'Low', sound: 'f', emoji: '🦷', type: 'Consonant', audioSrc: '/audio/thai/for_fan.mp3', exampleWord: 'ฟัน', exampleWordMeaning: 'Teeth', exampleWordAudioSrc: '/audio/thai/examples/fan.mp3' },
    { char: 'ภ', name: 'phaw sǎm-phǎo', thaiName: 'ภ สำเภา', meaning: 'Junk (Boat)', class: 'Low', sound: 'ph', emoji: '⛵', type: 'Consonant', audioSrc: '/audio/thai/phor_samphao.mp3', exampleWord: 'สำเภา', exampleWordMeaning: 'Junk', exampleWordAudioSrc: '/audio/thai/examples/samphao.mp3' },
    { char: 'ม', name: 'maw máa', thaiName: 'ม ม้า', meaning: 'Horse', class: 'Low', sound: 'm', emoji: '🐴', type: 'Consonant', audioSrc: '/audio/thai/mor_ma.mp3', exampleWord: 'ม้า', exampleWordMeaning: 'Horse', exampleWordAudioSrc: '/audio/thai/examples/ma.mp3' },
    { char: 'ย', name: 'yaw yák', thaiName: 'ย ยักษ์', meaning: 'Giant', class: 'Low', sound: 'y', emoji: '👹', type: 'Consonant', audioSrc: '/audio/thai/yor_yak.mp3', exampleWord: 'ยักษ์', exampleWordMeaning: 'Giant', exampleWordAudioSrc: '/audio/thai/examples/yak.mp3' },
    { char: 'ร', name: 'raw ruua', thaiName: 'ร เรือ', meaning: 'Boat', class: 'Low', sound: 'r', emoji: '🚤', type: 'Consonant', audioSrc: '/audio/thai/ror_ruea.mp3', exampleWord: 'เรือ', exampleWordMeaning: 'Boat', exampleWordAudioSrc: '/audio/thai/examples/ruea.mp3' },
    { char: 'ล', name: 'law ling', thaiName: 'ล ลิง', meaning: 'Monkey', class: 'Low', sound: 'l', emoji: '🐒', type: 'Consonant', audioSrc: '/audio/thai/lor_ling.mp3', exampleWord: 'ลิง', exampleWordMeaning: 'Monkey', exampleWordAudioSrc: '/audio/thai/examples/ling.mp3' },
    { char: 'ว', name: 'waw wǎan', thaiName: 'ว แหวน', meaning: 'Ring', class: 'Low', sound: 'w', emoji: '💍', type: 'Consonant', audioSrc: '/audio/thai/wor_waen.mp3', exampleWord: 'แหวน', exampleWordMeaning: 'Ring', exampleWordAudioSrc: '/audio/thai/examples/waen.mp3' },
    { char: 'ศ', name: 'sǎw sǎa-laa', thaiName: 'ศ ศาลา', meaning: 'Pavilion', class: 'High', sound: 's', emoji: '🛖', type: 'Consonant', audioSrc: '/audio/thai/sor_sala.mp3', exampleWord: 'ศาลา', exampleWordMeaning: 'Pavilion', exampleWordAudioSrc: '/audio/thai/examples/sala.mp3' },
    { char: 'ษ', name: 'sǎw rǐu-sii', thaiName: 'ษ ฤๅษี', meaning: 'Hermit', class: 'High', sound: 's', emoji: '🧙', type: 'Consonant', audioSrc: '/audio/thai/sor_ruesi.mp3', exampleWord: 'ฤๅษี', exampleWordMeaning: 'Hermit', exampleWordAudioSrc: '/audio/thai/examples/ruesi.mp3' },
    { char: 'ส', name: 'sǎw sǔua', thaiName: 'ส เสือ', meaning: 'Tiger', class: 'High', sound: 's', emoji: '🐅', type: 'Consonant', audioSrc: '/audio/thai/sor_suea.mp3', exampleWord: 'เสือ', exampleWordMeaning: 'Tiger', exampleWordAudioSrc: '/audio/thai/examples/suea.mp3' },
    { char: 'ห', name: 'hǎw hîp', thaiName: 'ห หีบ', meaning: 'Chest/Box', class: 'High', sound: 'h', emoji: '📦', type: 'Consonant', audioSrc: '/audio/thai/hor_hip.mp3', exampleWord: 'หีบ', exampleWordMeaning: 'Chest', exampleWordAudioSrc: '/audio/thai/examples/hip.mp3' },
    { char: 'ฬ', name: 'law ju-laa', thaiName: 'ฬ จุฬา', meaning: 'Kite', class: 'Low', sound: 'l', emoji: '🪁', type: 'Consonant', audioSrc: '/audio/thai/lor_chula.mp3', exampleWord: 'จุฬา', exampleWordMeaning: 'Kite', exampleWordAudioSrc: '/audio/thai/examples/chula.mp3' },
    { char: 'อ', name: 'aw àang', thaiName: 'อ อ่าง', meaning: 'Basin', class: 'Mid', sound: 'o', emoji: '🛁', type: 'Consonant', audioSrc: '/audio/thai/or_ang.mp3', exampleWord: 'อ่าง', exampleWordMeaning: 'Basin', exampleWordAudioSrc: '/audio/thai/examples/ang.mp3' },
    { char: 'ฮ', name: 'haw nók-hûuuk', thaiName: 'ฮ นกฮูก', meaning: 'Owl', class: 'Low', sound: 'h', emoji: '🦉', type: 'Consonant', audioSrc: '/audio/thai/hor_nokhuk.mp3', exampleWord: 'นกฮูก', exampleWordMeaning: 'Owl', exampleWordAudioSrc: '/audio/thai/examples/nokhuk.mp3' },
    // --- Vowels ---
    { char: 'อะ', name: 'Sara A', thaiName: 'สระอะ', ttsName: 'สะระอะ', meaning: 'Short A', sound: 'a', type: 'Vowel', audioSrc: '/audio/thai/sara_a.mp3', exampleWord: 'กะ', exampleWordMeaning: 'Shift/Turn', exampleWordAudioSrc: '/audio/thai/examples/ga.mp3' },
    { char: 'อา', name: 'Sara Aa', thaiName: 'สระอา', ttsName: 'สะระอา', meaning: 'Long A', sound: 'aa', type: 'Vowel', audioSrc: '/audio/thai/sara_aa.mp3', exampleWord: 'กา', exampleWordMeaning: 'Crow', exampleWordAudioSrc: '/audio/thai/examples/gaa.mp3' },
    { char: 'อิ', name: 'Sara I', thaiName: 'สระอิ', ttsName: 'สะระอิ', meaning: 'Short I', sound: 'i', type: 'Vowel', audioSrc: '/audio/thai/sara_i.mp3', exampleWord: 'ติ', exampleWordMeaning: 'Criticize', exampleWordAudioSrc: '/audio/thai/examples/ti.mp3' },
    { char: 'อี', name: 'Sara Ii', thaiName: 'สระอี', ttsName: 'สะระอี', meaning: 'Long I', sound: 'ii', type: 'Vowel', audioSrc: '/audio/thai/sara_ii.mp3', exampleWord: 'ตี', exampleWordMeaning: 'Hit', exampleWordAudioSrc: '/audio/thai/examples/tii.mp3' },
    { char: 'อึ', name: 'Sara Ue', thaiName: 'สระอึ', ttsName: 'สะระอึ', meaning: 'Short Ue', sound: 'ue', type: 'Vowel', audioSrc: '/audio/thai/sara_ue.mp3', exampleWord: 'หึ', exampleWordMeaning: 'Huh', exampleWordAudioSrc: '/audio/thai/examples/hue.mp3' },
    { char: 'อือ', name: 'Sara Uue', thaiName: 'สระอือ', ttsName: 'สะระอือ', meaning: 'Long Ue', sound: 'uue', type: 'Vowel', audioSrc: '/audio/thai/sara_uue.mp3', exampleWord: 'มือ', exampleWordMeaning: 'Hand', exampleWordAudioSrc: '/audio/thai/examples/mue.mp3' },
    { char: 'อุ', name: 'Sara U', thaiName: 'สระอุ', ttsName: 'สะระอุ', meaning: 'Short U', sound: 'u', type: 'Vowel', audioSrc: '/audio/thai/sara_u.mp3', exampleWord: 'ดุ', exampleWordMeaning: 'Fierce', exampleWordAudioSrc: '/audio/thai/examples/du.mp3' },
    { char: 'อู', name: 'Sara Uu', thaiName: 'สระอู', ttsName: 'สะระอู', meaning: 'Long U', sound: 'uu', type: 'Vowel', audioSrc: '/audio/thai/sara_uu.mp3', exampleWord: 'ดู', exampleWordMeaning: 'Look', exampleWordAudioSrc: '/audio/thai/examples/duu.mp3' },
    { char: 'เอะ', name: 'Sara E', thaiName: 'สระเอะ', ttsName: 'สะระเอะ', meaning: 'Short E', sound: 'e', type: 'Vowel', audioSrc: '/audio/thai/sara_e.mp3', exampleWord: 'เตะ', exampleWordMeaning: 'Kick', exampleWordAudioSrc: '/audio/thai/examples/te.mp3' },
    { char: 'เอ', name: 'Sara Ee', thaiName: 'สระเอ', ttsName: 'สะระเอ', meaning: 'Long E', sound: 'e', type: 'Vowel', audioSrc: '/audio/thai/sara_ee.mp3', exampleWord: 'เท', exampleWordMeaning: 'Pour', exampleWordAudioSrc: '/audio/thai/examples/the.mp3' },
    { char: 'แอะ', name: 'Sara Ae', thaiName: 'สระแอะ', ttsName: 'สะระแอะ', meaning: 'Short Ae', sound: 'ae', type: 'Vowel', audioSrc: '/audio/thai/sara_ae.mp3', exampleWord: 'แกะ', exampleWordMeaning: 'Sheep', exampleWordAudioSrc: '/audio/thai/examples/gae.mp3' },
    { char: 'แอ', name: 'Sara Aae', thaiName: 'สระแอ', ttsName: 'สะระแอ', meaning: 'Long Ae', sound: 'ae', type: 'Vowel', audioSrc: '/audio/thai/sara_aae.mp3', exampleWord: 'แพ', exampleWordMeaning: 'Raft', exampleWordAudioSrc: '/audio/thai/examples/phae.mp3' },
    { char: 'โอะ', name: 'Sara O', thaiName: 'สระโอะ', ttsName: 'สะระโอะ', meaning: 'Short O', sound: 'o', type: 'Vowel', audioSrc: '/audio/thai/sara_o.mp3', exampleWord: 'โต๊ะ', exampleWordMeaning: 'Table', exampleWordAudioSrc: '/audio/thai/examples/to.mp3' },
    { char: 'โอ', name: 'Sara Oo', thaiName: 'สระโอ', ttsName: 'สะระโอ', meaning: 'Long O', sound: 'o', type: 'Vowel', audioSrc: '/audio/thai/sara_oo.mp3', exampleWord: 'โต', exampleWordMeaning: 'Big', exampleWordAudioSrc: '/audio/thai/examples/too.mp3' },
    { char: 'เอาะ', name: 'Sara Or', thaiName: 'สระเอาะ', ttsName: 'สะระเอาะ', meaning: 'Short Or', sound: 'o', type: 'Vowel', audioSrc: '/audio/thai/sara_or.mp3', exampleWord: 'เกาะ', exampleWordMeaning: 'Island', exampleWordAudioSrc: '/audio/thai/examples/gor.mp3' },
    { char: 'ออ', name: 'Sara Oor', thaiName: 'สระออ', ttsName: 'สะระออ', meaning: 'Long Or', sound: 'o', type: 'Vowel', audioSrc: '/audio/thai/sara_oor.mp3', exampleWord: 'รอ', exampleWordMeaning: 'Wait', exampleWordAudioSrc: '/audio/thai/examples/ror.mp3' },
    { char: 'เออะ', name: 'Sara Oe', thaiName: 'สระเออะ', ttsName: 'สะระเออะ', meaning: 'Short Oe', sound: 'oe', type: 'Vowel', audioSrc: '/audio/thai/sara_oe.mp3', exampleWord: 'เยอะ', exampleWordMeaning: 'A lot', exampleWordAudioSrc: '/audio/thai/examples/yoe.mp3' },
    { char: 'เออ', name: 'Sara Ooe', thaiName: 'สระเออ', ttsName: 'สะระเออ', meaning: 'Long Oe', sound: 'oe', type: 'Vowel', audioSrc: '/audio/thai/sara_ooe.mp3', exampleWord: 'เธอ', exampleWordMeaning: 'You', exampleWordAudioSrc: '/audio/thai/examples/thoe.mp3' },
    { char: 'เอียะ', name: 'Sara Ia', thaiName: 'สระเอียะ', ttsName: 'สะระเอียะ', meaning: 'Short Ia', sound: 'ia', type: 'Vowel', audioSrc: '/audio/thai/sara_ia.mp3', exampleWord: 'เปี๊ยะ', exampleWordMeaning: 'Spring roll', exampleWordAudioSrc: '/audio/thai/examples/pia.mp3' },
    { char: 'เอีย', name: 'Sara Iia', thaiName: 'สระเอีย', ttsName: 'สะระเอีย', meaning: 'Long Ia', sound: 'ia', type: 'Vowel', audioSrc: '/audio/thai/sara_iia.mp3', exampleWord: 'เสีย', exampleWordMeaning: 'Broken', exampleWordAudioSrc: '/audio/thai/examples/sia.mp3' },
    { char: 'เอือะ', name: 'Sara Uea', thaiName: 'สระเอือะ', ttsName: 'สะระเอือะ', meaning: 'Short Uea', sound: 'uea', type: 'Vowel', audioSrc: '/audio/thai/sara_uea.mp3', exampleWord: 'เอือะ', exampleWordMeaning: 'Sound of vomiting', exampleWordAudioSrc: '/audio/thai/examples/uea.mp3' },
    { char: 'เอือ', name: 'Sara Uuea', thaiName: 'สระเอือ', ttsName: 'สะระเอือ', meaning: 'Long Uea', sound: 'uea', type: 'Vowel', audioSrc: '/audio/thai/sara_uuea.mp3', exampleWord: 'เสือ', exampleWordMeaning: 'Tiger', exampleWordAudioSrc: '/audio/thai/examples/suea.mp3' },
    { char: 'อัวะ', name: 'Sara Ua', thaiName: 'สระอัวะ', ttsName: 'สะระอัวะ', meaning: 'Short Ua', sound: 'ua', type: 'Vowel', audioSrc: '/audio/thai/sara_ua.mp3', exampleWord: 'ผัวะ', exampleWordMeaning: 'Sound of hitting', exampleWordAudioSrc: '/audio/thai/examples/ua.mp3' },
    { char: 'อัว', name: 'Sara Uua', thaiName: 'สระอัว', ttsName: 'สะระอัว', meaning: 'Long Uua', sound: 'ua', type: 'Vowel', audioSrc: '/audio/thai/sara_uua.mp3', exampleWord: 'วัว', exampleWordMeaning: 'Cow', exampleWordAudioSrc: '/audio/thai/examples/wua.mp3' },
    { char: 'อำ', name: 'Sara Am', thaiName: 'สระอำ', ttsName: 'สะระอำ', meaning: 'Am', sound: 'am', type: 'Vowel', audioSrc: '/audio/thai/sara_am.mp3', exampleWord: 'ทำ', exampleWordMeaning: 'Do', exampleWordAudioSrc: '/audio/thai/examples/tham.mp3' },
    { char: 'ใอ', name: 'Sara Ai Mai Muan', thaiName: 'สระไอไม้ม้วน', ttsName: 'สะระไอไม้ม้วน', meaning: 'Ai (Rolled)', sound: 'ai', type: 'Vowel', audioSrc: '/audio/thai/sara_ai_mai_muan.mp3', exampleWord: 'ใจ', exampleWordMeaning: 'Heart', exampleWordAudioSrc: '/audio/thai/examples/jai.mp3' },
    { char: 'ไอ', name: 'Sara Ai Mai Malai', thaiName: 'สระไอไม้ม้าลาย', ttsName: 'สะระไอไม้ม้าลาย', meaning: 'Ai (Malai)', sound: 'ai', type: 'Vowel', audioSrc: '/audio/thai/sara_ai_mai_malai.mp3', exampleWord: 'ไป', exampleWordMeaning: 'Go', exampleWordAudioSrc: '/audio/thai/examples/pai.mp3' },
    { char: 'เอา', name: 'Sara Ao', thaiName: 'สระเอา', ttsName: 'สะระเอา', meaning: 'Ao', sound: 'ao', type: 'Vowel', audioSrc: '/audio/thai/sara_ao.mp3', exampleWord: 'เรา', exampleWordMeaning: 'We', exampleWordAudioSrc: '/audio/thai/examples/rao.mp3' },
    // --- Tones ---
    { char: 'อ่', name: 'Mai Ek', thaiName: 'ไม้เอก', meaning: 'Tone Mark 1', sound: 'Low Tone', type: 'Tone', audioSrc: '/audio/thai/mai_ek.mp3', exampleWord: 'แม่', exampleWordMeaning: 'Mother', exampleWordAudioSrc: '/audio/thai/examples/mae.mp3' },
    { char: 'อ้', name: 'Mai Tho', thaiName: 'ไม้โท', meaning: 'Tone Mark 2', sound: 'Falling Tone', type: 'Tone', audioSrc: '/audio/thai/mai_tho.mp3', exampleWord: 'ไม้', exampleWordMeaning: 'Wood', exampleWordAudioSrc: '/audio/thai/examples/mai.mp3' },
    { char: 'อ๊', name: 'Mai Tri', thaiName: 'ไม้ตรี', meaning: 'Tone Mark 3', sound: 'High Tone', type: 'Tone', audioSrc: '/audio/thai/mai_tri.mp3', exampleWord: 'โต๊ะ', exampleWordMeaning: 'Table', exampleWordAudioSrc: '/audio/thai/examples/to_tri.mp3' },
    { char: 'อ๋', name: 'Mai Chattawa', thaiName: 'ไม้จัตวา', meaning: 'Tone Mark 4', sound: 'Rising Tone', type: 'Tone', audioSrc: '/audio/thai/mai_chattawa.mp3', exampleWord: 'ป๋า', exampleWordMeaning: 'Dad (Chinese)', exampleWordAudioSrc: '/audio/thai/examples/pa.mp3' },
    // --- Numbers ---
    { char: '๐', name: 'Soon', thaiName: 'ศูนย์', meaning: 'Zero', sound: '0', type: 'Number', audioSrc: '/audio/thai/soon.mp3', exampleWord: 'ศูนย์', exampleWordMeaning: 'Zero', exampleWordAudioSrc: '/audio/thai/examples/soon.mp3' },
    { char: '๑', name: 'Nueng', thaiName: 'หนึ่ง', meaning: 'One', sound: '1', type: 'Number', audioSrc: '/audio/thai/nueng.mp3', exampleWord: 'หนึ่ง', exampleWordMeaning: 'One', exampleWordAudioSrc: '/audio/thai/examples/nueng.mp3' },
    { char: '๒', name: 'Song', thaiName: 'สอง', meaning: 'Two', sound: '2', type: 'Number', audioSrc: '/audio/thai/song.mp3', exampleWord: 'สอง', exampleWordMeaning: 'Two', exampleWordAudioSrc: '/audio/thai/examples/song.mp3' },
    { char: '๓', name: 'Sam', thaiName: 'สาม', meaning: 'Three', sound: '3', type: 'Number', audioSrc: '/audio/thai/sam.mp3', exampleWord: 'สาม', exampleWordMeaning: 'Three', exampleWordAudioSrc: '/audio/thai/examples/sam.mp3' },
    { char: '๔', name: 'Si', thaiName: 'สี่', meaning: 'Four', sound: '4', type: 'Number', audioSrc: '/audio/thai/si.mp3', exampleWord: 'สี่', exampleWordMeaning: 'Four', exampleWordAudioSrc: '/audio/thai/examples/si.mp3' },
    { char: '๕', name: 'Ha', thaiName: 'ห้า', meaning: 'Five', sound: '5', type: 'Number', audioSrc: '/audio/thai/ha.mp3', exampleWord: 'ห้า', exampleWordMeaning: 'Five', exampleWordAudioSrc: '/audio/thai/examples/ha.mp3' },
    { char: '๖', name: 'Hok', thaiName: 'หก', meaning: 'Six', sound: '6', type: 'Number', audioSrc: '/audio/thai/hok.mp3', exampleWord: 'หก', exampleWordMeaning: 'Six', exampleWordAudioSrc: '/audio/thai/examples/hok.mp3' },
    { char: '๗', name: 'Chet', thaiName: 'เจ็ด', meaning: 'Seven', sound: '7', type: 'Number', audioSrc: '/audio/thai/chet.mp3', exampleWord: 'เจ็ด', exampleWordMeaning: 'Seven', exampleWordAudioSrc: '/audio/thai/examples/chet.mp3' },
    { char: '๘', name: 'Paet', thaiName: 'แปด', meaning: 'Eight', sound: '8', type: 'Number', audioSrc: '/audio/thai/paet.mp3', exampleWord: 'แปด', exampleWordMeaning: 'Eight', exampleWordAudioSrc: '/audio/thai/examples/paet.mp3' },
    { char: '๙', name: 'Kao', thaiName: 'เก้า', meaning: 'Nine', sound: '9', type: 'Number', audioSrc: '/audio/thai/kao.mp3', exampleWord: 'เก้า', exampleWordMeaning: 'Nine', exampleWordAudioSrc: '/audio/thai/examples/kao.mp3' },
    { char: '๑๐', name: 'Sip', thaiName: 'สิบ', meaning: 'Ten', sound: '10', type: 'Number', audioSrc: '/audio/thai/sip.mp3', exampleWord: 'สิบ', exampleWordMeaning: 'Ten', exampleWordAudioSrc: '/audio/thai/examples/sip.mp3' },
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
    quiz: generateQuiz(chars),
    vocabulary: [
        {
            category: 'Greetings',
            items: [
                { thai: 'สวัสดี', roman: 'sà-wàt-dii', meaning: 'Hello', audioSrc: '/audio/thai/vocab/sawatdee.mp3', imageSrc: '/images/thai/sawatdee.jpg' },
                { thai: 'ขอบคุณ', roman: 'khàwp-khun', meaning: 'Thank you', audioSrc: '/audio/thai/vocab/khop_khun.mp3', imageSrc: '/images/thai/khop_khun.jpg' },
                { thai: 'ขอโทษ', roman: 'khǎw-thôot', meaning: 'Sorry', audioSrc: '/audio/thai/vocab/khor_thot.mp3', imageSrc: '/images/thai/khor_thot.jpg' },
                { thai: 'ใช่', roman: 'châi', meaning: 'Yes', audioSrc: '/audio/thai/vocab/chai.mp3', imageSrc: '/images/thai/chai.jpg' },
                { thai: 'ไม่', roman: 'mâi', meaning: 'No', audioSrc: '/audio/thai/vocab/mai.mp3', imageSrc: '/images/thai/mai.jpg' }
            ]
        },
        {
            category: 'Essentials',
            items: [
                { thai: 'ห้องน้ำ', roman: 'hâwng-náam', meaning: 'Bathroom', audioSrc: '/audio/thai/vocab/hong_nam.mp3', imageSrc: '/images/thai/hong_nam.jpg' },
                { thai: 'น้ำ', roman: 'náam', meaning: 'Water', audioSrc: '/audio/thai/vocab/nam.mp3', imageSrc: '/images/thai/nam.jpg' },
                { thai: 'ข้าว', roman: 'khâao', meaning: 'Rice', audioSrc: '/audio/thai/vocab/khao.mp3', imageSrc: '/images/thai/khao.jpg' },
                { thai: 'อร่อย', roman: 'à-ròi', meaning: 'Delicious', audioSrc: '/audio/thai/vocab/aroi.mp3', imageSrc: '/images/thai/aroi.jpg' },
                { thai: 'เท่าไหร่', roman: 'thâo-rài', meaning: 'How much?', audioSrc: '/audio/thai/vocab/thao_rai.mp3', imageSrc: '/images/thai/thao_rai.jpg' }
            ]
        },
        {
            category: 'Colors',
            items: [
                { thai: 'สีแดง', roman: 'sǐi-daeng', meaning: 'Red', audioSrc: '/audio/thai/vocab/si_daeng.mp3', imageSrc: '/images/thai/si_daeng.jpg' },
                { thai: 'สีเขียว', roman: 'sǐi-khǐao', meaning: 'Green', audioSrc: '/audio/thai/vocab/si_khiao.mp3', imageSrc: '/images/thai/si_khiao.jpg' },
                { thai: 'สีน้ำเงิน', roman: 'sǐi-náam-ngen', meaning: 'Blue', audioSrc: '/audio/thai/vocab/si_nam_ngoen.mp3', imageSrc: '/images/thai/si_nam_ngoen.jpg' },
                { thai: 'สีขาว', roman: 'sǐi-khǎao', meaning: 'White', audioSrc: '/audio/thai/vocab/si_khao.mp3', imageSrc: '/images/thai/si_khao.jpg' },
                { thai: 'สีดำ', roman: 'sǐi-dam', meaning: 'Black', audioSrc: '/audio/thai/vocab/si_dam.mp3', imageSrc: '/images/thai/si_dam.jpg' }
            ]
        },
        {
            category: 'Food',
            items: [
                { thai: 'ผัดไทย', roman: 'phàt-thai', meaning: 'Pad Thai', audioSrc: '/audio/thai/vocab/pad_thai.mp3', imageSrc: '/images/thai/pad_thai.jpg' },
                { thai: 'ส้มตำ', roman: 'sôm-tam', meaning: 'Papaya Salad', audioSrc: '/audio/thai/vocab/som_tum.mp3', imageSrc: '/images/thai/som_tum.jpg' },
                { thai: 'ต้มยำ', roman: 'tôm-yam', meaning: 'Spicy Soup', audioSrc: '/audio/thai/vocab/tom_yum.mp3', imageSrc: '/images/thai/tom_yum.jpg' },
                { thai: 'ข้าวเหนียวมะม่วง', roman: 'khâao-nǐao-má-mûang', meaning: 'Mango Sticky Rice', audioSrc: '/audio/thai/vocab/khao_niao_mamuang.mp3', imageSrc: '/images/thai/mango_sticky_rice.jpg' }
            ]
        },
        {
            category: 'Travel',
            items: [
                { thai: 'สนามบิน', roman: 'sà-nǎam-bin', meaning: 'Airport', audioSrc: '/audio/thai/vocab/sanam_bin.mp3', imageSrc: '/images/thai/sanam_bin.jpg' },
                { thai: 'โรงแรม', roman: 'roong-raaem', meaning: 'Hotel', audioSrc: '/audio/thai/vocab/rong_raem.mp3', imageSrc: '/images/thai/rong_raem.jpg' },
                { thai: 'ตั๋ว', roman: 'tǔa', meaning: 'Ticket', audioSrc: '/audio/thai/vocab/tua.mp3', imageSrc: '/images/thai/tua.jpg' },
                { thai: 'แท็กซี่', roman: 'tháek-sîi', meaning: 'Taxi', audioSrc: '/audio/thai/vocab/taxi.mp3', imageSrc: '/images/thai/tuk_tuk.jpg' },
                { thai: 'รถเมล์', roman: 'rót-meh', meaning: 'Bus', audioSrc: '/audio/thai/vocab/rot_me.mp3', imageSrc: '/images/thai/rot_me.jpg' }
            ]
        },
        {
            category: 'Shopping',
            items: [
                { thai: 'เงิน', roman: 'ngen', meaning: 'Money', audioSrc: '/audio/thai/vocab/ngoen.mp3', imageSrc: '/images/thai/ngoen.jpg' },
                { thai: 'แพง', roman: 'phaaeng', meaning: 'Expensive', audioSrc: '/audio/thai/vocab/phaeng.mp3', imageSrc: '/images/thai/phaeng.jpg' },
                { thai: 'ถูก', roman: 'thùuk', meaning: 'Cheap', audioSrc: '/audio/thai/vocab/thuk.mp3', imageSrc: '/images/thai/thuk.jpg' },
                { thai: 'ลดราคา', roman: 'lót-raa-khaa', meaning: 'Discount', audioSrc: '/audio/thai/vocab/lot_rakha.mp3', imageSrc: '/images/thai/lot_rakha.jpg' },
                { thai: 'ร้านค้า', roman: 'ráan-kháa', meaning: 'Shop', audioSrc: '/audio/thai/vocab/ran_kha.mp3', imageSrc: '/images/thai/ran_kha.jpg' }
            ]
        },
        {
            category: 'Family',
            items: [
                { thai: 'พ่อ', roman: 'phâw', meaning: 'Father', audioSrc: '/audio/thai/vocab/phor.mp3', imageSrc: '/images/thai/phor.jpg' },
                { thai: 'แม่', roman: 'mâe', meaning: 'Mother', audioSrc: '/audio/thai/vocab/mae.mp3', imageSrc: '/images/thai/mae.jpg' },
                { thai: 'พี่ชาย', roman: 'phîi-chaai', meaning: 'Older Brother', audioSrc: '/audio/thai/vocab/phi_chai.mp3', imageSrc: '/images/thai/phi_chai.jpg' },
                { thai: 'น้องสาว', roman: 'náwng-sǎao', meaning: 'Younger Sister', audioSrc: '/audio/thai/vocab/nong_sao.mp3', imageSrc: '/images/thai/nong_sao.jpg' },
                { thai: 'ลูก', roman: 'lûuk', meaning: 'Child', audioSrc: '/audio/thai/vocab/luk.mp3', imageSrc: '/images/thai/luk.jpg' }
            ]
        },
        {
            category: 'Time',
            items: [
                { thai: 'วันนี้', roman: 'wan-níi', meaning: 'Today', audioSrc: '/audio/thai/vocab/wan_ni.mp3', imageSrc: '/images/thai/wan_ni.jpg' },
                { thai: 'พรุ่งนี้', roman: 'phrûng-níi', meaning: 'Tomorrow', audioSrc: '/audio/thai/vocab/phrung_ni.mp3', imageSrc: '/images/thai/phrung_ni.jpg' },
                { thai: 'เมื่อวาน', roman: 'mûea-waan', meaning: 'Yesterday', audioSrc: '/audio/thai/vocab/muea_wan.mp3', imageSrc: '/images/thai/muea_wan.jpg' },
                { thai: 'ตอนเช้า', roman: 'tawn-cháao', meaning: 'Morning', audioSrc: '/audio/thai/vocab/ton_chao.mp3', imageSrc: '/images/thai/ton_chao.jpg' },
                { thai: 'ตอนเย็น', roman: 'tawn-yen', meaning: 'Evening', audioSrc: '/audio/thai/vocab/ton_yen.mp3', imageSrc: '/images/thai/ton_yen.jpg' }
            ]
        },
        {
            category: 'Places',
            items: [
                { thai: 'โรงเรียน', roman: 'roong-riian', meaning: 'School', audioSrc: '/audio/thai/vocab/rong_rian.mp3', imageSrc: '/images/thai/rong_rian.jpg' },
                { thai: 'โรงพยาบาล', roman: 'roong-phá-yaa-baan', meaning: 'Hospital', audioSrc: '/audio/thai/vocab/rong_phayaban.mp3', imageSrc: '/images/thai/rong_phayaban.jpg' },
                { thai: 'ตลาด', roman: 'tà-làat', meaning: 'Market', audioSrc: '/audio/thai/vocab/talat.mp3', imageSrc: '/images/thai/talat.jpg' },
                { thai: 'วัด', roman: 'wát', meaning: 'Temple', audioSrc: '/audio/thai/vocab/wat.mp3', imageSrc: '/images/thai/thai_temple.jpg' },
                { thai: 'ทะเล', roman: 'thá-leh', meaning: 'Sea/Beach', audioSrc: '/audio/thai/vocab/thale.mp3', imageSrc: '/images/thai/thale.jpg' }
            ]
        },
        {
            category: 'Animals',
            items: [
                { thai: 'หมา', roman: 'mǎa', meaning: 'Dog', audioSrc: '/audio/thai/vocab/ma.mp3', imageSrc: '/images/thai/ma.jpg' },
                { thai: 'แมว', roman: 'maaeo', meaning: 'Cat', audioSrc: '/audio/thai/vocab/maew.mp3', imageSrc: '/images/thai/maew.jpg' },
                { thai: 'ช้าง', roman: 'cháang', meaning: 'Elephant', audioSrc: '/audio/thai/vocab/chang.mp3', imageSrc: '/images/thai/elephant.jpg' },
                { thai: 'นก', roman: 'nók', meaning: 'Bird', audioSrc: '/audio/thai/vocab/nok.mp3', imageSrc: '/images/thai/nok.jpg' },
                { thai: 'ปลา', roman: 'plaa', meaning: 'Fish', audioSrc: '/audio/thai/vocab/pla.mp3', imageSrc: '/images/thai/pla.jpg' }
            ]
        }
    ]
});

// Populate flashcards with consonants
THAI.flashcards[0].cards = chars.filter(c => c.type === 'Consonant');
THAI.flashcards[1].cards = chars.filter(c => c.type === 'Consonant');
