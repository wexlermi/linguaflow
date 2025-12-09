import React, { useState, useEffect } from 'react';
import { Volume2, ChevronLeft, ChevronRight, RotateCw, X, Shuffle, List, ArrowLeftRight } from 'lucide-react';
import { speak } from '../utils/audio';

const FlashcardDeck = ({ deck, onClose, langConfig }) => {
    const isVocab = deck.id.startsWith('vocab-');
    const [isRandomized, setIsRandomized] = useState(true);
    const [cards, setCards] = useState(() => [...deck.cards].sort(() => Math.random() - 0.5));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [direction, setDirection] = useState(isVocab ? 'en-th' : 'th-en'); // 'en-th' (Eng -> Thai) or 'th-en' (Thai -> Eng)
    const [hasPlayed, setHasPlayed] = useState(false);
    const [enableTransition, setEnableTransition] = useState(true);
    const [isAudioEnabled, setIsAudioEnabled] = useState(true);

    // Reset cards when deck changes
    useEffect(() => {
        setIsRandomized(true);
        setCards([...deck.cards].sort(() => Math.random() - 0.5));
        setCurrentIndex(0);
        setIsFlipped(false);
        setDirection(isVocab ? 'en-th' : 'th-en');
        setHasPlayed(false);
        setEnableTransition(true);
    }, [deck, isVocab]);

    // Reset hasPlayed when card or direction changes
    useEffect(() => {
        setHasPlayed(false);
    }, [currentIndex, direction]);

    const currentCard = cards[currentIndex];

    // Play audio automatically if direction is Thai -> English (Thai is on front)
    // Play audio automatically if direction is Thai -> English (Thai is on front)
    // REMOVED: User wants audio only on the back side (purple side)
    /*
    useEffect(() => {
        if (isAudioEnabled && direction === 'th-en' && !isFlipped && !hasPlayed) {
            // Small delay to ensure card is visible
            const timer = setTimeout(() => {
                playAudio();
                setHasPlayed(true);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, direction, isFlipped, hasPlayed, isAudioEnabled]);
    */

    const handleFlip = () => {
        if (!isFlipped) {
            // Play audio on reveal (when flipping to back), regardless of direction
            if (isAudioEnabled) {
                playAudio();
            }
        }
        setIsFlipped(!isFlipped);
    };

    const toggleShuffle = (e) => {
        if (e && e.currentTarget) e.currentTarget.blur();

        if (isRandomized) {
            setCards(deck.cards);
            setIsRandomized(false);
        } else {
            const shuffled = [...deck.cards].sort(() => Math.random() - 0.5);
            setCards(shuffled);
            setIsRandomized(true);
        }
        setCurrentIndex(0);
        setIsFlipped(false);
    };

    const toggleDirection = (e) => {
        if (e && e.currentTarget) e.currentTarget.blur();
        setDirection(prev => prev === 'en-th' ? 'th-en' : 'en-th');
        setIsFlipped(false);
    };

    const toggleAudio = (e) => {
        if (e && e.currentTarget) e.currentTarget.blur();
        setIsAudioEnabled(!isAudioEnabled);
    };

    const playAudio = (e) => {
        if (e) e.stopPropagation();
        if (!isAudioEnabled && e) {
            // If manually clicked but disabled, maybe we should still play? 
            // User said "turn the audio off". Let's assume global mute.
            // But usually manual click overrides. 
            // If I hide the button, this check is redundant for click, but needed for auto-play.
            return;
        }

        let textToSpeak = currentCard.char;
        if (langConfig.id === 'thai') {
            textToSpeak = currentCard.ttsName || currentCard.thaiName || currentCard.name;
        }

        speak(textToSpeak, langConfig.langCode, currentCard.audioSrc);
    };

    const handleNext = (e) => {
        if (e) e.stopPropagation();
        setEnableTransition(false);
        setIsFlipped(false);

        if (currentIndex < cards.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(0);
        }

        // Re-enable transition after a short delay to allow the DOM to update without animation
        setTimeout(() => setEnableTransition(true), 50);
    };

    const handlePrev = (e) => {
        if (e) e.stopPropagation();
        setEnableTransition(false);
        setIsFlipped(false);

        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            setCurrentIndex(cards.length - 1);
        }

        // Re-enable transition after a short delay
        setTimeout(() => setEnableTransition(true), 50);
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

    // Render Content Helper
    const renderEnglishSide = (isFront) => (
        <div className="flex flex-col items-center justify-center gap-8 relative w-full h-full">
            <div className={`text-8xl ${!isFlipped ? 'animate-bounce-slow' : ''}`}>
                {currentCard.thaiName} {/* Emoji */}
            </div>
            <div className={`text-3xl font-bold ${isFront ? 'text-slate-800' : 'text-indigo-100'} text-center px-4`}>
                {currentCard.meaning}
            </div>
        </div>
    );

    const renderThaiSide = (isFront) => (
        <div className="flex flex-col items-center justify-center gap-6 relative w-full h-full">
            {/* Audio Button - Only show if audio is enabled */}
            {isAudioEnabled && (
                <button
                    onClick={playAudio}
                    className={`absolute top-0 right-0 p-3 rounded-full transition-colors ${isFront ? 'bg-slate-100 hover:bg-slate-200 text-slate-600' : 'bg-white/20 hover:bg-white/30 text-white'}`}
                >
                    <Volume2 className="w-6 h-6" />
                </button>
            )}

            {/* Traditional Font */}
            <div className={`text-8xl ${langConfig.fontA || ''} ${isFront ? 'text-slate-800' : 'text-white'}`}>
                {currentCard.char}
            </div>
            {/* Modern Font */}
            <div className={`text-6xl ${langConfig.fontB || ''} ${isFront ? 'text-slate-500' : 'text-indigo-200'}`}>
                {currentCard.char}
            </div>
            <div className="text-center space-y-2">
                <h3 className="text-3xl font-bold">{currentCard.name}</h3>
            </div>
        </div>
    );

    const renderFront = () => {
        if (isVocab) {
            return direction === 'en-th' ? renderEnglishSide(true) : renderThaiSide(true);
        } else {
            // Script Front
            return (
                <div className="flex flex-col items-center justify-center w-full h-full relative">
                    {/* Script Front doesn't usually have audio button, but let's stick to user request "vocab flashcard deck" */}
                    <div className={`text-9xl text-slate-800 ${deck.id === 'old-thai' ? langConfig.fontOld : langConfig.fontB || ''}`}>
                        {currentCard.char}
                    </div>
                </div>
            );
        }
    };

    const renderBack = () => {
        if (isVocab) {
            return direction === 'en-th' ? renderThaiSide(false) : renderEnglishSide(false);
        } else {
            // Script Back
            return (
                <div className="flex flex-col items-center justify-center gap-6 w-full h-full relative">
                    {/* Script Back gets audio button as it's the Thai side essentially (or details side) */}
                    {isAudioEnabled && (
                        <button
                            onClick={playAudio}
                            className="absolute top-0 right-0 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors text-white"
                        >
                            <Volume2 className="w-6 h-6" />
                        </button>
                    )}

                    <div className={`text-8xl ${langConfig.fontA || ''}`}>
                        {currentCard.char}
                    </div>

                    <div className="text-center space-y-2">
                        <h3 className="text-3xl font-bold">{currentCard.name}</h3>
                        {currentCard.thaiName && (
                            <p className="text-xl opacity-90">
                                {currentCard.thaiName}
                            </p>
                        )}
                        <p className="text-indigo-200 text-lg">{currentCard.meaning}</p>
                    </div>
                </div>
            );
        }
    };

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
                    <div className="text-lg font-bold truncate max-w-[120px] sm:max-w-none">{deck.title}</div>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <button
                            onClick={toggleAudio}
                            className={`p-2 rounded-full transition-colors ${isAudioEnabled ? 'hover:bg-white/10 text-white' : 'bg-white/20 text-slate-400'}`}
                            title={isAudioEnabled ? "Mute Audio" : "Enable Audio"}
                        >
                            {/* Using Volume2 for both, maybe strike-through for mute? Lucide has VolumeX */}
                            {isAudioEnabled ? <Volume2 className="w-5 h-5" /> : <div className="relative"><Volume2 className="w-5 h-5 opacity-50" /><div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-0.5 bg-white rotate-45"></div></div></div>}
                        </button>

                        {isVocab && (
                            <button
                                onClick={toggleDirection}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-1"
                                title="Toggle Direction"
                            >
                                <ArrowLeftRight className="w-5 h-5" />
                                <span className="text-xs font-bold uppercase w-12 text-center">
                                    {direction === 'en-th' ? 'En→Th' : 'Th→En'}
                                </span>
                            </button>
                        )}
                        <button
                            onClick={toggleShuffle}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            title={isRandomized ? "Un-shuffle (Sort)" : "Randomize Order"}
                        >
                            {isRandomized ? <List className="w-5 h-5" /> : <Shuffle className="w-5 h-5" />}
                        </button>
                        <span className="text-slate-300 font-mono text-sm">
                            {currentIndex + 1}/{cards.length}
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
                    <div className={`relative w-full h-full transition-all ${enableTransition ? 'duration-500' : 'duration-0'} transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                        {/* Front Side */}
                        <div
                            className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 border-4 border-white"
                            style={{ zIndex: isFlipped ? 0 : 1 }}
                        >
                            <div className="absolute top-6 right-6 text-slate-300">
                                <RotateCw className="w-6 h-6" />
                            </div>

                            <div className="flex-1 flex items-center justify-center w-full">
                                {renderFront()}
                            </div>

                            <div className="text-slate-400 text-sm font-medium uppercase tracking-widest mt-4">
                                Tap to Flip
                            </div>
                        </div>

                        {/* Back Side */}
                        <div
                            className="absolute inset-0 backface-hidden rotate-y-180 bg-indigo-600 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 text-white border-4 border-indigo-500"
                            style={{ zIndex: isFlipped ? 1 : 0 }}
                        >
                            {/* Removed fixed audio button from here, now inside renderBack/renderThaiSide */}

                            <div className="flex-1 flex flex-col items-center justify-center w-full">
                                {renderBack()}
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

                    <div className="text-slate-400 text-sm hidden sm:block">
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
                .perspective-1000 { perspective: 1000px; -webkit-perspective: 1000px; }
                .transform-style-3d { transform-style: preserve-3d; -webkit-transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
                .rotate-y-180 { transform: rotateY(180deg); }
                .animate-bounce-slow { 
                    animation: bounce 3s infinite; 
                    /* Hardware acceleration hacks for Safari */
                    transform: translateZ(0);
                    will-change: transform;
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(-5%) translateZ(0); }
                    50% { transform: translateY(5%) translateZ(0); }
                }
            `}</style>
        </div>
    );
};

export default FlashcardDeck;
