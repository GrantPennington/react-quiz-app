import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ProgressBar from './ProgressBar'

function QuizDetails({ label, topic, progress, questionCount, dueDate, timeLimit, details, answered }) {
  return (
    <>
        <Flex
            width={'100%'}
            background={'light'}
            justify={'space-between'}
            alignItems={'center'}
        >
            <Heading>{label || 'Empty Quiz'}</Heading>
            <Heading fontSize={'1.75rem'}>Due: {dueDate || 'None'}</Heading>
        </Flex>
        <Flex
            width={'100%'}
            justify={'space-between'}
            alignItems={'center'}
            mt={8}
        >
            <Heading fontSize={'1.85rem'}>Topic: {topic || 'Blank'}</Heading>
        </Flex>
        <Flex
            height={275}
            background={'light'}
            direction={'row'}
            mt={6}
            justify={'space-between'}
            alignItems={'center'}
        >
            <Box ml={6}>
                <Heading mb={6}>Questions: {questionCount || 0}</Heading>
                <Heading>Answered: {answered || 0}</Heading>
            </Box>
            <Box textAlign={'center'}>
                {(timeLimit!=='') &&
                    <>
                        <Heading mb={3}>Time Limit: {timeLimit}</Heading>
                        <Heading fontSize={'1.65rem'}>Remaining: {timeLimit}</Heading>
                    </>
                }
            </Box>
            <Box mr={6}>
                <ProgressBar progress={progress} size={'150px'} color={'primary'}/>
                <Heading fontSize={'2.5rem'} mb={3}>Progress</Heading>
            </Box>
        </Flex>
        <Flex
            width={'100%'}
            justify={'flex-start'}
            alignItems={'center'}
            mt={8}
        >
            <Heading fontSize={'1.85rem'}>Details:</Heading>
            <Text ml={10} fontSize={'1.5rem'} fontWeight={'normal'}>{details}</Text>
        </Flex>
    </>
  )
}

export default QuizDetails