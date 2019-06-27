import styled, { css } from 'styled-components';

export const StyledSidebar = styled.aside(props => {
  const { colors } = props.theme;

  return css`
    background: ${colors.white};
    text-align: right;
    height: 100%;
  `;
});

export const SocialLinks = styled.ul(props => {
  const { colors } = props.theme;

  return css`
    margin: 0 -0.25rem;

    li {
      display: inline-block;
      margin: 0 0.25rem;
      perspective: 50px;

      a {
        color: ${colors.greys.medium};
        transition: all 100ms;
        font-size: 1.2rem;

        :hover {
          color: ${colors.greys.dark};
        }
      }
    }
  `;
});
