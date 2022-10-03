export const CREATE_QUIZ_INPUT_DATA = [
    {
        id: 'quiz-title-input',
        placeholder: 'Quiz Title',
        heading: 'Title',
        field: 'title',
    },
    {
        id: 'quiz-topic-input',
        placeholder: 'Quiz Topic',
        heading: 'Topic',
        field: 'topic',
    },
    {
        id: 'quiz-due-date-input',
        placeholder: 'Quiz Due Date',
        heading: 'Due Date',
        field: 'dueDate',
    },
    {
        id: 'quiz-details-input',
        placeholder: 'Quiz Details',
        heading: 'Details',
        field: 'details',
    },
];

export const QUESTION_TAB_PANEL_DATA = [
    {  
        label: 'Question 1',
        id: 'question-1',
        question: "What is Grant's favorite color?",
        helperText: 'Select one of the above options',
        options: [ 'Blue', 'Orange', 'Green', 'Purple' ],
    }
];
/*
id={tab.id}
                                helperText={tab.helperText} 
                                question={tab.question} 
                                options={tab.options}
<Box key={'input-1'}>
                        <CreateQuizInput 
                            placeholder={'Quiz Title'}
                            heading={'Title'}
                            update={handleUpdate}
                            field={'title'}
                        />
                    </Box>
                    <Box key={'input-2'}>
                        <CreateQuizInput 
                            placeholder={'Quiz Topic'}
                            heading={'Topic'}
                            update={handleUpdate}
                            field={'topic'}
                        />
                    </Box>
                    <Box key={'input-3'}>
                        <CreateQuizInput 
                            placeholder={'Question amount'}
                            variant="filled"
                            heading={'Questions'}
                            update={handleUpdate}
                            field={'questionCount'}
                        />
                    </Box>
                    <Box key={'input-4'}>
                        <CreateQuizInput 
                            placeholder={'Quiz Due Date'}
                            heading={'Due Date'}
                            update={handleUpdate}
                            field={'dueDate'}
                        />
                    </Box>
                    <Box key={'input-5'}>
                        <CreateQuizInput 
                            placeholder={'Quiz Details'}
                            heading={'Details'}
                            update={handleUpdate}
                            field={'details'}
                        />
                    </Box>



*/