import { FormControl, FormHelperText, FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react'

function BasicRadioSelect({ id, helperText, question, defaultValue, options }) {
    const selections = ['A','B','C','D','E','F','G','H','I','J','K']
    return (
        <FormControl as="fieldset">
            <FormLabel as="legend" fontSize={'1.65rem'}>{question}</FormLabel>
            <RadioGroup defaultValue={defaultValue || ''}>
                <Stack spacing={2}>
                {options.map((question, index) => 
                    <Radio key={index} value={question}>{`${selections[index]}. ${question}`}</Radio>
                )}
                </Stack>
            </RadioGroup>
            <FormHelperText id={id}>
                {helperText}
            </FormHelperText>
        </FormControl>
    )
}

export default BasicRadioSelect