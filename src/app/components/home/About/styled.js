import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  inline-size: 100%;
  block-size: 47.8rem;
  margin-block-end: 8rem;
  position: relative;
`;

export const AboutContainerDecorationBg = styled.div`
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  z-index: -1;
  pointer-events: none;
  inline-size: 100%;
  block-size: 100%;
  background: linear-gradient(
    134deg,
    rgb(106, 152, 240) 0%,
    rgb(73, 97, 220) 99%
  );

  @media (max-width: 1440px) {
    background: url('./home/about/about-bg.svg');
  }
`;

export const AboutWrapper = styled.section`
  inline-size: 116rem;
  block-size: fit-content;
  margin-inline: auto;
  display: flex;
  align-items: center;
  column-gap: 10rem;
`;

export const AboutImage = styled.div`
  block-size: 20rem;
  inline-size: 20rem;
  min-inline-size: 20rem;
  display: flex;
  border-radius: 50%;
  border: 0.5rem solid #f8f8f8;
  overflow: hidden;
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;

  p {
    color: #f8f8f8;
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 400;
  }
`;
