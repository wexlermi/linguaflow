import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, GraduationCap, Star, Languages, Layers } from 'lucide-react';
import { speak } from '../utils/audio';
import CharacterModal from './CharacterModal';
import CharacterCard from './CharacterCard';
import Quiz from './Quiz';
import FontComparison from './FontComparison';
import VocabularyList from './VocabularyList';
import FlashcardDeck from './FlashcardDeck';

const LanguageModule = ({ config }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { langId } = useParams();

    const [selectedChar, setSelectedChar] = useState(null);
    const [fontMode, setFontMode] = useState('A'); // 'A' | 'B' | 'Hand' | 'Old'
    const [sortBy, setSortBy] = useState('alphabet'); // 'alphabet' | 'class'

    // Derive state from URL
    const pathSegments = location.pathname.split('/').filter(Boolean);
    // pathSegments[0] is langId
    // pathSegments[1] is tab
    // pathSegments[2] is deckId (if flashcards)

    const activeTab = pathSegments[1] || 'lessons';
    const activeDeckId = activeTab === 'flashcards' ? pathSegments[2] : null;
    const activeDeck = activeDeckId && config.flashcards ? config.flashcards.find(d => d.id === activeDeckId) : null;

    // Redirect to lessons if no tab specified
    useEffect(() => {
        if (pathSegments.length === 1) {
            navigate(`/${langId}/lessons`, { replace: true });
        }
    }, [langId, pathSegments.length, navigate]);

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
            textToSpeak = charData.ttsName || charData.thaiName || charData.name;
        } else if (config.id === 'vietnamese') {
            // For Vietnamese, we might want to speak the name or example word if available, 
            // but for now char is fine.
            textToSpeak = (charData.type === 'Tone' || charData.type === 'Grammar') ? charData.char : charData.char;
        }

        speak(textToSpeak, config.langCode, charData.audioSrc);
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
                <CharacterModal charData={selectedChar} langConfig={config} fontMode={fontMode} onClose={() => setSelectedChar(null)} />
            )}

            {activeDeck && (
                <FlashcardDeck
                    deck={activeDeck}
                    langConfig={config}
                    onClose={() => navigate(`/${langId}/flashcards`)}
                />
            )}

            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-800 mb-3">{config.name} Basics</h2>
                <p className="text-slate-600 max-w-xl mx-auto">
                    Tap any card to hear pronunciation and see details. {config.desc}
                </p>
            </div>

            <div className="flex justify-center mb-8">
                <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 inline-flex flex-wrap justify-center gap-1">
                    <button
                        onClick={() => navigate(`/${langId}/lessons`)}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'lessons' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
                            }`}
                    >
                        <BookOpen className="w-4 h-4" /> Lessons
                    </button>
                    {config.vocabulary && (
                        <button
                            onClick={() => navigate(`/${langId}/vocabulary`)}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'vocabulary' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
                                }`}
                        >
                            <Languages className="w-4 h-4" /> Vocabulary
                        </button>
                    )}
                    {config.flashcards && (
                        <button
                            onClick={() => navigate(`/${langId}/flashcards`)}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'flashcards' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
                                }`}
                        >
                            <Layers className="w-4 h-4" /> Flashcards
                        </button>
                    )}
                    <button
                        onClick={() => navigate(`/${langId}/quiz`)}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'quiz' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
                            }`}
                    >
                        <GraduationCap className="w-4 h-4" /> Quiz
                    </button>
                </div>
            </div>

            {activeTab === 'lessons' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <FontComparison config={config} fontMode={fontMode} setFontMode={setFontMode} />

                    {config.id === 'thai' && (
                        <div className="flex justify-center mb-8 gap-4">
                            <div className="bg-slate-100 p-1.5 rounded-lg inline-flex items-center">
                                <span className="text-sm font-bold text-slate-500 px-4 uppercase tracking-wider">Sort Consonants:</span>
                                <button
                                    onClick={() => setSortBy('alphabet')}
                                    className={`px-5 py-2 rounded-md text-base font-bold transition-all ${sortBy === 'alphabet' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    Alphabet
                                </button>
                                <button
                                    onClick={() => setSortBy('class')}
                                    className={`px-5 py-2 rounded-md text-base font-bold transition-all ${sortBy === 'class' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    Class
                                </button>
                            </div>
                        </div>
                    )}

                    {Object.entries(groupedChars).map(([type, chars]) => {
                        let displayChars = chars;
                        if (config.id === 'thai' && type === 'Consonant' && sortBy === 'class') {
                            displayChars = [...chars].sort((a, b) => {
                                const order = { 'Mid': 1, 'High': 2, 'Low': 3 };
                                const orderA = order[a.class] || 99;
                                const orderB = order[b.class] || 99;
                                if (orderA !== orderB) return orderA - orderB;
                                return 0; // Keep original alphabetical order within class
                            });
                        }
                        if (config.id === 'thai' && type === 'Vowel' && sortBy === 'length') {
                            displayChars = [...chars].sort((a, b) => {
                                // Sort by Short/Long first
                                const isShortA = a.meaning?.startsWith('Short') ? 0 : 1;
                                const isShortB = b.meaning?.startsWith('Short') ? 0 : 1;
                                if (isShortA !== isShortB) return isShortA - isShortB;
                                return 0; // Keep original order within each group
                            });
                        }

                        return (
                            <div key={type} className="mb-12">
                                {config.id === 'thai' && type === 'Vowel' && (
                                    <div className="flex justify-center mb-6">
                                        <div className="bg-slate-100 p-1.5 rounded-lg inline-flex items-center">
                                            <span className="text-sm font-bold text-slate-500 px-4 uppercase tracking-wider">Sort Vowels:</span>
                                            <button
                                                onClick={() => setSortBy('alphabet')}
                                                className={`px-5 py-2 rounded-md text-base font-bold transition-all ${sortBy === 'alphabet' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                            >
                                                Alphabet
                                            </button>
                                            <button
                                                onClick={() => setSortBy('length')}
                                                className={`px-5 py-2 rounded-md text-base font-bold transition-all ${sortBy === 'length' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                            >
                                                Length
                                            </button>
                                        </div>
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                    {type === 'General' ? 'Characters' : type + 's'}
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {displayChars.map((c, idx) => (
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
                        );
                    })}
                </div>
            )}

            {activeTab === 'vocabulary' && (
                <VocabularyList vocabulary={config.vocabulary} langCode={config.langCode} />
            )}

            {activeTab === 'flashcards' && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {config.flashcards.map((deck, idx) => (
                            <div
                                key={idx}
                                onClick={() => navigate(`/${langId}/flashcards/${deck.id}`)}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <Layers className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                                        {deck.cards.length} Cards
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{deck.title}</h3>
                                <p className="text-slate-600 text-sm">{deck.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'quiz' && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <Quiz questions={config.quiz} langCode={config.langCode} onComplete={() => navigate(`/${langId}/lessons`)} />
                </div>
            )}
        </div>
    );
};

export default LanguageModule;
