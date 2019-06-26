import styled, { css } from 'styled-components';
import { color } from 'styled-system';

export const H1 = styled.h1(props => {
  const { fonts, fontWeights } = props.theme;

  return css`
    ${color};
    font-family: ${fonts.display};
    font-size: 3rem;
    font-weight: ${fontWeights.black};
  `;
});

H1.defaultProps = {
  color: 'greys.dark',
};

export const P = styled.p(props => {
  const { fonts, fontWeights } = props.theme;

  return css`
    ${color};
    font-family: ${fonts.main};
    font-size: 1rem;
    font-weight: ${fontWeights.regular};
  `;
});

P.defaultProps = {
  color: 'greys.medium',
};

export const H6 = styled.h6(props => {
  const { fonts, fontWeights } = props.theme;

  return css`
    ${color};
    font-family: ${fonts.main};
    font-size: 1rem;
    font-weight: ${fontWeights.bold};
  `;
});

H6.defaultProps = {
  color: 'greys.dark',
};
