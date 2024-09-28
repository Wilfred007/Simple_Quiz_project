"use client";
import React, { useState } from 'react';

function Quiz() {
    const quiz = [
        {
            question: "Which of these data types can hold multiple variables?",
            options: ["Array", "Boolean", "Integer", "String"],
            correct_answer: "Array"
        },
        {
            question: "Integers are primarily ...",
            options: ["Text", "Numbers", "React", "String"],
            correct_answer: "Numbers"
        },
        {
            question: "What method is used to remove the last element of an array?",
            options: ["Filter()", "Pop()", "Rock()", "Push()"],
            correct_answer: "Pop()"
        },
        {
            question: "Which of these data types can hold multiple variables?",
            options: ["Array", "Boolean", "Integer", "String"],
            correct_answer: "Array"
        },
        {
            question: "Which of these data types can hold multiple variables?",
            options: ["Array", "Boolean", "Integer", "String"],
            correct_answer: "Array"
        }
    ]
    ;

    const [questionIndex, setQuestionIndex] = useState(0); // Track the current question index
    const [userScore, setUserScore] = useState(0); // Track the user's score
    const [userAnswers, setUserAnswers] = useState(Array(quiz.length).fill(null)); // Track the user's answers
    const [isCompleted, setIsCompleted] = useState(false); // Track if the quiz is completed

    // Handle when an option is clicked
    const handleOptionClick = (selectedOption) => {
        const correct_answer = quiz[questionIndex].correct_answer;

        // Save the selected answer in the userAnswers array
        const newUserAnswers = [...userAnswers];
        newUserAnswers[questionIndex] = selectedOption;
        setUserAnswers(newUserAnswers);
        
        // Update the score based on whether the answer is correct
        let newScore = userScore;
        if (selectedOption === correct_answer && userAnswers[questionIndex] !== correct_answer) {
            newScore++; // Increase score if the answer is correct
        } else if (selectedOption !== correct_answer && userAnswers[questionIndex] === correct_answer) {
            newScore--; // Decrease score if the user changes a correct answer to an incorrect one
        }
        setUserScore(newScore);
    };

    // Handle "Next" button click
    const handleNextClick = () => {
        const nextQuestion = questionIndex + 1;
        if (nextQuestion < quiz.length) {
            setQuestionIndex(nextQuestion);
        } else {
            setIsCompleted(true);
        }
    };

    // Handle "Back" button click
    const handleBackClick = () => {
        if (questionIndex > 0) {
            setQuestionIndex(questionIndex - 1);
        }
    };

    return (
        <div className='p-10 max-w-auto shadow-2xl'>
            {isCompleted ? (
                <div>
                    <h2>Quiz Completed!</h2>
                    <p>You scored {userScore} out of {quiz.length}</p>
                </div>
            ) : (
                <div className='flex justify-center flex-col lg:w-[400px]'>
                    <h2 className='flex justify-center mt-5'>{quiz[questionIndex].question}</h2>
                    {quiz[questionIndex].options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            style={{
                                backgroundColor: userAnswers[questionIndex] === option ? '#d3d3d3' : ''
                            }} className='p-5 rounded-xl'
                        >
                            {option}
                        </button>
                    ))}
                    <div className='flex justify-between p-10'>
                    <button onClick={handleBackClick} disabled={questionIndex === 0} className='bg-red-400  px-8 py-2 text-white rounded-md hover:bg-red-600'>
                        Back
                    </button>
                    <button onClick={handleNextClick} disabled={userAnswers[questionIndex] === null} className='bg-green-400 px-8 py-2 text-white rounded-md hover:bg-green-600'>
                        Next
                    </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Quiz;
