import React, { useState } from 'react';

const HealthQuiz = () => {
    // Define quiz questions and answers
    const quizData = [
        {
            question: "1. How often do you exercise?",
            options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
            scores: [0, 1, 2, 3, 4], // Corresponding scores for each option
        },
        {
            question: "2. How many hours of sleep do you get per night?",
            options: ["Less than 5", "5-6", "7-8", "More than 8"],
            scores: [0, 1, 3, 4],
        },
        {
            question: "3. How would you rate your stress level?",
            options: ["Very High", "High", "Moderate", "Low", "Very Low"],
            scores: [0, 1, 2, 3, 4],
        },
    ];

    // State to track current question, selected answers, and final score
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    // Handle answer selection
    const handleAnswer = (score) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = score;
        setAnswers(newAnswers);

        if (currentQuestion + 1 < quizData.length) {
            setCurrentQuestion(currentQuestion + 1); // Move to the next question
        } else {
            setShowResults(true); // Show results after the last question
        }
    };

    // Calculate total score
    const calculateScore = () => {
        return answers.reduce((total, score) => total + score, 0);
    };

    // Render results based on score
    const renderResults = () => {
        const totalScore = calculateScore();
        if (totalScore <= 5) {
            return <p className="text-red-600 font-semibold">Your health habits need improvement. Consider making small changes to improve your lifestyle.</p>;
        } else if (totalScore <= 10) {
            return <p className="text-yellow-600 font-semibold">You're doing well, but there's room for improvement. Keep working on your health goals!</p>;
        } else {
            return <p className="text-green-600 font-semibold">Great job! Your health habits are excellent. Keep it up!</p>;
        }
    };

    return (
        <div className=" mx-auto p-16 bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-4xl font-bold text-center text-[#336699] mb-6">Interactive Health Quiz</h2>

            {/* Show quiz questions */}
            {!showResults && (
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{quizData[currentQuestion].question}</h3>
                    <div className="space-y-3">
                        {quizData[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(quizData[currentQuestion].scores[index])}
                                className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-left text-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Show results */}
            {showResults && (
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-[#336699]">Quiz Results</h3>
                    <p className="mb-4 text-gray-700">Your total score: <span className="font-bold">{calculateScore()}</span></p>
                    <div className="mb-6">{renderResults()}</div>
                    <button
                        onClick={() => {
                            setCurrentQuestion(0);
                            setAnswers([]);
                            setShowResults(false);
                        }}
                        className="mt-4 px-6 py-2 bg-[#336699] text-white rounded-full hover:bg-[#2a547a] transition duration-300"
                    >
                        Restart Quiz
                    </button>
                </div>
            )}
        </div>
    );
};

export default HealthQuiz;