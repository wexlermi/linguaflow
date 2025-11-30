import React from 'react';
import { X, Volume2 } from 'lucide-react';
import { speak } from '../utils/audio';

const CharacterModal = ({ charData, langConfig, fontMode, onClose }) => {
    if (!charData) return null;

    // Determine current font class based on fontMode
    let fontClass = langConfig.fontA;
    if (fontMode === 'B') fontClass = langConfig.fontB;
    else if (fontMode === 'Hand') fontClass = langConfig.fontHand;
    else if (fontMode === 'Old') fontClass = langConfig.fontOld;

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
                        <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-6xl shadow-inner border border-white/30 shrink-0 p-2">
                            {charData.emoji || <div className={`${fontClass} whitespace-nowrap leading-tight`}>{charData.type === 'Vowel' || charData.type === 'Tone' ? charData.char : charData.char.split(' ')[0]}</div>}
                        </div>
                        <div className="min-w-0">
                            {/* Ensure full name for Thai is shown, remove truncate to prevent clipping */}
                            <h2 className={`text-4xl font-bold mb-1 leading-relaxed ${langConfig.id === 'thai' ? langConfig.fontA : langConfig.fontB}`}>
                                {langConfig.id === 'thai' ? (charData.thaiName || charData.char) : charData.char}
                            </h2>
                            <p className="text-indigo-100 text-lg opacity-90">{charData.name}</p>
                            <div className="flex items-center gap-2 mt-3">
                                <button
                                    onClick={() => speak(charData.ttsName || charData.thaiName || (charData.type === 'Tone' ? charData.char : charData.char), langConfig.langCode, charData.audioSrc)}
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
                                        <span className={`font-bold px-2 py-0.5 rounded text-xs ${charData.class === 'High' ? 'bg-red-100 text-red-600' :
                                            charData.class === 'Mid' ? 'bg-green-100 text-green-600' :
                                                'bg-blue-100 text-blue-600'
                                            }`}>
                                            {charData.class}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {charData.exampleWord && (
                                <div className="mt-4 pt-4 border-t border-slate-200">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-wider">Example</h4>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className={`text-xl font-bold text-slate-800 ${fontClass}`}>{charData.exampleWord}</div>
                                            <div className="text-sm text-slate-500">{charData.exampleWordMeaning}</div>
                                        </div>
                                        <button
                                            onClick={() => speak(charData.exampleWord, langConfig.langCode, charData.exampleWordAudioSrc)}
                                            className="p-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors"
                                        >
                                            <Volume2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Styles</h4>
                            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
                                <span className="text-xs font-medium text-slate-500 w-24">{langConfig.styleALabel}</span>
                                <span className={`text-4xl text-indigo-900 leading-relaxed py-2 ${langConfig.fontA}`}>{charData.char.split(' ')[0]}</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
                                <span className="text-xs font-medium text-slate-500 w-24">{langConfig.styleBLabel}</span>
                                <span className={`text-4xl text-indigo-900 leading-relaxed py-2 ${langConfig.fontB}`}>{charData.char.split(' ')[0]}</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
                                <span className="text-xs font-medium text-slate-500 w-24">{langConfig.styleHandLabel || 'Handwritten'}</span>
                                <span className={`text-4xl text-indigo-900 leading-relaxed py-2 ${langConfig.fontHand}`}>{charData.char.split(' ')[0]}</span>
                            </div>
                            {langConfig.fontOld && (
                                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
                                    <span className="text-xs font-medium text-slate-500 w-24">{langConfig.styleOldLabel}</span>
                                    <span className={`text-4xl text-indigo-900 leading-relaxed py-2 ${langConfig.fontOld}`}>{charData.char.split(' ')[0]}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterModal;
