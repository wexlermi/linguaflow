import React, { useState, useEffect } from 'react';
import { Volume2, ChevronLeft, ChevronRight, RotateCw, X, Shuffle, List } from 'lucide-react';
import { speak } from '../utils/audio';

const FlashcardDeck = ({ deck, onClose, langConfig }) => {
    const [isRandomized, setIsRandomized] = useState(true);
    const [cards, setCards] = useState(() => [...deck.cards].sort(() => Math.random() - 0.5));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    // Reset cards when deck changes
    useEffect(() => {
        setIsRandomized(true);
        setCards([...deck.cards].sort(() => Math.random() - 0.5));
        setCurrentIndex(0);
        setIsFlipped(false);
    }, [deck]);

    const currentCard = cards[currentIndex];

    const handleFlip = () => {
        if (!isFlipped) {
            // Play audio on reveal
            playAudio();
        }
        setIsFlipped(!isFlipped);
    };

    const toggleShuffle = (e) => {
        // Remove focus from the button so spacebar doesn't trigger it again
        if (e && e.currentTarget) e.currentTarget.blur();

        if (isRandomized) {
            // Switch to sorted
            setCards(deck.cards);
            setIsRandomized(false);
        } else {
            // Switch to randomized
            const shuffled = [...deck.cards].sort(() => Math.random() - 0.5);
            setCards(shuffled);
            setIsRandomized(true);
        }
        setCurrentIndex(0);
        setIsFlipped(false);
    };

    const playAudio = (e) => {
        if (e) e.stopPropagation();

        let textToSpeak = currentCard.char;
        if (langConfig.id === 'thai') {
            textToSpeak = currentCard.ttsName || currentCard.thaiName || currentCard.name;
        }

        speak(textToSpeak, langConfig.langCode, currentCard.audioSrc);
    };

    const handleNext = (e) => {
        if (e) e.stopPropagation();
        setIsFlipped(false);
        setTimeout(() => {
            if (currentIndex < cards.length - 1) {
                setCurrentIndex(prev => prev + 1);
            } else {
                // Loop back to start
                setCurrentIndex(0);
            }
        }, 150);
    };

    const handlePrev = (e) => {
        if (e) e.stopPropagation();
        setIsFlipped(false);
        setTimeout(() => {
            if (currentIndex > 0) {
                setCurrentIndex(prev => prev - 1);
            } else {
                // Loop to end
                setCurrentIndex(cards.length - 1);
            }
        }, 150);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === ' ' || e.key === 'Enter') handleFlip();
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, isFlipped, cards]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="w-full max-w-md relative">
                {/* Header */}
                <div className="absolute -top-12 left-0 right-0 flex justify-between items-center text-white">
                    <div className="text-lg font-bold">{deck.title}</div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleShuffle}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            title={isRandomized ? "Un-shuffle (Sort)" : "Randomize Order"}
                        >
                            {isRandomized ? <List className="w-5 h-5" /> : <Shuffle className="w-5 h-5" />}
                        </button>
                        <span className="text-slate-300 font-mono">
                            {currentIndex + 1} / {cards.length}
                        </span>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Card Container */}
                <div
                    className="aspect-[3/4] perspective-1000 cursor-pointer group"
                    onClick={handleFlip}
                >
                    <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

                        {/* Front Side (Modern/Old Font) */}
                        <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 border-4 border-white">
                            <div className="absolute top-6 right-6 text-slate-300">
                                <RotateCw className="w-6 h-6" />
                            </div>

                            <div className="flex-1 flex items-center justify-center">
                                {/* Use fontOld if this is the Old Fashioned deck, otherwise fontB (Modern) */}
                                <div className={`text-9xl text-slate-800 ${deck.id === 'old-thai' ? langConfig.fontOld : langConfig.fontB || ''}`}>
                                    {currentCard.char}
                                </div>
                            </div>

                            <div className="text-slate-400 text-sm font-medium uppercase tracking-widest mt-4">
                                Tap to Flip
                            </div>
                        </div>

                        {/* Back Side (Traditional Font + Details) */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-indigo-600 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 text-white border-4 border-indigo-500">
                            <button
                                onClick={playAudio}
                                className="absolute top-6 right-6 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                            >
                                <Volume2 className="w-6 h-6" />
                            </button>

                            <div className="flex-1 flex flex-col items-center justify-center gap-6">
                                <div className={`text-8xl ${langConfig.fontA || ''}`}>
                                    {currentCard.char}
                                </div>

                                <div className="text-center space-y-2">
                                    <h3 className="text-3xl font-bold">{currentCard.name}</h3>
                                    {currentCard.thaiName && (
                                        <p className="text-xl opacity-90">{currentCard.thaiName}</p>
                                    )}
                                    <p className="text-indigo-200 text-lg">{currentCard.meaning}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex justify-between items-center mt-8 px-4">
                    <button
                        onClick={handlePrev}
                        className="p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <div className="text-slate-400 text-sm">
                        Use arrow keys to navigate
                    </div>

                    <button
                        onClick={handleNext}
                        className="p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>
            </div>

            <style jsx>{`
                .perspective-1000 { perspective: 1000px; }
                .transform-style-3d { transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; }
                .rotate-y-180 { transform: rotateY(180deg); }
            `}</style>
        </div>
    );
};

export default FlashcardDeck;
