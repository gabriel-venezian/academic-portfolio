import styled from 'styled-components';

export const HeroContainer = styled.div`
  inline-size: 100%;
  block-size: 52rem;
  position: relative;
  margin-block: 8rem;

  & > img {
    position: absolute;
    inset-inline-end: 0;
    z-index: -1;
  }

  @media (max-width: 1200px) {
    block-size: 70rem;
  }

  @media (max-width: 550px) {
    block-size: 72rem;
  }

  @media (max-width: 435px) {
    block-size: 77rem;
  }

  @media (max-width: 372px) {
    block-size: 72rem;
  }

  @media (max-width: 340px) {
    block-size: 75rem;
  }
`;

export const HeroContent = styled.div`
  padding-block-start: 20rem;
  max-inline-size: 116rem;
  block-size: 3rem;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    margin-inline: 2rem;
    max-inline-size: calc(100% - 4rem);
    flex-direction: column;
  }
`;

export const HeroInformation = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  @media (max-width: 1200px) {
    text-align: center;
    align-items: center;
  }
`;

export const HeroInformationWrapper = styled.div`
  p {
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: 400;
  }

  h1 {
    font-size: 4rem;
    line-height: 5.2rem;
    font-weight: 700;
    letter-spacing: 0.02rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: 400;
  }
`;

export const HeroDecoration = styled.div`
  position: relative;
  inline-size: 50rem;
  block-size: 26.8rem;
  padding-inline: 4rem;
  padding-block: 4rem;
  border-radius: 0.5rem;
  box-shadow: -0.1rem 0.1rem 0.5rem 0rem rgba(0, 0, 0, 0.1);
  background: ${(props) => props.theme.heroDecorationBg};

  @media (max-width: 1200px) {
    inline-size: 100%;
    max-inline-size: 39.584rem;
    padding-inline: 1rem;
    padding-block: 1rem;
    margin-block-start: 2rem;
    margin-inline: auto;
  }
`;

export const HeroDecorationClass = styled.div`
  font-family: 'Fira Code', 'Arial', sans-serif;
  ${(props) => props.theme.light && 'color: #6D83F2;'};
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;

  @media (max-width: 600px) {
    letter-spacing: -0.02rem;
  }

  @media (max-width: 428px) {
    letter-spacing: -0.14rem;
  }

  @media (max-width: 372px) {
    row-gap: 0;
    font-size: 1rem;
    letter-spacing: -0.02rem;
  }

  @media (max-width: 319px) {
    letter-spacing: -0.1rem;
  }
`;

export const HeroDecorationPalette = styled.div`
  position: absolute;
  inset-inline-start: -6rem;
  inset-block-end: -3.7rem;

  @media (max-width: 550px) {
    max-inline-size: 22rem;
    inset-inline: 0;
    margin-inline: auto;
    inset-block-end: -5.5rem;
  }
`;
