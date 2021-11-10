import { useUpdateAtom } from 'jotai/utils';
import React from 'react';
import { Stage, stageAtom } from '../components/StageRouter';
import useTypedText from '../components/TypedText';
import theme from '../theme';
import randomInt from '../utils';

const errors = [
  'Unexpected exception from EarthUplinkService',
  'Solar radiaton close to lethal threshold',
  'Ion shield power failure',
  'Telemetry heartbeat signal timed out',
  'Engine temperature out of bounds',
  'Main bus B undervoltage',
  'Failed to reboot from backup',
  'Memory corruption detected',
  'Failover not responding',
  'Connection to auxiliary systems down',
  'Core temperature limit exceeded',
  'Hull breach detected',
  'Leak detected in human cryo storage module',
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
  const [loadingDots, loadingDotsDone] = useTypedText('...', errorDone, 500);
  const [prompt, promptDone] = useTypedText('>', loadingDotsDone, 500);
  const [command] = useTypedText(
    'systemctl restart autopilot.service',
    promptDone,
  );

  return (
    <>
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
            paddingBottom: '3rem',
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
    </>
  );
};

export default IntroStage;
