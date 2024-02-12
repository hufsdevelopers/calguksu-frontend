'use client';
import React, { ReactNode } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { feedbackModalState } from '@/states/feedbackModalState';
import FeedbackModal from '../components/common/Modal/FeedbackModal';

const AppModalProvider = ({ children }: { children: ReactNode }) => {
  const [feedbackModal, setFeedbackModal] = useRecoilState(feedbackModalState);

  return (
    <>
      {children}
      <FeedbackModal isOpen={feedbackModal} onClose={() => setFeedbackModal(false)} />
    </>
  );
};

export default AppModalProvider;