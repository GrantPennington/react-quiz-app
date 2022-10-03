import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Radio, RadioGroup, SimpleGrid, slideFadeConfig, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CreateQuizInput from './CreateQuizInput'

function CreateRadioCheck({ id, helperText, question, defaultValue, updater }) {
    const [selected, setSelected] = useState({ id: '', field: '' })
    const [isSelected, setIsSelected] = useState(false)
    const [radio, setRadio] = useState('')
    const [data, setData] = useState({
        label: 'Question 1',
        question: '',
        options: [
            {questionOne: { id: 'answer-input-0', input: '', placeholder: 'ex 1', isAnswer: false } },
            {questionTwo: {id :'answer-input-1', input: '',placeholder: 'ex 2', isAnswer: false } },
            {questionThree: {id :'answer-input-2', input: '',placeholder: 'ex 3', isAnswer: false } },
            {questionFour: {id :'answer-input-3', input: '',placeholder: 'ex 4', isAnswer: false } },
        ],
    })
    const optionData = data.options

    const handleUpdate = (field, value) => {
        setData(() => {
            const updated = {
                ...data,
                [field]: value,
            }
            return updated
        })
    }
    

    useEffect(() => {
        console.log('DATA: ',data)
        console.log('radio: ', radio)
    },[data])

    useEffect(() => {
        let temp = data
        
        temp.options.forEach((item, ind) => {
            let key = Object.keys(item)
            if(selected['field'][0]===key[0]){
                item[key]['isAnswer'] = true
            } else {
                item[key]['isAnswer'] = false
            }
        })
        
        setData((prev) => {
            const updated = {
                ...prev,
                options: temp.options,
            }
            return updated
        })
    }, [selected])

    const handleOptionsUpdate = (field, value, index) => {
        setData((prev) => {
            let temp = []
            prev.options.forEach((element, idx) => {
                if(element[field]!==undefined) {
                    element[field].input = value
                }
                temp.push(element)
            })
            const updated = {
                ...prev,
                options: temp,
            }
            return updated
        })
    }

    const handleInputUpdate = (field, value) => {
        setData(() => {
            const updated = {
                ...data,
                //data.options
                options: [
                    ...data.options,
                    { ...data, field: value, }
                ],
            }
            return updated
        })
    }

    const handleSelect = (id, field) => {
        setSelected({id: id, field: field})
    }


    return (
        <FormControl as="fieldset">
            <FormLabel as="legend" fontSize={'1.65rem'} height={50} mb={8}>
                <CreateQuizInput 
                        id={`question-input`}
                        placeholder={'Example Question'}
                        update={handleUpdate}
                        field={'question'}
                        noHeading={true}
                        width={'630px'}
                        variant={'outlined'}
                />
            </FormLabel>
            <RadioGroup defaultValue={defaultValue || ''} ml={2}>
                <SimpleGrid columns={2} spacing={10}>
                {optionData.map((question, index) => 
                <Flex width={300}>
                    <Radio key={index} value={(question[Object.keys(question)].isAnswer) ? radio : index}
                        onChange={
                            (e) => { handleSelect(question[Object.keys(question)].id, Object.keys(question))
                                    setRadio(e.target.value)
                                  }
                        }
                        isChecked={question[Object.keys(question)].isAnswer}
                        defaultChecked={false}
                    />
                    <Box ml={6}>
                        <CreateQuizInput
                            key={index}
                            id={question[Object.keys(question)].id}
                            placeholder={question[Object.keys(question)].placeholder}
                            update={handleOptionsUpdate}
                            field={Object.keys(question)}
                            index={index}
                            noHeading={true}
                            width={'250px'}
                            variant={'outlined'}
                        />
                    </Box>
                </Flex>
                )}

                </SimpleGrid>
            </RadioGroup>
            <FormHelperText id={id} fontSize={'1.35rem'} mt={6}>
                {'Choose one above to mark it as the answer'}
            </FormHelperText>
            <Flex justify={'flex-end'}>
                <Button mt={3} bg={'primaryLight'} onClick={() => updater('questions', [ data ])}>
                    Create Question
                </Button>
            </Flex>
        </FormControl>
    )
}

export default CreateRadioCheck