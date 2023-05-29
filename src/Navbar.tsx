import {
  TabList,
  Tabs,
  Tab,
  Text,
  Center,
  Flex,
  chakra,
  Hide,
  Show,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import Hamburger from './Hamburger';
const Navbar = () => {
  // Name text
  // Navbar style
  // Contact Text
  return (
    <chakra.header id="header">
      <Flex w={'100%'} py={4} px={4} justify={'space-between'}>
        <Center>
          <Hide below="md">
            <Text style={{ whiteSpace: 'nowrap' }}>Tien Tran</Text>
          </Hide>
          <Hamburger />
        </Center>

        <Hide below="sm">
          <Center width={'100%'}>
            <Tabs
              variant={'soft-rounded'}
              // colorScheme={'whiteAlpha'}
            >
              <TabList
                bgColor={'blackAlpha.100'}
                py={1}
                px={1}
                borderRadius={24}
              >
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
          </Center>
        </Hide>
        {/* hide when mobile breakpoint */}
        <Show above="md">
          <Center>
            <ColorModeSwitcher />
            <Text>Contact</Text>
          </Center>
        </Show>
      </Flex>
    </chakra.header>
  );
};

export default Navbar;
