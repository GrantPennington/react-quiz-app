import { Box, Flex, Heading, Input, InputGroup } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function CreateQuizInput({ placeholder, heading, update, field, variant }) {
    const [quiz, setQuiz] = useState('')

    const handleChange = (e) => {
        setQuiz(e.target.value)
        update(field, e.target.value)
    }
    

    /*  ALL INPUT VARIANTS

        variant="outline"
        variant="filled" 
        variant="flushed"
        variant="unstyled"
    */
  return (
    <>
    <Flex justify={'flex-start'}>
        <Box width={185}>
            <Heading fontSize={'1.75rem'}>{heading || 'Title'}</Heading>
        </Box>
        <Box>
                <Input 
                    placeholder={placeholder || 'Quiz Title'} 
                    height={50} width={'1000px'}
                    value={quiz} 
                    onChange={(e) => handleChange(e)}
                    variant={variant || 'flushed'}
                    isRequired={true}
                />
        </Box>
        
    </Flex>
    </>
  )
}

export default CreateQuizInput