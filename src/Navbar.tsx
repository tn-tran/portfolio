import React from 'react';
import {
  HStack,
  Box,
  TabList,
  Tabs,
  Tab,
  Text,
  Center,
} from '@chakra-ui/react';
const Navbar = () => {
  // Name text
  // Navbar style
  // Contact Text
  return (
    <HStack bg="white" w="100%"  color="black">
      <HStack >
        <Text display={'inline'}>Tien Tran</Text>
      </HStack>
      {/* <Center w={'100%'}> */}
        <Tabs variant={'soft-rounded'} colorScheme={'blackAlpha'}>
          <TabList>
            <Tab>Home</Tab>
            <Tab>About</Tab>
            <Tab>Bookmarks</Tab>
            <Tab>Projects</Tab>
          </TabList>
        </Tabs>
      {/* </Center> */}
      <HStack>
        <Text>Contact</Text>
      </HStack>
    </HStack>
  );
};

export default Navbar;
