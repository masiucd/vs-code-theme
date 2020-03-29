/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';
import Global from '../styled/Global';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global />
    <main id="MainApp">
      {children}
    </main>
  </ThemeProvider>
);
export default Layout;
