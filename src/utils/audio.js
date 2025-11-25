// --- AUDIO ENGINE (Fast & Natural) ---
// Hack: Map unsupported languages to a supported one that can read the script (e.g. Russian for Georgian/Armenian)
const NETWORK_LANG_MAPPING = {
    'ka': 'ru',
    'hy': 'ru',
};

export const speak = (text, langCode = 'th-TH', audioUrl = null) => {
    // 0. STATIC AUDIO FILE (Highest Priority)
    if (audioUrl) {
        const audio = new Audio(audioUrl);
        audio.play().catch(e => console.warn("Static audio playback failed:", e));
        return;
    }

    // Clean text: Only remove spaces for Thai to improve flow
    const cleanText = langCode === 'th-TH' ? text.replace(/\s/g, '') : text;

    // Helper to play via Google TTS
    const playNetworkAudio = () => {
        let isoCode = langCode.split('-')[0];

        // Apply mapping if exists
        if (NETWORK_LANG_MAPPING[isoCode]) {
            isoCode = NETWORK_LANG_MAPPING[isoCode];
        }

        try {
            // Use translate.googleapis.com with client=gtx for better reliability
            const url = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=${isoCode}&dt=t&q=${encodeURIComponent(cleanText)}`;
            const audio = new Audio(url);
            audio.playbackRate = 0.9;
            audio.play().catch(e => console.warn("Network audio playback failed:", e));
        } catch (e) {
            console.warn("Network audio setup failed:", e);
        }
    };

    // 1. BROWSER SYNTHESIS (NATIVE)
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Stop previous
        if (window.speechSynthesis.paused) window.speechSynthesis.resume();

        const voices = window.speechSynthesis.getVoices();

        // Retry getting voices if empty (sometimes happens on first load)
        if (voices.length === 0) {
            window.speechSynthesis.onvoiceschanged = () => {
                const updatedVoices = window.speechSynthesis.getVoices();
                // Check if we have a voice now
                const hasVoice = updatedVoices.some(v => v.lang === langCode || v.lang.startsWith(langCode.split('-')[0]));
                if (hasVoice) {
                    speak(text, langCode);
                } else {
                    playNetworkAudio();
                }
            };
            // Don't return here, try network fallback immediately while waiting? 
            // Better to wait briefly or just try network fallback if we really need immediate feedback.
            // For simplicity, let's try network fallback if voices are empty initially.
            playNetworkAudio();
            return;
        }

        // Check for a matching voice
        let preferredVoice = voices.find(v => v.lang === langCode);
        if (!preferredVoice) {
            const baseLang = langCode.split('-')[0];
            preferredVoice = voices.find(v => v.lang.startsWith(baseLang));
        }

        // IF WE FOUND A VOICE, USE IT.
        if (preferredVoice) {
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = preferredVoice.lang;
            utterance.voice = preferredVoice;
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
            return;
        }

        // IF NO VOICE FOUND, FALL THROUGH TO NETWORK AUDIO
    }

    // 2. NETWORK FALLBACK (Google TTS)
    playNetworkAudio();
};
