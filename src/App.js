import { Box, Divider, Flex, Grid, Heading } from '@chakra-ui/react';
import './App.css';
import BasicDrawer from './components/BasicDrawer';
import ButtonBase from './components/ButtonBase';
import QuizCard from './components/QuizCard';
import { useHorizontalScroll } from './hooks/useHorizontalScroll';

function App() {
  const scrollRef = useHorizontalScroll()
  const contentGroup = [
    {
      label: 'Algorithms Quiz 1 - CS-330-01',
      topic: 'topic goes here',
      progress: 60,
      questionCount: 50,
      timeLimit: '30 minutes',
      dueDate: 'September 3, 2022'
    },
    {
      label: 'Software Design Quiz 3',
      topic: 'Software Products',
      progress: 16,
      questionCount: 25,
      timeLimit: '20 minutes',
      dueDate: 'September 9, 2022'
    },
    {
      label: 'Spanish Test 2',
      topic: 'Preterite Form',
      progress: 2,
      questionCount: 50,
      timeLimit: '59 minutes',
      dueDate: 'October 1, 2022'
    },
    {
      label: 'Machine Learning',
      topic: 'Mathematical Models',
      progress: 86,
      questionCount: 46,
      timeLimit: '1 hour',
      dueDate: 'September 19, 2022'
    },
  ]

  return (
    <Grid gap={2} autoFlow={"row dense"} justifyContent={'flex-start'} background={'dark'} height={'100vh'} overflowY={'hidden'} ref={scrollRef}>
      <Flex align={'center'} height={500} margin={0} direction={'row'}>
        <Box height={450} m={6}>
          <Heading pb={5} fontSize={'1.75rem'} color='light'>Recents</Heading>
        </Box>
        {contentGroup.map((content, idx) => 
            <Box key={idx} ml={10} mr={10}>
              <QuizCard width={675} height={375} content={content}/>
            </Box>
          )}
      </Flex>
      <Divider />
      <Flex align={'center'} height={500} margin={0} direction={'row'}>
      <Box height={450} m={6}>
        <Heading pb={5} fontSize={'1.75rem'} color='light'>Your Quizzes</Heading>
      </Box>
      {contentGroup.map((content, idx) => 
          <Box key={idx} ml={10} mr={10}>
            <QuizCard width={675} height={400} content={content}/>
          </Box>
        )}
      </Flex>
    </Grid>
  );
}

export default App;
