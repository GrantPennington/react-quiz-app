import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Flex, Grid, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import BasicDrawer from './components/BasicDrawer';
import ButtonBase from './components/ButtonBase';
import CreateModal from './components/CreateModal';
import QuizCard from './components/QuizCard';
import YourQuizzes from './components/YourQuizzes';
import { QuizProvider } from './context/QuizContext';
import { useHorizontalScroll } from './hooks/useHorizontalScroll';

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false)



  const scrollRef = useHorizontalScroll()
  const contentGroup = [
    {
      label: 'Algorithms Quiz 1 - CS-330-01',
      topic: 'topic goes here',
      progress: 60,
      questionCount: 50,
      timeLimit: '30 minutes',
      dueDate: 'September 3, 2022',
      answered: 0,
      details: 'You have enough time to think clearly and thouroughly about each question. Make sure to be clear and concise with your answers. Good luck!'
    },
    {
      label: 'Software Design Quiz 3',
      topic: 'Software Products',
      progress: 16,
      questionCount: 25,
      timeLimit: '20 minutes',
      dueDate: 'September 9, 2022',
      answered: 0,
      details: 'You have enough time to think clearly and thouroughly about each question. Make sure to be clear and concise with your answers. Good luck!'
    },
    {
      label: 'Spanish Test 2',
      topic: 'Preterite Form',
      progress: 2,
      questionCount: 50,
      timeLimit: '59 minutes',
      dueDate: 'October 1, 2022',
      answered: 0,
      details: 'You have enough time to think clearly and thouroughly about each question. Make sure to be clear and concise with your answers. Good luck!'
    
    },
    {
      label: 'Machine Learning',
      topic: 'Mathematical Models',
      progress: 86,
      questionCount: 46,
      timeLimit: '1 hour',
      dueDate: 'September 19, 2022',
      details: 'You have enough time to think clearly and thouroughly about each question. Make sure to be clear and concise with your answers. Good luck!',
      answered: 0,
    },
  ]

  return (
    <QuizProvider>
      
      <YourQuizzes />
      
    </QuizProvider>
  );
}

export default App;
