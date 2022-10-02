import { AddIcon } from '@chakra-ui/icons'
import { Grid, Flex, Box, Heading, Divider, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'
import CreateModal from './CreateModal'
import QuizCard from './QuizCard'
import { useQuizzes } from './../context/QuizContext';

function YourQuizzes() {
    const [showCreateModal, setShowCreateModal] = useState(false)
  
    const { quizzes } = useQuizzes()

    const scrollRef = useHorizontalScroll()


    return (
        <Grid gap={2} autoFlow={"row dense"} justifyContent={'flex-start'} background={'dark'} height={'100vh'} overflowY={'hidden'} ref={scrollRef}>
        {!showCreateModal ? 
            <>
            <Flex align={'center'} height={500} margin={0} direction={'row'}>
            <Box height={450} m={6}>
                <Heading pb={5} fontSize={'1.75rem'} color='light'>Recents</Heading>
            </Box>
            {quizzes.map((content, idx) => 
                <Box key={idx} ml={10} mr={10}>
                    <QuizCard width={675} height={400} content={content}/>
                </Box>
            )}
            <Box mr={10} ml={4}>
                <Button onClick={() => setShowCreateModal(true)} width={100} height={100} borderRadius={'50%'} bg='primary' _hover={{ bg: 'primaryLight', color: 'light' }}>
                <AddIcon size={'100px'} />
                </Button>
            </Box>
            </Flex>
            <Divider />
            <Flex align={'center'} height={500} margin={0} direction={'row'}>
            <Box height={450} m={6}>
                <Heading pb={5} fontSize={'1.75rem'} color='light'>Your Quizzes</Heading>
            </Box>
            {quizzes.map((content, idx) => 
                <Box key={idx} ml={10} mr={10}>
                    <QuizCard width={675} height={400} content={content}/>
                </Box>
            )}
            <Box mr={10} ml={4}>
                <Button onClick={() => setShowCreateModal(true)} width={100} height={100} borderRadius={'50%'} bg='primary' _hover={{ bg: 'primaryLight', color: 'light' }}>
                <AddIcon size={'100px'} />
                </Button>
            </Box>
            </Flex>
            </>
            :
            <CreateModal update={setShowCreateModal} show={showCreateModal} content={[]}/>
            }
        </Grid>
    )
}

export default YourQuizzes