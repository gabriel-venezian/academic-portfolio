import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  inline-size: 100%;
  block-size: fit-content;
  margin-block-end: 8rem;
  position: relative;
`;

export const AboutContainerDecorationBg = styled.section`
  block-size: fit-content;
  inline-size: 100%;
  background: linear-gradient(
    134deg,
    rgb(106, 152, 240) 0%,
    rgb(73, 97, 220) 99%
  );
  transform: skewY(-3deg);
  padding-block: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutWrapper = styled.section`
  max-inline-size: 116rem;
  margin-inline: auto;
  display: flex;
  align-items: center;
  column-gap: 8rem;
  block-size: fit-content;
  transform: skewY(3deg);

  @media (max-width: 1200px) {
    margin-inline: 2rem;
    max-inline-size: calc(100% - 4rem);
    column-gap: 4rem;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`;

export const AboutImage = styled.div`
  block-size: 20rem;
  inline-size: 20rem;
  min-inline-size: 20rem;
  display: flex;
  border-radius: 50%;
  border: 0.5rem solid #f8f8f8;
  overflow: hidden;

  img {
    block-size: 24rem;
  }
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
