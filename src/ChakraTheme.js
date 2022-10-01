import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

export default function ChakraTheme({ children }) {
  return (
    <ChakraProvider>
      { children }
    </ChakraProvider>
  )
}