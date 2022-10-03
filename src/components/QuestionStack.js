import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import BasicRadioSelect from './BasicRadioSelect'
import BasicSelect from './BasicSelect'
import CreateRadioCheck from './CreateRadioCheck';

function QuestionStack({ height, data, updater }) {
    const options = [ 'Blue', 'Orange', 'Green', 'Purple' ]
    const [questionType, setQuestionType] = useState('Radio Check')
    return (
        <>
            <Tabs variant="enclosed" orientation='vertical' height={500}>
                <TabList>
                    {data.map((tab, index) => (
                        <Tab 
                            width={185}
                            key={index}
                        >
                            {tab.label}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                {data.map((tab, index) => (
                    <TabPanel p={2} key={index}>
                        <Box width={700} height={525} bg={'primary'} p={4}>
                            <Flex height={65} justify='center'>
                                <Heading height={75}>{tab.label}</Heading>
                            </Flex>
                            <Flex height={34}>
                                <Text fontSize={'1.25rem'} fontWeight={'bold'}>Question Type</Text>
                            </Flex>
                            <BasicSelect 
                                options={['Radio Check', 'Check Box', 'Fill In', 'Matching']}
                                update={setQuestionType}
                            />
                            <Flex
                                height={350}
                                pt={6}
                                pl={2}
                            >
                            {(questionType==='Radio Check') &&
                                <CreateRadioCheck
                                    id={tab.id}
                                    helperText={tab.helperText} 
                                    question={tab.question}
                                    updater={updater}
                                />           
                            }
                            </Flex>
                        </Box>
                    </TabPanel>
                ))}
                </TabPanels>
            </Tabs>
            <Flex
                justify={"center"}
                align={"center"}
                mt={2}
            >
                <Flex
                    borderRadius={'50%'}
                    height={35}
                    width={35}
                    bg={'primary'}
                    justify={'center'}
                    align={'center'}
                    _hover={{ bg:'primaryLight', cursor:'pointer' }}
                >
                    <AddIcon size={'15px'}/>
                </Flex>
            </Flex>
        </>
    )
}

export default QuestionStack