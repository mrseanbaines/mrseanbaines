import React, { memo } from 'react';
import Sidebar from './Sidebar';
import { Flex, Box } from '../styles';

export default memo(() => (
  <Flex height="100%">
    <Box width={['100%', '100%', '50%', '35%']}>
      <Sidebar />
    </Box>
  </Flex>
));
