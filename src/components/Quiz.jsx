import React, { useState, useEffect } from 'react';
import { Award, RefreshCw } from 'lucide-react';
import { speak } from '../utils/audio';

const Quiz = ({ questions, langCode, onComplete }) => {
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        const shuffled = [...questions].sort(() => 0.5 - Math.random()).slice(0, 5);
        setShuffledQuestions(shuffled);
        setCurrentIndex(0);
        setScore(0);
        setShowScore(false);
        setSelectedOption(null);
    }, [questions]);

    const handleAnswer = (option) => {
        if (selectedOption) return;
        setSelectedOption(option);

        if (option.length < 15) speak(option, langCode);

        if (option === shuffledQuestions[currentIndex].correct) setScore(score + 1);

        setTimeout(() => {
            if (currentIndex + 1 < shuffledQuestions.length) {
                setCurrentIndex(currentIndex + 1);
                setSelectedOption(null);
            } else {
                setShowScore(true);
            }
        }, 1500);
    };

    const restartQuiz = () => {
        const shuffled = [...questions].sort(() => 0.5 - Math.random()).slice(0, 5);
        setShuffledQuestions(shuffled);
        setCurrentIndex(0);
        setScore(0);
        setShowScore(false);
        setSelectedOption(null);
    };

    if (showScore) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md mx-auto mt-10">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Quiz Complete!</h2>
                <p className="text-slate-600 mb-6">You scored {score} out of {shuffledQuestions.length}</p>
                <div className="flex gap-3 justify-center">
                    <button onClick={restartQuiz} className="px-6 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
                        <RefreshCw className="w-4 h-4" /> Try Again
                    </button>
                    <button onClick={onComplete} className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                        Back to Learn
                    </button>
                </div>
            </div>
        );
    }

    if (shuffledQuestions.length === 0) return <div className="p-8 text-center">Loading Quiz...</div>;

    const q = shuffledQuestions[currentIndex];
    return (
        <div className="max-w-xl mx-auto mt-8">
            <div className="mb-4 flex justify-between text-sm font-medium text-slate-500">
                <span>Question {currentIndex + 1}/{shuffledQuestions.length}</span>
                <span>Score: {score}</span>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6">{q.question}</h3>
                <div className="grid grid-cols-1 gap-3">
                    {q.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(option)}
                            disabled={!!selectedOption}
                            className={`w-full p-4 rounded-xl text-left font-medium text-lg transition-all duration-200 border-2 ${selectedOption
                                    ? (option === q.correct ? "bg-green-50 border-green-500 text-green-700" : option === selectedOption ? "bg-red-50 border-red-500 text-red-700" : "bg-slate-50 border-slate-100 text-slate-400 opacity-50")
                                    : "bg-white border-slate-200 hover:border-indigo-300 text-slate-700"
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
