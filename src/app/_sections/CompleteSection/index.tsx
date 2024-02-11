import useFullyFlow from '@/components/common/FullyFlow/FullyFlow.hooks';
import { requestEmailSubscription } from '@/utils/calendar-utils';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { agreedPrivacyPolicyState, inputEmailState, selectedCalendarOptionState } from '@/states/calendarState';

import Tombstone from '../../../components/Tombstone';
import {
  SectionComment, SectionCommentHighlight, SectionContentColumn, SectionContentTitle, SectionInnerContainer,
} from '@/styles/ui.styles';
import { CompleteInnerHighlight, CompleteText } from '@/app/_sections/CompleteSection/Complete.styles';
import NavigationButton from '@/components/common/Button/NavigationButton';

export default function CompleteSection() {
  const { moveToTop } = useFullyFlow();

  const [selectedCalendarOption, setSelectedCalendarOption] = useRecoilState(selectedCalendarOptionState);
  const [inputEmail, setInputEmail] = useRecoilState(inputEmailState);
  const setAgreedPrivacyPolicy = useSetRecoilState(agreedPrivacyPolicyState);

  const ResetInputContext = () => {
    setSelectedCalendarOption(null);
    setInputEmail('');
    setAgreedPrivacyPolicy(false);
  };

  return <SectionInnerContainer>
    {selectedCalendarOption
      ? <SectionContentColumn>
        <SectionContentTitle>
          <p>🍜</p>
          <p>다 됐어요</p>
        </SectionContentTitle>
        <CompleteText>
          <CompleteInnerHighlight>haklee.googl@gmail.com</CompleteInnerHighlight>로 주문 하신<br />
          {selectedCalendarOption.name} {selectedCalendarOption.type}을 배달했어요
        </CompleteText>
        <SectionComment style={{ marginTop: 0 }}>메일함에서 찾을수 없나요? 다시 보내려면&nbsp;
          <SectionCommentHighlight onClick={() => {
            requestEmailSubscription(inputEmail, selectedCalendarOption?.code).then(r => {
            });
          }}>이곳</SectionCommentHighlight>을 클릭하세요.</SectionComment>
      </SectionContentColumn>
      : <>
        <Tombstone title="오류" subtitle="일시적인 문제가 발생했어요" />
        <NavigationButton style={{ marginTop: '24px' }} onClick={() => {
          moveToTop();
          ResetInputContext();
        }}>처음으로 돌아가기</NavigationButton>
      </>}
  </SectionInnerContainer>;
}