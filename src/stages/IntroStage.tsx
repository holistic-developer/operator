import { useUpdateAtom } from 'jotai/utils';
import React from 'react';
import styled from 'styled-components';
import { Stage, stageAtom } from '../components/StageRouter';
import useTypedText from '../components/TypedText';
import theme from '../theme';
import randomInt from '../utils';

const Wrapper = styled.div`
  margin: auto;
  width: clamp(50vw, 30em, 100vw);
  display: flex;
  flex-direction: column;
`;

const errors = [
  'Unexpected exception from EarthUplinkService',
  'Solar radiaton exceeding maximum allowed threshold',
];

const IntroStage: React.FC = () => {
  const setStage = useUpdateAtom(stageAtom);
  const [header, headerDone] = useTypedText(
    `Operator #${randomInt(1000, 9999)}`,
  );
  const [call2Action, call2ActionDone] = useTypedText(
    'You have been awakened because your assistance is required!',
    headerDone,
  );
  const [processCrashed, processCrashedDone] = useTypedText(
    'The process /usr/bin/autopilot exited with ',
    call2ActionDone,
  );
  const [errorCode, errorCodeDone] = useTypedText(
    `Error: ${randomInt(100, 999)}`,
    processCrashedDone,
    100,
  );
  const [error, errorDone] = useTypedText(
    errors[randomInt(0, errors.length - 1)],
    errorCodeDone,
  );
  const [loadingDots, loadingDotsDone] = useTypedText('...', errorDone, 1000);
  const [prompt, promptDone] = useTypedText('>', loadingDotsDone, 1000);
  const [command] = useTypedText(
    'systemctl restart autopilot.service',
    promptDone,
  );

  return (
    <Wrapper>
      <h1>{header}</h1>
      <p>{call2Action}</p>
      <p>{processCrashed}</p>
      <p style={{ color: theme.colors.red }}>
        {errorCode} {error}
      </p>
      {!prompt && <p>{loadingDots}</p>}
      {prompt && (
        <button
          type="button"
          onClick={() => setStage(Stage.START)}
          style={{
            margin: 0,
            padding: 0,
            paddingTop: '1rem',
            paddingBottom: '1rem',
            textAlign: 'left',
            fontSize: '1rem',
            cursor: 'pointer',
            color: theme.colors.bright_foreground,
            background: theme.colors.background,
            border: 'none',
          }}
        >
          <span style={{ color: theme.colors.green }}>{'> '}</span>
          <span>{command}</span>
        </button>
      )}
    </Wrapper>
  );
};

export default IntroStage;
