import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './CustomTheme'

export default function ChakraTheme({ children }) {
  return (
    <ChakraProvider theme={theme}>
      { children }
    </ChakraProvider>
  )
}