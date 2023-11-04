import React from 'react';

import useFullyFlow from '@/components/common/FullyFlow/FullyFlow.hooks';
import Button from '@/components/common/Button';
import { IntroImageBlock, IntroImageObject, IntroSubTitle, IntroTitle } from '@/components/IntroSection/Intro.styles';
import { SectionInnerContainer } from '@/styles/ui.styles';
import { useTheme } from '@/components/common/Theme/Theme.hooks';

export default function IntroduceSection() {
  const { moveDown } = useFullyFlow();
  const { theme } = useTheme();

  return <SectionInnerContainer>
    <IntroImageBlock>
      {theme !== 'undefined' && <IntroImageObject data={theme === 'light'
        ? '/static/assets/image-sample-calendar-day.svg'
        : '/static/assets/image-sample-calendar.svg'} />}
    </IntroImageBlock>
    <IntroTitle>어떤 일정이든 가입 없이 빠르게</IntroTitle>
    <IntroSubTitle>등록 한 번으로 캘린더 앱에 자동으로 업데이트되어 편리하게 일정을 관리할 수 있어요.<br />
      물론 모든 서비스는 무료로 제공되고 가입도 필요 없어요.</IntroSubTitle>
    <Button onClick={moveDown} style={{ marginTop:'37px' }}>일정 고르기</Button>
  </SectionInnerContainer>;
}