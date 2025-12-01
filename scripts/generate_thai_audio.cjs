const fs = require('fs');
const https = require('https');
const path = require('path');

// Vocabulary
const vocabulary = [
    // Greetings
    { text: 'สวัสดี', filename: 'vocab/sawatdee.mp3' },
    { text: 'ขอบคุณ', filename: 'vocab/khop_khun.mp3' },
    { text: 'ขอโทษ', filename: 'vocab/khor_thot.mp3' },
    { text: 'ใช่', filename: 'vocab/chai.mp3' },
    { text: 'ไม่', filename: 'vocab/mai.mp3' },
    { text: 'ลาก่อน', filename: 'vocab/laa_gawn.mp3' },
    { text: 'สบายดีไหม', filename: 'vocab/sabai_dee_mai.mp3' },

    // Food & Drink
    { text: 'ผัดไทย', filename: 'vocab/pad_thai.mp3' },
    { text: 'ส้มตำ', filename: 'vocab/som_tum.mp3' },
    { text: 'ต้มยำ', filename: 'vocab/tom_yum.mp3' },
    { text: 'ข้าวเหนียวมะม่วง', filename: 'vocab/khao_niao_mamuang.mp3' },
    { text: 'ข้าว', filename: 'vocab/khao.mp3' },
    { text: 'น้ำ', filename: 'vocab/nam.mp3' },
    { text: 'กาแฟ', filename: 'vocab/coffee.mp3' },
    { text: 'ชา', filename: 'vocab/tea.mp3' },
    { text: 'นม', filename: 'vocab/milk.mp3' },
    { text: 'อาหาร', filename: 'vocab/food.mp3' },
    { text: 'ผลไม้', filename: 'vocab/fruit.mp3' },
    { text: 'ขนม', filename: 'vocab/dessert.mp3' },
    { text: 'ขนมปัง', filename: 'vocab/bread.mp3' },
    { text: 'เนื้อ', filename: 'vocab/beef.mp3' },
    { text: 'หมู', filename: 'vocab/pork.mp3' },
    { text: 'ไก่', filename: 'vocab/chicken.mp3' },
    { text: 'ปลา', filename: 'vocab/pla.mp3' },
    { text: 'ไข่', filename: 'vocab/egg.mp3' },

    // Animals
    { text: 'หมา', filename: 'vocab/ma.mp3' },
    { text: 'แมว', filename: 'vocab/maew.mp3' },
    { text: 'ช้าง', filename: 'vocab/chang.mp3' },
    { text: 'นก', filename: 'vocab/nok.mp3' },
    { text: 'ลิง', filename: 'vocab/ling.mp3' },
    { text: 'งู', filename: 'vocab/ngu.mp3' },
    { text: 'เสือ', filename: 'vocab/tiger.mp3' },
    { text: 'ม้า', filename: 'vocab/horse.mp3' },
    { text: 'วัว', filename: 'vocab/cow.mp3' },
    { text: 'หมี', filename: 'vocab/bear.mp3' },
    { text: 'กบ', filename: 'vocab/frog.mp3' },
    { text: 'เป็ด', filename: 'vocab/duck.mp3' },
    { text: 'กระต่าย', filename: 'vocab/rabbit.mp3' },
    { text: 'เต่า', filename: 'vocab/turtle.mp3' },

    // Family
    { text: 'พ่อ', filename: 'vocab/phor.mp3' },
    { text: 'แม่', filename: 'vocab/mae.mp3' },
    { text: 'พี่ชาย', filename: 'vocab/phi_chai.mp3' },
    { text: 'น้องสาว', filename: 'vocab/nong_sao.mp3' },
    { text: 'ลูก', filename: 'vocab/luk.mp3' },
    { text: 'ปู่', filename: 'vocab/grandpa.mp3' },
    { text: 'ย่า', filename: 'vocab/grandma.mp3' },
    { text: 'ครอบครัว', filename: 'vocab/family.mp3' },

    // Body Parts
    { text: 'หัว', filename: 'vocab/head.mp3' },
    { text: 'ตา', filename: 'vocab/eye.mp3' },
    { text: 'จมูก', filename: 'vocab/nose.mp3' },
    { text: 'ปาก', filename: 'vocab/mouth.mp3' },
    { text: 'หู', filename: 'vocab/ear.mp3' },
    { text: 'มือ', filename: 'vocab/hand.mp3' },
    { text: 'เท้า', filename: 'vocab/foot.mp3' },
    { text: 'หัวใจ', filename: 'vocab/heart.mp3' },

    // Colors
    { text: 'สีแดง', filename: 'vocab/si_daeng.mp3' },
    { text: 'สีเขียว', filename: 'vocab/si_khiao.mp3' },
    { text: 'สีน้ำเงิน', filename: 'vocab/si_nam_ngoen.mp3' },
    { text: 'สีขาว', filename: 'vocab/si_khao.mp3' },
    { text: 'สีดำ', filename: 'vocab/si_dam.mp3' },
    { text: 'สีเหลือง', filename: 'vocab/yellow.mp3' },
    { text: 'สีส้ม', filename: 'vocab/orange.mp3' },
    { text: 'สีม่วง', filename: 'vocab/purple.mp3' },
    { text: 'สีชมพู', filename: 'vocab/pink.mp3' },
    { text: 'สีน้ำตาล', filename: 'vocab/brown.mp3' },

    // Weather & Nature
    { text: 'ดวงอาทิตย์', filename: 'vocab/sun.mp3' },
    { text: 'ดวงจันทร์', filename: 'vocab/moon.mp3' },
    { text: 'ดาว', filename: 'vocab/star.mp3' },
    { text: 'ฝน', filename: 'vocab/rain.mp3' },
    { text: 'หิมะ', filename: 'vocab/snow.mp3' },
    { text: 'ต้นไม้', filename: 'vocab/tree.mp3' },
    { text: 'ดอกไม้', filename: 'vocab/flower.mp3' },
    { text: 'ทะเล', filename: 'vocab/thale.mp3' },
    { text: 'ภูเขา', filename: 'vocab/mountain.mp3' },
    { text: 'ไฟ', filename: 'vocab/fire.mp3' },

    // Time
    { text: 'วันนี้', filename: 'vocab/wan_ni.mp3' },
    { text: 'พรุ่งนี้', filename: 'vocab/phrung_ni.mp3' },
    { text: 'เมื่อวาน', filename: 'vocab/muea_wan.mp3' },
    { text: 'ตอนเช้า', filename: 'vocab/ton_chao.mp3' },
    { text: 'ตอนเย็น', filename: 'vocab/ton_yen.mp3' },
    { text: 'กลางคืน', filename: 'vocab/night.mp3' },
    { text: 'เวลา', filename: 'vocab/time.mp3' },

    // Places
    { text: 'โรงเรียน', filename: 'vocab/rong_rian.mp3' },
    { text: 'โรงพยาบาล', filename: 'vocab/rong_phayaban.mp3' },
    { text: 'ตลาด', filename: 'vocab/talat.mp3' },
    { text: 'วัด', filename: 'vocab/wat.mp3' },
    { text: 'สนามบิน', filename: 'vocab/sanam_bin.mp3' },
    { text: 'โรงแรม', filename: 'vocab/rong_raem.mp3' },
    { text: 'ร้านค้า', filename: 'vocab/ran_kha.mp3' },
    { text: 'บ้าน', filename: 'vocab/home.mp3' },
    { text: 'ห้องน้ำ', filename: 'vocab/hong_nam.mp3' },

    // Transport
    { text: 'รถเมล์', filename: 'vocab/rot_me.mp3' },
    { text: 'แท็กซี่', filename: 'vocab/taxi.mp3' },
    { text: 'ตั๋ว', filename: 'vocab/tua.mp3' },
    { text: 'รถไฟ', filename: 'vocab/train.mp3' },
    { text: 'เครื่องบิน', filename: 'vocab/airplane.mp3' },
    { text: 'เรือ', filename: 'vocab/boat.mp3' },
    { text: 'รถยนต์', filename: 'vocab/car.mp3' },
    { text: 'จักรยาน', filename: 'vocab/bicycle.mp3' },

    // Emotions
    { text: 'ดีใจ', filename: 'vocab/happy.mp3' },
    { text: 'เศร้า', filename: 'vocab/sad.mp3' },
    { text: 'โกรธ', filename: 'vocab/angry.mp3' },
    { text: 'รัก', filename: 'vocab/love.mp3' },
    { text: 'กลัว', filename: 'vocab/scared.mp3' },
    { text: 'เหงา', filename: 'vocab/lonely.mp3' },

    // Actions
    { text: 'กิน', filename: 'vocab/eat.mp3' },
    { text: 'ดื่ม', filename: 'vocab/drink.mp3' },
    { text: 'นอน', filename: 'vocab/sleep.mp3' },
    { text: 'เดิน', filename: 'vocab/walk.mp3' },
    { text: 'วิ่ง', filename: 'vocab/run.mp3' },
    { text: 'พูด', filename: 'vocab/speak.mp3' },
    { text: 'อ่าน', filename: 'vocab/read.mp3' },
    { text: 'เขียน', filename: 'vocab/write.mp3' },
    { text: 'ดู', filename: 'vocab/watch.mp3' },
    { text: 'ฟัง', filename: 'vocab/listen.mp3' },

    // Shopping
    { text: 'เงิน', filename: 'vocab/ngoen.mp3' },
    { text: 'แพง', filename: 'vocab/phaeng.mp3' },
    { text: 'ถูก', filename: 'vocab/thuk.mp3' },
    { text: 'ลดราคา', filename: 'vocab/lot_rakha.mp3' },
    { text: 'เท่าไหร่', filename: 'vocab/thao_rai.mp3' },
    { text: 'ซื้อ', filename: 'vocab/buy.mp3' },
    { text: 'ขาย', filename: 'vocab/sell.mp3' }
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
    const publicDir = path.join(__dirname, '../public/audio/thai');

    for (const item of vocabulary) {
        const filePath = path.join(publicDir, item.filename);

        console.log(`Generating audio for ${item.text} -> ${item.filename}`);

        try {
            await downloadAudio(item.text, filePath);
            console.log(`Successfully generated ${filePath}`);
        } catch (error) {
            console.error(`Error generating ${filePath}:`, error);
        }

        // Wait a bit to be nice to the API
        await new Promise(resolve => setTimeout(resolve, 500));
    }
};

main();
