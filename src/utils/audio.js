// --- AUDIO ENGINE (Fast & Natural) ---
export const speak = (text, langCode = 'th-TH') => {
    // Clean text: remove spaces to improve flow for Thai
    const cleanText = text.replace(/\s/g, '');

    // 1. BROWSER SYNTHESIS (NATIVE)
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel(); // Stop previous
        if (window.speechSynthesis.paused) window.speechSynthesis.resume();

        const voices = window.speechSynthesis.getVoices();

        // Priority: Narisa/Siri (Apple), Google (Android/Chrome)
        const preferredVoice = voices.find(v =>
            v.lang === langCode && (
                v.name.includes("Narisa") ||
                v.name.includes("Kanya") ||
                v.name.includes("Google") ||
                v.name.includes("Enhanced") ||
                v.name.includes("Siri") ||
                v.name.includes("Premium")
            )
        ) || voices.find(v => v.lang === langCode);

        if (preferredVoice) {
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = langCode;
            utterance.voice = preferredVoice;
            // RATE: 0.9 is slightly slower for clarity without being robotic. 
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
            return;
        }
    }

    // 2. NETWORK FALLBACK (Google TTS)
    // 'client=tw-ob' usually provides a cleaner, faster stream for short words.
    const isoCode = langCode.split('-')[0];
    const audio = new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&tl=${isoCode}&client=tw-ob&q=${encodeURIComponent(cleanText)}`);
    // Play back slightly slower (0.9)
    audio.playbackRate = 0.9;
    audio.play().catch(e => console.log("Audio failed", e));
};
