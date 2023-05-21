import * as React from "react"
import {
  ChakraProvider,
  theme,
  Box
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Navbar from "./Navbar"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar/>
    <ColorModeSwitcher/>    
    {/* <Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" /> */}

  </ChakraProvider>
)
