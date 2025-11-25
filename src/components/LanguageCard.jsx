import React from 'react';
import { ChevronLeft } from 'lucide-react';

const LanguageCard = ({ data, onClick }) => (
    <div
        onClick={onClick}
        className={`group relative bg-white rounded-2xl p-6 shadow-md border-2 border-transparent transition-all duration-300 ${!data.comingSoon
                ? 'hover:border-indigo-500 hover:shadow-xl cursor-pointer hover:-translate-y-1'
                : 'opacity-60 cursor-not-allowed bg-slate-50'
            }`}
    >
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl ${!data.comingSoon ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-200 text-slate-400'}`}>
                <span className="font-bold text-xl">{data.nativeName.charAt(0)}</span>
            </div>
            {data.comingSoon && (
                <span className="text-[10px] font-bold bg-slate-200 text-slate-600 px-2 py-1 rounded uppercase tracking-wide">
                    Not Yet Supported
                </span>
            )}
        </div>
        <h3 className={`text-xl font-bold mb-1 ${!data.comingSoon ? 'text-slate-800' : 'text-slate-500'}`}>{data.name}</h3>
        <p className={`text-sm font-medium mb-2 ${!data.comingSoon ? 'text-indigo-600' : 'text-slate-400'}`}>{data.nativeName}</p>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 min-h-[40px]">{data.desc}</p>

        {!data.comingSoon && (
            <div className="flex items-center text-indigo-600 font-medium text-sm mt-auto">
                Start Learning <ChevronLeft className="w-4 h-4 rotate-180 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
        )}
    </div>
);

export default LanguageCard;
