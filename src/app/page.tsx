'use client';
import React from 'react';
import useScreenSize from '@/hooks/useScreenSize';

import IntroduceSection from '@/app/_sections/IntroSection';
import ScheduleSection from '@/app/_sections/ScheduleSection';
import SubscribeSection from '@/app/_sections/SubscribeSection';
import CompleteSection from '@/app/_sections/CompleteSection';

import Header from '@/components/Header';
import FullyFlow from '@/components/common/FullyFlow';
import FullyFlowSection from '@/components/common/FullyFlow/FullyFlowSection';
import { GradientOval } from '@/styles/ui.styles';

export default function HomePage() {
  useScreenSize();

  return (<>
      <Header />
      {/*<GradientOval />*/}
      <FullyFlow>
        <FullyFlowSection><IntroduceSection /></FullyFlowSection>
        <FullyFlowSection><ScheduleSection /></FullyFlowSection>
        <FullyFlowSection><SubscribeSection /></FullyFlowSection>
        <FullyFlowSection><CompleteSection /></FullyFlowSection>
      </FullyFlow>
    </>
  );
}