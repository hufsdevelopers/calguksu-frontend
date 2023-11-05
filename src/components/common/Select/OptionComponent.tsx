import React from 'react';
import { CalendarOptionType } from '@/types/select-types';
import { OptionCalendarIcon, OptionCalendarInfo, OptionContainer } from '@/components/common/Select/Select.styles';

interface OptionComponentProps {
  option?: CalendarOptionType;
  onClick: () => void;
  hover?: boolean;
}

const OptionComponent: React.FC<OptionComponentProps> = ({ option, onClick, hover = true }) => {
  return <OptionContainer onClick={onClick} $hover={hover}>
    <OptionCalendarIcon src={option?.icon} />
    <OptionCalendarInfo>
      <h3>{option ? option.name : '선택하세요'}</h3>
      <p>{option && option.type}</p>
    </OptionCalendarInfo>
  </OptionContainer>;
};

export default OptionComponent;