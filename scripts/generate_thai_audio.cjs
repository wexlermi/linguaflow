const fs = require('fs');
const https = require('https');
const path = require('path');

const vowels = [
    { char: 'กะ', name: 'Sara A', thaiName: 'สระอะ', ttsName: 'สะระอะ', audioSrc: '/audio/thai/sara_a.mp3' },
    { char: 'กา', name: 'Sara Aa', thaiName: 'สระอา', ttsName: 'สะระอา', audioSrc: '/audio/thai/sara_aa.mp3' },
    { char: 'กิ', name: 'Sara I', thaiName: 'สระอิ', ttsName: 'สะระอิ', audioSrc: '/audio/thai/sara_i.mp3' },
    { char: 'กี', name: 'Sara Ii', thaiName: 'สระอี', ttsName: 'สะระอี', audioSrc: '/audio/thai/sara_ii.mp3' },
    { char: 'กึ', name: 'Sara Ue', thaiName: 'สระอึ', ttsName: 'สะระอึ', audioSrc: '/audio/thai/sara_ue.mp3' },
    { char: 'กือ', name: 'Sara Uue', thaiName: 'สระอือ', ttsName: 'สะระอือ', audioSrc: '/audio/thai/sara_uue.mp3' },
    { char: 'กุ', name: 'Sara U', thaiName: 'สระอุ', ttsName: 'สะระอุ', audioSrc: '/audio/thai/sara_u.mp3' },
    { char: 'กู', name: 'Sara Uu', thaiName: 'สระอู', ttsName: 'สะระอู', audioSrc: '/audio/thai/sara_uu.mp3' },
    { char: 'เกะ', name: 'Sara E', thaiName: 'สระเอะ', ttsName: 'สะระเอะ', audioSrc: '/audio/thai/sara_e.mp3' },
    { char: 'เก', name: 'Sara Ee', thaiName: 'สระเอ', ttsName: 'สะระเอ', audioSrc: '/audio/thai/sara_ee.mp3' },
    { char: 'แกะ', name: 'Sara Ae', thaiName: 'สระแอะ', ttsName: 'สะระแอะ', audioSrc: '/audio/thai/sara_ae.mp3' },
    { char: 'แก', name: 'Sara Aae', thaiName: 'สระแอ', ttsName: 'สะระแอ', audioSrc: '/audio/thai/sara_aae.mp3' },
    { char: 'โกะ', name: 'Sara O', thaiName: 'สระโอะ', ttsName: 'สะระโอะ', audioSrc: '/audio/thai/sara_o.mp3' },
    { char: 'โก', name: 'Sara Oo', thaiName: 'สระโอ', ttsName: 'สะระโอ', audioSrc: '/audio/thai/sara_oo.mp3' },
    { char: 'เกาะ', name: 'Sara Or', thaiName: 'สระเอาะ', ttsName: 'สะระเอาะ', audioSrc: '/audio/thai/sara_or.mp3' },
    { char: 'กอ', name: 'Sara Oor', thaiName: 'สระออ', ttsName: 'สะระออ', audioSrc: '/audio/thai/sara_oor.mp3' },
    { char: 'เกอะ', name: 'Sara Oe', thaiName: 'สระเออะ', ttsName: 'สะระเออะ', audioSrc: '/audio/thai/sara_oe.mp3' },
    { char: 'เกอ', name: 'Sara Ooe', thaiName: 'สระเออ', ttsName: 'สะระเออ', audioSrc: '/audio/thai/sara_ooe.mp3' },
    { char: 'เกียะ', name: 'Sara Ia', thaiName: 'สระเอียะ', ttsName: 'สะระเอียะ', audioSrc: '/audio/thai/sara_ia.mp3' },
    { char: 'เกีย', name: 'Sara Iia', thaiName: 'สระเอีย', ttsName: 'สะระเอีย', audioSrc: '/audio/thai/sara_iia.mp3' },
    { char: 'เกือะ', name: 'Sara Uea', thaiName: 'สระเอือะ', ttsName: 'สะระเอือะ', audioSrc: '/audio/thai/sara_uea.mp3' },
    { char: 'เกือ', name: 'Sara Uuea', thaiName: 'สระเอือ', ttsName: 'สะระเอือ', audioSrc: '/audio/thai/sara_uuea.mp3' },
    { char: 'กัวะ', name: 'Sara Ua', thaiName: 'สระอัวะ', ttsName: 'สะระอัวะ', audioSrc: '/audio/thai/sara_ua.mp3' },
    { char: 'กัว', name: 'Sara Uua', thaiName: 'สระอัว', ttsName: 'สะระอัว', audioSrc: '/audio/thai/sara_uua.mp3' },
    { char: 'กำ', name: 'Sara Am', thaiName: 'สระอำ', ttsName: 'สะระอำ', audioSrc: '/audio/thai/sara_am.mp3' },
    { char: 'ใก', name: 'Sara Ai Mai Muan', thaiName: 'สระไอไม้ม้วน', ttsName: 'สะระไอไม้ม้วน', audioSrc: '/audio/thai/sara_ai_mai_muan.mp3' },
    { char: 'ไก', name: 'Sara Ai Mai Malai', thaiName: 'สระไอไม้ม้าลาย', ttsName: 'สะระไอไม้ม้าลาย', audioSrc: '/audio/thai/sara_ai_mai_malai.mp3' },
    { char: 'เกา', name: 'Sara Ao', thaiName: 'สระเอา', ttsName: 'สะระเอา', audioSrc: '/audio/thai/sara_ao.mp3' },
];

const downloadAudio = (text, filePath) => {
    return new Promise((resolve, reject) => {
        const url = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=th&dt=t&q=${encodeURIComponent(text)}`;
        const file = fs.createWriteStream(filePath);

        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download audio: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => { }); // Delete the file async. (But we don't check the result)
            reject(err);
        });
    });
};

const main = async () => {
    const publicDir = path.join(__dirname, '../public');

    for (const vowel of vowels) {
        if (!vowel.audioSrc) continue;

        const filePath = path.join(publicDir, vowel.audioSrc);
        const textToSpeak = vowel.ttsName || vowel.thaiName;

        console.log(`Generating audio for ${vowel.name} (${textToSpeak}) -> ${vowel.audioSrc}`);

        try {
            await downloadAudio(textToSpeak, filePath);
            console.log(`Successfully generated ${filePath}`);
        } catch (error) {
            console.error(`Error generating ${filePath}:`, error);
        }

        // Wait a bit to be nice to the API
        await new Promise(resolve => setTimeout(resolve, 500));
    }
};

main();
