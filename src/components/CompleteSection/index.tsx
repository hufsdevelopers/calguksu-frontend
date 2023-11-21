import useFullyFlow from '@/components/common/FullyFlow/FullyFlow.hooks';
import useInputContext from '@/hooks/useInputContext';

import {
  SectionComment,
  SectionCommentHighlight,
  SectionContentColumn,
  SectionContentTitle,
  SectionInnerContainer,
} from '@/styles/ui.styles';
import { CompleteInnerHighlight, CompleteText } from '@/components/CompleteSection/Complete.styles';
import { requestEmailSubscription } from '@/utils/calendar-utils';

export default function CompleteSection() {
  const { moveToTop } = useFullyFlow();
  const { selectedCalendar, inputtedEmail } = useInputContext();

  return <SectionInnerContainer>
    <SectionContentColumn>
      {selectedCalendar ? <>
        <SectionContentTitle>
          <p>🍜</p>
          <p>다 됐어요</p>
        </SectionContentTitle>
        <CompleteText>
          <CompleteInnerHighlight>haklee.googl@gmail.com</CompleteInnerHighlight>로 주문 하신<br />
          {selectedCalendar.name} {selectedCalendar.type}을 배달했어요
        </CompleteText>
        <SectionComment style={{ marginTop: 0 }}>메일함에서 찾을수 없나요? 다시 보내려면&nbsp;
          <SectionCommentHighlight onClick={() => {
            requestEmailSubscription(inputtedEmail, selectedCalendar?.code).then(r => {
            });
          }}>이곳</SectionCommentHighlight>을 클릭하세요.</SectionComment>
      </> : <>오류!</>}
    </SectionContentColumn>
  </SectionInnerContainer>;
}