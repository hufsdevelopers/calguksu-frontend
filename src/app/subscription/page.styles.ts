import styled from 'styled-components';
import { media } from '@/styles/ui.styles';

export const ContentSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ContentInnerSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 96px 24px 56px 24px;

  ${media.laptop`
   padding: 120px 24px;
  `}
`;

export const IntroduceButton = styled.span`
  padding: 9px 16px;
  color: #d8870d;
  border-radius: 100px;
  background-color: rgba(242, 153, 20, 0.1);

  font-size: 14px;
  font-weight: 600;

  ${media.laptop`
    padding: 12px 20px;
    font-size: 15px;
  `}
`;

export const CalendarTitle = styled.h3`
  margin-top: 32px;
  color: var(--calguksu-main-text);
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  word-break: keep-all;

  ${media.laptop`
   font-size: 50px;
  `}
`;

export const CalendarSubtitle = styled.p`
  margin-top: 15px;
  color: #62798c;
  font-size: 17px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
  word-break: keep-all;
  white-space: pre;

  &::after {
    content: '주문한 일정을 캘린더에 추가할 수 있는\\A링크를 생성했어요.\\A아래의 캘린더 앱에서 열기 버튼을\\A누르면 추가할 수 있어요.';
  }

  ${media.laptop`
      font-size: 19px;
      
      &::after {
        content: '주문한 일정을 캘린더에 추가할 수 있는 링크를 생성했어요.\\A아래의 캘린더 앱에서 열기 버튼을 누르면 추가할 수 있어요.';
      }
  `}
`;

export const ChangeCalendarButton = styled.button`
  margin-top: 16px;
  color: #62798c;
  font-size: 14px;
  font-weight: 500;
`;

export const GuideSection = styled.section`
  width: 100%;
  max-width: 576px;
  padding: 36px;
  margin-top: 80px;
  border-radius: 8px;
  background-color: #0a0d11;
`;

export const GuideTitle = styled.h3`
  color: #b5c7d7;
  font-size: 22px;
  font-weight: 600;
  word-break: keep-all;

  ${media.laptop`
    font-size: 24px;
  `}
`;

export const GuideSubtitle = styled.h4`
  margin-top: 32px;
  color: var(--calguksu-text-comment-normal);
  font-size: 17px;
  font-weight: 500;
  word-break: keep-all;

  ${media.laptop`
    font-size: 18px;
  `}
`;

export const GuideContent = styled.p`
  margin-top: 12px;
  margin-left: 22px;
  color: var(--calguksu-text-comment-normal);
  font-size: 15px;
  font-weight: 500;
  word-break: keep-all;

  ${media.laptop`
   font-size: 16px;
  `}
`;

export const GuideCopyLink = styled.p`
  margin-top: 8px;
  margin-left: 22px;
  color: var(--calguksu-text-comment-link);
  font-size: 16px;
  font-weight: 500;
  word-break: keep-all;
`;

export const GuideCalendarLink = styled.a`
  color: var(--calguksu-colors-blue-normal);
`;

export const GuideVideo = styled.video`
  margin-block: 22px;
  width: 100%;
  height: 240px;
`;
