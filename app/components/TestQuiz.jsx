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
        <div>
            {isCompleted ? (
                <div>
                    <h2>Quiz Completed!</h2>
                    <p>You scored {userScore} out of {quiz.length}</p>
                </div>
            ) : (
                <div>
                    <h2>{quiz[questionIndex].question}</h2>
                    {quiz[questionIndex].options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            style={{
                                backgroundColor: userAnswers[questionIndex] === option ? '#d3d3d3' : ''
                            }}
                        >
                            {option}
                        </button>
                    ))}
                    <br />
                    <button onClick={handleBackClick} disabled={questionIndex === 0}>
                        Back
                    </button>
                    <button onClick={handleNextClick} disabled={userAnswers[questionIndex] === null}>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default Quiz;






// "use client"
// import React from 'react'
// import { useState } from 'react'

// function Quiz() {
//     const Quiz = [
//         {
//             question: "Which of these data types can hold multiple variables",
//             options: ["Array", "Boolean", "Integer", "String"],
//             correct_answer: "Array"
//         },

//         {
//             question: "Integers are primarily ...",
//             options: ["Text", "Numbers", "React", "String"],
//             correct_answer: "Numbers"
//         },

//         {
//             question: "What method is used to remove the last element of an array",
//             options: ["Filter()", "Pop()", "Rock()", "Push()"],
//             correct_answer: "Pop()"
//         },

//         {
//             question: "Which of these data types can hold multiple variables",
//             options: ["Array", "Boolean", "Integer", "String"],
//             correct_answer: "Array"
//         }
//     ];
//     const [questionIndex, setQuestionIndex] = useState(0);
//     const [userScore, setUserScore] = useState(0);
//     const [userAnswers, setUserAnswers] = useState([]);
//     const [isCompleted, setIsCompleted] = useState(false);


//     const handleOptionClick = (selectedOption) => {
//         const correct_answer = question[questionIndex].correct_answer;
//     }

//     // add the selected answer to the userAnswer array
//     setUserAnswers((prev) => [...prev, selectedOption]);

//     //increment score if the right answer is chosen

//     if(selectedOption == correct_answer) {
//         setUserScore(userScore + 1);
//     }

//     //Move to the next question or complete the quiz
//     const nextQuestion = questionIndex + 1;
//     if(nextQuestion < question.length) {
//         setQuestionIndex(nextQuestion);
//     } else {
//         setIsCompleted(true)
//     }


//     return (
//         <div>
//             {isCompleted? (
//                 <div>
//                     <h2>Quiz Completed!</h2>
//                     You scored {score} out of {question.length}
//                 </div>
//             ) : (
//                 <div>
//                     {question[questionIndex].options.map((option, index)=>(
//                         <button key={index}
//                         onClick={() => handleOptionClick(option)}
//                         >
//                             {option}
//                         </button>
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// }

// export default Quiz