import React, { useState, useRef, useEffect, useCallback } from 'react';

import { Dropdown, Placeholder, SelectContainer } from '@/components/common/Select/Select.styles';
import { CalendarOptionType } from '@/types/select-types';
import OptionComponent from '@/components/common/Select/OptionComponent';
import { ArrowDownRadioIcon, ArrowUpRadioIcon } from '@/components/common/icon/arrow-radio-icon';

interface CustomSelectProps {
  options: CalendarOptionType[];
  onSelect: (value: string) => void;
}

const Select: React.FC<CustomSelectProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectOption = useCallback((code: string) => {
    setSelectedValue(code);
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
        {selectedValue
          ? <OptionComponent
            option={options.find(option => option.code === selectedValue)}
            onClick={() => undefined}
            hover={false} />
          : <span>선택하세요</span>}
        {isOpen ? <ArrowUpRadioIcon width={10} height={7} fill='#828689' />
          : <ArrowDownRadioIcon width={10} height={7} fill='#828689' />}
      </Placeholder>
      <Dropdown $isOpen={isOpen}>
        {options.map((option) => (
          <OptionComponent
            key={option.code}
            option={option}
            onClick={() => handleSelectOption(option.code)} />
        ))}
      </Dropdown>
    </SelectContainer>
  );
};

export default Select;