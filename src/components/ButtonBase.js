import { Button } from '@chakra-ui/react'
import React from 'react'

function ButtonBase() {
  return (
    <>
        <Button size='xl' variant='with-shadow'>
            XL - Shadow
        </Button>
        <Button size='l' variant='solid'>
            Large - Solid
        </Button>
        <Button size='l' variant='with-shadow'>
            Large - Shadow
        </Button>
    </>
  )
}

export default ButtonBase