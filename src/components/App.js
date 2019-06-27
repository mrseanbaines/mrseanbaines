import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Main from './Main';
import MenuIcon from './MenuIcon';
import { Flex, Box } from '../styles';
import theme from '../styles/theme';

const Foo = styled(Box)`
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

export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.mql = window.matchMedia(`(min-width: ${theme.breakpoints[1]})`);

    this.mql.addListener(this.handleResize);

    this.state = {
      showSidebar: this.mql.matches,
    };
  }

  componentWillUnmount() {
    this.mql.removeListener(this.handleResize);
  }

  handleResize = e => {
    this.setState({ showSidebar: e.matches });
  };

  toggleSidebar = () => {
    this.setState(prev => ({ showSidebar: !prev.showSidebar }));
  };

  render = () => {
    const { showSidebar } = this.state;

    return (
      <>
        <MenuIcon onClick={this.toggleSidebar} />

        <Flex height="100%" overflow="hidden">
          <CSSTransition
            in={showSidebar}
            timeout={300}
            classNames="slide"
            unmountOnExit
          >
            <Foo
              minWidth={['90%', '90%', '50%', '35%']}
              width={['100%', '100%', '50%', '35%']}
            >
              <Sidebar />
            </Foo>
          </CSSTransition>

          <Box
            minWidth={['100%', '100%', '50%', '65%']}
            width={['100%', '100%', '50%', '65%']}
          >
            <Main />
          </Box>
        </Flex>
      </>
    );
  };
}
