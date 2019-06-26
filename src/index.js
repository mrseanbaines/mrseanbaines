import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import App from './components/App';
import theme from './styles/theme';

render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      <App />
    </Fragment>
  </ThemeProvider>,
  document.getElementById('root')
);
