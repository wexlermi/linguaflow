import React, { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, ChevronLeft, Award, Globe, Type, Volume2, Info, Star, X, Image as ImageIcon, Smartphone } from 'lucide-react';

// --- Expanded Data: All 44 Thai Consonants with Emoji Images ---
const thaiConsonants = [
  // Middle Class
  { char: 'ก', name: 'Gor Gai', thaiName: 'ก ไก่', meaning: 'Chicken', class: 'Mid', sound: 'k', emoji: '🐔' },
  { char: 'จ', name: 'Jor Jaan', thaiName: 'จ จาน', meaning: 'Plate', class: 'Mid', sound: 'j', emoji: '🍽️' },
  { char: 'ด', name: 'Dor Dek', thaiName: 'ด เด็ก', meaning: 'Child', class: 'Mid', sound: 'd', emoji: '🧒' },
  { char: 'ต', name: 'Tor Tao', thaiName: 'ต เต่า', meaning: 'Turtle', class: 'Mid', sound: 't', emoji: '🐢' },
  { char: 'ฎ', name: 'Dor Chada', thaiName: 'ฎ ชฎา', meaning: 'Headdress', class: 'Mid', sound: 'd', emoji: '👑' },
  { char: 'ฏ', name: 'Tor Patak', thaiName: 'ฏ ปฏัก', meaning: 'Goad/Spear', class: 'Mid', sound: 't', emoji: '🔱' },
  { char: 'บ', name: 'Bor Baimai', thaiName: 'บ ใบไม้', meaning: 'Leaf', class: 'Mid', sound: 'b', emoji: '🍃' },
  { char: 'ป', name: 'Por Pla', thaiName: 'ป ปลา', meaning: 'Fish', class: 'Mid', sound: 'p', emoji: '🐟' },
  { char: 'อ', name: 'Or Ang', thaiName: 'อ อ่าง', meaning: 'Basin', class: 'Mid', sound: '-/o', emoji: '🛁' },

  // High Class
  { char: 'ข', name: 'Khor Khai', thaiName: 'ข ไข่', meaning: 'Egg', class: 'High', sound: 'kh', emoji: '🥚' },
  { char: 'ฃ', name: 'Khor Khuad', thaiName: 'ฃ ขวด', meaning: 'Bottle (Obsolete)', class: 'High', sound: 'kh', obsolete: true, emoji: '🍾' },
  { char: 'ฉ', name: 'Chor Ching', thaiName: 'ฉ ฉิ่ง', meaning: 'Cymbals', class: 'High', sound: 'ch', emoji: '🥁' },
  { char: 'ฐ', name: 'Thor Than', thaiName: 'ฐ ฐาน', meaning: 'Pedestal', class: 'High', sound: 'th', emoji: '🏛️' },
  { char: 'ถ', name: 'Thor Thung', thaiName: 'ถ ถุง', meaning: 'Sack', class: 'High', sound: 'th', emoji: '💰' },
  { char: 'ผ', name: 'Phor Phueng', thaiName: 'ผ ผึ้ง', meaning: 'Bee', class: 'High', sound: 'ph', emoji: '🐝' },
  { char: 'ฝ', name: 'For Fa', thaiName: 'ฝ ฝา', meaning: 'Lid', class: 'High', sound: 'f', emoji: '🍲' },
  { char: 'ศ', name: 'Sor Sala', thaiName: 'ศ ศาลา', meaning: 'Pavilion', class: 'High', sound: 's', emoji: '🛖' },
  { char: 'ษ', name: 'Sor Ruesi', thaiName: 'ษ ฤๅษี', meaning: 'Hermit', class: 'High', sound: 's', emoji: '🧘' },
  { char: 'ส', name: 'Sor Suea', thaiName: 'ส เสือ', meaning: 'Tiger', class: 'High', sound: 's', emoji: '🐅' },
  { char: 'ห', name: 'Hor Hip', thaiName: 'ห หีบ', meaning: 'Chest/Box', class: 'High', sound: 'h', emoji: '🧳' },

  // Low Class
  { char: 'ค', name: 'Khor Khwai', thaiName: 'ค ควาย', meaning: 'Buffalo', class: 'Low', sound: 'kh', emoji: '🐃' },
  { char: 'ฅ', name: 'Khor Khon', thaiName: 'ฅ คน', meaning: 'Person (Obsolete)', class: 'Low', sound: 'kh', obsolete: true, emoji: '👤' },
  { char: 'ฆ', name: 'Khor Rakhang', thaiName: 'ฆ ระฆัง', meaning: 'Bell', class: 'Low', sound: 'kh', emoji: '🔔' },
  { char: 'ง', name: 'Ngor Ngu', thaiName: 'ง งู', meaning: 'Snake', class: 'Low', sound: 'ng', emoji: '🐍' },
  { char: 'ช', name: 'Chor Chang', thaiName: 'ช ช้าง', meaning: 'Elephant', class: 'Low', sound: 'ch', emoji: '🐘' },
  { char: 'ซ', name: 'Sor So', thaiName: 'ซ โซ่', meaning: 'Chain', class: 'Low', sound: 's', emoji: '🔗' },
  { char: 'ฌ', name: 'Chor Cher', thaiName: 'ฌ เฌอ', meaning: 'Tree/Bush', class: 'Low', sound: 'ch', emoji: '🌳' },
  { char: 'ญ', name: 'Yor Ying', thaiName: 'ญ หญิง', meaning: 'Woman', class: 'Low', sound: 'y', emoji: '👩' },
  { char: 'ฑ', name: 'Thor Montho', thaiName: 'ฑ มณโฑ', meaning: 'Queen/Character', class: 'Low', sound: 'th', emoji: '👸' },
  { char: 'ฒ', name: 'Thor Phuthao', thaiName: 'ฒ ผู้เฒ่า', meaning: 'Elder', class: 'Low', sound: 'th', emoji: '👴' },
  { char: 'ณ', name: 'Nor Nen', thaiName: 'ณ เณร', meaning: 'Novice Monk', class: 'Low', sound: 'n', emoji: '📿' },
  { char: 'ท', name: 'Thor Thahan', thaiName: 'ท ทหาร', meaning: 'Soldier', class: 'Low', sound: 'th', emoji: '🎖️' },
  { char: 'ธ', name: 'Thor Thong', thaiName: 'ธ ธง', meaning: 'Flag', class: 'Low', sound: 'th', emoji: '🚩' },
  { char: 'น', name: 'Nor Nu', thaiName: 'น หนู', meaning: 'Mouse', class: 'Low', sound: 'n', emoji: '🐁' },
  { char: 'พ', name: 'Phor Phan', thaiName: 'พ พาน', meaning: 'Tray', class: 'Low', sound: 'ph', emoji: '🏺' },
  { char: 'ฟ', name: 'For Fan', thaiName: 'ฟ ฟัน', meaning: 'Teeth', class: 'Low', sound: 'f', emoji: '🦷' },
  { char: 'ภ', name: 'Phor Samphao', thaiName: 'ภ สำเภา', meaning: 'Sailboat', class: 'Low', sound: 'ph', emoji: '⛵' },
  { char: 'ม', name: 'Mor Maa', thaiName: 'ม ม้า', meaning: 'Horse', class: 'Low', sound: 'm', emoji: '🐎' },
  { char: 'ย', name: 'Yor Yak', thaiName: 'ย ยักษ์', meaning: 'Giant', class: 'Low', sound: 'y', emoji: '👹' },
  { char: 'ร', name: 'Ror Ruea', thaiName: 'ร เรือ', meaning: 'Boat', class: 'Low', sound: 'r', emoji: '🚣' },
  { char: 'ล', name: 'Lor Ling', thaiName: 'ล ลิง', meaning: 'Monkey', class: 'Low', sound: 'l', emoji: '🐒' },
  { char: 'ว', name: 'Wor Waen', thaiName: 'ว แหวน', meaning: 'Ring', class: 'Low', sound: 'w', emoji: '💍' },
  { char: 'ฬ', name: 'Lor Chula', thaiName: 'ฬ จุฬา', meaning: 'Kite', class: 'Low', sound: 'l', emoji: '🪁' },
  { char: 'ฮ', name: 'Hor Nokhuk', thaiName: 'ฮ นกฮูก', meaning: 'Owl', class: 'Low', sound: 'h', emoji: '🦉' },
];

const thaiVowels = [
  { char: '−ะ', name: 'Sara A', thaiName: 'สระ อะ', type: 'Short', sound: 'a' },
  { char: '−า', name: 'Sara Aa', thaiName: 'สระ อา', type: 'Long', sound: 'aa' },
  { char: '−ิ', name: 'Sara I', thaiName: 'สระ อิ', type: 'Short', sound: 'i' },
  { char: '−ี', name: 'Sara Ii', thaiName: 'สระ อี', type: 'Long', sound: 'ii' },
  { char: '−ึ', name: 'Sara Ue', thaiName: 'สระ อึ', type: 'Short', sound: 'ue' },
  { char: '−ื', name: 'Sara Uee', thaiName: 'สระ อือ', type: 'Long', sound: 'uee' },
  { char: '−ุ', name: 'Sara U', thaiName: 'สระ อุ', type: 'Short', sound: 'u' },
  { char: '−ู', name: 'Sara Uu', thaiName: 'สระ อู', type: 'Long', sound: 'uu' },
  { char: 'เ−', name: 'Sara E', thaiName: 'สระ เอ', type: 'Short', sound: 'e' },
  { char: 'แ−', name: 'Sara Ae', thaiName: 'สระ แอ', type: 'Long', sound: 'ae' },
  { char: 'โ−', name: 'Sara O', thaiName: 'สระ โอ', type: 'Long', sound: 'o' },
  { char: 'ไ−', name: 'Sara Ai (Mai Malai)', thaiName: 'สระ ไอ ไม้มลาย', type: 'Special', sound: 'ai' },
];

const quizQuestions = [
  {
    question: "Which letter represents 'Chicken' (Gor Gai)?",
    options: ['ข', 'ก', 'ค', 'ง'],
    correct: 'ก'
  },
  {
    question: "Which of these is a HIGH class consonant?",
    options: ['ก', 'น', 'ข', 'ม'],
    correct: 'ข'
  },
  {
    question: "What sound does 'จ' (Jor Jaan) make?",
    options: ['K', 'M', 'J', 'S'],
    correct: 'J'
  },
  {
    question: "Identify the vowel for the long 'aa' sound.",
    options: ['−ะ', '−า', 'เ−', 'โ−'],
    correct: '−า'
  },
  {
    question: "Which letter represents 'Snake'?",
    options: ['ง', 'จ', 'ฉ', 'ช'],
    correct: 'ง'
  },
  {
    question: "What is the meaning of 'Chang' (ช)?",
    options: ['Plate', 'Elephant', 'Tree', 'Chain'],
    correct: 'Elephant'
  }
];

// --- Audio Helper ---
// We define this outside because it doesn't rely on React state
const speak = (text) => {
  if (!window.speechSynthesis) {
    console.error("Speech Synthesis not supported");
    // Absolute Last Resort: Audio Element
    new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&tl=th&client=tw-ob&q=${encodeURIComponent(text)}`).play();
    return;
  }

  // 1. Cancel pending speech (Crucial for rapid clicks)
  window.speechSynthesis.cancel();
  
  // 2. Resume if paused (Safari/iOS bug fix)
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }

  // 3. Prepare Utterance
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'th-TH';
  utterance.rate = 0.8;

  // 4. Voice Selection (The Safari Fix)
  const voices = window.speechSynthesis.getVoices();
  // Try to find a Thai voice.
  // iOS typically has "Kanya" or "Narisa". Android/Desktop Chrome has Google Thai.
  const thaiVoice = voices.find(v => v.lang === 'th-TH' || v.lang.includes('th'));
  
  if (thaiVoice) {
    utterance.voice = thaiVoice;
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("No native Thai voice found, trying default or fallback");
    // If no native voice, try Google Fallback
    // Note: This 'new Audio' often fails on iOS Silent mode, but it's our only backup if native voice is missing
    const audio = new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&tl=th&client=tw-ob&q=${encodeURIComponent(text)}`);
    audio.play().catch(e => console.log("Fallback audio failed", e));
  }
};

// --- Sub-Components ---

const Header = ({ goBack, currentLang }) => (
  <header className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {currentLang && (
          <button 
            onClick={goBack}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors mr-2"
          >
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
            {currentLang}
          </span>
        </div>
      )}
    </div>
  </header>
);

const CharacterModal = ({ charData, onClose }) => {
  if (!charData) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-6xl shadow-inner border border-white/30 shrink-0">
              {charData.emoji || <ImageIcon className="w-10 h-10 text-white/50" />}
            </div>
            <div className="min-w-0">
              <h2 className="text-3xl font-bold mb-1 truncate">{charData.thaiName}</h2>
              <p className="text-indigo-100 text-lg opacity-90 truncate">{charData.name}</p>
              <div className="flex items-center gap-2 mt-3">
                 <button 
                   onClick={() => speak(charData.thaiName || charData.name)}
                   className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm hover:bg-indigo-50 transition-colors"
                 >
                   <Volume2 className="w-4 h-4" /> Replay
                 </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 overflow-y-auto">
          {/* iOS Warning */}
          <div className="md:hidden flex items-start gap-2 text-xs text-amber-600 bg-amber-50 p-2 rounded-lg mb-4">
             <Smartphone className="w-4 h-4 shrink-0 mt-0.5" />
             <p>If sound fails: Check silent switch or tap Replay.</p>
          </div>

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

             {/* Script Variations */}
             <div className="space-y-3">
               <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Script Styles</h4>
               
               <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
                 <span className="text-xs font-medium text-slate-500 w-24">Traditional</span>
                 <span className="text-4xl font-sarabun text-indigo-900">{charData.char}</span>
               </div>
               
               <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
                 <span className="text-xs font-medium text-slate-500 w-24">Modern / Loopless</span>
                 <span className="text-4xl font-kanit text-indigo-900">{charData.char}</span>
               </div>

               <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
                 <span className="text-xs font-medium text-slate-500 w-24">Handwritten</span>
                 <span className="text-4xl font-mali text-indigo-900">{charData.char}</span>
               </div>
             </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl flex gap-3 items-start text-sm text-blue-700">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <p>
              In modern signage, the loops (circles) are often removed. Compare the top two styles carefully!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CharacterCard = ({ char, name, thaiName, meaning, sound, type, obsolete, onClick, isModern }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative bg-white p-4 rounded-xl border-2 transition-all cursor-pointer group select-none flex flex-col items-center justify-between h-full
        ${obsolete ? 'border-slate-100 bg-slate-50 opacity-80' : 'border-slate-200 hover:border-indigo-400 hover:shadow-lg hover:-translate-y-1'}
      `}
    >
      {obsolete && (
        <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-slate-200 text-slate-500 text-[10px] uppercase font-bold rounded">
          Obsolete
        </div>
      )}
      
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
         <div className="bg-indigo-100 p-1.5 rounded-full text-indigo-600">
           <Volume2 className="w-3 h-3" />
         </div>
      </div>

      <div className="text-center py-2 flex-grow flex flex-col justify-center">
        <div className={`text-6xl ${isModern ? 'font-kanit' : 'font-sarabun'} text-slate-800 mb-2 transition-all duration-300`}>{char}</div>
        <div className="text-lg font-bold text-indigo-700 leading-tight">{name}</div>
        <div className="text-sm text-slate-500 italic mt-1 line-clamp-1">"{meaning}"</div>
      </div>
      
      <div className="w-full mt-2 pt-3 border-t border-slate-100 flex justify-between text-xs font-medium text-slate-500">
        <span className="flex items-center gap-1">
           /{sound}/
        </span>
        {type && (
          <span className={`px-2 py-0.5 rounded ${
            type === 'High' ? 'bg-red-50 text-red-600' :
            type === 'Mid' ? 'bg-green-50 text-green-600' :
            type === 'Low' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100'
          }`}>
            {type}
          </span>
        )}
      </div>
    </div>
  );
};

const Quiz = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (option) => {
    if (selectedOption) return; // Prevent double clicking

    setSelectedOption(option);
    const correct = option === quizQuestions[currentIndex].correct;
    setIsCorrect(correct);
    
    // Play sound of the selected option
    speak(option);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentIndex + 1;
      if (nextQuestion < quizQuestions.length) {
        setCurrentIndex(nextQuestion);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  if (showScore) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md mx-auto mt-10">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-10 h-10 text-yellow-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Quiz Complete!</h2>
        <p className="text-slate-600 mb-6">You scored {score} out of {quizQuestions.length}</p>
        <div className="flex gap-3 justify-center">
          <button 
            onClick={resetQuiz}
            className="px-6 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors"
          >
            Try Again
          </button>
          <button 
            onClick={onComplete}
            className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Learn
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-8">
      <div className="mb-4 flex justify-between text-sm font-medium text-slate-500">
        <span>Question {currentIndex + 1}/{quizQuestions.length}</span>
        <span>Score: {score}</span>
      </div>
      
      <div className="w-full bg-slate-200 rounded-full h-2 mb-8">
        <div 
          className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
        ></div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6">
          {quizQuestions[currentIndex].question}
        </h3>

        <div className="grid grid-cols-1 gap-3">
          {quizQuestions[currentIndex].options.map((option, index) => {
            let buttonStyle = "bg-white border-2 border-slate-200 hover:border-indigo-300 text-slate-700";
            
            if (selectedOption) {
              if (option === quizQuestions[currentIndex].correct) {
                buttonStyle = "bg-green-50 border-2 border-green-500 text-green-700";
              } else if (option === selectedOption) {
                buttonStyle = "bg-red-50 border-2 border-red-500 text-red-700";
              } else {
                buttonStyle = "bg-slate-50 border-2 border-slate-100 text-slate-400 opacity-50";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={!!selectedOption}
                className={`w-full p-4 rounded-xl text-left font-medium text-lg transition-all duration-200 ${buttonStyle}`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ThaiFontComparison = ({ isModern, setIsModern }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8 border border-indigo-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800">
            <Type className="w-5 h-5 text-indigo-600" />
            The "Modern Font" Challenge
          </h3>
          <p className="text-slate-600 text-sm mt-1">
            Toggle to see how the "heads" (loops) disappear in modern fonts!
          </p>
        </div>
        <div className="flex bg-white p-1 rounded-lg shadow-sm border border-slate-200 self-start">
          <button
            onClick={() => setIsModern(false)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${!isModern ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            Traditional
          </button>
          <button
            onClick={() => setIsModern(true)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${isModern ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            Modern
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm text-center relative group">
          <button 
            onClick={() => speak('สวัสดีครับ')}
            className="absolute top-2 right-2 p-2 rounded-full bg-slate-50 text-indigo-500 hover:bg-indigo-100 transition-colors"
            title="Listen"
          >
             <Volume2 className="w-4 h-4" />
          </button>
          <p className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-4">Sample Text</p>
          <p className={`text-4xl md:text-5xl text-slate-800 transition-all duration-500 ${isModern ? 'font-kanit' : 'font-sarabun'}`}>
            สวัสดีครับ
          </p>
          <p className="mt-4 text-slate-500 font-medium">"Sawatdee Khrap" (Hello)</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-600">
              <span className="font-bold text-slate-800">{isModern ? "Modern / Loopless:" : "Traditional / Looped:"}</span>
              {isModern 
                ? " Common in advertising and web. The circles (heads) are removed, looking like English sans-serif."
                : " The standard educational style. The loops (heads) are critical for distinguishing letters (e.g., ข vs ฃ)."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThaiModule = () => {
  const [activeTab, setActiveTab] = useState('lessons');
  const [filter, setFilter] = useState('All');
  const [selectedChar, setSelectedChar] = useState(null);
  const [isModern, setIsModern] = useState(false); // Lifted state

  // SAFARI FIX: Safari voices load asynchronously. 
  // We need to force a re-render once voices are ready.
  const [voiceReady, setVoiceReady] = useState(false);

  useEffect(() => {
    // This handler fires when voices are loaded (crucial for Safari)
    const handleVoicesChanged = () => {
      setVoiceReady(true);
    };

    if (window.speechSynthesis) {
       window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
       // Trigger immediate check in case they are already loaded
       if(window.speechSynthesis.getVoices().length > 0) {
          setVoiceReady(true);
       }
    }

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      }
    };
  }, []);

  const filteredConsonants = filter === 'All' 
    ? thaiConsonants 
    : thaiConsonants.filter(c => c.class === filter);

  const handleCharClick = (charData) => {
    // 1. Play Audio Immediately on User Interaction (Tap)
    speak(charData.thaiName || charData.name);
    // 2. Then Open Modal
    setSelectedChar(charData);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 relative">
      {/* Modal Layer */}
      {selectedChar && (
        <CharacterModal 
          charData={selectedChar} 
          onClose={() => setSelectedChar(null)} 
        />
      )}

      {/* Module Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">Thai Language Basics</h2>
        <p className="text-slate-600 max-w-xl mx-auto">
          Tap any card to see font variations, hear pronunciation, and learn the classic associations.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 inline-flex">
          <button
            onClick={() => setActiveTab('lessons')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'lessons' 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Lessons
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'quiz' 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Quiz
          </button>
        </div>
      </div>

      {/* Content Area */}
      {activeTab === 'lessons' ? (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          <ThaiFontComparison isModern={isModern} setIsModern={setIsModern} />

          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                Consonants (44)
              </h3>
              
              <div className="flex bg-white p-1 rounded-lg border border-slate-200 text-xs font-bold">
                 {['All', 'Mid', 'High', 'Low'].map(cls => (
                   <button
                    key={cls}
                    onClick={() => setFilter(cls)}
                    className={`px-3 py-1.5 rounded-md transition-all ${filter === cls ? 'bg-indigo-100 text-indigo-700' : 'text-slate-500 hover:bg-slate-50'}`}
                   >
                     {cls}
                   </button>
                 ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {filteredConsonants.map((c, idx) => (
                <CharacterCard 
                  key={idx} 
                  {...c} 
                  type={c.class} 
                  isModern={isModern}
                  onClick={() => handleCharClick(c)}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              Basic Vowels
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {thaiVowels.map((v, idx) => (
                <CharacterCard 
                  key={idx} 
                  {...v} 
                  isModern={isModern}
                  onClick={() => handleCharClick(v)}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <Quiz onComplete={() => setActiveTab('lessons')} />
        </div>
      )}
    </div>
  );
};

// ... existing App component ...
const LanguageCard = ({ lang, title, desc, onClick, available }) => (
  <div 
    onClick={available ? onClick : null}
    className={`group relative bg-white rounded-2xl p-6 shadow-md border-2 border-transparent transition-all duration-300 ${
      available 
        ? 'hover:border-indigo-500 hover:shadow-xl cursor-pointer hover:-translate-y-1' 
        : 'opacity-70 cursor-not-allowed grayscale'
    }`}
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${available ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-400'}`}>
        <span className="font-bold text-2xl">{lang}</span>
      </div>
      {!available && <span className="text-xs font-bold bg-slate-200 text-slate-500 px-2 py-1 rounded">SOON</span>}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    
    {available && (
      <div className="mt-6 flex items-center text-indigo-600 font-medium text-sm">
        Start Learning <ChevronLeft className="w-4 h-4 rotate-180 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    )}
  </div>
);

const App = () => {
  const [view, setView] = useState('home'); // home, thai, german, vietnamese

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Injecting Fonts: Kanit (Modern), Sarabun (Traditional), and Mali (Handwritten) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600&family=Sarabun:wght@300;400;600&family=Mali:wght@400;600&display=swap');
        .font-kanit { font-family: 'Kanit', sans-serif; }
        .font-sarabun { font-family: 'Sarabun', sans-serif; }
        .font-mali { font-family: 'Mali', cursive; }
      `}</style>

      <Header 
        goBack={() => setView('home')} 
        currentLang={view === 'thai' ? 'Thai' : view === 'german' ? 'German' : view === 'vietnamese' ? 'Vietnamese' : null} 
      />

      <main>
        {view === 'home' && (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Master a new <span className="text-indigo-600">script.</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                lang.bar focuses on the visual and auditory aspects of language. Learn fonts, alphabets, and sounds before diving into grammar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <LanguageCard 
                lang="ก"
                title="Thai" 
                desc="Explore traditional loops, modern lines, and the tonal system."
                onClick={() => setView('thai')}
                available={true}
              />
              <LanguageCard 
                lang="Ä"
                title="German" 
                desc="Master umlauts, sharp S (ß), and compound nouns."
                onClick={() => setView('german')}
                available={false}
              />
              <LanguageCard 
                lang="Â"
                title="Vietnamese" 
                desc="Navigate the six tones and the unique diacritics."
                onClick={() => setView('vietnamese')}
                available={false}
              />
            </div>
          </div>
        )}

        {view === 'thai' && <ThaiModule />}
        
        {(view === 'german' || view === 'vietnamese') && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-slate-400">Coming Soon</h2>
          </div>
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