import { useUpdateAtom } from 'jotai/utils';
import React from 'react';
import { Stage, stageAtom } from '../components/StageRouter';

const FirstStage: React.FC = () => {
  const setStage = useUpdateAtom(stageAtom);
  return (
    <>
      <h1>Under construction</h1>
      <button type="button" onClick={() => setStage(Stage.INTRO)}>
        BACK
      </button>
    </>
  );
};

export default FirstStage;
