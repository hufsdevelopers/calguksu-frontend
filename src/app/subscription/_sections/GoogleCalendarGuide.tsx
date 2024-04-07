import {
  ChangeCalendarButton,
  IntroduceButton,
  GuideSection,
  CalendarSubtitle,
  CalendarTitle,
  GuideTitle,
  GuideSubtitle,
  GuideContent,
  GuideCopyLink,
  GuideCalendarLink,
  GuideVideo,
  ContentInnerSection,
} from '@/app/subscription/page.styles';
import Button from '@/components/common/Button';

interface GoogleCalendarGuideProps {
  cn: string;
  ct: string;
  calendarChangeToggle: () => void;
}

const GoogleCalendarGuide = ({ cn, ct, calendarChangeToggle }: GoogleCalendarGuideProps) => {
  function copyToClipboard() {
    const textField = document.createElement('textarea');
    textField.innerText = `https://api.calguksu.com/calendars/${cn}/subscribe?token=${ct}`;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();

    alert('클립보드에 복사되었습니다.');
  }

  return (
    <ContentInnerSection>
      <IntroduceButton>마지막 단계에요</IntroduceButton>
      <CalendarTitle>구글 캘린더에 추가</CalendarTitle>
      <CalendarSubtitle>
        주문한 일정을 캘린더에 추가할 수 있는 링크를 생성했어요.
        <br />
        아래의 버튼으로 캘린더 앱에 붙여넣을 수 있는 링크를 복사하세요.
      </CalendarSubtitle>
      <Button style={{ marginTop: '80px', width: '100%' }} onClick={copyToClipboard}>
        캘린더 링크 복사
      </Button>
      <ChangeCalendarButton onClick={() => calendarChangeToggle()}>
        애플 캘린더를 사용하고 계신가요?
      </ChangeCalendarButton>
      <GuideSection>
        <GuideTitle>구글 캘린더에 일정을 추가하는 방법</GuideTitle>

        <GuideSubtitle>❶ 캘린더 구독 링크를 복사해주세요</GuideSubtitle>
        <GuideContent>버튼으로 복사가 안된다면 아래의 링크를 직접 복사해주세요</GuideContent>
        <GuideCopyLink>{`https://api.calguksu.com/calendars/${cn}/subscribe?token=${ct}`}</GuideCopyLink>

        <GuideSubtitle>❷ 데스크탑 구글 캘린더에 접속</GuideSubtitle>
        <GuideContent>
          <GuideCalendarLink href="https://calendar.google.com/calendar/r/settings/addbyurl" target="_blank">
            구글 캘린더 바로가기 🚀
          </GuideCalendarLink>
        </GuideContent>

        <GuideSubtitle>❸ 좌측 “다른 캘린더” + 버튼 메뉴에서 URL로 추가</GuideSubtitle>
        <GuideVideo controls>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/calendarguksu.appspot.com/o/calendar-google-guide.mp4?alt=media&token=9a9aa26a-9c29-4fbe-b612-e22fd30b7707"
            type="video/mp4"
          />
        </GuideVideo>
        <GuideSubtitle>❹ 복사한 링크 붙여넣기</GuideSubtitle>
      </GuideSection>
    </ContentInnerSection>
  );
};

export default GoogleCalendarGuide;
