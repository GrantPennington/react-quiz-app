import React, { createContext, useContext, useState } from 'react'

const QuizContext = createContext()

export function useQuizzes() {
    return useContext(QuizContext)
}

export function QuizProvider({ children }) {
    const [quizzes, setQuizzes] = useState([])


    const updateOptions = (index, answers) => {
        setQuizzes((prev) => {
            const updated = {
                ...prev,
            }
            return updated
        })
    }
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
        updateOptions,
    }
    return (
        <QuizContext.Provider value={defaultQuizContext}>
            { children }
        </QuizContext.Provider>
    )
}