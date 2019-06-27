import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledMenuIcon, MenuIconBar } from '../styles';

const MenuIcon = memo(({ onClick }) => (
  <StyledMenuIcon onClick={onClick}>
    <MenuIconBar />
    <MenuIconBar />
    <MenuIconBar />
  </StyledMenuIcon>
));

MenuIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MenuIcon;
