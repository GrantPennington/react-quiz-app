import { FormControl, FormHelperText, FormLabel, Radio, RadioGroup, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import CreateQuizInput from './CreateQuizInput'

function CreateRadioCheck({ id, helperText, question, defaultValue }) {
    //const selections = ['A','B','C','D','E','F','G','H','I','J','K']
    const [selected, setSelected] = useState('')
    const [data, setData] = useState({
        question: '',
        options: [
            { placeholder: 'ex 1', value: 'ex-1' },
            { placeholder: 'ex 2', value: 'ex-2' },
            { placeholder: 'ex 3', value: 'ex-3' },
            { placeholder: 'ex 4', value: 'ex-4' },
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

    const handleSelect = (e) => {
        setSelected(e.target.value)
    }


    return (
        <FormControl as="fieldset">
            <FormLabel as="legend" fontSize={'1.65rem'} height={50} mb={8}>
                <CreateQuizInput 
                        id={`question-input`}
                        placeholder={' Example Question'}
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
                    <Radio key={index} value={selected || question.value} isDisabled={false} onClick={handleSelect} isChecked={(selected===question.value)}>
                        <CreateQuizInput 
                            id={`answer-input-${index}`}
                            placeholder={question.placeholder}
                            update={handleUpdate}
                            field={`answer-input-${index}`}
                            noHeading={true}
                            width={'250px'}
                            variant={'outlined'}
                        />
                    </Radio>
                )}
                </SimpleGrid>
            </RadioGroup>
            <FormHelperText id={id} fontSize={'1.35rem'} mt={6}>
                {'Choose one above to mark it as the answer'}
            </FormHelperText>
        </FormControl>
    )
}

export default CreateRadioCheck