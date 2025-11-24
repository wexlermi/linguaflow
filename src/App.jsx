import React, { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, ChevronLeft, Award, Globe, Type, Volume2, Info, Star, X, Image as ImageIcon, Smartphone, Menu } from 'lucide-react';

// --- CONFIGURATION: The Massive Language Database ---
const LANGUAGES = {
  THAI: {
    id: 'thai',
    name: 'Thai',
    nativeName: 'ไทย',
    scriptName: 'Thai Script',
    desc: 'The beautiful looped script of Thailand. 44 Consonants.',
    langCode: 'th-TH',
    fontA: 'font-sarabun', // Traditional
    fontB: 'font-kanit',   // Modern
    fontHand: 'font-mali',
    exampleText: 'สวัสดีครับ',
    exampleMeaning: 'Hello (Sawatdee)',
    styleALabel: 'Traditional',
    styleBLabel: 'Modern',
    chars: [
      { char: 'ก', name: 'Gor Gai', meaning: 'Chicken', sound: 'k', emoji: '🐔', class: 'Mid' },
      { char: 'ข', name: 'Khor Khai', meaning: 'Egg', sound: 'kh', emoji: '🥚', class: 'High' },
      { char: 'ฃ', name: 'Khor Khuad', meaning: 'Bottle (Obsolete)', sound: 'kh', emoji: '🍾', class: 'High' },
      { char: 'ค', name: 'Khor Khwai', meaning: 'Buffalo', sound: 'kh', emoji: '🐃', class: 'Low' },
      { char: 'ฅ', name: 'Khor Khon', meaning: 'Person (Obsolete)', sound: 'kh', emoji: '👤', class: 'Low' },
      { char: 'ฆ', name: 'Khor Rakhang', meaning: 'Bell', sound: 'kh', emoji: '🔔', class: 'Low' },
      { char: 'ง', name: 'Ngor Ngu', meaning: 'Snake', sound: 'ng', emoji: '🐍', class: 'Low' },
      { char: 'จ', name: 'Jor Jaan', meaning: 'Plate', sound: 'j', emoji: '🍽️', class: 'Mid' },
      { char: 'ฉ', name: 'Chor Ching', meaning: 'Cymbals', sound: 'ch', emoji: '🥁', class: 'High' },
      { char: 'ช', name: 'Chor Chang', meaning: 'Elephant', sound: 'ch', emoji: '🐘', class: 'Low' },
      { char: 'ซ', name: 'Sor So', meaning: 'Chain', sound: 's', emoji: '⛓️', class: 'Low' },
      { char: 'ฌ', name: 'Chor Cher', meaning: 'Tree', sound: 'ch', emoji: '🌳', class: 'Low' },
      { char: 'ญ', name: 'Yor Ying', meaning: 'Woman', sound: 'y', emoji: '👩', class: 'Low' },
      { char: 'ฎ', name: 'Dor Chada', meaning: 'Headdress', sound: 'd', emoji: '👑', class: 'Mid' },
      { char: 'ฏ', name: 'Tor Patak', meaning: 'Goad/Spear', sound: 't', emoji: '🔱', class: 'Mid' },
      { char: 'ฐ', name: 'Thor Than', meaning: 'Pedestal', sound: 'th', emoji: '🏛️', class: 'High' },
      { char: 'ฑ', name: 'Thor Montho', meaning: 'Montho (Name)', sound: 'th', emoji: '👸', class: 'Low' },
      { char: 'ฒ', name: 'Thor Phuthao', meaning: 'Elder', sound: 'th', emoji: '👴', class: 'Low' },
      { char: 'ณ', name: 'Nor Nen', meaning: 'Novice Monk', sound: 'n', emoji: '🧘', class: 'Low' },
      { char: 'ด', name: 'Dor Dek', meaning: 'Child', sound: 'd', emoji: '👶', class: 'Mid' },
      { char: 'ต', name: 'Tor Tao', meaning: 'Turtle', sound: 't', emoji: '🐢', class: 'Mid' },
      { char: 'ถ', name: 'Thor Thung', meaning: 'Sack', sound: 'th', emoji: '💰', class: 'High' },
      { char: 'ท', name: 'Thor Thahan', meaning: 'Soldier', sound: 'th', emoji: '💂', class: 'Low' },
      { char: 'ธ', name: 'Thor Thong', meaning: 'Flag', sound: 'th', emoji: '🚩', class: 'Low' },
      { char: 'น', name: 'Nor Nu', meaning: 'Mouse', sound: 'n', emoji: '🐁', class: 'Low' },
      { char: 'บ', name: 'Bor Baimai', meaning: 'Leaf', sound: 'b', emoji: '🍃', class: 'Mid' },
      { char: 'ป', name: 'Por Pla', meaning: 'Fish', sound: 'p', emoji: '🐟', class: 'Mid' },
      { char: 'ผ', name: 'Phor Phueng', meaning: 'Bee', sound: 'ph', emoji: '🐝', class: 'High' },
      { char: 'ฝ', name: 'For Fa', meaning: 'Lid', sound: 'f', emoji: '🍲', class: 'High' },
      { char: 'พ', name: 'Phor Phan', meaning: 'Tray', sound: 'ph', emoji: '🏺', class: 'Low' },
      { char: 'ฟ', name: 'For Fan', meaning: 'Teeth', sound: 'f', emoji: '🦷', class: 'Low' },
      { char: 'ภ', name: 'Phor Samphao', meaning: 'Sailboat', sound: 'ph', emoji: '⛵', class: 'Low' },
      { char: 'ม', name: 'Mor Maa', meaning: 'Horse', sound: 'm', emoji: '🐎', class: 'Low' },
      { char: 'ย', name: 'Yor Yak', meaning: 'Giant', sound: 'y', emoji: '👹', class: 'Low' },
      { char: 'ร', name: 'Ror Ruea', meaning: 'Boat', sound: 'r', emoji: '🚣', class: 'Low' },
      { char: 'ล', name: 'Lor Ling', meaning: 'Monkey', sound: 'l', emoji: '🐒', class: 'Low' },
      { char: 'ว', name: 'Wor Waen', meaning: 'Ring', sound: 'w', emoji: '💍', class: 'Low' },
      { char: 'ศ', name: 'Sor Sala', meaning: 'Pavilion', sound: 's', emoji: '🛖', class: 'High' },
      { char: 'ษ', name: 'Sor Ruesi', meaning: 'Hermit', sound: 's', emoji: '🧔', class: 'High' },
      { char: 'ส', name: 'Sor Suea', meaning: 'Tiger', sound: 's', emoji: '🐅', class: 'High' },
      { char: 'ห', name: 'Hor Hip', meaning: 'Chest/Box', sound: 'h', emoji: '📦', class: 'High' },
      { char: 'ฬ', name: 'Lor Chula', meaning: 'Kite', sound: 'l', emoji: '🪁', class: 'Low' },
      { char: 'อ', name: 'Or Ang', meaning: 'Basin', sound: 'o', emoji: '🛁', class: 'Mid' },
      { char: 'ฮ', name: 'Hor Nokhuk', meaning: 'Owl', sound: 'h', emoji: '🦉', class: 'Low' },
    ],
    quiz: [
      { question: "Which letter represents 'Chicken'?", options: ['ข', 'ก', 'ค', 'ง'], correct: 'ก' },
      { question: "What sound does 'จ' make?", options: ['K', 'M', 'J', 'S'], correct: 'J' },
      { question: "Identify 'Mor Maa' (Horse)", options: ['ม', 'น', 'ย', 'ร'], correct: 'ม' },
    ]
  },
  KOREAN: {
    id: 'korean',
    name: 'Korean',
    nativeName: '한글',
    scriptName: 'Hangul',
    desc: 'The logical alphabet of Korea.',
    langCode: 'ko-KR',
    fontA: 'font-batang', 
    fontB: 'font-notokr', 
    fontHand: 'font-gamja',
    exampleText: '안녕하세요',
    exampleMeaning: 'Hello (Annyeonghaseyo)',
    styleALabel: 'Serif',
    styleBLabel: 'Sans',
    chars: [
      // Consonants
      { char: 'ㄱ', name: 'Giyeok', meaning: 'G/K', sound: 'g', emoji: 'Gun' },
      { char: 'ㄴ', name: 'Nieun', meaning: 'N', sound: 'n', emoji: 'Nose' },
      { char: 'ㄷ', name: 'Digeut', meaning: 'D/T', sound: 'd', emoji: 'Door' },
      { char: 'ㄹ', name: 'Rieul', meaning: 'R/L', sound: 'r', emoji: 'Rattlesnake' },
      { char: 'ㅁ', name: 'Mieum', meaning: 'M', sound: 'm', emoji: 'Mouth' },
      { char: 'ㅂ', name: 'Bieup', meaning: 'B/P', sound: 'b', emoji: 'Bucket' },
      { char: 'ㅅ', name: 'Siot', meaning: 'S', sound: 's', emoji: 'Ski' },
      { char: 'ㅇ', name: 'Ieung', meaning: 'Silent/Ng', sound: 'ng', emoji: 'Zero' },
      { char: 'ㅈ', name: 'Jieut', meaning: 'J', sound: 'j', emoji: 'Jug' },
      { char: 'ㅊ', name: 'Chieut', meaning: 'Ch', sound: 'ch', emoji: 'Church' },
      { char: 'ㅋ', name: 'Kieuk', meaning: 'K', sound: 'k', emoji: 'Key' },
      { char: 'ㅌ', name: 'Tieut', meaning: 'T', sound: 't', emoji: 'Teeth' },
      { char: 'ㅍ', name: 'Pieup', meaning: 'P', sound: 'p', emoji: 'Part' },
      { char: 'ㅎ', name: 'Hieut', meaning: 'H', sound: 'h', emoji: 'Hat' },
      // Basic Vowels
      { char: 'ㅏ', name: 'A', meaning: 'A', sound: 'a', emoji: 'Father' },
      { char: 'ㅑ', name: 'Ya', meaning: 'Ya', sound: 'ya', emoji: 'Yacht' },
      { char: 'ㅓ', name: 'Eo', meaning: 'Eo', sound: 'eo', emoji: 'Bus' },
      { char: 'ㅕ', name: 'Yeo', meaning: 'Yeo', sound: 'yeo', emoji: 'Young' },
      { char: 'ㅗ', name: 'O', meaning: 'O', sound: 'o', emoji: 'Home' },
      { char: 'ㅛ', name: 'Yo', meaning: 'Yo', sound: 'yo', emoji: 'Yoyo' },
      { char: 'ㅜ', name: 'U', meaning: 'U', sound: 'u', emoji: 'Moon' },
      { char: 'ㅠ', name: 'Yu', meaning: 'Yu', sound: 'yu', emoji: 'You' },
      { char: 'ㅡ', name: 'Eu', meaning: 'Eu', sound: 'eu', emoji: 'Brook' },
      { char: 'ㅣ', name: 'I', meaning: 'I', sound: 'i', emoji: 'Tree' },
    ],
    quiz: [
      { question: "Which character sounds like 'M'?", options: ['ㄱ', 'ㅁ', 'ㅇ', 'ㄹ'], correct: 'ㅁ' },
      { question: "Which is the vowel 'A'?", options: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ'], correct: 'ㅏ' },
    ]
  },
  RUSSIAN: {
    id: 'russian',
    name: 'Russian',
    nativeName: 'Русский',
    scriptName: 'Cyrillic',
    desc: 'The alphabet used across Eastern Europe and North Asia.',
    langCode: 'ru-RU',
    fontA: 'font-notoserif', 
    fontB: 'font-noto',
    fontHand: 'font-caveat',
    exampleText: 'Привет',
    exampleMeaning: 'Hi (Privet)',
    styleALabel: 'Serif',
    styleBLabel: 'Sans',
    chars: [
      { char: 'А', name: 'A', meaning: 'A', sound: 'a', emoji: '🅰️' },
      { char: 'Б', name: 'Be', meaning: 'B', sound: 'b', emoji: '🥁' },
      { char: 'В', name: 'Ve', meaning: 'V', sound: 'v', emoji: '🚐' },
      { char: 'Г', name: 'Ge', meaning: 'G', sound: 'g', emoji: '🎸' },
      { char: 'Д', name: 'De', meaning: 'D', sound: 'd', emoji: '🏠' },
      { char: 'Е', name: 'Ye', meaning: 'Ye', sound: 'ye', emoji: '🇾' },
      { char: 'Ё', name: 'Yo', meaning: 'Yo', sound: 'yo', emoji: '🪀' },
      { char: 'Ж', name: 'Zhe', meaning: 'Zh (measure)', sound: 'zh', emoji: '🐞' },
      { char: 'З', name: 'Ze', meaning: 'Z', sound: 'z', emoji: '🦓' },
      { char: 'И', name: 'I', meaning: 'Ee', sound: 'i', emoji: '🦕' },
      { char: 'Й', name: 'Short I', meaning: 'Y', sound: 'y', emoji: '🍦' },
      { char: 'К', name: 'Ka', meaning: 'K', sound: 'k', emoji: '🔑' },
      { char: 'Л', name: 'El', meaning: 'L', sound: 'l', emoji: '🦁' },
      { char: 'М', name: 'Em', meaning: 'M', sound: 'm', emoji: '🗺️' },
      { char: 'Н', name: 'En', meaning: 'N', sound: 'n', emoji: '👃' },
      { char: 'О', name: 'O', meaning: 'O', sound: 'o', emoji: '🥯' },
      { char: 'П', name: 'Pe', meaning: 'P', sound: 'p', emoji: '🐧' },
      { char: 'Р', name: 'Er', meaning: 'R (rolled)', sound: 'r', emoji: '🚀' },
      { char: 'С', name: 'Es', meaning: 'S', sound: 's', emoji: '🐍' },
      { char: 'Т', name: 'Te', meaning: 'T', sound: 't', emoji: '🐯' },
      { char: 'У', name: 'U', meaning: 'U', sound: 'u', emoji: '👻' },
      { char: 'Ф', name: 'Ef', meaning: 'F', sound: 'f', emoji: '📸' },
      { char: 'Х', name: 'Kha', meaning: 'Kh (Bach)', sound: 'kh', emoji: '🎅' },
      { char: 'Ц', name: 'Tse', meaning: 'Ts', sound: 'ts', emoji: '🍕' },
      { char: 'Ч', name: 'Che', meaning: 'Ch', sound: 'ch', emoji: '🍫' },
      { char: 'Ш', name: 'Sha', meaning: 'Sh', sound: 'sh', emoji: '🤫' },
      { char: 'Щ', name: 'Shcha', meaning: 'Shch', sound: 'shch', emoji: '🍲' },
      { char: 'Ъ', name: 'Hard Sign', meaning: 'Silent', sound: '-', emoji: '🛑' },
      { char: 'Ы', name: 'Yery', meaning: 'i (deep)', sound: 'y', emoji: '🧀' },
      { char: 'Ь', name: 'Soft Sign', meaning: 'Silent', sound: '-', emoji: '☁️' },
      { char: 'Э', name: 'E', meaning: 'E', sound: 'e', emoji: '📧' },
      { char: 'Ю', name: 'Yu', meaning: 'Yu', sound: 'yu', emoji: '🪐' },
      { char: 'Я', name: 'Ya', meaning: 'Ya', sound: 'ya', emoji: '🍎' },
    ],
    quiz: [
      { question: "Which letter sounds like 'V'?", options: ['Б', 'В', 'Г', 'Д'], correct: 'В' },
      { question: "What sound does 'Р' make?", options: ['P', 'R', 'S', 'B'], correct: 'R' },
    ]
  },
  GREEK: {
    id: 'greek',
    name: 'Greek',
    nativeName: 'Ελληνικά',
    scriptName: 'Greek',
    desc: 'The ancestor of Latin and Cyrillic.',
    langCode: 'el-GR',
    fontA: 'font-notoserif', 
    fontB: 'font-noto',
    fontHand: 'font-caveat',
    exampleText: 'Γεια σας',
    exampleMeaning: 'Hello (Yia sas)',
    styleALabel: 'Serif',
    styleBLabel: 'Sans',
    chars: [
      { char: 'Α', name: 'Alpha', meaning: 'A', sound: 'a', emoji: '🅰️' },
      { char: 'Β', name: 'Beta', meaning: 'V', sound: 'v', emoji: '🎻' },
      { char: 'Γ', name: 'Gamma', meaning: 'G/Y', sound: 'g', emoji: '🐐' },
      { char: 'Δ', name: 'Delta', meaning: 'Th (soft)', sound: 'th', emoji: '🔺' },
      { char: 'Ε', name: 'Epsilon', meaning: 'E', sound: 'e', emoji: '🥚' },
      { char: 'Ζ', name: 'Zeta', meaning: 'Z', sound: 'z', emoji: '⚡' },
      { char: 'Η', name: 'Eta', meaning: 'i', sound: 'i', emoji: '☀️' },
      { char: 'Θ', name: 'Theta', meaning: 'Th (hard)', sound: 'th', emoji: '💭' },
      { char: 'Ι', name: 'Iota', meaning: 'i', sound: 'i', emoji: '📍' },
      { char: 'Κ', name: 'Kappa', meaning: 'K', sound: 'k', emoji: '🔑' },
      { char: 'Λ', name: 'Lambda', meaning: 'L', sound: 'l', emoji: '🦁' },
      { char: 'Μ', name: 'Mu', meaning: 'M', sound: 'm', emoji: '🗺️' },
      { char: 'Ν', name: 'Nu', meaning: 'N', sound: 'n', emoji: '👃' },
      { char: 'Ξ', name: 'Xi', meaning: 'Ks/X', sound: 'ks', emoji: '🚕' },
      { char: 'Ο', name: 'Omicron', meaning: 'O', sound: 'o', emoji: '🍩' },
      { char: 'Π', name: 'Pi', meaning: 'P', sound: 'p', emoji: '🥧' },
      { char: 'Ρ', name: 'Rho', meaning: 'R', sound: 'r', emoji: '🌹' },
      { char: 'Σ', name: 'Sigma', meaning: 'S', sound: 's', emoji: '🐍' },
      { char: 'Τ', name: 'Tau', meaning: 'T', sound: 't', emoji: '🐢' },
      { char: 'Υ', name: 'Upsilon', meaning: 'i', sound: 'i', emoji: '🍷' },
      { char: 'Φ', name: 'Phi', meaning: 'F', sound: 'f', emoji: '📸' },
      { char: 'Χ', name: 'Chi', meaning: 'H/Kh', sound: 'h', emoji: '🎄' },
      { char: 'Ψ', name: 'Psi', meaning: 'Ps', sound: 'ps', emoji: '🔱' },
      { char: 'Ω', name: 'Omega', meaning: 'O', sound: 'o', emoji: '🔚' },
    ],
    quiz: [
      { question: "In modern Greek, 'Beta' (Β) makes which sound?", options: ['B', 'V', 'G', 'D'], correct: 'V' },
      { question: "Which symbol represents the 'Ps' sound?", options: ['Φ', 'Ψ', 'Χ', 'Ξ'], correct: 'Ψ' },
    ]
  },
  JAPANESE: {
    id: 'jp',
    name: 'Japanese',
    nativeName: '日本語',
    scriptName: 'Hiragana',
    desc: 'The basic phonetic syllabary of Japan.',
    langCode: 'ja-JP',
    fontA: 'font-serif-jp',
    fontB: 'font-sans-jp',
    fontHand: 'font-caveat', // Handwriting placeholder
    exampleText: 'こんにちは',
    exampleMeaning: 'Hello (Konnichiwa)',
    styleALabel: 'Mincho',
    styleBLabel: 'Gothic',
    chars: [
      { char: 'あ', name: 'A', meaning: 'A', sound: 'a', emoji: '🐜' },
      { char: 'い', name: 'I', meaning: 'I', sound: 'i', emoji: '🦅' },
      { char: 'う', name: 'U', meaning: 'U', sound: 'u', emoji: '🐇' },
      { char: 'え', name: 'E', meaning: 'E', sound: 'e', emoji: '✏️' },
      { char: 'お', name: 'O', meaning: 'O', sound: 'o', emoji: '🍙' },
      { char: 'か', name: 'Ka', meaning: 'Ka', sound: 'ka', emoji: '🦀' },
      { char: 'き', name: 'Ki', meaning: 'Ki', sound: 'ki', emoji: '🔑' },
      { char: 'く', name: 'Ku', meaning: 'Ku', sound: 'ku', emoji: '☁️' },
      { char: 'け', name: 'Ke', meaning: 'Ke', sound: 'ke', emoji: '🧶' },
      { char: 'こ', name: 'Ko', meaning: 'Ko', sound: 'ko', emoji: '🥤' },
      { char: 'さ', name: 'Sa', meaning: 'Sa', sound: 'sa', emoji: '🌸' },
      { char: 'し', name: 'Shi', meaning: 'Shi', sound: 'shi', emoji: '🦌' },
      { char: 'す', name: 'Su', meaning: 'Su', sound: 'su', emoji: '🍉' },
      { char: 'せ', name: 'Se', meaning: 'Se', sound: 'se', emoji: '🌏' },
      { char: 'そ', name: 'So', meaning: 'So', sound: 'so', emoji: '🥤' },
      { char: 'た', name: 'Ta', meaning: 'Ta', sound: 'ta', emoji: '🌮' },
      { char: 'ち', name: 'Chi', meaning: 'Chi', sound: 'chi', emoji: '🧀' },
      { char: 'つ', name: 'Tsu', meaning: 'Tsu', sound: 'tsu', emoji: '🌊' },
      { char: 'て', name: 'Te', meaning: 'Te', sound: 'te', emoji: '📺' },
      { char: 'と', name: 'To', meaning: 'To', sound: 'to', emoji: '🍅' },
      { char: 'な', name: 'Na', meaning: 'Na', sound: 'na', emoji: '🍆' },
      { char: 'に', name: 'Ni', meaning: 'Ni', sound: 'ni', emoji: '🥩' },
      { char: 'ぬ', name: 'Nu', meaning: 'Nu', sound: 'nu', emoji: '🍜' },
      { char: 'ね', name: 'Ne', meaning: 'Ne', sound: 'ne', emoji: '🐱' },
      { char: 'の', name: 'No', meaning: 'No', sound: 'no', emoji: '⛔' },
      { char: 'は', name: 'Ha', meaning: 'Ha', sound: 'ha', emoji: '🦷' },
      { char: 'ひ', name: 'Hi', meaning: 'Hi', sound: 'hi', emoji: '🔥' },
      { char: 'ふ', name: 'Fu', meaning: 'Fu', sound: 'fu', emoji: '🗻' },
      { char: 'へ', name: 'He', meaning: 'He', sound: 'he', emoji: '🐍' },
      { char: 'ほ', name: 'Ho', meaning: 'Ho', sound: 'ho', emoji: '🦴' },
      { char: 'ま', name: 'Ma', meaning: 'Ma', sound: 'ma', emoji: '🧙' },
      { char: 'み', name: 'Mi', meaning: 'Mi', sound: 'mi', emoji: '🍊' },
      { char: 'む', name: 'Mu', meaning: 'Mu', sound: 'mu', emoji: '🐛' },
      { char: 'め', name: 'Me', meaning: 'Me', sound: 'me', emoji: '👀' },
      { char: 'も', name: 'Mo', meaning: 'Mo', sound: 'mo', emoji: '🍑' },
      { char: 'や', name: 'Ya', meaning: 'Ya', sound: 'ya', emoji: '🏔️' },
      { char: 'ゆ', name: 'Yu', meaning: 'Yu', sound: 'yu', emoji: '❄️' },
      { char: 'よ', name: 'Yo', meaning: 'Yo', sound: 'yo', emoji: '🛥️' },
      { char: 'ら', name: 'Ra', meaning: 'Ra', sound: 'ra', emoji: '🦁' },
      { char: 'り', name: 'Ri', meaning: 'Ri', sound: 'ri', emoji: '🐿️' },
      { char: 'る', name: 'Ru', meaning: 'Ru', sound: 'ru', emoji: '💎' },
      { char: 'れ', name: 'Re', meaning: 'Re', sound: 're', emoji: '🍋' },
      { char: 'ろ', name: 'Ro', meaning: 'Ro', sound: 'ro', emoji: '🤖' },
      { char: 'わ', name: 'Wa', meaning: 'Wa', sound: 'wa', emoji: '🐊' },
      { char: 'を', name: 'Wo', meaning: 'Wo', sound: 'o', emoji: '🔗' },
      { char: 'ん', name: 'N', meaning: 'N', sound: 'n', emoji: '🥜' },
    ],
    quiz: [
      { question: "Which character is 'Ka'?", options: ['か', 'き', 'く', 'け'], correct: 'か' },
      { question: "Which character looks like a smiley face?", options: ['し', 'つ', 'ん', 'そ'], correct: 'し' },
    ]
  },
  HINDI: {
    id: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    scriptName: 'Devanagari',
    desc: 'The script used for Hindi, Sanskrit, and Marathi.',
    langCode: 'hi-IN',
    fontA: 'font-serif-in',
    fontB: 'font-sans-in',
    fontHand: 'font-caveat',
    exampleText: 'नमस्ते',
    exampleMeaning: 'Hello (Namaste)',
    styleALabel: 'Serif',
    styleBLabel: 'Sans',
    chars: [
      { char: 'अ', name: 'A', meaning: 'A', sound: 'a', emoji: '🍍' },
      { char: 'आ', name: 'Aa', meaning: 'Aa', sound: 'aa', emoji: '🥭' },
      { char: 'इ', name: 'I', meaning: 'I', sound: 'i', emoji: '🧊' },
      { char: 'ई', name: 'Ee', meaning: 'Ee', sound: 'ee', emoji: '🍬' },
      { char: 'क', name: 'Ka', meaning: 'Ka', sound: 'ka', emoji: '🪷' },
      { char: 'ख', name: 'Kha', meaning: 'Kha', sound: 'kha', emoji: '🐇' },
      { char: 'ग', name: 'Ga', meaning: 'Ga', sound: 'ga', emoji: '🪴' },
      { char: 'घ', name: 'Gha', meaning: 'Gha', sound: 'gha', emoji: '🏠' },
      { char: 'च', name: 'Cha', meaning: 'Cha', sound: 'cha', emoji: '🥄' },
      { char: 'छ', name: 'Chha', meaning: 'Chha', sound: 'chha', emoji: '☂️' },
      { char: 'ज', name: 'Ja', meaning: 'Ja', sound: 'ja', emoji: '🚢' },
      { char: 'झ', name: 'Jha', meaning: 'Jha', sound: 'jha', emoji: '🏁' },
      { char: 'ट', name: 'Ta', meaning: 'Ta (Retroflex)', sound: 'ta', emoji: '🍅' },
      { char: 'ठ', name: 'Tha', meaning: 'Tha', sound: 'tha', emoji: '🔨' },
      { char: 'ड', name: 'Da', meaning: 'Da', sound: 'da', emoji: '🥁' },
      { char: 'ढ', name: 'Dha', meaning: 'Dha', sound: 'dha', emoji: '🛡️' },
      { char: 'ण', name: 'Na', meaning: 'Na', sound: 'na', emoji: '🏹' },
      { char: 'त', name: 'Ta', meaning: 'Ta (Dental)', sound: 'ta', emoji: '🍉' },
      { char: 'थ', name: 'Tha', meaning: 'Tha', sound: 'tha', emoji: '🌡️' },
      { char: 'द', name: 'Da', meaning: 'Da', sound: 'da', emoji: '🦷' },
      { char: 'ध', name: 'Dha', meaning: 'Dha', sound: 'dha', emoji: '🏹' },
      { char: 'न', name: 'Na', meaning: 'Na', sound: 'na', emoji: '🧂' },
      { char: 'प', name: 'Pa', meaning: 'Pa', sound: 'pa', emoji: '🪁' },
      { char: 'फ', name: 'Pha', meaning: 'Pha', sound: 'pha', emoji: '🍌' },
      { char: 'ब', name: 'Ba', meaning: 'Ba', sound: 'ba', emoji: '🐐' },
      { char: 'भ', name: 'Bha', meaning: 'Bha', sound: 'bha', emoji: '🐻' },
      { char: 'म', name: 'Ma', meaning: 'Ma', sound: 'ma', emoji: '🐟' },
      { char: 'य', name: 'Ya', meaning: 'Ya', sound: 'ya', emoji: '🧘' },
      { char: 'र', name: 'Ra', meaning: 'Ra', sound: 'ra', emoji: '🚂' },
      { char: 'ल', name: 'La', meaning: 'La', sound: 'la', emoji: '👦' },
      { char: 'व', name: 'Va', meaning: 'Va', sound: 'va', emoji: '🌧️' },
      { char: 'श', name: 'Sha', meaning: 'Sha', sound: 'sha', emoji: '🦁' },
      { char: 'ष', name: 'Sha', meaning: 'Sha (Retro)', sound: 'sha', emoji: '🛑' },
      { char: 'स', name: 'Sa', meaning: 'Sa', sound: 'sa', emoji: '🍏' },
      { char: 'ह', name: 'Ha', meaning: 'Ha', sound: 'ha', emoji: '🐘' },
    ],
    quiz: [
      { question: "Which letter is 'Ka'?", options: ['क', 'ख', 'ग', 'घ'], correct: 'क' },
      { question: "Identify the letter 'Ra'", options: ['र', 'ल', 'व', 'श'], correct: 'र' },
    ]
  },
  ARABIC: {
    id: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    scriptName: 'Arabic',
    desc: 'A right-to-left cursive script with 28 letters.',
    langCode: 'ar-SA',
    fontA: 'font-serif-ar', // Naskh
    fontB: 'font-sans-ar',  // Sans
    fontHand: 'font-caveat',
    exampleText: 'مرحبا',
    exampleMeaning: 'Hello (Marhaban)',
    styleALabel: 'Naskh',
    styleBLabel: 'Kufi/Sans',
    chars: [
      { char: 'ا', name: 'Alif', meaning: 'A', sound: 'a', emoji: '🦁' },
      { char: 'ب', name: 'Ba', meaning: 'B', sound: 'b', emoji: '🦆' },
      { char: 'ت', name: 'Ta', meaning: 'T', sound: 't', emoji: '🍎' },
      { char: 'ث', name: 'Tha', meaning: 'Th', sound: 'th', emoji: '🦊' },
      { char: 'ج', name: 'Jim', meaning: 'J', sound: 'j', emoji: '🐫' },
      { char: 'ح', name: 'Ha', meaning: 'H (Deep)', sound: 'h', emoji: '🐎' },
      { char: 'خ', name: 'Kha', meaning: 'Kh', sound: 'kh', emoji: '🐑' },
      { char: 'د', name: 'Dal', meaning: 'D', sound: 'd', emoji: '🐓' },
      { char: 'ذ', name: 'Dhal', meaning: 'Dh', sound: 'dh', emoji: '🌽' },
      { char: 'ر', name: 'Ra', meaning: 'R', sound: 'r', emoji: '🚀' },
      { char: 'ز', name: 'Zay', meaning: 'Z', sound: 'z', emoji: '🦒' },
      { char: 'س', name: 'Sin', meaning: 'S', sound: 's', emoji: '🐟' },
      { char: 'ش', name: 'Shin', meaning: 'Sh', sound: 'sh', emoji: '☀️' },
      { char: 'ص', name: 'Sad', meaning: 'S (Deep)', sound: 's', emoji: '🦅' },
      { char: 'ض', name: 'Dad', meaning: 'D (Deep)', sound: 'd', emoji: '🐸' },
      { char: 'ط', name: 'Ta', meaning: 'T (Deep)', sound: 't', emoji: '✈️' },
      { char: 'ظ', name: 'Zha', meaning: 'Zh (Deep)', sound: 'z', emoji: '✉️' },
      { char: 'ع', name: 'Ain', meaning: 'Ain', sound: 'aa', emoji: '🍇' },
      { char: 'غ', name: 'Ghain', meaning: 'Gh', sound: 'gh', emoji: '☁️' },
      { char: 'ف', name: 'Fa', meaning: 'F', sound: 'f', emoji: '🐘' },
      { char: 'ق', name: 'Qaf', meaning: 'Q', sound: 'q', emoji: '🖊️' },
      { char: 'ك', name: 'Kaf', meaning: 'K', sound: 'k', emoji: '📖' },
      { char: 'ل', name: 'Lam', meaning: 'L', sound: 'l', emoji: '🍋' },
      { char: 'm', name: 'Mim', meaning: 'M', sound: 'm', emoji: '🗝️' },
      { char: 'ن', name: 'Nun', meaning: 'N', sound: 'n', emoji: '🐅' },
      { char: 'ه', name: 'Ha', meaning: 'H', sound: 'h', emoji: '🌛' },
      { char: 'و', name: 'Waw', meaning: 'W', sound: 'w', emoji: '🌹' },
      { char: 'ي', name: 'Ya', meaning: 'Y', sound: 'y', emoji: '✋' },
    ],
    quiz: [
      { question: "Which letter has a single dot below?", options: ['ب', 'ت', 'ث', 'ي'], correct: 'ب' },
      { question: "Which letter represents 'S'?", options: ['س', 'ش', 'ص', 'ز'], correct: 'س' },
    ]
  },
  HEBREW: {
    id: 'he',
    name: 'Hebrew',
    nativeName: 'עִבְרִית',
    scriptName: 'Hebrew',
    desc: 'Ancient right-to-left script revived for modern use.',
    langCode: 'he-IL',
    fontA: 'font-serif-he',
    fontB: 'font-sans-he',
    fontHand: 'font-caveat',
    exampleText: 'שלום',
    exampleMeaning: 'Peace/Hello (Shalom)',
    styleALabel: 'Serif',
    styleBLabel: 'Sans',
    chars: [
      { char: 'א', name: 'Aleph', meaning: 'Silent', sound: '-', emoji: '👑' },
      { char: 'ב', name: 'Bet', meaning: 'B/V', sound: 'b/v', emoji: '🏠' },
      { char: 'ג', name: 'Gimel', meaning: 'G', sound: 'g', emoji: '🐫' },
      { char: 'ד', name: 'Dalet', meaning: 'D', sound: 'd', emoji: '🚪' },
      { char: 'ה', name: 'He', meaning: 'H', sound: 'h', emoji: '👋' },
      { char: 'ו', name: 'Vav', meaning: 'V/O/U', sound: 'v', emoji: '🎣' },
      { char: 'ז', name: 'Zayin', meaning: 'Z', sound: 'z', emoji: '🗡️' },
      { char: 'ח', name: 'Het', meaning: 'Kh', sound: 'kh', emoji: '🥖' },
      { char: 'ט', name: 'Tet', meaning: 'T', sound: 't', emoji: '🧱' },
      { char: 'י', name: 'Yod', meaning: 'Y', sound: 'y', emoji: '🖐️' },
      { char: 'כ', name: 'Kaf', meaning: 'K/Kh', sound: 'k', emoji: '🥄' },
      { char: 'ל', name: 'Lamed', meaning: 'L', sound: 'l', emoji: '📉' },
      { char: 'מ', name: 'Mem', meaning: 'M', sound: 'm', emoji: '💧' },
      { char: 'נ', name: 'Nun', meaning: 'N', sound: 'n', emoji: '🕯️' },
      { char: 'ס', name: 'Samekh', meaning: 'S', sound: 's', emoji: '🛡️' },
      { char: 'ע', name: 'Ayin', meaning: 'Silent', sound: '-', emoji: '👁️' },
      { char: 'פ', name: 'Pe', meaning: 'P/F', sound: 'p/f', emoji: '👄' },
      { char: 'צ', name: 'Tsade', meaning: 'Ts', sound: 'ts', emoji: '🌱' },
      { char: 'ק', name: 'Qof', meaning: 'K', sound: 'k', emoji: '🐒' },
      { char: 'ר', name: 'Resh', meaning: 'R', sound: 'r', emoji: '🤕' },
      { char: 'ש', name: 'Shin', meaning: 'Sh/S', sound: 'sh', emoji: '🦷' },
      { char: 'ת', name: 'Tav', meaning: 'T', sound: 't', emoji: '🎵' },
    ],
    quiz: [
      { question: "Which is the first letter?", options: ['א', 'ב', 'ג', 'ד'], correct: 'א' },
      { question: "Which letter makes the 'Sh' sound?", options: ['ש', 'ס', 'צ', 'ז'], correct: 'ש' },
    ]
  },
  GEORGIAN: {
    id: 'ka',
    name: 'Georgian',
    nativeName: 'ქართული',
    scriptName: 'Mkhedruli',
    desc: 'A unique script unrelated to any other in the world.',
    langCode: 'ka-GE',
    fontA: 'font-serif-ka',
    fontB: 'font-sans-ka',
    fontHand: 'font-caveat',
    exampleText: 'გამარჯობა',
    exampleMeaning: 'Hello (Gamarjoba)',
    styleALabel: 'Serif',
    styleBLabel: 'Sans',
    chars: [
      { char: 'ა', name: 'An', meaning: 'A', sound: 'a', emoji: '🅰️' },
      { char: 'ბ', name: 'Ban', meaning: 'B', sound: 'b', emoji: '🅱️' },
      { char: 'გ', name: 'Gan', meaning: 'G', sound: 'g', emoji: '🇬' },
      { char: 'დ', name: 'Don', meaning: 'D', sound: 'd', emoji: '🇩' },
      { char: 'ე', name: 'En', meaning: 'E', sound: 'e', emoji: '🇪' },
      { char: 'ვ', name: 'Vin', meaning: 'V', sound: 'v', emoji: '🇻' },
      { char: 'ზ', name: 'Zen', meaning: 'Z', sound: 'z', emoji: '🇿' },
      { char: 'თ', name: 'Tan', meaning: 'T', sound: 't', emoji: '🍵' },
      { char: 'ი', name: 'In', meaning: 'I', sound: 'i', emoji: '🇮' },
      { char: 'კ', name: 'Kan', meaning: 'K', sound: 'k', emoji: '🔑' },
      { char: 'ლ', name: 'Las', meaning: 'L', sound: 'l', emoji: '🦁' },
      { char: 'მ', name: 'Man', meaning: 'M', sound: 'm', emoji: '👨' },
      { char: 'ნ', name: 'Nar', meaning: 'N', sound: 'n', emoji: '👃' },
      { char: 'ო', name: 'On', meaning: 'O', sound: 'o', emoji: '🅾️' },
      { char: 'პ', name: 'Par', meaning: 'P', sound: 'p', emoji: '🅿️' },
      { char: 'ჟ', name: 'Zhan', meaning: 'Zh', sound: 'zh', emoji: '🐞' },
      { char: 'რ', name: 'Rae', meaning: 'R', sound: 'r', emoji: '🛤️' },
      { char: 'ს', name: 'San', meaning: 'S', sound: 's', emoji: '🐍' },
      { char: 'ტ', name: 'Tar', meaning: 'T', sound: 't', emoji: '🗼' },
      { char: 'უ', name: 'Un', meaning: 'U', sound: 'u', emoji: '🍇' },
      { char: 'ფ', name: 'Phar', meaning: 'P', sound: 'p', emoji: '🐼' },
      { char: 'ქ', name: 'Khar', meaning: 'K', sound: 'k', emoji: '🏰' },
      { char: 'ღ', name: 'Ghan', meaning: 'Gh', sound: 'gh', emoji: '👻' },
      { char: 'ყ', name: 'Qar', meaning: 'Q', sound: 'q', emoji: '🦅' },
      { char: 'შ', name: 'Shin', meaning: 'Sh', sound: 'sh', emoji: '🤫' },
      { char: 'ჩ', name: 'Chin', meaning: 'Ch', sound: 'ch', emoji: '🚂' },
      { char: 'ც', name: 'Tsan', meaning: 'Ts', sound: 'ts', emoji: '🌲' },
      { char: 'ძ', name: 'Dzil', meaning: 'Dz', sound: 'dz', emoji: '🌪️' },
      { char: 'წ', name: 'Tsil', meaning: 'Ts', sound: 'ts', emoji: '💧' },
      { char: 'ჭ', name: 'Char', meaning: 'Ch', sound: 'ch', emoji: '🐛' },
      { char: 'ხ', name: 'Khan', meaning: 'Kh', sound: 'kh', emoji: '🖐️' },
      { char: 'ჯ', name: 'Jhan', meaning: 'J', sound: 'j', emoji: '🧞' },
      { char: 'ჰ', name: 'Hae', meaning: 'H', sound: 'h', emoji: '🏡' },
    ],
    quiz: [
      { question: "Which letter looks like a 3?", options: ['ვ', 'კ', 'პ', 'რ'], correct: 'ვ' },
      { question: "What is the first letter?", options: ['ა', 'ბ', 'გ', 'დ'], correct: 'ა' },
    ]
  },
  ARMENIAN: {
    id: 'hy',
    name: 'Armenian',
    nativeName: 'Հայերեն',
    scriptName: 'Armenian',
    desc: 'Created in 405 AD by Mesrop Mashtots.',
    langCode: 'hy-AM',
    fontA: 'font-serif-hy',
    fontB: 'font-sans-hy',
    fontHand: 'font-caveat',
    exampleText: 'Բարեւ',
    exampleMeaning: 'Hello (Barev)',
    styleALabel: 'Serif',
    styleBLabel: 'Sans',
    chars: [
      { char: 'Ա', name: 'Ayb', meaning: 'A', sound: 'a', emoji: '🅰️' },
      { char: 'Բ', name: 'Ben', meaning: 'B', sound: 'b', emoji: '🅱️' },
      { char: 'Գ', name: 'Gim', meaning: 'G', sound: 'g', emoji: '🇬' },
      { char: 'Դ', name: 'Da', meaning: 'D', sound: 'd', emoji: '🇩' },
      { char: 'Ե', name: 'Ech', meaning: 'E', sound: 'e', emoji: '🇪' },
      { char: 'Զ', name: 'Za', meaning: 'Z', sound: 'z', emoji: '🇿' },
      { char: 'Է', name: 'Eh', meaning: 'E', sound: 'e', emoji: '👂' },
      { char: 'Ը', name: 'Et', meaning: 'E', sound: 'e', emoji: '🤏' },
      { char: 'Թ', name: 'To', meaning: 'T', sound: 't', emoji: '🍵' },
      { char: 'Ժ', name: 'Zhe', meaning: 'Zh', sound: 'zh', emoji: '🦒' },
      { char: 'Ի', name: 'Ini', meaning: 'I', sound: 'i', emoji: '🇮' },
      { char: 'Լ', name: 'Liun', meaning: 'L', sound: 'l', emoji: '🦁' },
      { char: 'Խ', name: 'Xeh', meaning: 'Kh', sound: 'kh', emoji: '🍇' },
      { char: 'Ծ', name: 'Tsa', meaning: 'Ts', sound: 'ts', emoji: '🌳' },
      { char: 'Կ', name: 'Ken', meaning: 'K', sound: 'k', emoji: '🥛' },
      { char: 'Հ', name: 'Ho', meaning: 'H', sound: 'h', emoji: '🏠' },
      { char: 'Ձ', name: 'Dza', meaning: 'Dz', sound: 'dz', emoji: '🔔' },
      { char: 'Ղ', name: 'Ghat', meaning: 'Gh', sound: 'gh', emoji: '🌧️' },
      { char: 'Ճ', name: 'Cheh', meaning: 'Ch', sound: 'ch', emoji: '🥣' },
      { char: 'Մ', name: 'Men', meaning: 'M', sound: 'm', emoji: '👨' },
      { char: 'Յ', name: 'Yi', meaning: 'Y', sound: 'y', emoji: '🛥️' },
      { char: 'Ն', name: 'Nu', meaning: 'N', sound: 'n', emoji: '👃' },
      { char: 'Շ', name: 'Sha', meaning: 'Sh', sound: 'sh', emoji: '👞' },
      { char: 'Ո', name: 'Vo', meaning: 'O', sound: 'o', emoji: '🦴' },
      { char: 'Չ', name: 'Cha', meaning: 'Ch', sound: 'ch', emoji: '🍫' },
      { char: 'Պ', name: 'Peh', meaning: 'P', sound: 'p', emoji: '🐧' },
      { char: 'Ջ', name: 'Jheh', meaning: 'J', sound: 'j', emoji: '👖' },
      { char: 'Ռ', name: 'Ra', meaning: 'R', sound: 'r', emoji: '🚀' },
      { char: 'Ս', name: 'Seh', meaning: 'S', sound: 's', emoji: '🐍' },
      { char: 'Վ', name: 'Vew', meaning: 'V', sound: 'v', emoji: '🚐' },
      { char: 'Տ', name: 'Tiun', meaning: 'T', sound: 't', emoji: '🐯' },
      { char: 'Ր', name: 'Reh', meaning: 'R', sound: 'r', emoji: '🛣️' },
      { char: 'Ց', name: 'Tso', meaning: 'Ts', sound: 'ts', emoji: '🦗' },
      { char: 'Ւ', name: 'Yiun', meaning: 'W', sound: 'w', emoji: '💧' },
      { char: 'Փ', name: 'Piur', meaning: 'P', sound: 'p', emoji: '🅿️' },
      { char: 'Ք', name: 'Keh', meaning: 'K', sound: 'k', emoji: '🏰' },
    ],
    quiz: [
      { question: "Which letter is 'A'?", options: ['Ա', 'Բ', 'Գ', 'Դ'], correct: 'Ա' },
      { question: "Which letter sounds like 'S'?", options: ['Ս', 'Զ', 'Շ', 'Ժ'], correct: 'Ս' },
    ]
  },
  KHMER: {
    id: 'km',
    name: 'Khmer',
    nativeName: 'ខ្មែរ',
    scriptName: 'Khmer',
    desc: 'The script of Cambodia, famous for its subscript consonants.',
    langCode: 'km-KH',
    fontA: 'font-serif-km',
    fontB: 'font-sans-km',
    fontHand: 'font-caveat',
    exampleText: 'សួស្តី',
    exampleMeaning: 'Hello (Suostei)',
    styleALabel: 'Serif',
    styleBLabel: 'Sans',
    chars: [
      { char: 'ក', name: 'Ka', meaning: 'K', sound: 'k', emoji: '🐔' },
      { char: 'ខ', name: 'Kha', meaning: 'Kh', sound: 'kh', emoji: '🥚' },
      { char: 'គ', name: 'Ko', meaning: 'K (low)', sound: 'k', emoji: '🐄' },
      { char: 'ឃ', name: 'Kho', meaning: 'Kh (low)', sound: 'kh', emoji: '🔔' },
      { char: 'ង', name: 'Ngo', meaning: 'Ng', sound: 'ng', emoji: '🐍' },
      { char: 'ច', name: 'Cha', meaning: 'Ch', sound: 'ch', emoji: '🍽️' },
      { char: 'ឆ', name: 'Chha', meaning: 'Chh', sound: 'chh', emoji: '🐈' },
      { char: 'ជ', name: 'Cho', meaning: 'Ch (low)', sound: 'ch', emoji: '🐘' },
      { char: 'ឈ', name: 'Chho', meaning: 'Chh (low)', sound: 'chh', emoji: '🌲' },
      { char: 'ញ', name: 'Nho', meaning: 'Nh', sound: 'nh', emoji: '🔨' },
      { char: 'ដ', name: 'Da', meaning: 'D', sound: 'd', emoji: '🕸️' },
      { char: 'ឋ', name: 'Tha', meaning: 'Th', sound: 'th', emoji: '🏛️' },
      { char: 'ឌ', name: 'Do', meaning: 'D (low)', sound: 'd', emoji: '🥁' },
      { char: 'ឍ', name: 'Tho', meaning: 'Th (low)', sound: 'th', emoji: '👵' },
      { char: 'ណ', name: 'Na', meaning: 'N', sound: 'n', emoji: '🧒' },
      { char: 'ត', name: 'Ta', meaning: 'T', sound: 't', emoji: '🦁' },
      { char: 'ថ', name: 'Tha', meaning: 'Th', sound: 'th', emoji: '👜' },
      { char: 'ទ', name: 'To', meaning: 'T (low)', sound: 't', emoji: '🦆' },
      { char: 'ធ', name: 'Tho', meaning: 'Th (low)', sound: 'th', emoji: '🦷' },
      { char: 'ន', name: 'No', meaning: 'N', sound: 'n', emoji: '👮' },
      { char: 'ប', name: 'Ba', meaning: 'B', sound: 'b', emoji: '🖊️' },
      { char: 'ផ', name: 'Pha', meaning: 'Ph', sound: 'ph', emoji: '🌸' },
      { char: 'ព', name: 'Po', meaning: 'P', sound: 'p', emoji: '🐐' },
      { char: 'ភ', name: 'Pho', meaning: 'Ph', sound: 'ph', emoji: '⛰️' },
      { char: 'ម', name: 'Mo', meaning: 'M', sound: 'm', emoji: '🐔' },
      { char: 'យ', name: 'Yo', meaning: 'Y', sound: 'y', emoji: '🚗' },
      { char: 'រ', name: 'Ro', meaning: 'R', sound: 'r', emoji: '🛤️' },
      { char: 'ល', name: 'Lo', meaning: 'L', sound: 'l', emoji: '🐌' },
      { char: 'វ', name: 'Vo', meaning: 'V', sound: 'v', emoji: '🐂' },
      { char: 'ស', name: 'Sa', meaning: 'S', sound: 's', emoji: '🏰' },
      { char: 'ហ', name: 'Ha', meaning: 'H', sound: 'h', emoji: '✈️' },
      { char: 'ឡ', name: 'La', meaning: 'L', sound: 'l', emoji: '🚛' },
      { char: 'អ', name: 'Qa', meaning: 'Q/Glottal', sound: 'q', emoji: '🥣' },
    ],
    quiz: [
      { question: "What is the first consonant?", options: ['ក', 'ខ', 'គ', 'ឃ'], correct: 'ក' },
      { question: "Which letter is 'Ba'?", options: ['ប', 'ផ', 'ព', 'ភ'], correct: 'ប' },
    ]
  },
  BURMESE: {
    id: 'my',
    name: 'Burmese',
    nativeName: 'မြန်မာ',
    scriptName: 'Burmese',
    desc: 'A script composed of circular shapes.',
    langCode: 'my-MM',
    fontA: 'font-serif-my',
    fontB: 'font-sans-my',
    fontHand: 'font-caveat',
    exampleText: 'မင်္ဂလာပါ',
    exampleMeaning: 'Hello (Mingalabar)',
    styleALabel: 'Serif',
    styleBLabel: 'Sans',
    chars: [
      { char: 'က', name: 'Ka', meaning: 'K', sound: 'k', emoji: '🐔' },
      { char: 'ခ', name: 'Kha', meaning: 'Kh', sound: 'kh', emoji: '🐌' },
      { char: 'ဂ', name: 'Ga', meaning: 'G', sound: 'g', emoji: '🌍' },
      { char: 'ဃ', name: 'Gha', meaning: 'Gh', sound: 'gh', emoji: '🏠' },
      { char: 'င', name: 'Nga', meaning: 'Ng', sound: 'ng', emoji: '🐟' },
      { char: 'စ', name: 'Sa', meaning: 'S', sound: 's', emoji: '📝' },
      { char: 'ဆ', name: 'Hsa', meaning: 'Hs', sound: 'hs', emoji: '🐘' },
      { char: 'ဇ', name: 'Za', meaning: 'Z', sound: 'z', emoji: '🦓' },
      { char: 'ဈ', name: 'Zha', meaning: 'Zh', sound: 'zh', emoji: '🛒' },
      { char: 'ည', name: 'Nya', meaning: 'Ny', sound: 'ny', emoji: '🌙' },
      { char: 'ဋ', name: 'Tta', meaning: 'Tt', sound: 'tt', emoji: '📦' },
      { char: 'ဌ', name: 'Httha', meaning: 'Htth', sound: 'htth', emoji: '🏛️' },
      { char: 'ဍ', name: 'Dda', meaning: 'Dd', sound: 'dd', emoji: '🦗' },
      { char: 'ဎ', name: 'Ddha', meaning: 'Ddh', sound: 'ddh', emoji: '🌊' },
      { char: 'ဏ', name: 'Nna', meaning: 'Nn', sound: 'nn', emoji: '🎡' },
      { char: 'တ', name: 'Ta', meaning: 'T', sound: 't', emoji: '🌲' },
      { char: 'ထ', name: 'Hta', meaning: 'Ht', sound: 'ht', emoji: '🚂' },
      { char: 'ဒ', name: 'Da', meaning: 'D', sound: 'd', emoji: '🚪' },
      { char: 'ဓ', name: 'Dha', meaning: 'Dh', sound: 'dh', emoji: '🔪' },
      { char: 'န', name: 'Na', meaning: 'N', sound: 'n', emoji: '👂' },
      { char: 'ပ', name: 'Pa', meaning: 'P', sound: 'p', emoji: '🦉' },
      { char: 'ဖ', name: 'Hpa', meaning: 'Hp', sound: 'hp', emoji: '🐸' },
      { char: 'ဗ', name: 'Ba', meaning: 'B', sound: 'b', emoji: '🥁' },
      { char: 'ဘ', name: 'Bha', meaning: 'Bh', sound: 'bh', emoji: '🧙' },
      { char: 'မ', name: 'Ma', meaning: 'M', sound: 'm', emoji: '🇲' },
      { char: 'ယ', name: 'Ya', meaning: 'Y', sound: 'y', emoji: '🚜' },
      { char: 'ရ', name: 'Ra', meaning: 'R', sound: 'r', emoji: '📻' },
      { char: 'လ', name: 'La', meaning: 'L', sound: 'l', emoji: '🌝' },
      { char: 'ဝ', name: 'Wa', meaning: 'W', sound: 'w', emoji: '🐻' },
      { char: 'သ', name: 'Tha', meaning: 'Th', sound: 'th', emoji: '🍎' },
      { char: 'ဟ', name: 'Ha', meaning: 'H', sound: 'h', emoji: '🦁' },
      { char: 'ဠ', name: 'La', meaning: 'L (Great)', sound: 'l', emoji: '👑' },
      { char: 'အ', name: 'A', meaning: 'A', sound: 'a', emoji: '🏠' },
    ],
    quiz: [
      { question: "Which letter is 'Ka'?", options: ['က', 'ခ', 'ဂ', 'ဃ'], correct: 'က' },
      { question: "Which letter represents 'Ma'?", options: ['မ', 'န', 'ပ', 'ဗ'], correct: 'မ' },
    ]
  },
};

// --- AUDIO ENGINE (Safari/iOS Optimized) ---
const speak = (text, langCode = 'th-TH') => {
  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel();
  if (window.speechSynthesis.paused) window.speechSynthesis.resume();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = langCode;
  utterance.rate = 0.8;

  const voices = window.speechSynthesis.getVoices();
  // Try to find exact match first, then partial match
  const specificVoice = voices.find(v => v.lang === langCode) || voices.find(v => v.lang.includes(langCode.split('-')[0]));
  
  if (specificVoice) {
    utterance.voice = specificVoice;
    window.speechSynthesis.speak(utterance);
  } else {
    // Fallback URL based on language code prefix (th, ko, ru, etc)
    const isoCode = langCode.split('-')[0];
    new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&tl=${isoCode}&client=tw-ob&q=${encodeURIComponent(text)}`).play()
      .catch(e => console.log("Audio fallback failed", e));
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
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
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
              {charData.emoji || <div className={langConfig.fontB}>{charData.char}</div>}
            </div>
            <div className="min-w-0">
              <h2 className={`text-4xl font-bold mb-1 truncate ${langConfig.fontB}`}>{charData.char}</h2>
              <p className="text-indigo-100 text-lg opacity-90 truncate">{charData.name}</p>
              <div className="flex items-center gap-2 mt-3">
                 <button 
                   onClick={() => speak(charData.char, langConfig.langCode)}
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
               </div>
             </div>

             <div className="space-y-3">
               <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Styles</h4>
               <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
                 <span className="text-xs font-medium text-slate-500 w-24">{langConfig.styleALabel}</span>
                 <span className={`text-4xl text-indigo-900 ${langConfig.fontA}`}>{charData.char}</span>
               </div>
               <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
                 <span className="text-xs font-medium text-slate-500 w-24">{langConfig.styleBLabel}</span>
                 <span className={`text-4xl text-indigo-900 ${langConfig.fontB}`}>{charData.char}</span>
               </div>
               <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
                 <span className="text-xs font-medium text-slate-500 w-24">Handwritten</span>
                 <span className={`text-4xl text-indigo-900 ${langConfig.fontHand}`}>{charData.char}</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CharacterCard = ({ charData, langConfig, onClick, isModern }) => {
  return (
    <div 
      onClick={onClick}
      className="relative bg-white p-4 rounded-xl border-2 border-slate-200 hover:border-indigo-400 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group select-none flex flex-col items-center justify-between h-32"
    >
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
         <div className="bg-indigo-100 p-1.5 rounded-full text-indigo-600">
           <Volume2 className="w-3 h-3" />
         </div>
      </div>
      <div className="text-center py-1 flex-grow flex flex-col justify-center">
        <div className={`text-5xl text-slate-800 mb-1 transition-all duration-300 ${isModern ? langConfig.fontB : langConfig.fontA}`}>
          {charData.char}
        </div>
        <div className="text-sm font-bold text-indigo-700 leading-tight">{charData.name}</div>
      </div>
      <div className="w-full mt-1 pt-2 border-t border-slate-100 text-center text-xs font-medium text-slate-500">
         /{charData.sound}/
      </div>
    </div>
  );
};

const Quiz = ({ questions, langCode, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    if (selectedOption) return;
    setSelectedOption(option);
    
    // Attempt to speak the answer if it's a character
    if(option.length < 5) speak(option, langCode);

    if (option === questions[currentIndex].correct) setScore(score + 1);

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelectedOption(null);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  if (showScore) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md mx-auto mt-10">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-10 h-10 text-yellow-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Quiz Complete!</h2>
        <p className="text-slate-600 mb-6">You scored {score} out of {questions.length}</p>
        <button onClick={onComplete} className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
          Back to Learn
        </button>
      </div>
    );
  }

  const q = questions[currentIndex];
  return (
    <div className="max-w-xl mx-auto mt-8">
       <div className="mb-4 flex justify-between text-sm font-medium text-slate-500">
        <span>Question {currentIndex + 1}/{questions.length}</span>
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

const FontComparison = ({ config, isModern, setIsModern }) => (
  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8 border border-indigo-100">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
      <div>
        <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800">
          <Type className="w-5 h-5 text-indigo-600" />
          Style Comparison
        </h3>
        <p className="text-slate-600 text-sm mt-1">
          Toggle to compare {config.styleALabel} vs {config.styleBLabel}.
        </p>
      </div>
      <div className="flex bg-white p-1 rounded-lg shadow-sm border border-slate-200 self-start">
        <button
          onClick={() => setIsModern(false)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${!isModern ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          {config.styleALabel}
        </button>
        <button
          onClick={() => setIsModern(true)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${isModern ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          {config.styleBLabel}
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
        <p className={`text-4xl md:text-5xl text-slate-800 transition-all duration-500 ${isModern ? config.fontB : config.fontA}`}>
          {config.exampleText}
        </p>
        <p className="mt-4 text-slate-500 font-medium">{config.exampleMeaning}</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-600">
            <span className="font-bold text-slate-800">{isModern ? config.styleBLabel : config.styleALabel}:</span>
            {isModern 
              ? " Often used in screens, modern signage, and informal writing. Cleaner lines."
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
  const [isModern, setIsModern] = useState(false);

  // Safari Voice Fix
  useEffect(() => {
    const initVoices = () => { window.speechSynthesis.getVoices(); };
    initVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = initVoices;
    }
  }, []);

  const handleCharClick = (charData) => {
    speak(charData.char, config.langCode);
    setSelectedChar(charData);
  };

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
          <FontComparison config={config} isModern={isModern} setIsModern={setIsModern} />
          
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              Characters
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {config.chars.map((c, idx) => (
                <CharacterCard 
                  key={idx} 
                  charData={c} 
                  langConfig={config}
                  isModern={isModern}
                  onClick={() => handleCharClick(c)}
                />
              ))}
            </div>
          </div>
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
        .font-caveat { font-family: 'Caveat', cursive; }

        /* Thai */
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600&family=Sarabun:wght@300;400;600&family=Mali:wght@400;600&display=swap');
        .font-kanit { font-family: 'Kanit', sans-serif; }
        .font-sarabun { font-family: 'Sarabun', sans-serif; }
        .font-mali { font-family: 'Mali', cursive; }
        
        /* Korean */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&family=Gowun+Batang&family=Gamja+Flower&display=swap');
        .font-notokr { font-family: 'Noto Sans KR', sans-serif; }
        .font-batang { font-family: 'Gowun Batang', serif; }
        .font-gamja { font-family: 'Gamja Flower', cursive; }

        /* Cyrillic, Greek (Latin Ext) */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Noto+Sans:wght@400;700&display=swap');
        .font-noto { font-family: 'Noto Sans', sans-serif; }
        .font-notoserif { font-family: 'Noto Serif', serif; }

        /* Japanese */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Serif+JP:wght@400;700&display=swap');
        .font-sans-jp { font-family: 'Noto Sans JP', sans-serif; }
        .font-serif-jp { font-family: 'Noto Serif JP', serif; }

        /* Hindi (Devanagari) */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&family=Noto+Serif+Devanagari:wght@400;700&display=swap');
        .font-sans-in { font-family: 'Noto Sans Devanagari', sans-serif; }
        .font-serif-in { font-family: 'Noto Serif Devanagari', serif; }

        /* Arabic */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;700&family=Noto+Naskh+Arabic:wght@400;700&display=swap');
        .font-sans-ar { font-family: 'Noto Sans Arabic', sans-serif; }
        .font-serif-ar { font-family: 'Noto Naskh Arabic', serif; }

        /* Hebrew */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@400;700&family=Noto+Serif+Hebrew:wght@400;700&display=swap');
        .font-sans-he { font-family: 'Noto Sans Hebrew', sans-serif; }
        .font-serif-he { font-family: 'Noto Serif Hebrew', serif; }

        /* Georgian */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@400;700&family=Noto+Serif+Georgian:wght@400;700&display=swap');
        .font-sans-ka { font-family: 'Noto Sans Georgian', sans-serif; }
        .font-serif-ka { font-family: 'Noto Serif Georgian', serif; }

        /* Armenian */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@400;700&family=Noto+Serif+Armenian:wght@400;700&display=swap');
        .font-sans-hy { font-family: 'Noto Sans Armenian', sans-serif; }
        .font-serif-hy { font-family: 'Noto Serif Armenian', serif; }

        /* Khmer */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer:wght@400;700&family=Noto+Serif+Khmer:wght@400;700&display=swap');
        .font-sans-km { font-family: 'Noto Sans Khmer', sans-serif; }
        .font-serif-km { font-family: 'Noto Serif Khmer', serif; }

        /* Burmese */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@400;700&family=Noto+Serif+Myanmar:wght@400;700&display=swap');
        .font-sans-my { font-family: 'Noto Sans Myanmar', sans-serif; }
        .font-serif-my { font-family: 'Noto Serif Myanmar', serif; }
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