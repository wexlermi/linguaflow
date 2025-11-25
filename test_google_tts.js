import * as googleTTS from 'google-tts-api';
import { exec } from 'child_process';

const url = googleTTS.getAudioUrl('ა', {
    lang: 'ka',
    slow: false,
    host: 'https://translate.google.com',
});

console.log('Generated URL:', url);

exec(`curl -I "${url}"`, (err, stdout) => {
    console.log('Curl Output:', stdout);
});
