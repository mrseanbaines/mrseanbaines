import { createGlobalStyle, css } from 'styled-components';
import { fontSize } from 'styled-system';
import reset from './reset';

export default createGlobalStyle(props => {
  const { fonts, fontWeights, colors } = props.theme;

  return css`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display:900|Roboto:400,700&display=swap');
    ${reset};

    :root {
      ${fontSize};
    }

    html,
    body {
      font-family: ${fonts.main};
      font-weight: ${fontWeights.regular};
      color: ${colors.greys.dark};
      background: ${colors.greys.extraLight};
      letter-spacing: 1px;

      &,
      #root {
        height: 100%;
      }
    }
  `;
});
