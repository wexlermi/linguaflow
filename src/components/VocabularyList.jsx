import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { speak } from '../utils/audio';
import VocabularyModal from './VocabularyModal';

const VocabularyList = ({ vocabulary, langCode }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    if (!vocabulary) return null;

    return (
        <>
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {vocabulary.map((category, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <span className="w-2 h-6 bg-indigo-500 rounded-full"></span>
                            {category.category}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.items.map((item, itemIdx) => (
                                <div
                                    key={itemIdx}
                                    className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 transition-colors group cursor-pointer"
                                    onClick={() => {
                                        speak(item.thai, langCode, item.audioSrc);
                                        setSelectedItem(item);
                                    }}
                                >
                                    <div>
                                        <div className="text-lg font-bold text-slate-800 mb-1">{item.thai}</div>
                                        <div className="text-sm text-slate-500 font-medium">{item.roman}</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-right">
                                            <div className="text-sm font-bold text-slate-700">{item.meaning}</div>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                speak(item.thai, langCode, item.audioSrc);
                                            }}
                                            className="p-2 bg-white rounded-full text-indigo-200 group-hover:text-indigo-600 group-hover:shadow-sm transition-all"
                                        >
                                            <Volume2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {selectedItem && (
                <VocabularyModal
                    item={selectedItem}
                    langCode={langCode}
                    onClose={() => setSelectedItem(null)}
                />
            )}
        </>
    );
};

export default VocabularyList;
