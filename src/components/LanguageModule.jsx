import React, { useState, useEffect, useMemo } from 'react';
import { BookOpen, GraduationCap, Star } from 'lucide-react';
import { speak } from '../utils/audio';
import CharacterModal from './CharacterModal';
import CharacterCard from './CharacterCard';
import Quiz from './Quiz';
import FontComparison from './FontComparison';

const LanguageModule = ({ config, onBack }) => {
    const [activeTab, setActiveTab] = useState('lessons');
    const [selectedChar, setSelectedChar] = useState(null);
    const [fontMode, setFontMode] = useState('A'); // 'A' | 'B' | 'Hand' | 'Old'

    useEffect(() => {
        const unlockAudio = () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.resume();
            }
            document.removeEventListener('click', unlockAudio);
            document.removeEventListener('touchstart', unlockAudio);
        };

        document.addEventListener('click', unlockAudio);
        document.addEventListener('touchstart', unlockAudio);

        return () => {
            document.removeEventListener('click', unlockAudio);
            document.removeEventListener('touchstart', unlockAudio);
        };
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
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'lessons' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
                            }`}
                    >
                        <BookOpen className="w-4 h-4" /> Lessons
                    </button>
                    <button
                        onClick={() => setActiveTab('quiz')}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'quiz' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
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

export default LanguageModule;
