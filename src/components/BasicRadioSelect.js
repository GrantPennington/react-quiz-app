import { FormControl, FormHelperText, FormLabel, Radio, RadioGroup, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function BasicRadioSelect({ id, helperText, question, defaultValue, options }) {
    const selections = ['A','B','C','D','E','F','G','H','I','J','K']
    return (
        <FormControl as="fieldset">
            <FormLabel as="legend" fontSize={'1.65rem'} height={50} mb={8}>{question}</FormLabel>
            <RadioGroup defaultValue={defaultValue || ''} ml={2}>
                <SimpleGrid columns={2} spacing={10}>
                {options.map((question, index) => 
                    <Radio key={index} value={question}>
                        <Text fontSize={'1.25rem'}>{`${selections[index]}. ${question}`}</Text>
                    </Radio>
                )}
                </SimpleGrid>
            </RadioGroup>
            <FormHelperText id={id} fontSize={'1.35rem'} mt={6}>
                {helperText}
            </FormHelperText>
        </FormControl>
    )
}

export default BasicRadioSelect