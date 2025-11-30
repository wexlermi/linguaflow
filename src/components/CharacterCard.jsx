import React from 'react';
import { Volume2 } from 'lucide-react';

const CharacterCard = ({ charData, langConfig, onClick, fontMode, onAudioClick }) => {
    // Determine current font class based on fontMode state
    let fontClass = langConfig.fontA;
    if (fontMode === 'B') fontClass = langConfig.fontB;
    else if (fontMode === 'Hand') fontClass = langConfig.fontHand;
    else if (fontMode === 'Old') fontClass = langConfig.fontOld;

    return (
        <div
            onClick={onClick}
            className="relative bg-white p-4 rounded-xl border-2 border-slate-200 smart-hover-card transition-all cursor-pointer group select-none flex flex-col items-center justify-between h-44"
        >
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onAudioClick(charData);
                }}
                className="absolute top-2 right-2 smart-hover-opacity bg-indigo-50 hover:bg-indigo-100 p-1.5 rounded-full text-indigo-600"
            >
                <Volume2 className="w-3 h-3" />
            </button>

            <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                {charData.class && (
                    <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${charData.class === 'High' ? 'bg-red-100 text-red-700' :
                        charData.class === 'Mid' ? 'bg-green-100 text-green-700' :
                            'bg-blue-100 text-blue-700'
                        }`}>
                        {charData.class} Class
                    </span>
                )}
                {charData.meaning && (charData.meaning.startsWith('Short') || charData.meaning.startsWith('Long')) && (
                    <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${charData.meaning.startsWith('Short') ? 'bg-orange-100 text-orange-700' : 'bg-teal-100 text-teal-700'
                        }`}>
                        {charData.meaning.split(' ')[0]}
                    </span>
                )}
                {!charData.class && !charData.meaning?.startsWith('Short') && !charData.meaning?.startsWith('Long') && charData.type && (
                    <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${charData.type === 'Tone' ? 'bg-yellow-100 text-yellow-700' :
                        charData.type === 'Vowel' ? 'bg-green-100 text-green-700' :
                            charData.type === 'Grammar' || charData.type === 'Rule' ? 'bg-purple-100 text-purple-700' :
                                charData.type === 'Diphthong' ? 'bg-orange-100 text-orange-700' :
                                    'bg-slate-100 text-slate-500'
                        }`}>
                        {charData.type}
                    </span>
                )}
            </div>

            <div className="text-center py-1 flex-grow flex flex-col justify-center mt-2">
                <div className={`text-4xl text-slate-800 mb-2 transition-all duration-300 leading-relaxed ${fontClass}`}>
                    {charData.char}
                </div>
                {/* Allow text to wrap naturally */}
                <div className="text-sm font-bold text-indigo-700 leading-snug px-2 min-h-[2.5rem] flex items-center justify-center">
                    {charData.name}
                </div>
            </div>
            <div className="w-full mt-1 pt-2 border-t border-slate-100 text-center text-xs font-medium text-slate-500 px-1">
                {charData.meaning}
            </div>
        </div>
    );
};

export default CharacterCard;
