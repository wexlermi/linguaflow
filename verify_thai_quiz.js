import { THAI } from './src/data/languages/thai.js';

console.log(`Total Thai chars: ${THAI.chars.length}`);
console.log(`Total Quiz questions: ${THAI.quiz.length}`);
if (THAI.quiz.length > 0) {
    console.log('Sample Question:', THAI.quiz[0]);
}
