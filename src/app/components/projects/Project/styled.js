import styled from 'styled-components';

export const ProjectContainer = styled.div`
  margin-block-start: 16rem;
  margin-block-end: 8rem;
  max-inline-size: 116rem;
  margin-inline: auto;

  img {
    border-radius: 0.5rem;
    ${(props) => props.theme.light && 'border: .1rem solid #E5E5E5;'}
  }

  @media (max-width: 1200px) {
    margin-inline: 2rem;
    max-inline-size: calc(100% - 4rem);
  }
`;

export const ProjectHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 4rem;

  h1 {
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 4.2rem;
    letter-spacing: 0.0016rem;
  }

  .links {
    display: flex;
    column-gap: 2rem;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  row-gap: 2rem;
  column-gap: 4rem;
  margin-block-end: 2rem;

  @media (max-width: 1020px) {
    flex-direction: column;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  max-inline-size: 66rem;

  p,
  li {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.8rem;
  }

  @media (max-width: 1020px) {
    max-inline-size: 100%;
  }
`;

export const ProjectSection = styled.div`
  p + p {
    margin-block-start: 0.8rem;
  }

  ul {
    margin-inline-start: 2rem;
    list-style: disc;
  }

  .functionality-list + .functionality-list {
    margin-block-start: 2rem;
  }
`;

export const ProjectSectionTitle = styled.h2`
  color: #6a98f0;
  margin-block-end: 2rem;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.4rem;
  position: relative;
  overflow: hidden;

  &::after {
    position: absolute;
    content: '';
    margin-inline-start: 1.2rem;
    inline-size: 100%;
    block-size: 0.1rem;
    background: #6a98f0;
    inset-block-start: 1.2rem;
  }
`;

export const ProjectStack = styled.ul`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  list-style: none !important;
  margin-inline-start: 0 !important;
`;

export const ProjectPreview = styled.div`
  margin-block-start: 1.2rem;

  img + img {
    margin-block-start: 4rem;
  }

  @media (min-width: 1024px) {
    min-inline-size: 46rem;
  }

  @media (max-width: 1020px) {
    margin-block-start: 0;

    img {
      margin-inline: auto;
    }

    img + img {
      margin-block-start: 2rem;
    }
  }
`;

export const ProjectNavigation = styled.div`
  display: flex;
  column-gap: 4rem;

  .navigationItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;

    h4 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.8rem;
    }
  }

  @media (max-width: 1020px) {
    flex-direction: column;

    .navigationItem + .navigationItem {
      margin-block-start: 2rem;
    }
  }
`;
