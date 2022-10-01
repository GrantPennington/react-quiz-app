import { Box, Grid } from '@chakra-ui/react';
import './App.css';
import BasicDrawer from './components/BasicDrawer';
import ButtonBase from './components/ButtonBase';
import QuizCard from './components/QuizCard';

function App() {

  const content = {
    label: 'Algorithms Quiz 1 - CS-330-01',
    topic: 'topic goes here',
    progress: 60,
    questionCount: 50,
    timeLimit: '30 minutes',
    dueDate: 'September 3, 2022'
  }
  return (
    <Grid gap={2} autoFlow={"row dense"} justifyContent={'flex-start'} background={'dark'} height={'100vh'}>
      <Box height={450} m={6}>
        <QuizCard width={750} height={450} content={content}/>
      </Box>
    </Grid>
  );
}

export default App;
