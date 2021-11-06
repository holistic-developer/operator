import { useUpdateAtom } from 'jotai/utils';
import React from 'react';
import { Stage, stageAtom } from './StageRouter';
import useTypedText from './TypedText';

const IntroStage: React.FC = () => {
  const setStage = useUpdateAtom(stageAtom);
  const [header, headerDone] = useTypedText('Operator!');
  const [subtitle, subtitleDone] = useTypedText(
    'Your assistance is requested. Start your console!',
    headerDone,
  );

  return (
    <>
      <h1>{header}</h1>
      <p>{subtitle}</p>
      {subtitleDone && (
        <button type="button" onClick={() => setStage(Stage.START)}>
          START
        </button>
      )}
    </>
  );
};

export default IntroStage;
