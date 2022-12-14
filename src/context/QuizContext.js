import React, { createContext, useContext, useState } from 'react'

const QuizContext = createContext()

export function useQuizzes() {
    return useContext(QuizContext)
}

export function QuizProvider({ children }) {
    const [quizzes, setQuizzes] = useState([])

    /*
        Shape of quizzes
        quizzes = [
            {
                quizID:
                title:
                topic:
                questionCount:
                progress:
                timeLimit:
                details:
                dueDate:
                answered: 
                questions: [ 
                    { 
                        id: 
                        question: 
                        answer: 
                        selected: 
                        options: [ ... ]
                    } 
                ],

            },
            ...
        ]
    
    */

    const defaultQuizContext = {
        quizzes,
        setQuizzes,
    }
    return (
        <QuizContext.Provider value={defaultQuizContext}>
            { children }
        </QuizContext.Provider>
    )
}