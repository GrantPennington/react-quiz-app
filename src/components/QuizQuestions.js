import { Box, Heading, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import BasicRadioSelect from './BasicRadioSelect'

function QuizQuestions({ height, data }) {
    const options = [ 'Blue', 'Orange', 'Green', 'Purple' ]
    return (
        <>
            <Tabs variant="enclosed" orientation='vertical' height={825} bg={'dark'}>
                <TabList>
                    {data.map((tab, index) => (
                        <Tab 
                            width={383}
                            key={index}
                            bg={'light'}
                        >
                            {tab.label}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels >
                {data.map((tab, index) => (
                    <TabPanel p={4} key={index}>
                        <Box width={'100%'} height={795} bg={'primary'} p={10}>   
                            <Heading height={75}>{tab.label}</Heading>
                            <BasicRadioSelect 
                                id={tab.id}
                                helperText={tab.helperText} 
                                question={tab.question} 
                                options={tab.options}
                            />
                        </Box>
                    </TabPanel>
                ))}
                </TabPanels>
            </Tabs>
        </>
    )
}

export default QuizQuestions