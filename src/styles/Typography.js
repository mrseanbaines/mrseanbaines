import styled, { css } from 'styled-components';
import { color } from 'styled-system';

export const H1 = styled.h1(props => {
  const { fonts, fontWeights } = props.theme;

  return css`
    ${color};
    font-family: ${fonts.display};
    font-size: 3rem;
    font-weight: ${fontWeights.black};
    line-height: calc(1em + 1rem);
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
    line-height: calc(1em + 0.5rem);
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
    line-height: calc(1em + 0.5rem);
  `;
});

H6.defaultProps = {
  color: 'greys.dark',
};
