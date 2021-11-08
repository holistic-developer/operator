import React from 'react';
import { atomWithStorage, useAtomValue } from 'jotai/utils';
import IntroStage from '../stages/IntroStage';
import FirstStage from '../stages/FirstStage';

// eslint-disable-next-line no-shadow
export enum Stage {
  INTRO = 0,
  START,
}

export const stageAtom = atomWithStorage('stage', Stage.INTRO);

const StageRouter: React.FC = () => {
  const currentStage = useAtomValue(stageAtom);

  switch (currentStage) {
    case Stage.INTRO:
      return <IntroStage />;
    case Stage.START:
      return <FirstStage />;
    default:
      return <h1>I have no idea how you could end up here</h1>;
  }
};

export default StageRouter;
