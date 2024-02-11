import React, { useState, useRef, useEffect, useCallback } from 'react';

import { Dropdown, Placeholder, SelectContainer } from '@/components/CalendarSelect/Select.styles';
import { CalendarOptionType } from '@/types/calendar-types';
import OptionComponent from '@/components/CalendarSelect/OptionComponent';
import { ArrowDownRadioIcon, ArrowUpRadioIcon } from '@/components/common/icon/arrow-radio-icon';

interface CalendarSelectProps {
  options: CalendarOptionType[];
  selected: string | null;
  onSelect: (value: CalendarOptionType) => void;
}

const CalendarSelect = ({ options, selected, onSelect }: CalendarSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectOption = useCallback((code: CalendarOptionType) => {
    onSelect(code);
    setIsOpen(false);
  }, [onSelect]);

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SelectContainer ref={selectRef}>
      <Placeholder onClick={toggleDropdown}>
        {selected
          ? <OptionComponent
            option={options.find(option => option.code === selected)}
            onClick={() => undefined}
            hover={false} />
          : <span>선택하세요</span>}
        {isOpen ? <ArrowUpRadioIcon width={10} height={7} fill="#828689" />
          : <ArrowDownRadioIcon width={10} height={7} fill="#828689" />}
      </Placeholder>
      <Dropdown $isOpen={isOpen}>
        {options.map((option) => (
          <OptionComponent
            key={option.code}
            option={option}
            onClick={() => handleSelectOption(option)} />
        ))}
      </Dropdown>
    </SelectContainer>
  );
};

export default CalendarSelect;