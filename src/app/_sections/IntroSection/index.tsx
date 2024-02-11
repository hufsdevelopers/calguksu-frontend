import React from 'react';

import useFullyFlow from '@/components/FullyFlow/FullyFlow.hooks';

import Button from '@/components/common/Button';
import { IntroImageBlock, IntroImage, IntroSubTitle, IntroTitle } from '@/app/_sections/IntroSection/Intro.styles';
import { SectionInnerContainer } from '@/styles/ui.styles';

export default function IntroduceSection() {
  const { moveDown } = useFullyFlow();

  return <SectionInnerContainer style={{ justifyContent: 'start' }}>
    <IntroImageBlock><IntroImage /></IntroImageBlock>
    <IntroTitle>어떤 일정이든 가입 없이 빠르게</IntroTitle>
    <IntroSubTitle>등록 한 번으로 캘린더 앱에 자동으로 업데이트되어 편리하게 일정을 관리할 수 있어요.<br />
      물론 모든 서비스는 무료로 제공되고 가입도 필요 없어요.</IntroSubTitle>
    <Button onClick={moveDown} style={{ marginTop: '37px' }}>일정 고르기</Button>
  </SectionInnerContainer>;
}