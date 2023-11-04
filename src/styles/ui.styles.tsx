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
  background: radial-gradient(52.22% 52.22% at 49.98% 47.78%, #2A7CE8 0%, rgba(42, 124, 232, 0.00) 100%);
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
  overflow-y: auto;
  padding: 134px 0 40px 0;

  ${media.laptop`
   padding: 118px 0 40px 0;
  `}
`;
