import { ChakraProvider, theme } from '@chakra-ui/react';

import Navbar from './Navbar';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
  </ChakraProvider>
);
