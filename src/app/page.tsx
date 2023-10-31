'use client';
import React from 'react';
import useScreenSize from '@/hooks/useScreenSize';

import FullyFlow from '@/components/common/FullyFlow';
import FullyFlowSection from '@/components/common/FullyFlow/FullyFlowSection';

import IntroduceSection from '@/components/IntroduceSection';
import ScheduleSection from '@/components/ScheduleSection';
import SubscribeSection from '@/components/SubscribeSection';
import CompleteSection from '@/components/CompleteSection';

import { GradientOval } from '@/styles/ui.styles';
import Header from '@/components/common/Header';

export default function Home() {
  useScreenSize();

  return (<>
      <GradientOval />
      <FullyFlow>
        <FullyFlowSection><IntroduceSection /></FullyFlowSection>
        <FullyFlowSection><ScheduleSection /></FullyFlowSection>
        <FullyFlowSection><SubscribeSection /></FullyFlowSection>
        <FullyFlowSection><CompleteSection /></FullyFlowSection>
      </FullyFlow>
      <Header />
    </>
  );
}