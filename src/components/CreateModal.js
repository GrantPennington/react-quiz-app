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
  } from '@chakra-ui/react'
  import React, { useEffect, useState } from 'react'
import CreateQuizInput from './CreateQuizInput'
import QuizDetails from './QuizDetails'
import { useQuizzes } from './../context/QuizContext';
import { CREATE_QUIZ_INPUT_DATA } from '../data/constants';


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


  function CreateModal({ update, show }) {
    const { setQuizzes } = useQuizzes() // setQuizzes from QuizContext
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
    const [isSubmit, setIsSubmit] = useState(false)
    const data = CREATE_QUIZ_INPUT_DATA

    
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
        <Modal isOpen={show} onClose={() => update(false)} size={'full'} sx={{ height: 600 }}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Quiz</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Stack spacing={3}>
                    {
                        data.map((input, index) => 
                            <Box key={input.id}>
                                <CreateQuizInput
                                    id={input.id}
                                    placeholder={input.placeholder}
                                    heading={input.heading}
                                    update={handleUpdate}
                                    field={input.field}
                                    onSubmit={isSubmit}
                                />
                            </Box>
                        )
                    }
                </Stack>
            </ModalBody>
  
            <ModalFooter>
              <Button background='primary' color={'light'} _hover={{ bg: 'primaryLight' }} mr={3} onClick={() => update(false)}>
                Close
              </Button>
              <Button variant='ghost' bg={'primary'} color={'light'} _hover={{ bg: 'primaryLight' }}
                onClick={() => {
                    setIsSubmit(true)
                    setQuizzes((prev) => [ current, ...prev ])
                    update(false)
                }}
              >Create Quiz</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default CreateModal