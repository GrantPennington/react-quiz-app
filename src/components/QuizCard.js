import { Box, Button, Container, Divider, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react'
import React from 'react'
import { DeleteIcon, CloseIcon, EditIcon, ChevronRightIcon } from '@chakra-ui/icons'
import ProgressBar from './ProgressBar'

function QuizCard({ width, height, content }) {
    /*
    content shape = {
        label:
        topic:
        progress:
        questionCount:
        dueDate:
        timeLimit:
    }
    */
  return (
    <>
        {/* CONTAINER BOX */}
        <Box background={'light'} width={width} height={height} borderRadius={'md'} padding={0} display={'flex'} flexDirection={'row'}>
            <Box width={width}>
                {/* HEADING BOX */}
                <Box width={'100%'} height={100} background={'primary'} borderRadius={'sm'} display={'flex'} alignItems={'center'}>
                    <Box>
                        <Heading ml={4}>
                            {content.label}
                            <EditIcon w={5} h={5} mb={1} ml={3}/>
                        </Heading>
                    </Box>
                </Box>
                {/* CONTENT BOX */}
                <Box width={'100%'} height={height-100} borderRadius={'sm'} display={'flex'} flexDirection={'column'}>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Text ml={4} fontSize={'1.75rem'}>
                            Topic: {content.topic}
                        </Text>
                        <Text mr={4} fontSize={'1.25rem'}>
                            Due: {content.dueDate}
                        </Text>
                    </Box>
                    
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Text ml={4} fontSize={'1.75rem'}>
                            Questions: {content.questionCount}
                        </Text>
                        <Text mr={8} mt={14} fontSize={'2rem'}>
                            Progress: <ProgressBar progress={content.progress} />
                        </Text>
                    </Box>
                    <Box>
                        <Text ml={4} fontSize={'2rem'}>
                            Time: {content.timeLimit}
                        </Text>
                        
                    </Box>
                </Box>
            </Box>
            
                <Popover
                    placement='right'
                >
                <PopoverTrigger>
                    <Box
                        background={'light'} 
                        width={50}
                        opacity={1}
                        display={'flex'} alignItems={'center'} justifyContent={'center'} 
                        _hover={{ background: '#c4c4c4', cursor: 'pointer' }}
                    >
                    <ChevronRightIcon w={6} h={6} />
                </Box>
                </PopoverTrigger>
                <PopoverContent height={height} width={250}>
                    <Box
                        background={'dark'} 
                        width={245}
                        height={'100%'}
                        display={'flex'} alignItems={'center'} justifyContent={'center'} flexDir={'column'}
                    >
                        <Button m={2} p={1} mb={16} bg={'dark'} _hover={{ borderRadius: 'md', bg: '#919191', h:75 }}>
                            <Heading fontSize={'1.75rem'} color='light'>Start Quiz</Heading>
                        </Button>
                        <Divider />
                        <Button m={2} p={1} mt={16} bg={'dark'} _hover={{ borderRadius: 'md', bg: '#919191', h:75  }}><Heading fontSize={'1.75rem'} color='light'>View Details</Heading></Button>
                    </Box>
                </PopoverContent>
                </Popover>
        </Box>
    </>
  )
}

export default QuizCard