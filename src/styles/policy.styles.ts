import styled from 'styled-components';

export const PolicyLayout = styled.div`
  width: 100%;
  max-width: 929px;
  padding: 96px 24px;
  margin: 0 auto;
`;

export const PolicyTitle = styled.h1`
  color: var(--calguksu-button-navigation-text-color);
  font-size: 32px;
  font-weight: 600;
`;

export const PolicyContent = styled.div`
  color: var(--calguksu-button-navigation-text-color);
  font-size: 16px;
  line-height: 30px;

  & strong {
    font-weight: 600;
  }

  & a {
    color: var(--calguksu-colors-gray-600);
    text-decoration: underline;
  }

  & li {
    text-indent: -22px;
    padding-left: 28px;
  }
`;