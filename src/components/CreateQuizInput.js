import { Box, Flex, Heading, Input, InputGroup } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function CreateQuizInput({ placeholder, heading, update, field, variant, width, noHeading=false, id, index }) {
    const [quiz, setQuiz] = useState('')

    const handleChange = (e) => {
        setQuiz(e.target.value)
        update(field, e.target.value, index)
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
        {(noHeading===false) &&
            <Box width={185}>
                {<Heading fontSize={'1.75rem'}>{heading || 'Title'}</Heading>}
            </Box>
        }
        <Box>
                <Input 
                    id={id}
                    field={field}
                    placeholder={placeholder || 'Quiz Title'} 
                    height={50} width={width || '1000px'}
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