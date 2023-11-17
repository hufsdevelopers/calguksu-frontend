import React from 'react';
import Link from 'next/link';

import useFullyFlow from '@/components/common/FullyFlow/FullyFlow.hooks';
import useInputContext from '@/hooks/useInputContext';
import useTheme from '@/components/common/Theme/Theme.hooks';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Checkbox from '@/components/common/Checkbox';
import { InputContainer } from '@/components/SubscribeSection/Subscribe.styles';

import {
  SectionComment,
  SectionCommentHighlight,
  SectionContentColumn,
  SectionContentTitle,
  SectionInnerContainer,
} from '@/styles/ui.styles';

export default function Index() {
  const { theme } = useTheme();
  const { moveDown } = useFullyFlow();
  const { inputtedEmail, setInputtedEmail, privacyAgree, setPrivacyAgree } = useInputContext();

  const validateEmail = (email: string): boolean => {
    const re: RegExp = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

  const isEmailInvalid = inputtedEmail.length > 0 && !validateEmail(inputtedEmail);

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
          value={inputtedEmail}
          onChange={(e) => setInputtedEmail(e.target.value)}
        />
        <Checkbox checked={privacyAgree}
                  label='훕스디벨로퍼스의 새로운 소식을 이메일로 받기'
                  markColor={privacyAgree ? '#FFFFFF'
                    : theme === 'dark' ? '#818285' : '#FAFAFA'}
                  onClick={() => {
                    setPrivacyAgree(!privacyAgree);
                    console.log(privacyAgree);
                  }} />
      </InputContainer>
      <Button width='100%' onClick={() => {
        if (validateEmail(inputtedEmail)) moveDown();
      }} aria-invalid={!validateEmail(inputtedEmail)}>여기로 받을게요</Button>
      <SectionComment>진행하면 칼국수닷컴의&nbsp;
        <SectionCommentHighlight as={Link} href='/policies/privacy' target='_blank'>개인정보처리방침</SectionCommentHighlight>에
        동의하는 것으로 간주합니다.</SectionComment>
    </SectionContentColumn>
  </SectionInnerContainer>;
}