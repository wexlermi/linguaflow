import { exec } from 'child_process';

const text = 'a';
const lang = 'ka';
const urls = [
    `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${text}`,
    `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=${lang}&dt=t&q=${text}`,
    `https://translate.google.com/translate_tts?ie=UTF-8&q=${text}&tl=${lang}&total=1&idx=0&textlen=${text.length}&client=tw-ob&prev=input&ttsspeed=1`
];

urls.forEach((url, index) => {
    exec(`curl -s -o /dev/null -w "%{http_code} %{size_download}" "${url}"`, (err, stdout) => {
        console.log(`URL ${index + 1}: ${stdout} - ${url}`);
    });
});
