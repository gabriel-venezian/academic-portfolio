import styled from 'styled-components';

export const FooterComponent = styled.footer`
  inline-size: 100%;
  block-size: 8rem;
  background: ${(props) => props.theme.footerBg};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    block-size: 100%;
    max-inline-size: 116rem;
    margin-inline: auto;

    p {
      font-size: 1.8rem;
      line-height: 2.4rem;
      font-weight: 700;
      color: #f8f8f8;
    }
  }
`;
