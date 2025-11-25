import React, { useState } from 'react';
import { LANGUAGES } from './data/languages';
import Header from './components/Header';
import LanguageCard from './components/LanguageCard';
import LanguageModule from './components/LanguageModule';

// --- APP ROOT ---
const App = () => {
  const [currentLangId, setCurrentLangId] = useState(null);

  const currentLang = currentLangId ? Object.values(LANGUAGES).find(l => l.id === currentLangId) : null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <style>{`
        /* Combine Google Fonts into a single request to avoid blocking behavior */
        @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Charm:wght@400;700&family=Kanit:wght@300;400;600&family=Mali:wght@400;600&family=Noto+Sans:wght@400;700&family=Noto+Serif:wght@400;700&family=Sarabun:wght@300;400;600&family=UnifrakturMaguntia&display=swap&subset=thai,cyrillic,greek,vietnamese');

        /* --- Class Definitions --- */
        .font-kanit { font-family: 'Kanit', sans-serif !important; }
        .font-sarabun { font-family: 'Sarabun', sans-serif !important; }
        .font-mali { font-family: 'Mali', cursive !important; }
        .font-charm { font-family: 'Charm', cursive !important; }
        .font-caveat { font-family: 'Caveat', cursive !important; }
        .font-noto { font-family: 'Noto Sans', sans-serif !important; }
        .font-notoserif { font-family: 'Noto Serif', serif !important; }
        .font-sans-vn { font-family: 'Noto Sans', sans-serif !important; }
        .font-serif-vn { font-family: 'Noto Serif', serif !important; }
        .font-blackletter { font-family: 'UnifrakturMaguntia', cursive !important; }
        .font-sans-de { font-family: 'Noto Sans', sans-serif !important; }
      `}</style>

      <Header goBack={() => setCurrentLangId(null)} currentLang={currentLang} />

      <main>
        {!currentLangId ? (
          <div className="max-w-6xl mx-auto px-4 py-12 animate-in fade-in duration-500">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Master a new <span className="text-indigo-600">script.</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                lang.bar focuses on the visual and auditory aspects of language. Learn fonts, alphabets, and sounds before diving into grammar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Object.values(LANGUAGES).map((lang) => (
                <LanguageCard
                  key={lang.id}
                  data={lang}
                  onClick={() => !lang.comingSoon && setCurrentLangId(lang.id)}
                />
              ))}
            </div>
          </div>
        ) : (
          <LanguageModule config={currentLang} onBack={() => setCurrentLangId(null)} />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-20 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© 2024 lang.bar. Start your journey.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;