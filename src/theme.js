import { extendTheme } from '@chakra-ui/react'

const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }

export const theme = extendTheme({ 
    styles: {
        global: {
          // styles for the `body`
          body: {
            bg: 'blackAlpha.900',
            color: "white",
            margin: 0,
            minWidth: "320px",
            minHeight: "100vh",
          },
          // styles for the `a`
          a: {
            color: 'teal.500',
            _hover: {
              textDecoration: 'underline',
            },
          },
        },
      },
 })