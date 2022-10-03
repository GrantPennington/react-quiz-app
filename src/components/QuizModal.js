import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Heading,
    Input,
    Flex,
    Box,
    Stack,
    Divider,
  } from '@chakra-ui/react'
  import React, { useEffect, useState } from 'react'
import CreateQuizInput from './CreateQuizInput'
import QuizDetails from './QuizDetails'
import { useQuizzes } from './../context/QuizContext';
import { CREATE_QUIZ_INPUT_DATA, QUESTION_TAB_PANEL_DATA } from '../data/constants';
import QuestionStack from './QuestionStack';
import QuizMain from './QuizMain';
import QuizQuestions from './QuizQuestions';


/*
    content shape = {
        label:
        topic:
        progress:
        questionCount:
        dueDate:
        timeLimit:
        details: 
        answered: 
    }
*/


  function QuizModal({ update, show, title }) {
    const { setQuizzes, quizzes } = useQuizzes() // setQuizzes from QuizContext
    const [current, setCurrent] = useState({ // state object to store the required quiz data
        title: '',
        topic: '',
        progress: 0,
        questionCount: 0,
        timeLimit: '',
        dueDate: '',
        answered: 0,
        details: '',
    })
    const temp_data = QUESTION_TAB_PANEL_DATA

    
    //const currentLabels = ['Title', 'Topic', 'Question Count', ]

    /*
      label: 'Algorithms Quiz 1 - CS-330-01',
      topic: 'topic goes here',
      progress: 60,
      questionCount: 50,
      timeLimit: '30 minutes',
      dueDate: 'September 3, 2022',
      answered: 0,
      details: 'You have
    */
/*
      useEffect(() => {
        console.log('CURRENT: ',current)
        setQuizzes((prev) => [ current, ...prev ])
      }, [isSubmit])
*/

    const handleUpdate = (field, value) => {
        console.log('CURRENT: ',current)
        setCurrent(() => {
            const val = {
                ...current,
                [field]: value,
            }
            console.log('VALUE: ',val)
            return val
        })
    }

    return (
      <>  
      <Flex
            height={800}
            width={1400}
            mt={6}
            direction={"column"}
            bg={"dark"}
            borderRadius={"md"}
        >
        <Modal isOpen={show} onClose={() => update(false)} size={'full'} sx={{ height: 600 }}>
          <ModalOverlay />
          <ModalContent background={"dark"}>
            <ModalHeader bg={"primary"}>
            
            <Flex
                width={"100%"}
                height={75}
                bg={"primary"}
                align={"center"}
                borderRadius={"md"}
            >
                <Heading ml={2}>{title || 'Empty Quiz'}</Heading>
            </Flex>
            </ModalHeader>
            <ModalCloseButton />
            <Divider
                orientation="horizontal"
                bg={"dark"}
                height={"4px"}
                borderRadius={"md"}
            />
            <ModalBody>
            <Box width={"100%"} height={"100%"} p={2}>
                <QuizQuestions height={"54px"} data={quizzes} />
            </Box>
            </ModalBody>
            <ModalFooter>
              <Button background='primary' color={'light'} _hover={{ bg: 'primaryLight' }} mr={3} onClick={() => update(false)}>
                Close
              </Button>
              <Button variant='ghost' bg={'primary'} color={'light'} _hover={{ bg: 'primaryLight' }}
                onClick={() => {
                    update(false)
                }}
              >Next</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Flex>
      </>
    )
  }

export default QuizModal
