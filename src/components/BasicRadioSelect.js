import { FormControl, FormHelperText, FormLabel, Radio, RadioGroup, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function BasicRadioSelect({ id, helperText, question, defaultValue, options, field }) {
    const selections = ['A','B','C','D','E','F','G','H','I','J','K']
    //const optionLabels = Object.keys(options[0].options[index])
    //console.log('LABELS: ',optionLabels)
    //console.log('OPTIONS: ', options[0].options)
    const ops = options[0].options
    console.log(ops)
    return (
        <FormControl as="fieldset">
            <FormLabel as="legend" fontSize={'1.65rem'} height={50} mb={8}>{question}</FormLabel>
            <RadioGroup defaultValue={defaultValue || ''} ml={2}>
                <SimpleGrid columns={2} spacing={10}>
                {ops.map((question, index) =>
                    <Radio key={index} value={index}>
                        <Text fontSize={'1.25rem'}>{`${selections[index]}. ${ question[Object.keys(question)]['input'] }`}</Text>
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