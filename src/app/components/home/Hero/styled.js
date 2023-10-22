import styled from 'styled-components';

export const HeroContainer = styled.div`
  inline-size: 100%;
  block-size: 60rem;
  position: relative;
  margin-block: 8rem;
  position: relative;

  & > img {
    position: absolute;
    inset-inline-end: 0;
  }
`;

export const HeroContent = styled.div`
  padding-block-start: 20rem;
  max-inline-size: 116rem;
  block-size: 3rem;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
`;

export const HeroInformation = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
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
`;

export const HeroDecorationPalette = styled.div`
  position: absolute;
  inset-inline-start: -6rem;
  inset-block-end: -3.7rem;
`;
