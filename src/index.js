import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import App from './components/App';
import theme from './styles/theme';
import './scrollSnap';

render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles fontSize={['80%', '90%', '90%', '100%']} />
      <App />
    </Fragment>
  </ThemeProvider>,
  document.getElementById('root')
);
