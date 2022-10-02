import { Flex, Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function CreateQuizInput({ placeholder, heading, update, field, isSubmit }) {
    const [quiz, setQuiz] = useState('')

    const handleChange = (e) => {
        setQuiz(e.target.value)
        update(field, e.target.value)
    }
    /*
    useEffect(() => {
        if(isSubmit) {
            console.log('submitting.... -->  ',field, ' : ', quizTitle)
            update(field, quizTitle)
        }
    }, [isSubmit])
    */
  return (
    <>
    <Flex justify={'flex-start'}>
        <Heading>{heading || 'Title'}</Heading>
        <Input placeholder={placeholder || 'Quiz Title'} height={50} width={'1000px'} ml={10} value={quiz} onChange={(e) => handleChange(e)}></Input>
    </Flex>
    </>
  )
}

export default CreateQuizInput