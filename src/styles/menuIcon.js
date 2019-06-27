import styled, { css } from 'styled-components';

export const StyledMenuIcon = styled.button(props => {
  const { breakpoints } = props.theme;

  return css`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    margin: 1.5rem;
    position: fixed;
    top: 0;
    left: 0;

    @media (min-width: ${breakpoints[1]}) {
      display: none;
    }
  `;
});

export const MenuIconBar = styled.div(props => {
  const { colors, radii } = props.theme;

  return css`
    background: ${colors.greys.light};
    height: 3px;
    border-radius: ${radii[0]};

    &:nth-child(1) {
      width: 20px;
      margin-left: 2px;
    }

    &:nth-child(2) {
      width: 18px;
    }

    &:nth-child(3) {
      width: 22px;
      margin-left: 2px;
    }

    & + & {
      margin-top: 3px;
    }
  `;
});
