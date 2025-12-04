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
                .map(x => ({ text: x.sound, audioSrc: x.audioSrc }));

            if (distractors.length === 3) {
                const correctOption = { text: c.sound, audioSrc: c.audioSrc };
                questions.push({
                    question: `What sound does '${c.char}' make?`,
                    options: [...distractors, correctOption].sort(() => 0.5 - Math.random()),
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
                .map(x => ({ text: x.meaning, audioSrc: x.audioSrc }));

            if (distractors.length === 3) {
                const correctOption = { text: c.meaning, audioSrc: c.audioSrc };
                questions.push({
                    question: `What does '${c.char}' mean?`,
                    options: [...distractors, correctOption].sort(() => 0.5 - Math.random()),
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
                .map(x => ({ text: x.char, audioSrc: x.audioSrc }));

            if (distractors.length === 3) {
                const correctOption = { text: c.char, audioSrc: c.audioSrc };
                questions.push({
                    question: `Which character is '${c.name}'?`,
                    options: [...distractors, correctOption].sort(() => 0.5 - Math.random()),
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
                { thai: 'สวัสดี', roman: 'sà-wàt-dii', meaning: 'Hello', audioSrc: '/audio/thai/vocab/sawatdee.mp3', emoji: '👋' },
                { thai: 'ขอบคุณ', roman: 'khàwp-khun', meaning: 'Thank you', audioSrc: '/audio/thai/vocab/khop_khun.mp3', emoji: '🙏' },
                { thai: 'ขอโทษ', roman: 'khǎw-thôot', meaning: 'Sorry', audioSrc: '/audio/thai/vocab/khor_thot.mp3', emoji: '😔' },
                { thai: 'ใช่', roman: 'châi', meaning: 'Yes', audioSrc: '/audio/thai/vocab/chai.mp3', emoji: '✅' },
                { thai: 'ไม่', roman: 'mâi', meaning: 'No', audioSrc: '/audio/thai/vocab/mai.mp3', emoji: '❌' },
                { thai: 'ลาก่อน', roman: 'laa-gàwn', meaning: 'Goodbye', audioSrc: '/audio/thai/vocab/laa_gawn.mp3', emoji: '👋' },
                { thai: 'สบายดีไหม', roman: 'sà-baai-dii-mǎi', meaning: 'How are you?', audioSrc: '/audio/thai/vocab/sabai_dee_mai.mp3', emoji: '❓' }
            ]
        },
        {
            category: 'Food & Drink',
            items: [
                { thai: 'ผัดไทย', roman: 'phàt-thai', meaning: 'Pad Thai', audioSrc: '/audio/thai/vocab/pad_thai.mp3', emoji: '🍜' },
                { thai: 'ส้มตำ', roman: 'sôm-tam', meaning: 'Papaya Salad', audioSrc: '/audio/thai/vocab/som_tum.mp3', emoji: '🥗' },
                { thai: 'ต้มยำ', roman: 'tôm-yam', meaning: 'Spicy Soup', audioSrc: '/audio/thai/vocab/tom_yum.mp3', emoji: '🍲' },
                { thai: 'ข้าวเหนียวมะม่วง', roman: 'khâao-nǐao-má-mûang', meaning: 'Mango Sticky Rice', audioSrc: '/audio/thai/vocab/khao_niao_mamuang.mp3', emoji: '🥭' },
                { thai: 'ข้าว', roman: 'khâao', meaning: 'Rice', audioSrc: '/audio/thai/vocab/khao.mp3', emoji: '🍚' },
                { thai: 'น้ำ', roman: 'náam', meaning: 'Water', audioSrc: '/audio/thai/vocab/nam.mp3', emoji: '💧' },
                { thai: 'กาแฟ', roman: 'gaa-fɛɛ', meaning: 'Coffee', audioSrc: '/audio/thai/vocab/coffee.mp3', emoji: '☕' },
                { thai: 'ชา', roman: 'chaa', meaning: 'Tea', audioSrc: '/audio/thai/vocab/tea.mp3', emoji: '🍵' },
                { thai: 'นม', roman: 'nom', meaning: 'Milk', audioSrc: '/audio/thai/vocab/milk.mp3', emoji: '🥛' },
                { thai: 'อาหาร', roman: 'aa-hǎan', meaning: 'Food', audioSrc: '/audio/thai/vocab/food.mp3', emoji: '🍽️' },
                { thai: 'ผลไม้', roman: 'phǒn-lá-mái', meaning: 'Fruit', audioSrc: '/audio/thai/vocab/fruit.mp3', emoji: '🍎' },
                { thai: 'ขนม', roman: 'khà-nǒm', meaning: 'Dessert/Snack', audioSrc: '/audio/thai/vocab/dessert.mp3', emoji: '🍪' },
                { thai: 'ขนมปัง', roman: 'khà-nǒm-bpang', meaning: 'Bread', audioSrc: '/audio/thai/vocab/bread.mp3', emoji: '🍞' },
                { thai: 'เนื้อ', roman: 'núua', meaning: 'Beef', audioSrc: '/audio/thai/vocab/beef.mp3', emoji: '🥩' },
                { thai: 'หมู', roman: 'mǔu', meaning: 'Pork', audioSrc: '/audio/thai/vocab/pork.mp3', emoji: '🥓' },
                { thai: 'ไก่', roman: 'gài', meaning: 'Chicken', audioSrc: '/audio/thai/vocab/chicken.mp3', emoji: '🍗' },
                { thai: 'ปลา', roman: 'plaa', meaning: 'Fish', audioSrc: '/audio/thai/vocab/pla.mp3', emoji: '🐟' },
                { thai: 'ไข่', roman: 'khài', meaning: 'Egg', audioSrc: '/audio/thai/vocab/egg.mp3', emoji: '🥚' }
            ]
        },
        {
            category: 'Animals',
            items: [
                { thai: 'หมา', roman: 'mǎa', meaning: 'Dog', audioSrc: '/audio/thai/vocab/ma.mp3', emoji: '🐕' },
                { thai: 'แมว', roman: 'maaeo', meaning: 'Cat', audioSrc: '/audio/thai/vocab/maew.mp3', emoji: '🐈' },
                { thai: 'ช้าง', roman: 'cháang', meaning: 'Elephant', audioSrc: '/audio/thai/vocab/chang.mp3', emoji: '🐘' },
                { thai: 'นก', roman: 'nók', meaning: 'Bird', audioSrc: '/audio/thai/vocab/nok.mp3', emoji: '🐦' },
                { thai: 'ลิง', roman: 'ling', meaning: 'Monkey', audioSrc: '/audio/thai/vocab/ling.mp3', emoji: '🐒' },
                { thai: 'งู', roman: 'nguu', meaning: 'Snake', audioSrc: '/audio/thai/vocab/ngu.mp3', emoji: '🐍' },
                { thai: 'เสือ', roman: 'sǔua', meaning: 'Tiger', audioSrc: '/audio/thai/vocab/tiger.mp3', emoji: '🐅' },
                { thai: 'ม้า', roman: 'máa', meaning: 'Horse', audioSrc: '/audio/thai/vocab/horse.mp3', emoji: '🐎' },
                { thai: 'วัว', roman: 'wua', meaning: 'Cow', audioSrc: '/audio/thai/vocab/cow.mp3', emoji: '🐄' },
                { thai: 'หมี', roman: 'mǐi', meaning: 'Bear', audioSrc: '/audio/thai/vocab/bear.mp3', emoji: '🐻' },
                { thai: 'กบ', roman: 'gòp', meaning: 'Frog', audioSrc: '/audio/thai/vocab/frog.mp3', emoji: '🐸' },
                { thai: 'เป็ด', roman: 'bpèt', meaning: 'Duck', audioSrc: '/audio/thai/vocab/duck.mp3', emoji: '🦆' },
                { thai: 'กระต่าย', roman: 'grà-dtàai', meaning: 'Rabbit', audioSrc: '/audio/thai/vocab/rabbit.mp3', emoji: '🐇' },
                { thai: 'เต่า', roman: 'dtào', meaning: 'Turtle', audioSrc: '/audio/thai/vocab/turtle.mp3', emoji: '🐢' }
            ]
        },
        {
            category: 'Family',
            items: [
                { thai: 'พ่อ', roman: 'phâw', meaning: 'Father', audioSrc: '/audio/thai/vocab/phor.mp3', emoji: '👨' },
                { thai: 'แม่', roman: 'mâe', meaning: 'Mother', audioSrc: '/audio/thai/vocab/mae.mp3', emoji: '👩' },
                { thai: 'พี่ชาย', roman: 'phîi-chaai', meaning: 'Older Brother', audioSrc: '/audio/thai/vocab/phi_chai.mp3', emoji: '👦' },
                { thai: 'น้องสาว', roman: 'náwng-sǎao', meaning: 'Younger Sister', audioSrc: '/audio/thai/vocab/nong_sao.mp3', emoji: '👧' },
                { thai: 'ลูก', roman: 'lûuk', meaning: 'Child', audioSrc: '/audio/thai/vocab/luk.mp3', emoji: '👶' },
                { thai: 'ปู่', roman: 'bpùu', meaning: 'Grandfather (paternal)', audioSrc: '/audio/thai/vocab/grandpa.mp3', emoji: '👴' },
                { thai: 'ย่า', roman: 'yâa', meaning: 'Grandmother (paternal)', audioSrc: '/audio/thai/vocab/grandma.mp3', emoji: '👵' },
                { thai: 'ครอบครัว', roman: 'khrâwp-khruua', meaning: 'Family', audioSrc: '/audio/thai/vocab/family.mp3', emoji: '👨‍👩‍👧‍👦' }
            ]
        },
        {
            category: 'Body Parts',
            items: [
                { thai: 'หัว', roman: 'hǔa', meaning: 'Head', audioSrc: '/audio/thai/vocab/head.mp3', emoji: '💆' },
                { thai: 'ตา', roman: 'dtaa', meaning: 'Eye', audioSrc: '/audio/thai/vocab/eye.mp3', emoji: '👁️' },
                { thai: 'จมูก', roman: 'jà-mùuk', meaning: 'Nose', audioSrc: '/audio/thai/vocab/nose.mp3', emoji: '👃' },
                { thai: 'ปาก', roman: 'bpàak', meaning: 'Mouth', audioSrc: '/audio/thai/vocab/mouth.mp3', emoji: '👄' },
                { thai: 'หู', roman: 'hǔu', meaning: 'Ear', audioSrc: '/audio/thai/vocab/ear.mp3', emoji: '👂' },
                { thai: 'มือ', roman: 'muu', meaning: 'Hand', audioSrc: '/audio/thai/vocab/hand.mp3', emoji: '✋' },
                { thai: 'เท้า', roman: 'tháao', meaning: 'Foot', audioSrc: '/audio/thai/vocab/foot.mp3', emoji: '🦶' },
                { thai: 'หัวใจ', roman: 'hǔa-jai', meaning: 'Heart', audioSrc: '/audio/thai/vocab/heart.mp3', emoji: '❤️' }
            ]
        },
        {
            category: 'Colors',
            items: [
                { thai: 'สีแดง', roman: 'sǐi-daeng', meaning: 'Red', audioSrc: '/audio/thai/vocab/si_daeng.mp3', emoji: '🔴' },
                { thai: 'สีเขียว', roman: 'sǐi-khǐao', meaning: 'Green', audioSrc: '/audio/thai/vocab/si_khiao.mp3', emoji: '🟢' },
                { thai: 'สีน้ำเงิน', roman: 'sǐi-náam-ngen', meaning: 'Blue', audioSrc: '/audio/thai/vocab/si_nam_ngoen.mp3', emoji: '🔵' },
                { thai: 'สีขาว', roman: 'sǐi-khǎao', meaning: 'White', audioSrc: '/audio/thai/vocab/si_khao.mp3', emoji: '⚪' },
                { thai: 'สีดำ', roman: 'sǐi-dam', meaning: 'Black', audioSrc: '/audio/thai/vocab/si_dam.mp3', emoji: '⚫' },
                { thai: 'สีเหลือง', roman: 'sǐi-lǔuang', meaning: 'Yellow', audioSrc: '/audio/thai/vocab/yellow.mp3', emoji: '🟡' },
                { thai: 'สีส้ม', roman: 'sǐi-sôm', meaning: 'Orange', audioSrc: '/audio/thai/vocab/orange.mp3', emoji: '🟠' },
                { thai: 'สีม่วง', roman: 'sǐi-mûang', meaning: 'Purple', audioSrc: '/audio/thai/vocab/purple.mp3', emoji: '🟣' },
                { thai: 'สีชมพู', roman: 'sǐi-chom-phuu', meaning: 'Pink', audioSrc: '/audio/thai/vocab/pink.mp3', emoji: '🌸' },
                { thai: 'สีน้ำตาล', roman: 'sǐi-náam-dtaan', meaning: 'Brown', audioSrc: '/audio/thai/vocab/brown.mp3', emoji: '🟤' }
            ]
        },
        {
            category: 'Weather & Nature',
            items: [
                { thai: 'ดวงอาทิตย์', roman: 'duuang-aa-thít', meaning: 'Sun', audioSrc: '/audio/thai/vocab/sun.mp3', emoji: '☀️' },
                { thai: 'ดวงจันทร์', roman: 'duuang-jan', meaning: 'Moon', audioSrc: '/audio/thai/vocab/moon.mp3', emoji: '🌙' },
                { thai: 'ดาว', roman: 'daao', meaning: 'Star', audioSrc: '/audio/thai/vocab/star.mp3', emoji: '⭐' },
                { thai: 'ฝน', roman: 'fǒn', meaning: 'Rain', audioSrc: '/audio/thai/vocab/rain.mp3', emoji: '🌧️' },
                { thai: 'หิมะ', roman: 'hì-má', meaning: 'Snow', audioSrc: '/audio/thai/vocab/snow.mp3', emoji: '❄️' },
                { thai: 'ต้นไม้', roman: 'dtôn-máai', meaning: 'Tree', audioSrc: '/audio/thai/vocab/tree.mp3', emoji: '🌳' },
                { thai: 'ดอกไม้', roman: 'dàwk-máai', meaning: 'Flower', audioSrc: '/audio/thai/vocab/flower.mp3', emoji: '🌺' },
                { thai: 'ทะเล', roman: 'thá-leh', meaning: 'Sea/Beach', audioSrc: '/audio/thai/vocab/thale.mp3', emoji: '🏖️' },
                { thai: 'ภูเขา', roman: 'phuu-khǎo', meaning: 'Mountain', audioSrc: '/audio/thai/vocab/mountain.mp3', emoji: '⛰️' },
                { thai: 'ไฟ', roman: 'fai', meaning: 'Fire', audioSrc: '/audio/thai/vocab/fire.mp3', emoji: '🔥' }
            ]
        },
        {
            category: 'Time',
            items: [
                { thai: 'วันนี้', roman: 'wan-níi', meaning: 'Today', audioSrc: '/audio/thai/vocab/wan_ni.mp3', emoji: '📅' },
                { thai: 'พรุ่งนี้', roman: 'phrûng-níi', meaning: 'Tomorrow', audioSrc: '/audio/thai/vocab/phrung_ni.mp3', emoji: '➡️' },
                { thai: 'เมื่อวาน', roman: 'mûea-waan', meaning: 'Yesterday', audioSrc: '/audio/thai/vocab/muea_wan.mp3', emoji: '⬅️' },
                { thai: 'ตอนเช้า', roman: 'tawn-cháao', meaning: 'Morning', audioSrc: '/audio/thai/vocab/ton_chao.mp3', emoji: '🌅' },
                { thai: 'ตอนเย็น', roman: 'tawn-yen', meaning: 'Evening', audioSrc: '/audio/thai/vocab/ton_yen.mp3', emoji: '🌆' },
                { thai: 'กลางคืน', roman: 'glaang-khuun', meaning: 'Night', audioSrc: '/audio/thai/vocab/night.mp3', emoji: '🌙' },
                { thai: 'เวลา', roman: 'weh-laa', meaning: 'Time', audioSrc: '/audio/thai/vocab/time.mp3', emoji: '⏰' }
            ]
        },
        {
            category: 'Places',
            items: [
                { thai: 'โรงเรียน', roman: 'roong-riian', meaning: 'School', audioSrc: '/audio/thai/vocab/rong_rian.mp3', emoji: '🏫' },
                { thai: 'โรงพยาบาล', roman: 'roong-phá-yaa-baan', meaning: 'Hospital', audioSrc: '/audio/thai/vocab/rong_phayaban.mp3', emoji: '🏥' },
                { thai: 'ตลาด', roman: 'tà-làat', meaning: 'Market', audioSrc: '/audio/thai/vocab/talat.mp3', emoji: '🛒' },
                { thai: 'วัด', roman: 'wát', meaning: 'Temple', audioSrc: '/audio/thai/vocab/wat.mp3', emoji: '🛕' },
                { thai: 'สนามบิน', roman: 'sà-nǎam-bin', meaning: 'Airport', audioSrc: '/audio/thai/vocab/sanam_bin.mp3', emoji: '✈️' },
                { thai: 'โรงแรม', roman: 'roong-raaem', meaning: 'Hotel', audioSrc: '/audio/thai/vocab/rong_raem.mp3', emoji: '🏨' },
                { thai: 'ร้านค้า', roman: 'ráan-kháa', meaning: 'Shop', audioSrc: '/audio/thai/vocab/ran_kha.mp3', emoji: '🏪' },
                { thai: 'บ้าน', roman: 'bâan', meaning: 'House/Home', audioSrc: '/audio/thai/vocab/home.mp3', emoji: '🏠' },
                { thai: 'ห้องน้ำ', roman: 'hâwng-náam', meaning: 'Bathroom', audioSrc: '/audio/thai/vocab/hong_nam.mp3', emoji: '🚻' }
            ]
        },
        {
            category: 'Transport',
            items: [
                { thai: 'รถเมล์', roman: 'rót-meh', meaning: 'Bus', audioSrc: '/audio/thai/vocab/rot_me.mp3', emoji: '🚌' },
                { thai: 'แท็กซี่', roman: 'tháek-sîi', meaning: 'Taxi', audioSrc: '/audio/thai/vocab/taxi.mp3', emoji: '🚕' },
                { thai: 'ตั๋ว', roman: 'tǔa', meaning: 'Ticket', audioSrc: '/audio/thai/vocab/tua.mp3', emoji: '🎫' },
                { thai: 'รถไฟ', roman: 'rót-fai', meaning: 'Train', audioSrc: '/audio/thai/vocab/train.mp3', emoji: '🚆' },
                { thai: 'เครื่องบิน', roman: 'khrûuang-bin', meaning: 'Airplane', audioSrc: '/audio/thai/vocab/airplane.mp3', emoji: '✈️' },
                { thai: 'เรือ', roman: 'ruua', meaning: 'Boat', audioSrc: '/audio/thai/vocab/boat.mp3', emoji: '🚤' },
                { thai: 'รถยนต์', roman: 'rót-yon', meaning: 'Car', audioSrc: '/audio/thai/vocab/car.mp3', emoji: '🚗' },
                { thai: 'จักรยาน', roman: 'jàk-grà-yaan', meaning: 'Bicycle', audioSrc: '/audio/thai/vocab/bicycle.mp3', emoji: '🚲' }
            ]
        },
        {
            category: 'Emotions',
            items: [
                { thai: 'ดีใจ', roman: 'dii-jai', meaning: 'Happy', audioSrc: '/audio/thai/vocab/happy.mp3', emoji: '😊' },
                { thai: 'เศร้า', roman: 'sâo', meaning: 'Sad', audioSrc: '/audio/thai/vocab/sad.mp3', emoji: '😢' },
                { thai: 'โกรธ', roman: 'gròht', meaning: 'Angry', audioSrc: '/audio/thai/vocab/angry.mp3', emoji: '😠' },
                { thai: 'รัก', roman: 'rák', meaning: 'Love', audioSrc: '/audio/thai/vocab/love.mp3', emoji: '❤️' },
                { thai: 'กลัว', roman: 'gluua', meaning: 'Scared', audioSrc: '/audio/thai/vocab/scared.mp3', emoji: '😱' },
                { thai: 'เหงา', roman: 'ngǎo', meaning: 'Lonely', audioSrc: '/audio/thai/vocab/lonely.mp3', emoji: '😔' }
            ]
        },
        {
            category: 'Actions',
            items: [
                { thai: 'กิน', roman: 'gin', meaning: 'Eat', audioSrc: '/audio/thai/vocab/eat.mp3', emoji: '🍽️' },
                { thai: 'ดื่ม', roman: 'dùum', meaning: 'Drink', audioSrc: '/audio/thai/vocab/drink.mp3', emoji: '🥤' },
                { thai: 'นอน', roman: 'nawn', meaning: 'Sleep', audioSrc: '/audio/thai/vocab/sleep.mp3', emoji: '😴' },
                { thai: 'เดิน', roman: 'dəən', meaning: 'Walk', audioSrc: '/audio/thai/vocab/walk.mp3', emoji: '🚶' },
                { thai: 'วิ่ง', roman: 'wîng', meaning: 'Run', audioSrc: '/audio/thai/vocab/run.mp3', emoji: '🏃' },
                { thai: 'พูด', roman: 'phûut', meaning: 'Speak', audioSrc: '/audio/thai/vocab/speak.mp3', emoji: '🗣️' },
                { thai: 'อ่าน', roman: 'àan', meaning: 'Read', audioSrc: '/audio/thai/vocab/read.mp3', emoji: '📖' },
                { thai: 'เขียน', roman: 'khǐan', meaning: 'Write', audioSrc: '/audio/thai/vocab/write.mp3', emoji: '✍️' },
                { thai: 'ดู', roman: 'duu', meaning: 'Watch/Look', audioSrc: '/audio/thai/vocab/watch.mp3', emoji: '📺' },
                { thai: 'ฟัง', roman: 'fang', meaning: 'Listen', audioSrc: '/audio/thai/vocab/listen.mp3', emoji: '👂' }
            ]
        },
        {
            category: 'Shopping',
            items: [
                { thai: 'เงิน', roman: 'ngen', meaning: 'Money', audioSrc: '/audio/thai/vocab/ngoen.mp3', emoji: '💵' },
                { thai: 'แพง', roman: 'phaaeng', meaning: 'Expensive', audioSrc: '/audio/thai/vocab/phaeng.mp3', emoji: '💎' },
                { thai: 'ถูก', roman: 'thùuk', meaning: 'Cheap', audioSrc: '/audio/thai/vocab/thuk.mp3', emoji: '🏷️' },
                { thai: 'ลดราคา', roman: 'lót-raa-khaa', meaning: 'Discount', audioSrc: '/audio/thai/vocab/lot_rakha.mp3', emoji: '📉' },
                { thai: 'เท่าไหร่', roman: 'thâo-rài', meaning: 'How much?', audioSrc: '/audio/thai/vocab/thao_rai.mp3', emoji: '💰' },
                { thai: 'ซื้อ', roman: 'súu', meaning: 'Buy', audioSrc: '/audio/thai/vocab/buy.mp3', emoji: '🛍️' },
                { thai: 'ขาย', roman: 'khǎai', meaning: 'Sell', audioSrc: '/audio/thai/vocab/sell.mp3', emoji: '🏪' }
            ]
        },
        {
            category: 'Fruits',
            items: [
                { thai: 'ทุเรียน', roman: 'thú-riian', meaning: 'Durian', audioSrc: '/audio/thai/vocab/durian.mp3', emoji: '🍈' },
                { thai: 'แตงโม', roman: 'dtaeng-moo', meaning: 'Watermelon', audioSrc: '/audio/thai/vocab/watermelon.mp3', emoji: '🍉' },
                { thai: 'กล้วย', roman: 'glûuai', meaning: 'Banana', audioSrc: '/audio/thai/vocab/banana.mp3', emoji: '🍌' },
                { thai: 'องุ่น', roman: 'à-ngùn', meaning: 'Grape', audioSrc: '/audio/thai/vocab/grape.mp3', emoji: '🍇' },
                { thai: 'สตรอเบอร์รี่', roman: 'sà-dtraw-ber-rîi', meaning: 'Strawberry', audioSrc: '/audio/thai/vocab/strawberry.mp3', emoji: '🍓' },
                { thai: 'สับปะรด', roman: 'sàp-bpà-rót', meaning: 'Pineapple', audioSrc: '/audio/thai/vocab/pineapple.mp3', emoji: '🍍' },
                { thai: 'มะพร้าว', roman: 'má-phráao', meaning: 'Coconut', audioSrc: '/audio/thai/vocab/coconut.mp3', emoji: '🥥' },
                { thai: 'ส้ม', roman: 'sôm', meaning: 'Orange', audioSrc: '/audio/thai/vocab/orange.mp3', emoji: '🍊' },
                { thai: 'มะนาว', roman: 'má-naao', meaning: 'Lemon', audioSrc: '/audio/thai/vocab/lemon.mp3', emoji: '🍋' },
                { thai: 'เชอร์รี่', roman: 'cher-rîi', meaning: 'Cherry', audioSrc: '/audio/thai/vocab/cherry.mp3', emoji: '🍒' }
            ]
        },
        {
            category: 'Vegetables',
            items: [
                { thai: 'ข้าวโพด', roman: 'khâao-phôot', meaning: 'Corn', audioSrc: '/audio/thai/vocab/corn.mp3', emoji: '🌽' },
                { thai: 'แครอท', roman: 'khaae-ràwt', meaning: 'Carrot', audioSrc: '/audio/thai/vocab/carrot.mp3', emoji: '🥕' },
                { thai: 'มันฝรั่ง', roman: 'man-fà-ràng', meaning: 'Potato', audioSrc: '/audio/thai/vocab/potato.mp3', emoji: '🥔' },
                { thai: 'มะเขือเทศ', roman: 'má-khǔua-thêet', meaning: 'Tomato', audioSrc: '/audio/thai/vocab/tomato.mp3', emoji: '🍅' },
                { thai: 'บรอกโคลี', roman: 'bràwk-khoo-lii', meaning: 'Broccoli', audioSrc: '/audio/thai/vocab/broccoli.mp3', emoji: '🥦' },
                { thai: 'เห็ด', roman: 'hèt', meaning: 'Mushroom', audioSrc: '/audio/thai/vocab/mushroom.mp3', emoji: '🍄' },
                { thai: 'หัวหอม', roman: 'hǔua-hǎwm', meaning: 'Onion', audioSrc: '/audio/thai/vocab/onion.mp3', emoji: '🧅' },
                { thai: 'กระเทียม', roman: 'grà-thiiam', meaning: 'Garlic', audioSrc: '/audio/thai/vocab/garlic.mp3', emoji: '🧄' },
                { thai: 'พริก', roman: 'phrík', meaning: 'Chili', audioSrc: '/audio/thai/vocab/chili.mp3', emoji: '🌶️' },
                { thai: 'แตงกวา', roman: 'dtaeng-gwaa', meaning: 'Cucumber', audioSrc: '/audio/thai/vocab/cucumber.mp3', emoji: '🥒' }
            ]
        },
        {
            category: 'Clothes',
            items: [
                { thai: 'เสื้อเชิ้ต', roman: 'sûua-chóet', meaning: 'Shirt', audioSrc: '/audio/thai/vocab/shirt.mp3', emoji: '👔' },
                { thai: 'เสื้อยืด', roman: 'sûua-yûuet', meaning: 'T-shirt', audioSrc: '/audio/thai/vocab/tshirt.mp3', emoji: '👕' },
                { thai: 'กางเกง', roman: 'gaang-geeng', meaning: 'Pants', audioSrc: '/audio/thai/vocab/pants.mp3', emoji: '👖' },
                { thai: 'ชุดเดรส', roman: 'chút-dréet', meaning: 'Dress', audioSrc: '/audio/thai/vocab/dress.mp3', emoji: '👗' },
                { thai: 'กระโปรง', roman: 'grà-bproong', meaning: 'Skirt', audioSrc: '/audio/thai/vocab/skirt.mp3', emoji: '👚' },
                { thai: 'รองเท้า', roman: 'rawng-tháao', meaning: 'Shoe', audioSrc: '/audio/thai/vocab/shoe.mp3', emoji: '👞' },
                { thai: 'หมวก', roman: 'mùuak', meaning: 'Hat', audioSrc: '/audio/thai/vocab/hat.mp3', emoji: '🧢' },
                { thai: 'แว่นตา', roman: 'wâaen-dtaa', meaning: 'Glasses', audioSrc: '/audio/thai/vocab/glasses.mp3', emoji: '👓' },
                { thai: 'นาฬิกา', roman: 'naa-lí-gaa', meaning: 'Watch', audioSrc: '/audio/thai/vocab/watch_time.mp3', emoji: '⌚' },
                { thai: 'แหวน', roman: 'wǎaen', meaning: 'Ring', audioSrc: '/audio/thai/vocab/ring.mp3', emoji: '💍' }
            ]
        },
        {
            category: 'House',
            items: [
                { thai: 'เตียง', roman: 'dtiiang', meaning: 'Bed', audioSrc: '/audio/thai/vocab/bed.mp3', emoji: '🛏️' },
                { thai: 'เก้าอี้', roman: 'gâo-îi', meaning: 'Chair', audioSrc: '/audio/thai/vocab/chair.mp3', emoji: '🪑' },
                { thai: 'โซฟา', roman: 'soo-faa', meaning: 'Sofa', audioSrc: '/audio/thai/vocab/sofa.mp3', emoji: '🛋️' },
                { thai: 'ประตู', roman: 'bprà-dtuu', meaning: 'Door', audioSrc: '/audio/thai/vocab/door.mp3', emoji: '🚪' },
                { thai: 'หน้าต่าง', roman: 'nâa-dtàang', meaning: 'Window', audioSrc: '/audio/thai/vocab/window.mp3', emoji: '🪟' },
                { thai: 'ชักโครก', roman: 'chák-khrôok', meaning: 'Toilet', audioSrc: '/audio/thai/vocab/toilet.mp3', emoji: '🚽' },
                { thai: 'ฝักบัว', roman: 'fàk-buua', meaning: 'Shower', audioSrc: '/audio/thai/vocab/shower.mp3', emoji: '🚿' },
                { thai: 'โคมไฟ', roman: 'khoom-fai', meaning: 'Lamp', audioSrc: '/audio/thai/vocab/lamp.mp3', emoji: '💡' },
                { thai: 'กุญแจ', roman: 'gun-jaaem', meaning: 'Key', audioSrc: '/audio/thai/vocab/key.mp3', emoji: '🔑' },
                { thai: 'คอมพิวเตอร์', roman: 'khawm-phiu-dtêer', meaning: 'Computer', audioSrc: '/audio/thai/vocab/computer.mp3', emoji: '💻' }
            ]
        },
        {
            category: 'Jobs',
            items: [
                { thai: 'หมอ', roman: 'mǎw', meaning: 'Doctor', audioSrc: '/audio/thai/vocab/doctor.mp3', emoji: '👨‍⚕️' },
                { thai: 'พยาบาล', roman: 'phá-yaa-baan', meaning: 'Nurse', audioSrc: '/audio/thai/vocab/nurse.mp3', emoji: '👩‍⚕️' },
                { thai: 'ครู', roman: 'khruu', meaning: 'Teacher', audioSrc: '/audio/thai/vocab/teacher.mp3', emoji: '👩‍🏫' },
                { thai: 'นักเรียน', roman: 'nák-riian', meaning: 'Student', audioSrc: '/audio/thai/vocab/student.mp3', emoji: '👨‍🎓' },
                { thai: 'ตำรวจ', roman: 'dtam-rùuat', meaning: 'Police', audioSrc: '/audio/thai/vocab/police.mp3', emoji: '👮' },
                { thai: 'พ่อครัว', roman: 'phâw-khruua', meaning: 'Chef', audioSrc: '/audio/thai/vocab/chef.mp3', emoji: '👨‍🍳' },
                { thai: 'ชาวนา', roman: 'chaao-naa', meaning: 'Farmer', audioSrc: '/audio/thai/vocab/farmer.mp3', emoji: '👨‍🌾' },
                { thai: 'ศิลปิน', roman: 'sǐn-lá-bpin', meaning: 'Artist', audioSrc: '/audio/thai/vocab/artist.mp3', emoji: '🎨' },
                { thai: 'นักร้อง', roman: 'nák-ráwng', meaning: 'Singer', audioSrc: '/audio/thai/vocab/singer.mp3', emoji: '🎤' },
                { thai: 'ทหาร', roman: 'thá-hǎan', meaning: 'Soldier', audioSrc: '/audio/thai/vocab/soldier.mp3', emoji: '💂' }
            ]
        },
        {
            category: 'Sports',
            items: [
                { thai: 'ฟุตบอล', roman: 'fút-bawn', meaning: 'Football', audioSrc: '/audio/thai/vocab/football.mp3', emoji: '⚽' },
                { thai: 'บาสเกตบอล', roman: 'bàat-gêet-bawn', meaning: 'Basketball', audioSrc: '/audio/thai/vocab/basketball.mp3', emoji: '🏀' },
                { thai: 'เทนนิส', roman: 'then-nít', meaning: 'Tennis', audioSrc: '/audio/thai/vocab/tennis.mp3', emoji: '🎾' },
                { thai: 'แบดมินตัน', roman: 'bàaet-min-dtan', meaning: 'Badminton', audioSrc: '/audio/thai/vocab/badminton.mp3', emoji: '🏸' },
                { thai: 'มวย', roman: 'muuai', meaning: 'Boxing', audioSrc: '/audio/thai/vocab/boxing.mp3', emoji: '🥊' },
                { thai: 'ว่ายน้ำ', roman: 'wâai-náam', meaning: 'Swimming', audioSrc: '/audio/thai/vocab/swimming.mp3', emoji: '🏊' },
                { thai: 'วิ่ง', roman: 'wîng', meaning: 'Running', audioSrc: '/audio/thai/vocab/running.mp3', emoji: '🏃' },
                { thai: 'ปั่นจักรยาน', roman: 'bpàn-jàk-grà-yaan', meaning: 'Cycling', audioSrc: '/audio/thai/vocab/cycling.mp3', emoji: '🚴' },
                { thai: 'กอล์ฟ', roman: 'gáwf', meaning: 'Golf', audioSrc: '/audio/thai/vocab/golf.mp3', emoji: '⛳' },
                { thai: 'วอลเลย์บอล', roman: 'won-lee-bawn', meaning: 'Volleyball', audioSrc: '/audio/thai/vocab/volleyball.mp3', emoji: '🏐' }
            ]
        },
        {
            category: 'Vehicles',
            items: [
                { thai: 'มอเตอร์ไซค์', roman: 'maw-dtêer-sai', meaning: 'Motorcycle', audioSrc: '/audio/thai/vocab/motorcycle.mp3', emoji: '🏍️' },
                { thai: 'ตุ๊กตุ๊ก', roman: 'dtúk-dtúk', meaning: 'Tuk Tuk', audioSrc: '/audio/thai/vocab/tuktuk.mp3', emoji: '🛺' },
                { thai: 'รถบรรทุก', roman: 'rót-ban-thúk', meaning: 'Truck', audioSrc: '/audio/thai/vocab/truck.mp3', emoji: '🚚' },
                { thai: 'รถพยาบาล', roman: 'rót-phá-yaa-baan', meaning: 'Ambulance', audioSrc: '/audio/thai/vocab/ambulance.mp3', emoji: '🚑' },
                { thai: 'รถดับเพลิง', roman: 'rót-dàp-phleeng', meaning: 'Fire Truck', audioSrc: '/audio/thai/vocab/firetruck.mp3', emoji: '🚒' },
                { thai: 'รถตำรวจ', roman: 'rót-dtam-rùuat', meaning: 'Police Car', audioSrc: '/audio/thai/vocab/policecar.mp3', emoji: '🚓' },
                { thai: 'เฮลิคอปเตอร์', roman: 'hee-lí-khàwp-dtêer', meaning: 'Helicopter', audioSrc: '/audio/thai/vocab/helicopter.mp3', emoji: '🚁' },
                { thai: 'จรวด', roman: 'jà-rùuat', meaning: 'Rocket', audioSrc: '/audio/thai/vocab/rocket.mp3', emoji: '🚀' },
                { thai: 'เรือ', roman: 'ruua', meaning: 'Ship', audioSrc: '/audio/thai/vocab/ship.mp3', emoji: '🚢' },
                { thai: 'รถไฟใต้ดิน', roman: 'rót-fai-dtâai-din', meaning: 'Subway', audioSrc: '/audio/thai/vocab/subway.mp3', emoji: '🚇' }
            ]
        },
        {
            category: 'Nature',
            items: [
                { thai: 'โลก', roman: 'lôok', meaning: 'Earth', audioSrc: '/audio/thai/vocab/earth.mp3', emoji: '🌍' },
                { thai: 'ท้องฟ้า', roman: 'tháwng-fáa', meaning: 'Sky', audioSrc: '/audio/thai/vocab/sky.mp3', emoji: '☁️' },
                { thai: 'เมฆ', roman: 'mêek', meaning: 'Cloud', audioSrc: '/audio/thai/vocab/cloud.mp3', emoji: '☁️' },
                { thai: 'รุ้ง', roman: 'rúng', meaning: 'Rainbow', audioSrc: '/audio/thai/vocab/rainbow.mp3', emoji: '🌈' },
                { thai: 'ป่า', roman: 'bpàa', meaning: 'Forest', audioSrc: '/audio/thai/vocab/forest.mp3', emoji: '🌲' },
                { thai: 'มหาสมุทร', roman: 'má-hǎa-sà-mùt', meaning: 'Ocean', audioSrc: '/audio/thai/vocab/ocean.mp3', emoji: '🌊' },
                { thai: 'แม่น้ำ', roman: 'mâae-náam', meaning: 'River', audioSrc: '/audio/thai/vocab/river.mp3', emoji: '🏞️' },
                { thai: 'หิน', roman: 'hǐn', meaning: 'Rock', audioSrc: '/audio/thai/vocab/rock.mp3', emoji: '🪨' },
                { thai: 'ใบไม้', roman: 'bai-máai', meaning: 'Leaf', audioSrc: '/audio/thai/vocab/leaf.mp3', emoji: '🍃' },
                { thai: 'กระบองเพชร', roman: 'grà-bawng-phét', meaning: 'Cactus', audioSrc: '/audio/thai/vocab/cactus.mp3', emoji: '🌵' }
            ]
        },
        {
            category: 'Technology',
            items: [
                { thai: 'โทรศัพท์', roman: 'thoo-rá-sàp', meaning: 'Phone', audioSrc: '/audio/thai/vocab/phone.mp3', emoji: '📱' },
                { thai: 'กล้อง', roman: 'glâwng', meaning: 'Camera', audioSrc: '/audio/thai/vocab/camera.mp3', emoji: '📷' },
                { thai: 'ทีวี', roman: 'thii-wii', meaning: 'Television', audioSrc: '/audio/thai/vocab/tv.mp3', emoji: '📺' },
                { thai: 'แบตเตอรี่', roman: 'bàaet-dtêer-rîi', meaning: 'Battery', audioSrc: '/audio/thai/vocab/battery.mp3', emoji: '🔋' },
                { thai: 'หุ่นยนต์', roman: 'hùn-yon', meaning: 'Robot', audioSrc: '/audio/thai/vocab/robot.mp3', emoji: '🤖' },
                { thai: 'เกม', roman: 'geem', meaning: 'Game', audioSrc: '/audio/thai/vocab/game.mp3', emoji: '🎮' },
                { thai: 'หูฟัง', roman: 'hǔu-fang', meaning: 'Headphone', audioSrc: '/audio/thai/vocab/headphone.mp3', emoji: '🎧' },
                { thai: 'ไมโครโฟน', roman: 'mai-khroo-foon', meaning: 'Microphone', audioSrc: '/audio/thai/vocab/microphone.mp3', emoji: '🎙️' },
                { thai: 'แล็ปท็อป', roman: 'láep-tháwp', meaning: 'Laptop', audioSrc: '/audio/thai/vocab/laptop.mp3', emoji: '💻' },
                { thai: 'เครื่องพิมพ์', roman: 'khrûuang-phim', meaning: 'Printer', audioSrc: '/audio/thai/vocab/printer.mp3', emoji: '🖨️' }
            ]
        },
        {
            category: 'Drinks & Snacks',
            items: [
                { thai: 'เบียร์', roman: 'biia', meaning: 'Beer', audioSrc: '/audio/thai/vocab/beer.mp3', emoji: '🍺' },
                { thai: 'ไวน์', roman: 'waai', meaning: 'Wine', audioSrc: '/audio/thai/vocab/wine.mp3', emoji: '🍷' },
                { thai: 'น้ำผลไม้', roman: 'náam-phǒn-lá-máai', meaning: 'Juice', audioSrc: '/audio/thai/vocab/juice.mp3', emoji: '🧃' },
                { thai: 'ไอศกรีม', roman: 'ai-sà-griim', meaning: 'Ice Cream', audioSrc: '/audio/thai/vocab/icecream.mp3', emoji: '🍦' },
                { thai: 'เค้ก', roman: 'khêek', meaning: 'Cake', audioSrc: '/audio/thai/vocab/cake.mp3', emoji: '🍰' },
                { thai: 'ช็อกโกแลต', roman: 'chók-goo-láet', meaning: 'Chocolate', audioSrc: '/audio/thai/vocab/chocolate.mp3', emoji: '🍫' },
                { thai: 'พิซซ่า', roman: 'phít-sâa', meaning: 'Pizza', audioSrc: '/audio/thai/vocab/pizza.mp3', emoji: '🍕' },
                { thai: 'เบอร์เกอร์', roman: 'ber-gêer', meaning: 'Burger', audioSrc: '/audio/thai/vocab/burger.mp3', emoji: '🍔' },
                { thai: 'เฟรนช์ฟรายส์', roman: 'freen-fraai', meaning: 'Fries', audioSrc: '/audio/thai/vocab/fries.mp3', emoji: '🍟' },
                { thai: 'โดนัท', roman: 'doo-nát', meaning: 'Donut', audioSrc: '/audio/thai/vocab/donut.mp3', emoji: '🍩' }
            ]
        }
    ]
});

// Populate flashcards with consonants
THAI.flashcards[0].cards = chars.filter(c => c.type === 'Consonant');
THAI.flashcards[1].cards = chars.filter(c => c.type === 'Consonant');

// Generate Vocabulary Flashcards
// 1. All Vocabulary Deck
const allVocabCards = THAI.vocabulary.flatMap(category =>
    category.items.map(item => ({
        char: item.thai,
        name: item.roman,
        thaiName: item.emoji,
        meaning: item.meaning,
        audioSrc: item.audioSrc
    }))
);

THAI.flashcards.push({
    id: 'vocab-all',
    title: 'All Vocabulary',
    description: `Master all ${allVocabCards.length} words across all categories`,
    cards: allVocabCards
});

// 2. Individual Category Decks
THAI.vocabulary.forEach(category => {
    THAI.flashcards.push({
        id: `vocab-${category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`,
        title: `${category.category}`,
        description: `Learn ${category.category} words in Thai`,
        cards: category.items.map(item => ({
            char: item.thai,
            name: item.roman,
            thaiName: item.emoji,
            meaning: item.meaning,
            audioSrc: item.audioSrc
        }))
    });
});
