import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useFullyFlow from '@/components/common/FullyFlow/FullyFlow.hooks';
import { requestEmailSubscription } from '@/utils/calendar-utils';

import { useRecoilState, useRecoilValue } from 'recoil';
import { themeState } from '@/states/themeState';
import { agreedPrivacyPolicyState, inputEmailState, selectedCalendarOptionState } from '@/states/calendarState';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Checkbox from '@/components/common/Checkbox';
import { InputContainer } from '@/app/_sections/SubscribeSection/Subscribe.styles';
import {
  SectionComment, SectionCommentHighlight, SectionContentColumn, SectionContentTitle, SectionInnerContainer,
} from '@/styles/ui.styles';

import { CalendarOptionType } from '@/types/calendar-types';

export default function Index() {
  const { moveDown } = useFullyFlow();

  const theme: string | undefined = useRecoilValue(themeState);
  const selectedCalendarOption: CalendarOptionType | null = useRecoilValue(selectedCalendarOptionState);
  const [inputEmail, setInputEmail] = useRecoilState(inputEmailState);
  const [agreedPrivacyPolicy, setAgreedPrivacyPolicy] = useRecoilState(agreedPrivacyPolicyState);

  const [markColor, setMarkColor] = useState('#FFFFFF');

  useEffect(() => {
    setMarkColor(agreedPrivacyPolicy ? '#FFFFFF' : (theme === undefined || theme == 'light') ? '#FAFAFA' : '#818285');
  }, [agreedPrivacyPolicy, theme]);

  const validateEmail = (email: string): boolean => {
    const re: RegExp = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

  const isEmailInvalid = inputEmail.length > 0 && !validateEmail(inputEmail);

  return <SectionInnerContainer>
    <SectionContentColumn>
      <SectionContentTitle>
        <p>📮</p>
        <p>어디로 보낼까요</p>
      </SectionContentTitle>
      <InputContainer>
        <Input
          invalid={isEmailInvalid}
          label={isEmailInvalid ? '잘못된 이메일 형식이에요' : '배달 받을 이메일 주소'}
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <Checkbox checked={agreedPrivacyPolicy}
                  label="훕스디벨로퍼스의 새로운 소식을 이메일로 받기"
                  markColor={markColor}
                  onClick={() => setAgreedPrivacyPolicy(!agreedPrivacyPolicy)} />
      </InputContainer>
      <Button width="100%" onClick={() => {
        if (validateEmail(inputEmail) && selectedCalendarOption) {
          requestEmailSubscription(inputEmail, selectedCalendarOption.code)
            .catch((e) => {
              console.error(e);
            })
            .finally(() => moveDown());
        }
      }} aria-invalid={!validateEmail(inputEmail)}>여기로 받을게요</Button>
      <SectionComment>진행하면 칼국수닷컴의&nbsp;
        <SectionCommentHighlight as={Link} href="/policies/privacy" target="_blank">개인정보처리방침</SectionCommentHighlight>에
        동의하는 것으로 간주됩니다.</SectionComment>
    </SectionContentColumn>
  </SectionInnerContainer>;
}