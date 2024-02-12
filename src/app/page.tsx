'use client';
import React from 'react';

import IntroduceSection from '@/app/_sections/IntroSection';
import ScheduleSection from '@/app/_sections/ScheduleSection';
import SubscribeSection from '@/app/_sections/SubscribeSection';
import CompleteSection from '@/app/_sections/CompleteSection';

import { GradientOval } from '@/styles/ui.styles';
import Header from '@/components/layout/Header';
import FullyFlow from '@/components/ui/FullyFlow';
import FullyFlowSection from '@/components/ui/FullyFlow/FullyFlowSection';
import useScreenSize from '@/hooks/useScreenSize';

export default function HomePage() {
  useScreenSize();

  return (
    <>
      <Header />
      <GradientOval />
      <FullyFlow>
        <FullyFlowSection><IntroduceSection /></FullyFlowSection>
        <FullyFlowSection><ScheduleSection /></FullyFlowSection>
        <FullyFlowSection><SubscribeSection /></FullyFlowSection>
        <FullyFlowSection><CompleteSection /></FullyFlowSection>
      </FullyFlow>
    </>
  );
}