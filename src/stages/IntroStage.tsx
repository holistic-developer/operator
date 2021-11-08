import { useUpdateAtom } from 'jotai/utils';
import React from 'react';
import styled from 'styled-components';
import { Stage, stageAtom } from '../components/StageRouter';
import useTypedText from '../components/TypedText';
import randomInt from '../utils';

const Wrapper = styled.div`
  margin: auto;
  width: clamp(50vw, 30em, 100vw);
  display: flex;
  flex-direction: column;
`;

const IntroStage: React.FC = () => {
  const setStage = useUpdateAtom(stageAtom);
  const [line1, line1Done] = useTypedText(`Operator #${randomInt(1000, 9999)}`);
  const [line2, line2Done] = useTypedText(
    'You have been awaken because your assistance is required!',
    line1Done,
  );
  const [line3, line3Done] = useTypedText(
    `The process /usr/bin/autopilot exited with Error: ${randomInt(100, 999)}`,
    line2Done,
  );

  return (
    <Wrapper>
      <h1>{line1}</h1>
      <p>{line2}</p>
      <p>{line3}</p>
      {line3Done && (
        <button type="button" onClick={() => setStage(Stage.START)}>
          Manual override
        </button>
      )}
    </Wrapper>
  );
};

export default IntroStage;
