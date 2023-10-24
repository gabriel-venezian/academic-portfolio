import styled from 'styled-components';

export const ExperienceContainer = styled.section`
  max-inline-size: 116rem;
  margin-inline: auto;
  margin-block-end: 8rem;
  display: flex;
  column-gap: 12rem;
`;

export const ExperienceSection = styled.section`
  inline-size: 100%;
`;

export const ExperienceSectionTitle = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  line-height: 2.4rem;
  letter-spacing: 0.1rem;

  &.stack {
    margin-block-start: 3.2rem;
    margin-block-end: 2rem;
    padding-block-end: 1.2rem;
    border-block-end: 0.1rem solid
      ${(props) => props.theme.experienceBorderColor};
  }
`;

export const ExperienceSectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;

  h2,
  h3 {
    font-size: 2rem;
    line-height: 2.4rem;
  }

  h2 {
    font-weight: 700;
    letter-spacing: 0.01rem;
    margin-block-start: 1.2rem;
    padding-block-start: 1.2rem;
    border-block-start: 0.1rem solid
      ${(props) => props.theme.experienceBorderColor};
  }

  h3 {
    font-weight: 400;
  }

  h4,
  p {
    font-size: 1.6rem;
    line-height: 2rem;
  }

  h4 {
    font-weight: 300;
  }

  p {
    font-weight: 400;
  }
`;

export const ExperienceSectionStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
