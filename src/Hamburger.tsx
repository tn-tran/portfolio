import React, { useState, useRef } from 'react';
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  Show,
  Icon,
  useOutsideClick,
} from '@chakra-ui/react';

import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons';
const Hamburger = () => {
  const hamburgerRef = useRef(null);
  const [icon, setIcon] = useState(true);
  const menuItemStyles = {
    fontSize: '2rem',
  };
  useOutsideClick({
    ref: hamburgerRef,
    handler: () => setIcon(!icon),
  });

  return (
    <Show below="sm">
      <Menu>
        <MenuButton
          // TODO:- Icon switching onClick
          ref={hamburgerRef}
          as={IconButton}
          aria-label={'Options'}
          variant={'outline'}
          onClick={() => setIcon(!icon)}
          isDisabled={!setIcon}
        >
          <Icon as={icon ? HamburgerIcon : SmallCloseIcon} />
        </MenuButton>
        <MenuList paddingX={'2'} marginX={'4'}>
          <MenuItem ref={hamburgerRef} sx={menuItemStyles}>
            Home
          </MenuItem>
          <MenuItem sx={menuItemStyles}>About</MenuItem>
          <MenuItem sx={menuItemStyles}>Bookmarks</MenuItem>
          <MenuItem sx={menuItemStyles}>Projects</MenuItem>
        </MenuList>
      </Menu>
    </Show>
  );
};

export default Hamburger;
