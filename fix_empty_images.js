import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, 'public', 'images', 'thai');

const emptyImages = [
    { filename: 'khop_khun.jpg', keyword: 'gratitude' },
    { filename: 'nong_sao.jpg', keyword: 'girl' },
    { filename: 'phi_chai.jpg', keyword: 'boy' },
    { filename: 'thao_rai.jpg', keyword: 'money' }
];

const downloadImage = (filename, keyword) => {
    const url = `https://loremflickr.com/320/240/${keyword}`;
    const filePath = path.join(IMAGES_DIR, filename);

    console.log(`Downloading ${filename} for keyword '${keyword}'...`);

    const file = fs.createWriteStream(filePath);

    const request = https.get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
            let redirectUrl = response.headers.location;
            if (redirectUrl.startsWith('/')) {
                redirectUrl = `https://loremflickr.com${redirectUrl}`;
            }
            console.log(`Redirecting to: ${redirectUrl}`);
            https.get(redirectUrl, (redirectResponse) => {
                if (redirectResponse.statusCode !== 200) {
                    console.error(`Failed to download ${filename}: ${redirectResponse.statusCode}`);
                    return;
                }
                redirectResponse.pipe(file);
                file.on('finish', () => {
                    file.close(() => {
                        console.log(`Downloaded: ${filePath}`);
                    });
                });
            }).on('error', (err) => {
                fs.unlink(filePath, () => { });
                console.error(`Error downloading ${filename}: ${err.message}`);
            });
            return;
        }

        if (response.statusCode !== 200) {
            console.error(`Failed to download ${filename}: ${response.statusCode}`);
            return;
        }

        response.pipe(file);

        file.on('finish', () => {
            file.close(() => {
                console.log(`Downloaded: ${filePath}`);
            });
        });
    }).on('error', (err) => {
        fs.unlink(filePath, () => { });
        console.error(`Error downloading ${filename}: ${err.message}`);
    });
};

emptyImages.forEach(item => {
    downloadImage(item.filename, item.keyword);
});
