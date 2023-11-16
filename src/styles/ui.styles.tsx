import styled from 'styled-components';

const sizes: { [key: string]: number } = {
  mobile: 764,
  laptop: 1024,
};

export const media = Object.keys(sizes).reduce((acc: { [key: string]: Function }, label: string) => {
  acc[label] = (styles: TemplateStringsArray) => `
    @media (min-width: ${sizes[label]}px) {
      ${styles}
    }
  `;
  return acc;
}, {});


export const GradientOval = styled.div`
  background: var(--calguksu-main-gradient);
  border-radius: 2387px;
  filter: blur(100px);
  height: 100%;
  left: -10%;
  opacity: 0.3;
  position: fixed;
  top: -50%;
  width: 120%;
`;

export const SectionInnerContainer = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  padding: 134px 0 40px 0;

  ${media.laptop`
   padding: 118px 0 40px 0;
  `}
`;

export const SectionContentColumn = styled.div`
  display: flex;
  width: 100%;
  max-width: 393px;
  padding: 0 24px;
  flex-direction: column;
  gap: 31px;
`;

export const SectionContentTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & p {
    color: var(--calguksu-main-text);
    font-size: 24px;
    font-weight: 500;
  }
`;

export const SectionComment = styled.p`
  color: var(--calguksu-text-comment-normal);
  font-size: 13px;
  font-weight: 500;
  margin-top: -10px;
  text-align: center;
  word-break: keep-all;
`;

export const SectionCommentHighlight = styled.span`
  color: var(--calguksu-text-comment-link);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
`;