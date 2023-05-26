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
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Navbar = () => {
  // Name text
  // Navbar style
  // Contact Text
  return (
    <chakra.header id="header">
      <Flex w={'100%'} py={4} px={4} justify={'space-between'}>
        <Center>
          {/* Hamburger Menu */}
          <Hide below="md">
            <Text style={{ whiteSpace: 'nowrap' }}>Tien Tran</Text>
          </Hide>
          <Show below="sm">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label={'Options'}
                variant={'outline'}
                icon={<HamburgerIcon />}
              />
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Bookmarks</MenuItem>
                <MenuItem>Projects</MenuItem>
              </MenuList>
            </Menu>
          </Show>
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
