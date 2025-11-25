import React from 'react';
import { Globe } from 'lucide-react';

const Header = ({ goBack, currentLang }) => (
    <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div
                className="flex items-center gap-2 text-indigo-600 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={goBack}
            >
                <Globe className="w-6 h-6" />
                <h1 className="font-bold text-xl tracking-tight">lang.bar</h1>
            </div>
            {currentLang && (
                <div className="flex items-center gap-3">
                    <span className="hidden md:inline text-xs text-slate-400">Audio Enabled</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                        {currentLang.name}
                    </span>
                </div>
            )}
        </div>
    </header>
);

export default Header;
