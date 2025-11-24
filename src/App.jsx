import React, { useState, useEffect, useMemo } from 'react';
import { BookOpen, GraduationCap, ChevronLeft, Award, Globe, Type, Volume2, Info, Star, X, Image as ImageIcon, Smartphone, Menu, RefreshCw, PenTool } from 'lucide-react';

// --- CONFIGURATION: The Language Database ---
const LANGUAGES = {
  THAI: {
    id: 'thai',
    name: 'Thai',
    nativeName: 'ไทย',
    scriptName: 'Thai Script',
    desc: 'The beautiful looped script of Thailand. 44 Consonants.',
    langCode: 'th-TH',
    fontA: 'font-sarabun', // Traditional (Looped)
    fontB: 'font-kanit',   // Modern (Loopless)
    fontHand: 'font-mali', // Handwritten
    exampleText: 'สวัสดีครับ',
    exampleMeaning: 'Hello (Sawatdee)',
    styleALabel: 'Traditional',
    styleBLabel: 'Modern',
    styleHandLabel: 'Handwritten',
    chars: [
      // --- Consonants (Grouped via 'type') ---
      { char: 'ก', name: 'Gor Gai', thaiName: 'ก ไก่', meaning: 'Chicken', class: 'Mid', sound: 'k', emoji: '🐔', type: 'Consonant' },
      { char: 'ข', name: 'Khor Khai', thaiName: 'ข ไข่', meaning: 'Egg', class: 'High', sound: 'kh', emoji: '🥚', type: 'Consonant' },
      { char: 'ฃ', name: 'Khor Khuad', thaiName: 'ฃ ขวด', meaning: 'Bottle (Obs)', class: 'High', sound: 'kh', emoji: '🍾', type: 'Consonant' },
      { char: 'ค', name: 'Khor Khwai', thaiName: 'ค ควาย', meaning: 'Buffalo', class: 'Low', sound: 'kh', emoji: '🐃', type: 'Consonant' },
      { char: 'ฅ', name: 'Khor Khon', thaiName: 'ฅ คน', meaning: 'Person (Obs)', class: 'Low', sound: 'kh', emoji: '👤', type: 'Consonant' },
      { char: 'ฆ', name: 'Khor Rakhang', thaiName: 'ฆ ระฆัง', meaning: 'Bell', class: 'Low', sound: 'kh', emoji: '🔔', type: 'Consonant' },
      { char: 'ง', name: 'Ngor Ngu', thaiName: 'ง งู', meaning: 'Snake', class: 'Low', sound: 'ng', emoji: '🐍', type: 'Consonant' },
      { char: 'จ', name: 'Jor Jaan', thaiName: 'จ จาน', meaning: 'Plate', class: 'Mid', sound: 'j', emoji: '🍽️', type: 'Consonant' },
      { char: 'ฉ', name: 'Chor Ching', thaiName: 'ฉ ฉิ่ง', meaning: 'Cymbals', class: 'High', sound: 'ch', emoji: '🥁', type: 'Consonant' },
      { char: 'ช', name: 'Chor Chang', thaiName: 'ช ช้าง', meaning: 'Elephant', class: 'Low', sound: 'ch', emoji: '🐘', type: 'Consonant' },
      { char: 'ซ', name: 'Sor So', thaiName: 'ซ โซ่', meaning: 'Chain', class: 'Low', sound: 's', emoji: '🔗', type: 'Consonant' },
      { char: 'ฌ', name: 'Chor Cher', thaiName: 'ฌ เฌอ', meaning: 'Tree', class: 'Low', sound: 'ch', emoji: '🌳', type: 'Consonant' },
      { char: 'ญ', name: 'Yor Ying', thaiName: 'ญ หญิง', meaning: 'Woman', class: 'Low', sound: 'y', emoji: '👩', type: 'Consonant' },
      { char: 'ฎ', name: 'Dor Chada', thaiName: 'ฎ ชฎา', meaning: 'Headdress', class: 'Mid', sound: 'd', emoji: '👑', type: 'Consonant' },
      { char: 'ฏ', name: 'Tor Patak', thaiName: 'ฏ ปฏัก', meaning: 'Goad/Spear', class: 'Mid', sound: 't', emoji: '🔱', type: 'Consonant' },
      { char: 'ฐ', name: 'Thor Than', thaiName: 'ฐ ฐาน', meaning: 'Pedestal', class: 'High', sound: 'th', emoji: '🏛️', type: 'Consonant' },
      { char: 'ฑ', name: 'Thor Montho', thaiName: 'ฑ มณโฑ', meaning: 'Montho', class: 'Low', sound: 'th', emoji: '👸', type: 'Consonant' },
      { char: 'ฒ', name: 'Thor Phuthao', thaiName: 'ฒ ผู้เฒ่า', meaning: 'Elder', class: 'Low', sound: 'th', emoji: '👴', type: 'Consonant' },
      { char: 'ณ', name: 'Nor Nen', thaiName: 'ณ เณร', meaning: 'Novice Monk', class: 'Low', sound: 'n', emoji: '📿', type: 'Consonant' },
      { char: 'ด', name: 'Dor Dek', thaiName: 'ด เด็ก', meaning: 'Child', class: 'Mid', sound: 'd', emoji: '🧒', type: 'Consonant' },
      { char: 'ต', name: 'Tor Tao', thaiName: 'ต เต่า', meaning: 'Turtle', class: 'Mid', sound: 't', emoji: '🐢', type: 'Consonant' },
      { char: 'ถ', name: 'Thor Thung', thaiName: 'ถ ถุง', meaning: 'Sack', class: 'High', sound: 'th', emoji: '💰', type: 'Consonant' },
      { char: 'ท', name: 'Thor Thahan', thaiName: 'ท ทหาร', meaning: 'Soldier', class: 'Low', sound: 'th', emoji: '💂', type: 'Consonant' },
      { char: 'ธ', name: 'Thor Thong', thaiName: 'ธ ธง', meaning: 'Flag', class: 'Low', sound: 'th', emoji: '🚩', type: 'Consonant' },
      { char: 'น', name: 'Nor Nu', thaiName: 'น หนู', meaning: 'Mouse', class: 'Low', sound: 'n', emoji: '🐁', type: 'Consonant' },
      { char: 'บ', name: 'Bor Baimai', thaiName: 'บ ใบไม้', meaning: 'Leaf', class: 'Mid', sound: 'b', emoji: '🍃', type: 'Consonant' },
      { char: 'ป', name: 'Por Pla', thaiName: 'ป ปลา', meaning: 'Fish', class: 'Mid', sound: 'p', emoji: '🐟', type: 'Consonant' },
      { char: 'ผ', name: 'Phor Phueng', thaiName: 'ผ ผึ้ง', meaning: 'Bee', class: 'High', sound: 'ph', emoji: '🐝', type: 'Consonant' },
      { char: 'ฝ', name: 'For Fa', thaiName: 'ฝ ฝา', meaning: 'Lid', class: 'High', sound: 'f', emoji: '🍲', type: 'Consonant' },
      { char: 'พ', name: 'Phor Phan', thaiName: 'พ พาน', meaning: 'Tray', class: 'Low', sound: 'ph', emoji: '🏺', type: 'Consonant' },
      { char: 'ฟ', name: 'For Fan', thaiName: 'ฟ ฟัน', meaning: 'Teeth', class: 'Low', sound: 'f', emoji: '🦷', type: 'Consonant' },
      { char: 'ภ', name: 'Phor Samphao', thaiName: 'ภ สำเภา', meaning: 'Sailboat', class: 'Low', sound: 'ph', emoji: '⛵', type: 'Consonant' },
      { char: 'ม', name: 'Mor Maa', thaiName: 'ม ม้า', meaning: 'Horse', class: 'Low', sound: 'm', emoji: '🐎', type: 'Consonant' },
      { char: 'ย', name: 'Yor Yak', thaiName: 'ย ยักษ์', meaning: 'Giant', class: 'Low', sound: 'y', emoji: '👹', type: 'Consonant' },
      { char: 'ร', name: 'Ror Ruea', thaiName: 'ร เรือ', meaning: 'Boat', class: 'Low', sound: 'r', emoji: '🚣', type: 'Consonant' },
      { char: 'ล', name: 'Lor Ling', thaiName: 'ล ลิง', meaning: 'Monkey', class: 'Low', sound: 'l', emoji: '🐒', type: 'Consonant' },
      { char: 'ว', name: 'Wor Waen', thaiName: 'ว แหวน', meaning: 'Ring', class: 'Low', sound: 'w', emoji: '💍', type: 'Consonant' },
      { char: 'ศ', name: 'Sor Sala', thaiName: 'ศ ศาลา', meaning: 'Pavilion', class: 'High', sound: 's', emoji: '🛖', type: 'Consonant' },
      { char: 'ษ', name: 'Sor Ruesi', thaiName: 'ษ ฤๅษี', meaning: 'Hermit', class: 'High', sound: 's', emoji: '🧔', type: 'Consonant' },
      { char: 'ส', name: 'Sor Suea', thaiName: 'ส เสือ', meaning: 'Tiger', class: 'High', sound: 's', emoji: '🐅', type: 'Consonant' },
      { char: 'ห', name: 'Hor Hip', thaiName: 'ห หีบ', meaning: 'Chest/Box', class: 'High', sound: 'h', emoji: '📦', type: 'Consonant' },
      { char: 'ฬ', name: 'Lor Chula', thaiName: 'ฬ จุฬา', meaning: 'Kite', class: 'Low', sound: 'l', emoji: '🪁', type: 'Consonant' },
      { char: 'อ', name: 'Or Ang', thaiName: 'อ อ่าง', meaning: 'Basin', class: 'Mid', sound: 'o', emoji: '🛁', type: 'Consonant' },
      { char: 'ฮ', name: 'Hor Nokhuk', thaiName: 'ฮ นกฮูก', meaning: 'Owl', class: 'Low', sound: 'h', emoji: '🦉', type: 'Consonant' },

      // --- Vowels ---
      { char: '−ะ', name: 'Sara A', thaiName: 'สระ อะ', type: 'Vowel', sound: 'a' },
      { char: '−า', name: 'Sara Aa', thaiName: 'สระ อา', type: 'Vowel', sound: 'aa' },
      { char: '−ิ', name: 'Sara I', thaiName: 'สระ อิ', type: 'Vowel', sound: 'i' },
      { char: '−ี', name: 'Sara Ii', thaiName: 'สระ อี', type: 'Vowel', sound: 'ii' },
      { char: '−ึ', name: 'Sara Ue', thaiName: 'สระ อึ', type: 'Vowel', sound: 'ue' },
      { char: '−ื', name: 'Sara Uee', thaiName: 'สระ อือ', type: 'Vowel', sound: 'uee' },
      { char: '−ุ', name: 'Sara U', thaiName: 'สระ อุ', type: 'Vowel', sound: 'u' },
      { char: '−ู', name: 'Sara Uu', thaiName: 'สระ อู', type: 'Vowel', sound: 'uu' },
      { char: 'เ−', name: 'Sara E', thaiName: 'สระ เอ', type: 'Vowel', sound: 'e' },
      { char: 'แ−', name: 'Sara Ae', thaiName: 'สระ แอ', type: 'Vowel', sound: 'ae' },
      { char: 'โ−', name: 'Sara O', thaiName: 'สระ โอ', type: 'Vowel', sound: 'o' },
      { char: 'ไ−', name: 'Sara Ai', thaiName: 'สระ ไอ ไม้มลาย', type: 'Vowel', sound: 'ai' },
    ],
    quiz: [
      { question: "Which letter represents 'Chicken'?", options: ['ข', 'ก', 'ค', 'ง'], correct: 'ก' },
      { question: "What sound does 'จ' make?", options: ['K', 'M', 'J', 'S'], correct: 'J' },
      { question: "Identify 'Mor Maa' (Horse)", options: ['ม', 'น', 'ย', 'ร'], correct: 'ม' },
      { question: "Which class is 'Gor Gai' (ก)?", options: ['Mid', 'High', 'Low', 'None'], correct: 'Mid' },
      { question: "Which consonant means 'Turtle'?", options: ['ด', 'ต', 'ถ', 'ท'], correct: 'ต' },
      { question: "What does 'Ngor Ngu' (ง) mean?", options: ['Snake', 'Elephant', 'Mouse', 'Horse'], correct: 'Snake' },
      { question: "Which consonant sounds like 'Ch' but is High Class?", options: ['ช', 'ฌ', 'ฉ', 'จ'], correct: 'ฉ' },
      { question: "Which is the 'Basin' character?", options: ['อ', 'ฮ', 'ย', 'ว'], correct: 'อ' },
      { question: "Which letter is an obsolete 'Bottle'?", options: ['ข', 'ฃ', 'ค', 'ฅ'], correct: 'ฃ' },
      { question: "Find the 'Elephant' (Chor Chang)", options: ['ช', 'ซ', 'ฌ', 'ญ'], correct: 'ช' },
      { question: "Which is NOT a Low Class consonant?", options: ['ค', 'ง', 'ข', 'ช'], correct: 'ข' },
      { question: "Which vowel makes a long 'Aa' sound?", options: ['−ะ', '−า', '−ิ', '−ุ'], correct: '−า' },
      { question: "What sound does 'Por Pla' (ป) make?", options: ['P', 'B', 'F', 'M'], correct: 'P' },
      { question: "Which consonant means 'Tiger'?", options: ['ศ', 'ษ', 'ส', 'ห'], correct: 'ส' },
      { question: "Identify 'Yor Yak' (Giant)", options: ['ย', 'ร', 'ล', 'ว'], correct: 'ย' },
      { question: "What does 'Lor Ling' (ล) mean?", options: ['Monkey', 'Boat', 'Ring', 'Kite'], correct: 'Monkey' },
      { question: "Which character is used for 'Child'?", options: ['ด', 'ต', 'ถ', 'ท'], correct: 'ด' },
      { question: "Which class determines the tone of 'Khor Khai'?", options: ['High', 'Mid', 'Low', 'Rising'], correct: 'High' },
      { question: "Which vowel represents 'Sara O'?", options: ['โ−', 'ไ−', 'เ−', 'แ−'], correct: 'โ−' },
      { question: "What is the meaning of 'For Fan' (ฟ)?", options: ['Teeth', 'Tray', 'Sailboat', 'Lid'], correct: 'Teeth' },
      { question: "What is the class of 'Sor Suea' (ส)?", options: ['High', 'Low', 'Mid', 'Sonorant'], correct: 'High' },
      { question: "Which letter is used for 'Leaf'?", options: ['บ', 'ป', 'ผ', 'ฝ'], correct: 'บ' },
      { question: "Which High class consonant means 'Bee'?", options: ['ผ', 'ฝ', 'ถ', 'ฐ'], correct: 'ผ' },
      { question: "What sound does 'Yor Ying' (ญ) make?", options: ['Y', 'N', 'M', 'R'], correct: 'Y' },
      { question: "Which letter is 'Owl' (Hor Nokhuk)?", options: ['ฮ', 'อ', 'ห', 'ฬ'], correct: 'ฮ' },
      { question: "Which consonant is 'Khor Khon' (Person)?", options: ['ฅ', 'ต', 'ค', 'ด'], correct: 'ฅ' },
      { question: "What does 'Jor Jaan' mean?", options: ['Plate', 'Bowl', 'Spoon', 'Fork'], correct: 'Plate' },
      { question: "Which letter makes the 'F' sound (Lid)?", options: ['ฝ', 'ฟ', 'ผ', 'พ'], correct: 'ฝ' },
      { question: "Which vowel is 'Sara Ue' (Short)?", options: ['−ึ', '−ื', '−ุ', '−ู'], correct: '−ึ' },
      { question: "Identify 'Chor Ching' (Cymbals)", options: ['ฉ', 'ช', 'ฌ', 'จ'], correct: 'ฉ' }
    ]
  },
  // --- Coming Soon ---
  VIETNAMESE: { id: 'vietnamese', name: 'Vietnamese', nativeName: 'Tiếng Việt', desc: 'Tones, vowels, and pronunciation.', comingSoon: true },
  GERMAN: { id: 'german', name: 'German', nativeName: 'Deutsch', desc: 'Umlauts and grammar.', comingSoon: true },
  RUSSIAN: { id: 'russian', name: 'Russian', nativeName: 'Русский', desc: 'Cyrillic alphabet.', comingSoon: true },
  JAPANESE: { id: 'jp', name: 'Japanese', nativeName: '日本語', desc: 'Hiragana & Katakana.', comingSoon: true },
  KOREAN: { id: 'korean', name: 'Korean', nativeName: '한글', desc: 'The logical alphabet.', comingSoon: true },
  HINDI: { id: 'hi', name: 'Hindi', nativeName: 'हिन्दी', desc: 'Devanagari script.', comingSoon: true },
  ARABIC: { id: 'ar', name: 'Arabic', nativeName: 'العربية', desc: 'Right-to-left cursive.', comingSoon: true },
  HEBREW: { id: 'he', name: 'Hebrew', nativeName: 'עִבְרִית', desc: 'Ancient script.', comingSoon: true },
  GREEK: { id: 'greek', name: 'Greek', nativeName: 'Ελληνικά', desc: 'The ancestor of Latin.', comingSoon: true },
  GEORGIAN: { id: 'ka', name: 'Georgian', nativeName: 'ქართული', desc: 'Unique Mkhedruli script.', comingSoon: true },
  ARMENIAN: { id: 'hy', name: 'Armenian', nativeName: 'Հայերեն', desc: 'Distinct script.', comingSoon: true },
  KHMER: { id: 'km', name: 'Khmer', nativeName: 'ខ្មែរ', desc: 'Script of Cambodia.', comingSoon: true },
  BURMESE: { id: 'my', name: 'Burmese', nativeName: 'မြန်မာ', desc: 'The circular script.', comingSoon: true },
};

// --- AUDIO ENGINE ---
const speak = (text, langCode = 'th-TH') => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  // 1. THAI SPECIAL HANDLING
  if (langCode === 'th-TH') {
    if (isIOS && window.speechSynthesis) {
      const voices = window.speechSynthesis.getVoices();
      const nativeVoice = voices.find(v => v.lang === langCode);
      if (nativeVoice) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langCode;
        utterance.voice = nativeVoice;
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
        return;
      }
    }
    // Force Google Cloud TTS for Thai on non-iOS or fallback
    const isoCode = langCode.split('-')[0]; 
    const audio = new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&tl=${isoCode}&client=gtx&q=${encodeURIComponent(text)}`);
    audio.play().catch(e => console.log("Audio failed", e));
    return;
  }

  // 2. STANDARD HANDLING
  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel();
  if (window.speechSynthesis.paused) window.speechSynthesis.resume();

  const voices = window.speechSynthesis.getVoices();
  let preferredVoice = voices.find(v => v.lang === langCode);

  if (preferredVoice) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode;
    utterance.voice = preferredVoice;
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  } else {
    const isoCode = langCode.split('-')[0]; 
    const audio = new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&tl=${isoCode}&client=gtx&q=${encodeURIComponent(text)}`);
    audio.play().catch(e => console.log("Audio fallback failed", e));
  }
};

// --- COMPONENTS ---

const Header = ({ goBack, currentLang }) => (
  <header className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {currentLang && (
          <button onClick={goBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors mr-2">
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
        )}
        <div className="flex items-center gap-2 text-indigo-600">
          <Globe className="w-6 h-6" />
          <h1 className="font-bold text-xl tracking-tight">lang.bar</h1>
        </div>
      </div>
      {currentLang && (
        <div className="flex items-center gap-3">
           <span className="hidden md:inline text-xs text-slate-400">Audio Enabled</span>
           <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            {currentLang.name}
          </span>
        </div>
      )}
    </div>
  </header>
);

const LanguageCard = ({ data, onClick }) => (
  <div 
    onClick={onClick}
    className={`group relative bg-white rounded-2xl p-6 shadow-md border-2 border-transparent transition-all duration-300 ${
      !data.comingSoon 
        ? 'hover:border-indigo-500 hover:shadow-xl cursor-pointer hover:-translate-y-1' 
        : 'opacity-60 cursor-not-allowed'
    }`}
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${!data.comingSoon ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-400'}`}>
        <span className="font-bold text-xl">{data.nativeName.charAt(0)}</span>
      </div>
      {data.comingSoon && <span className="text-xs font-bold bg-slate-200 text-slate-500 px-2 py-1 rounded">SOON</span>}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-1">{data.name}</h3>
    <p className="text-sm font-medium text-indigo-600 mb-2">{data.nativeName}</p>
    <p className="text-slate-500 text-sm leading-relaxed mb-4 min-h-[40px]">{data.desc}</p>
    
    {!data.comingSoon && (
      <div className="flex items-center text-indigo-600 font-medium text-sm mt-auto">
        Start Learning <ChevronLeft className="w-4 h-4 rotate-180 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    )}
  </div>
);

const CharacterModal = ({ charData, langConfig, onClose }) => {
  if (!charData) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white relative shrink-0">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm">
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-6xl shadow-inner border border-white/30 shrink-0">
              {charData.emoji || <div className={langConfig.fontB}>{charData.char.split(' ')[0]}</div>}
            </div>
            <div className="min-w-0">
              {/* Show THAI full name in header if Thai, otherwise char. Use Traditional font for name */}
              <h2 className={`text-4xl font-bold mb-1 truncate ${langConfig.id === 'thai' ? langConfig.fontA : langConfig.fontB}`}>
                {langConfig.id === 'thai' ? (charData.thaiName || charData.char) : charData.char}
              </h2>
              <p className="text-indigo-100 text-lg opacity-90 truncate">{charData.name}</p>
              <div className="flex items-center gap-2 mt-3">
                 <button 
                   onClick={() => speak(charData.thaiName || (charData.type === 'Tone' ? charData.char : charData.char), langConfig.langCode)}
                   className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm hover:bg-indigo-50 transition-colors"
                 >
                   <Volume2 className="w-4 h-4" /> Replay
                 </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
             <div className="bg-slate-50 p-4 rounded-2xl">
               <h4 className="text-xs font-bold text-slate-400 uppercase mb-3 tracking-wider">Details</h4>
               <div className="space-y-2">
                 <div className="flex justify-between text-sm">
                   <span className="text-slate-500">Meaning</span>
                   <span className="font-medium text-slate-800">{charData.meaning}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-slate-500">Sound</span>
                   <span className="font-medium text-slate-800">/{charData.sound}/</span>
                 </div>
                 {charData.type && (
                   <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Type</span>
                     <span className="font-bold text-indigo-600 bg-indigo-50 px-2 rounded text-xs">{charData.type}</span>
                   </div>
                 )}
                 {charData.class && (
                   <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Class</span>
                     <span className={`font-bold px-2 py-0.5 rounded text-xs ${
                        charData.class === 'High' ? 'bg-red-100 text-red-600' :
                        charData.class === 'Mid' ? 'bg-green-100 text-green-600' :
                        'bg-blue-100 text-blue-600'
                     }`}>
                       {charData.class}
                     </span>
                   </div>
                 )}
               </div>
             </div>

             <div className="space-y-3">
               <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Styles</h4>
               <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
                 <span className="text-xs font-medium text-slate-500 w-24">{langConfig.styleALabel}</span>
                 <span className={`text-4xl text-indigo-900 ${langConfig.fontA}`}>{charData.char.split(' ')[0]}</span>
               </div>
               <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
                 <span className="text-xs font-medium text-slate-500 w-24">{langConfig.styleBLabel}</span>
                 <span className={`text-4xl text-indigo-900 ${langConfig.fontB}`}>{charData.char.split(' ')[0]}</span>
               </div>
               <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
                 <span className="text-xs font-medium text-slate-500 w-24">{langConfig.styleHandLabel || 'Handwritten'}</span>
                 <span className={`text-4xl text-indigo-900 ${langConfig.fontHand}`}>{charData.char.split(' ')[0]}</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CharacterCard = ({ charData, langConfig, onClick, fontMode, onAudioClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative bg-white p-4 rounded-xl border-2 border-slate-200 hover:border-indigo-400 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group select-none flex flex-col items-center justify-between h-36"
    >
      {/* Audio Button - Stops propagation to prevent modal opening */}
      <button 
         onClick={(e) => {
           e.stopPropagation();
           onAudioClick(charData);
         }}
         className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-50 hover:bg-indigo-100 p-1.5 rounded-full text-indigo-600"
      >
         <Volume2 className="w-3 h-3" />
      </button>
      
      {/* Category Badge */}
      {charData.type && (
        <div className="absolute top-2 left-2">
           <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${
             charData.type === 'Tone' ? 'bg-yellow-100 text-yellow-700' :
             charData.type === 'Vowel' ? 'bg-green-100 text-green-700' :
             charData.type === 'Grammar' || charData.type === 'Rule' ? 'bg-purple-100 text-purple-700' :
             charData.type === 'Diphthong' ? 'bg-orange-100 text-orange-700' :
             'bg-slate-100 text-slate-500'
           }`}>
             {charData.type}
           </span>
        </div>
      )}

      <div className="text-center py-1 flex-grow flex flex-col justify-center mt-2">
        <div className={`text-4xl text-slate-800 mb-2 transition-all duration-300 ${
          fontMode === 'B' ? langConfig.fontB : 
          fontMode === 'Hand' ? langConfig.fontHand : 
          langConfig.fontA
        }`}>
          {charData.char}
        </div>
        <div className="text-sm font-bold text-indigo-700 leading-tight px-2 line-clamp-1">{charData.name}</div>
      </div>
      <div className="w-full mt-1 pt-2 border-t border-slate-100 text-center text-xs font-medium text-slate-500 truncate px-2">
         {charData.meaning}
      </div>
    </div>
  );
};

const Quiz = ({ questions, langCode, onComplete }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Shuffle questions on mount
  useEffect(() => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random()).slice(0, 5); // Pick 5 random
    setShuffledQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  }, [questions]);

  const handleAnswer = (option) => {
    if (selectedOption) return;
    setSelectedOption(option);
    
    // Attempt to speak the answer if it's short text
    if(option.length < 15) speak(option, langCode);

    if (option === shuffledQuestions[currentIndex].correct) setScore(score + 1);

    setTimeout(() => {
      if (currentIndex + 1 < shuffledQuestions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelectedOption(null);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random()).slice(0, 5);
    setShuffledQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  if (showScore) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md mx-auto mt-10">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-10 h-10 text-yellow-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Quiz Complete!</h2>
        <p className="text-slate-600 mb-6">You scored {score} out of {shuffledQuestions.length}</p>
        <div className="flex gap-3 justify-center">
          <button onClick={restartQuiz} className="px-6 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
            <RefreshCw className="w-4 h-4" /> Try Again
          </button>
          <button onClick={onComplete} className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Back to Learn
          </button>
        </div>
      </div>
    );
  }

  if (shuffledQuestions.length === 0) return <div className="p-8 text-center">Loading Quiz...</div>;

  const q = shuffledQuestions[currentIndex];
  return (
    <div className="max-w-xl mx-auto mt-8">
       <div className="mb-4 flex justify-between text-sm font-medium text-slate-500">
        <span>Question {currentIndex + 1}/{shuffledQuestions.length}</span>
        <span>Score: {score}</span>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6">{q.question}</h3>
        <div className="grid grid-cols-1 gap-3">
          {q.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={!!selectedOption}
              className={`w-full p-4 rounded-xl text-left font-medium text-lg transition-all duration-200 border-2 ${
                selectedOption 
                  ? (option === q.correct ? "bg-green-50 border-green-500 text-green-700" : option === selectedOption ? "bg-red-50 border-red-500 text-red-700" : "bg-slate-50 border-slate-100 text-slate-400 opacity-50")
                  : "bg-white border-slate-200 hover:border-indigo-300 text-slate-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const FontComparison = ({ config, fontMode, setFontMode }) => (
  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8 border border-indigo-100">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
      <div>
        <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800">
          <Type className="w-5 h-5 text-indigo-600" />
          Style Comparison
        </h3>
        <p className="text-slate-600 text-sm mt-1">
          Choose a script style to update all cards below.
        </p>
      </div>
      <div className="flex bg-white p-1 rounded-lg shadow-sm border border-slate-200 self-start">
        <button
          onClick={() => setFontMode('A')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${fontMode === 'A' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          {config.styleALabel}
        </button>
        <button
          onClick={() => setFontMode('B')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${fontMode === 'B' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          {config.styleBLabel}
        </button>
        <button
          onClick={() => setFontMode('Hand')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${fontMode === 'Hand' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          {config.styleHandLabel || 'Handwritten'}
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-white p-6 rounded-xl shadow-sm text-center relative group">
        <button 
          onClick={() => speak(config.exampleText, config.langCode)}
          className="absolute top-2 right-2 p-2 rounded-full bg-slate-50 text-indigo-500 hover:bg-indigo-100 transition-colors"
        >
           <Volume2 className="w-4 h-4" />
        </button>
        <p className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-4">Sample</p>
        <p className={`text-4xl md:text-5xl text-slate-800 transition-all duration-500 ${
          fontMode === 'B' ? config.fontB : 
          fontMode === 'Hand' ? config.fontHand : 
          config.fontA
        }`}>
          {config.exampleText}
        </p>
        <p className="mt-4 text-slate-500 font-medium">{config.exampleMeaning}</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-600">
            <span className="font-bold text-slate-800">
              {fontMode === 'B' ? config.styleBLabel : fontMode === 'Hand' ? (config.styleHandLabel || 'Handwritten') : config.styleALabel}:
            </span>
            {fontMode === 'B' 
              ? " Often used in screens, modern signage, and informal writing. Cleaner lines."
              : fontMode === 'Hand'
              ? " Simulate casual handwriting. Good for reading notes and signs."
              : " Often used in books, newspapers, and formal documents. More intricate details."}
          </p>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN LANGUAGE MODULE ---
const LanguageModule = ({ config, onBack }) => {
  const [activeTab, setActiveTab] = useState('lessons');
  const [selectedChar, setSelectedChar] = useState(null);
  const [fontMode, setFontMode] = useState('A'); // 'A' | 'B' | 'Hand'

  // Safari Voice Fix
  useEffect(() => {
    const initVoices = () => { window.speechSynthesis.getVoices(); };
    initVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = initVoices;
    }
  }, []);

  const handlePlayAudio = (charData) => {
    let textToSpeak = charData.char;

    if (config.id === 'thai') {
       textToSpeak = charData.thaiName || charData.name;
    } else if (config.id === 'vietnamese') {
       textToSpeak = (charData.type === 'Tone' || charData.type === 'Grammar') ? charData.char : charData.char; 
    }

    speak(textToSpeak, config.langCode);
  };

  const handleCharClick = (charData) => {
    handlePlayAudio(charData);
    setSelectedChar(charData);
  };

  // Grouping Logic
  const groupedChars = useMemo(() => {
    if (!config.chars) return {};
    return config.chars.reduce((acc, curr) => {
      const type = curr.type || 'General';
      if (!acc[type]) acc[type] = [];
      acc[type].push(curr);
      return acc;
    }, {});
  }, [config]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 relative">
      {selectedChar && (
        <CharacterModal charData={selectedChar} langConfig={config} onClose={() => setSelectedChar(null)} />
      )}

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">{config.name} Basics</h2>
        <p className="text-slate-600 max-w-xl mx-auto">
          Tap any card to hear pronunciation and see details. {config.desc}
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 inline-flex">
          <button
            onClick={() => setActiveTab('lessons')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'lessons' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-4 h-4" /> Lessons
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'quiz' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <GraduationCap className="w-4 h-4" /> Quiz
          </button>
        </div>
      </div>

      {activeTab === 'lessons' ? (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <FontComparison config={config} fontMode={fontMode} setFontMode={setFontMode} />
          
          {Object.entries(groupedChars).map(([type, chars]) => (
            <div key={type} className="mb-12">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                {type === 'General' ? 'Characters' : type + 's'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {chars.map((c, idx) => (
                  <CharacterCard 
                    key={idx} 
                    charData={c} 
                    langConfig={config}
                    fontMode={fontMode}
                    onClick={() => handleCharClick(c)}
                    onAudioClick={handlePlayAudio}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <Quiz questions={config.quiz} langCode={config.langCode} onComplete={() => setActiveTab('lessons')} />
        </div>
      )}
    </div>
  );
};

// --- APP ROOT ---
const App = () => {
  const [currentLangId, setCurrentLangId] = useState(null);

  const currentLang = currentLangId ? Object.values(LANGUAGES).find(l => l.id === currentLangId) : null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <style>{`
        /* General & Handwriting */
        @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
        .font-caveat { font-family: 'Caveat', cursive !important; }

        /* Thai - Force Separate Imports to Ensure Loading */
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Mali:wght@400;600&display=swap');
        
        .font-kanit { font-family: 'Kanit', sans-serif !important; }
        .font-sarabun { font-family: 'Sarabun', sans-serif !important; }
        .font-mali { font-family: 'Mali', cursive !important; }
        
        /* Cyrillic, Greek (Latin Ext) */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Noto+Sans:wght@400;700&display=swap');
        .font-noto { font-family: 'Noto Sans', sans-serif !important; }
        .font-notoserif { font-family: 'Noto Serif', serif !important; }

        /* Vietnamese */
        .font-sans-vn { font-family: 'Noto Sans', sans-serif !important; }
        .font-serif-vn { font-family: 'Noto Serif', serif !important; }

        /* German */
        @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap');
        .font-blackletter { font-family: 'UnifrakturMaguntia', cursive !important; }
        .font-sans-de { font-family: 'Noto Sans', sans-serif !important; }
      `}</style>

      <Header goBack={() => setCurrentLangId(null)} currentLang={currentLang} />

      <main>
        {!currentLangId ? (
          <div className="max-w-6xl mx-auto px-4 py-12 animate-in fade-in duration-500">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Master a new <span className="text-indigo-600">script.</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                lang.bar focuses on the visual and auditory aspects of language. Learn fonts, alphabets, and sounds before diving into grammar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Object.values(LANGUAGES).map((lang) => (
                <LanguageCard 
                  key={lang.id} 
                  data={lang} 
                  onClick={() => !lang.comingSoon && setCurrentLangId(lang.id)} 
                />
              ))}
            </div>
          </div>
        ) : (
          <LanguageModule config={currentLang} onBack={() => setCurrentLangId(null)} />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-20 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© 2024 lang.bar. Start your journey.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;