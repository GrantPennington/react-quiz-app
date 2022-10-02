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
  } from '@chakra-ui/react'
  import React, { useEffect } from 'react'
import QuizDetails from './QuizDetails'


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

  function BasicUsage({ update, show, content }) {
    //const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>  
        <Modal isOpen={show} onClose={() => update(false)} size={'full'} sx={{ height: 600 }}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Quiz Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <QuizDetails 
                    label={content.label}
                    topic={content.topic}
                    progress={content.progress}
                    questionCount={content.questionCount}
                    dueDate={content.dueDate}
                    timeLimit={content.timeLimit}
                    details={content.details}
                    answered={content.answered}
                />
            </ModalBody>
  
            <ModalFooter>
              <Button background='primary' color={'light'} _hover={{ bg: 'primaryLight' }} mr={3} onClick={() => update(false)}>
                Close
              </Button>
              <Button variant='ghost' bg={'primary'} color={'light'} _hover={{ bg: 'primaryLight' }}>Start Quiz</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default BasicUsage