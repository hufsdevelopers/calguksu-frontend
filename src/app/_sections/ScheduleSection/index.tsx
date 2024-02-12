import React from 'react';
import useFullyFlow from '@/components/ui/FullyFlow/FullyFlow.hooks';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { selectedCalendarOptionState } from '@/states/calendarState';

import Button from '@/components/common/Button';
import Select from '../../../components/common/Select';
import {
  SectionComment, SectionCommentHighlight, SectionContentColumn, SectionContentTitle, SectionInnerContainer,
} from '@/styles/ui.styles';

import { CalendarOptionType } from '@/types/calendar-types';
import { feedbackModalState } from '@/states/feedbackModalState';

const options: CalendarOptionType[] = [
  {
    icon: '/static/assets/Icon-hufs.svg',
    code: 'hufsofficial',
    name: '한국외국어대학교',
    type: '학사일정',
  },
  // {
  //   Icon: '/static/assets/Icon-uos.svg',
  //   code: 'uos',
  //   name: '서울시립대학교',
  //   type: '학사일정',
  // },
  // {
  //   Icon: '/static/assets/Icon-khu.svg',
  //   code: 'khu',
  //   name: '경희대학교',
  //   type: '학사일정',
  // },
];

export default function IntroduceSection() {
  const { moveDown } = useFullyFlow();
  const setFeedbackModal = useSetRecoilState(feedbackModalState);
  const [selectedCalendarOption, setSelectedCalendarOption] = useRecoilState(selectedCalendarOptionState);

  return <SectionInnerContainer>
    <SectionContentColumn>
      <SectionContentTitle>
        <p>🛒</p>
        <p>일정을 골라요</p>
      </SectionContentTitle>
      <Select options={options} selected={selectedCalendarOption?.code || null} onSelect={setSelectedCalendarOption} />
      <Button width="100%" onClick={() => {
        if (selectedCalendarOption) moveDown();
      }} aria-invalid={!selectedCalendarOption}>선택</Button>
      <SectionComment>찾고있는 학교가 없다면&nbsp;
        <SectionCommentHighlight onClick={() => setFeedbackModal(true)}>이쪽</SectionCommentHighlight>
        에서 신청하세요.
      </SectionComment>
    </SectionContentColumn>
  </SectionInnerContainer>;
}