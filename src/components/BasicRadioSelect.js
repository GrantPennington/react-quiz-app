import { FormControl, FormHelperText, FormLabel, Radio, RadioGroup } from '@chakra-ui/react'
import React from 'react'

function BasicRadioSelect({ id, helperText, question, defaultValue, questionList }) {
  return (
    <FormControl as="fieldset">
        <FormLabel as="legend">{question}</FormLabel>
        <RadioGroup defaultValue={defaultValue}>
            {questionList.map((question, index) => 
                <Radio key={index} value={question.value}>{question.value}</Radio>
            )}
        </RadioGroup>
        <FormHelperText id={id}>
            {helperText}
        </FormHelperText>
    </FormControl>
  )
}

export default BasicRadioSelect