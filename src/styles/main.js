import styled from 'styled-components';
import { Box } from './layout';
import { width } from 'styled-system';

export const PreviewImg = styled.img`
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.3);
  ${width};
`;

export const ScrollableContainer = styled(Box)`
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: auto;
`;
