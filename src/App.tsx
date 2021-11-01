import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const AppWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  font-family: Hack, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
`;

export const theme = {
  colors: {
    // default colors
    background: '#1e2127',
    foreground: '#abb2bf',
    bright_foreground: '#e6efff',

    black: '#1e2127',
    red: '#e06c75',
    green: '#98c379',
    yellow: '#d19a66',
    blue: '#61afef',
    magenta: '#c678dd',
    cyan: '#56b6c2',
    white: '#828791',
  },
};

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <h1>
        <span style={{ color: theme.colors.green }}>{'> '}</span>
        Operator
      </h1>
    </AppWrapper>
  </ThemeProvider>
);

export default App;
