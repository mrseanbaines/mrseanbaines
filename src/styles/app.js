import styled from 'styled-components';
import { Box } from './';

export const SlidingBox = styled(Box)`
  &.slide-enter {
    margin-left: -90%;
  }

  &.slide-enter-active,
  &.slide-enter-done {
    margin-left: 0;
    transition: all 300ms cubic-bezier(0, 0, 0, 1);
  }

  &.slide-exit {
    margin-left: 0;
  }

  &.slide-exit-active,
  &.slide-exit-done {
    margin-left: -90%;
    transition: all 300ms cubic-bezier(0, 0, 0, 1);
  }
`;
