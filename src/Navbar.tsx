import React from 'react';
import {
  HStack,
  Box,
  TabList,
  Tabs,
  Tab,
  Text,
  Center,
  Flex,
  chakra,
  background,
} from '@chakra-ui/react';

const Navbar = () => {
  // Name text
  // Navbar style
  // Contact Text
  return (
    <chakra.header id="header">
      <Flex w={'100%'} py={4} px={4} justify={'space-between'}>
        <Center>
          <Text display={'inline'}>Tien Tran</Text>
        </Center>
        {/* <Center w={'100%'}> */}
        <Tabs
          variant={'soft-rounded'}
          // colorScheme={'whiteAlpha'}
        >
          <TabList bgColor={'blackAlpha.100'} py={1} px={1} borderRadius={24}>
            <Tab
              _selected={{
                textColor: 'black',
                bg: 'white',
              }}
            >
              Home
            </Tab>
            <Tab
              _selected={{
                textColor: 'black',
                bg: 'white',
              }}
            >
              About
            </Tab>
            <Tab
              _selected={{
                textColor: 'black',
                bg: 'white',
              }}
            >
              Bookmarks
            </Tab>
            <Tab
              _selected={{
                textColor: 'black',
                bg: 'white',
              }}
            >
              Projects
            </Tab>
          </TabList>
        </Tabs>
        <Center>
          <Text>Contact</Text>
        </Center>
      </Flex>
    </chakra.header>
  );
};

export default Navbar;
