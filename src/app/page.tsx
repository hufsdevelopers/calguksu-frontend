'use client';
import React from 'react';
import useScreenSize from '@/hooks/useScreenSize';

import FullyFlowProvider from '@/components/full-page/FullyFlowProvider';
import FullyFlowSection from '@/components/full-page/FullyFlowSection';
import GradientHalfOval from '@/components/ui/GradientHalfOval';

import IntroduceSection from '@/components/introduce/IntroduceSection';
import ScheduleSection from '@/components/schedule/ScheduleSection';
import CompleteSection from '@/components/complete/CompleteSection';
import SubscribeSection from '@/components/subscribe/SubscribeSection';

export default function Home() {
  useScreenSize();

  return (<>
      <div style={{ backgroundColor: '#02050A' }}>
        <GradientHalfOval />
        <FullyFlowProvider>
          <FullyFlowSection><IntroduceSection /></FullyFlowSection>
          <FullyFlowSection><ScheduleSection /></FullyFlowSection>
          <FullyFlowSection><SubscribeSection /></FullyFlowSection>
          <FullyFlowSection><CompleteSection /></FullyFlowSection>
        </FullyFlowProvider>
      </div>
    </>
  );
}