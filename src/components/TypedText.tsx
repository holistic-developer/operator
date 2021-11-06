import { useEffect, useState } from 'react';

const letterMeanDelayMs = 50;
const letterDelyDeviation = 30;

const useTypedText = (text: string, type = true): [string, boolean] => {
  const [terminalOutput, setTerminalOutput] = useState('');

  useEffect(() => {
    if (type && terminalOutput.length < text.length) {
      setTimeout(() => {
        setTerminalOutput(terminalOutput + text.charAt(terminalOutput.length));
      }, Math.sign(Math.random() - 0.5) * Math.random() * letterDelyDeviation + letterMeanDelayMs);
    }
  }, [terminalOutput, setTerminalOutput, type]);
  return [terminalOutput, terminalOutput.length === text.length];
};

export default useTypedText;
