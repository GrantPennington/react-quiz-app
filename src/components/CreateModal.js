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
  } from '@chakra-ui/react'
  import React, { useEffect, useState } from 'react'
import CreateQuizInput from './CreateQuizInput'
import QuizDetails from './QuizDetails'
import { useQuizzes } from './../context/QuizContext';


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


  function CreateModal({ update, show, content }) {
    //const { isOpen, onOpen, onClose } = useDisclosure()
    const { setQuizzes } = useQuizzes()
    const [current, setCurrent] = useState({
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
                    <Box key={'input-1'}>
                        <CreateQuizInput 
                            placeholder={'Quiz Title'}
                            heading={'Title'}
                            update={handleUpdate}
                            field={'title'}
                            isSubmit={isSubmit}
                        />
                    </Box>
                    <Box key={'input-2'}>
                        <CreateQuizInput 
                            placeholder={'Quiz Topic'}
                            heading={'Topic'}
                            update={handleUpdate}
                            field={'topic'}
                            isSubmit={isSubmit}
                        />
                    </Box>
                    <Box key={'input-3'}>
                        <CreateQuizInput 
                            placeholder={'Question amount'}
                            heading={'Questions'}
                            update={handleUpdate}
                            field={'questionCount'}
                            isSubmit={isSubmit}
                        />
                    </Box>
                    <Box key={'input-4'}>
                        <CreateQuizInput 
                            placeholder={'Quiz Due Date'}
                            heading={'Due Date'}
                            update={handleUpdate}
                            field={'dueDate'}
                            isSubmit={isSubmit}
                        />
                    </Box>
                    <Box key={'input-5'}>
                        <CreateQuizInput 
                            placeholder={'Quiz Details'}
                            heading={'Details'}
                            update={handleUpdate}
                            field={'details'}
                            isSubmit={isSubmit}
                        />
                    </Box>
            </ModalBody>
  
            <ModalFooter>
              <Button background='primary' color={'light'} _hover={{ bg: 'primaryLight' }} mr={3} onClick={() => update(false)}>
                Close
              </Button>
              <Button variant='ghost' bg={'primary'} color={'light'} _hover={{ bg: 'primaryLight' }}
                onClick={() => {
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