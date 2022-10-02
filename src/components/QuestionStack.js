import { Box, Heading, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import BasicRadioSelect from './BasicRadioSelect'

function QuestionStack({ height }) {
    const options = [ 'Blue', 'Orange', 'Green', 'Purple' ]
    return (
        <>
            <Tabs variant="enclosed" orientation='vertical'>
                <TabList>
                    <Tab width={'100%'}>
                        <Box bg="tomato" height={height}>Question 1</Box>
                    </Tab>
                    <Tab width={184}>
                        <Box bg="tomato" height={height}>Question 2</Box>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Box width={600} height={500} bg={'primary'}>
                            <Heading>Question 1</Heading>
                            <BasicRadioSelect 
                                id={'question-1'}
                                helperText={'Select one of the follow'} 
                                question={"What is Grant's favorite color?"} 
                                options={options}
                            />
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default QuestionStack