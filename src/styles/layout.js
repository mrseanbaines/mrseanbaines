import styled from 'styled-components';
import { layout, flexbox, space, color } from 'styled-system';

export const Box = styled.div`
  ${layout};
  ${flexbox};
  ${space};
  ${color};
`;

export const Flex = styled(Box)``;

Flex.defaultProps = {
  display: 'flex',
};
