import { useEffect, useMemo, useState } from 'react';

const defaultCharacterDelay = 60;

const useTypedText = (
  text: string,
  start = true,
  characterDelay = defaultCharacterDelay,
): [string, boolean] => {
  const [terminalOutput, setTerminalOutput] = useState('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const input = useMemo(() => text, []);
  useEffect(() => {
    if (start && terminalOutput.length < input.length) {
      setTimeout(() => {
        setTerminalOutput(
          terminalOutput.concat(input.charAt(terminalOutput.length)),
        );
      }, characterDelay);
    }
  }, [setTerminalOutput, terminalOutput, characterDelay, input, start]);
  return [terminalOutput, terminalOutput.length === input.length];
};

export default useTypedText;
