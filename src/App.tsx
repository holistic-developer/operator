import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import StageRouter from './components/StageRouter';
import theme from './theme';

const AppWrapper = styled.div`
  margin: auto;
  width: clamp(50vw, 30em, 100vw);
  display: flex;
  flex-direction: column;

  * {
    font-size: medium;
    font-family: Hack, monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
`;

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <StageRouter />
    </AppWrapper>
  </ThemeProvider>
);

export default App;
