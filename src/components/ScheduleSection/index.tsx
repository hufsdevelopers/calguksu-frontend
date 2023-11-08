import React from 'react';
import useFullyFlow from '@/components/common/FullyFlow/FullyFlow.hooks';

import Button from '@/components/common/Button';
import Select from '@/components/common/Select';
import { SectionContentColumn, SectionContentTitle, SectionInnerContainer } from '@/styles/ui.styles';
import { CalendarOptionType } from '@/types/select-types';

const options: CalendarOptionType[] = [
  {
    icon: '/static/assets/icon-hufs.svg',
    code: 'hufs',
    name: '한국외국어대학교',
    type: '학사일정',
  },
  {
    icon: '/static/assets/icon-uos.svg',
    code: 'uos',
    name: '서울시립대학교',
    type: '학사일정',
  },
  {
    icon: '/static/assets/icon-khu.svg',
    code: 'khu',
    name: '경희대학교',
    type: '학사일정',
  },
];

interface IntroduceSectionProps {
  selectedCode: string | null;
  setSelectedCode: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function IntroduceSection({ selectedCode, setSelectedCode }: IntroduceSectionProps) {
  const { moveDown } = useFullyFlow();

  return <SectionInnerContainer>
    <SectionContentColumn>
      <SectionContentTitle>
        <p>🛒</p>
        <p>일정을 골라요</p>
      </SectionContentTitle>
      <Select options={options} selected={selectedCode} onSelect={setSelectedCode} />
      <Button width='100%' onClick={() => {
        if (selectedCode) moveDown();
      }} aria-invalid={!selectedCode}>선택</Button>
    </SectionContentColumn>
  </SectionInnerContainer>;
}