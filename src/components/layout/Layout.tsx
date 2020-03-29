/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';
import Global from '../styled/Global';
import Navbar from '../styled/nav/Nav';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global />
    <Navbar />
    <main id="MainApp">
      {children}
    </main>
  </ThemeProvider>
);
export default Layout;
