import React, { memo } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import MenuIcon from './MenuIcon';
import { Flex, Box } from '../styles';

export default memo(() => (
  <Flex height="100%" overflow="hidden">
    <Box width={['100%', '100%', '50%', '35%']}>
      <Sidebar />
    </Box>
    <Box width={['100%', '100%', '50%', '65%']}>
      <MenuIcon />
      <Main />
    </Box>
  </Flex>
));
