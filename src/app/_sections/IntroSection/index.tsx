import React from 'react';

import useFullyFlow from '@/components/common/FullyFlow/FullyFlow.hooks';

import styled from 'styled-components';
import Button from '@/components/common/Button';
import { media, SectionInnerContainer } from '@/styles/ui.styles';
import { IntroImageBlock, IntroImage, IntroSubTitle, IntroTitle } from '@/app/_sections/IntroSection/Intro.styles';

export default function IntroduceSection() {
  const { moveDown } = useFullyFlow();

  return (
    <IntroSectionInnerContainer>
      <IntroImageBlock>
        <IntroImage />
      </IntroImageBlock>
      <IntroTitle>내 캘린더 속 학사일정</IntroTitle>
      <IntroSubTitle>
        등록 한 번으로 캘린더 앱에 자동으로 업데이트되어
        <br />
        편리하게 일정을 관리할 수 있어요.
      </IntroSubTitle>
      <Button onClick={moveDown} style={{ marginTop: '37px' }}>
        일정 고르기
      </Button>
    </IntroSectionInnerContainer>
  );
}

const IntroSectionInnerContainer = styled(SectionInnerContainer)`
  justify-content: start;

  ${media.laptop`
    justify-content: center;
  `}
`;
