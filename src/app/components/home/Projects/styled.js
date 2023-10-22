import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  max-inline-size: 116rem;
  margin-block-end: 8rem;
  margin-inline: auto;
`;

export const ProjectWrapper = styled.div`
  padding-block: 4rem;
  padding-inline: 4rem;
  block-size: 48.2rem;
  inline-size: 80rem;
  border-radius: 0.5rem;
  box-shadow: -0.1rem 0.1rem 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  background: ${(props) => props.theme.projectBg};
  position: relative;
`;

export const ProjectInfo = styled.div`
  inline-size: 50.5rem;

  h2.title {
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;
    letter-spacing: 0.012rem;
    margin-block-end: 2rem;
  }

  p {
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 400;

    &:nth-child(3) {
      margin-block-start: 0.8rem;
      margin-block-end: 2rem;
    }
  }
`;

export const ProjectCTAs = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.6rem;
`;

export const ProjectPreview = styled.div`
  position: absolute;
  block-size: 40.2rem;
  inline-size: 56rem;
  inset-block-start: 4rem;
  inset-inline-end: -35.9rem;

  img {
    border-radius: 0.5rem;
    ${(props) => props.theme.light && 'border: .1rem solid #E5E5E5;'}
    margin-block-end: 1.6rem;
  }
`;

export const ProjectStack = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 1.6rem;
`;
