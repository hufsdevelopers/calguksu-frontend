'use client';
import React from 'react';

import FullyFlow from '@/components/common/FullyFlow';
import FullyFlowSection from '@/components/common/FullyFlow/FullyFlowSection';

import IntroduceSection from '../components/IntroSection';
import ScheduleSection from '@/components/ScheduleSection';
import SubscribeSection from '@/components/SubscribeSection';
import CompleteSection from '@/components/CompleteSection';

import { GradientOval } from '@/styles/ui.styles';
import Header from '@/components/common/Header';
import ToastComponent from '@/components/common/Toast/ToastComponent';

export default function Home() {
  return (<>
      <Header />
      <GradientOval />
      <FullyFlow>
        <FullyFlowSection><IntroduceSection /></FullyFlowSection>
        <FullyFlowSection><ScheduleSection /></FullyFlowSection>
        <FullyFlowSection><SubscribeSection /></FullyFlowSection>
        <FullyFlowSection><CompleteSection /></FullyFlowSection>
      </FullyFlow>
      <ToastComponent />
    </>
  );
}