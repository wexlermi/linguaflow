import React from 'react';
import { Type, Volume2, Info } from 'lucide-react';
import { speak } from '../utils/audio';

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
            <div className="flex flex-wrap bg-white p-1 rounded-lg shadow-sm border border-slate-200 self-start gap-1">
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
                {config.styleOldLabel && (
                    <button
                        onClick={() => setFontMode('Old')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${fontMode === 'Old' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
                    >
                        {config.styleOldLabel}
                    </button>
                )}
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
                <p className={`text-4xl md:text-5xl text-slate-800 transition-all duration-500 ${fontMode === 'B' ? config.fontB :
                        fontMode === 'Hand' ? config.fontHand :
                            fontMode === 'Old' ? config.fontOld :
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
                            {fontMode === 'B' ? config.styleBLabel : fontMode === 'Hand' ? (config.styleHandLabel || 'Handwritten') : fontMode === 'Old' ? config.styleOldLabel : config.styleALabel}:
                        </span>
                        {fontMode === 'B'
                            ? " Often used in screens, modern signage, and informal writing. Cleaner lines."
                            : fontMode === 'Hand'
                                ? " Simulate casual handwriting. Good for reading notes and signs."
                                : fontMode === 'Old'
                                    ? " Classic or retro style, typically found in formal contexts or traditional signage."
                                    : " Often used in books, newspapers, and formal documents. More intricate details."}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default FontComparison;
