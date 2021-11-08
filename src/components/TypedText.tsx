import { useEffect, useState } from 'react';

const letterMeanDelayMs = 80;
const letterDelyDeviation = 30;

const useTypedText = (text: string, type = true): [string, boolean] => {
  const [terminalOutput, setTerminalOutput] = useState('');

  useEffect(() => {
    if (type && terminalOutput.length < text.length) {
      setTimeout(() => {
        setTerminalOutput(terminalOutput + text.charAt(terminalOutput.length));
      }, Math.random() * (2 * letterDelyDeviation) + (letterMeanDelayMs - letterDelyDeviation));
    }
  }, [terminalOutput, setTerminalOutput, type]);
  return [terminalOutput, terminalOutput.length === text.length];
};

export default useTypedText;
