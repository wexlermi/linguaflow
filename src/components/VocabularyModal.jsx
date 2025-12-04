import React from 'react';
import { X, Volume2 } from 'lucide-react';
import { speak } from '../utils/audio';

const VocabularyModal = ({ item, langCode, onClose }) => {
    if (!item) return null;

    const emoji = item.emoji;

    // Handle Escape key
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
            <div
                className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200"
                onClick={e => e.stopPropagation()}
            >
                <div className="relative">
                    {emoji ? (
                        <div className="h-64 w-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden group">
                            <span className="text-9xl transition-transform duration-700 group-hover:scale-110">{emoji}</span>
                            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
                        </div>
                    ) : (
                        <div className="h-32 w-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                            <span className="text-6xl opacity-20">🇹🇭</span>
                        </div>
                    )}

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors z-50"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-8 text-center">
                    <h2 className="text-4xl font-bold text-slate-800 mb-2">{item.thai}</h2>
                    <p className="text-lg text-slate-500 font-medium mb-6">{item.roman}</p>

                    <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                        <p className="text-xl font-bold text-indigo-600">{item.meaning}</p>
                    </div>

                    <button
                        onClick={() => speak(item.thai, langCode, item.audioSrc)}
                        className="w-full flex items-center justify-center gap-3 bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        <Volume2 className="w-6 h-6" />
                        Play Audio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VocabularyModal;
