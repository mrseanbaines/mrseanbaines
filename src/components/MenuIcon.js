import React, { memo } from 'react';
import { StyledMenuIcon, MenuIconBar } from '../styles';

export default memo(() => (
  <StyledMenuIcon>
    <MenuIconBar />
    <MenuIconBar />
    <MenuIconBar />
  </StyledMenuIcon>
));
