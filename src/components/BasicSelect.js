import { Select } from '@chakra-ui/react'
import React, { useState } from 'react'

function BasicSelect({ placeholder, options, update }) {
    const [selected, setSelected] = useState('')

    const handleChange = (e) => {
        setSelected(e.target.value)
        update(e.target.value)
    }

    return (
        <>
        <Select placeholder={placeholder} onChange={(e) => handleChange(e)}>
            {options.map((item, index) => 
                <option key={index} value={item}>{item}</option>
            )}
        </Select>
        </>
    )
}

export default BasicSelect