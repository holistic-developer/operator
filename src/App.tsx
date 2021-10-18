import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const CodeBlock = styled.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
`;

const AppWrapper = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const App: React.FC = () => (
  <AppWrapper>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        <CodeBlock>src/App.tsx</CodeBlock>
        and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </AppWrapper>
);

export default App;
